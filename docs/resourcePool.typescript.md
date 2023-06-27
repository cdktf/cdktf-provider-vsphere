# `vsphere_resource_pool`

Refer to the Terraform Registory for docs: [`vsphere_resource_pool`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool).

# `resourcePool` Submodule <a name="`resourcePool` Submodule" id="@cdktf/provider-vsphere.resourcePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcePool <a name="ResourcePool" id="@cdktf/provider-vsphere.resourcePool.ResourcePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool vsphere_resource_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer"></a>

```typescript
import { resourcePool } from '@cdktf/provider-vsphere'

new resourcePool.ResourcePool(scope: Construct, id: string, config: ResourcePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig">ResourcePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig">ResourcePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuExpandable">resetCpuExpandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuLimit">resetCpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuReservation">resetCpuReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuShareLevel">resetCpuShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuShares">resetCpuShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryExpandable">resetMemoryExpandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryLimit">resetMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryReservation">resetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryShareLevel">resetMemoryShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryShares">resetMemoryShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetScaleDescendantsShares">resetScaleDescendantsShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCpuExpandable` <a name="resetCpuExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuExpandable"></a>

```typescript
public resetCpuExpandable(): void
```

##### `resetCpuLimit` <a name="resetCpuLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuLimit"></a>

```typescript
public resetCpuLimit(): void
```

##### `resetCpuReservation` <a name="resetCpuReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuReservation"></a>

```typescript
public resetCpuReservation(): void
```

##### `resetCpuShareLevel` <a name="resetCpuShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuShareLevel"></a>

```typescript
public resetCpuShareLevel(): void
```

##### `resetCpuShares` <a name="resetCpuShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuShares"></a>

```typescript
public resetCpuShares(): void
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCustomAttributes"></a>

```typescript
public resetCustomAttributes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMemoryExpandable` <a name="resetMemoryExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryExpandable"></a>

```typescript
public resetMemoryExpandable(): void
```

##### `resetMemoryLimit` <a name="resetMemoryLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryLimit"></a>

```typescript
public resetMemoryLimit(): void
```

##### `resetMemoryReservation` <a name="resetMemoryReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryReservation"></a>

```typescript
public resetMemoryReservation(): void
```

##### `resetMemoryShareLevel` <a name="resetMemoryShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryShareLevel"></a>

```typescript
public resetMemoryShareLevel(): void
```

##### `resetMemoryShares` <a name="resetMemoryShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryShares"></a>

```typescript
public resetMemoryShares(): void
```

##### `resetScaleDescendantsShares` <a name="resetScaleDescendantsShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetScaleDescendantsShares"></a>

```typescript
public resetScaleDescendantsShares(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isConstruct"></a>

```typescript
import { resourcePool } from '@cdktf/provider-vsphere'

resourcePool.ResourcePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformElement"></a>

```typescript
import { resourcePool } from '@cdktf/provider-vsphere'

resourcePool.ResourcePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformResource"></a>

```typescript
import { resourcePool } from '@cdktf/provider-vsphere'

resourcePool.ResourcePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuExpandableInput">cpuExpandableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuLimitInput">cpuLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuReservationInput">cpuReservationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShareLevelInput">cpuShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuSharesInput">cpuSharesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.customAttributesInput">customAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryExpandableInput">memoryExpandableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryLimitInput">memoryLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryReservationInput">memoryReservationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShareLevelInput">memoryShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memorySharesInput">memorySharesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.parentResourcePoolIdInput">parentResourcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.scaleDescendantsSharesInput">scaleDescendantsSharesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuExpandable">cpuExpandable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuLimit">cpuLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuReservation">cpuReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShareLevel">cpuShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShares">cpuShares</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryExpandable">memoryExpandable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryLimit">memoryLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryReservation">memoryReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShareLevel">memoryShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShares">memoryShares</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.parentResourcePoolId">parentResourcePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.scaleDescendantsShares">scaleDescendantsShares</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cpuExpandableInput`<sup>Optional</sup> <a name="cpuExpandableInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuExpandableInput"></a>

```typescript
public readonly cpuExpandableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuLimitInput`<sup>Optional</sup> <a name="cpuLimitInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuLimitInput"></a>

```typescript
public readonly cpuLimitInput: number;
```

- *Type:* number

---

##### `cpuReservationInput`<sup>Optional</sup> <a name="cpuReservationInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuReservationInput"></a>

```typescript
public readonly cpuReservationInput: number;
```

- *Type:* number

---

##### `cpuShareLevelInput`<sup>Optional</sup> <a name="cpuShareLevelInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShareLevelInput"></a>

```typescript
public readonly cpuShareLevelInput: string;
```

- *Type:* string

---

##### `cpuSharesInput`<sup>Optional</sup> <a name="cpuSharesInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuSharesInput"></a>

```typescript
public readonly cpuSharesInput: number;
```

- *Type:* number

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.customAttributesInput"></a>

```typescript
public readonly customAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memoryExpandableInput`<sup>Optional</sup> <a name="memoryExpandableInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryExpandableInput"></a>

```typescript
public readonly memoryExpandableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memoryLimitInput`<sup>Optional</sup> <a name="memoryLimitInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryLimitInput"></a>

```typescript
public readonly memoryLimitInput: number;
```

- *Type:* number

---

##### `memoryReservationInput`<sup>Optional</sup> <a name="memoryReservationInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryReservationInput"></a>

```typescript
public readonly memoryReservationInput: number;
```

- *Type:* number

---

##### `memoryShareLevelInput`<sup>Optional</sup> <a name="memoryShareLevelInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShareLevelInput"></a>

```typescript
public readonly memoryShareLevelInput: string;
```

- *Type:* string

---

##### `memorySharesInput`<sup>Optional</sup> <a name="memorySharesInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memorySharesInput"></a>

```typescript
public readonly memorySharesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentResourcePoolIdInput`<sup>Optional</sup> <a name="parentResourcePoolIdInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.parentResourcePoolIdInput"></a>

```typescript
public readonly parentResourcePoolIdInput: string;
```

- *Type:* string

---

##### `scaleDescendantsSharesInput`<sup>Optional</sup> <a name="scaleDescendantsSharesInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.scaleDescendantsSharesInput"></a>

```typescript
public readonly scaleDescendantsSharesInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `cpuExpandable`<sup>Required</sup> <a name="cpuExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuExpandable"></a>

```typescript
public readonly cpuExpandable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuLimit`<sup>Required</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuLimit"></a>

```typescript
public readonly cpuLimit: number;
```

- *Type:* number

---

##### `cpuReservation`<sup>Required</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuReservation"></a>

```typescript
public readonly cpuReservation: number;
```

- *Type:* number

---

##### `cpuShareLevel`<sup>Required</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShareLevel"></a>

```typescript
public readonly cpuShareLevel: string;
```

- *Type:* string

---

##### `cpuShares`<sup>Required</sup> <a name="cpuShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShares"></a>

```typescript
public readonly cpuShares: number;
```

- *Type:* number

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memoryExpandable`<sup>Required</sup> <a name="memoryExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryExpandable"></a>

```typescript
public readonly memoryExpandable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memoryLimit`<sup>Required</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryLimit"></a>

```typescript
public readonly memoryLimit: number;
```

- *Type:* number

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: number;
```

- *Type:* number

---

##### `memoryShareLevel`<sup>Required</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShareLevel"></a>

```typescript
public readonly memoryShareLevel: string;
```

- *Type:* string

---

##### `memoryShares`<sup>Required</sup> <a name="memoryShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShares"></a>

```typescript
public readonly memoryShares: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentResourcePoolId`<sup>Required</sup> <a name="parentResourcePoolId" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.parentResourcePoolId"></a>

```typescript
public readonly parentResourcePoolId: string;
```

- *Type:* string

---

##### `scaleDescendantsShares`<sup>Required</sup> <a name="scaleDescendantsShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.scaleDescendantsShares"></a>

```typescript
public readonly scaleDescendantsShares: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcePoolConfig <a name="ResourcePoolConfig" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.Initializer"></a>

```typescript
import { resourcePool } from '@cdktf/provider-vsphere'

const resourcePoolConfig: resourcePool.ResourcePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.name">name</a></code> | <code>string</code> | Name of resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.parentResourcePoolId">parentResourcePoolId</a></code> | <code>string</code> | The ID of the root resource pool of the compute resource the resource pool is in. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuExpandable">cpuExpandable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuLimit">cpuLimit</a></code> | <code>number</code> | The utilization of a resource pool will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuReservation">cpuReservation</a></code> | <code>number</code> | Amount of CPU (MHz) that is guaranteed available to the resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuShareLevel">cpuShareLevel</a></code> | <code>string</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuShares">cpuShares</a></code> | <code>number</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool#id ResourcePool#id}. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryExpandable">memoryExpandable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryLimit">memoryLimit</a></code> | <code>number</code> | The utilization of a resource pool will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryReservation">memoryReservation</a></code> | <code>number</code> | Amount of memory (MB) that is guaranteed available to the resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryShareLevel">memoryShareLevel</a></code> | <code>string</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryShares">memoryShares</a></code> | <code>number</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.scaleDescendantsShares">scaleDescendantsShares</a></code> | <code>string</code> | Determines if the shares of all descendants of the resource pool are scaled up or down when the shares of the resource pool are scaled up or down. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool#name ResourcePool#name}

---

##### `parentResourcePoolId`<sup>Required</sup> <a name="parentResourcePoolId" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.parentResourcePoolId"></a>

```typescript
public readonly parentResourcePoolId: string;
```

- *Type:* string

The ID of the root resource pool of the compute resource the resource pool is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool#parent_resource_pool_id ResourcePool#parent_resource_pool_id}

---

##### `cpuExpandable`<sup>Optional</sup> <a name="cpuExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuExpandable"></a>

```typescript
public readonly cpuExpandable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool#cpu_expandable ResourcePool#cpu_expandable}

---

##### `cpuLimit`<sup>Optional</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuLimit"></a>

```typescript
public readonly cpuLimit: number;
```

- *Type:* number

The utilization of a resource pool will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool#cpu_limit ResourcePool#cpu_limit}

---

##### `cpuReservation`<sup>Optional</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuReservation"></a>

```typescript
public readonly cpuReservation: number;
```

- *Type:* number

Amount of CPU (MHz) that is guaranteed available to the resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool#cpu_reservation ResourcePool#cpu_reservation}

---

##### `cpuShareLevel`<sup>Optional</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuShareLevel"></a>

```typescript
public readonly cpuShareLevel: string;
```

- *Type:* string

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool#cpu_share_level ResourcePool#cpu_share_level}

---

##### `cpuShares`<sup>Optional</sup> <a name="cpuShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuShares"></a>

```typescript
public readonly cpuShares: number;
```

- *Type:* number

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, cpu_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool#cpu_shares ResourcePool#cpu_shares}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool#custom_attributes ResourcePool#custom_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool#id ResourcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memoryExpandable`<sup>Optional</sup> <a name="memoryExpandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryExpandable"></a>

```typescript
public readonly memoryExpandable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool#memory_expandable ResourcePool#memory_expandable}

---

##### `memoryLimit`<sup>Optional</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryLimit"></a>

```typescript
public readonly memoryLimit: number;
```

- *Type:* number

The utilization of a resource pool will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool#memory_limit ResourcePool#memory_limit}

---

##### `memoryReservation`<sup>Optional</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: number;
```

- *Type:* number

Amount of memory (MB) that is guaranteed available to the resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool#memory_reservation ResourcePool#memory_reservation}

---

##### `memoryShareLevel`<sup>Optional</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryShareLevel"></a>

```typescript
public readonly memoryShareLevel: string;
```

- *Type:* string

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool#memory_share_level ResourcePool#memory_share_level}

---

##### `memoryShares`<sup>Optional</sup> <a name="memoryShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryShares"></a>

```typescript
public readonly memoryShares: number;
```

- *Type:* number

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, memory_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool#memory_shares ResourcePool#memory_shares}

---

##### `scaleDescendantsShares`<sup>Optional</sup> <a name="scaleDescendantsShares" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.scaleDescendantsShares"></a>

```typescript
public readonly scaleDescendantsShares: string;
```

- *Type:* string

Determines if the shares of all descendants of the resource pool are scaled up or down when the shares of the resource pool are scaled up or down.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool#scale_descendants_shares ResourcePool#scale_descendants_shares}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/resource_pool#tags ResourcePool#tags}

---



