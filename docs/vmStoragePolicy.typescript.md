# `vmStoragePolicy` Submodule <a name="`vmStoragePolicy` Submodule" id="@cdktf/provider-vsphere.vmStoragePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmStoragePolicy <a name="VmStoragePolicy" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/vm_storage_policy vsphere_vm_storage_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer"></a>

```typescript
import { vmStoragePolicy } from '@cdktf/provider-vsphere'

new vmStoragePolicy.VmStoragePolicy(scope: Construct, id: string, config: VmStoragePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig">VmStoragePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig">VmStoragePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.putTagRules">putTagRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTagRules` <a name="putTagRules" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.putTagRules"></a>

```typescript
public putTagRules(value: IResolvable | VmStoragePolicyTagRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.putTagRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VmStoragePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isConstruct"></a>

```typescript
import { vmStoragePolicy } from '@cdktf/provider-vsphere'

vmStoragePolicy.VmStoragePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isTerraformElement"></a>

```typescript
import { vmStoragePolicy } from '@cdktf/provider-vsphere'

vmStoragePolicy.VmStoragePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isTerraformResource"></a>

```typescript
import { vmStoragePolicy } from '@cdktf/provider-vsphere'

vmStoragePolicy.VmStoragePolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.generateConfigForImport"></a>

```typescript
import { vmStoragePolicy } from '@cdktf/provider-vsphere'

vmStoragePolicy.VmStoragePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VmStoragePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VmStoragePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VmStoragePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/vm_storage_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VmStoragePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.tagRules">tagRules</a></code> | <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList">VmStoragePolicyTagRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.tagRulesInput">tagRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `tagRules`<sup>Required</sup> <a name="tagRules" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.tagRules"></a>

```typescript
public readonly tagRules: VmStoragePolicyTagRulesList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList">VmStoragePolicyTagRulesList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagRulesInput`<sup>Optional</sup> <a name="tagRulesInput" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.tagRulesInput"></a>

```typescript
public readonly tagRulesInput: IResolvable | VmStoragePolicyTagRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VmStoragePolicyConfig <a name="VmStoragePolicyConfig" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.Initializer"></a>

```typescript
import { vmStoragePolicy } from '@cdktf/provider-vsphere'

const vmStoragePolicyConfig: vmStoragePolicy.VmStoragePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.name">name</a></code> | <code>string</code> | Name of the storage policy. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.tagRules">tagRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>[]</code> | tag_rules block. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.description">description</a></code> | <code>string</code> | Description of the storage policy. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/vm_storage_policy#id VmStoragePolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the storage policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/vm_storage_policy#name VmStoragePolicy#name}

---

##### `tagRules`<sup>Required</sup> <a name="tagRules" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.tagRules"></a>

```typescript
public readonly tagRules: IResolvable | VmStoragePolicyTagRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>[]

tag_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/vm_storage_policy#tag_rules VmStoragePolicy#tag_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the storage policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/vm_storage_policy#description VmStoragePolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/vm_storage_policy#id VmStoragePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### VmStoragePolicyTagRules <a name="VmStoragePolicyTagRules" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules.Initializer"></a>

```typescript
import { vmStoragePolicy } from '@cdktf/provider-vsphere'

const vmStoragePolicyTagRules: vmStoragePolicy.VmStoragePolicyTagRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules.property.tagCategory">tagCategory</a></code> | <code>string</code> | The tag category to select the tags from. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules.property.tags">tags</a></code> | <code>string[]</code> | The tags to use for creating a tag-based vm placement rule. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules.property.includeDatastoresWithTags">includeDatastoresWithTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to include or exclude datastores tagged with the provided tags. |

---

##### `tagCategory`<sup>Required</sup> <a name="tagCategory" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules.property.tagCategory"></a>

```typescript
public readonly tagCategory: string;
```

- *Type:* string

The tag category to select the tags from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/vm_storage_policy#tag_category VmStoragePolicy#tag_category}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

The tags to use for creating a tag-based vm placement rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/vm_storage_policy#tags VmStoragePolicy#tags}

---

##### `includeDatastoresWithTags`<sup>Optional</sup> <a name="includeDatastoresWithTags" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules.property.includeDatastoresWithTags"></a>

```typescript
public readonly includeDatastoresWithTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to include or exclude datastores tagged with the provided tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.0/docs/resources/vm_storage_policy#include_datastores_with_tags VmStoragePolicy#include_datastores_with_tags}

---

## Classes <a name="Classes" id="Classes"></a>

### VmStoragePolicyTagRulesList <a name="VmStoragePolicyTagRulesList" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.Initializer"></a>

```typescript
import { vmStoragePolicy } from '@cdktf/provider-vsphere'

new vmStoragePolicy.VmStoragePolicyTagRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.get"></a>

```typescript
public get(index: number): VmStoragePolicyTagRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VmStoragePolicyTagRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>[]

---


### VmStoragePolicyTagRulesOutputReference <a name="VmStoragePolicyTagRulesOutputReference" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer"></a>

```typescript
import { vmStoragePolicy } from '@cdktf/provider-vsphere'

new vmStoragePolicy.VmStoragePolicyTagRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.resetIncludeDatastoresWithTags">resetIncludeDatastoresWithTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeDatastoresWithTags` <a name="resetIncludeDatastoresWithTags" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.resetIncludeDatastoresWithTags"></a>

```typescript
public resetIncludeDatastoresWithTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.includeDatastoresWithTagsInput">includeDatastoresWithTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.tagCategoryInput">tagCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.includeDatastoresWithTags">includeDatastoresWithTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.tagCategory">tagCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeDatastoresWithTagsInput`<sup>Optional</sup> <a name="includeDatastoresWithTagsInput" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.includeDatastoresWithTagsInput"></a>

```typescript
public readonly includeDatastoresWithTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagCategoryInput`<sup>Optional</sup> <a name="tagCategoryInput" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.tagCategoryInput"></a>

```typescript
public readonly tagCategoryInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `includeDatastoresWithTags`<sup>Required</sup> <a name="includeDatastoresWithTags" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.includeDatastoresWithTags"></a>

```typescript
public readonly includeDatastoresWithTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagCategory`<sup>Required</sup> <a name="tagCategory" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.tagCategory"></a>

```typescript
public readonly tagCategory: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VmStoragePolicyTagRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>

---



