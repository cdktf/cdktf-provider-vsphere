# `entityPermissions` Submodule <a name="`entityPermissions` Submodule" id="@cdktf/provider-vsphere.entityPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityPermissions <a name="EntityPermissions" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/entity_permissions vsphere_entity_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer"></a>

```typescript
import { entityPermissions } from '@cdktf/provider-vsphere'

new entityPermissions.EntityPermissions(scope: Construct, id: string, config: EntityPermissionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig">EntityPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig">EntityPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPermissions` <a name="putPermissions" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.putPermissions"></a>

```typescript
public putPermissions(value: IResolvable | EntityPermissionsPermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.putPermissions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EntityPermissions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isConstruct"></a>

```typescript
import { entityPermissions } from '@cdktf/provider-vsphere'

entityPermissions.EntityPermissions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isTerraformElement"></a>

```typescript
import { entityPermissions } from '@cdktf/provider-vsphere'

entityPermissions.EntityPermissions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isTerraformResource"></a>

```typescript
import { entityPermissions } from '@cdktf/provider-vsphere'

entityPermissions.EntityPermissions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.generateConfigForImport"></a>

```typescript
import { entityPermissions } from '@cdktf/provider-vsphere'

entityPermissions.EntityPermissions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EntityPermissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EntityPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EntityPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/entity_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EntityPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList">EntityPermissionsPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.entityTypeInput">entityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.permissionsInput">permissionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.permissions"></a>

```typescript
public readonly permissions: EntityPermissionsPermissionsList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList">EntityPermissionsPermissionsList</a>

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.entityTypeInput"></a>

```typescript
public readonly entityTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: IResolvable | EntityPermissionsPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>[]

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EntityPermissionsConfig <a name="EntityPermissionsConfig" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.Initializer"></a>

```typescript
import { entityPermissions } from '@cdktf/provider-vsphere'

const entityPermissionsConfig: entityPermissions.EntityPermissionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.entityId">entityId</a></code> | <code>string</code> | The managed object id or uuid of the entity. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.entityType">entityType</a></code> | <code>string</code> | The entity managed object type. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.permissions">permissions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>[]</code> | permissions block. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/entity_permissions#id EntityPermissions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

The managed object id or uuid of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/entity_permissions#entity_id EntityPermissions#entity_id}

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

The entity managed object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/entity_permissions#entity_type EntityPermissions#entity_type}

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.permissions"></a>

```typescript
public readonly permissions: IResolvable | EntityPermissionsPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>[]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/entity_permissions#permissions EntityPermissions#permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/entity_permissions#id EntityPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EntityPermissionsPermissions <a name="EntityPermissionsPermissions" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.Initializer"></a>

```typescript
import { entityPermissions } from '@cdktf/provider-vsphere'

const entityPermissionsPermissions: entityPermissions.EntityPermissionsPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.property.isGroup">isGroup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether user_or_group field refers to a user or a group. True for a group and false for a user. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.property.propagate">propagate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not this permission propagates down the hierarchy to sub-entities. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.property.roleId">roleId</a></code> | <code>string</code> | Reference to the role providing the access. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.property.userOrGroup">userOrGroup</a></code> | <code>string</code> | User or group receiving access. |

---

##### `isGroup`<sup>Required</sup> <a name="isGroup" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.property.isGroup"></a>

```typescript
public readonly isGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether user_or_group field refers to a user or a group. True for a group and false for a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/entity_permissions#is_group EntityPermissions#is_group}

---

##### `propagate`<sup>Required</sup> <a name="propagate" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.property.propagate"></a>

```typescript
public readonly propagate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not this permission propagates down the hierarchy to sub-entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/entity_permissions#propagate EntityPermissions#propagate}

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

Reference to the role providing the access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/entity_permissions#role_id EntityPermissions#role_id}

---

##### `userOrGroup`<sup>Required</sup> <a name="userOrGroup" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.property.userOrGroup"></a>

```typescript
public readonly userOrGroup: string;
```

- *Type:* string

User or group receiving access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/entity_permissions#user_or_group EntityPermissions#user_or_group}

---

## Classes <a name="Classes" id="Classes"></a>

### EntityPermissionsPermissionsList <a name="EntityPermissionsPermissionsList" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.Initializer"></a>

```typescript
import { entityPermissions } from '@cdktf/provider-vsphere'

new entityPermissions.EntityPermissionsPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.get"></a>

```typescript
public get(index: number): EntityPermissionsPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityPermissionsPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>[]

---


### EntityPermissionsPermissionsOutputReference <a name="EntityPermissionsPermissionsOutputReference" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer"></a>

```typescript
import { entityPermissions } from '@cdktf/provider-vsphere'

new entityPermissions.EntityPermissionsPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.isGroupInput">isGroupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.propagateInput">propagateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.roleIdInput">roleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.userOrGroupInput">userOrGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.isGroup">isGroup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.propagate">propagate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.userOrGroup">userOrGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isGroupInput`<sup>Optional</sup> <a name="isGroupInput" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.isGroupInput"></a>

```typescript
public readonly isGroupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `propagateInput`<sup>Optional</sup> <a name="propagateInput" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.propagateInput"></a>

```typescript
public readonly propagateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.roleIdInput"></a>

```typescript
public readonly roleIdInput: string;
```

- *Type:* string

---

##### `userOrGroupInput`<sup>Optional</sup> <a name="userOrGroupInput" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.userOrGroupInput"></a>

```typescript
public readonly userOrGroupInput: string;
```

- *Type:* string

---

##### `isGroup`<sup>Required</sup> <a name="isGroup" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.isGroup"></a>

```typescript
public readonly isGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `propagate`<sup>Required</sup> <a name="propagate" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.propagate"></a>

```typescript
public readonly propagate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `userOrGroup`<sup>Required</sup> <a name="userOrGroup" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.userOrGroup"></a>

```typescript
public readonly userOrGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EntityPermissionsPermissions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>

---



