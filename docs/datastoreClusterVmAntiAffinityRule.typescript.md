# `datastoreClusterVmAntiAffinityRule` Submodule <a name="`datastoreClusterVmAntiAffinityRule` Submodule" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatastoreClusterVmAntiAffinityRule <a name="DatastoreClusterVmAntiAffinityRule" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/datastore_cluster_vm_anti_affinity_rule vsphere_datastore_cluster_vm_anti_affinity_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer"></a>

```typescript
import { datastoreClusterVmAntiAffinityRule } from '@cdktf/provider-vsphere'

new datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule(scope: Construct, id: string, config: DatastoreClusterVmAntiAffinityRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig">DatastoreClusterVmAntiAffinityRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig">DatastoreClusterVmAntiAffinityRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetMandatory">resetMandatory</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMandatory` <a name="resetMandatory" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetMandatory"></a>

```typescript
public resetMandatory(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatastoreClusterVmAntiAffinityRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isConstruct"></a>

```typescript
import { datastoreClusterVmAntiAffinityRule } from '@cdktf/provider-vsphere'

datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformElement"></a>

```typescript
import { datastoreClusterVmAntiAffinityRule } from '@cdktf/provider-vsphere'

datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformResource"></a>

```typescript
import { datastoreClusterVmAntiAffinityRule } from '@cdktf/provider-vsphere'

datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport"></a>

```typescript
import { datastoreClusterVmAntiAffinityRule } from '@cdktf/provider-vsphere'

datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatastoreClusterVmAntiAffinityRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatastoreClusterVmAntiAffinityRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatastoreClusterVmAntiAffinityRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatastoreClusterVmAntiAffinityRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.datastoreClusterIdInput">datastoreClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.mandatoryInput">mandatoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.virtualMachineIdsInput">virtualMachineIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.datastoreClusterId">datastoreClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.mandatory">mandatory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.virtualMachineIds">virtualMachineIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datastoreClusterIdInput`<sup>Optional</sup> <a name="datastoreClusterIdInput" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.datastoreClusterIdInput"></a>

```typescript
public readonly datastoreClusterIdInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mandatoryInput`<sup>Optional</sup> <a name="mandatoryInput" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.mandatoryInput"></a>

```typescript
public readonly mandatoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `virtualMachineIdsInput`<sup>Optional</sup> <a name="virtualMachineIdsInput" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.virtualMachineIdsInput"></a>

```typescript
public readonly virtualMachineIdsInput: string[];
```

- *Type:* string[]

---

##### `datastoreClusterId`<sup>Required</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.datastoreClusterId"></a>

```typescript
public readonly datastoreClusterId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mandatory`<sup>Required</sup> <a name="mandatory" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.mandatory"></a>

```typescript
public readonly mandatory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `virtualMachineIds`<sup>Required</sup> <a name="virtualMachineIds" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.virtualMachineIds"></a>

```typescript
public readonly virtualMachineIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatastoreClusterVmAntiAffinityRuleConfig <a name="DatastoreClusterVmAntiAffinityRuleConfig" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.Initializer"></a>

```typescript
import { datastoreClusterVmAntiAffinityRule } from '@cdktf/provider-vsphere'

const datastoreClusterVmAntiAffinityRuleConfig: datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.datastoreClusterId">datastoreClusterId</a></code> | <code>string</code> | The managed object ID of the datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.name">name</a></code> | <code>string</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.virtualMachineIds">virtualMachineIds</a></code> | <code>string[]</code> | The UUIDs of the virtual machines to run on different datastores from each other. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable this rule in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#id DatastoreClusterVmAntiAffinityRule#id}. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.mandatory">mandatory</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, prevents any virtual machine operations that may violate this rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datastoreClusterId`<sup>Required</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.datastoreClusterId"></a>

```typescript
public readonly datastoreClusterId: string;
```

- *Type:* string

The managed object ID of the datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#datastore_cluster_id DatastoreClusterVmAntiAffinityRule#datastore_cluster_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#name DatastoreClusterVmAntiAffinityRule#name}

---

##### `virtualMachineIds`<sup>Required</sup> <a name="virtualMachineIds" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.virtualMachineIds"></a>

```typescript
public readonly virtualMachineIds: string[];
```

- *Type:* string[]

The UUIDs of the virtual machines to run on different datastores from each other.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#virtual_machine_ids DatastoreClusterVmAntiAffinityRule#virtual_machine_ids}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable this rule in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#enabled DatastoreClusterVmAntiAffinityRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#id DatastoreClusterVmAntiAffinityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mandatory`<sup>Optional</sup> <a name="mandatory" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.mandatory"></a>

```typescript
public readonly mandatory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, prevents any virtual machine operations that may violate this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#mandatory DatastoreClusterVmAntiAffinityRule#mandatory}

---



