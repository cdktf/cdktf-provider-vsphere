# `datastoreCluster` Submodule <a name="`datastoreCluster` Submodule" id="@cdktf/provider-vsphere.datastoreCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatastoreCluster <a name="DatastoreCluster" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster vsphere_datastore_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer"></a>

```typescript
import { datastoreCluster } from '@cdktf/provider-vsphere'

new datastoreCluster.DatastoreCluster(scope: Construct, id: string, config: DatastoreClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig">DatastoreClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig">DatastoreClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAdvancedOptions">resetSdrsAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAutomationLevel">resetSdrsAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsDefaultIntraVmAffinity">resetSdrsDefaultIntraVmAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsEnabled">resetSdrsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThreshold">resetSdrsFreeSpaceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThresholdMode">resetSdrsFreeSpaceThresholdMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceUtilizationDifference">resetSdrsFreeSpaceUtilizationDifference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoBalanceAutomationLevel">resetSdrsIoBalanceAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLatencyThreshold">resetSdrsIoLatencyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadBalanceEnabled">resetSdrsIoLoadBalanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadImbalanceThreshold">resetSdrsIoLoadImbalanceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableIopsThreshold">resetSdrsIoReservableIopsThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservablePercentThreshold">resetSdrsIoReservablePercentThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableThresholdMode">resetSdrsIoReservableThresholdMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsLoadBalanceInterval">resetSdrsLoadBalanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsPolicyEnforcementAutomationLevel">resetSdrsPolicyEnforcementAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsRuleEnforcementAutomationLevel">resetSdrsRuleEnforcementAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceBalanceAutomationLevel">resetSdrsSpaceBalanceAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceUtilizationThreshold">resetSdrsSpaceUtilizationThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsVmEvacuationAutomationLevel">resetSdrsVmEvacuationAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetCustomAttributes"></a>

```typescript
public resetCustomAttributes(): void
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetFolder"></a>

```typescript
public resetFolder(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSdrsAdvancedOptions` <a name="resetSdrsAdvancedOptions" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAdvancedOptions"></a>

```typescript
public resetSdrsAdvancedOptions(): void
```

##### `resetSdrsAutomationLevel` <a name="resetSdrsAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAutomationLevel"></a>

```typescript
public resetSdrsAutomationLevel(): void
```

##### `resetSdrsDefaultIntraVmAffinity` <a name="resetSdrsDefaultIntraVmAffinity" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsDefaultIntraVmAffinity"></a>

```typescript
public resetSdrsDefaultIntraVmAffinity(): void
```

##### `resetSdrsEnabled` <a name="resetSdrsEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsEnabled"></a>

```typescript
public resetSdrsEnabled(): void
```

##### `resetSdrsFreeSpaceThreshold` <a name="resetSdrsFreeSpaceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThreshold"></a>

```typescript
public resetSdrsFreeSpaceThreshold(): void
```

##### `resetSdrsFreeSpaceThresholdMode` <a name="resetSdrsFreeSpaceThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThresholdMode"></a>

```typescript
public resetSdrsFreeSpaceThresholdMode(): void
```

##### `resetSdrsFreeSpaceUtilizationDifference` <a name="resetSdrsFreeSpaceUtilizationDifference" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceUtilizationDifference"></a>

```typescript
public resetSdrsFreeSpaceUtilizationDifference(): void
```

##### `resetSdrsIoBalanceAutomationLevel` <a name="resetSdrsIoBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoBalanceAutomationLevel"></a>

```typescript
public resetSdrsIoBalanceAutomationLevel(): void
```

##### `resetSdrsIoLatencyThreshold` <a name="resetSdrsIoLatencyThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLatencyThreshold"></a>

```typescript
public resetSdrsIoLatencyThreshold(): void
```

##### `resetSdrsIoLoadBalanceEnabled` <a name="resetSdrsIoLoadBalanceEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadBalanceEnabled"></a>

```typescript
public resetSdrsIoLoadBalanceEnabled(): void
```

##### `resetSdrsIoLoadImbalanceThreshold` <a name="resetSdrsIoLoadImbalanceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadImbalanceThreshold"></a>

```typescript
public resetSdrsIoLoadImbalanceThreshold(): void
```

##### `resetSdrsIoReservableIopsThreshold` <a name="resetSdrsIoReservableIopsThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableIopsThreshold"></a>

```typescript
public resetSdrsIoReservableIopsThreshold(): void
```

##### `resetSdrsIoReservablePercentThreshold` <a name="resetSdrsIoReservablePercentThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservablePercentThreshold"></a>

```typescript
public resetSdrsIoReservablePercentThreshold(): void
```

##### `resetSdrsIoReservableThresholdMode` <a name="resetSdrsIoReservableThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableThresholdMode"></a>

```typescript
public resetSdrsIoReservableThresholdMode(): void
```

##### `resetSdrsLoadBalanceInterval` <a name="resetSdrsLoadBalanceInterval" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsLoadBalanceInterval"></a>

```typescript
public resetSdrsLoadBalanceInterval(): void
```

##### `resetSdrsPolicyEnforcementAutomationLevel` <a name="resetSdrsPolicyEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsPolicyEnforcementAutomationLevel"></a>

```typescript
public resetSdrsPolicyEnforcementAutomationLevel(): void
```

##### `resetSdrsRuleEnforcementAutomationLevel` <a name="resetSdrsRuleEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsRuleEnforcementAutomationLevel"></a>

```typescript
public resetSdrsRuleEnforcementAutomationLevel(): void
```

##### `resetSdrsSpaceBalanceAutomationLevel` <a name="resetSdrsSpaceBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceBalanceAutomationLevel"></a>

```typescript
public resetSdrsSpaceBalanceAutomationLevel(): void
```

##### `resetSdrsSpaceUtilizationThreshold` <a name="resetSdrsSpaceUtilizationThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceUtilizationThreshold"></a>

```typescript
public resetSdrsSpaceUtilizationThreshold(): void
```

##### `resetSdrsVmEvacuationAutomationLevel` <a name="resetSdrsVmEvacuationAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsVmEvacuationAutomationLevel"></a>

```typescript
public resetSdrsVmEvacuationAutomationLevel(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatastoreCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isConstruct"></a>

```typescript
import { datastoreCluster } from '@cdktf/provider-vsphere'

datastoreCluster.DatastoreCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformElement"></a>

```typescript
import { datastoreCluster } from '@cdktf/provider-vsphere'

datastoreCluster.DatastoreCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformResource"></a>

```typescript
import { datastoreCluster } from '@cdktf/provider-vsphere'

datastoreCluster.DatastoreCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport"></a>

```typescript
import { datastoreCluster } from '@cdktf/provider-vsphere'

datastoreCluster.DatastoreCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatastoreCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatastoreCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatastoreCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatastoreCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributesInput">customAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptionsInput">sdrsAdvancedOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevelInput">sdrsAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinityInput">sdrsDefaultIntraVmAffinityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabledInput">sdrsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdInput">sdrsFreeSpaceThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdModeInput">sdrsFreeSpaceThresholdModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifferenceInput">sdrsFreeSpaceUtilizationDifferenceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevelInput">sdrsIoBalanceAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThresholdInput">sdrsIoLatencyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabledInput">sdrsIoLoadBalanceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThresholdInput">sdrsIoLoadImbalanceThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThresholdInput">sdrsIoReservableIopsThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThresholdInput">sdrsIoReservablePercentThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdModeInput">sdrsIoReservableThresholdModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceIntervalInput">sdrsLoadBalanceIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevelInput">sdrsPolicyEnforcementAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevelInput">sdrsRuleEnforcementAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevelInput">sdrsSpaceBalanceAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThresholdInput">sdrsSpaceUtilizationThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevelInput">sdrsVmEvacuationAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptions">sdrsAdvancedOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevel">sdrsAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinity">sdrsDefaultIntraVmAffinity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabled">sdrsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThreshold">sdrsFreeSpaceThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdMode">sdrsFreeSpaceThresholdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifference">sdrsFreeSpaceUtilizationDifference</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevel">sdrsIoBalanceAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThreshold">sdrsIoLatencyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabled">sdrsIoLoadBalanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThreshold">sdrsIoLoadImbalanceThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThreshold">sdrsIoReservableIopsThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThreshold">sdrsIoReservablePercentThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdMode">sdrsIoReservableThresholdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceInterval">sdrsLoadBalanceInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevel">sdrsPolicyEnforcementAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevel">sdrsRuleEnforcementAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevel">sdrsSpaceBalanceAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThreshold">sdrsSpaceUtilizationThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevel">sdrsVmEvacuationAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributesInput"></a>

```typescript
public readonly customAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sdrsAdvancedOptionsInput`<sup>Optional</sup> <a name="sdrsAdvancedOptionsInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptionsInput"></a>

```typescript
public readonly sdrsAdvancedOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sdrsAutomationLevelInput`<sup>Optional</sup> <a name="sdrsAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevelInput"></a>

```typescript
public readonly sdrsAutomationLevelInput: string;
```

- *Type:* string

---

##### `sdrsDefaultIntraVmAffinityInput`<sup>Optional</sup> <a name="sdrsDefaultIntraVmAffinityInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinityInput"></a>

```typescript
public readonly sdrsDefaultIntraVmAffinityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sdrsEnabledInput`<sup>Optional</sup> <a name="sdrsEnabledInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabledInput"></a>

```typescript
public readonly sdrsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sdrsFreeSpaceThresholdInput`<sup>Optional</sup> <a name="sdrsFreeSpaceThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdInput"></a>

```typescript
public readonly sdrsFreeSpaceThresholdInput: number;
```

- *Type:* number

---

##### `sdrsFreeSpaceThresholdModeInput`<sup>Optional</sup> <a name="sdrsFreeSpaceThresholdModeInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdModeInput"></a>

```typescript
public readonly sdrsFreeSpaceThresholdModeInput: string;
```

- *Type:* string

---

##### `sdrsFreeSpaceUtilizationDifferenceInput`<sup>Optional</sup> <a name="sdrsFreeSpaceUtilizationDifferenceInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifferenceInput"></a>

```typescript
public readonly sdrsFreeSpaceUtilizationDifferenceInput: number;
```

- *Type:* number

---

##### `sdrsIoBalanceAutomationLevelInput`<sup>Optional</sup> <a name="sdrsIoBalanceAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevelInput"></a>

```typescript
public readonly sdrsIoBalanceAutomationLevelInput: string;
```

- *Type:* string

---

##### `sdrsIoLatencyThresholdInput`<sup>Optional</sup> <a name="sdrsIoLatencyThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThresholdInput"></a>

```typescript
public readonly sdrsIoLatencyThresholdInput: number;
```

- *Type:* number

---

##### `sdrsIoLoadBalanceEnabledInput`<sup>Optional</sup> <a name="sdrsIoLoadBalanceEnabledInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabledInput"></a>

```typescript
public readonly sdrsIoLoadBalanceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sdrsIoLoadImbalanceThresholdInput`<sup>Optional</sup> <a name="sdrsIoLoadImbalanceThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThresholdInput"></a>

```typescript
public readonly sdrsIoLoadImbalanceThresholdInput: number;
```

- *Type:* number

---

##### `sdrsIoReservableIopsThresholdInput`<sup>Optional</sup> <a name="sdrsIoReservableIopsThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThresholdInput"></a>

```typescript
public readonly sdrsIoReservableIopsThresholdInput: number;
```

- *Type:* number

---

##### `sdrsIoReservablePercentThresholdInput`<sup>Optional</sup> <a name="sdrsIoReservablePercentThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThresholdInput"></a>

```typescript
public readonly sdrsIoReservablePercentThresholdInput: number;
```

- *Type:* number

---

##### `sdrsIoReservableThresholdModeInput`<sup>Optional</sup> <a name="sdrsIoReservableThresholdModeInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdModeInput"></a>

```typescript
public readonly sdrsIoReservableThresholdModeInput: string;
```

- *Type:* string

---

##### `sdrsLoadBalanceIntervalInput`<sup>Optional</sup> <a name="sdrsLoadBalanceIntervalInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceIntervalInput"></a>

```typescript
public readonly sdrsLoadBalanceIntervalInput: number;
```

- *Type:* number

---

##### `sdrsPolicyEnforcementAutomationLevelInput`<sup>Optional</sup> <a name="sdrsPolicyEnforcementAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevelInput"></a>

```typescript
public readonly sdrsPolicyEnforcementAutomationLevelInput: string;
```

- *Type:* string

---

##### `sdrsRuleEnforcementAutomationLevelInput`<sup>Optional</sup> <a name="sdrsRuleEnforcementAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevelInput"></a>

```typescript
public readonly sdrsRuleEnforcementAutomationLevelInput: string;
```

- *Type:* string

---

##### `sdrsSpaceBalanceAutomationLevelInput`<sup>Optional</sup> <a name="sdrsSpaceBalanceAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevelInput"></a>

```typescript
public readonly sdrsSpaceBalanceAutomationLevelInput: string;
```

- *Type:* string

---

##### `sdrsSpaceUtilizationThresholdInput`<sup>Optional</sup> <a name="sdrsSpaceUtilizationThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThresholdInput"></a>

```typescript
public readonly sdrsSpaceUtilizationThresholdInput: number;
```

- *Type:* number

---

##### `sdrsVmEvacuationAutomationLevelInput`<sup>Optional</sup> <a name="sdrsVmEvacuationAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevelInput"></a>

```typescript
public readonly sdrsVmEvacuationAutomationLevelInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sdrsAdvancedOptions`<sup>Required</sup> <a name="sdrsAdvancedOptions" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptions"></a>

```typescript
public readonly sdrsAdvancedOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sdrsAutomationLevel`<sup>Required</sup> <a name="sdrsAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevel"></a>

```typescript
public readonly sdrsAutomationLevel: string;
```

- *Type:* string

---

##### `sdrsDefaultIntraVmAffinity`<sup>Required</sup> <a name="sdrsDefaultIntraVmAffinity" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinity"></a>

```typescript
public readonly sdrsDefaultIntraVmAffinity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sdrsEnabled`<sup>Required</sup> <a name="sdrsEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabled"></a>

```typescript
public readonly sdrsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sdrsFreeSpaceThreshold`<sup>Required</sup> <a name="sdrsFreeSpaceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThreshold"></a>

```typescript
public readonly sdrsFreeSpaceThreshold: number;
```

- *Type:* number

---

##### `sdrsFreeSpaceThresholdMode`<sup>Required</sup> <a name="sdrsFreeSpaceThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdMode"></a>

```typescript
public readonly sdrsFreeSpaceThresholdMode: string;
```

- *Type:* string

---

##### `sdrsFreeSpaceUtilizationDifference`<sup>Required</sup> <a name="sdrsFreeSpaceUtilizationDifference" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifference"></a>

```typescript
public readonly sdrsFreeSpaceUtilizationDifference: number;
```

- *Type:* number

---

##### `sdrsIoBalanceAutomationLevel`<sup>Required</sup> <a name="sdrsIoBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevel"></a>

```typescript
public readonly sdrsIoBalanceAutomationLevel: string;
```

- *Type:* string

---

##### `sdrsIoLatencyThreshold`<sup>Required</sup> <a name="sdrsIoLatencyThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThreshold"></a>

```typescript
public readonly sdrsIoLatencyThreshold: number;
```

- *Type:* number

---

##### `sdrsIoLoadBalanceEnabled`<sup>Required</sup> <a name="sdrsIoLoadBalanceEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabled"></a>

```typescript
public readonly sdrsIoLoadBalanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sdrsIoLoadImbalanceThreshold`<sup>Required</sup> <a name="sdrsIoLoadImbalanceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThreshold"></a>

```typescript
public readonly sdrsIoLoadImbalanceThreshold: number;
```

- *Type:* number

---

##### `sdrsIoReservableIopsThreshold`<sup>Required</sup> <a name="sdrsIoReservableIopsThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThreshold"></a>

```typescript
public readonly sdrsIoReservableIopsThreshold: number;
```

- *Type:* number

---

##### `sdrsIoReservablePercentThreshold`<sup>Required</sup> <a name="sdrsIoReservablePercentThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThreshold"></a>

```typescript
public readonly sdrsIoReservablePercentThreshold: number;
```

- *Type:* number

---

##### `sdrsIoReservableThresholdMode`<sup>Required</sup> <a name="sdrsIoReservableThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdMode"></a>

```typescript
public readonly sdrsIoReservableThresholdMode: string;
```

- *Type:* string

---

##### `sdrsLoadBalanceInterval`<sup>Required</sup> <a name="sdrsLoadBalanceInterval" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceInterval"></a>

```typescript
public readonly sdrsLoadBalanceInterval: number;
```

- *Type:* number

---

##### `sdrsPolicyEnforcementAutomationLevel`<sup>Required</sup> <a name="sdrsPolicyEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevel"></a>

```typescript
public readonly sdrsPolicyEnforcementAutomationLevel: string;
```

- *Type:* string

---

##### `sdrsRuleEnforcementAutomationLevel`<sup>Required</sup> <a name="sdrsRuleEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevel"></a>

```typescript
public readonly sdrsRuleEnforcementAutomationLevel: string;
```

- *Type:* string

---

##### `sdrsSpaceBalanceAutomationLevel`<sup>Required</sup> <a name="sdrsSpaceBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevel"></a>

```typescript
public readonly sdrsSpaceBalanceAutomationLevel: string;
```

- *Type:* string

---

##### `sdrsSpaceUtilizationThreshold`<sup>Required</sup> <a name="sdrsSpaceUtilizationThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThreshold"></a>

```typescript
public readonly sdrsSpaceUtilizationThreshold: number;
```

- *Type:* number

---

##### `sdrsVmEvacuationAutomationLevel`<sup>Required</sup> <a name="sdrsVmEvacuationAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevel"></a>

```typescript
public readonly sdrsVmEvacuationAutomationLevel: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatastoreClusterConfig <a name="DatastoreClusterConfig" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.Initializer"></a>

```typescript
import { datastoreCluster } from '@cdktf/provider-vsphere'

const datastoreClusterConfig: datastoreCluster.DatastoreClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.datacenterId">datacenterId</a></code> | <code>string</code> | The managed object ID of the datacenter to put the datastore cluster in. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.name">name</a></code> | <code>string</code> | Name for the new storage pod. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.folder">folder</a></code> | <code>string</code> | The name of the folder to locate the datastore cluster in. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#id DatastoreCluster#id}. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAdvancedOptions">sdrsAdvancedOptions</a></code> | <code>{[ key: string ]: string}</code> | Advanced configuration options for storage DRS. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAutomationLevel">sdrsAutomationLevel</a></code> | <code>string</code> | The default automation level for all virtual machines in this storage cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsDefaultIntraVmAffinity">sdrsDefaultIntraVmAffinity</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, storage DRS keeps VMDKs for individual VMs on the same datastore by default. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsEnabled">sdrsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable storage DRS for this datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThreshold">sdrsFreeSpaceThreshold</a></code> | <code>number</code> | The threshold, in GB, that storage DRS uses to make decisions to migrate VMs out of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThresholdMode">sdrsFreeSpaceThresholdMode</a></code> | <code>string</code> | The free space threshold to use. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceUtilizationDifference">sdrsFreeSpaceUtilizationDifference</a></code> | <code>number</code> | The threshold, in percent, of difference between space utilization in datastores before storage DRS makes decisions to balance the space. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoBalanceAutomationLevel">sdrsIoBalanceAutomationLevel</a></code> | <code>string</code> | Overrides the default automation settings when correcting I/O load imbalances. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLatencyThreshold">sdrsIoLatencyThreshold</a></code> | <code>number</code> | The I/O latency threshold, in milliseconds, that storage DRS uses to make recommendations to move disks from this datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadBalanceEnabled">sdrsIoLoadBalanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable I/O load balancing for this datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadImbalanceThreshold">sdrsIoLoadImbalanceThreshold</a></code> | <code>number</code> | The difference between load in datastores in the cluster before storage DRS makes recommendations to balance the load. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableIopsThreshold">sdrsIoReservableIopsThreshold</a></code> | <code>number</code> | The threshold of reservable IOPS of all virtual machines on the datastore before storage DRS makes recommendations to move VMs off of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservablePercentThreshold">sdrsIoReservablePercentThreshold</a></code> | <code>number</code> | The threshold, in percent, of actual estimated performance of the datastore (in IOPS) that storage DRS uses to make recommendations to move VMs off of a datastore when the total reservable IOPS exceeds the threshold. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableThresholdMode">sdrsIoReservableThresholdMode</a></code> | <code>string</code> | The reservable IOPS threshold to use, percent in the event of automatic, or manual threshold in the event of manual. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsLoadBalanceInterval">sdrsLoadBalanceInterval</a></code> | <code>number</code> | The storage DRS poll interval, in minutes. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsPolicyEnforcementAutomationLevel">sdrsPolicyEnforcementAutomationLevel</a></code> | <code>string</code> | Overrides the default automation settings when correcting storage and VM policy violations. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsRuleEnforcementAutomationLevel">sdrsRuleEnforcementAutomationLevel</a></code> | <code>string</code> | Overrides the default automation settings when correcting affinity rule violations. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceBalanceAutomationLevel">sdrsSpaceBalanceAutomationLevel</a></code> | <code>string</code> | Overrides the default automation settings when correcting disk space imbalances. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceUtilizationThreshold">sdrsSpaceUtilizationThreshold</a></code> | <code>number</code> | The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsVmEvacuationAutomationLevel">sdrsVmEvacuationAutomationLevel</a></code> | <code>string</code> | Overrides the default automation settings when generating recommendations for datastore evacuation. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

The managed object ID of the datacenter to put the datastore cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#datacenter_id DatastoreCluster#datacenter_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name for the new storage pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#name DatastoreCluster#name}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#custom_attributes DatastoreCluster#custom_attributes}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The name of the folder to locate the datastore cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#folder DatastoreCluster#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#id DatastoreCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sdrsAdvancedOptions`<sup>Optional</sup> <a name="sdrsAdvancedOptions" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAdvancedOptions"></a>

```typescript
public readonly sdrsAdvancedOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Advanced configuration options for storage DRS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_advanced_options DatastoreCluster#sdrs_advanced_options}

---

##### `sdrsAutomationLevel`<sup>Optional</sup> <a name="sdrsAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAutomationLevel"></a>

```typescript
public readonly sdrsAutomationLevel: string;
```

- *Type:* string

The default automation level for all virtual machines in this storage cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_automation_level DatastoreCluster#sdrs_automation_level}

---

##### `sdrsDefaultIntraVmAffinity`<sup>Optional</sup> <a name="sdrsDefaultIntraVmAffinity" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsDefaultIntraVmAffinity"></a>

```typescript
public readonly sdrsDefaultIntraVmAffinity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, storage DRS keeps VMDKs for individual VMs on the same datastore by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_default_intra_vm_affinity DatastoreCluster#sdrs_default_intra_vm_affinity}

---

##### `sdrsEnabled`<sup>Optional</sup> <a name="sdrsEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsEnabled"></a>

```typescript
public readonly sdrsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable storage DRS for this datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_enabled DatastoreCluster#sdrs_enabled}

---

##### `sdrsFreeSpaceThreshold`<sup>Optional</sup> <a name="sdrsFreeSpaceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThreshold"></a>

```typescript
public readonly sdrsFreeSpaceThreshold: number;
```

- *Type:* number

The threshold, in GB, that storage DRS uses to make decisions to migrate VMs out of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_free_space_threshold DatastoreCluster#sdrs_free_space_threshold}

---

##### `sdrsFreeSpaceThresholdMode`<sup>Optional</sup> <a name="sdrsFreeSpaceThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThresholdMode"></a>

```typescript
public readonly sdrsFreeSpaceThresholdMode: string;
```

- *Type:* string

The free space threshold to use.

When set to utilization, drs_space_utilization_threshold is used, and when set to freeSpace, drs_free_space_threshold is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_free_space_threshold_mode DatastoreCluster#sdrs_free_space_threshold_mode}

---

##### `sdrsFreeSpaceUtilizationDifference`<sup>Optional</sup> <a name="sdrsFreeSpaceUtilizationDifference" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceUtilizationDifference"></a>

```typescript
public readonly sdrsFreeSpaceUtilizationDifference: number;
```

- *Type:* number

The threshold, in percent, of difference between space utilization in datastores before storage DRS makes decisions to balance the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_free_space_utilization_difference DatastoreCluster#sdrs_free_space_utilization_difference}

---

##### `sdrsIoBalanceAutomationLevel`<sup>Optional</sup> <a name="sdrsIoBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoBalanceAutomationLevel"></a>

```typescript
public readonly sdrsIoBalanceAutomationLevel: string;
```

- *Type:* string

Overrides the default automation settings when correcting I/O load imbalances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_io_balance_automation_level DatastoreCluster#sdrs_io_balance_automation_level}

---

##### `sdrsIoLatencyThreshold`<sup>Optional</sup> <a name="sdrsIoLatencyThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLatencyThreshold"></a>

```typescript
public readonly sdrsIoLatencyThreshold: number;
```

- *Type:* number

The I/O latency threshold, in milliseconds, that storage DRS uses to make recommendations to move disks from this datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_io_latency_threshold DatastoreCluster#sdrs_io_latency_threshold}

---

##### `sdrsIoLoadBalanceEnabled`<sup>Optional</sup> <a name="sdrsIoLoadBalanceEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadBalanceEnabled"></a>

```typescript
public readonly sdrsIoLoadBalanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable I/O load balancing for this datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_io_load_balance_enabled DatastoreCluster#sdrs_io_load_balance_enabled}

---

##### `sdrsIoLoadImbalanceThreshold`<sup>Optional</sup> <a name="sdrsIoLoadImbalanceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadImbalanceThreshold"></a>

```typescript
public readonly sdrsIoLoadImbalanceThreshold: number;
```

- *Type:* number

The difference between load in datastores in the cluster before storage DRS makes recommendations to balance the load.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_io_load_imbalance_threshold DatastoreCluster#sdrs_io_load_imbalance_threshold}

---

##### `sdrsIoReservableIopsThreshold`<sup>Optional</sup> <a name="sdrsIoReservableIopsThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableIopsThreshold"></a>

```typescript
public readonly sdrsIoReservableIopsThreshold: number;
```

- *Type:* number

The threshold of reservable IOPS of all virtual machines on the datastore before storage DRS makes recommendations to move VMs off of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_io_reservable_iops_threshold DatastoreCluster#sdrs_io_reservable_iops_threshold}

---

##### `sdrsIoReservablePercentThreshold`<sup>Optional</sup> <a name="sdrsIoReservablePercentThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservablePercentThreshold"></a>

```typescript
public readonly sdrsIoReservablePercentThreshold: number;
```

- *Type:* number

The threshold, in percent, of actual estimated performance of the datastore (in IOPS) that storage DRS uses to make recommendations to move VMs off of a datastore when the total reservable IOPS exceeds the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_io_reservable_percent_threshold DatastoreCluster#sdrs_io_reservable_percent_threshold}

---

##### `sdrsIoReservableThresholdMode`<sup>Optional</sup> <a name="sdrsIoReservableThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableThresholdMode"></a>

```typescript
public readonly sdrsIoReservableThresholdMode: string;
```

- *Type:* string

The reservable IOPS threshold to use, percent in the event of automatic, or manual threshold in the event of manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_io_reservable_threshold_mode DatastoreCluster#sdrs_io_reservable_threshold_mode}

---

##### `sdrsLoadBalanceInterval`<sup>Optional</sup> <a name="sdrsLoadBalanceInterval" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsLoadBalanceInterval"></a>

```typescript
public readonly sdrsLoadBalanceInterval: number;
```

- *Type:* number

The storage DRS poll interval, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_load_balance_interval DatastoreCluster#sdrs_load_balance_interval}

---

##### `sdrsPolicyEnforcementAutomationLevel`<sup>Optional</sup> <a name="sdrsPolicyEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsPolicyEnforcementAutomationLevel"></a>

```typescript
public readonly sdrsPolicyEnforcementAutomationLevel: string;
```

- *Type:* string

Overrides the default automation settings when correcting storage and VM policy violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_policy_enforcement_automation_level DatastoreCluster#sdrs_policy_enforcement_automation_level}

---

##### `sdrsRuleEnforcementAutomationLevel`<sup>Optional</sup> <a name="sdrsRuleEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsRuleEnforcementAutomationLevel"></a>

```typescript
public readonly sdrsRuleEnforcementAutomationLevel: string;
```

- *Type:* string

Overrides the default automation settings when correcting affinity rule violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_rule_enforcement_automation_level DatastoreCluster#sdrs_rule_enforcement_automation_level}

---

##### `sdrsSpaceBalanceAutomationLevel`<sup>Optional</sup> <a name="sdrsSpaceBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceBalanceAutomationLevel"></a>

```typescript
public readonly sdrsSpaceBalanceAutomationLevel: string;
```

- *Type:* string

Overrides the default automation settings when correcting disk space imbalances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_space_balance_automation_level DatastoreCluster#sdrs_space_balance_automation_level}

---

##### `sdrsSpaceUtilizationThreshold`<sup>Optional</sup> <a name="sdrsSpaceUtilizationThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceUtilizationThreshold"></a>

```typescript
public readonly sdrsSpaceUtilizationThreshold: number;
```

- *Type:* number

The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_space_utilization_threshold DatastoreCluster#sdrs_space_utilization_threshold}

---

##### `sdrsVmEvacuationAutomationLevel`<sup>Optional</sup> <a name="sdrsVmEvacuationAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsVmEvacuationAutomationLevel"></a>

```typescript
public readonly sdrsVmEvacuationAutomationLevel: string;
```

- *Type:* string

Overrides the default automation settings when generating recommendations for datastore evacuation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#sdrs_vm_evacuation_automation_level DatastoreCluster#sdrs_vm_evacuation_automation_level}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/datastore_cluster#tags DatastoreCluster#tags}

---



