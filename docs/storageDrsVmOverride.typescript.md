# `storageDrsVmOverride` Submodule <a name="`storageDrsVmOverride` Submodule" id="@cdktf/provider-vsphere.storageDrsVmOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageDrsVmOverride <a name="StorageDrsVmOverride" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/storage_drs_vm_override vsphere_storage_drs_vm_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer"></a>

```typescript
import { storageDrsVmOverride } from '@cdktf/provider-vsphere'

new storageDrsVmOverride.StorageDrsVmOverride(scope: Construct, id: string, config: StorageDrsVmOverrideConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig">StorageDrsVmOverrideConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig">StorageDrsVmOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsAutomationLevel">resetSdrsAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsEnabled">resetSdrsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsIntraVmAffinity">resetSdrsIntraVmAffinity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSdrsAutomationLevel` <a name="resetSdrsAutomationLevel" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsAutomationLevel"></a>

```typescript
public resetSdrsAutomationLevel(): void
```

##### `resetSdrsEnabled` <a name="resetSdrsEnabled" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsEnabled"></a>

```typescript
public resetSdrsEnabled(): void
```

##### `resetSdrsIntraVmAffinity` <a name="resetSdrsIntraVmAffinity" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsIntraVmAffinity"></a>

```typescript
public resetSdrsIntraVmAffinity(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageDrsVmOverride resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isConstruct"></a>

```typescript
import { storageDrsVmOverride } from '@cdktf/provider-vsphere'

storageDrsVmOverride.StorageDrsVmOverride.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformElement"></a>

```typescript
import { storageDrsVmOverride } from '@cdktf/provider-vsphere'

storageDrsVmOverride.StorageDrsVmOverride.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformResource"></a>

```typescript
import { storageDrsVmOverride } from '@cdktf/provider-vsphere'

storageDrsVmOverride.StorageDrsVmOverride.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport"></a>

```typescript
import { storageDrsVmOverride } from '@cdktf/provider-vsphere'

storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StorageDrsVmOverride resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageDrsVmOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageDrsVmOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/storage_drs_vm_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageDrsVmOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.datastoreClusterIdInput">datastoreClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsAutomationLevelInput">sdrsAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsEnabledInput">sdrsEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsIntraVmAffinityInput">sdrsIntraVmAffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.virtualMachineIdInput">virtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.datastoreClusterId">datastoreClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsAutomationLevel">sdrsAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsEnabled">sdrsEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsIntraVmAffinity">sdrsIntraVmAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datastoreClusterIdInput`<sup>Optional</sup> <a name="datastoreClusterIdInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.datastoreClusterIdInput"></a>

```typescript
public readonly datastoreClusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sdrsAutomationLevelInput`<sup>Optional</sup> <a name="sdrsAutomationLevelInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsAutomationLevelInput"></a>

```typescript
public readonly sdrsAutomationLevelInput: string;
```

- *Type:* string

---

##### `sdrsEnabledInput`<sup>Optional</sup> <a name="sdrsEnabledInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsEnabledInput"></a>

```typescript
public readonly sdrsEnabledInput: string;
```

- *Type:* string

---

##### `sdrsIntraVmAffinityInput`<sup>Optional</sup> <a name="sdrsIntraVmAffinityInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsIntraVmAffinityInput"></a>

```typescript
public readonly sdrsIntraVmAffinityInput: string;
```

- *Type:* string

---

##### `virtualMachineIdInput`<sup>Optional</sup> <a name="virtualMachineIdInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.virtualMachineIdInput"></a>

```typescript
public readonly virtualMachineIdInput: string;
```

- *Type:* string

---

##### `datastoreClusterId`<sup>Required</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.datastoreClusterId"></a>

```typescript
public readonly datastoreClusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sdrsAutomationLevel`<sup>Required</sup> <a name="sdrsAutomationLevel" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsAutomationLevel"></a>

```typescript
public readonly sdrsAutomationLevel: string;
```

- *Type:* string

---

##### `sdrsEnabled`<sup>Required</sup> <a name="sdrsEnabled" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsEnabled"></a>

```typescript
public readonly sdrsEnabled: string;
```

- *Type:* string

---

##### `sdrsIntraVmAffinity`<sup>Required</sup> <a name="sdrsIntraVmAffinity" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsIntraVmAffinity"></a>

```typescript
public readonly sdrsIntraVmAffinity: string;
```

- *Type:* string

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageDrsVmOverrideConfig <a name="StorageDrsVmOverrideConfig" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.Initializer"></a>

```typescript
import { storageDrsVmOverride } from '@cdktf/provider-vsphere'

const storageDrsVmOverrideConfig: storageDrsVmOverride.StorageDrsVmOverrideConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.datastoreClusterId">datastoreClusterId</a></code> | <code>string</code> | The managed object ID of the datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | The managed object ID of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/storage_drs_vm_override#id StorageDrsVmOverride#id}. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsAutomationLevel">sdrsAutomationLevel</a></code> | <code>string</code> | Overrides any Storage DRS automation levels for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsEnabled">sdrsEnabled</a></code> | <code>string</code> | Overrides the default Storage DRS setting for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsIntraVmAffinity">sdrsIntraVmAffinity</a></code> | <code>string</code> | Overrides the intra-VM affinity setting for this virtual machine. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datastoreClusterId`<sup>Required</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.datastoreClusterId"></a>

```typescript
public readonly datastoreClusterId: string;
```

- *Type:* string

The managed object ID of the datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/storage_drs_vm_override#datastore_cluster_id StorageDrsVmOverride#datastore_cluster_id}

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

The managed object ID of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/storage_drs_vm_override#virtual_machine_id StorageDrsVmOverride#virtual_machine_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/storage_drs_vm_override#id StorageDrsVmOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sdrsAutomationLevel`<sup>Optional</sup> <a name="sdrsAutomationLevel" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsAutomationLevel"></a>

```typescript
public readonly sdrsAutomationLevel: string;
```

- *Type:* string

Overrides any Storage DRS automation levels for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/storage_drs_vm_override#sdrs_automation_level StorageDrsVmOverride#sdrs_automation_level}

---

##### `sdrsEnabled`<sup>Optional</sup> <a name="sdrsEnabled" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsEnabled"></a>

```typescript
public readonly sdrsEnabled: string;
```

- *Type:* string

Overrides the default Storage DRS setting for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/storage_drs_vm_override#sdrs_enabled StorageDrsVmOverride#sdrs_enabled}

---

##### `sdrsIntraVmAffinity`<sup>Optional</sup> <a name="sdrsIntraVmAffinity" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsIntraVmAffinity"></a>

```typescript
public readonly sdrsIntraVmAffinity: string;
```

- *Type:* string

Overrides the intra-VM affinity setting for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/storage_drs_vm_override#sdrs_intra_vm_affinity StorageDrsVmOverride#sdrs_intra_vm_affinity}

---



