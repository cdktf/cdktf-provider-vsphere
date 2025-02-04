# `nasDatastore` Submodule <a name="`nasDatastore` Submodule" id="@cdktf/provider-vsphere.nasDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NasDatastore <a name="NasDatastore" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/nas_datastore vsphere_nas_datastore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer"></a>

```typescript
import { nasDatastore } from '@cdktf/provider-vsphere'

new nasDatastore.NasDatastore(scope: Construct, id: string, config: NasDatastoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig">NasDatastoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig">NasDatastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetAccessMode">resetAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetDatastoreClusterId">resetDatastoreClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetSecurityType">resetSecurityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessMode` <a name="resetAccessMode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetAccessMode"></a>

```typescript
public resetAccessMode(): void
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetCustomAttributes"></a>

```typescript
public resetCustomAttributes(): void
```

##### `resetDatastoreClusterId` <a name="resetDatastoreClusterId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetDatastoreClusterId"></a>

```typescript
public resetDatastoreClusterId(): void
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetFolder"></a>

```typescript
public resetFolder(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSecurityType` <a name="resetSecurityType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetSecurityType"></a>

```typescript
public resetSecurityType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NasDatastore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isConstruct"></a>

```typescript
import { nasDatastore } from '@cdktf/provider-vsphere'

nasDatastore.NasDatastore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformElement"></a>

```typescript
import { nasDatastore } from '@cdktf/provider-vsphere'

nasDatastore.NasDatastore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformResource"></a>

```typescript
import { nasDatastore } from '@cdktf/provider-vsphere'

nasDatastore.NasDatastore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.generateConfigForImport"></a>

```typescript
import { nasDatastore } from '@cdktf/provider-vsphere'

nasDatastore.NasDatastore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NasDatastore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NasDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NasDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/nas_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NasDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessible">accessible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.freeSpace">freeSpace</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.maintenanceMode">maintenanceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.multipleHostAccess">multipleHostAccess</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.protocolEndpoint">protocolEndpoint</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.uncommittedSpace">uncommittedSpace</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessModeInput">accessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.customAttributesInput">customAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.datastoreClusterIdInput">datastoreClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.hostSystemIdsInput">hostSystemIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remoteHostsInput">remoteHostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remotePathInput">remotePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.securityTypeInput">securityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessMode">accessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.datastoreClusterId">datastoreClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.hostSystemIds">hostSystemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remoteHosts">remoteHosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remotePath">remotePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.securityType">securityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessible`<sup>Required</sup> <a name="accessible" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessible"></a>

```typescript
public readonly accessible: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `freeSpace`<sup>Required</sup> <a name="freeSpace" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.freeSpace"></a>

```typescript
public readonly freeSpace: number;
```

- *Type:* number

---

##### `maintenanceMode`<sup>Required</sup> <a name="maintenanceMode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.maintenanceMode"></a>

```typescript
public readonly maintenanceMode: string;
```

- *Type:* string

---

##### `multipleHostAccess`<sup>Required</sup> <a name="multipleHostAccess" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.multipleHostAccess"></a>

```typescript
public readonly multipleHostAccess: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `protocolEndpoint`<sup>Required</sup> <a name="protocolEndpoint" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.protocolEndpoint"></a>

```typescript
public readonly protocolEndpoint: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `uncommittedSpace`<sup>Required</sup> <a name="uncommittedSpace" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.uncommittedSpace"></a>

```typescript
public readonly uncommittedSpace: number;
```

- *Type:* number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `accessModeInput`<sup>Optional</sup> <a name="accessModeInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessModeInput"></a>

```typescript
public readonly accessModeInput: string;
```

- *Type:* string

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.customAttributesInput"></a>

```typescript
public readonly customAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `datastoreClusterIdInput`<sup>Optional</sup> <a name="datastoreClusterIdInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.datastoreClusterIdInput"></a>

```typescript
public readonly datastoreClusterIdInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `hostSystemIdsInput`<sup>Optional</sup> <a name="hostSystemIdsInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.hostSystemIdsInput"></a>

```typescript
public readonly hostSystemIdsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `remoteHostsInput`<sup>Optional</sup> <a name="remoteHostsInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remoteHostsInput"></a>

```typescript
public readonly remoteHostsInput: string[];
```

- *Type:* string[]

---

##### `remotePathInput`<sup>Optional</sup> <a name="remotePathInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remotePathInput"></a>

```typescript
public readonly remotePathInput: string;
```

- *Type:* string

---

##### `securityTypeInput`<sup>Optional</sup> <a name="securityTypeInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.securityTypeInput"></a>

```typescript
public readonly securityTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessMode"></a>

```typescript
public readonly accessMode: string;
```

- *Type:* string

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `datastoreClusterId`<sup>Required</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.datastoreClusterId"></a>

```typescript
public readonly datastoreClusterId: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `hostSystemIds`<sup>Required</sup> <a name="hostSystemIds" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.hostSystemIds"></a>

```typescript
public readonly hostSystemIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `remoteHosts`<sup>Required</sup> <a name="remoteHosts" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remoteHosts"></a>

```typescript
public readonly remoteHosts: string[];
```

- *Type:* string[]

---

##### `remotePath`<sup>Required</sup> <a name="remotePath" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remotePath"></a>

```typescript
public readonly remotePath: string;
```

- *Type:* string

---

##### `securityType`<sup>Required</sup> <a name="securityType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.securityType"></a>

```typescript
public readonly securityType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NasDatastoreConfig <a name="NasDatastoreConfig" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.Initializer"></a>

```typescript
import { nasDatastore } from '@cdktf/provider-vsphere'

const nasDatastoreConfig: nasDatastore.NasDatastoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.hostSystemIds">hostSystemIds</a></code> | <code>string[]</code> | The managed object IDs of the hosts to mount the datastore on. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.name">name</a></code> | <code>string</code> | The name of the datastore. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.remoteHosts">remoteHosts</a></code> | <code>string[]</code> | The hostnames or IP addresses of the remote server or servers. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.remotePath">remotePath</a></code> | <code>string</code> | The remote path of the mount point. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.accessMode">accessMode</a></code> | <code>string</code> | Access mode for the mount point. Can be one of readOnly or readWrite. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.datastoreClusterId">datastoreClusterId</a></code> | <code>string</code> | The managed object ID of the datastore cluster to place the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.folder">folder</a></code> | <code>string</code> | The path to the datastore folder to put the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/nas_datastore#id NasDatastore#id}. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.securityType">securityType</a></code> | <code>string</code> | The security type to use. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.type">type</a></code> | <code>string</code> | The type of NAS volume. Can be one of NFS (to denote v3) or NFS41 (to denote NFS v4.1). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostSystemIds`<sup>Required</sup> <a name="hostSystemIds" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.hostSystemIds"></a>

```typescript
public readonly hostSystemIds: string[];
```

- *Type:* string[]

The managed object IDs of the hosts to mount the datastore on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/nas_datastore#host_system_ids NasDatastore#host_system_ids}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/nas_datastore#name NasDatastore#name}

---

##### `remoteHosts`<sup>Required</sup> <a name="remoteHosts" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.remoteHosts"></a>

```typescript
public readonly remoteHosts: string[];
```

- *Type:* string[]

The hostnames or IP addresses of the remote server or servers.

Only one element should be present for NFS v3 but multiple can be present for NFS v4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/nas_datastore#remote_hosts NasDatastore#remote_hosts}

---

##### `remotePath`<sup>Required</sup> <a name="remotePath" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.remotePath"></a>

```typescript
public readonly remotePath: string;
```

- *Type:* string

The remote path of the mount point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/nas_datastore#remote_path NasDatastore#remote_path}

---

##### `accessMode`<sup>Optional</sup> <a name="accessMode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.accessMode"></a>

```typescript
public readonly accessMode: string;
```

- *Type:* string

Access mode for the mount point. Can be one of readOnly or readWrite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/nas_datastore#access_mode NasDatastore#access_mode}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/nas_datastore#custom_attributes NasDatastore#custom_attributes}

---

##### `datastoreClusterId`<sup>Optional</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.datastoreClusterId"></a>

```typescript
public readonly datastoreClusterId: string;
```

- *Type:* string

The managed object ID of the datastore cluster to place the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/nas_datastore#datastore_cluster_id NasDatastore#datastore_cluster_id}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The path to the datastore folder to put the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/nas_datastore#folder NasDatastore#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/nas_datastore#id NasDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securityType`<sup>Optional</sup> <a name="securityType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.securityType"></a>

```typescript
public readonly securityType: string;
```

- *Type:* string

The security type to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/nas_datastore#security_type NasDatastore#security_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/nas_datastore#tags NasDatastore#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of NAS volume. Can be one of NFS (to denote v3) or NFS41 (to denote NFS v4.1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/nas_datastore#type NasDatastore#type}

---



