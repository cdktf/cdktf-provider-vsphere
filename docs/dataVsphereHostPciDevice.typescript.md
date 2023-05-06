# `data_vsphere_host_pci_device`

Refer to the Terraform Registory for docs: [`data_vsphere_host_pci_device`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/host_pci_device).

# `dataVsphereHostPciDevice` Submodule <a name="`dataVsphereHostPciDevice` Submodule" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereHostPciDevice <a name="DataVsphereHostPciDevice" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/host_pci_device vsphere_host_pci_device}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer"></a>

```typescript
import { dataVsphereHostPciDevice } from '@cdktf/provider-vsphere'

new dataVsphereHostPciDevice.DataVsphereHostPciDevice(scope: Construct, id: string, config: DataVsphereHostPciDeviceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig">DataVsphereHostPciDeviceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig">DataVsphereHostPciDeviceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetClassId">resetClassId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetNameRegex">resetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetVendorId">resetVendorId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetClassId` <a name="resetClassId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetClassId"></a>

```typescript
public resetClassId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNameRegex` <a name="resetNameRegex" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetNameRegex"></a>

```typescript
public resetNameRegex(): void
```

##### `resetVendorId` <a name="resetVendorId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetVendorId"></a>

```typescript
public resetVendorId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isConstruct"></a>

```typescript
import { dataVsphereHostPciDevice } from '@cdktf/provider-vsphere'

dataVsphereHostPciDevice.DataVsphereHostPciDevice.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformElement"></a>

```typescript
import { dataVsphereHostPciDevice } from '@cdktf/provider-vsphere'

dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformDataSource"></a>

```typescript
import { dataVsphereHostPciDevice } from '@cdktf/provider-vsphere'

dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.classIdInput">classIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.hostIdInput">hostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.nameRegexInput">nameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.vendorIdInput">vendorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.classId">classId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.hostId">hostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.nameRegex">nameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.vendorId">vendorId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `classIdInput`<sup>Optional</sup> <a name="classIdInput" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.classIdInput"></a>

```typescript
public readonly classIdInput: string;
```

- *Type:* string

---

##### `hostIdInput`<sup>Optional</sup> <a name="hostIdInput" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.hostIdInput"></a>

```typescript
public readonly hostIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameRegexInput`<sup>Optional</sup> <a name="nameRegexInput" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.nameRegexInput"></a>

```typescript
public readonly nameRegexInput: string;
```

- *Type:* string

---

##### `vendorIdInput`<sup>Optional</sup> <a name="vendorIdInput" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.vendorIdInput"></a>

```typescript
public readonly vendorIdInput: string;
```

- *Type:* string

---

##### `classId`<sup>Required</sup> <a name="classId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.classId"></a>

```typescript
public readonly classId: string;
```

- *Type:* string

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

---

##### `vendorId`<sup>Required</sup> <a name="vendorId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.vendorId"></a>

```typescript
public readonly vendorId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereHostPciDeviceConfig <a name="DataVsphereHostPciDeviceConfig" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.Initializer"></a>

```typescript
import { dataVsphereHostPciDevice } from '@cdktf/provider-vsphere'

const dataVsphereHostPciDeviceConfig: dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.hostId">hostId</a></code> | <code>string</code> | The Managed Object ID of the host system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.classId">classId</a></code> | <code>string</code> | The hexadecimal value of the PCI device's class ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/host_pci_device#id DataVsphereHostPciDevice#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.nameRegex">nameRegex</a></code> | <code>string</code> | A regular expression used to match the PCI device name. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.vendorId">vendorId</a></code> | <code>string</code> | The hexadecimal value of the PCI device's vendor ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

The Managed Object ID of the host system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/host_pci_device#host_id DataVsphereHostPciDevice#host_id}

---

##### `classId`<sup>Optional</sup> <a name="classId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.classId"></a>

```typescript
public readonly classId: string;
```

- *Type:* string

The hexadecimal value of the PCI device's class ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/host_pci_device#class_id DataVsphereHostPciDevice#class_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/host_pci_device#id DataVsphereHostPciDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

A regular expression used to match the PCI device name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/host_pci_device#name_regex DataVsphereHostPciDevice#name_regex}

---

##### `vendorId`<sup>Optional</sup> <a name="vendorId" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.vendorId"></a>

```typescript
public readonly vendorId: string;
```

- *Type:* string

The hexadecimal value of the PCI device's vendor ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/host_pci_device#vendor_id DataVsphereHostPciDevice#vendor_id}

---



