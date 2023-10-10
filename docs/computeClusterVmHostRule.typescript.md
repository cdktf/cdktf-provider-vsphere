# `vsphere_compute_cluster_vm_host_rule`

Refer to the Terraform Registory for docs: [`vsphere_compute_cluster_vm_host_rule`](https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_host_rule).

# `computeClusterVmHostRule` Submodule <a name="`computeClusterVmHostRule` Submodule" id="@cdktf/provider-vsphere.computeClusterVmHostRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeClusterVmHostRule <a name="ComputeClusterVmHostRule" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_host_rule vsphere_compute_cluster_vm_host_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer"></a>

```typescript
import { computeClusterVmHostRule } from '@cdktf/provider-vsphere'

new computeClusterVmHostRule.ComputeClusterVmHostRule(scope: Construct, id: string, config: ComputeClusterVmHostRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig">ComputeClusterVmHostRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig">ComputeClusterVmHostRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetAffinityHostGroupName">resetAffinityHostGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetAntiAffinityHostGroupName">resetAntiAffinityHostGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetMandatory">resetMandatory</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAffinityHostGroupName` <a name="resetAffinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetAffinityHostGroupName"></a>

```typescript
public resetAffinityHostGroupName(): void
```

##### `resetAntiAffinityHostGroupName` <a name="resetAntiAffinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetAntiAffinityHostGroupName"></a>

```typescript
public resetAntiAffinityHostGroupName(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMandatory` <a name="resetMandatory" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetMandatory"></a>

```typescript
public resetMandatory(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isConstruct"></a>

```typescript
import { computeClusterVmHostRule } from '@cdktf/provider-vsphere'

computeClusterVmHostRule.ComputeClusterVmHostRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformElement"></a>

```typescript
import { computeClusterVmHostRule } from '@cdktf/provider-vsphere'

computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformResource"></a>

```typescript
import { computeClusterVmHostRule } from '@cdktf/provider-vsphere'

computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.affinityHostGroupNameInput">affinityHostGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.antiAffinityHostGroupNameInput">antiAffinityHostGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.computeClusterIdInput">computeClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.mandatoryInput">mandatoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.vmGroupNameInput">vmGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.affinityHostGroupName">affinityHostGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.antiAffinityHostGroupName">antiAffinityHostGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.computeClusterId">computeClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.mandatory">mandatory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.vmGroupName">vmGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `affinityHostGroupNameInput`<sup>Optional</sup> <a name="affinityHostGroupNameInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.affinityHostGroupNameInput"></a>

```typescript
public readonly affinityHostGroupNameInput: string;
```

- *Type:* string

---

##### `antiAffinityHostGroupNameInput`<sup>Optional</sup> <a name="antiAffinityHostGroupNameInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.antiAffinityHostGroupNameInput"></a>

```typescript
public readonly antiAffinityHostGroupNameInput: string;
```

- *Type:* string

---

##### `computeClusterIdInput`<sup>Optional</sup> <a name="computeClusterIdInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.computeClusterIdInput"></a>

```typescript
public readonly computeClusterIdInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mandatoryInput`<sup>Optional</sup> <a name="mandatoryInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.mandatoryInput"></a>

```typescript
public readonly mandatoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `vmGroupNameInput`<sup>Optional</sup> <a name="vmGroupNameInput" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.vmGroupNameInput"></a>

```typescript
public readonly vmGroupNameInput: string;
```

- *Type:* string

---

##### `affinityHostGroupName`<sup>Required</sup> <a name="affinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.affinityHostGroupName"></a>

```typescript
public readonly affinityHostGroupName: string;
```

- *Type:* string

---

##### `antiAffinityHostGroupName`<sup>Required</sup> <a name="antiAffinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.antiAffinityHostGroupName"></a>

```typescript
public readonly antiAffinityHostGroupName: string;
```

- *Type:* string

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.computeClusterId"></a>

```typescript
public readonly computeClusterId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mandatory`<sup>Required</sup> <a name="mandatory" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.mandatory"></a>

```typescript
public readonly mandatory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `vmGroupName`<sup>Required</sup> <a name="vmGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.vmGroupName"></a>

```typescript
public readonly vmGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeClusterVmHostRuleConfig <a name="ComputeClusterVmHostRuleConfig" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.Initializer"></a>

```typescript
import { computeClusterVmHostRule } from '@cdktf/provider-vsphere'

const computeClusterVmHostRuleConfig: computeClusterVmHostRule.ComputeClusterVmHostRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.computeClusterId">computeClusterId</a></code> | <code>string</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.name">name</a></code> | <code>string</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.vmGroupName">vmGroupName</a></code> | <code>string</code> | The name of the virtual machine group to use with this rule. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.affinityHostGroupName">affinityHostGroupName</a></code> | <code>string</code> | When this field is used, virtual machines defined in vm_group_name will be run on the hosts defined in this host group. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.antiAffinityHostGroupName">antiAffinityHostGroupName</a></code> | <code>string</code> | When this field is used, virtual machines defined in vm_group_name will not be run on the hosts defined in this host group. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable this rule in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_host_rule#id ComputeClusterVmHostRule#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.mandatory">mandatory</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, prevents any virtual machine operations that may violate this rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.computeClusterId"></a>

```typescript
public readonly computeClusterId: string;
```

- *Type:* string

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_host_rule#compute_cluster_id ComputeClusterVmHostRule#compute_cluster_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_host_rule#name ComputeClusterVmHostRule#name}

---

##### `vmGroupName`<sup>Required</sup> <a name="vmGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.vmGroupName"></a>

```typescript
public readonly vmGroupName: string;
```

- *Type:* string

The name of the virtual machine group to use with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_host_rule#vm_group_name ComputeClusterVmHostRule#vm_group_name}

---

##### `affinityHostGroupName`<sup>Optional</sup> <a name="affinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.affinityHostGroupName"></a>

```typescript
public readonly affinityHostGroupName: string;
```

- *Type:* string

When this field is used, virtual machines defined in vm_group_name will be run on the hosts defined in this host group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_host_rule#affinity_host_group_name ComputeClusterVmHostRule#affinity_host_group_name}

---

##### `antiAffinityHostGroupName`<sup>Optional</sup> <a name="antiAffinityHostGroupName" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.antiAffinityHostGroupName"></a>

```typescript
public readonly antiAffinityHostGroupName: string;
```

- *Type:* string

When this field is used, virtual machines defined in vm_group_name will not be run on the hosts defined in this host group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_host_rule#anti_affinity_host_group_name ComputeClusterVmHostRule#anti_affinity_host_group_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable this rule in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_host_rule#enabled ComputeClusterVmHostRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_host_rule#id ComputeClusterVmHostRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mandatory`<sup>Optional</sup> <a name="mandatory" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.mandatory"></a>

```typescript
public readonly mandatory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, prevents any virtual machine operations that may violate this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/compute_cluster_vm_host_rule#mandatory ComputeClusterVmHostRule#mandatory}

---



