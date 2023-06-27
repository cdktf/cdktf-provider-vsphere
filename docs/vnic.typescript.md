# `vsphere_vnic`

Refer to the Terraform Registory for docs: [`vsphere_vnic`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic).

# `vnic` Submodule <a name="`vnic` Submodule" id="@cdktf/provider-vsphere.vnic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Vnic <a name="Vnic" id="@cdktf/provider-vsphere.vnic.Vnic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic vsphere_vnic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer"></a>

```typescript
import { vnic } from '@cdktf/provider-vsphere'

new vnic.Vnic(scope: Construct, id: string, config: VnicConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig">VnicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicConfig">VnicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.putIpv4">putIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.putIpv6">putIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetDistributedPortGroup">resetDistributedPortGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetDistributedSwitchPort">resetDistributedSwitchPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetIpv4">resetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetIpv6">resetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetMac">resetMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetNetstack">resetNetstack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetPortgroup">resetPortgroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetServices">resetServices</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.vnic.Vnic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.vnic.Vnic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.vnic.Vnic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vnic.Vnic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.vnic.Vnic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.vnic.Vnic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.vnic.Vnic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.vnic.Vnic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.vnic.Vnic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIpv4` <a name="putIpv4" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv4"></a>

```typescript
public putIpv4(value: VnicIpv4): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

---

##### `putIpv6` <a name="putIpv6" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv6"></a>

```typescript
public putIpv6(value: VnicIpv6): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

---

##### `resetDistributedPortGroup` <a name="resetDistributedPortGroup" id="@cdktf/provider-vsphere.vnic.Vnic.resetDistributedPortGroup"></a>

```typescript
public resetDistributedPortGroup(): void
```

##### `resetDistributedSwitchPort` <a name="resetDistributedSwitchPort" id="@cdktf/provider-vsphere.vnic.Vnic.resetDistributedSwitchPort"></a>

```typescript
public resetDistributedSwitchPort(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.vnic.Vnic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpv4` <a name="resetIpv4" id="@cdktf/provider-vsphere.vnic.Vnic.resetIpv4"></a>

```typescript
public resetIpv4(): void
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-vsphere.vnic.Vnic.resetIpv6"></a>

```typescript
public resetIpv6(): void
```

##### `resetMac` <a name="resetMac" id="@cdktf/provider-vsphere.vnic.Vnic.resetMac"></a>

```typescript
public resetMac(): void
```

##### `resetMtu` <a name="resetMtu" id="@cdktf/provider-vsphere.vnic.Vnic.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetNetstack` <a name="resetNetstack" id="@cdktf/provider-vsphere.vnic.Vnic.resetNetstack"></a>

```typescript
public resetNetstack(): void
```

##### `resetPortgroup` <a name="resetPortgroup" id="@cdktf/provider-vsphere.vnic.Vnic.resetPortgroup"></a>

```typescript
public resetPortgroup(): void
```

##### `resetServices` <a name="resetServices" id="@cdktf/provider-vsphere.vnic.Vnic.resetServices"></a>

```typescript
public resetServices(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.vnic.Vnic.isConstruct"></a>

```typescript
import { vnic } from '@cdktf/provider-vsphere'

vnic.Vnic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vnic.Vnic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformElement"></a>

```typescript
import { vnic } from '@cdktf/provider-vsphere'

vnic.Vnic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformResource"></a>

```typescript
import { vnic } from '@cdktf/provider-vsphere'

vnic.Vnic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference">VnicIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference">VnicIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroupInput">distributedPortGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPortInput">distributedSwitchPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv4Input">ipv4Input</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv6Input">ipv6Input</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.macInput">macInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.netstackInput">netstackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.portgroupInput">portgroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.servicesInput">servicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroup">distributedPortGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPort">distributedSwitchPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.mac">mac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.netstack">netstack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.portgroup">portgroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.services">services</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.vnic.Vnic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.vnic.Vnic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vnic.Vnic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.vnic.Vnic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.vnic.Vnic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.vnic.Vnic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.vnic.Vnic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vnic.Vnic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vnic.Vnic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vnic.Vnic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vnic.Vnic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vnic.Vnic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vnic.Vnic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vnic.Vnic.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv4"></a>

```typescript
public readonly ipv4: VnicIpv4OutputReference;
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference">VnicIpv4OutputReference</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv6"></a>

```typescript
public readonly ipv6: VnicIpv6OutputReference;
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference">VnicIpv6OutputReference</a>

---

##### `distributedPortGroupInput`<sup>Optional</sup> <a name="distributedPortGroupInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroupInput"></a>

```typescript
public readonly distributedPortGroupInput: string;
```

- *Type:* string

---

##### `distributedSwitchPortInput`<sup>Optional</sup> <a name="distributedSwitchPortInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPortInput"></a>

```typescript
public readonly distributedSwitchPortInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv4Input"></a>

```typescript
public readonly ipv4Input: VnicIpv4;
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv6Input"></a>

```typescript
public readonly ipv6Input: VnicIpv6;
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

---

##### `macInput`<sup>Optional</sup> <a name="macInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.macInput"></a>

```typescript
public readonly macInput: string;
```

- *Type:* string

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `netstackInput`<sup>Optional</sup> <a name="netstackInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.netstackInput"></a>

```typescript
public readonly netstackInput: string;
```

- *Type:* string

---

##### `portgroupInput`<sup>Optional</sup> <a name="portgroupInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.portgroupInput"></a>

```typescript
public readonly portgroupInput: string;
```

- *Type:* string

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.servicesInput"></a>

```typescript
public readonly servicesInput: string[];
```

- *Type:* string[]

---

##### `distributedPortGroup`<sup>Required</sup> <a name="distributedPortGroup" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroup"></a>

```typescript
public readonly distributedPortGroup: string;
```

- *Type:* string

---

##### `distributedSwitchPort`<sup>Required</sup> <a name="distributedSwitchPort" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPort"></a>

```typescript
public readonly distributedSwitchPort: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vsphere.vnic.Vnic.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vnic.Vnic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-vsphere.vnic.Vnic.property.mac"></a>

```typescript
public readonly mac: string;
```

- *Type:* string

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-vsphere.vnic.Vnic.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `netstack`<sup>Required</sup> <a name="netstack" id="@cdktf/provider-vsphere.vnic.Vnic.property.netstack"></a>

```typescript
public readonly netstack: string;
```

- *Type:* string

---

##### `portgroup`<sup>Required</sup> <a name="portgroup" id="@cdktf/provider-vsphere.vnic.Vnic.property.portgroup"></a>

```typescript
public readonly portgroup: string;
```

- *Type:* string

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-vsphere.vnic.Vnic.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.vnic.Vnic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VnicConfig <a name="VnicConfig" id="@cdktf/provider-vsphere.vnic.VnicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vnic.VnicConfig.Initializer"></a>

```typescript
import { vnic } from '@cdktf/provider-vsphere'

const vnicConfig: vnic.VnicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.host">host</a></code> | <code>string</code> | ESX host the interface belongs to. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedPortGroup">distributedPortGroup</a></code> | <code>string</code> | Key of the distributed portgroup the nic will connect to. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedSwitchPort">distributedSwitchPort</a></code> | <code>string</code> | UUID of the DVSwitch the nic will be attached to. Do not set if you set portgroup. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#id Vnic#id}. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a></code> | ipv4 block. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a></code> | ipv6 block. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.mac">mac</a></code> | <code>string</code> | MAC address of the interface. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.mtu">mtu</a></code> | <code>number</code> | MTU of the interface. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.netstack">netstack</a></code> | <code>string</code> | TCP/IP stack setting for this interface. Possible values are 'defaultTcpipStack', 'vmotion', 'provisioning'. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.portgroup">portgroup</a></code> | <code>string</code> | portgroup to attach the nic to. Do not set if you set distributed_switch_port. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.services">services</a></code> | <code>string[]</code> | Enabled services setting for this interface. Current possible values are 'vmotion', 'management' and 'vsan'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

ESX host the interface belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#host Vnic#host}

---

##### `distributedPortGroup`<sup>Optional</sup> <a name="distributedPortGroup" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedPortGroup"></a>

```typescript
public readonly distributedPortGroup: string;
```

- *Type:* string

Key of the distributed portgroup the nic will connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#distributed_port_group Vnic#distributed_port_group}

---

##### `distributedSwitchPort`<sup>Optional</sup> <a name="distributedSwitchPort" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedSwitchPort"></a>

```typescript
public readonly distributedSwitchPort: string;
```

- *Type:* string

UUID of the DVSwitch the nic will be attached to. Do not set if you set portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#distributed_switch_port Vnic#distributed_switch_port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#id Vnic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv4"></a>

```typescript
public readonly ipv4: VnicIpv4;
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

ipv4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#ipv4 Vnic#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv6"></a>

```typescript
public readonly ipv6: VnicIpv6;
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#ipv6 Vnic#ipv6}

---

##### `mac`<sup>Optional</sup> <a name="mac" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.mac"></a>

```typescript
public readonly mac: string;
```

- *Type:* string

MAC address of the interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#mac Vnic#mac}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

MTU of the interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#mtu Vnic#mtu}

---

##### `netstack`<sup>Optional</sup> <a name="netstack" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.netstack"></a>

```typescript
public readonly netstack: string;
```

- *Type:* string

TCP/IP stack setting for this interface. Possible values are 'defaultTcpipStack', 'vmotion', 'provisioning'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#netstack Vnic#netstack}

---

##### `portgroup`<sup>Optional</sup> <a name="portgroup" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.portgroup"></a>

```typescript
public readonly portgroup: string;
```

- *Type:* string

portgroup to attach the nic to. Do not set if you set distributed_switch_port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#portgroup Vnic#portgroup}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

Enabled services setting for this interface. Current possible values are 'vmotion', 'management' and 'vsan'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#services Vnic#services}

---

### VnicIpv4 <a name="VnicIpv4" id="@cdktf/provider-vsphere.vnic.VnicIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vnic.VnicIpv4.Initializer"></a>

```typescript
import { vnic } from '@cdktf/provider-vsphere'

const vnicIpv4: vnic.VnicIpv4 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.dhcp">dhcp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use DHCP to configure the interface's IPv4 stack. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.gw">gw</a></code> | <code>string</code> | IP address of the default gateway, if DHCP is not set. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.ip">ip</a></code> | <code>string</code> | address of the interface, if DHCP is not set. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.netmask">netmask</a></code> | <code>string</code> | netmask of the interface, if DHCP is not set. |

---

##### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.dhcp"></a>

```typescript
public readonly dhcp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use DHCP to configure the interface's IPv4 stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#dhcp Vnic#dhcp}

---

##### `gw`<sup>Optional</sup> <a name="gw" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.gw"></a>

```typescript
public readonly gw: string;
```

- *Type:* string

IP address of the default gateway, if DHCP is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#gw Vnic#gw}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

address of the interface, if DHCP is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#ip Vnic#ip}

---

##### `netmask`<sup>Optional</sup> <a name="netmask" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

netmask of the interface, if DHCP is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#netmask Vnic#netmask}

---

### VnicIpv6 <a name="VnicIpv6" id="@cdktf/provider-vsphere.vnic.VnicIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vnic.VnicIpv6.Initializer"></a>

```typescript
import { vnic } from '@cdktf/provider-vsphere'

const vnicIpv6: vnic.VnicIpv6 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.addresses">addresses</a></code> | <code>string[]</code> | List of IPv6 addresses. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.autoconfig">autoconfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use IPv6 Autoconfiguration (RFC2462). |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.dhcp">dhcp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use DHCP to configure the interface's IPv4 stack. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.gw">gw</a></code> | <code>string</code> | IP address of the default gateway, if DHCP or autoconfig is not set. |

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

List of IPv6 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#addresses Vnic#addresses}

---

##### `autoconfig`<sup>Optional</sup> <a name="autoconfig" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.autoconfig"></a>

```typescript
public readonly autoconfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use IPv6 Autoconfiguration (RFC2462).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#autoconfig Vnic#autoconfig}

---

##### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.dhcp"></a>

```typescript
public readonly dhcp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use DHCP to configure the interface's IPv4 stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#dhcp Vnic#dhcp}

---

##### `gw`<sup>Optional</sup> <a name="gw" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.gw"></a>

```typescript
public readonly gw: string;
```

- *Type:* string

IP address of the default gateway, if DHCP or autoconfig is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/vnic#gw Vnic#gw}

---

## Classes <a name="Classes" id="Classes"></a>

### VnicIpv4OutputReference <a name="VnicIpv4OutputReference" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer"></a>

```typescript
import { vnic } from '@cdktf/provider-vsphere'

new vnic.VnicIpv4OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetDhcp">resetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetGw">resetGw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetNetmask">resetNetmask</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDhcp` <a name="resetDhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetDhcp"></a>

```typescript
public resetDhcp(): void
```

##### `resetGw` <a name="resetGw" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetGw"></a>

```typescript
public resetGw(): void
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetIp"></a>

```typescript
public resetIp(): void
```

##### `resetNetmask` <a name="resetNetmask" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetNetmask"></a>

```typescript
public resetNetmask(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcpInput">dhcpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gwInput">gwInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ipInput">ipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmaskInput">netmaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcp">dhcp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gw">gw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmask">netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dhcpInput`<sup>Optional</sup> <a name="dhcpInput" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcpInput"></a>

```typescript
public readonly dhcpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gwInput`<sup>Optional</sup> <a name="gwInput" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gwInput"></a>

```typescript
public readonly gwInput: string;
```

- *Type:* string

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ipInput"></a>

```typescript
public readonly ipInput: string;
```

- *Type:* string

---

##### `netmaskInput`<sup>Optional</sup> <a name="netmaskInput" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmaskInput"></a>

```typescript
public readonly netmaskInput: string;
```

- *Type:* string

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcp"></a>

```typescript
public readonly dhcp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gw`<sup>Required</sup> <a name="gw" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gw"></a>

```typescript
public readonly gw: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VnicIpv4;
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

---


### VnicIpv6OutputReference <a name="VnicIpv6OutputReference" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer"></a>

```typescript
import { vnic } from '@cdktf/provider-vsphere'

new vnic.VnicIpv6OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAddresses">resetAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAutoconfig">resetAutoconfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetDhcp">resetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetGw">resetGw</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddresses` <a name="resetAddresses" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAddresses"></a>

```typescript
public resetAddresses(): void
```

##### `resetAutoconfig` <a name="resetAutoconfig" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAutoconfig"></a>

```typescript
public resetAutoconfig(): void
```

##### `resetDhcp` <a name="resetDhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetDhcp"></a>

```typescript
public resetDhcp(): void
```

##### `resetGw` <a name="resetGw" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetGw"></a>

```typescript
public resetGw(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addressesInput">addressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfigInput">autoconfigInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcpInput">dhcpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gwInput">gwInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addresses">addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfig">autoconfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcp">dhcp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gw">gw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addressesInput"></a>

```typescript
public readonly addressesInput: string[];
```

- *Type:* string[]

---

##### `autoconfigInput`<sup>Optional</sup> <a name="autoconfigInput" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfigInput"></a>

```typescript
public readonly autoconfigInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dhcpInput`<sup>Optional</sup> <a name="dhcpInput" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcpInput"></a>

```typescript
public readonly dhcpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gwInput`<sup>Optional</sup> <a name="gwInput" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gwInput"></a>

```typescript
public readonly gwInput: string;
```

- *Type:* string

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

---

##### `autoconfig`<sup>Required</sup> <a name="autoconfig" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfig"></a>

```typescript
public readonly autoconfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcp"></a>

```typescript
public readonly dhcp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gw`<sup>Required</sup> <a name="gw" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gw"></a>

```typescript
public readonly gw: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VnicIpv6;
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

---



