# `supervisor` Submodule <a name="`supervisor` Submodule" id="@cdktf/provider-vsphere.supervisor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Supervisor <a name="Supervisor" id="@cdktf/provider-vsphere.supervisor.Supervisor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor vsphere_supervisor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

new supervisor.Supervisor(scope: Construct, id: string, config: SupervisorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig">SupervisorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig">SupervisorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putEgressCidr">putEgressCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putIngressCidr">putIngressCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork">putManagementNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putNamespace">putNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putPodCidr">putPodCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putServiceCidr">putServiceCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.Supervisor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.supervisor.Supervisor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.supervisor.Supervisor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.supervisor.Supervisor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.supervisor.Supervisor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.supervisor.Supervisor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.supervisor.Supervisor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.supervisor.Supervisor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.supervisor.Supervisor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.supervisor.Supervisor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.supervisor.Supervisor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.supervisor.Supervisor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.supervisor.Supervisor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.supervisor.Supervisor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEgressCidr` <a name="putEgressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putEgressCidr"></a>

```typescript
public putEgressCidr(value: IResolvable | SupervisorEgressCidr[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putEgressCidr.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>[]

---

##### `putIngressCidr` <a name="putIngressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putIngressCidr"></a>

```typescript
public putIngressCidr(value: IResolvable | SupervisorIngressCidr[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putIngressCidr.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>[]

---

##### `putManagementNetwork` <a name="putManagementNetwork" id="@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork"></a>

```typescript
public putManagementNetwork(value: SupervisorManagementNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

---

##### `putNamespace` <a name="putNamespace" id="@cdktf/provider-vsphere.supervisor.Supervisor.putNamespace"></a>

```typescript
public putNamespace(value: IResolvable | SupervisorNamespace[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putNamespace.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>[]

---

##### `putPodCidr` <a name="putPodCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putPodCidr"></a>

```typescript
public putPodCidr(value: IResolvable | SupervisorPodCidr[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putPodCidr.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>[]

---

##### `putServiceCidr` <a name="putServiceCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putServiceCidr"></a>

```typescript
public putServiceCidr(value: SupervisorServiceCidr): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putServiceCidr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.supervisor.Supervisor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vsphere.supervisor.Supervisor.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Supervisor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.supervisor.Supervisor.isConstruct"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

supervisor.Supervisor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.supervisor.Supervisor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformElement"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

supervisor.Supervisor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformResource"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

supervisor.Supervisor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

supervisor.Supervisor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Supervisor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Supervisor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Supervisor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Supervisor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidr">egressCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList">SupervisorEgressCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidr">ingressCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList">SupervisorIngressCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetwork">managementNetwork</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference">SupervisorManagementNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.namespace">namespace</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList">SupervisorNamespaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidr">podCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList">SupervisorPodCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidr">serviceCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference">SupervisorServiceCidrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibraryInput">contentLibraryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuidInput">dvsUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeClusterInput">edgeClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidrInput">egressCidrInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidrInput">ingressCidrInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDnsInput">mainDnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetworkInput">managementNetworkInput</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.namespaceInput">namespaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidrInput">podCidrInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomainsInput">searchDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidrInput">serviceCidrInput</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHintInput">sizingHintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicyInput">storagePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDnsInput">workerDnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibrary">contentLibrary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuid">dvsUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeCluster">edgeCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDns">mainDns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomains">searchDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHint">sizingHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicy">storagePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDns">workerDns</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `egressCidr`<sup>Required</sup> <a name="egressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidr"></a>

```typescript
public readonly egressCidr: SupervisorEgressCidrList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList">SupervisorEgressCidrList</a>

---

##### `ingressCidr`<sup>Required</sup> <a name="ingressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidr"></a>

```typescript
public readonly ingressCidr: SupervisorIngressCidrList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList">SupervisorIngressCidrList</a>

---

##### `managementNetwork`<sup>Required</sup> <a name="managementNetwork" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetwork"></a>

```typescript
public readonly managementNetwork: SupervisorManagementNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference">SupervisorManagementNetworkOutputReference</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.namespace"></a>

```typescript
public readonly namespace: SupervisorNamespaceList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList">SupervisorNamespaceList</a>

---

##### `podCidr`<sup>Required</sup> <a name="podCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidr"></a>

```typescript
public readonly podCidr: SupervisorPodCidrList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList">SupervisorPodCidrList</a>

---

##### `serviceCidr`<sup>Required</sup> <a name="serviceCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidr"></a>

```typescript
public readonly serviceCidr: SupervisorServiceCidrOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference">SupervisorServiceCidrOutputReference</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `contentLibraryInput`<sup>Optional</sup> <a name="contentLibraryInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibraryInput"></a>

```typescript
public readonly contentLibraryInput: string;
```

- *Type:* string

---

##### `dvsUuidInput`<sup>Optional</sup> <a name="dvsUuidInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuidInput"></a>

```typescript
public readonly dvsUuidInput: string;
```

- *Type:* string

---

##### `edgeClusterInput`<sup>Optional</sup> <a name="edgeClusterInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeClusterInput"></a>

```typescript
public readonly edgeClusterInput: string;
```

- *Type:* string

---

##### `egressCidrInput`<sup>Optional</sup> <a name="egressCidrInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidrInput"></a>

```typescript
public readonly egressCidrInput: IResolvable | SupervisorEgressCidr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressCidrInput`<sup>Optional</sup> <a name="ingressCidrInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidrInput"></a>

```typescript
public readonly ingressCidrInput: IResolvable | SupervisorIngressCidr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>[]

---

##### `mainDnsInput`<sup>Optional</sup> <a name="mainDnsInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDnsInput"></a>

```typescript
public readonly mainDnsInput: string[];
```

- *Type:* string[]

---

##### `managementNetworkInput`<sup>Optional</sup> <a name="managementNetworkInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetworkInput"></a>

```typescript
public readonly managementNetworkInput: SupervisorManagementNetwork;
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: IResolvable | SupervisorNamespace[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>[]

---

##### `podCidrInput`<sup>Optional</sup> <a name="podCidrInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidrInput"></a>

```typescript
public readonly podCidrInput: IResolvable | SupervisorPodCidr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>[]

---

##### `searchDomainsInput`<sup>Optional</sup> <a name="searchDomainsInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomainsInput"></a>

```typescript
public readonly searchDomainsInput: string[];
```

- *Type:* string[]

---

##### `serviceCidrInput`<sup>Optional</sup> <a name="serviceCidrInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidrInput"></a>

```typescript
public readonly serviceCidrInput: SupervisorServiceCidr;
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

---

##### `sizingHintInput`<sup>Optional</sup> <a name="sizingHintInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHintInput"></a>

```typescript
public readonly sizingHintInput: string;
```

- *Type:* string

---

##### `storagePolicyInput`<sup>Optional</sup> <a name="storagePolicyInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicyInput"></a>

```typescript
public readonly storagePolicyInput: string;
```

- *Type:* string

---

##### `workerDnsInput`<sup>Optional</sup> <a name="workerDnsInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDnsInput"></a>

```typescript
public readonly workerDnsInput: string[];
```

- *Type:* string[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `contentLibrary`<sup>Required</sup> <a name="contentLibrary" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibrary"></a>

```typescript
public readonly contentLibrary: string;
```

- *Type:* string

---

##### `dvsUuid`<sup>Required</sup> <a name="dvsUuid" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuid"></a>

```typescript
public readonly dvsUuid: string;
```

- *Type:* string

---

##### `edgeCluster`<sup>Required</sup> <a name="edgeCluster" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeCluster"></a>

```typescript
public readonly edgeCluster: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mainDns`<sup>Required</sup> <a name="mainDns" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDns"></a>

```typescript
public readonly mainDns: string[];
```

- *Type:* string[]

---

##### `searchDomains`<sup>Required</sup> <a name="searchDomains" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomains"></a>

```typescript
public readonly searchDomains: string[];
```

- *Type:* string[]

---

##### `sizingHint`<sup>Required</sup> <a name="sizingHint" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHint"></a>

```typescript
public readonly sizingHint: string;
```

- *Type:* string

---

##### `storagePolicy`<sup>Required</sup> <a name="storagePolicy" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicy"></a>

```typescript
public readonly storagePolicy: string;
```

- *Type:* string

---

##### `workerDns`<sup>Required</sup> <a name="workerDns" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDns"></a>

```typescript
public readonly workerDns: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SupervisorConfig <a name="SupervisorConfig" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

const supervisorConfig: supervisor.SupervisorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.cluster">cluster</a></code> | <code>string</code> | ID of the vSphere cluster on which workload management will be enabled. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.contentLibrary">contentLibrary</a></code> | <code>string</code> | ID of the subscribed content library. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dvsUuid">dvsUuid</a></code> | <code>string</code> | The UUID (not ID) of the distributed switch. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.edgeCluster">edgeCluster</a></code> | <code>string</code> | ID of the NSX Edge Cluster. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.egressCidr">egressCidr</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>[]</code> | egress_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.ingressCidr">ingressCidr</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>[]</code> | ingress_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.mainDns">mainDns</a></code> | <code>string[]</code> | List of DNS servers to use on the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.managementNetwork">managementNetwork</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a></code> | management_network block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.podCidr">podCidr</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>[]</code> | pod_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.searchDomains">searchDomains</a></code> | <code>string[]</code> | List of DNS search domains. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.serviceCidr">serviceCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a></code> | service_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.sizingHint">sizingHint</a></code> | <code>string</code> | Size of the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.storagePolicy">storagePolicy</a></code> | <code>string</code> | The name of a storage policy associated with the datastore where the container images will be stored. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.workerDns">workerDns</a></code> | <code>string[]</code> | List of DNS servers to use on the worker nodes. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#id Supervisor#id}. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.namespace">namespace</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>[]</code> | namespace block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

ID of the vSphere cluster on which workload management will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#cluster Supervisor#cluster}

---

##### `contentLibrary`<sup>Required</sup> <a name="contentLibrary" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.contentLibrary"></a>

```typescript
public readonly contentLibrary: string;
```

- *Type:* string

ID of the subscribed content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#content_library Supervisor#content_library}

---

##### `dvsUuid`<sup>Required</sup> <a name="dvsUuid" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dvsUuid"></a>

```typescript
public readonly dvsUuid: string;
```

- *Type:* string

The UUID (not ID) of the distributed switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#dvs_uuid Supervisor#dvs_uuid}

---

##### `edgeCluster`<sup>Required</sup> <a name="edgeCluster" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.edgeCluster"></a>

```typescript
public readonly edgeCluster: string;
```

- *Type:* string

ID of the NSX Edge Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#edge_cluster Supervisor#edge_cluster}

---

##### `egressCidr`<sup>Required</sup> <a name="egressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.egressCidr"></a>

```typescript
public readonly egressCidr: IResolvable | SupervisorEgressCidr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>[]

egress_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#egress_cidr Supervisor#egress_cidr}

---

##### `ingressCidr`<sup>Required</sup> <a name="ingressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.ingressCidr"></a>

```typescript
public readonly ingressCidr: IResolvable | SupervisorIngressCidr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>[]

ingress_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#ingress_cidr Supervisor#ingress_cidr}

---

##### `mainDns`<sup>Required</sup> <a name="mainDns" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.mainDns"></a>

```typescript
public readonly mainDns: string[];
```

- *Type:* string[]

List of DNS servers to use on the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#main_dns Supervisor#main_dns}

---

##### `managementNetwork`<sup>Required</sup> <a name="managementNetwork" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.managementNetwork"></a>

```typescript
public readonly managementNetwork: SupervisorManagementNetwork;
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

management_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#management_network Supervisor#management_network}

---

##### `podCidr`<sup>Required</sup> <a name="podCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.podCidr"></a>

```typescript
public readonly podCidr: IResolvable | SupervisorPodCidr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>[]

pod_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#pod_cidr Supervisor#pod_cidr}

---

##### `searchDomains`<sup>Required</sup> <a name="searchDomains" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.searchDomains"></a>

```typescript
public readonly searchDomains: string[];
```

- *Type:* string[]

List of DNS search domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#search_domains Supervisor#search_domains}

---

##### `serviceCidr`<sup>Required</sup> <a name="serviceCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.serviceCidr"></a>

```typescript
public readonly serviceCidr: SupervisorServiceCidr;
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

service_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#service_cidr Supervisor#service_cidr}

---

##### `sizingHint`<sup>Required</sup> <a name="sizingHint" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.sizingHint"></a>

```typescript
public readonly sizingHint: string;
```

- *Type:* string

Size of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#sizing_hint Supervisor#sizing_hint}

---

##### `storagePolicy`<sup>Required</sup> <a name="storagePolicy" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.storagePolicy"></a>

```typescript
public readonly storagePolicy: string;
```

- *Type:* string

The name of a storage policy associated with the datastore where the container images will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#storage_policy Supervisor#storage_policy}

---

##### `workerDns`<sup>Required</sup> <a name="workerDns" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.workerDns"></a>

```typescript
public readonly workerDns: string[];
```

- *Type:* string[]

List of DNS servers to use on the worker nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#worker_dns Supervisor#worker_dns}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#id Supervisor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.namespace"></a>

```typescript
public readonly namespace: IResolvable | SupervisorNamespace[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>[]

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#namespace Supervisor#namespace}

---

### SupervisorEgressCidr <a name="SupervisorEgressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

const supervisorEgressCidr: supervisor.SupervisorEgressCidr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.address">address</a></code> | <code>string</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.prefix">prefix</a></code> | <code>number</code> | Subnet prefix. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#address Supervisor#address}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.prefix"></a>

```typescript
public readonly prefix: number;
```

- *Type:* number

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#prefix Supervisor#prefix}

---

### SupervisorIngressCidr <a name="SupervisorIngressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

const supervisorIngressCidr: supervisor.SupervisorIngressCidr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.address">address</a></code> | <code>string</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.prefix">prefix</a></code> | <code>number</code> | Subnet prefix. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#address Supervisor#address}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.prefix"></a>

```typescript
public readonly prefix: number;
```

- *Type:* number

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#prefix Supervisor#prefix}

---

### SupervisorManagementNetwork <a name="SupervisorManagementNetwork" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

const supervisorManagementNetwork: supervisor.SupervisorManagementNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.addressCount">addressCount</a></code> | <code>number</code> | Number of addresses to allocate. Starts from 'starting_address'. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.gateway">gateway</a></code> | <code>string</code> | Gateway IP address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.network">network</a></code> | <code>string</code> | ID of the network. (e.g. a distributed port group). |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.startingAddress">startingAddress</a></code> | <code>string</code> | Starting address of the management network range. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.subnetMask">subnetMask</a></code> | <code>string</code> | Subnet mask. |

---

##### `addressCount`<sup>Required</sup> <a name="addressCount" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.addressCount"></a>

```typescript
public readonly addressCount: number;
```

- *Type:* number

Number of addresses to allocate. Starts from 'starting_address'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#address_count Supervisor#address_count}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

Gateway IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#gateway Supervisor#gateway}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

ID of the network. (e.g. a distributed port group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#network Supervisor#network}

---

##### `startingAddress`<sup>Required</sup> <a name="startingAddress" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.startingAddress"></a>

```typescript
public readonly startingAddress: string;
```

- *Type:* string

Starting address of the management network range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#starting_address Supervisor#starting_address}

---

##### `subnetMask`<sup>Required</sup> <a name="subnetMask" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.subnetMask"></a>

```typescript
public readonly subnetMask: string;
```

- *Type:* string

Subnet mask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#subnet_mask Supervisor#subnet_mask}

---

### SupervisorNamespace <a name="SupervisorNamespace" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

const supervisorNamespace: supervisor.SupervisorNamespace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.name">name</a></code> | <code>string</code> | The name of the namespace. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.contentLibraries">contentLibraries</a></code> | <code>string[]</code> | A list of content libraries. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.vmClasses">vmClasses</a></code> | <code>string[]</code> | A list of virtual machine classes. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#name Supervisor#name}

---

##### `contentLibraries`<sup>Optional</sup> <a name="contentLibraries" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.contentLibraries"></a>

```typescript
public readonly contentLibraries: string[];
```

- *Type:* string[]

A list of content libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#content_libraries Supervisor#content_libraries}

---

##### `vmClasses`<sup>Optional</sup> <a name="vmClasses" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.vmClasses"></a>

```typescript
public readonly vmClasses: string[];
```

- *Type:* string[]

A list of virtual machine classes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#vm_classes Supervisor#vm_classes}

---

### SupervisorPodCidr <a name="SupervisorPodCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

const supervisorPodCidr: supervisor.SupervisorPodCidr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.address">address</a></code> | <code>string</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.prefix">prefix</a></code> | <code>number</code> | Subnet prefix. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#address Supervisor#address}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.prefix"></a>

```typescript
public readonly prefix: number;
```

- *Type:* number

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#prefix Supervisor#prefix}

---

### SupervisorServiceCidr <a name="SupervisorServiceCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

const supervisorServiceCidr: supervisor.SupervisorServiceCidr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.address">address</a></code> | <code>string</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.prefix">prefix</a></code> | <code>number</code> | Subnet prefix. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#address Supervisor#address}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.prefix"></a>

```typescript
public readonly prefix: number;
```

- *Type:* number

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/supervisor#prefix Supervisor#prefix}

---

## Classes <a name="Classes" id="Classes"></a>

### SupervisorEgressCidrList <a name="SupervisorEgressCidrList" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

new supervisor.SupervisorEgressCidrList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.get"></a>

```typescript
public get(index: number): SupervisorEgressCidrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupervisorEgressCidr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>[]

---


### SupervisorEgressCidrOutputReference <a name="SupervisorEgressCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

new supervisor.SupervisorEgressCidrOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefixInput">prefixInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefix">prefix</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: number;
```

- *Type:* number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefix"></a>

```typescript
public readonly prefix: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupervisorEgressCidr;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>

---


### SupervisorIngressCidrList <a name="SupervisorIngressCidrList" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

new supervisor.SupervisorIngressCidrList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.get"></a>

```typescript
public get(index: number): SupervisorIngressCidrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupervisorIngressCidr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>[]

---


### SupervisorIngressCidrOutputReference <a name="SupervisorIngressCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

new supervisor.SupervisorIngressCidrOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefixInput">prefixInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefix">prefix</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: number;
```

- *Type:* number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefix"></a>

```typescript
public readonly prefix: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupervisorIngressCidr;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>

---


### SupervisorManagementNetworkOutputReference <a name="SupervisorManagementNetworkOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

new supervisor.SupervisorManagementNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCountInput">addressCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gatewayInput">gatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddressInput">startingAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMaskInput">subnetMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCount">addressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddress">startingAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMask">subnetMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressCountInput`<sup>Optional</sup> <a name="addressCountInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCountInput"></a>

```typescript
public readonly addressCountInput: number;
```

- *Type:* number

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `startingAddressInput`<sup>Optional</sup> <a name="startingAddressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddressInput"></a>

```typescript
public readonly startingAddressInput: string;
```

- *Type:* string

---

##### `subnetMaskInput`<sup>Optional</sup> <a name="subnetMaskInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMaskInput"></a>

```typescript
public readonly subnetMaskInput: string;
```

- *Type:* string

---

##### `addressCount`<sup>Required</sup> <a name="addressCount" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCount"></a>

```typescript
public readonly addressCount: number;
```

- *Type:* number

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `startingAddress`<sup>Required</sup> <a name="startingAddress" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddress"></a>

```typescript
public readonly startingAddress: string;
```

- *Type:* string

---

##### `subnetMask`<sup>Required</sup> <a name="subnetMask" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMask"></a>

```typescript
public readonly subnetMask: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SupervisorManagementNetwork;
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

---


### SupervisorNamespaceList <a name="SupervisorNamespaceList" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

new supervisor.SupervisorNamespaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.get"></a>

```typescript
public get(index: number): SupervisorNamespaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupervisorNamespace[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>[]

---


### SupervisorNamespaceOutputReference <a name="SupervisorNamespaceOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

new supervisor.SupervisorNamespaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetContentLibraries">resetContentLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetVmClasses">resetVmClasses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentLibraries` <a name="resetContentLibraries" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetContentLibraries"></a>

```typescript
public resetContentLibraries(): void
```

##### `resetVmClasses` <a name="resetVmClasses" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetVmClasses"></a>

```typescript
public resetVmClasses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibrariesInput">contentLibrariesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClassesInput">vmClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibraries">contentLibraries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClasses">vmClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentLibrariesInput`<sup>Optional</sup> <a name="contentLibrariesInput" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibrariesInput"></a>

```typescript
public readonly contentLibrariesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `vmClassesInput`<sup>Optional</sup> <a name="vmClassesInput" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClassesInput"></a>

```typescript
public readonly vmClassesInput: string[];
```

- *Type:* string[]

---

##### `contentLibraries`<sup>Required</sup> <a name="contentLibraries" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibraries"></a>

```typescript
public readonly contentLibraries: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `vmClasses`<sup>Required</sup> <a name="vmClasses" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClasses"></a>

```typescript
public readonly vmClasses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupervisorNamespace;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>

---


### SupervisorPodCidrList <a name="SupervisorPodCidrList" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

new supervisor.SupervisorPodCidrList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.get"></a>

```typescript
public get(index: number): SupervisorPodCidrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupervisorPodCidr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>[]

---


### SupervisorPodCidrOutputReference <a name="SupervisorPodCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

new supervisor.SupervisorPodCidrOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefixInput">prefixInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefix">prefix</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: number;
```

- *Type:* number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefix"></a>

```typescript
public readonly prefix: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupervisorPodCidr;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>

---


### SupervisorServiceCidrOutputReference <a name="SupervisorServiceCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer"></a>

```typescript
import { supervisor } from '@cdktf/provider-vsphere'

new supervisor.SupervisorServiceCidrOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefixInput">prefixInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefix">prefix</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: number;
```

- *Type:* number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefix"></a>

```typescript
public readonly prefix: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SupervisorServiceCidr;
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

---



