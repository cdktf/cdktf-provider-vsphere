# `dataVsphereNetwork` Submodule <a name="`dataVsphereNetwork` Submodule" id="@cdktf/provider-vsphere.dataVsphereNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereNetwork <a name="DataVsphereNetwork" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/network vsphere_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer"></a>

```typescript
import { dataVsphereNetwork } from '@cdktf/provider-vsphere'

new dataVsphereNetwork.DataVsphereNetwork(scope: Construct, id: string, config: DataVsphereNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig">DataVsphereNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig">DataVsphereNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetDatacenterId">resetDatacenterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetDistributedVirtualSwitchUuid">resetDistributedVirtualSwitchUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetRetryInterval">resetRetryInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetRetryTimeout">resetRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataVsphereNetworkFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>[]

---

##### `resetDatacenterId` <a name="resetDatacenterId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetDatacenterId"></a>

```typescript
public resetDatacenterId(): void
```

##### `resetDistributedVirtualSwitchUuid` <a name="resetDistributedVirtualSwitchUuid" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetDistributedVirtualSwitchUuid"></a>

```typescript
public resetDistributedVirtualSwitchUuid(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRetryInterval` <a name="resetRetryInterval" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetRetryInterval"></a>

```typescript
public resetRetryInterval(): void
```

##### `resetRetryTimeout` <a name="resetRetryTimeout" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetRetryTimeout"></a>

```typescript
public resetRetryTimeout(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVsphereNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isConstruct"></a>

```typescript
import { dataVsphereNetwork } from '@cdktf/provider-vsphere'

dataVsphereNetwork.DataVsphereNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformElement"></a>

```typescript
import { dataVsphereNetwork } from '@cdktf/provider-vsphere'

dataVsphereNetwork.DataVsphereNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformDataSource"></a>

```typescript
import { dataVsphereNetwork } from '@cdktf/provider-vsphere'

dataVsphereNetwork.DataVsphereNetwork.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport"></a>

```typescript
import { dataVsphereNetwork } from '@cdktf/provider-vsphere'

dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataVsphereNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVsphereNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVsphereNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList">DataVsphereNetworkFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.distributedVirtualSwitchUuidInput">distributedVirtualSwitchUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.retryIntervalInput">retryIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.retryTimeoutInput">retryTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.distributedVirtualSwitchUuid">distributedVirtualSwitchUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.retryInterval">retryInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.retryTimeout">retryTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.filter"></a>

```typescript
public readonly filter: DataVsphereNetworkFilterList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList">DataVsphereNetworkFilterList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `distributedVirtualSwitchUuidInput`<sup>Optional</sup> <a name="distributedVirtualSwitchUuidInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.distributedVirtualSwitchUuidInput"></a>

```typescript
public readonly distributedVirtualSwitchUuidInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataVsphereNetworkFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `retryIntervalInput`<sup>Optional</sup> <a name="retryIntervalInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.retryIntervalInput"></a>

```typescript
public readonly retryIntervalInput: number;
```

- *Type:* number

---

##### `retryTimeoutInput`<sup>Optional</sup> <a name="retryTimeoutInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.retryTimeoutInput"></a>

```typescript
public readonly retryTimeoutInput: number;
```

- *Type:* number

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `distributedVirtualSwitchUuid`<sup>Required</sup> <a name="distributedVirtualSwitchUuid" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.distributedVirtualSwitchUuid"></a>

```typescript
public readonly distributedVirtualSwitchUuid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retryInterval`<sup>Required</sup> <a name="retryInterval" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.retryInterval"></a>

```typescript
public readonly retryInterval: number;
```

- *Type:* number

---

##### `retryTimeout`<sup>Required</sup> <a name="retryTimeout" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.retryTimeout"></a>

```typescript
public readonly retryTimeout: number;
```

- *Type:* number

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereNetworkConfig <a name="DataVsphereNetworkConfig" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.Initializer"></a>

```typescript
import { dataVsphereNetwork } from '@cdktf/provider-vsphere'

const dataVsphereNetworkConfig: dataVsphereNetwork.DataVsphereNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.name">name</a></code> | <code>string</code> | The name or path of the network. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.datacenterId">datacenterId</a></code> | <code>string</code> | The managed object ID of the datacenter the network is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.distributedVirtualSwitchUuid">distributedVirtualSwitchUuid</a></code> | <code>string</code> | Id of the distributed virtual switch of which the port group is a part of. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/network#id DataVsphereNetwork#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.retryInterval">retryInterval</a></code> | <code>number</code> | Retry interval (in milliseconds) when probing the network. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.retryTimeout">retryTimeout</a></code> | <code>number</code> | Timeout (in seconds) if network is not present yet. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Id of the VPC which the network belongs to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name or path of the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/network#name DataVsphereNetwork#name}

---

##### `datacenterId`<sup>Optional</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

The managed object ID of the datacenter the network is in.

This is required if the supplied path is not an absolute path containing a datacenter and there are multiple datacenters in your infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/network#datacenter_id DataVsphereNetwork#datacenter_id}

---

##### `distributedVirtualSwitchUuid`<sup>Optional</sup> <a name="distributedVirtualSwitchUuid" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.distributedVirtualSwitchUuid"></a>

```typescript
public readonly distributedVirtualSwitchUuid: string;
```

- *Type:* string

Id of the distributed virtual switch of which the port group is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/network#distributed_virtual_switch_uuid DataVsphereNetwork#distributed_virtual_switch_uuid}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataVsphereNetworkFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/network#filter DataVsphereNetwork#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/network#id DataVsphereNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retryInterval`<sup>Optional</sup> <a name="retryInterval" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.retryInterval"></a>

```typescript
public readonly retryInterval: number;
```

- *Type:* number

Retry interval (in milliseconds) when probing the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/network#retry_interval DataVsphereNetwork#retry_interval}

---

##### `retryTimeout`<sup>Optional</sup> <a name="retryTimeout" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.retryTimeout"></a>

```typescript
public readonly retryTimeout: number;
```

- *Type:* number

Timeout (in seconds) if network is not present yet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/network#retry_timeout DataVsphereNetwork#retry_timeout}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Id of the VPC which the network belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/network#vpc_id DataVsphereNetwork#vpc_id}

---

### DataVsphereNetworkFilter <a name="DataVsphereNetworkFilter" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter.Initializer"></a>

```typescript
import { dataVsphereNetwork } from '@cdktf/provider-vsphere'

const dataVsphereNetworkFilter: dataVsphereNetwork.DataVsphereNetworkFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter.property.networkType">networkType</a></code> | <code>string</code> | The type of the network (e.g., Network, DistributedVirtualPortgroup, OpaqueNetwork). |

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

The type of the network (e.g., Network, DistributedVirtualPortgroup, OpaqueNetwork).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/network#network_type DataVsphereNetwork#network_type}

---

## Classes <a name="Classes" id="Classes"></a>

### DataVsphereNetworkFilterList <a name="DataVsphereNetworkFilterList" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.Initializer"></a>

```typescript
import { dataVsphereNetwork } from '@cdktf/provider-vsphere'

new dataVsphereNetwork.DataVsphereNetworkFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.get"></a>

```typescript
public get(index: number): DataVsphereNetworkFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataVsphereNetworkFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>[]

---


### DataVsphereNetworkFilterOutputReference <a name="DataVsphereNetworkFilterOutputReference" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer"></a>

```typescript
import { dataVsphereNetwork } from '@cdktf/provider-vsphere'

new dataVsphereNetwork.DataVsphereNetworkFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.resetNetworkType">resetNetworkType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataVsphereNetworkFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkFilter">DataVsphereNetworkFilter</a>

---



