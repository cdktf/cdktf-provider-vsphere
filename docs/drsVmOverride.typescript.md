# `drsVmOverride` Submodule <a name="`drsVmOverride` Submodule" id="@cdktf/provider-vsphere.drsVmOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrsVmOverride <a name="DrsVmOverride" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/drs_vm_override vsphere_drs_vm_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer"></a>

```typescript
import { drsVmOverride } from '@cdktf/provider-vsphere'

new drsVmOverride.DrsVmOverride(scope: Construct, id: string, config: DrsVmOverrideConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig">DrsVmOverrideConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig">DrsVmOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.resetDrsAutomationLevel">resetDrsAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.resetDrsEnabled">resetDrsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetDrsAutomationLevel` <a name="resetDrsAutomationLevel" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.resetDrsAutomationLevel"></a>

```typescript
public resetDrsAutomationLevel(): void
```

##### `resetDrsEnabled` <a name="resetDrsEnabled" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.resetDrsEnabled"></a>

```typescript
public resetDrsEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DrsVmOverride resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isConstruct"></a>

```typescript
import { drsVmOverride } from '@cdktf/provider-vsphere'

drsVmOverride.DrsVmOverride.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isTerraformElement"></a>

```typescript
import { drsVmOverride } from '@cdktf/provider-vsphere'

drsVmOverride.DrsVmOverride.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isTerraformResource"></a>

```typescript
import { drsVmOverride } from '@cdktf/provider-vsphere'

drsVmOverride.DrsVmOverride.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.generateConfigForImport"></a>

```typescript
import { drsVmOverride } from '@cdktf/provider-vsphere'

drsVmOverride.DrsVmOverride.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DrsVmOverride resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DrsVmOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DrsVmOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/drs_vm_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DrsVmOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.computeClusterIdInput">computeClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.drsAutomationLevelInput">drsAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.drsEnabledInput">drsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.virtualMachineIdInput">virtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.computeClusterId">computeClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.drsAutomationLevel">drsAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.drsEnabled">drsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computeClusterIdInput`<sup>Optional</sup> <a name="computeClusterIdInput" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.computeClusterIdInput"></a>

```typescript
public readonly computeClusterIdInput: string;
```

- *Type:* string

---

##### `drsAutomationLevelInput`<sup>Optional</sup> <a name="drsAutomationLevelInput" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.drsAutomationLevelInput"></a>

```typescript
public readonly drsAutomationLevelInput: string;
```

- *Type:* string

---

##### `drsEnabledInput`<sup>Optional</sup> <a name="drsEnabledInput" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.drsEnabledInput"></a>

```typescript
public readonly drsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `virtualMachineIdInput`<sup>Optional</sup> <a name="virtualMachineIdInput" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.virtualMachineIdInput"></a>

```typescript
public readonly virtualMachineIdInput: string;
```

- *Type:* string

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.computeClusterId"></a>

```typescript
public readonly computeClusterId: string;
```

- *Type:* string

---

##### `drsAutomationLevel`<sup>Required</sup> <a name="drsAutomationLevel" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.drsAutomationLevel"></a>

```typescript
public readonly drsAutomationLevel: string;
```

- *Type:* string

---

##### `drsEnabled`<sup>Required</sup> <a name="drsEnabled" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.drsEnabled"></a>

```typescript
public readonly drsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DrsVmOverrideConfig <a name="DrsVmOverrideConfig" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.Initializer"></a>

```typescript
import { drsVmOverride } from '@cdktf/provider-vsphere'

const drsVmOverrideConfig: drsVmOverride.DrsVmOverrideConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.computeClusterId">computeClusterId</a></code> | <code>string</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | The managed object ID of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.drsAutomationLevel">drsAutomationLevel</a></code> | <code>string</code> | The automation level for this virtual machine in the cluster. Can be one of manual, partiallyAutomated, or fullyAutomated. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.drsEnabled">drsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable DRS for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/drs_vm_override#id DrsVmOverride#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.computeClusterId"></a>

```typescript
public readonly computeClusterId: string;
```

- *Type:* string

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/drs_vm_override#compute_cluster_id DrsVmOverride#compute_cluster_id}

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

The managed object ID of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/drs_vm_override#virtual_machine_id DrsVmOverride#virtual_machine_id}

---

##### `drsAutomationLevel`<sup>Optional</sup> <a name="drsAutomationLevel" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.drsAutomationLevel"></a>

```typescript
public readonly drsAutomationLevel: string;
```

- *Type:* string

The automation level for this virtual machine in the cluster. Can be one of manual, partiallyAutomated, or fullyAutomated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/drs_vm_override#drs_automation_level DrsVmOverride#drs_automation_level}

---

##### `drsEnabled`<sup>Optional</sup> <a name="drsEnabled" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.drsEnabled"></a>

```typescript
public readonly drsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable DRS for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/drs_vm_override#drs_enabled DrsVmOverride#drs_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/drs_vm_override#id DrsVmOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



