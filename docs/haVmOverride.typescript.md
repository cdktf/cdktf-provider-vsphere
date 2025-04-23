# `haVmOverride` Submodule <a name="`haVmOverride` Submodule" id="@cdktf/provider-vsphere.haVmOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HaVmOverride <a name="HaVmOverride" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override vsphere_ha_vm_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer"></a>

```typescript
import { haVmOverride } from '@cdktf/provider-vsphere'

new haVmOverride.HaVmOverride(scope: Construct, id: string, config: HaVmOverrideConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig">HaVmOverrideConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig">HaVmOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdRecoveryAction">resetHaDatastoreApdRecoveryAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponse">resetHaDatastoreApdResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponseDelay">resetHaDatastoreApdResponseDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastorePdlResponse">resetHaDatastorePdlResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaHostIsolationResponse">resetHaHostIsolationResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmFailureInterval">resetHaVmFailureInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumFailureWindow">resetHaVmMaximumFailureWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumResets">resetHaVmMaximumResets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMinimumUptime">resetHaVmMinimumUptime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoring">resetHaVmMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoringUseClusterDefaults">resetHaVmMonitoringUseClusterDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartPriority">resetHaVmRestartPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartTimeout">resetHaVmRestartTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetHaDatastoreApdRecoveryAction` <a name="resetHaDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdRecoveryAction"></a>

```typescript
public resetHaDatastoreApdRecoveryAction(): void
```

##### `resetHaDatastoreApdResponse` <a name="resetHaDatastoreApdResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponse"></a>

```typescript
public resetHaDatastoreApdResponse(): void
```

##### `resetHaDatastoreApdResponseDelay` <a name="resetHaDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponseDelay"></a>

```typescript
public resetHaDatastoreApdResponseDelay(): void
```

##### `resetHaDatastorePdlResponse` <a name="resetHaDatastorePdlResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastorePdlResponse"></a>

```typescript
public resetHaDatastorePdlResponse(): void
```

##### `resetHaHostIsolationResponse` <a name="resetHaHostIsolationResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaHostIsolationResponse"></a>

```typescript
public resetHaHostIsolationResponse(): void
```

##### `resetHaVmFailureInterval` <a name="resetHaVmFailureInterval" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmFailureInterval"></a>

```typescript
public resetHaVmFailureInterval(): void
```

##### `resetHaVmMaximumFailureWindow` <a name="resetHaVmMaximumFailureWindow" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumFailureWindow"></a>

```typescript
public resetHaVmMaximumFailureWindow(): void
```

##### `resetHaVmMaximumResets` <a name="resetHaVmMaximumResets" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumResets"></a>

```typescript
public resetHaVmMaximumResets(): void
```

##### `resetHaVmMinimumUptime` <a name="resetHaVmMinimumUptime" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMinimumUptime"></a>

```typescript
public resetHaVmMinimumUptime(): void
```

##### `resetHaVmMonitoring` <a name="resetHaVmMonitoring" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoring"></a>

```typescript
public resetHaVmMonitoring(): void
```

##### `resetHaVmMonitoringUseClusterDefaults` <a name="resetHaVmMonitoringUseClusterDefaults" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoringUseClusterDefaults"></a>

```typescript
public resetHaVmMonitoringUseClusterDefaults(): void
```

##### `resetHaVmRestartPriority` <a name="resetHaVmRestartPriority" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartPriority"></a>

```typescript
public resetHaVmRestartPriority(): void
```

##### `resetHaVmRestartTimeout` <a name="resetHaVmRestartTimeout" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartTimeout"></a>

```typescript
public resetHaVmRestartTimeout(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HaVmOverride resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isConstruct"></a>

```typescript
import { haVmOverride } from '@cdktf/provider-vsphere'

haVmOverride.HaVmOverride.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformElement"></a>

```typescript
import { haVmOverride } from '@cdktf/provider-vsphere'

haVmOverride.HaVmOverride.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformResource"></a>

```typescript
import { haVmOverride } from '@cdktf/provider-vsphere'

haVmOverride.HaVmOverride.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport"></a>

```typescript
import { haVmOverride } from '@cdktf/provider-vsphere'

haVmOverride.HaVmOverride.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HaVmOverride resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HaVmOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HaVmOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HaVmOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterIdInput">computeClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryActionInput">haDatastoreApdRecoveryActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelayInput">haDatastoreApdResponseDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseInput">haDatastoreApdResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponseInput">haDatastorePdlResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponseInput">haHostIsolationResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureIntervalInput">haVmFailureIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindowInput">haVmMaximumFailureWindowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResetsInput">haVmMaximumResetsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptimeInput">haVmMinimumUptimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringInput">haVmMonitoringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaultsInput">haVmMonitoringUseClusterDefaultsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriorityInput">haVmRestartPriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeoutInput">haVmRestartTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineIdInput">virtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterId">computeClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryAction">haDatastoreApdRecoveryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponse">haDatastoreApdResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelay">haDatastoreApdResponseDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponse">haDatastorePdlResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponse">haHostIsolationResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureInterval">haVmFailureInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindow">haVmMaximumFailureWindow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResets">haVmMaximumResets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptime">haVmMinimumUptime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoring">haVmMonitoring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaults">haVmMonitoringUseClusterDefaults</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriority">haVmRestartPriority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeout">haVmRestartTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computeClusterIdInput`<sup>Optional</sup> <a name="computeClusterIdInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterIdInput"></a>

```typescript
public readonly computeClusterIdInput: string;
```

- *Type:* string

---

##### `haDatastoreApdRecoveryActionInput`<sup>Optional</sup> <a name="haDatastoreApdRecoveryActionInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryActionInput"></a>

```typescript
public readonly haDatastoreApdRecoveryActionInput: string;
```

- *Type:* string

---

##### `haDatastoreApdResponseDelayInput`<sup>Optional</sup> <a name="haDatastoreApdResponseDelayInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelayInput"></a>

```typescript
public readonly haDatastoreApdResponseDelayInput: number;
```

- *Type:* number

---

##### `haDatastoreApdResponseInput`<sup>Optional</sup> <a name="haDatastoreApdResponseInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseInput"></a>

```typescript
public readonly haDatastoreApdResponseInput: string;
```

- *Type:* string

---

##### `haDatastorePdlResponseInput`<sup>Optional</sup> <a name="haDatastorePdlResponseInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponseInput"></a>

```typescript
public readonly haDatastorePdlResponseInput: string;
```

- *Type:* string

---

##### `haHostIsolationResponseInput`<sup>Optional</sup> <a name="haHostIsolationResponseInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponseInput"></a>

```typescript
public readonly haHostIsolationResponseInput: string;
```

- *Type:* string

---

##### `haVmFailureIntervalInput`<sup>Optional</sup> <a name="haVmFailureIntervalInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureIntervalInput"></a>

```typescript
public readonly haVmFailureIntervalInput: number;
```

- *Type:* number

---

##### `haVmMaximumFailureWindowInput`<sup>Optional</sup> <a name="haVmMaximumFailureWindowInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindowInput"></a>

```typescript
public readonly haVmMaximumFailureWindowInput: number;
```

- *Type:* number

---

##### `haVmMaximumResetsInput`<sup>Optional</sup> <a name="haVmMaximumResetsInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResetsInput"></a>

```typescript
public readonly haVmMaximumResetsInput: number;
```

- *Type:* number

---

##### `haVmMinimumUptimeInput`<sup>Optional</sup> <a name="haVmMinimumUptimeInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptimeInput"></a>

```typescript
public readonly haVmMinimumUptimeInput: number;
```

- *Type:* number

---

##### `haVmMonitoringInput`<sup>Optional</sup> <a name="haVmMonitoringInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringInput"></a>

```typescript
public readonly haVmMonitoringInput: string;
```

- *Type:* string

---

##### `haVmMonitoringUseClusterDefaultsInput`<sup>Optional</sup> <a name="haVmMonitoringUseClusterDefaultsInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaultsInput"></a>

```typescript
public readonly haVmMonitoringUseClusterDefaultsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `haVmRestartPriorityInput`<sup>Optional</sup> <a name="haVmRestartPriorityInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriorityInput"></a>

```typescript
public readonly haVmRestartPriorityInput: string;
```

- *Type:* string

---

##### `haVmRestartTimeoutInput`<sup>Optional</sup> <a name="haVmRestartTimeoutInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeoutInput"></a>

```typescript
public readonly haVmRestartTimeoutInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `virtualMachineIdInput`<sup>Optional</sup> <a name="virtualMachineIdInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineIdInput"></a>

```typescript
public readonly virtualMachineIdInput: string;
```

- *Type:* string

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterId"></a>

```typescript
public readonly computeClusterId: string;
```

- *Type:* string

---

##### `haDatastoreApdRecoveryAction`<sup>Required</sup> <a name="haDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryAction"></a>

```typescript
public readonly haDatastoreApdRecoveryAction: string;
```

- *Type:* string

---

##### `haDatastoreApdResponse`<sup>Required</sup> <a name="haDatastoreApdResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponse"></a>

```typescript
public readonly haDatastoreApdResponse: string;
```

- *Type:* string

---

##### `haDatastoreApdResponseDelay`<sup>Required</sup> <a name="haDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelay"></a>

```typescript
public readonly haDatastoreApdResponseDelay: number;
```

- *Type:* number

---

##### `haDatastorePdlResponse`<sup>Required</sup> <a name="haDatastorePdlResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponse"></a>

```typescript
public readonly haDatastorePdlResponse: string;
```

- *Type:* string

---

##### `haHostIsolationResponse`<sup>Required</sup> <a name="haHostIsolationResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponse"></a>

```typescript
public readonly haHostIsolationResponse: string;
```

- *Type:* string

---

##### `haVmFailureInterval`<sup>Required</sup> <a name="haVmFailureInterval" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureInterval"></a>

```typescript
public readonly haVmFailureInterval: number;
```

- *Type:* number

---

##### `haVmMaximumFailureWindow`<sup>Required</sup> <a name="haVmMaximumFailureWindow" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindow"></a>

```typescript
public readonly haVmMaximumFailureWindow: number;
```

- *Type:* number

---

##### `haVmMaximumResets`<sup>Required</sup> <a name="haVmMaximumResets" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResets"></a>

```typescript
public readonly haVmMaximumResets: number;
```

- *Type:* number

---

##### `haVmMinimumUptime`<sup>Required</sup> <a name="haVmMinimumUptime" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptime"></a>

```typescript
public readonly haVmMinimumUptime: number;
```

- *Type:* number

---

##### `haVmMonitoring`<sup>Required</sup> <a name="haVmMonitoring" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoring"></a>

```typescript
public readonly haVmMonitoring: string;
```

- *Type:* string

---

##### `haVmMonitoringUseClusterDefaults`<sup>Required</sup> <a name="haVmMonitoringUseClusterDefaults" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaults"></a>

```typescript
public readonly haVmMonitoringUseClusterDefaults: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `haVmRestartPriority`<sup>Required</sup> <a name="haVmRestartPriority" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriority"></a>

```typescript
public readonly haVmRestartPriority: string;
```

- *Type:* string

---

##### `haVmRestartTimeout`<sup>Required</sup> <a name="haVmRestartTimeout" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeout"></a>

```typescript
public readonly haVmRestartTimeout: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HaVmOverrideConfig <a name="HaVmOverrideConfig" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.Initializer"></a>

```typescript
import { haVmOverride } from '@cdktf/provider-vsphere'

const haVmOverrideConfig: haVmOverride.HaVmOverrideConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.computeClusterId">computeClusterId</a></code> | <code>string</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | The managed object ID of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdRecoveryAction">haDatastoreApdRecoveryAction</a></code> | <code>string</code> | Controls the action to take on this virtual machine if an APD status on an affected datastore clears in the middle of an APD event. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponse">haDatastoreApdResponse</a></code> | <code>string</code> | Controls the action to take on this virtual machine when the cluster has detected loss to all paths to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponseDelay">haDatastoreApdResponseDelay</a></code> | <code>number</code> | Controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastorePdlResponse">haDatastorePdlResponse</a></code> | <code>string</code> | Controls the action to take on this virtual machine when the cluster has detected a permanent device loss to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haHostIsolationResponse">haHostIsolationResponse</a></code> | <code>string</code> | The action to take on this virtual machine when a host is isolated from the rest of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmFailureInterval">haVmFailureInterval</a></code> | <code>number</code> | If a heartbeat from this virtual machine is not received within this configured interval, the virtual machine is marked as failed. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumFailureWindow">haVmMaximumFailureWindow</a></code> | <code>number</code> | The length of the reset window in which ha_vm_maximum_resets can operate. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumResets">haVmMaximumResets</a></code> | <code>number</code> | The maximum number of resets that HA will perform to this virtual machine when responding to a failure event. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMinimumUptime">haVmMinimumUptime</a></code> | <code>number</code> | The time, in seconds, that HA waits after powering on this virtual machine before monitoring for heartbeats. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoring">haVmMonitoring</a></code> | <code>string</code> | The type of virtual machine monitoring to use for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoringUseClusterDefaults">haVmMonitoringUseClusterDefaults</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether or not the cluster's default settings or the VM override settings specified in this resource are used for virtual machine monitoring. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartPriority">haVmRestartPriority</a></code> | <code>string</code> | The restart priority for this virtual machine when vSphere detects a host failure. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartTimeout">haVmRestartTimeout</a></code> | <code>number</code> | The maximum time, in seconds, that vSphere HA will wait for the virtual machine to be ready. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#id HaVmOverride#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.computeClusterId"></a>

```typescript
public readonly computeClusterId: string;
```

- *Type:* string

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#compute_cluster_id HaVmOverride#compute_cluster_id}

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

The managed object ID of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#virtual_machine_id HaVmOverride#virtual_machine_id}

---

##### `haDatastoreApdRecoveryAction`<sup>Optional</sup> <a name="haDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdRecoveryAction"></a>

```typescript
public readonly haDatastoreApdRecoveryAction: string;
```

- *Type:* string

Controls the action to take on this virtual machine if an APD status on an affected datastore clears in the middle of an APD event.

Can be one of useClusterDefault, none or reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#ha_datastore_apd_recovery_action HaVmOverride#ha_datastore_apd_recovery_action}

---

##### `haDatastoreApdResponse`<sup>Optional</sup> <a name="haDatastoreApdResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponse"></a>

```typescript
public readonly haDatastoreApdResponse: string;
```

- *Type:* string

Controls the action to take on this virtual machine when the cluster has detected loss to all paths to a relevant datastore.

Can be one of clusterDefault, disabled, warning, restartConservative, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#ha_datastore_apd_response HaVmOverride#ha_datastore_apd_response}

---

##### `haDatastoreApdResponseDelay`<sup>Optional</sup> <a name="haDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponseDelay"></a>

```typescript
public readonly haDatastoreApdResponseDelay: number;
```

- *Type:* number

Controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response.

Specify -1 to use the cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#ha_datastore_apd_response_delay HaVmOverride#ha_datastore_apd_response_delay}

---

##### `haDatastorePdlResponse`<sup>Optional</sup> <a name="haDatastorePdlResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastorePdlResponse"></a>

```typescript
public readonly haDatastorePdlResponse: string;
```

- *Type:* string

Controls the action to take on this virtual machine when the cluster has detected a permanent device loss to a relevant datastore.

Can be one of clusterDefault, disabled, warning, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#ha_datastore_pdl_response HaVmOverride#ha_datastore_pdl_response}

---

##### `haHostIsolationResponse`<sup>Optional</sup> <a name="haHostIsolationResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haHostIsolationResponse"></a>

```typescript
public readonly haHostIsolationResponse: string;
```

- *Type:* string

The action to take on this virtual machine when a host is isolated from the rest of the cluster.

Can be one of clusterIsolationResponse, none, powerOff, or shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#ha_host_isolation_response HaVmOverride#ha_host_isolation_response}

---

##### `haVmFailureInterval`<sup>Optional</sup> <a name="haVmFailureInterval" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmFailureInterval"></a>

```typescript
public readonly haVmFailureInterval: number;
```

- *Type:* number

If a heartbeat from this virtual machine is not received within this configured interval, the virtual machine is marked as failed.

The value is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#ha_vm_failure_interval HaVmOverride#ha_vm_failure_interval}

---

##### `haVmMaximumFailureWindow`<sup>Optional</sup> <a name="haVmMaximumFailureWindow" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumFailureWindow"></a>

```typescript
public readonly haVmMaximumFailureWindow: number;
```

- *Type:* number

The length of the reset window in which ha_vm_maximum_resets can operate.

When this window expires, no more resets are attempted regardless of the setting configured in ha_vm_maximum_resets. -1 means no window, meaning an unlimited reset time is allotted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#ha_vm_maximum_failure_window HaVmOverride#ha_vm_maximum_failure_window}

---

##### `haVmMaximumResets`<sup>Optional</sup> <a name="haVmMaximumResets" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumResets"></a>

```typescript
public readonly haVmMaximumResets: number;
```

- *Type:* number

The maximum number of resets that HA will perform to this virtual machine when responding to a failure event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#ha_vm_maximum_resets HaVmOverride#ha_vm_maximum_resets}

---

##### `haVmMinimumUptime`<sup>Optional</sup> <a name="haVmMinimumUptime" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMinimumUptime"></a>

```typescript
public readonly haVmMinimumUptime: number;
```

- *Type:* number

The time, in seconds, that HA waits after powering on this virtual machine before monitoring for heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#ha_vm_minimum_uptime HaVmOverride#ha_vm_minimum_uptime}

---

##### `haVmMonitoring`<sup>Optional</sup> <a name="haVmMonitoring" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoring"></a>

```typescript
public readonly haVmMonitoring: string;
```

- *Type:* string

The type of virtual machine monitoring to use for this virtual machine.

Can be one of vmMonitoringDisabled, vmMonitoringOnly, or vmAndAppMonitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#ha_vm_monitoring HaVmOverride#ha_vm_monitoring}

---

##### `haVmMonitoringUseClusterDefaults`<sup>Optional</sup> <a name="haVmMonitoringUseClusterDefaults" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoringUseClusterDefaults"></a>

```typescript
public readonly haVmMonitoringUseClusterDefaults: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether or not the cluster's default settings or the VM override settings specified in this resource are used for virtual machine monitoring.

The default is true (use cluster defaults) - set to false to have overrides take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#ha_vm_monitoring_use_cluster_defaults HaVmOverride#ha_vm_monitoring_use_cluster_defaults}

---

##### `haVmRestartPriority`<sup>Optional</sup> <a name="haVmRestartPriority" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartPriority"></a>

```typescript
public readonly haVmRestartPriority: string;
```

- *Type:* string

The restart priority for this virtual machine when vSphere detects a host failure.

Can be one of clusterRestartPriority, lowest, low, medium, high, or highest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#ha_vm_restart_priority HaVmOverride#ha_vm_restart_priority}

---

##### `haVmRestartTimeout`<sup>Optional</sup> <a name="haVmRestartTimeout" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartTimeout"></a>

```typescript
public readonly haVmRestartTimeout: number;
```

- *Type:* number

The maximum time, in seconds, that vSphere HA will wait for the virtual machine to be ready.

Use -1 to use the cluster default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#ha_vm_restart_timeout HaVmOverride#ha_vm_restart_timeout}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/ha_vm_override#id HaVmOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



