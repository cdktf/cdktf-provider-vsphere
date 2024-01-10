# `hostVirtualSwitch` Submodule <a name="`hostVirtualSwitch` Submodule" id="@cdktf/provider-vsphere.hostVirtualSwitch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostVirtualSwitch <a name="HostVirtualSwitch" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch vsphere_host_virtual_switch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer"></a>

```typescript
import { hostVirtualSwitch } from '@cdktf/provider-vsphere'

new hostVirtualSwitch.HostVirtualSwitch(scope: Construct, id: string, config: HostVirtualSwitchConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig">HostVirtualSwitchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig">HostVirtualSwitchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowForgedTransmits">resetAllowForgedTransmits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowMacChanges">resetAllowMacChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowPromiscuous">resetAllowPromiscuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetBeaconInterval">resetBeaconInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetCheckBeacon">resetCheckBeacon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetFailback">resetFailback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryOperation">resetLinkDiscoveryOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryProtocol">resetLinkDiscoveryProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNotifySwitches">resetNotifySwitches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNumberOfPorts">resetNumberOfPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingAverageBandwidth">resetShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingBurstSize">resetShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingEnabled">resetShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingPeakBandwidth">resetShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetStandbyNics">resetStandbyNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetTeamingPolicy">resetTeamingPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowForgedTransmits` <a name="resetAllowForgedTransmits" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowForgedTransmits"></a>

```typescript
public resetAllowForgedTransmits(): void
```

##### `resetAllowMacChanges` <a name="resetAllowMacChanges" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowMacChanges"></a>

```typescript
public resetAllowMacChanges(): void
```

##### `resetAllowPromiscuous` <a name="resetAllowPromiscuous" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowPromiscuous"></a>

```typescript
public resetAllowPromiscuous(): void
```

##### `resetBeaconInterval` <a name="resetBeaconInterval" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetBeaconInterval"></a>

```typescript
public resetBeaconInterval(): void
```

##### `resetCheckBeacon` <a name="resetCheckBeacon" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetCheckBeacon"></a>

```typescript
public resetCheckBeacon(): void
```

##### `resetFailback` <a name="resetFailback" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetFailback"></a>

```typescript
public resetFailback(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLinkDiscoveryOperation` <a name="resetLinkDiscoveryOperation" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryOperation"></a>

```typescript
public resetLinkDiscoveryOperation(): void
```

##### `resetLinkDiscoveryProtocol` <a name="resetLinkDiscoveryProtocol" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryProtocol"></a>

```typescript
public resetLinkDiscoveryProtocol(): void
```

##### `resetMtu` <a name="resetMtu" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetNotifySwitches` <a name="resetNotifySwitches" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNotifySwitches"></a>

```typescript
public resetNotifySwitches(): void
```

##### `resetNumberOfPorts` <a name="resetNumberOfPorts" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNumberOfPorts"></a>

```typescript
public resetNumberOfPorts(): void
```

##### `resetShapingAverageBandwidth` <a name="resetShapingAverageBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingAverageBandwidth"></a>

```typescript
public resetShapingAverageBandwidth(): void
```

##### `resetShapingBurstSize` <a name="resetShapingBurstSize" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingBurstSize"></a>

```typescript
public resetShapingBurstSize(): void
```

##### `resetShapingEnabled` <a name="resetShapingEnabled" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingEnabled"></a>

```typescript
public resetShapingEnabled(): void
```

##### `resetShapingPeakBandwidth` <a name="resetShapingPeakBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingPeakBandwidth"></a>

```typescript
public resetShapingPeakBandwidth(): void
```

##### `resetStandbyNics` <a name="resetStandbyNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetStandbyNics"></a>

```typescript
public resetStandbyNics(): void
```

##### `resetTeamingPolicy` <a name="resetTeamingPolicy" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetTeamingPolicy"></a>

```typescript
public resetTeamingPolicy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HostVirtualSwitch resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isConstruct"></a>

```typescript
import { hostVirtualSwitch } from '@cdktf/provider-vsphere'

hostVirtualSwitch.HostVirtualSwitch.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformElement"></a>

```typescript
import { hostVirtualSwitch } from '@cdktf/provider-vsphere'

hostVirtualSwitch.HostVirtualSwitch.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformResource"></a>

```typescript
import { hostVirtualSwitch } from '@cdktf/provider-vsphere'

hostVirtualSwitch.HostVirtualSwitch.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport"></a>

```typescript
import { hostVirtualSwitch } from '@cdktf/provider-vsphere'

hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HostVirtualSwitch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HostVirtualSwitch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HostVirtualSwitch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HostVirtualSwitch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNicsInput">activeNicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmitsInput">allowForgedTransmitsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChangesInput">allowMacChangesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuousInput">allowPromiscuousInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconIntervalInput">beaconIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeaconInput">checkBeaconInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failbackInput">failbackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemIdInput">hostSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperationInput">linkDiscoveryOperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocolInput">linkDiscoveryProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdaptersInput">networkAdaptersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitchesInput">notifySwitchesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPortsInput">numberOfPortsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidthInput">shapingAverageBandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSizeInput">shapingBurstSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabledInput">shapingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidthInput">shapingPeakBandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNicsInput">standbyNicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicyInput">teamingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNics">activeNics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmits">allowForgedTransmits</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChanges">allowMacChanges</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuous">allowPromiscuous</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconInterval">beaconInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeacon">checkBeacon</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failback">failback</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemId">hostSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperation">linkDiscoveryOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocol">linkDiscoveryProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdapters">networkAdapters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitches">notifySwitches</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPorts">numberOfPorts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidth">shapingAverageBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSize">shapingBurstSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabled">shapingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidth">shapingPeakBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNics">standbyNics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicy">teamingPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `activeNicsInput`<sup>Optional</sup> <a name="activeNicsInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNicsInput"></a>

```typescript
public readonly activeNicsInput: string[];
```

- *Type:* string[]

---

##### `allowForgedTransmitsInput`<sup>Optional</sup> <a name="allowForgedTransmitsInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmitsInput"></a>

```typescript
public readonly allowForgedTransmitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowMacChangesInput`<sup>Optional</sup> <a name="allowMacChangesInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChangesInput"></a>

```typescript
public readonly allowMacChangesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowPromiscuousInput`<sup>Optional</sup> <a name="allowPromiscuousInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuousInput"></a>

```typescript
public readonly allowPromiscuousInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `beaconIntervalInput`<sup>Optional</sup> <a name="beaconIntervalInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconIntervalInput"></a>

```typescript
public readonly beaconIntervalInput: number;
```

- *Type:* number

---

##### `checkBeaconInput`<sup>Optional</sup> <a name="checkBeaconInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeaconInput"></a>

```typescript
public readonly checkBeaconInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failbackInput`<sup>Optional</sup> <a name="failbackInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failbackInput"></a>

```typescript
public readonly failbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSystemIdInput`<sup>Optional</sup> <a name="hostSystemIdInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemIdInput"></a>

```typescript
public readonly hostSystemIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linkDiscoveryOperationInput`<sup>Optional</sup> <a name="linkDiscoveryOperationInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperationInput"></a>

```typescript
public readonly linkDiscoveryOperationInput: string;
```

- *Type:* string

---

##### `linkDiscoveryProtocolInput`<sup>Optional</sup> <a name="linkDiscoveryProtocolInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocolInput"></a>

```typescript
public readonly linkDiscoveryProtocolInput: string;
```

- *Type:* string

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkAdaptersInput`<sup>Optional</sup> <a name="networkAdaptersInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdaptersInput"></a>

```typescript
public readonly networkAdaptersInput: string[];
```

- *Type:* string[]

---

##### `notifySwitchesInput`<sup>Optional</sup> <a name="notifySwitchesInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitchesInput"></a>

```typescript
public readonly notifySwitchesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numberOfPortsInput`<sup>Optional</sup> <a name="numberOfPortsInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPortsInput"></a>

```typescript
public readonly numberOfPortsInput: number;
```

- *Type:* number

---

##### `shapingAverageBandwidthInput`<sup>Optional</sup> <a name="shapingAverageBandwidthInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidthInput"></a>

```typescript
public readonly shapingAverageBandwidthInput: number;
```

- *Type:* number

---

##### `shapingBurstSizeInput`<sup>Optional</sup> <a name="shapingBurstSizeInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSizeInput"></a>

```typescript
public readonly shapingBurstSizeInput: number;
```

- *Type:* number

---

##### `shapingEnabledInput`<sup>Optional</sup> <a name="shapingEnabledInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabledInput"></a>

```typescript
public readonly shapingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shapingPeakBandwidthInput`<sup>Optional</sup> <a name="shapingPeakBandwidthInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidthInput"></a>

```typescript
public readonly shapingPeakBandwidthInput: number;
```

- *Type:* number

---

##### `standbyNicsInput`<sup>Optional</sup> <a name="standbyNicsInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNicsInput"></a>

```typescript
public readonly standbyNicsInput: string[];
```

- *Type:* string[]

---

##### `teamingPolicyInput`<sup>Optional</sup> <a name="teamingPolicyInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicyInput"></a>

```typescript
public readonly teamingPolicyInput: string;
```

- *Type:* string

---

##### `activeNics`<sup>Required</sup> <a name="activeNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNics"></a>

```typescript
public readonly activeNics: string[];
```

- *Type:* string[]

---

##### `allowForgedTransmits`<sup>Required</sup> <a name="allowForgedTransmits" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmits"></a>

```typescript
public readonly allowForgedTransmits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowMacChanges`<sup>Required</sup> <a name="allowMacChanges" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChanges"></a>

```typescript
public readonly allowMacChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowPromiscuous`<sup>Required</sup> <a name="allowPromiscuous" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuous"></a>

```typescript
public readonly allowPromiscuous: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `beaconInterval`<sup>Required</sup> <a name="beaconInterval" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconInterval"></a>

```typescript
public readonly beaconInterval: number;
```

- *Type:* number

---

##### `checkBeacon`<sup>Required</sup> <a name="checkBeacon" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeacon"></a>

```typescript
public readonly checkBeacon: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failback`<sup>Required</sup> <a name="failback" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failback"></a>

```typescript
public readonly failback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemId"></a>

```typescript
public readonly hostSystemId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkDiscoveryOperation`<sup>Required</sup> <a name="linkDiscoveryOperation" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperation"></a>

```typescript
public readonly linkDiscoveryOperation: string;
```

- *Type:* string

---

##### `linkDiscoveryProtocol`<sup>Required</sup> <a name="linkDiscoveryProtocol" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocol"></a>

```typescript
public readonly linkDiscoveryProtocol: string;
```

- *Type:* string

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkAdapters`<sup>Required</sup> <a name="networkAdapters" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdapters"></a>

```typescript
public readonly networkAdapters: string[];
```

- *Type:* string[]

---

##### `notifySwitches`<sup>Required</sup> <a name="notifySwitches" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitches"></a>

```typescript
public readonly notifySwitches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numberOfPorts`<sup>Required</sup> <a name="numberOfPorts" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPorts"></a>

```typescript
public readonly numberOfPorts: number;
```

- *Type:* number

---

##### `shapingAverageBandwidth`<sup>Required</sup> <a name="shapingAverageBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidth"></a>

```typescript
public readonly shapingAverageBandwidth: number;
```

- *Type:* number

---

##### `shapingBurstSize`<sup>Required</sup> <a name="shapingBurstSize" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSize"></a>

```typescript
public readonly shapingBurstSize: number;
```

- *Type:* number

---

##### `shapingEnabled`<sup>Required</sup> <a name="shapingEnabled" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabled"></a>

```typescript
public readonly shapingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shapingPeakBandwidth`<sup>Required</sup> <a name="shapingPeakBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidth"></a>

```typescript
public readonly shapingPeakBandwidth: number;
```

- *Type:* number

---

##### `standbyNics`<sup>Required</sup> <a name="standbyNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNics"></a>

```typescript
public readonly standbyNics: string[];
```

- *Type:* string[]

---

##### `teamingPolicy`<sup>Required</sup> <a name="teamingPolicy" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicy"></a>

```typescript
public readonly teamingPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HostVirtualSwitchConfig <a name="HostVirtualSwitchConfig" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.Initializer"></a>

```typescript
import { hostVirtualSwitch } from '@cdktf/provider-vsphere'

const hostVirtualSwitchConfig: hostVirtualSwitch.HostVirtualSwitchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.activeNics">activeNics</a></code> | <code>string[]</code> | List of active network adapters used for load balancing. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.hostSystemId">hostSystemId</a></code> | <code>string</code> | The managed object ID of the host to set the virtual switch up on. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.name">name</a></code> | <code>string</code> | The name of the virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.networkAdapters">networkAdapters</a></code> | <code>string[]</code> | The list of network adapters to bind to this virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowForgedTransmits">allowForgedTransmits</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowMacChanges">allowMacChanges</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowPromiscuous">allowPromiscuous</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.beaconInterval">beaconInterval</a></code> | <code>number</code> | Determines how often, in seconds, a beacon should be sent to probe for the validity of a link. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.checkBeacon">checkBeacon</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable beacon probing. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.failback">failback</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#id HostVirtualSwitch#id}. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryOperation">linkDiscoveryOperation</a></code> | <code>string</code> | Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryProtocol">linkDiscoveryProtocol</a></code> | <code>string</code> | The discovery protocol type. Valid values are cdp and lldp. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.mtu">mtu</a></code> | <code>number</code> | The maximum transmission unit (MTU) of the virtual switch in bytes. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.notifySwitches">notifySwitches</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.numberOfPorts">numberOfPorts</a></code> | <code>number</code> | The number of ports that this virtual switch is configured to use. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingAverageBandwidth">shapingAverageBandwidth</a></code> | <code>number</code> | The average bandwidth in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingBurstSize">shapingBurstSize</a></code> | <code>number</code> | The maximum burst size allowed in bytes if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingEnabled">shapingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable traffic shaping on this virtual switch or port group. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingPeakBandwidth">shapingPeakBandwidth</a></code> | <code>number</code> | The peak bandwidth during bursts in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.standbyNics">standbyNics</a></code> | <code>string[]</code> | List of standby network adapters used for failover. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.teamingPolicy">teamingPolicy</a></code> | <code>string</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `activeNics`<sup>Required</sup> <a name="activeNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.activeNics"></a>

```typescript
public readonly activeNics: string[];
```

- *Type:* string[]

List of active network adapters used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#active_nics HostVirtualSwitch#active_nics}

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.hostSystemId"></a>

```typescript
public readonly hostSystemId: string;
```

- *Type:* string

The managed object ID of the host to set the virtual switch up on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#host_system_id HostVirtualSwitch#host_system_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the virtual switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#name HostVirtualSwitch#name}

---

##### `networkAdapters`<sup>Required</sup> <a name="networkAdapters" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.networkAdapters"></a>

```typescript
public readonly networkAdapters: string[];
```

- *Type:* string[]

The list of network adapters to bind to this virtual switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#network_adapters HostVirtualSwitch#network_adapters}

---

##### `allowForgedTransmits`<sup>Optional</sup> <a name="allowForgedTransmits" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowForgedTransmits"></a>

```typescript
public readonly allowForgedTransmits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#allow_forged_transmits HostVirtualSwitch#allow_forged_transmits}

---

##### `allowMacChanges`<sup>Optional</sup> <a name="allowMacChanges" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowMacChanges"></a>

```typescript
public readonly allowMacChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#allow_mac_changes HostVirtualSwitch#allow_mac_changes}

---

##### `allowPromiscuous`<sup>Optional</sup> <a name="allowPromiscuous" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowPromiscuous"></a>

```typescript
public readonly allowPromiscuous: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#allow_promiscuous HostVirtualSwitch#allow_promiscuous}

---

##### `beaconInterval`<sup>Optional</sup> <a name="beaconInterval" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.beaconInterval"></a>

```typescript
public readonly beaconInterval: number;
```

- *Type:* number

Determines how often, in seconds, a beacon should be sent to probe for the validity of a link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#beacon_interval HostVirtualSwitch#beacon_interval}

---

##### `checkBeacon`<sup>Optional</sup> <a name="checkBeacon" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.checkBeacon"></a>

```typescript
public readonly checkBeacon: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable beacon probing.

Requires that the vSwitch has been configured to use a beacon. If disabled, link status is used only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#check_beacon HostVirtualSwitch#check_beacon}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.failback"></a>

```typescript
public readonly failback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#failback HostVirtualSwitch#failback}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#id HostVirtualSwitch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linkDiscoveryOperation`<sup>Optional</sup> <a name="linkDiscoveryOperation" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryOperation"></a>

```typescript
public readonly linkDiscoveryOperation: string;
```

- *Type:* string

Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#link_discovery_operation HostVirtualSwitch#link_discovery_operation}

---

##### `linkDiscoveryProtocol`<sup>Optional</sup> <a name="linkDiscoveryProtocol" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryProtocol"></a>

```typescript
public readonly linkDiscoveryProtocol: string;
```

- *Type:* string

The discovery protocol type. Valid values are cdp and lldp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#link_discovery_protocol HostVirtualSwitch#link_discovery_protocol}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

The maximum transmission unit (MTU) of the virtual switch in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#mtu HostVirtualSwitch#mtu}

---

##### `notifySwitches`<sup>Optional</sup> <a name="notifySwitches" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.notifySwitches"></a>

```typescript
public readonly notifySwitches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#notify_switches HostVirtualSwitch#notify_switches}

---

##### `numberOfPorts`<sup>Optional</sup> <a name="numberOfPorts" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.numberOfPorts"></a>

```typescript
public readonly numberOfPorts: number;
```

- *Type:* number

The number of ports that this virtual switch is configured to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#number_of_ports HostVirtualSwitch#number_of_ports}

---

##### `shapingAverageBandwidth`<sup>Optional</sup> <a name="shapingAverageBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingAverageBandwidth"></a>

```typescript
public readonly shapingAverageBandwidth: number;
```

- *Type:* number

The average bandwidth in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#shaping_average_bandwidth HostVirtualSwitch#shaping_average_bandwidth}

---

##### `shapingBurstSize`<sup>Optional</sup> <a name="shapingBurstSize" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingBurstSize"></a>

```typescript
public readonly shapingBurstSize: number;
```

- *Type:* number

The maximum burst size allowed in bytes if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#shaping_burst_size HostVirtualSwitch#shaping_burst_size}

---

##### `shapingEnabled`<sup>Optional</sup> <a name="shapingEnabled" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingEnabled"></a>

```typescript
public readonly shapingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable traffic shaping on this virtual switch or port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#shaping_enabled HostVirtualSwitch#shaping_enabled}

---

##### `shapingPeakBandwidth`<sup>Optional</sup> <a name="shapingPeakBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingPeakBandwidth"></a>

```typescript
public readonly shapingPeakBandwidth: number;
```

- *Type:* number

The peak bandwidth during bursts in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#shaping_peak_bandwidth HostVirtualSwitch#shaping_peak_bandwidth}

---

##### `standbyNics`<sup>Optional</sup> <a name="standbyNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.standbyNics"></a>

```typescript
public readonly standbyNics: string[];
```

- *Type:* string[]

List of standby network adapters used for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#standby_nics HostVirtualSwitch#standby_nics}

---

##### `teamingPolicy`<sup>Optional</sup> <a name="teamingPolicy" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.teamingPolicy"></a>

```typescript
public readonly teamingPolicy: string;
```

- *Type:* string

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/resources/host_virtual_switch#teaming_policy HostVirtualSwitch#teaming_policy}

---



