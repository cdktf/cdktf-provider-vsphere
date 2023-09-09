# `vsphere_host_port_group`

Refer to the Terraform Registory for docs: [`vsphere_host_port_group`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group).

# `hostPortGroup` Submodule <a name="`hostPortGroup` Submodule" id="@cdktf/provider-vsphere.hostPortGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostPortGroup <a name="HostPortGroup" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group vsphere_host_port_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer"></a>

```typescript
import { hostPortGroup } from '@cdktf/provider-vsphere'

new hostPortGroup.HostPortGroup(scope: Construct, id: string, config: HostPortGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig">HostPortGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig">HostPortGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetActiveNics">resetActiveNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowForgedTransmits">resetAllowForgedTransmits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowMacChanges">resetAllowMacChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowPromiscuous">resetAllowPromiscuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetCheckBeacon">resetCheckBeacon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetFailback">resetFailback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetNotifySwitches">resetNotifySwitches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingAverageBandwidth">resetShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingBurstSize">resetShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingEnabled">resetShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingPeakBandwidth">resetShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetStandbyNics">resetStandbyNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetTeamingPolicy">resetTeamingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetVlanId">resetVlanId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetActiveNics` <a name="resetActiveNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetActiveNics"></a>

```typescript
public resetActiveNics(): void
```

##### `resetAllowForgedTransmits` <a name="resetAllowForgedTransmits" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowForgedTransmits"></a>

```typescript
public resetAllowForgedTransmits(): void
```

##### `resetAllowMacChanges` <a name="resetAllowMacChanges" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowMacChanges"></a>

```typescript
public resetAllowMacChanges(): void
```

##### `resetAllowPromiscuous` <a name="resetAllowPromiscuous" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowPromiscuous"></a>

```typescript
public resetAllowPromiscuous(): void
```

##### `resetCheckBeacon` <a name="resetCheckBeacon" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetCheckBeacon"></a>

```typescript
public resetCheckBeacon(): void
```

##### `resetFailback` <a name="resetFailback" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetFailback"></a>

```typescript
public resetFailback(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotifySwitches` <a name="resetNotifySwitches" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetNotifySwitches"></a>

```typescript
public resetNotifySwitches(): void
```

##### `resetShapingAverageBandwidth` <a name="resetShapingAverageBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingAverageBandwidth"></a>

```typescript
public resetShapingAverageBandwidth(): void
```

##### `resetShapingBurstSize` <a name="resetShapingBurstSize" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingBurstSize"></a>

```typescript
public resetShapingBurstSize(): void
```

##### `resetShapingEnabled` <a name="resetShapingEnabled" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingEnabled"></a>

```typescript
public resetShapingEnabled(): void
```

##### `resetShapingPeakBandwidth` <a name="resetShapingPeakBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingPeakBandwidth"></a>

```typescript
public resetShapingPeakBandwidth(): void
```

##### `resetStandbyNics` <a name="resetStandbyNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetStandbyNics"></a>

```typescript
public resetStandbyNics(): void
```

##### `resetTeamingPolicy` <a name="resetTeamingPolicy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetTeamingPolicy"></a>

```typescript
public resetTeamingPolicy(): void
```

##### `resetVlanId` <a name="resetVlanId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetVlanId"></a>

```typescript
public resetVlanId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isConstruct"></a>

```typescript
import { hostPortGroup } from '@cdktf/provider-vsphere'

hostPortGroup.HostPortGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformElement"></a>

```typescript
import { hostPortGroup } from '@cdktf/provider-vsphere'

hostPortGroup.HostPortGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformResource"></a>

```typescript
import { hostPortGroup } from '@cdktf/provider-vsphere'

hostPortGroup.HostPortGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.computedPolicy">computedPolicy</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList">HostPortGroupPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNicsInput">activeNicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmitsInput">allowForgedTransmitsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChangesInput">allowMacChangesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuousInput">allowPromiscuousInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeaconInput">checkBeaconInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failbackInput">failbackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemIdInput">hostSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitchesInput">notifySwitchesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidthInput">shapingAverageBandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSizeInput">shapingBurstSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabledInput">shapingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidthInput">shapingPeakBandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNicsInput">standbyNicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicyInput">teamingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchNameInput">virtualSwitchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanIdInput">vlanIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNics">activeNics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmits">allowForgedTransmits</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChanges">allowMacChanges</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuous">allowPromiscuous</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeacon">checkBeacon</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failback">failback</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemId">hostSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitches">notifySwitches</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidth">shapingAverageBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSize">shapingBurstSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabled">shapingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidth">shapingPeakBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNics">standbyNics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicy">teamingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchName">virtualSwitchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanId">vlanId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computedPolicy`<sup>Required</sup> <a name="computedPolicy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.computedPolicy"></a>

```typescript
public readonly computedPolicy: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.ports"></a>

```typescript
public readonly ports: HostPortGroupPortsList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList">HostPortGroupPortsList</a>

---

##### `activeNicsInput`<sup>Optional</sup> <a name="activeNicsInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNicsInput"></a>

```typescript
public readonly activeNicsInput: string[];
```

- *Type:* string[]

---

##### `allowForgedTransmitsInput`<sup>Optional</sup> <a name="allowForgedTransmitsInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmitsInput"></a>

```typescript
public readonly allowForgedTransmitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowMacChangesInput`<sup>Optional</sup> <a name="allowMacChangesInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChangesInput"></a>

```typescript
public readonly allowMacChangesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowPromiscuousInput`<sup>Optional</sup> <a name="allowPromiscuousInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuousInput"></a>

```typescript
public readonly allowPromiscuousInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `checkBeaconInput`<sup>Optional</sup> <a name="checkBeaconInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeaconInput"></a>

```typescript
public readonly checkBeaconInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failbackInput`<sup>Optional</sup> <a name="failbackInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failbackInput"></a>

```typescript
public readonly failbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSystemIdInput`<sup>Optional</sup> <a name="hostSystemIdInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemIdInput"></a>

```typescript
public readonly hostSystemIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notifySwitchesInput`<sup>Optional</sup> <a name="notifySwitchesInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitchesInput"></a>

```typescript
public readonly notifySwitchesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shapingAverageBandwidthInput`<sup>Optional</sup> <a name="shapingAverageBandwidthInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidthInput"></a>

```typescript
public readonly shapingAverageBandwidthInput: number;
```

- *Type:* number

---

##### `shapingBurstSizeInput`<sup>Optional</sup> <a name="shapingBurstSizeInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSizeInput"></a>

```typescript
public readonly shapingBurstSizeInput: number;
```

- *Type:* number

---

##### `shapingEnabledInput`<sup>Optional</sup> <a name="shapingEnabledInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabledInput"></a>

```typescript
public readonly shapingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shapingPeakBandwidthInput`<sup>Optional</sup> <a name="shapingPeakBandwidthInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidthInput"></a>

```typescript
public readonly shapingPeakBandwidthInput: number;
```

- *Type:* number

---

##### `standbyNicsInput`<sup>Optional</sup> <a name="standbyNicsInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNicsInput"></a>

```typescript
public readonly standbyNicsInput: string[];
```

- *Type:* string[]

---

##### `teamingPolicyInput`<sup>Optional</sup> <a name="teamingPolicyInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicyInput"></a>

```typescript
public readonly teamingPolicyInput: string;
```

- *Type:* string

---

##### `virtualSwitchNameInput`<sup>Optional</sup> <a name="virtualSwitchNameInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchNameInput"></a>

```typescript
public readonly virtualSwitchNameInput: string;
```

- *Type:* string

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanIdInput"></a>

```typescript
public readonly vlanIdInput: number;
```

- *Type:* number

---

##### `activeNics`<sup>Required</sup> <a name="activeNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNics"></a>

```typescript
public readonly activeNics: string[];
```

- *Type:* string[]

---

##### `allowForgedTransmits`<sup>Required</sup> <a name="allowForgedTransmits" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmits"></a>

```typescript
public readonly allowForgedTransmits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowMacChanges`<sup>Required</sup> <a name="allowMacChanges" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChanges"></a>

```typescript
public readonly allowMacChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowPromiscuous`<sup>Required</sup> <a name="allowPromiscuous" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuous"></a>

```typescript
public readonly allowPromiscuous: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `checkBeacon`<sup>Required</sup> <a name="checkBeacon" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeacon"></a>

```typescript
public readonly checkBeacon: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failback`<sup>Required</sup> <a name="failback" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failback"></a>

```typescript
public readonly failback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemId"></a>

```typescript
public readonly hostSystemId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notifySwitches`<sup>Required</sup> <a name="notifySwitches" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitches"></a>

```typescript
public readonly notifySwitches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shapingAverageBandwidth`<sup>Required</sup> <a name="shapingAverageBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidth"></a>

```typescript
public readonly shapingAverageBandwidth: number;
```

- *Type:* number

---

##### `shapingBurstSize`<sup>Required</sup> <a name="shapingBurstSize" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSize"></a>

```typescript
public readonly shapingBurstSize: number;
```

- *Type:* number

---

##### `shapingEnabled`<sup>Required</sup> <a name="shapingEnabled" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabled"></a>

```typescript
public readonly shapingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shapingPeakBandwidth`<sup>Required</sup> <a name="shapingPeakBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidth"></a>

```typescript
public readonly shapingPeakBandwidth: number;
```

- *Type:* number

---

##### `standbyNics`<sup>Required</sup> <a name="standbyNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNics"></a>

```typescript
public readonly standbyNics: string[];
```

- *Type:* string[]

---

##### `teamingPolicy`<sup>Required</sup> <a name="teamingPolicy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicy"></a>

```typescript
public readonly teamingPolicy: string;
```

- *Type:* string

---

##### `virtualSwitchName`<sup>Required</sup> <a name="virtualSwitchName" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchName"></a>

```typescript
public readonly virtualSwitchName: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HostPortGroupConfig <a name="HostPortGroupConfig" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.Initializer"></a>

```typescript
import { hostPortGroup } from '@cdktf/provider-vsphere'

const hostPortGroupConfig: hostPortGroup.HostPortGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.hostSystemId">hostSystemId</a></code> | <code>string</code> | The managed object ID of the host to set the virtual switch up on. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.name">name</a></code> | <code>string</code> | The name of the port group. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.virtualSwitchName">virtualSwitchName</a></code> | <code>string</code> | The name of the virtual switch to bind this port group to. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.activeNics">activeNics</a></code> | <code>string[]</code> | List of active network adapters used for load balancing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowForgedTransmits">allowForgedTransmits</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowMacChanges">allowMacChanges</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowPromiscuous">allowPromiscuous</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.checkBeacon">checkBeacon</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable beacon probing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.failback">failback</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#id HostPortGroup#id}. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.notifySwitches">notifySwitches</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingAverageBandwidth">shapingAverageBandwidth</a></code> | <code>number</code> | The average bandwidth in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingBurstSize">shapingBurstSize</a></code> | <code>number</code> | The maximum burst size allowed in bytes if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingEnabled">shapingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable traffic shaping on this virtual switch or port group. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingPeakBandwidth">shapingPeakBandwidth</a></code> | <code>number</code> | The peak bandwidth during bursts in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.standbyNics">standbyNics</a></code> | <code>string[]</code> | List of standby network adapters used for failover. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.teamingPolicy">teamingPolicy</a></code> | <code>string</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.vlanId">vlanId</a></code> | <code>number</code> | The VLAN ID/trunk mode for this port group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.hostSystemId"></a>

```typescript
public readonly hostSystemId: string;
```

- *Type:* string

The managed object ID of the host to set the virtual switch up on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#host_system_id HostPortGroup#host_system_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#name HostPortGroup#name}

---

##### `virtualSwitchName`<sup>Required</sup> <a name="virtualSwitchName" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.virtualSwitchName"></a>

```typescript
public readonly virtualSwitchName: string;
```

- *Type:* string

The name of the virtual switch to bind this port group to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#virtual_switch_name HostPortGroup#virtual_switch_name}

---

##### `activeNics`<sup>Optional</sup> <a name="activeNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.activeNics"></a>

```typescript
public readonly activeNics: string[];
```

- *Type:* string[]

List of active network adapters used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#active_nics HostPortGroup#active_nics}

---

##### `allowForgedTransmits`<sup>Optional</sup> <a name="allowForgedTransmits" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowForgedTransmits"></a>

```typescript
public readonly allowForgedTransmits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#allow_forged_transmits HostPortGroup#allow_forged_transmits}

---

##### `allowMacChanges`<sup>Optional</sup> <a name="allowMacChanges" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowMacChanges"></a>

```typescript
public readonly allowMacChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#allow_mac_changes HostPortGroup#allow_mac_changes}

---

##### `allowPromiscuous`<sup>Optional</sup> <a name="allowPromiscuous" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowPromiscuous"></a>

```typescript
public readonly allowPromiscuous: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#allow_promiscuous HostPortGroup#allow_promiscuous}

---

##### `checkBeacon`<sup>Optional</sup> <a name="checkBeacon" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.checkBeacon"></a>

```typescript
public readonly checkBeacon: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable beacon probing.

Requires that the vSwitch has been configured to use a beacon. If disabled, link status is used only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#check_beacon HostPortGroup#check_beacon}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.failback"></a>

```typescript
public readonly failback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#failback HostPortGroup#failback}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#id HostPortGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notifySwitches`<sup>Optional</sup> <a name="notifySwitches" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.notifySwitches"></a>

```typescript
public readonly notifySwitches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#notify_switches HostPortGroup#notify_switches}

---

##### `shapingAverageBandwidth`<sup>Optional</sup> <a name="shapingAverageBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingAverageBandwidth"></a>

```typescript
public readonly shapingAverageBandwidth: number;
```

- *Type:* number

The average bandwidth in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#shaping_average_bandwidth HostPortGroup#shaping_average_bandwidth}

---

##### `shapingBurstSize`<sup>Optional</sup> <a name="shapingBurstSize" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingBurstSize"></a>

```typescript
public readonly shapingBurstSize: number;
```

- *Type:* number

The maximum burst size allowed in bytes if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#shaping_burst_size HostPortGroup#shaping_burst_size}

---

##### `shapingEnabled`<sup>Optional</sup> <a name="shapingEnabled" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingEnabled"></a>

```typescript
public readonly shapingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable traffic shaping on this virtual switch or port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#shaping_enabled HostPortGroup#shaping_enabled}

---

##### `shapingPeakBandwidth`<sup>Optional</sup> <a name="shapingPeakBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingPeakBandwidth"></a>

```typescript
public readonly shapingPeakBandwidth: number;
```

- *Type:* number

The peak bandwidth during bursts in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#shaping_peak_bandwidth HostPortGroup#shaping_peak_bandwidth}

---

##### `standbyNics`<sup>Optional</sup> <a name="standbyNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.standbyNics"></a>

```typescript
public readonly standbyNics: string[];
```

- *Type:* string[]

List of standby network adapters used for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#standby_nics HostPortGroup#standby_nics}

---

##### `teamingPolicy`<sup>Optional</sup> <a name="teamingPolicy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.teamingPolicy"></a>

```typescript
public readonly teamingPolicy: string;
```

- *Type:* string

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#teaming_policy HostPortGroup#teaming_policy}

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

The VLAN ID/trunk mode for this port group.

An ID of 0 denotes no tagging, an ID of 1-4094 tags with the specific ID, and an ID of 4095 enables trunk mode, allowing the guest to manage its own tagging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_port_group#vlan_id HostPortGroup#vlan_id}

---

### HostPortGroupPorts <a name="HostPortGroupPorts" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts.Initializer"></a>

```typescript
import { hostPortGroup } from '@cdktf/provider-vsphere'

const hostPortGroupPorts: hostPortGroup.HostPortGroupPorts = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### HostPortGroupPortsList <a name="HostPortGroupPortsList" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer"></a>

```typescript
import { hostPortGroup } from '@cdktf/provider-vsphere'

new hostPortGroup.HostPortGroupPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.get"></a>

```typescript
public get(index: number): HostPortGroupPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### HostPortGroupPortsOutputReference <a name="HostPortGroupPortsOutputReference" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer"></a>

```typescript
import { hostPortGroup } from '@cdktf/provider-vsphere'

new hostPortGroup.HostPortGroupPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.macAddresses">macAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts">HostPortGroupPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `macAddresses`<sup>Required</sup> <a name="macAddresses" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.macAddresses"></a>

```typescript
public readonly macAddresses: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HostPortGroupPorts;
```

- *Type:* <a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts">HostPortGroupPorts</a>

---



