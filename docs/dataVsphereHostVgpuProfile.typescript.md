# `dataVsphereHostVgpuProfile` Submodule <a name="`dataVsphereHostVgpuProfile` Submodule" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereHostVgpuProfile <a name="DataVsphereHostVgpuProfile" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/host_vgpu_profile vsphere_host_vgpu_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer"></a>

```typescript
import { dataVsphereHostVgpuProfile } from '@cdktf/provider-vsphere'

new dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile(scope: Construct, id: string, config: DataVsphereHostVgpuProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig">DataVsphereHostVgpuProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig">DataVsphereHostVgpuProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetNameRegex">resetNameRegex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNameRegex` <a name="resetNameRegex" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetNameRegex"></a>

```typescript
public resetNameRegex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVsphereHostVgpuProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isConstruct"></a>

```typescript
import { dataVsphereHostVgpuProfile } from '@cdktf/provider-vsphere'

dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformElement"></a>

```typescript
import { dataVsphereHostVgpuProfile } from '@cdktf/provider-vsphere'

dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformDataSource"></a>

```typescript
import { dataVsphereHostVgpuProfile } from '@cdktf/provider-vsphere'

dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport"></a>

```typescript
import { dataVsphereHostVgpuProfile } from '@cdktf/provider-vsphere'

dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataVsphereHostVgpuProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVsphereHostVgpuProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVsphereHostVgpuProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/host_vgpu_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereHostVgpuProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.vgpuProfiles">vgpuProfiles</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList">DataVsphereHostVgpuProfileVgpuProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.hostIdInput">hostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.nameRegexInput">nameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.hostId">hostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.nameRegex">nameRegex</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `vgpuProfiles`<sup>Required</sup> <a name="vgpuProfiles" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.vgpuProfiles"></a>

```typescript
public readonly vgpuProfiles: DataVsphereHostVgpuProfileVgpuProfilesList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList">DataVsphereHostVgpuProfileVgpuProfilesList</a>

---

##### `hostIdInput`<sup>Optional</sup> <a name="hostIdInput" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.hostIdInput"></a>

```typescript
public readonly hostIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameRegexInput`<sup>Optional</sup> <a name="nameRegexInput" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.nameRegexInput"></a>

```typescript
public readonly nameRegexInput: string;
```

- *Type:* string

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereHostVgpuProfileConfig <a name="DataVsphereHostVgpuProfileConfig" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.Initializer"></a>

```typescript
import { dataVsphereHostVgpuProfile } from '@cdktf/provider-vsphere'

const dataVsphereHostVgpuProfileConfig: dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.hostId">hostId</a></code> | <code>string</code> | The Managed Object ID of the host system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/host_vgpu_profile#id DataVsphereHostVgpuProfile#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.nameRegex">nameRegex</a></code> | <code>string</code> | A regular expression used to match the vGPU Profile on the host. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

The Managed Object ID of the host system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/host_vgpu_profile#host_id DataVsphereHostVgpuProfile#host_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/host_vgpu_profile#id DataVsphereHostVgpuProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

A regular expression used to match the vGPU Profile on the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/host_vgpu_profile#name_regex DataVsphereHostVgpuProfile#name_regex}

---

### DataVsphereHostVgpuProfileVgpuProfiles <a name="DataVsphereHostVgpuProfileVgpuProfiles" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfiles.Initializer"></a>

```typescript
import { dataVsphereHostVgpuProfile } from '@cdktf/provider-vsphere'

const dataVsphereHostVgpuProfileVgpuProfiles: dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfiles = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataVsphereHostVgpuProfileVgpuProfilesList <a name="DataVsphereHostVgpuProfileVgpuProfilesList" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer"></a>

```typescript
import { dataVsphereHostVgpuProfile } from '@cdktf/provider-vsphere'

new dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.get"></a>

```typescript
public get(index: number): DataVsphereHostVgpuProfileVgpuProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataVsphereHostVgpuProfileVgpuProfilesOutputReference <a name="DataVsphereHostVgpuProfileVgpuProfilesOutputReference" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer"></a>

```typescript
import { dataVsphereHostVgpuProfile } from '@cdktf/provider-vsphere'

new dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.diskSnapshotSupported">diskSnapshotSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.memorySnapshotSupported">memorySnapshotSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.migrateSupported">migrateSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.suspendSupported">suspendSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.vgpu">vgpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfiles">DataVsphereHostVgpuProfileVgpuProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskSnapshotSupported`<sup>Required</sup> <a name="diskSnapshotSupported" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.diskSnapshotSupported"></a>

```typescript
public readonly diskSnapshotSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `memorySnapshotSupported`<sup>Required</sup> <a name="memorySnapshotSupported" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.memorySnapshotSupported"></a>

```typescript
public readonly memorySnapshotSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `migrateSupported`<sup>Required</sup> <a name="migrateSupported" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.migrateSupported"></a>

```typescript
public readonly migrateSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `suspendSupported`<sup>Required</sup> <a name="suspendSupported" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.suspendSupported"></a>

```typescript
public readonly suspendSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `vgpu`<sup>Required</sup> <a name="vgpu" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.vgpu"></a>

```typescript
public readonly vgpu: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataVsphereHostVgpuProfileVgpuProfiles;
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfiles">DataVsphereHostVgpuProfileVgpuProfiles</a>

---



