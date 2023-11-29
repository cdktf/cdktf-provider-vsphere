# `datastoreCluster` Submodule <a name="`datastoreCluster` Submodule" id="@cdktf/provider-vsphere.datastoreCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatastoreCluster <a name="DatastoreCluster" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster vsphere_datastore_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datastorecluster"

datastorecluster.NewDatastoreCluster(scope Construct, id *string, config DatastoreClusterConfig) DatastoreCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig">DatastoreClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig">DatastoreClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAdvancedOptions">ResetSdrsAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAutomationLevel">ResetSdrsAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsDefaultIntraVmAffinity">ResetSdrsDefaultIntraVmAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsEnabled">ResetSdrsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThreshold">ResetSdrsFreeSpaceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThresholdMode">ResetSdrsFreeSpaceThresholdMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceUtilizationDifference">ResetSdrsFreeSpaceUtilizationDifference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoBalanceAutomationLevel">ResetSdrsIoBalanceAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLatencyThreshold">ResetSdrsIoLatencyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadBalanceEnabled">ResetSdrsIoLoadBalanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadImbalanceThreshold">ResetSdrsIoLoadImbalanceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableIopsThreshold">ResetSdrsIoReservableIopsThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservablePercentThreshold">ResetSdrsIoReservablePercentThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableThresholdMode">ResetSdrsIoReservableThresholdMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsLoadBalanceInterval">ResetSdrsLoadBalanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsPolicyEnforcementAutomationLevel">ResetSdrsPolicyEnforcementAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsRuleEnforcementAutomationLevel">ResetSdrsRuleEnforcementAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceBalanceAutomationLevel">ResetSdrsSpaceBalanceAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceUtilizationThreshold">ResetSdrsSpaceUtilizationThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsVmEvacuationAutomationLevel">ResetSdrsVmEvacuationAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetCustomAttributes"></a>

```go
func ResetCustomAttributes()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetFolder"></a>

```go
func ResetFolder()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetSdrsAdvancedOptions` <a name="ResetSdrsAdvancedOptions" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAdvancedOptions"></a>

```go
func ResetSdrsAdvancedOptions()
```

##### `ResetSdrsAutomationLevel` <a name="ResetSdrsAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAutomationLevel"></a>

```go
func ResetSdrsAutomationLevel()
```

##### `ResetSdrsDefaultIntraVmAffinity` <a name="ResetSdrsDefaultIntraVmAffinity" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsDefaultIntraVmAffinity"></a>

```go
func ResetSdrsDefaultIntraVmAffinity()
```

##### `ResetSdrsEnabled` <a name="ResetSdrsEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsEnabled"></a>

```go
func ResetSdrsEnabled()
```

##### `ResetSdrsFreeSpaceThreshold` <a name="ResetSdrsFreeSpaceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThreshold"></a>

```go
func ResetSdrsFreeSpaceThreshold()
```

##### `ResetSdrsFreeSpaceThresholdMode` <a name="ResetSdrsFreeSpaceThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThresholdMode"></a>

```go
func ResetSdrsFreeSpaceThresholdMode()
```

##### `ResetSdrsFreeSpaceUtilizationDifference` <a name="ResetSdrsFreeSpaceUtilizationDifference" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceUtilizationDifference"></a>

```go
func ResetSdrsFreeSpaceUtilizationDifference()
```

##### `ResetSdrsIoBalanceAutomationLevel` <a name="ResetSdrsIoBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoBalanceAutomationLevel"></a>

```go
func ResetSdrsIoBalanceAutomationLevel()
```

##### `ResetSdrsIoLatencyThreshold` <a name="ResetSdrsIoLatencyThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLatencyThreshold"></a>

```go
func ResetSdrsIoLatencyThreshold()
```

##### `ResetSdrsIoLoadBalanceEnabled` <a name="ResetSdrsIoLoadBalanceEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadBalanceEnabled"></a>

```go
func ResetSdrsIoLoadBalanceEnabled()
```

##### `ResetSdrsIoLoadImbalanceThreshold` <a name="ResetSdrsIoLoadImbalanceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadImbalanceThreshold"></a>

```go
func ResetSdrsIoLoadImbalanceThreshold()
```

##### `ResetSdrsIoReservableIopsThreshold` <a name="ResetSdrsIoReservableIopsThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableIopsThreshold"></a>

```go
func ResetSdrsIoReservableIopsThreshold()
```

##### `ResetSdrsIoReservablePercentThreshold` <a name="ResetSdrsIoReservablePercentThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservablePercentThreshold"></a>

```go
func ResetSdrsIoReservablePercentThreshold()
```

##### `ResetSdrsIoReservableThresholdMode` <a name="ResetSdrsIoReservableThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableThresholdMode"></a>

```go
func ResetSdrsIoReservableThresholdMode()
```

##### `ResetSdrsLoadBalanceInterval` <a name="ResetSdrsLoadBalanceInterval" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsLoadBalanceInterval"></a>

```go
func ResetSdrsLoadBalanceInterval()
```

##### `ResetSdrsPolicyEnforcementAutomationLevel` <a name="ResetSdrsPolicyEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsPolicyEnforcementAutomationLevel"></a>

```go
func ResetSdrsPolicyEnforcementAutomationLevel()
```

##### `ResetSdrsRuleEnforcementAutomationLevel` <a name="ResetSdrsRuleEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsRuleEnforcementAutomationLevel"></a>

```go
func ResetSdrsRuleEnforcementAutomationLevel()
```

##### `ResetSdrsSpaceBalanceAutomationLevel` <a name="ResetSdrsSpaceBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceBalanceAutomationLevel"></a>

```go
func ResetSdrsSpaceBalanceAutomationLevel()
```

##### `ResetSdrsSpaceUtilizationThreshold` <a name="ResetSdrsSpaceUtilizationThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceUtilizationThreshold"></a>

```go
func ResetSdrsSpaceUtilizationThreshold()
```

##### `ResetSdrsVmEvacuationAutomationLevel` <a name="ResetSdrsVmEvacuationAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsVmEvacuationAutomationLevel"></a>

```go
func ResetSdrsVmEvacuationAutomationLevel()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatastoreCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datastorecluster"

datastorecluster.DatastoreCluster_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datastorecluster"

datastorecluster.DatastoreCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datastorecluster"

datastorecluster.DatastoreCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datastorecluster"

datastorecluster.DatastoreCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatastoreCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatastoreCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatastoreCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatastoreCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributesInput">CustomAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptionsInput">SdrsAdvancedOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevelInput">SdrsAutomationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinityInput">SdrsDefaultIntraVmAffinityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabledInput">SdrsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdInput">SdrsFreeSpaceThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdModeInput">SdrsFreeSpaceThresholdModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifferenceInput">SdrsFreeSpaceUtilizationDifferenceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevelInput">SdrsIoBalanceAutomationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThresholdInput">SdrsIoLatencyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabledInput">SdrsIoLoadBalanceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThresholdInput">SdrsIoLoadImbalanceThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThresholdInput">SdrsIoReservableIopsThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThresholdInput">SdrsIoReservablePercentThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdModeInput">SdrsIoReservableThresholdModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceIntervalInput">SdrsLoadBalanceIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevelInput">SdrsPolicyEnforcementAutomationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevelInput">SdrsRuleEnforcementAutomationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevelInput">SdrsSpaceBalanceAutomationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThresholdInput">SdrsSpaceUtilizationThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevelInput">SdrsVmEvacuationAutomationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptions">SdrsAdvancedOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevel">SdrsAutomationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinity">SdrsDefaultIntraVmAffinity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabled">SdrsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThreshold">SdrsFreeSpaceThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdMode">SdrsFreeSpaceThresholdMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifference">SdrsFreeSpaceUtilizationDifference</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevel">SdrsIoBalanceAutomationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThreshold">SdrsIoLatencyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabled">SdrsIoLoadBalanceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThreshold">SdrsIoLoadImbalanceThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThreshold">SdrsIoReservableIopsThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThreshold">SdrsIoReservablePercentThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdMode">SdrsIoReservableThresholdMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceInterval">SdrsLoadBalanceInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevel">SdrsPolicyEnforcementAutomationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevel">SdrsRuleEnforcementAutomationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevel">SdrsSpaceBalanceAutomationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThreshold">SdrsSpaceUtilizationThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevel">SdrsVmEvacuationAutomationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributesInput"></a>

```go
func CustomAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SdrsAdvancedOptionsInput`<sup>Optional</sup> <a name="SdrsAdvancedOptionsInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptionsInput"></a>

```go
func SdrsAdvancedOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SdrsAutomationLevelInput`<sup>Optional</sup> <a name="SdrsAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevelInput"></a>

```go
func SdrsAutomationLevelInput() *string
```

- *Type:* *string

---

##### `SdrsDefaultIntraVmAffinityInput`<sup>Optional</sup> <a name="SdrsDefaultIntraVmAffinityInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinityInput"></a>

```go
func SdrsDefaultIntraVmAffinityInput() interface{}
```

- *Type:* interface{}

---

##### `SdrsEnabledInput`<sup>Optional</sup> <a name="SdrsEnabledInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabledInput"></a>

```go
func SdrsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SdrsFreeSpaceThresholdInput`<sup>Optional</sup> <a name="SdrsFreeSpaceThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdInput"></a>

```go
func SdrsFreeSpaceThresholdInput() *f64
```

- *Type:* *f64

---

##### `SdrsFreeSpaceThresholdModeInput`<sup>Optional</sup> <a name="SdrsFreeSpaceThresholdModeInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdModeInput"></a>

```go
func SdrsFreeSpaceThresholdModeInput() *string
```

- *Type:* *string

---

##### `SdrsFreeSpaceUtilizationDifferenceInput`<sup>Optional</sup> <a name="SdrsFreeSpaceUtilizationDifferenceInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifferenceInput"></a>

```go
func SdrsFreeSpaceUtilizationDifferenceInput() *f64
```

- *Type:* *f64

---

##### `SdrsIoBalanceAutomationLevelInput`<sup>Optional</sup> <a name="SdrsIoBalanceAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevelInput"></a>

```go
func SdrsIoBalanceAutomationLevelInput() *string
```

- *Type:* *string

---

##### `SdrsIoLatencyThresholdInput`<sup>Optional</sup> <a name="SdrsIoLatencyThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThresholdInput"></a>

```go
func SdrsIoLatencyThresholdInput() *f64
```

- *Type:* *f64

---

##### `SdrsIoLoadBalanceEnabledInput`<sup>Optional</sup> <a name="SdrsIoLoadBalanceEnabledInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabledInput"></a>

```go
func SdrsIoLoadBalanceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SdrsIoLoadImbalanceThresholdInput`<sup>Optional</sup> <a name="SdrsIoLoadImbalanceThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThresholdInput"></a>

```go
func SdrsIoLoadImbalanceThresholdInput() *f64
```

- *Type:* *f64

---

##### `SdrsIoReservableIopsThresholdInput`<sup>Optional</sup> <a name="SdrsIoReservableIopsThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThresholdInput"></a>

```go
func SdrsIoReservableIopsThresholdInput() *f64
```

- *Type:* *f64

---

##### `SdrsIoReservablePercentThresholdInput`<sup>Optional</sup> <a name="SdrsIoReservablePercentThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThresholdInput"></a>

```go
func SdrsIoReservablePercentThresholdInput() *f64
```

- *Type:* *f64

---

##### `SdrsIoReservableThresholdModeInput`<sup>Optional</sup> <a name="SdrsIoReservableThresholdModeInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdModeInput"></a>

```go
func SdrsIoReservableThresholdModeInput() *string
```

- *Type:* *string

---

##### `SdrsLoadBalanceIntervalInput`<sup>Optional</sup> <a name="SdrsLoadBalanceIntervalInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceIntervalInput"></a>

```go
func SdrsLoadBalanceIntervalInput() *f64
```

- *Type:* *f64

---

##### `SdrsPolicyEnforcementAutomationLevelInput`<sup>Optional</sup> <a name="SdrsPolicyEnforcementAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevelInput"></a>

```go
func SdrsPolicyEnforcementAutomationLevelInput() *string
```

- *Type:* *string

---

##### `SdrsRuleEnforcementAutomationLevelInput`<sup>Optional</sup> <a name="SdrsRuleEnforcementAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevelInput"></a>

```go
func SdrsRuleEnforcementAutomationLevelInput() *string
```

- *Type:* *string

---

##### `SdrsSpaceBalanceAutomationLevelInput`<sup>Optional</sup> <a name="SdrsSpaceBalanceAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevelInput"></a>

```go
func SdrsSpaceBalanceAutomationLevelInput() *string
```

- *Type:* *string

---

##### `SdrsSpaceUtilizationThresholdInput`<sup>Optional</sup> <a name="SdrsSpaceUtilizationThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThresholdInput"></a>

```go
func SdrsSpaceUtilizationThresholdInput() *f64
```

- *Type:* *f64

---

##### `SdrsVmEvacuationAutomationLevelInput`<sup>Optional</sup> <a name="SdrsVmEvacuationAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevelInput"></a>

```go
func SdrsVmEvacuationAutomationLevelInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributes"></a>

```go
func CustomAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SdrsAdvancedOptions`<sup>Required</sup> <a name="SdrsAdvancedOptions" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptions"></a>

```go
func SdrsAdvancedOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SdrsAutomationLevel`<sup>Required</sup> <a name="SdrsAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevel"></a>

```go
func SdrsAutomationLevel() *string
```

- *Type:* *string

---

##### `SdrsDefaultIntraVmAffinity`<sup>Required</sup> <a name="SdrsDefaultIntraVmAffinity" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinity"></a>

```go
func SdrsDefaultIntraVmAffinity() interface{}
```

- *Type:* interface{}

---

##### `SdrsEnabled`<sup>Required</sup> <a name="SdrsEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabled"></a>

```go
func SdrsEnabled() interface{}
```

- *Type:* interface{}

---

##### `SdrsFreeSpaceThreshold`<sup>Required</sup> <a name="SdrsFreeSpaceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThreshold"></a>

```go
func SdrsFreeSpaceThreshold() *f64
```

- *Type:* *f64

---

##### `SdrsFreeSpaceThresholdMode`<sup>Required</sup> <a name="SdrsFreeSpaceThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdMode"></a>

```go
func SdrsFreeSpaceThresholdMode() *string
```

- *Type:* *string

---

##### `SdrsFreeSpaceUtilizationDifference`<sup>Required</sup> <a name="SdrsFreeSpaceUtilizationDifference" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifference"></a>

```go
func SdrsFreeSpaceUtilizationDifference() *f64
```

- *Type:* *f64

---

##### `SdrsIoBalanceAutomationLevel`<sup>Required</sup> <a name="SdrsIoBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevel"></a>

```go
func SdrsIoBalanceAutomationLevel() *string
```

- *Type:* *string

---

##### `SdrsIoLatencyThreshold`<sup>Required</sup> <a name="SdrsIoLatencyThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThreshold"></a>

```go
func SdrsIoLatencyThreshold() *f64
```

- *Type:* *f64

---

##### `SdrsIoLoadBalanceEnabled`<sup>Required</sup> <a name="SdrsIoLoadBalanceEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabled"></a>

```go
func SdrsIoLoadBalanceEnabled() interface{}
```

- *Type:* interface{}

---

##### `SdrsIoLoadImbalanceThreshold`<sup>Required</sup> <a name="SdrsIoLoadImbalanceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThreshold"></a>

```go
func SdrsIoLoadImbalanceThreshold() *f64
```

- *Type:* *f64

---

##### `SdrsIoReservableIopsThreshold`<sup>Required</sup> <a name="SdrsIoReservableIopsThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThreshold"></a>

```go
func SdrsIoReservableIopsThreshold() *f64
```

- *Type:* *f64

---

##### `SdrsIoReservablePercentThreshold`<sup>Required</sup> <a name="SdrsIoReservablePercentThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThreshold"></a>

```go
func SdrsIoReservablePercentThreshold() *f64
```

- *Type:* *f64

---

##### `SdrsIoReservableThresholdMode`<sup>Required</sup> <a name="SdrsIoReservableThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdMode"></a>

```go
func SdrsIoReservableThresholdMode() *string
```

- *Type:* *string

---

##### `SdrsLoadBalanceInterval`<sup>Required</sup> <a name="SdrsLoadBalanceInterval" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceInterval"></a>

```go
func SdrsLoadBalanceInterval() *f64
```

- *Type:* *f64

---

##### `SdrsPolicyEnforcementAutomationLevel`<sup>Required</sup> <a name="SdrsPolicyEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevel"></a>

```go
func SdrsPolicyEnforcementAutomationLevel() *string
```

- *Type:* *string

---

##### `SdrsRuleEnforcementAutomationLevel`<sup>Required</sup> <a name="SdrsRuleEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevel"></a>

```go
func SdrsRuleEnforcementAutomationLevel() *string
```

- *Type:* *string

---

##### `SdrsSpaceBalanceAutomationLevel`<sup>Required</sup> <a name="SdrsSpaceBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevel"></a>

```go
func SdrsSpaceBalanceAutomationLevel() *string
```

- *Type:* *string

---

##### `SdrsSpaceUtilizationThreshold`<sup>Required</sup> <a name="SdrsSpaceUtilizationThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThreshold"></a>

```go
func SdrsSpaceUtilizationThreshold() *f64
```

- *Type:* *f64

---

##### `SdrsVmEvacuationAutomationLevel`<sup>Required</sup> <a name="SdrsVmEvacuationAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevel"></a>

```go
func SdrsVmEvacuationAutomationLevel() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatastoreClusterConfig <a name="DatastoreClusterConfig" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datastorecluster"

&datastorecluster.DatastoreClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatacenterId: *string,
	Name: *string,
	CustomAttributes: *map[string]*string,
	Folder: *string,
	Id: *string,
	SdrsAdvancedOptions: *map[string]*string,
	SdrsAutomationLevel: *string,
	SdrsDefaultIntraVmAffinity: interface{},
	SdrsEnabled: interface{},
	SdrsFreeSpaceThreshold: *f64,
	SdrsFreeSpaceThresholdMode: *string,
	SdrsFreeSpaceUtilizationDifference: *f64,
	SdrsIoBalanceAutomationLevel: *string,
	SdrsIoLatencyThreshold: *f64,
	SdrsIoLoadBalanceEnabled: interface{},
	SdrsIoLoadImbalanceThreshold: *f64,
	SdrsIoReservableIopsThreshold: *f64,
	SdrsIoReservablePercentThreshold: *f64,
	SdrsIoReservableThresholdMode: *string,
	SdrsLoadBalanceInterval: *f64,
	SdrsPolicyEnforcementAutomationLevel: *string,
	SdrsRuleEnforcementAutomationLevel: *string,
	SdrsSpaceBalanceAutomationLevel: *string,
	SdrsSpaceUtilizationThreshold: *f64,
	SdrsVmEvacuationAutomationLevel: *string,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | The managed object ID of the datacenter to put the datastore cluster in. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.name">Name</a></code> | <code>*string</code> | Name for the new storage pod. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.folder">Folder</a></code> | <code>*string</code> | The name of the folder to locate the datastore cluster in. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#id DatastoreCluster#id}. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAdvancedOptions">SdrsAdvancedOptions</a></code> | <code>*map[string]*string</code> | Advanced configuration options for storage DRS. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAutomationLevel">SdrsAutomationLevel</a></code> | <code>*string</code> | The default automation level for all virtual machines in this storage cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsDefaultIntraVmAffinity">SdrsDefaultIntraVmAffinity</a></code> | <code>interface{}</code> | When true, storage DRS keeps VMDKs for individual VMs on the same datastore by default. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsEnabled">SdrsEnabled</a></code> | <code>interface{}</code> | Enable storage DRS for this datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThreshold">SdrsFreeSpaceThreshold</a></code> | <code>*f64</code> | The threshold, in GB, that storage DRS uses to make decisions to migrate VMs out of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThresholdMode">SdrsFreeSpaceThresholdMode</a></code> | <code>*string</code> | The free space threshold to use. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceUtilizationDifference">SdrsFreeSpaceUtilizationDifference</a></code> | <code>*f64</code> | The threshold, in percent, of difference between space utilization in datastores before storage DRS makes decisions to balance the space. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoBalanceAutomationLevel">SdrsIoBalanceAutomationLevel</a></code> | <code>*string</code> | Overrides the default automation settings when correcting I/O load imbalances. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLatencyThreshold">SdrsIoLatencyThreshold</a></code> | <code>*f64</code> | The I/O latency threshold, in milliseconds, that storage DRS uses to make recommendations to move disks from this datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadBalanceEnabled">SdrsIoLoadBalanceEnabled</a></code> | <code>interface{}</code> | Enable I/O load balancing for this datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadImbalanceThreshold">SdrsIoLoadImbalanceThreshold</a></code> | <code>*f64</code> | The difference between load in datastores in the cluster before storage DRS makes recommendations to balance the load. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableIopsThreshold">SdrsIoReservableIopsThreshold</a></code> | <code>*f64</code> | The threshold of reservable IOPS of all virtual machines on the datastore before storage DRS makes recommendations to move VMs off of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservablePercentThreshold">SdrsIoReservablePercentThreshold</a></code> | <code>*f64</code> | The threshold, in percent, of actual estimated performance of the datastore (in IOPS) that storage DRS uses to make recommendations to move VMs off of a datastore when the total reservable IOPS exceeds the threshold. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableThresholdMode">SdrsIoReservableThresholdMode</a></code> | <code>*string</code> | The reservable IOPS threshold to use, percent in the event of automatic, or manual threshold in the event of manual. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsLoadBalanceInterval">SdrsLoadBalanceInterval</a></code> | <code>*f64</code> | The storage DRS poll interval, in minutes. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsPolicyEnforcementAutomationLevel">SdrsPolicyEnforcementAutomationLevel</a></code> | <code>*string</code> | Overrides the default automation settings when correcting storage and VM policy violations. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsRuleEnforcementAutomationLevel">SdrsRuleEnforcementAutomationLevel</a></code> | <code>*string</code> | Overrides the default automation settings when correcting affinity rule violations. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceBalanceAutomationLevel">SdrsSpaceBalanceAutomationLevel</a></code> | <code>*string</code> | Overrides the default automation settings when correcting disk space imbalances. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceUtilizationThreshold">SdrsSpaceUtilizationThreshold</a></code> | <code>*f64</code> | The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsVmEvacuationAutomationLevel">SdrsVmEvacuationAutomationLevel</a></code> | <code>*string</code> | Overrides the default automation settings when generating recommendations for datastore evacuation. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of tag IDs to apply to this object. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

The managed object ID of the datacenter to put the datastore cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#datacenter_id DatastoreCluster#datacenter_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name for the new storage pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#name DatastoreCluster#name}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.customAttributes"></a>

```go
CustomAttributes *map[string]*string
```

- *Type:* *map[string]*string

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#custom_attributes DatastoreCluster#custom_attributes}

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

The name of the folder to locate the datastore cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#folder DatastoreCluster#folder}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#id DatastoreCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SdrsAdvancedOptions`<sup>Optional</sup> <a name="SdrsAdvancedOptions" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAdvancedOptions"></a>

```go
SdrsAdvancedOptions *map[string]*string
```

- *Type:* *map[string]*string

Advanced configuration options for storage DRS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_advanced_options DatastoreCluster#sdrs_advanced_options}

---

##### `SdrsAutomationLevel`<sup>Optional</sup> <a name="SdrsAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAutomationLevel"></a>

```go
SdrsAutomationLevel *string
```

- *Type:* *string

The default automation level for all virtual machines in this storage cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_automation_level DatastoreCluster#sdrs_automation_level}

---

##### `SdrsDefaultIntraVmAffinity`<sup>Optional</sup> <a name="SdrsDefaultIntraVmAffinity" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsDefaultIntraVmAffinity"></a>

```go
SdrsDefaultIntraVmAffinity interface{}
```

- *Type:* interface{}

When true, storage DRS keeps VMDKs for individual VMs on the same datastore by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_default_intra_vm_affinity DatastoreCluster#sdrs_default_intra_vm_affinity}

---

##### `SdrsEnabled`<sup>Optional</sup> <a name="SdrsEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsEnabled"></a>

```go
SdrsEnabled interface{}
```

- *Type:* interface{}

Enable storage DRS for this datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_enabled DatastoreCluster#sdrs_enabled}

---

##### `SdrsFreeSpaceThreshold`<sup>Optional</sup> <a name="SdrsFreeSpaceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThreshold"></a>

```go
SdrsFreeSpaceThreshold *f64
```

- *Type:* *f64

The threshold, in GB, that storage DRS uses to make decisions to migrate VMs out of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_free_space_threshold DatastoreCluster#sdrs_free_space_threshold}

---

##### `SdrsFreeSpaceThresholdMode`<sup>Optional</sup> <a name="SdrsFreeSpaceThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThresholdMode"></a>

```go
SdrsFreeSpaceThresholdMode *string
```

- *Type:* *string

The free space threshold to use.

When set to utilization, drs_space_utilization_threshold is used, and when set to freeSpace, drs_free_space_threshold is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_free_space_threshold_mode DatastoreCluster#sdrs_free_space_threshold_mode}

---

##### `SdrsFreeSpaceUtilizationDifference`<sup>Optional</sup> <a name="SdrsFreeSpaceUtilizationDifference" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceUtilizationDifference"></a>

```go
SdrsFreeSpaceUtilizationDifference *f64
```

- *Type:* *f64

The threshold, in percent, of difference between space utilization in datastores before storage DRS makes decisions to balance the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_free_space_utilization_difference DatastoreCluster#sdrs_free_space_utilization_difference}

---

##### `SdrsIoBalanceAutomationLevel`<sup>Optional</sup> <a name="SdrsIoBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoBalanceAutomationLevel"></a>

```go
SdrsIoBalanceAutomationLevel *string
```

- *Type:* *string

Overrides the default automation settings when correcting I/O load imbalances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_io_balance_automation_level DatastoreCluster#sdrs_io_balance_automation_level}

---

##### `SdrsIoLatencyThreshold`<sup>Optional</sup> <a name="SdrsIoLatencyThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLatencyThreshold"></a>

```go
SdrsIoLatencyThreshold *f64
```

- *Type:* *f64

The I/O latency threshold, in milliseconds, that storage DRS uses to make recommendations to move disks from this datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_io_latency_threshold DatastoreCluster#sdrs_io_latency_threshold}

---

##### `SdrsIoLoadBalanceEnabled`<sup>Optional</sup> <a name="SdrsIoLoadBalanceEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadBalanceEnabled"></a>

```go
SdrsIoLoadBalanceEnabled interface{}
```

- *Type:* interface{}

Enable I/O load balancing for this datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_io_load_balance_enabled DatastoreCluster#sdrs_io_load_balance_enabled}

---

##### `SdrsIoLoadImbalanceThreshold`<sup>Optional</sup> <a name="SdrsIoLoadImbalanceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadImbalanceThreshold"></a>

```go
SdrsIoLoadImbalanceThreshold *f64
```

- *Type:* *f64

The difference between load in datastores in the cluster before storage DRS makes recommendations to balance the load.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_io_load_imbalance_threshold DatastoreCluster#sdrs_io_load_imbalance_threshold}

---

##### `SdrsIoReservableIopsThreshold`<sup>Optional</sup> <a name="SdrsIoReservableIopsThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableIopsThreshold"></a>

```go
SdrsIoReservableIopsThreshold *f64
```

- *Type:* *f64

The threshold of reservable IOPS of all virtual machines on the datastore before storage DRS makes recommendations to move VMs off of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_io_reservable_iops_threshold DatastoreCluster#sdrs_io_reservable_iops_threshold}

---

##### `SdrsIoReservablePercentThreshold`<sup>Optional</sup> <a name="SdrsIoReservablePercentThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservablePercentThreshold"></a>

```go
SdrsIoReservablePercentThreshold *f64
```

- *Type:* *f64

The threshold, in percent, of actual estimated performance of the datastore (in IOPS) that storage DRS uses to make recommendations to move VMs off of a datastore when the total reservable IOPS exceeds the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_io_reservable_percent_threshold DatastoreCluster#sdrs_io_reservable_percent_threshold}

---

##### `SdrsIoReservableThresholdMode`<sup>Optional</sup> <a name="SdrsIoReservableThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableThresholdMode"></a>

```go
SdrsIoReservableThresholdMode *string
```

- *Type:* *string

The reservable IOPS threshold to use, percent in the event of automatic, or manual threshold in the event of manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_io_reservable_threshold_mode DatastoreCluster#sdrs_io_reservable_threshold_mode}

---

##### `SdrsLoadBalanceInterval`<sup>Optional</sup> <a name="SdrsLoadBalanceInterval" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsLoadBalanceInterval"></a>

```go
SdrsLoadBalanceInterval *f64
```

- *Type:* *f64

The storage DRS poll interval, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_load_balance_interval DatastoreCluster#sdrs_load_balance_interval}

---

##### `SdrsPolicyEnforcementAutomationLevel`<sup>Optional</sup> <a name="SdrsPolicyEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsPolicyEnforcementAutomationLevel"></a>

```go
SdrsPolicyEnforcementAutomationLevel *string
```

- *Type:* *string

Overrides the default automation settings when correcting storage and VM policy violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_policy_enforcement_automation_level DatastoreCluster#sdrs_policy_enforcement_automation_level}

---

##### `SdrsRuleEnforcementAutomationLevel`<sup>Optional</sup> <a name="SdrsRuleEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsRuleEnforcementAutomationLevel"></a>

```go
SdrsRuleEnforcementAutomationLevel *string
```

- *Type:* *string

Overrides the default automation settings when correcting affinity rule violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_rule_enforcement_automation_level DatastoreCluster#sdrs_rule_enforcement_automation_level}

---

##### `SdrsSpaceBalanceAutomationLevel`<sup>Optional</sup> <a name="SdrsSpaceBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceBalanceAutomationLevel"></a>

```go
SdrsSpaceBalanceAutomationLevel *string
```

- *Type:* *string

Overrides the default automation settings when correcting disk space imbalances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_space_balance_automation_level DatastoreCluster#sdrs_space_balance_automation_level}

---

##### `SdrsSpaceUtilizationThreshold`<sup>Optional</sup> <a name="SdrsSpaceUtilizationThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceUtilizationThreshold"></a>

```go
SdrsSpaceUtilizationThreshold *f64
```

- *Type:* *f64

The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_space_utilization_threshold DatastoreCluster#sdrs_space_utilization_threshold}

---

##### `SdrsVmEvacuationAutomationLevel`<sup>Optional</sup> <a name="SdrsVmEvacuationAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsVmEvacuationAutomationLevel"></a>

```go
SdrsVmEvacuationAutomationLevel *string
```

- *Type:* *string

Overrides the default automation settings when generating recommendations for datastore evacuation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#sdrs_vm_evacuation_automation_level DatastoreCluster#sdrs_vm_evacuation_automation_level}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/datastore_cluster#tags DatastoreCluster#tags}

---



