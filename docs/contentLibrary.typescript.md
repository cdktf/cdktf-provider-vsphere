# `contentLibrary` Submodule <a name="`contentLibrary` Submodule" id="@cdktf/provider-vsphere.contentLibrary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContentLibrary <a name="ContentLibrary" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library vsphere_content_library}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer"></a>

```typescript
import { contentLibrary } from '@cdktf/provider-vsphere'

new contentLibrary.ContentLibrary(scope: Construct, id: string, config: ContentLibraryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig">ContentLibraryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig">ContentLibraryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication">putPublication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription">putSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetPublication">resetPublication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetSubscription">resetSubscription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPublication` <a name="putPublication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication"></a>

```typescript
public putPublication(value: ContentLibraryPublication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

---

##### `putSubscription` <a name="putSubscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription"></a>

```typescript
public putSubscription(value: ContentLibrarySubscription): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPublication` <a name="resetPublication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetPublication"></a>

```typescript
public resetPublication(): void
```

##### `resetSubscription` <a name="resetSubscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetSubscription"></a>

```typescript
public resetSubscription(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContentLibrary resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isConstruct"></a>

```typescript
import { contentLibrary } from '@cdktf/provider-vsphere'

contentLibrary.ContentLibrary.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformElement"></a>

```typescript
import { contentLibrary } from '@cdktf/provider-vsphere'

contentLibrary.ContentLibrary.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformResource"></a>

```typescript
import { contentLibrary } from '@cdktf/provider-vsphere'

contentLibrary.ContentLibrary.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport"></a>

```typescript
import { contentLibrary } from '@cdktf/provider-vsphere'

contentLibrary.ContentLibrary.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContentLibrary resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContentLibrary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContentLibrary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContentLibrary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publication">publication</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference">ContentLibraryPublicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscription">subscription</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference">ContentLibrarySubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publicationInput">publicationInput</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBackingInput">storageBackingInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscriptionInput">subscriptionInput</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBacking">storageBacking</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `publication`<sup>Required</sup> <a name="publication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publication"></a>

```typescript
public readonly publication: ContentLibraryPublicationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference">ContentLibraryPublicationOutputReference</a>

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscription"></a>

```typescript
public readonly subscription: ContentLibrarySubscriptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference">ContentLibrarySubscriptionOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicationInput`<sup>Optional</sup> <a name="publicationInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publicationInput"></a>

```typescript
public readonly publicationInput: ContentLibraryPublication;
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

---

##### `storageBackingInput`<sup>Optional</sup> <a name="storageBackingInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBackingInput"></a>

```typescript
public readonly storageBackingInput: string[];
```

- *Type:* string[]

---

##### `subscriptionInput`<sup>Optional</sup> <a name="subscriptionInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscriptionInput"></a>

```typescript
public readonly subscriptionInput: ContentLibrarySubscription;
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageBacking`<sup>Required</sup> <a name="storageBacking" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBacking"></a>

```typescript
public readonly storageBacking: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContentLibraryConfig <a name="ContentLibraryConfig" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.Initializer"></a>

```typescript
import { contentLibrary } from '@cdktf/provider-vsphere'

const contentLibraryConfig: contentLibrary.ContentLibraryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.name">name</a></code> | <code>string</code> | The name of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.storageBacking">storageBacking</a></code> | <code>string[]</code> | The name of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.description">description</a></code> | <code>string</code> | Optional description of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#id ContentLibrary#id}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.publication">publication</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a></code> | publication block. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.subscription">subscription</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a></code> | subscription block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#name ContentLibrary#name}

---

##### `storageBacking`<sup>Required</sup> <a name="storageBacking" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.storageBacking"></a>

```typescript
public readonly storageBacking: string[];
```

- *Type:* string[]

The name of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#storage_backing ContentLibrary#storage_backing}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional description of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#description ContentLibrary#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#id ContentLibrary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publication`<sup>Optional</sup> <a name="publication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.publication"></a>

```typescript
public readonly publication: ContentLibraryPublication;
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

publication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#publication ContentLibrary#publication}

---

##### `subscription`<sup>Optional</sup> <a name="subscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.subscription"></a>

```typescript
public readonly subscription: ContentLibrarySubscription;
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#subscription ContentLibrary#subscription}

---

### ContentLibraryPublication <a name="ContentLibraryPublication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.Initializer"></a>

```typescript
import { contentLibrary } from '@cdktf/provider-vsphere'

const contentLibraryPublication: contentLibrary.ContentLibraryPublication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.authenticationMethod">authenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#password ContentLibrary#password}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.published">published</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#published ContentLibrary#published}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#username ContentLibrary#username}. |

---

##### `authenticationMethod`<sup>Optional</sup> <a name="authenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.authenticationMethod"></a>

```typescript
public readonly authenticationMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#password ContentLibrary#password}.

---

##### `published`<sup>Optional</sup> <a name="published" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.published"></a>

```typescript
public readonly published: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#published ContentLibrary#published}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#username ContentLibrary#username}.

---

### ContentLibrarySubscription <a name="ContentLibrarySubscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.Initializer"></a>

```typescript
import { contentLibrary } from '@cdktf/provider-vsphere'

const contentLibrarySubscription: contentLibrary.ContentLibrarySubscription = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.authenticationMethod">authenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.automaticSync">automaticSync</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#automatic_sync ContentLibrary#automatic_sync}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.onDemand">onDemand</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#on_demand ContentLibrary#on_demand}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#password ContentLibrary#password}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.subscriptionUrl">subscriptionUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#subscription_url ContentLibrary#subscription_url}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#username ContentLibrary#username}. |

---

##### `authenticationMethod`<sup>Optional</sup> <a name="authenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.authenticationMethod"></a>

```typescript
public readonly authenticationMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}.

---

##### `automaticSync`<sup>Optional</sup> <a name="automaticSync" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.automaticSync"></a>

```typescript
public readonly automaticSync: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#automatic_sync ContentLibrary#automatic_sync}.

---

##### `onDemand`<sup>Optional</sup> <a name="onDemand" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.onDemand"></a>

```typescript
public readonly onDemand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#on_demand ContentLibrary#on_demand}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#password ContentLibrary#password}.

---

##### `subscriptionUrl`<sup>Optional</sup> <a name="subscriptionUrl" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.subscriptionUrl"></a>

```typescript
public readonly subscriptionUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#subscription_url ContentLibrary#subscription_url}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/content_library#username ContentLibrary#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContentLibraryPublicationOutputReference <a name="ContentLibraryPublicationOutputReference" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer"></a>

```typescript
import { contentLibrary } from '@cdktf/provider-vsphere'

new contentLibrary.ContentLibraryPublicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetAuthenticationMethod">resetAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPublished">resetPublished</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationMethod` <a name="resetAuthenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetAuthenticationMethod"></a>

```typescript
public resetAuthenticationMethod(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPublished` <a name="resetPublished" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPublished"></a>

```typescript
public resetPublished(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishUrl">publishUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethodInput">authenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishedInput">publishedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethod">authenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.published">published</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publishUrl`<sup>Required</sup> <a name="publishUrl" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishUrl"></a>

```typescript
public readonly publishUrl: string;
```

- *Type:* string

---

##### `authenticationMethodInput`<sup>Optional</sup> <a name="authenticationMethodInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethodInput"></a>

```typescript
public readonly authenticationMethodInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `publishedInput`<sup>Optional</sup> <a name="publishedInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishedInput"></a>

```typescript
public readonly publishedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethod"></a>

```typescript
public readonly authenticationMethod: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.published"></a>

```typescript
public readonly published: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContentLibraryPublication;
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

---


### ContentLibrarySubscriptionOutputReference <a name="ContentLibrarySubscriptionOutputReference" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer"></a>

```typescript
import { contentLibrary } from '@cdktf/provider-vsphere'

new contentLibrary.ContentLibrarySubscriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAuthenticationMethod">resetAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAutomaticSync">resetAutomaticSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetOnDemand">resetOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetSubscriptionUrl">resetSubscriptionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationMethod` <a name="resetAuthenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAuthenticationMethod"></a>

```typescript
public resetAuthenticationMethod(): void
```

##### `resetAutomaticSync` <a name="resetAutomaticSync" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAutomaticSync"></a>

```typescript
public resetAutomaticSync(): void
```

##### `resetOnDemand` <a name="resetOnDemand" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetOnDemand"></a>

```typescript
public resetOnDemand(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetSubscriptionUrl` <a name="resetSubscriptionUrl" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetSubscriptionUrl"></a>

```typescript
public resetSubscriptionUrl(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethodInput">authenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSyncInput">automaticSyncInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemandInput">onDemandInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrlInput">subscriptionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethod">authenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSync">automaticSync</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemand">onDemand</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrl">subscriptionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationMethodInput`<sup>Optional</sup> <a name="authenticationMethodInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethodInput"></a>

```typescript
public readonly authenticationMethodInput: string;
```

- *Type:* string

---

##### `automaticSyncInput`<sup>Optional</sup> <a name="automaticSyncInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSyncInput"></a>

```typescript
public readonly automaticSyncInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onDemandInput`<sup>Optional</sup> <a name="onDemandInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemandInput"></a>

```typescript
public readonly onDemandInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `subscriptionUrlInput`<sup>Optional</sup> <a name="subscriptionUrlInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrlInput"></a>

```typescript
public readonly subscriptionUrlInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethod"></a>

```typescript
public readonly authenticationMethod: string;
```

- *Type:* string

---

##### `automaticSync`<sup>Required</sup> <a name="automaticSync" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSync"></a>

```typescript
public readonly automaticSync: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onDemand`<sup>Required</sup> <a name="onDemand" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemand"></a>

```typescript
public readonly onDemand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `subscriptionUrl`<sup>Required</sup> <a name="subscriptionUrl" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrl"></a>

```typescript
public readonly subscriptionUrl: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContentLibrarySubscription;
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

---



