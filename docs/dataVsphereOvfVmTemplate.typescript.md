# `dataVsphereOvfVmTemplate` Submodule <a name="`dataVsphereOvfVmTemplate` Submodule" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereOvfVmTemplate <a name="DataVsphereOvfVmTemplate" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template vsphere_ovf_vm_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer"></a>

```typescript
import { dataVsphereOvfVmTemplate } from '@cdktf/provider-vsphere'

new dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate(scope: Construct, id: string, config: DataVsphereOvfVmTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig">DataVsphereOvfVmTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig">DataVsphereOvfVmTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetAllowUnverifiedSslCert">resetAllowUnverifiedSslCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDatastoreId">resetDatastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDeploymentOption">resetDeploymentOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDiskProvisioning">resetDiskProvisioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetEnableHiddenProperties">resetEnableHiddenProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetIpAllocationPolicy">resetIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetIpProtocol">resetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetLocalOvfPath">resetLocalOvfPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetOvfNetworkMap">resetOvfNetworkMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetRemoteOvfUrl">resetRemoteOvfUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAllowUnverifiedSslCert` <a name="resetAllowUnverifiedSslCert" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetAllowUnverifiedSslCert"></a>

```typescript
public resetAllowUnverifiedSslCert(): void
```

##### `resetDatastoreId` <a name="resetDatastoreId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDatastoreId"></a>

```typescript
public resetDatastoreId(): void
```

##### `resetDeploymentOption` <a name="resetDeploymentOption" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDeploymentOption"></a>

```typescript
public resetDeploymentOption(): void
```

##### `resetDiskProvisioning` <a name="resetDiskProvisioning" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDiskProvisioning"></a>

```typescript
public resetDiskProvisioning(): void
```

##### `resetEnableHiddenProperties` <a name="resetEnableHiddenProperties" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetEnableHiddenProperties"></a>

```typescript
public resetEnableHiddenProperties(): void
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetFolder"></a>

```typescript
public resetFolder(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAllocationPolicy` <a name="resetIpAllocationPolicy" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetIpAllocationPolicy"></a>

```typescript
public resetIpAllocationPolicy(): void
```

##### `resetIpProtocol` <a name="resetIpProtocol" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetIpProtocol"></a>

```typescript
public resetIpProtocol(): void
```

##### `resetLocalOvfPath` <a name="resetLocalOvfPath" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetLocalOvfPath"></a>

```typescript
public resetLocalOvfPath(): void
```

##### `resetOvfNetworkMap` <a name="resetOvfNetworkMap" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetOvfNetworkMap"></a>

```typescript
public resetOvfNetworkMap(): void
```

##### `resetRemoteOvfUrl` <a name="resetRemoteOvfUrl" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetRemoteOvfUrl"></a>

```typescript
public resetRemoteOvfUrl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVsphereOvfVmTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isConstruct"></a>

```typescript
import { dataVsphereOvfVmTemplate } from '@cdktf/provider-vsphere'

dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformElement"></a>

```typescript
import { dataVsphereOvfVmTemplate } from '@cdktf/provider-vsphere'

dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformDataSource"></a>

```typescript
import { dataVsphereOvfVmTemplate } from '@cdktf/provider-vsphere'

dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.generateConfigForImport"></a>

```typescript
import { dataVsphereOvfVmTemplate } from '@cdktf/provider-vsphere'

dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataVsphereOvfVmTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVsphereOvfVmTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVsphereOvfVmTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereOvfVmTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.alternateGuestName">alternateGuestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.annotation">annotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuHotAddEnabled">cpuHotAddEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuHotRemoveEnabled">cpuHotRemoveEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuPerformanceCountersEnabled">cpuPerformanceCountersEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.firmware">firmware</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.guestId">guestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ideControllerCount">ideControllerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.memoryHotAddEnabled">memoryHotAddEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.nestedHvEnabled">nestedHvEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.numCoresPerSocket">numCoresPerSocket</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.numCpus">numCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.sataControllerCount">sataControllerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.scsiControllerCount">scsiControllerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.scsiType">scsiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.swapPlacementPolicy">swapPlacementPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.allowUnverifiedSslCertInput">allowUnverifiedSslCertInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.datastoreIdInput">datastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.deploymentOptionInput">deploymentOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.diskProvisioningInput">diskProvisioningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.enableHiddenPropertiesInput">enableHiddenPropertiesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.hostSystemIdInput">hostSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipAllocationPolicyInput">ipAllocationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.localOvfPathInput">localOvfPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ovfNetworkMapInput">ovfNetworkMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.remoteOvfUrlInput">remoteOvfUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.resourcePoolIdInput">resourcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.allowUnverifiedSslCert">allowUnverifiedSslCert</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.datastoreId">datastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.deploymentOption">deploymentOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.diskProvisioning">diskProvisioning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.enableHiddenProperties">enableHiddenProperties</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.hostSystemId">hostSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipAllocationPolicy">ipAllocationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.localOvfPath">localOvfPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ovfNetworkMap">ovfNetworkMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.remoteOvfUrl">remoteOvfUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.resourcePoolId">resourcePoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `alternateGuestName`<sup>Required</sup> <a name="alternateGuestName" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.alternateGuestName"></a>

```typescript
public readonly alternateGuestName: string;
```

- *Type:* string

---

##### `annotation`<sup>Required</sup> <a name="annotation" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.annotation"></a>

```typescript
public readonly annotation: string;
```

- *Type:* string

---

##### `cpuHotAddEnabled`<sup>Required</sup> <a name="cpuHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuHotAddEnabled"></a>

```typescript
public readonly cpuHotAddEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `cpuHotRemoveEnabled`<sup>Required</sup> <a name="cpuHotRemoveEnabled" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuHotRemoveEnabled"></a>

```typescript
public readonly cpuHotRemoveEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `cpuPerformanceCountersEnabled`<sup>Required</sup> <a name="cpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuPerformanceCountersEnabled"></a>

```typescript
public readonly cpuPerformanceCountersEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.firmware"></a>

```typescript
public readonly firmware: string;
```

- *Type:* string

---

##### `guestId`<sup>Required</sup> <a name="guestId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.guestId"></a>

```typescript
public readonly guestId: string;
```

- *Type:* string

---

##### `ideControllerCount`<sup>Required</sup> <a name="ideControllerCount" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ideControllerCount"></a>

```typescript
public readonly ideControllerCount: number;
```

- *Type:* number

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `memoryHotAddEnabled`<sup>Required</sup> <a name="memoryHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.memoryHotAddEnabled"></a>

```typescript
public readonly memoryHotAddEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nestedHvEnabled`<sup>Required</sup> <a name="nestedHvEnabled" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.nestedHvEnabled"></a>

```typescript
public readonly nestedHvEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `numCoresPerSocket`<sup>Required</sup> <a name="numCoresPerSocket" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.numCoresPerSocket"></a>

```typescript
public readonly numCoresPerSocket: number;
```

- *Type:* number

---

##### `numCpus`<sup>Required</sup> <a name="numCpus" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.numCpus"></a>

```typescript
public readonly numCpus: number;
```

- *Type:* number

---

##### `sataControllerCount`<sup>Required</sup> <a name="sataControllerCount" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.sataControllerCount"></a>

```typescript
public readonly sataControllerCount: number;
```

- *Type:* number

---

##### `scsiControllerCount`<sup>Required</sup> <a name="scsiControllerCount" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.scsiControllerCount"></a>

```typescript
public readonly scsiControllerCount: number;
```

- *Type:* number

---

##### `scsiType`<sup>Required</sup> <a name="scsiType" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.scsiType"></a>

```typescript
public readonly scsiType: string;
```

- *Type:* string

---

##### `swapPlacementPolicy`<sup>Required</sup> <a name="swapPlacementPolicy" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.swapPlacementPolicy"></a>

```typescript
public readonly swapPlacementPolicy: string;
```

- *Type:* string

---

##### `allowUnverifiedSslCertInput`<sup>Optional</sup> <a name="allowUnverifiedSslCertInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.allowUnverifiedSslCertInput"></a>

```typescript
public readonly allowUnverifiedSslCertInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datastoreIdInput`<sup>Optional</sup> <a name="datastoreIdInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.datastoreIdInput"></a>

```typescript
public readonly datastoreIdInput: string;
```

- *Type:* string

---

##### `deploymentOptionInput`<sup>Optional</sup> <a name="deploymentOptionInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.deploymentOptionInput"></a>

```typescript
public readonly deploymentOptionInput: string;
```

- *Type:* string

---

##### `diskProvisioningInput`<sup>Optional</sup> <a name="diskProvisioningInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.diskProvisioningInput"></a>

```typescript
public readonly diskProvisioningInput: string;
```

- *Type:* string

---

##### `enableHiddenPropertiesInput`<sup>Optional</sup> <a name="enableHiddenPropertiesInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.enableHiddenPropertiesInput"></a>

```typescript
public readonly enableHiddenPropertiesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `hostSystemIdInput`<sup>Optional</sup> <a name="hostSystemIdInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.hostSystemIdInput"></a>

```typescript
public readonly hostSystemIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAllocationPolicyInput`<sup>Optional</sup> <a name="ipAllocationPolicyInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipAllocationPolicyInput"></a>

```typescript
public readonly ipAllocationPolicyInput: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `localOvfPathInput`<sup>Optional</sup> <a name="localOvfPathInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.localOvfPathInput"></a>

```typescript
public readonly localOvfPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ovfNetworkMapInput`<sup>Optional</sup> <a name="ovfNetworkMapInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ovfNetworkMapInput"></a>

```typescript
public readonly ovfNetworkMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `remoteOvfUrlInput`<sup>Optional</sup> <a name="remoteOvfUrlInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.remoteOvfUrlInput"></a>

```typescript
public readonly remoteOvfUrlInput: string;
```

- *Type:* string

---

##### `resourcePoolIdInput`<sup>Optional</sup> <a name="resourcePoolIdInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.resourcePoolIdInput"></a>

```typescript
public readonly resourcePoolIdInput: string;
```

- *Type:* string

---

##### `allowUnverifiedSslCert`<sup>Required</sup> <a name="allowUnverifiedSslCert" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.allowUnverifiedSslCert"></a>

```typescript
public readonly allowUnverifiedSslCert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

---

##### `deploymentOption`<sup>Required</sup> <a name="deploymentOption" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.deploymentOption"></a>

```typescript
public readonly deploymentOption: string;
```

- *Type:* string

---

##### `diskProvisioning`<sup>Required</sup> <a name="diskProvisioning" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.diskProvisioning"></a>

```typescript
public readonly diskProvisioning: string;
```

- *Type:* string

---

##### `enableHiddenProperties`<sup>Required</sup> <a name="enableHiddenProperties" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.enableHiddenProperties"></a>

```typescript
public readonly enableHiddenProperties: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.hostSystemId"></a>

```typescript
public readonly hostSystemId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAllocationPolicy`<sup>Required</sup> <a name="ipAllocationPolicy" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipAllocationPolicy"></a>

```typescript
public readonly ipAllocationPolicy: string;
```

- *Type:* string

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `localOvfPath`<sup>Required</sup> <a name="localOvfPath" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.localOvfPath"></a>

```typescript
public readonly localOvfPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ovfNetworkMap`<sup>Required</sup> <a name="ovfNetworkMap" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ovfNetworkMap"></a>

```typescript
public readonly ovfNetworkMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `remoteOvfUrl`<sup>Required</sup> <a name="remoteOvfUrl" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.remoteOvfUrl"></a>

```typescript
public readonly remoteOvfUrl: string;
```

- *Type:* string

---

##### `resourcePoolId`<sup>Required</sup> <a name="resourcePoolId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.resourcePoolId"></a>

```typescript
public readonly resourcePoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereOvfVmTemplateConfig <a name="DataVsphereOvfVmTemplateConfig" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.Initializer"></a>

```typescript
import { dataVsphereOvfVmTemplate } from '@cdktf/provider-vsphere'

const dataVsphereOvfVmTemplateConfig: dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.hostSystemId">hostSystemId</a></code> | <code>string</code> | The ID of an optional host system to pin the virtual machine to. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.name">name</a></code> | <code>string</code> | Name of the virtual machine to create. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.resourcePoolId">resourcePoolId</a></code> | <code>string</code> | The ID of a resource pool to put the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.allowUnverifiedSslCert">allowUnverifiedSslCert</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow unverified ssl certificates while deploying ovf/ova from url. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.datastoreId">datastoreId</a></code> | <code>string</code> | The ID of the virtual machine's datastore. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.deploymentOption">deploymentOption</a></code> | <code>string</code> | The Deployment option to be chosen. If empty, the default option is used. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.diskProvisioning">diskProvisioning</a></code> | <code>string</code> | An optional disk provisioning. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.enableHiddenProperties">enableHiddenProperties</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow properties with ovf:userConfigurable=false to be set. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.folder">folder</a></code> | <code>string</code> | The name of the folder to locate the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template#id DataVsphereOvfVmTemplate#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ipAllocationPolicy">ipAllocationPolicy</a></code> | <code>string</code> | The IP allocation policy. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The IP protocol. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.localOvfPath">localOvfPath</a></code> | <code>string</code> | The absolute path to the ovf/ova file in the local system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ovfNetworkMap">ovfNetworkMap</a></code> | <code>{[ key: string ]: string}</code> | The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.remoteOvfUrl">remoteOvfUrl</a></code> | <code>string</code> | URL to the remote ovf/ova file to be deployed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.hostSystemId"></a>

```typescript
public readonly hostSystemId: string;
```

- *Type:* string

The ID of an optional host system to pin the virtual machine to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template#host_system_id DataVsphereOvfVmTemplate#host_system_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the virtual machine to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template#name DataVsphereOvfVmTemplate#name}

---

##### `resourcePoolId`<sup>Required</sup> <a name="resourcePoolId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.resourcePoolId"></a>

```typescript
public readonly resourcePoolId: string;
```

- *Type:* string

The ID of a resource pool to put the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template#resource_pool_id DataVsphereOvfVmTemplate#resource_pool_id}

---

##### `allowUnverifiedSslCert`<sup>Optional</sup> <a name="allowUnverifiedSslCert" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.allowUnverifiedSslCert"></a>

```typescript
public readonly allowUnverifiedSslCert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow unverified ssl certificates while deploying ovf/ova from url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template#allow_unverified_ssl_cert DataVsphereOvfVmTemplate#allow_unverified_ssl_cert}

---

##### `datastoreId`<sup>Optional</sup> <a name="datastoreId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

The ID of the virtual machine's datastore.

The virtual machine configuration is placed here, along with any virtual disks that are created without datastores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template#datastore_id DataVsphereOvfVmTemplate#datastore_id}

---

##### `deploymentOption`<sup>Optional</sup> <a name="deploymentOption" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.deploymentOption"></a>

```typescript
public readonly deploymentOption: string;
```

- *Type:* string

The Deployment option to be chosen. If empty, the default option is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template#deployment_option DataVsphereOvfVmTemplate#deployment_option}

---

##### `diskProvisioning`<sup>Optional</sup> <a name="diskProvisioning" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.diskProvisioning"></a>

```typescript
public readonly diskProvisioning: string;
```

- *Type:* string

An optional disk provisioning.

If set, all the disks in the deployed ovf will have the same specified disk type (e.g., thin provisioned).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template#disk_provisioning DataVsphereOvfVmTemplate#disk_provisioning}

---

##### `enableHiddenProperties`<sup>Optional</sup> <a name="enableHiddenProperties" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.enableHiddenProperties"></a>

```typescript
public readonly enableHiddenProperties: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow properties with ovf:userConfigurable=false to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template#enable_hidden_properties DataVsphereOvfVmTemplate#enable_hidden_properties}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The name of the folder to locate the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template#folder DataVsphereOvfVmTemplate#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template#id DataVsphereOvfVmTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAllocationPolicy`<sup>Optional</sup> <a name="ipAllocationPolicy" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ipAllocationPolicy"></a>

```typescript
public readonly ipAllocationPolicy: string;
```

- *Type:* string

The IP allocation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template#ip_allocation_policy DataVsphereOvfVmTemplate#ip_allocation_policy}

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template#ip_protocol DataVsphereOvfVmTemplate#ip_protocol}

---

##### `localOvfPath`<sup>Optional</sup> <a name="localOvfPath" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.localOvfPath"></a>

```typescript
public readonly localOvfPath: string;
```

- *Type:* string

The absolute path to the ovf/ova file in the local system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template#local_ovf_path DataVsphereOvfVmTemplate#local_ovf_path}

---

##### `ovfNetworkMap`<sup>Optional</sup> <a name="ovfNetworkMap" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ovfNetworkMap"></a>

```typescript
public readonly ovfNetworkMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template#ovf_network_map DataVsphereOvfVmTemplate#ovf_network_map}

---

##### `remoteOvfUrl`<sup>Optional</sup> <a name="remoteOvfUrl" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.remoteOvfUrl"></a>

```typescript
public readonly remoteOvfUrl: string;
```

- *Type:* string

URL to the remote ovf/ova file to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/ovf_vm_template#remote_ovf_url DataVsphereOvfVmTemplate#remote_ovf_url}

---



