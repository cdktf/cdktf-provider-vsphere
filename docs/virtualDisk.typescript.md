# `virtualDisk` Submodule <a name="`virtualDisk` Submodule" id="@cdktf/provider-vsphere.virtualDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDisk <a name="VirtualDisk" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk vsphere_virtual_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer"></a>

```typescript
import { virtualDisk } from '@cdktf/provider-vsphere'

new virtualDisk.VirtualDisk(scope: Construct, id: string, config: VirtualDiskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig">VirtualDiskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig">VirtualDiskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetAdapterType">resetAdapterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetCreateDirectories">resetCreateDirectories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAdapterType` <a name="resetAdapterType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetAdapterType"></a>

```typescript
public resetAdapterType(): void
```

##### `resetCreateDirectories` <a name="resetCreateDirectories" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetCreateDirectories"></a>

```typescript
public resetCreateDirectories(): void
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetDatacenter"></a>

```typescript
public resetDatacenter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetId"></a>

```typescript
public resetId(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualDisk resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isConstruct"></a>

```typescript
import { virtualDisk } from '@cdktf/provider-vsphere'

virtualDisk.VirtualDisk.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformElement"></a>

```typescript
import { virtualDisk } from '@cdktf/provider-vsphere'

virtualDisk.VirtualDisk.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformResource"></a>

```typescript
import { virtualDisk } from '@cdktf/provider-vsphere'

virtualDisk.VirtualDisk.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport"></a>

```typescript
import { virtualDisk } from '@cdktf/provider-vsphere'

virtualDisk.VirtualDisk.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VirtualDisk resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualDisk to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualDisk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualDisk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterTypeInput">adapterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectoriesInput">createDirectoriesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastoreInput">datastoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPathInput">vmdkPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterType">adapterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectories">createDirectories</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastore">datastore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPath">vmdkPath</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adapterTypeInput`<sup>Optional</sup> <a name="adapterTypeInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterTypeInput"></a>

```typescript
public readonly adapterTypeInput: string;
```

- *Type:* string

---

##### `createDirectoriesInput`<sup>Optional</sup> <a name="createDirectoriesInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectoriesInput"></a>

```typescript
public readonly createDirectoriesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `datastoreInput`<sup>Optional</sup> <a name="datastoreInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastoreInput"></a>

```typescript
public readonly datastoreInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vmdkPathInput`<sup>Optional</sup> <a name="vmdkPathInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPathInput"></a>

```typescript
public readonly vmdkPathInput: string;
```

- *Type:* string

---

##### `adapterType`<sup>Required</sup> <a name="adapterType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterType"></a>

```typescript
public readonly adapterType: string;
```

- *Type:* string

---

##### `createDirectories`<sup>Required</sup> <a name="createDirectories" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectories"></a>

```typescript
public readonly createDirectories: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastore"></a>

```typescript
public readonly datastore: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vmdkPath`<sup>Required</sup> <a name="vmdkPath" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPath"></a>

```typescript
public readonly vmdkPath: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDiskConfig <a name="VirtualDiskConfig" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.Initializer"></a>

```typescript
import { virtualDisk } from '@cdktf/provider-vsphere'

const virtualDiskConfig: virtualDisk.VirtualDiskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datastore">datastore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk#datastore VirtualDisk#datastore}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk#size VirtualDisk#size}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.vmdkPath">vmdkPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk#vmdk_path VirtualDisk#vmdk_path}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.adapterType">adapterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk#adapter_type VirtualDisk#adapter_type}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.createDirectories">createDirectories</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk#create_directories VirtualDisk#create_directories}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datacenter">datacenter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk#datacenter VirtualDisk#datacenter}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk#id VirtualDisk#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk#type VirtualDisk#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datastore"></a>

```typescript
public readonly datastore: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk#datastore VirtualDisk#datastore}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk#size VirtualDisk#size}.

---

##### `vmdkPath`<sup>Required</sup> <a name="vmdkPath" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.vmdkPath"></a>

```typescript
public readonly vmdkPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk#vmdk_path VirtualDisk#vmdk_path}.

---

##### `adapterType`<sup>Optional</sup> <a name="adapterType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.adapterType"></a>

```typescript
public readonly adapterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk#adapter_type VirtualDisk#adapter_type}.

---

##### `createDirectories`<sup>Optional</sup> <a name="createDirectories" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.createDirectories"></a>

```typescript
public readonly createDirectories: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk#create_directories VirtualDisk#create_directories}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk#datacenter VirtualDisk#datacenter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk#id VirtualDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/virtual_disk#type VirtualDisk#type}.

---



