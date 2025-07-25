# `dataVsphereDistributedVirtualSwitch` Submodule <a name="`dataVsphereDistributedVirtualSwitch` Submodule" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereDistributedVirtualSwitch <a name="DataVsphereDistributedVirtualSwitch" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/distributed_virtual_switch vsphere_distributed_virtual_switch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.Initializer"></a>

```typescript
import { dataVsphereDistributedVirtualSwitch } from '@cdktf/provider-vsphere'

new dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch(scope: Construct, id: string, config: DataVsphereDistributedVirtualSwitchConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig">DataVsphereDistributedVirtualSwitchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig">DataVsphereDistributedVirtualSwitchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.resetDatacenterId">resetDatacenterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDatacenterId` <a name="resetDatacenterId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.resetDatacenterId"></a>

```typescript
public resetDatacenterId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVsphereDistributedVirtualSwitch resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isConstruct"></a>

```typescript
import { dataVsphereDistributedVirtualSwitch } from '@cdktf/provider-vsphere'

dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isTerraformElement"></a>

```typescript
import { dataVsphereDistributedVirtualSwitch } from '@cdktf/provider-vsphere'

dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isTerraformDataSource"></a>

```typescript
import { dataVsphereDistributedVirtualSwitch } from '@cdktf/provider-vsphere'

dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.generateConfigForImport"></a>

```typescript
import { dataVsphereDistributedVirtualSwitch } from '@cdktf/provider-vsphere'

dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataVsphereDistributedVirtualSwitch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVsphereDistributedVirtualSwitch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVsphereDistributedVirtualSwitch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/distributed_virtual_switch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereDistributedVirtualSwitch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.uplinks">uplinks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `uplinks`<sup>Required</sup> <a name="uplinks" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.uplinks"></a>

```typescript
public readonly uplinks: string[];
```

- *Type:* string[]

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereDistributedVirtualSwitchConfig <a name="DataVsphereDistributedVirtualSwitchConfig" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.Initializer"></a>

```typescript
import { dataVsphereDistributedVirtualSwitch } from '@cdktf/provider-vsphere'

const dataVsphereDistributedVirtualSwitchConfig: dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.name">name</a></code> | <code>string</code> | The name of the distributed virtual switch. This can be a name or path. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.datacenterId">datacenterId</a></code> | <code>string</code> | The managed object ID of the datacenter the DVS is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/distributed_virtual_switch#id DataVsphereDistributedVirtualSwitch#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the distributed virtual switch. This can be a name or path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/distributed_virtual_switch#name DataVsphereDistributedVirtualSwitch#name}

---

##### `datacenterId`<sup>Optional</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

The managed object ID of the datacenter the DVS is in.

This is required if the supplied path is not an absolute path containing a datacenter and there are multiple datacenters in your infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/distributed_virtual_switch#datacenter_id DataVsphereDistributedVirtualSwitch#datacenter_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/distributed_virtual_switch#id DataVsphereDistributedVirtualSwitch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



