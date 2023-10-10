# `data_vsphere_custom_attribute`

Refer to the Terraform Registory for docs: [`data_vsphere_custom_attribute`](https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/data-sources/custom_attribute).

# `dataVsphereCustomAttribute` Submodule <a name="`dataVsphereCustomAttribute` Submodule" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereCustomAttribute <a name="DataVsphereCustomAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/data-sources/custom_attribute vsphere_custom_attribute}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.Initializer"></a>

```typescript
import { dataVsphereCustomAttribute } from '@cdktf/provider-vsphere'

new dataVsphereCustomAttribute.DataVsphereCustomAttribute(scope: Construct, id: string, config: DataVsphereCustomAttributeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig">DataVsphereCustomAttributeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig">DataVsphereCustomAttributeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.isConstruct"></a>

```typescript
import { dataVsphereCustomAttribute } from '@cdktf/provider-vsphere'

dataVsphereCustomAttribute.DataVsphereCustomAttribute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.isTerraformElement"></a>

```typescript
import { dataVsphereCustomAttribute } from '@cdktf/provider-vsphere'

dataVsphereCustomAttribute.DataVsphereCustomAttribute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.isTerraformDataSource"></a>

```typescript
import { dataVsphereCustomAttribute } from '@cdktf/provider-vsphere'

dataVsphereCustomAttribute.DataVsphereCustomAttribute.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.managedObjectType">managedObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `managedObjectType`<sup>Required</sup> <a name="managedObjectType" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.managedObjectType"></a>

```typescript
public readonly managedObjectType: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttribute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereCustomAttributeConfig <a name="DataVsphereCustomAttributeConfig" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.Initializer"></a>

```typescript
import { dataVsphereCustomAttribute } from '@cdktf/provider-vsphere'

const dataVsphereCustomAttributeConfig: dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.name">name</a></code> | <code>string</code> | The display name of the custom attribute. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/data-sources/custom_attribute#id DataVsphereCustomAttribute#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The display name of the custom attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/data-sources/custom_attribute#name DataVsphereCustomAttribute#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereCustomAttribute.DataVsphereCustomAttributeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/data-sources/custom_attribute#id DataVsphereCustomAttribute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



