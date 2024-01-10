# `dataVsphereVappContainer` Submodule <a name="`dataVsphereVappContainer` Submodule" id="@cdktf/provider-vsphere.dataVsphereVappContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereVappContainer <a name="DataVsphereVappContainer" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/vapp_container vsphere_vapp_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.Initializer"></a>

```typescript
import { dataVsphereVappContainer } from '@cdktf/provider-vsphere'

new dataVsphereVappContainer.DataVsphereVappContainer(scope: Construct, id: string, config: DataVsphereVappContainerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig">DataVsphereVappContainerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig">DataVsphereVappContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVsphereVappContainer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.isConstruct"></a>

```typescript
import { dataVsphereVappContainer } from '@cdktf/provider-vsphere'

dataVsphereVappContainer.DataVsphereVappContainer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.isTerraformElement"></a>

```typescript
import { dataVsphereVappContainer } from '@cdktf/provider-vsphere'

dataVsphereVappContainer.DataVsphereVappContainer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.isTerraformDataSource"></a>

```typescript
import { dataVsphereVappContainer } from '@cdktf/provider-vsphere'

dataVsphereVappContainer.DataVsphereVappContainer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.generateConfigForImport"></a>

```typescript
import { dataVsphereVappContainer } from '@cdktf/provider-vsphere'

dataVsphereVappContainer.DataVsphereVappContainer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataVsphereVappContainer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVsphereVappContainer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVsphereVappContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/vapp_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereVappContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereVappContainerConfig <a name="DataVsphereVappContainerConfig" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.Initializer"></a>

```typescript
import { dataVsphereVappContainer } from '@cdktf/provider-vsphere'

const dataVsphereVappContainerConfig: dataVsphereVappContainer.DataVsphereVappContainerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.datacenterId">datacenterId</a></code> | <code>string</code> | The Managed Object ID of the datacenter. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.name">name</a></code> | <code>string</code> | The name of the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/vapp_container#id DataVsphereVappContainer#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

The Managed Object ID of the datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/vapp_container#datacenter_id DataVsphereVappContainer#datacenter_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/vapp_container#name DataVsphereVappContainer#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereVappContainer.DataVsphereVappContainerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/vapp_container#id DataVsphereVappContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



