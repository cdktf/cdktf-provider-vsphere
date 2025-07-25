# `computeClusterVmGroup` Submodule <a name="`computeClusterVmGroup` Submodule" id="@cdktf/provider-vsphere.computeClusterVmGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeClusterVmGroup <a name="ComputeClusterVmGroup" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/compute_cluster_vm_group vsphere_compute_cluster_vm_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.Initializer"></a>

```typescript
import { computeClusterVmGroup } from '@cdktf/provider-vsphere'

new computeClusterVmGroup.ComputeClusterVmGroup(scope: Construct, id: string, config: ComputeClusterVmGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig">ComputeClusterVmGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig">ComputeClusterVmGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.resetVirtualMachineIds">resetVirtualMachineIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetVirtualMachineIds` <a name="resetVirtualMachineIds" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.resetVirtualMachineIds"></a>

```typescript
public resetVirtualMachineIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeClusterVmGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.isConstruct"></a>

```typescript
import { computeClusterVmGroup } from '@cdktf/provider-vsphere'

computeClusterVmGroup.ComputeClusterVmGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.isTerraformElement"></a>

```typescript
import { computeClusterVmGroup } from '@cdktf/provider-vsphere'

computeClusterVmGroup.ComputeClusterVmGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.isTerraformResource"></a>

```typescript
import { computeClusterVmGroup } from '@cdktf/provider-vsphere'

computeClusterVmGroup.ComputeClusterVmGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.generateConfigForImport"></a>

```typescript
import { computeClusterVmGroup } from '@cdktf/provider-vsphere'

computeClusterVmGroup.ComputeClusterVmGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeClusterVmGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeClusterVmGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeClusterVmGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/compute_cluster_vm_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeClusterVmGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.computeClusterIdInput">computeClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.virtualMachineIdsInput">virtualMachineIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.computeClusterId">computeClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.virtualMachineIds">virtualMachineIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computeClusterIdInput`<sup>Optional</sup> <a name="computeClusterIdInput" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.computeClusterIdInput"></a>

```typescript
public readonly computeClusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `virtualMachineIdsInput`<sup>Optional</sup> <a name="virtualMachineIdsInput" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.virtualMachineIdsInput"></a>

```typescript
public readonly virtualMachineIdsInput: string[];
```

- *Type:* string[]

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.computeClusterId"></a>

```typescript
public readonly computeClusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `virtualMachineIds`<sup>Required</sup> <a name="virtualMachineIds" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.virtualMachineIds"></a>

```typescript
public readonly virtualMachineIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeClusterVmGroupConfig <a name="ComputeClusterVmGroupConfig" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.Initializer"></a>

```typescript
import { computeClusterVmGroup } from '@cdktf/provider-vsphere'

const computeClusterVmGroupConfig: computeClusterVmGroup.ComputeClusterVmGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.computeClusterId">computeClusterId</a></code> | <code>string</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.name">name</a></code> | <code>string</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/compute_cluster_vm_group#id ComputeClusterVmGroup#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.virtualMachineIds">virtualMachineIds</a></code> | <code>string[]</code> | The UUIDs of the virtual machines in this group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.computeClusterId"></a>

```typescript
public readonly computeClusterId: string;
```

- *Type:* string

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/compute_cluster_vm_group#compute_cluster_id ComputeClusterVmGroup#compute_cluster_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/compute_cluster_vm_group#name ComputeClusterVmGroup#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/compute_cluster_vm_group#id ComputeClusterVmGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `virtualMachineIds`<sup>Optional</sup> <a name="virtualMachineIds" id="@cdktf/provider-vsphere.computeClusterVmGroup.ComputeClusterVmGroupConfig.property.virtualMachineIds"></a>

```typescript
public readonly virtualMachineIds: string[];
```

- *Type:* string[]

The UUIDs of the virtual machines in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/compute_cluster_vm_group#virtual_machine_ids ComputeClusterVmGroup#virtual_machine_ids}

---



