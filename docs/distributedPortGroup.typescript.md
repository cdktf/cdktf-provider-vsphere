# `distributedPortGroup` Submodule <a name="`distributedPortGroup` Submodule" id="@cdktf/provider-vsphere.distributedPortGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DistributedPortGroup <a name="DistributedPortGroup" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group vsphere_distributed_port_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer"></a>

```typescript
import { distributedPortGroup } from '@cdktf/provider-vsphere'

new distributedPortGroup.DistributedPortGroup(scope: Construct, id: string, config: DistributedPortGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig">DistributedPortGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig">DistributedPortGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.putVlanRange">putVlanRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetActiveUplinks">resetActiveUplinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowForgedTransmits">resetAllowForgedTransmits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowMacChanges">resetAllowMacChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowPromiscuous">resetAllowPromiscuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAutoExpand">resetAutoExpand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetBlockAllPorts">resetBlockAllPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetBlockOverrideAllowed">resetBlockOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetCheckBeacon">resetCheckBeacon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetDirectpathGen2Allowed">resetDirectpathGen2Allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingAverageBandwidth">resetEgressShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingBurstSize">resetEgressShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingEnabled">resetEgressShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingPeakBandwidth">resetEgressShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetFailback">resetFailback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingAverageBandwidth">resetIngressShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingBurstSize">resetIngressShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingEnabled">resetIngressShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingPeakBandwidth">resetIngressShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLacpEnabled">resetLacpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLacpMode">resetLacpMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLivePortMovingAllowed">resetLivePortMovingAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetflowEnabled">resetNetflowEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetflowOverrideAllowed">resetNetflowOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetworkResourcePoolKey">resetNetworkResourcePoolKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetworkResourcePoolOverrideAllowed">resetNetworkResourcePoolOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNotifySwitches">resetNotifySwitches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNumberOfPorts">resetNumberOfPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortConfigResetAtDisconnect">resetPortConfigResetAtDisconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortNameFormat">resetPortNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortPrivateSecondaryVlanId">resetPortPrivateSecondaryVlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetSecurityPolicyOverrideAllowed">resetSecurityPolicyOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetShapingOverrideAllowed">resetShapingOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetStandbyUplinks">resetStandbyUplinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTeamingPolicy">resetTeamingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTrafficFilterOverrideAllowed">resetTrafficFilterOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTxUplink">resetTxUplink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetUplinkTeamingOverrideAllowed">resetUplinkTeamingOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanId">resetVlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanOverrideAllowed">resetVlanOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanRange">resetVlanRange</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVlanRange` <a name="putVlanRange" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.putVlanRange"></a>

```typescript
public putVlanRange(value: IResolvable | DistributedPortGroupVlanRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.putVlanRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>[]

---

##### `resetActiveUplinks` <a name="resetActiveUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetActiveUplinks"></a>

```typescript
public resetActiveUplinks(): void
```

##### `resetAllowForgedTransmits` <a name="resetAllowForgedTransmits" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowForgedTransmits"></a>

```typescript
public resetAllowForgedTransmits(): void
```

##### `resetAllowMacChanges` <a name="resetAllowMacChanges" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowMacChanges"></a>

```typescript
public resetAllowMacChanges(): void
```

##### `resetAllowPromiscuous` <a name="resetAllowPromiscuous" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowPromiscuous"></a>

```typescript
public resetAllowPromiscuous(): void
```

##### `resetAutoExpand` <a name="resetAutoExpand" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAutoExpand"></a>

```typescript
public resetAutoExpand(): void
```

##### `resetBlockAllPorts` <a name="resetBlockAllPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetBlockAllPorts"></a>

```typescript
public resetBlockAllPorts(): void
```

##### `resetBlockOverrideAllowed` <a name="resetBlockOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetBlockOverrideAllowed"></a>

```typescript
public resetBlockOverrideAllowed(): void
```

##### `resetCheckBeacon` <a name="resetCheckBeacon" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetCheckBeacon"></a>

```typescript
public resetCheckBeacon(): void
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetCustomAttributes"></a>

```typescript
public resetCustomAttributes(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDirectpathGen2Allowed` <a name="resetDirectpathGen2Allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetDirectpathGen2Allowed"></a>

```typescript
public resetDirectpathGen2Allowed(): void
```

##### `resetEgressShapingAverageBandwidth` <a name="resetEgressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingAverageBandwidth"></a>

```typescript
public resetEgressShapingAverageBandwidth(): void
```

##### `resetEgressShapingBurstSize` <a name="resetEgressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingBurstSize"></a>

```typescript
public resetEgressShapingBurstSize(): void
```

##### `resetEgressShapingEnabled` <a name="resetEgressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingEnabled"></a>

```typescript
public resetEgressShapingEnabled(): void
```

##### `resetEgressShapingPeakBandwidth` <a name="resetEgressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingPeakBandwidth"></a>

```typescript
public resetEgressShapingPeakBandwidth(): void
```

##### `resetFailback` <a name="resetFailback" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetFailback"></a>

```typescript
public resetFailback(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngressShapingAverageBandwidth` <a name="resetIngressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingAverageBandwidth"></a>

```typescript
public resetIngressShapingAverageBandwidth(): void
```

##### `resetIngressShapingBurstSize` <a name="resetIngressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingBurstSize"></a>

```typescript
public resetIngressShapingBurstSize(): void
```

##### `resetIngressShapingEnabled` <a name="resetIngressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingEnabled"></a>

```typescript
public resetIngressShapingEnabled(): void
```

##### `resetIngressShapingPeakBandwidth` <a name="resetIngressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingPeakBandwidth"></a>

```typescript
public resetIngressShapingPeakBandwidth(): void
```

##### `resetLacpEnabled` <a name="resetLacpEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLacpEnabled"></a>

```typescript
public resetLacpEnabled(): void
```

##### `resetLacpMode` <a name="resetLacpMode" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLacpMode"></a>

```typescript
public resetLacpMode(): void
```

##### `resetLivePortMovingAllowed` <a name="resetLivePortMovingAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLivePortMovingAllowed"></a>

```typescript
public resetLivePortMovingAllowed(): void
```

##### `resetNetflowEnabled` <a name="resetNetflowEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetflowEnabled"></a>

```typescript
public resetNetflowEnabled(): void
```

##### `resetNetflowOverrideAllowed` <a name="resetNetflowOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetflowOverrideAllowed"></a>

```typescript
public resetNetflowOverrideAllowed(): void
```

##### `resetNetworkResourcePoolKey` <a name="resetNetworkResourcePoolKey" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetworkResourcePoolKey"></a>

```typescript
public resetNetworkResourcePoolKey(): void
```

##### `resetNetworkResourcePoolOverrideAllowed` <a name="resetNetworkResourcePoolOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetworkResourcePoolOverrideAllowed"></a>

```typescript
public resetNetworkResourcePoolOverrideAllowed(): void
```

##### `resetNotifySwitches` <a name="resetNotifySwitches" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNotifySwitches"></a>

```typescript
public resetNotifySwitches(): void
```

##### `resetNumberOfPorts` <a name="resetNumberOfPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNumberOfPorts"></a>

```typescript
public resetNumberOfPorts(): void
```

##### `resetPortConfigResetAtDisconnect` <a name="resetPortConfigResetAtDisconnect" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortConfigResetAtDisconnect"></a>

```typescript
public resetPortConfigResetAtDisconnect(): void
```

##### `resetPortNameFormat` <a name="resetPortNameFormat" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortNameFormat"></a>

```typescript
public resetPortNameFormat(): void
```

##### `resetPortPrivateSecondaryVlanId` <a name="resetPortPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortPrivateSecondaryVlanId"></a>

```typescript
public resetPortPrivateSecondaryVlanId(): void
```

##### `resetSecurityPolicyOverrideAllowed` <a name="resetSecurityPolicyOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetSecurityPolicyOverrideAllowed"></a>

```typescript
public resetSecurityPolicyOverrideAllowed(): void
```

##### `resetShapingOverrideAllowed` <a name="resetShapingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetShapingOverrideAllowed"></a>

```typescript
public resetShapingOverrideAllowed(): void
```

##### `resetStandbyUplinks` <a name="resetStandbyUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetStandbyUplinks"></a>

```typescript
public resetStandbyUplinks(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTeamingPolicy` <a name="resetTeamingPolicy" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTeamingPolicy"></a>

```typescript
public resetTeamingPolicy(): void
```

##### `resetTrafficFilterOverrideAllowed` <a name="resetTrafficFilterOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTrafficFilterOverrideAllowed"></a>

```typescript
public resetTrafficFilterOverrideAllowed(): void
```

##### `resetTxUplink` <a name="resetTxUplink" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTxUplink"></a>

```typescript
public resetTxUplink(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUplinkTeamingOverrideAllowed` <a name="resetUplinkTeamingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetUplinkTeamingOverrideAllowed"></a>

```typescript
public resetUplinkTeamingOverrideAllowed(): void
```

##### `resetVlanId` <a name="resetVlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanId"></a>

```typescript
public resetVlanId(): void
```

##### `resetVlanOverrideAllowed` <a name="resetVlanOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanOverrideAllowed"></a>

```typescript
public resetVlanOverrideAllowed(): void
```

##### `resetVlanRange` <a name="resetVlanRange" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanRange"></a>

```typescript
public resetVlanRange(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DistributedPortGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isConstruct"></a>

```typescript
import { distributedPortGroup } from '@cdktf/provider-vsphere'

distributedPortGroup.DistributedPortGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformElement"></a>

```typescript
import { distributedPortGroup } from '@cdktf/provider-vsphere'

distributedPortGroup.DistributedPortGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformResource"></a>

```typescript
import { distributedPortGroup } from '@cdktf/provider-vsphere'

distributedPortGroup.DistributedPortGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport"></a>

```typescript
import { distributedPortGroup } from '@cdktf/provider-vsphere'

distributedPortGroup.DistributedPortGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DistributedPortGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DistributedPortGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DistributedPortGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DistributedPortGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.configVersion">configVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanRange">vlanRange</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList">DistributedPortGroupVlanRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.activeUplinksInput">activeUplinksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowForgedTransmitsInput">allowForgedTransmitsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowMacChangesInput">allowMacChangesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowPromiscuousInput">allowPromiscuousInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.autoExpandInput">autoExpandInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockAllPortsInput">blockAllPortsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockOverrideAllowedInput">blockOverrideAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.checkBeaconInput">checkBeaconInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.customAttributesInput">customAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.directpathGen2AllowedInput">directpathGen2AllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.distributedVirtualSwitchUuidInput">distributedVirtualSwitchUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingAverageBandwidthInput">egressShapingAverageBandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingBurstSizeInput">egressShapingBurstSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingEnabledInput">egressShapingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingPeakBandwidthInput">egressShapingPeakBandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.failbackInput">failbackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingAverageBandwidthInput">ingressShapingAverageBandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingBurstSizeInput">ingressShapingBurstSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingEnabledInput">ingressShapingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingPeakBandwidthInput">ingressShapingPeakBandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpEnabledInput">lacpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpModeInput">lacpModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.livePortMovingAllowedInput">livePortMovingAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowEnabledInput">netflowEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowOverrideAllowedInput">netflowOverrideAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolKeyInput">networkResourcePoolKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolOverrideAllowedInput">networkResourcePoolOverrideAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.notifySwitchesInput">notifySwitchesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.numberOfPortsInput">numberOfPortsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portConfigResetAtDisconnectInput">portConfigResetAtDisconnectInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portNameFormatInput">portNameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portPrivateSecondaryVlanIdInput">portPrivateSecondaryVlanIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.securityPolicyOverrideAllowedInput">securityPolicyOverrideAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.shapingOverrideAllowedInput">shapingOverrideAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.standbyUplinksInput">standbyUplinksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.teamingPolicyInput">teamingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.trafficFilterOverrideAllowedInput">trafficFilterOverrideAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.txUplinkInput">txUplinkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.uplinkTeamingOverrideAllowedInput">uplinkTeamingOverrideAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanIdInput">vlanIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanOverrideAllowedInput">vlanOverrideAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanRangeInput">vlanRangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.activeUplinks">activeUplinks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowForgedTransmits">allowForgedTransmits</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowMacChanges">allowMacChanges</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowPromiscuous">allowPromiscuous</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.autoExpand">autoExpand</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockAllPorts">blockAllPorts</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockOverrideAllowed">blockOverrideAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.checkBeacon">checkBeacon</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.directpathGen2Allowed">directpathGen2Allowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.distributedVirtualSwitchUuid">distributedVirtualSwitchUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingAverageBandwidth">egressShapingAverageBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingBurstSize">egressShapingBurstSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingEnabled">egressShapingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingPeakBandwidth">egressShapingPeakBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.failback">failback</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingAverageBandwidth">ingressShapingAverageBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingBurstSize">ingressShapingBurstSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingEnabled">ingressShapingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingPeakBandwidth">ingressShapingPeakBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpEnabled">lacpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpMode">lacpMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.livePortMovingAllowed">livePortMovingAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowEnabled">netflowEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowOverrideAllowed">netflowOverrideAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolKey">networkResourcePoolKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolOverrideAllowed">networkResourcePoolOverrideAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.notifySwitches">notifySwitches</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.numberOfPorts">numberOfPorts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portConfigResetAtDisconnect">portConfigResetAtDisconnect</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portNameFormat">portNameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portPrivateSecondaryVlanId">portPrivateSecondaryVlanId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.securityPolicyOverrideAllowed">securityPolicyOverrideAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.shapingOverrideAllowed">shapingOverrideAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.standbyUplinks">standbyUplinks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.teamingPolicy">teamingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.trafficFilterOverrideAllowed">trafficFilterOverrideAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.txUplink">txUplink</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.uplinkTeamingOverrideAllowed">uplinkTeamingOverrideAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanId">vlanId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanOverrideAllowed">vlanOverrideAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configVersion`<sup>Required</sup> <a name="configVersion" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.configVersion"></a>

```typescript
public readonly configVersion: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `vlanRange`<sup>Required</sup> <a name="vlanRange" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanRange"></a>

```typescript
public readonly vlanRange: DistributedPortGroupVlanRangeList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList">DistributedPortGroupVlanRangeList</a>

---

##### `activeUplinksInput`<sup>Optional</sup> <a name="activeUplinksInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.activeUplinksInput"></a>

```typescript
public readonly activeUplinksInput: string[];
```

- *Type:* string[]

---

##### `allowForgedTransmitsInput`<sup>Optional</sup> <a name="allowForgedTransmitsInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowForgedTransmitsInput"></a>

```typescript
public readonly allowForgedTransmitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowMacChangesInput`<sup>Optional</sup> <a name="allowMacChangesInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowMacChangesInput"></a>

```typescript
public readonly allowMacChangesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowPromiscuousInput`<sup>Optional</sup> <a name="allowPromiscuousInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowPromiscuousInput"></a>

```typescript
public readonly allowPromiscuousInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoExpandInput`<sup>Optional</sup> <a name="autoExpandInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.autoExpandInput"></a>

```typescript
public readonly autoExpandInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blockAllPortsInput`<sup>Optional</sup> <a name="blockAllPortsInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockAllPortsInput"></a>

```typescript
public readonly blockAllPortsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blockOverrideAllowedInput`<sup>Optional</sup> <a name="blockOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockOverrideAllowedInput"></a>

```typescript
public readonly blockOverrideAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `checkBeaconInput`<sup>Optional</sup> <a name="checkBeaconInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.checkBeaconInput"></a>

```typescript
public readonly checkBeaconInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.customAttributesInput"></a>

```typescript
public readonly customAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `directpathGen2AllowedInput`<sup>Optional</sup> <a name="directpathGen2AllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.directpathGen2AllowedInput"></a>

```typescript
public readonly directpathGen2AllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `distributedVirtualSwitchUuidInput`<sup>Optional</sup> <a name="distributedVirtualSwitchUuidInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.distributedVirtualSwitchUuidInput"></a>

```typescript
public readonly distributedVirtualSwitchUuidInput: string;
```

- *Type:* string

---

##### `egressShapingAverageBandwidthInput`<sup>Optional</sup> <a name="egressShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingAverageBandwidthInput"></a>

```typescript
public readonly egressShapingAverageBandwidthInput: number;
```

- *Type:* number

---

##### `egressShapingBurstSizeInput`<sup>Optional</sup> <a name="egressShapingBurstSizeInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingBurstSizeInput"></a>

```typescript
public readonly egressShapingBurstSizeInput: number;
```

- *Type:* number

---

##### `egressShapingEnabledInput`<sup>Optional</sup> <a name="egressShapingEnabledInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingEnabledInput"></a>

```typescript
public readonly egressShapingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `egressShapingPeakBandwidthInput`<sup>Optional</sup> <a name="egressShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingPeakBandwidthInput"></a>

```typescript
public readonly egressShapingPeakBandwidthInput: number;
```

- *Type:* number

---

##### `failbackInput`<sup>Optional</sup> <a name="failbackInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.failbackInput"></a>

```typescript
public readonly failbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressShapingAverageBandwidthInput`<sup>Optional</sup> <a name="ingressShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingAverageBandwidthInput"></a>

```typescript
public readonly ingressShapingAverageBandwidthInput: number;
```

- *Type:* number

---

##### `ingressShapingBurstSizeInput`<sup>Optional</sup> <a name="ingressShapingBurstSizeInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingBurstSizeInput"></a>

```typescript
public readonly ingressShapingBurstSizeInput: number;
```

- *Type:* number

---

##### `ingressShapingEnabledInput`<sup>Optional</sup> <a name="ingressShapingEnabledInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingEnabledInput"></a>

```typescript
public readonly ingressShapingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ingressShapingPeakBandwidthInput`<sup>Optional</sup> <a name="ingressShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingPeakBandwidthInput"></a>

```typescript
public readonly ingressShapingPeakBandwidthInput: number;
```

- *Type:* number

---

##### `lacpEnabledInput`<sup>Optional</sup> <a name="lacpEnabledInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpEnabledInput"></a>

```typescript
public readonly lacpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lacpModeInput`<sup>Optional</sup> <a name="lacpModeInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpModeInput"></a>

```typescript
public readonly lacpModeInput: string;
```

- *Type:* string

---

##### `livePortMovingAllowedInput`<sup>Optional</sup> <a name="livePortMovingAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.livePortMovingAllowedInput"></a>

```typescript
public readonly livePortMovingAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `netflowEnabledInput`<sup>Optional</sup> <a name="netflowEnabledInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowEnabledInput"></a>

```typescript
public readonly netflowEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `netflowOverrideAllowedInput`<sup>Optional</sup> <a name="netflowOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowOverrideAllowedInput"></a>

```typescript
public readonly netflowOverrideAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkResourcePoolKeyInput`<sup>Optional</sup> <a name="networkResourcePoolKeyInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolKeyInput"></a>

```typescript
public readonly networkResourcePoolKeyInput: string;
```

- *Type:* string

---

##### `networkResourcePoolOverrideAllowedInput`<sup>Optional</sup> <a name="networkResourcePoolOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolOverrideAllowedInput"></a>

```typescript
public readonly networkResourcePoolOverrideAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notifySwitchesInput`<sup>Optional</sup> <a name="notifySwitchesInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.notifySwitchesInput"></a>

```typescript
public readonly notifySwitchesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numberOfPortsInput`<sup>Optional</sup> <a name="numberOfPortsInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.numberOfPortsInput"></a>

```typescript
public readonly numberOfPortsInput: number;
```

- *Type:* number

---

##### `portConfigResetAtDisconnectInput`<sup>Optional</sup> <a name="portConfigResetAtDisconnectInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portConfigResetAtDisconnectInput"></a>

```typescript
public readonly portConfigResetAtDisconnectInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `portNameFormatInput`<sup>Optional</sup> <a name="portNameFormatInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portNameFormatInput"></a>

```typescript
public readonly portNameFormatInput: string;
```

- *Type:* string

---

##### `portPrivateSecondaryVlanIdInput`<sup>Optional</sup> <a name="portPrivateSecondaryVlanIdInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portPrivateSecondaryVlanIdInput"></a>

```typescript
public readonly portPrivateSecondaryVlanIdInput: number;
```

- *Type:* number

---

##### `securityPolicyOverrideAllowedInput`<sup>Optional</sup> <a name="securityPolicyOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.securityPolicyOverrideAllowedInput"></a>

```typescript
public readonly securityPolicyOverrideAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shapingOverrideAllowedInput`<sup>Optional</sup> <a name="shapingOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.shapingOverrideAllowedInput"></a>

```typescript
public readonly shapingOverrideAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `standbyUplinksInput`<sup>Optional</sup> <a name="standbyUplinksInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.standbyUplinksInput"></a>

```typescript
public readonly standbyUplinksInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `teamingPolicyInput`<sup>Optional</sup> <a name="teamingPolicyInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.teamingPolicyInput"></a>

```typescript
public readonly teamingPolicyInput: string;
```

- *Type:* string

---

##### `trafficFilterOverrideAllowedInput`<sup>Optional</sup> <a name="trafficFilterOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.trafficFilterOverrideAllowedInput"></a>

```typescript
public readonly trafficFilterOverrideAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `txUplinkInput`<sup>Optional</sup> <a name="txUplinkInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.txUplinkInput"></a>

```typescript
public readonly txUplinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uplinkTeamingOverrideAllowedInput`<sup>Optional</sup> <a name="uplinkTeamingOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.uplinkTeamingOverrideAllowedInput"></a>

```typescript
public readonly uplinkTeamingOverrideAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanIdInput"></a>

```typescript
public readonly vlanIdInput: number;
```

- *Type:* number

---

##### `vlanOverrideAllowedInput`<sup>Optional</sup> <a name="vlanOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanOverrideAllowedInput"></a>

```typescript
public readonly vlanOverrideAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vlanRangeInput`<sup>Optional</sup> <a name="vlanRangeInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanRangeInput"></a>

```typescript
public readonly vlanRangeInput: IResolvable | DistributedPortGroupVlanRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>[]

---

##### `activeUplinks`<sup>Required</sup> <a name="activeUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.activeUplinks"></a>

```typescript
public readonly activeUplinks: string[];
```

- *Type:* string[]

---

##### `allowForgedTransmits`<sup>Required</sup> <a name="allowForgedTransmits" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowForgedTransmits"></a>

```typescript
public readonly allowForgedTransmits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowMacChanges`<sup>Required</sup> <a name="allowMacChanges" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowMacChanges"></a>

```typescript
public readonly allowMacChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowPromiscuous`<sup>Required</sup> <a name="allowPromiscuous" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowPromiscuous"></a>

```typescript
public readonly allowPromiscuous: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoExpand`<sup>Required</sup> <a name="autoExpand" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.autoExpand"></a>

```typescript
public readonly autoExpand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blockAllPorts`<sup>Required</sup> <a name="blockAllPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockAllPorts"></a>

```typescript
public readonly blockAllPorts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blockOverrideAllowed`<sup>Required</sup> <a name="blockOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockOverrideAllowed"></a>

```typescript
public readonly blockOverrideAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `checkBeacon`<sup>Required</sup> <a name="checkBeacon" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.checkBeacon"></a>

```typescript
public readonly checkBeacon: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `directpathGen2Allowed`<sup>Required</sup> <a name="directpathGen2Allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.directpathGen2Allowed"></a>

```typescript
public readonly directpathGen2Allowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `distributedVirtualSwitchUuid`<sup>Required</sup> <a name="distributedVirtualSwitchUuid" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.distributedVirtualSwitchUuid"></a>

```typescript
public readonly distributedVirtualSwitchUuid: string;
```

- *Type:* string

---

##### `egressShapingAverageBandwidth`<sup>Required</sup> <a name="egressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingAverageBandwidth"></a>

```typescript
public readonly egressShapingAverageBandwidth: number;
```

- *Type:* number

---

##### `egressShapingBurstSize`<sup>Required</sup> <a name="egressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingBurstSize"></a>

```typescript
public readonly egressShapingBurstSize: number;
```

- *Type:* number

---

##### `egressShapingEnabled`<sup>Required</sup> <a name="egressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingEnabled"></a>

```typescript
public readonly egressShapingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `egressShapingPeakBandwidth`<sup>Required</sup> <a name="egressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingPeakBandwidth"></a>

```typescript
public readonly egressShapingPeakBandwidth: number;
```

- *Type:* number

---

##### `failback`<sup>Required</sup> <a name="failback" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.failback"></a>

```typescript
public readonly failback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingressShapingAverageBandwidth`<sup>Required</sup> <a name="ingressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingAverageBandwidth"></a>

```typescript
public readonly ingressShapingAverageBandwidth: number;
```

- *Type:* number

---

##### `ingressShapingBurstSize`<sup>Required</sup> <a name="ingressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingBurstSize"></a>

```typescript
public readonly ingressShapingBurstSize: number;
```

- *Type:* number

---

##### `ingressShapingEnabled`<sup>Required</sup> <a name="ingressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingEnabled"></a>

```typescript
public readonly ingressShapingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ingressShapingPeakBandwidth`<sup>Required</sup> <a name="ingressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingPeakBandwidth"></a>

```typescript
public readonly ingressShapingPeakBandwidth: number;
```

- *Type:* number

---

##### `lacpEnabled`<sup>Required</sup> <a name="lacpEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpEnabled"></a>

```typescript
public readonly lacpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lacpMode`<sup>Required</sup> <a name="lacpMode" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpMode"></a>

```typescript
public readonly lacpMode: string;
```

- *Type:* string

---

##### `livePortMovingAllowed`<sup>Required</sup> <a name="livePortMovingAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.livePortMovingAllowed"></a>

```typescript
public readonly livePortMovingAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `netflowEnabled`<sup>Required</sup> <a name="netflowEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowEnabled"></a>

```typescript
public readonly netflowEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `netflowOverrideAllowed`<sup>Required</sup> <a name="netflowOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowOverrideAllowed"></a>

```typescript
public readonly netflowOverrideAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkResourcePoolKey`<sup>Required</sup> <a name="networkResourcePoolKey" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolKey"></a>

```typescript
public readonly networkResourcePoolKey: string;
```

- *Type:* string

---

##### `networkResourcePoolOverrideAllowed`<sup>Required</sup> <a name="networkResourcePoolOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolOverrideAllowed"></a>

```typescript
public readonly networkResourcePoolOverrideAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notifySwitches`<sup>Required</sup> <a name="notifySwitches" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.notifySwitches"></a>

```typescript
public readonly notifySwitches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numberOfPorts`<sup>Required</sup> <a name="numberOfPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.numberOfPorts"></a>

```typescript
public readonly numberOfPorts: number;
```

- *Type:* number

---

##### `portConfigResetAtDisconnect`<sup>Required</sup> <a name="portConfigResetAtDisconnect" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portConfigResetAtDisconnect"></a>

```typescript
public readonly portConfigResetAtDisconnect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `portNameFormat`<sup>Required</sup> <a name="portNameFormat" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portNameFormat"></a>

```typescript
public readonly portNameFormat: string;
```

- *Type:* string

---

##### `portPrivateSecondaryVlanId`<sup>Required</sup> <a name="portPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portPrivateSecondaryVlanId"></a>

```typescript
public readonly portPrivateSecondaryVlanId: number;
```

- *Type:* number

---

##### `securityPolicyOverrideAllowed`<sup>Required</sup> <a name="securityPolicyOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.securityPolicyOverrideAllowed"></a>

```typescript
public readonly securityPolicyOverrideAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shapingOverrideAllowed`<sup>Required</sup> <a name="shapingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.shapingOverrideAllowed"></a>

```typescript
public readonly shapingOverrideAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `standbyUplinks`<sup>Required</sup> <a name="standbyUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.standbyUplinks"></a>

```typescript
public readonly standbyUplinks: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `teamingPolicy`<sup>Required</sup> <a name="teamingPolicy" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.teamingPolicy"></a>

```typescript
public readonly teamingPolicy: string;
```

- *Type:* string

---

##### `trafficFilterOverrideAllowed`<sup>Required</sup> <a name="trafficFilterOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.trafficFilterOverrideAllowed"></a>

```typescript
public readonly trafficFilterOverrideAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `txUplink`<sup>Required</sup> <a name="txUplink" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.txUplink"></a>

```typescript
public readonly txUplink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uplinkTeamingOverrideAllowed`<sup>Required</sup> <a name="uplinkTeamingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.uplinkTeamingOverrideAllowed"></a>

```typescript
public readonly uplinkTeamingOverrideAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

---

##### `vlanOverrideAllowed`<sup>Required</sup> <a name="vlanOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanOverrideAllowed"></a>

```typescript
public readonly vlanOverrideAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DistributedPortGroupConfig <a name="DistributedPortGroupConfig" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.Initializer"></a>

```typescript
import { distributedPortGroup } from '@cdktf/provider-vsphere'

const distributedPortGroupConfig: distributedPortGroup.DistributedPortGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.distributedVirtualSwitchUuid">distributedVirtualSwitchUuid</a></code> | <code>string</code> | The UUID of the DVS to attach this port group to. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.name">name</a></code> | <code>string</code> | The name of the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.activeUplinks">activeUplinks</a></code> | <code>string[]</code> | List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowForgedTransmits">allowForgedTransmits</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowMacChanges">allowMacChanges</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowPromiscuous">allowPromiscuous</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.autoExpand">autoExpand</a></code> | <code>boolean \| cdktf.IResolvable</code> | Auto-expands the port group beyond the port count configured in number_of_ports when necessary. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.blockAllPorts">blockAllPorts</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether to block all ports by default. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.blockOverrideAllowed">blockOverrideAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow the blocked setting of an individual port to override the setting in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.checkBeacon">checkBeacon</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable beacon probing on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.description">description</a></code> | <code>string</code> | The description of the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.directpathGen2Allowed">directpathGen2Allowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow VMDirectPath Gen2 on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingAverageBandwidth">egressShapingAverageBandwidth</a></code> | <code>number</code> | The average egress bandwidth in bits per second if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingBurstSize">egressShapingBurstSize</a></code> | <code>number</code> | The maximum egress burst size allowed in bytes if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingEnabled">egressShapingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if the traffic shaper is enabled for egress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingPeakBandwidth">egressShapingPeakBandwidth</a></code> | <code>number</code> | The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.failback">failback</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#id DistributedPortGroup#id}. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingAverageBandwidth">ingressShapingAverageBandwidth</a></code> | <code>number</code> | The average ingress bandwidth in bits per second if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingBurstSize">ingressShapingBurstSize</a></code> | <code>number</code> | The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingEnabled">ingressShapingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if the traffic shaper is enabled for ingress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingPeakBandwidth">ingressShapingPeakBandwidth</a></code> | <code>number</code> | The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lacpEnabled">lacpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to enable LACP on all uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lacpMode">lacpMode</a></code> | <code>string</code> | The uplink LACP mode to use. Can be one of active or passive. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.livePortMovingAllowed">livePortMovingAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow a live port to be moved in and out of the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.netflowEnabled">netflowEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether to enable netflow on all ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.netflowOverrideAllowed">netflowOverrideAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow the enabling or disabling of Netflow on a port, contrary to the policy in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.networkResourcePoolKey">networkResourcePoolKey</a></code> | <code>string</code> | The key of a network resource pool to associate with this portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.networkResourcePoolOverrideAllowed">networkResourcePoolOverrideAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow the network resource pool of an individual port to override the setting in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.notifySwitches">notifySwitches</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.numberOfPorts">numberOfPorts</a></code> | <code>number</code> | The number of ports in this portgroup. The DVS will expand and shrink by modifying this setting. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portConfigResetAtDisconnect">portConfigResetAtDisconnect</a></code> | <code>boolean \| cdktf.IResolvable</code> | Reset the setting of any ports in this portgroup back to the default setting when the port disconnects. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portNameFormat">portNameFormat</a></code> | <code>string</code> | A template string to use when creating ports in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portPrivateSecondaryVlanId">portPrivateSecondaryVlanId</a></code> | <code>number</code> | The secondary VLAN ID for this port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.securityPolicyOverrideAllowed">securityPolicyOverrideAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow security policy settings on a port to override those on the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.shapingOverrideAllowed">shapingOverrideAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow the traffic shaping policies of an individual port to override the settings in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.standbyUplinks">standbyUplinks</a></code> | <code>string[]</code> | List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.teamingPolicy">teamingPolicy</a></code> | <code>string</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.trafficFilterOverrideAllowed">trafficFilterOverrideAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow any filter policies set on the individual port to override those in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.txUplink">txUplink</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.type">type</a></code> | <code>string</code> | The type of portgroup. Can be one of earlyBinding (static) or ephemeral. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.uplinkTeamingOverrideAllowed">uplinkTeamingOverrideAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow the uplink teaming policies on a port to override those on the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanId">vlanId</a></code> | <code>number</code> | The VLAN ID for single VLAN mode. 0 denotes no VLAN. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanOverrideAllowed">vlanOverrideAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow the VLAN configuration on a port to override those on the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanRange">vlanRange</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>[]</code> | vlan_range block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `distributedVirtualSwitchUuid`<sup>Required</sup> <a name="distributedVirtualSwitchUuid" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.distributedVirtualSwitchUuid"></a>

```typescript
public readonly distributedVirtualSwitchUuid: string;
```

- *Type:* string

The UUID of the DVS to attach this port group to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#distributed_virtual_switch_uuid DistributedPortGroup#distributed_virtual_switch_uuid}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#name DistributedPortGroup#name}

---

##### `activeUplinks`<sup>Optional</sup> <a name="activeUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.activeUplinks"></a>

```typescript
public readonly activeUplinks: string[];
```

- *Type:* string[]

List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#active_uplinks DistributedPortGroup#active_uplinks}

---

##### `allowForgedTransmits`<sup>Optional</sup> <a name="allowForgedTransmits" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowForgedTransmits"></a>

```typescript
public readonly allowForgedTransmits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#allow_forged_transmits DistributedPortGroup#allow_forged_transmits}

---

##### `allowMacChanges`<sup>Optional</sup> <a name="allowMacChanges" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowMacChanges"></a>

```typescript
public readonly allowMacChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#allow_mac_changes DistributedPortGroup#allow_mac_changes}

---

##### `allowPromiscuous`<sup>Optional</sup> <a name="allowPromiscuous" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowPromiscuous"></a>

```typescript
public readonly allowPromiscuous: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#allow_promiscuous DistributedPortGroup#allow_promiscuous}

---

##### `autoExpand`<sup>Optional</sup> <a name="autoExpand" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.autoExpand"></a>

```typescript
public readonly autoExpand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Auto-expands the port group beyond the port count configured in number_of_ports when necessary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#auto_expand DistributedPortGroup#auto_expand}

---

##### `blockAllPorts`<sup>Optional</sup> <a name="blockAllPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.blockAllPorts"></a>

```typescript
public readonly blockAllPorts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether to block all ports by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#block_all_ports DistributedPortGroup#block_all_ports}

---

##### `blockOverrideAllowed`<sup>Optional</sup> <a name="blockOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.blockOverrideAllowed"></a>

```typescript
public readonly blockOverrideAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow the blocked setting of an individual port to override the setting in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#block_override_allowed DistributedPortGroup#block_override_allowed}

---

##### `checkBeacon`<sup>Optional</sup> <a name="checkBeacon" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.checkBeacon"></a>

```typescript
public readonly checkBeacon: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable beacon probing on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#check_beacon DistributedPortGroup#check_beacon}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#custom_attributes DistributedPortGroup#custom_attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#description DistributedPortGroup#description}

---

##### `directpathGen2Allowed`<sup>Optional</sup> <a name="directpathGen2Allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.directpathGen2Allowed"></a>

```typescript
public readonly directpathGen2Allowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow VMDirectPath Gen2 on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#directpath_gen2_allowed DistributedPortGroup#directpath_gen2_allowed}

---

##### `egressShapingAverageBandwidth`<sup>Optional</sup> <a name="egressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingAverageBandwidth"></a>

```typescript
public readonly egressShapingAverageBandwidth: number;
```

- *Type:* number

The average egress bandwidth in bits per second if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#egress_shaping_average_bandwidth DistributedPortGroup#egress_shaping_average_bandwidth}

---

##### `egressShapingBurstSize`<sup>Optional</sup> <a name="egressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingBurstSize"></a>

```typescript
public readonly egressShapingBurstSize: number;
```

- *Type:* number

The maximum egress burst size allowed in bytes if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#egress_shaping_burst_size DistributedPortGroup#egress_shaping_burst_size}

---

##### `egressShapingEnabled`<sup>Optional</sup> <a name="egressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingEnabled"></a>

```typescript
public readonly egressShapingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if the traffic shaper is enabled for egress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#egress_shaping_enabled DistributedPortGroup#egress_shaping_enabled}

---

##### `egressShapingPeakBandwidth`<sup>Optional</sup> <a name="egressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingPeakBandwidth"></a>

```typescript
public readonly egressShapingPeakBandwidth: number;
```

- *Type:* number

The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#egress_shaping_peak_bandwidth DistributedPortGroup#egress_shaping_peak_bandwidth}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.failback"></a>

```typescript
public readonly failback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#failback DistributedPortGroup#failback}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#id DistributedPortGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressShapingAverageBandwidth`<sup>Optional</sup> <a name="ingressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingAverageBandwidth"></a>

```typescript
public readonly ingressShapingAverageBandwidth: number;
```

- *Type:* number

The average ingress bandwidth in bits per second if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#ingress_shaping_average_bandwidth DistributedPortGroup#ingress_shaping_average_bandwidth}

---

##### `ingressShapingBurstSize`<sup>Optional</sup> <a name="ingressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingBurstSize"></a>

```typescript
public readonly ingressShapingBurstSize: number;
```

- *Type:* number

The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#ingress_shaping_burst_size DistributedPortGroup#ingress_shaping_burst_size}

---

##### `ingressShapingEnabled`<sup>Optional</sup> <a name="ingressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingEnabled"></a>

```typescript
public readonly ingressShapingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if the traffic shaper is enabled for ingress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#ingress_shaping_enabled DistributedPortGroup#ingress_shaping_enabled}

---

##### `ingressShapingPeakBandwidth`<sup>Optional</sup> <a name="ingressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingPeakBandwidth"></a>

```typescript
public readonly ingressShapingPeakBandwidth: number;
```

- *Type:* number

The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#ingress_shaping_peak_bandwidth DistributedPortGroup#ingress_shaping_peak_bandwidth}

---

##### `lacpEnabled`<sup>Optional</sup> <a name="lacpEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lacpEnabled"></a>

```typescript
public readonly lacpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to enable LACP on all uplink ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#lacp_enabled DistributedPortGroup#lacp_enabled}

---

##### `lacpMode`<sup>Optional</sup> <a name="lacpMode" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lacpMode"></a>

```typescript
public readonly lacpMode: string;
```

- *Type:* string

The uplink LACP mode to use. Can be one of active or passive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#lacp_mode DistributedPortGroup#lacp_mode}

---

##### `livePortMovingAllowed`<sup>Optional</sup> <a name="livePortMovingAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.livePortMovingAllowed"></a>

```typescript
public readonly livePortMovingAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow a live port to be moved in and out of the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#live_port_moving_allowed DistributedPortGroup#live_port_moving_allowed}

---

##### `netflowEnabled`<sup>Optional</sup> <a name="netflowEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.netflowEnabled"></a>

```typescript
public readonly netflowEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether to enable netflow on all ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#netflow_enabled DistributedPortGroup#netflow_enabled}

---

##### `netflowOverrideAllowed`<sup>Optional</sup> <a name="netflowOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.netflowOverrideAllowed"></a>

```typescript
public readonly netflowOverrideAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow the enabling or disabling of Netflow on a port, contrary to the policy in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#netflow_override_allowed DistributedPortGroup#netflow_override_allowed}

---

##### `networkResourcePoolKey`<sup>Optional</sup> <a name="networkResourcePoolKey" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.networkResourcePoolKey"></a>

```typescript
public readonly networkResourcePoolKey: string;
```

- *Type:* string

The key of a network resource pool to associate with this portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#network_resource_pool_key DistributedPortGroup#network_resource_pool_key}

---

##### `networkResourcePoolOverrideAllowed`<sup>Optional</sup> <a name="networkResourcePoolOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.networkResourcePoolOverrideAllowed"></a>

```typescript
public readonly networkResourcePoolOverrideAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow the network resource pool of an individual port to override the setting in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#network_resource_pool_override_allowed DistributedPortGroup#network_resource_pool_override_allowed}

---

##### `notifySwitches`<sup>Optional</sup> <a name="notifySwitches" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.notifySwitches"></a>

```typescript
public readonly notifySwitches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#notify_switches DistributedPortGroup#notify_switches}

---

##### `numberOfPorts`<sup>Optional</sup> <a name="numberOfPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.numberOfPorts"></a>

```typescript
public readonly numberOfPorts: number;
```

- *Type:* number

The number of ports in this portgroup. The DVS will expand and shrink by modifying this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#number_of_ports DistributedPortGroup#number_of_ports}

---

##### `portConfigResetAtDisconnect`<sup>Optional</sup> <a name="portConfigResetAtDisconnect" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portConfigResetAtDisconnect"></a>

```typescript
public readonly portConfigResetAtDisconnect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Reset the setting of any ports in this portgroup back to the default setting when the port disconnects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#port_config_reset_at_disconnect DistributedPortGroup#port_config_reset_at_disconnect}

---

##### `portNameFormat`<sup>Optional</sup> <a name="portNameFormat" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portNameFormat"></a>

```typescript
public readonly portNameFormat: string;
```

- *Type:* string

A template string to use when creating ports in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#port_name_format DistributedPortGroup#port_name_format}

---

##### `portPrivateSecondaryVlanId`<sup>Optional</sup> <a name="portPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portPrivateSecondaryVlanId"></a>

```typescript
public readonly portPrivateSecondaryVlanId: number;
```

- *Type:* number

The secondary VLAN ID for this port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#port_private_secondary_vlan_id DistributedPortGroup#port_private_secondary_vlan_id}

---

##### `securityPolicyOverrideAllowed`<sup>Optional</sup> <a name="securityPolicyOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.securityPolicyOverrideAllowed"></a>

```typescript
public readonly securityPolicyOverrideAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow security policy settings on a port to override those on the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#security_policy_override_allowed DistributedPortGroup#security_policy_override_allowed}

---

##### `shapingOverrideAllowed`<sup>Optional</sup> <a name="shapingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.shapingOverrideAllowed"></a>

```typescript
public readonly shapingOverrideAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow the traffic shaping policies of an individual port to override the settings in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#shaping_override_allowed DistributedPortGroup#shaping_override_allowed}

---

##### `standbyUplinks`<sup>Optional</sup> <a name="standbyUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.standbyUplinks"></a>

```typescript
public readonly standbyUplinks: string[];
```

- *Type:* string[]

List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#standby_uplinks DistributedPortGroup#standby_uplinks}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#tags DistributedPortGroup#tags}

---

##### `teamingPolicy`<sup>Optional</sup> <a name="teamingPolicy" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.teamingPolicy"></a>

```typescript
public readonly teamingPolicy: string;
```

- *Type:* string

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#teaming_policy DistributedPortGroup#teaming_policy}

---

##### `trafficFilterOverrideAllowed`<sup>Optional</sup> <a name="trafficFilterOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.trafficFilterOverrideAllowed"></a>

```typescript
public readonly trafficFilterOverrideAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow any filter policies set on the individual port to override those in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#traffic_filter_override_allowed DistributedPortGroup#traffic_filter_override_allowed}

---

##### `txUplink`<sup>Optional</sup> <a name="txUplink" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.txUplink"></a>

```typescript
public readonly txUplink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#tx_uplink DistributedPortGroup#tx_uplink}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of portgroup. Can be one of earlyBinding (static) or ephemeral.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#type DistributedPortGroup#type}

---

##### `uplinkTeamingOverrideAllowed`<sup>Optional</sup> <a name="uplinkTeamingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.uplinkTeamingOverrideAllowed"></a>

```typescript
public readonly uplinkTeamingOverrideAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow the uplink teaming policies on a port to override those on the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#uplink_teaming_override_allowed DistributedPortGroup#uplink_teaming_override_allowed}

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

The VLAN ID for single VLAN mode. 0 denotes no VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#vlan_id DistributedPortGroup#vlan_id}

---

##### `vlanOverrideAllowed`<sup>Optional</sup> <a name="vlanOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanOverrideAllowed"></a>

```typescript
public readonly vlanOverrideAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow the VLAN configuration on a port to override those on the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#vlan_override_allowed DistributedPortGroup#vlan_override_allowed}

---

##### `vlanRange`<sup>Optional</sup> <a name="vlanRange" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanRange"></a>

```typescript
public readonly vlanRange: IResolvable | DistributedPortGroupVlanRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>[]

vlan_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#vlan_range DistributedPortGroup#vlan_range}

---

### DistributedPortGroupVlanRange <a name="DistributedPortGroupVlanRange" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.Initializer"></a>

```typescript
import { distributedPortGroup } from '@cdktf/provider-vsphere'

const distributedPortGroupVlanRange: distributedPortGroup.DistributedPortGroupVlanRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.property.maxVlan">maxVlan</a></code> | <code>number</code> | The minimum VLAN to use in the range. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.property.minVlan">minVlan</a></code> | <code>number</code> | The minimum VLAN to use in the range. |

---

##### `maxVlan`<sup>Required</sup> <a name="maxVlan" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.property.maxVlan"></a>

```typescript
public readonly maxVlan: number;
```

- *Type:* number

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#max_vlan DistributedPortGroup#max_vlan}

---

##### `minVlan`<sup>Required</sup> <a name="minVlan" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.property.minVlan"></a>

```typescript
public readonly minVlan: number;
```

- *Type:* number

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/distributed_port_group#min_vlan DistributedPortGroup#min_vlan}

---

## Classes <a name="Classes" id="Classes"></a>

### DistributedPortGroupVlanRangeList <a name="DistributedPortGroupVlanRangeList" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer"></a>

```typescript
import { distributedPortGroup } from '@cdktf/provider-vsphere'

new distributedPortGroup.DistributedPortGroupVlanRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.get"></a>

```typescript
public get(index: number): DistributedPortGroupVlanRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DistributedPortGroupVlanRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>[]

---


### DistributedPortGroupVlanRangeOutputReference <a name="DistributedPortGroupVlanRangeOutputReference" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer"></a>

```typescript
import { distributedPortGroup } from '@cdktf/provider-vsphere'

new distributedPortGroup.DistributedPortGroupVlanRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.maxVlanInput">maxVlanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.minVlanInput">minVlanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.maxVlan">maxVlan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.minVlan">minVlan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxVlanInput`<sup>Optional</sup> <a name="maxVlanInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.maxVlanInput"></a>

```typescript
public readonly maxVlanInput: number;
```

- *Type:* number

---

##### `minVlanInput`<sup>Optional</sup> <a name="minVlanInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.minVlanInput"></a>

```typescript
public readonly minVlanInput: number;
```

- *Type:* number

---

##### `maxVlan`<sup>Required</sup> <a name="maxVlan" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.maxVlan"></a>

```typescript
public readonly maxVlan: number;
```

- *Type:* number

---

##### `minVlan`<sup>Required</sup> <a name="minVlan" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.minVlan"></a>

```typescript
public readonly minVlan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DistributedPortGroupVlanRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>

---



