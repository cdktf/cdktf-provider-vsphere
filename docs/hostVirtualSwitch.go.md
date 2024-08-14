# `hostVirtualSwitch` Submodule <a name="`hostVirtualSwitch` Submodule" id="@cdktf/provider-vsphere.hostVirtualSwitch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostVirtualSwitch <a name="HostVirtualSwitch" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch vsphere_host_virtual_switch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/hostvirtualswitch"

hostvirtualswitch.NewHostVirtualSwitch(scope Construct, id *string, config HostVirtualSwitchConfig) HostVirtualSwitch
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig">HostVirtualSwitchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig">HostVirtualSwitchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowForgedTransmits">ResetAllowForgedTransmits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowMacChanges">ResetAllowMacChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowPromiscuous">ResetAllowPromiscuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetBeaconInterval">ResetBeaconInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetCheckBeacon">ResetCheckBeacon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetFailback">ResetFailback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryOperation">ResetLinkDiscoveryOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryProtocol">ResetLinkDiscoveryProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNotifySwitches">ResetNotifySwitches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNumberOfPorts">ResetNumberOfPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingAverageBandwidth">ResetShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingBurstSize">ResetShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingEnabled">ResetShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingPeakBandwidth">ResetShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetStandbyNics">ResetStandbyNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetTeamingPolicy">ResetTeamingPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowForgedTransmits` <a name="ResetAllowForgedTransmits" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowForgedTransmits"></a>

```go
func ResetAllowForgedTransmits()
```

##### `ResetAllowMacChanges` <a name="ResetAllowMacChanges" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowMacChanges"></a>

```go
func ResetAllowMacChanges()
```

##### `ResetAllowPromiscuous` <a name="ResetAllowPromiscuous" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowPromiscuous"></a>

```go
func ResetAllowPromiscuous()
```

##### `ResetBeaconInterval` <a name="ResetBeaconInterval" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetBeaconInterval"></a>

```go
func ResetBeaconInterval()
```

##### `ResetCheckBeacon` <a name="ResetCheckBeacon" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetCheckBeacon"></a>

```go
func ResetCheckBeacon()
```

##### `ResetFailback` <a name="ResetFailback" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetFailback"></a>

```go
func ResetFailback()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetId"></a>

```go
func ResetId()
```

##### `ResetLinkDiscoveryOperation` <a name="ResetLinkDiscoveryOperation" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryOperation"></a>

```go
func ResetLinkDiscoveryOperation()
```

##### `ResetLinkDiscoveryProtocol` <a name="ResetLinkDiscoveryProtocol" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryProtocol"></a>

```go
func ResetLinkDiscoveryProtocol()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetNotifySwitches` <a name="ResetNotifySwitches" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNotifySwitches"></a>

```go
func ResetNotifySwitches()
```

##### `ResetNumberOfPorts` <a name="ResetNumberOfPorts" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNumberOfPorts"></a>

```go
func ResetNumberOfPorts()
```

##### `ResetShapingAverageBandwidth` <a name="ResetShapingAverageBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingAverageBandwidth"></a>

```go
func ResetShapingAverageBandwidth()
```

##### `ResetShapingBurstSize` <a name="ResetShapingBurstSize" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingBurstSize"></a>

```go
func ResetShapingBurstSize()
```

##### `ResetShapingEnabled` <a name="ResetShapingEnabled" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingEnabled"></a>

```go
func ResetShapingEnabled()
```

##### `ResetShapingPeakBandwidth` <a name="ResetShapingPeakBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingPeakBandwidth"></a>

```go
func ResetShapingPeakBandwidth()
```

##### `ResetStandbyNics` <a name="ResetStandbyNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetStandbyNics"></a>

```go
func ResetStandbyNics()
```

##### `ResetTeamingPolicy` <a name="ResetTeamingPolicy" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetTeamingPolicy"></a>

```go
func ResetTeamingPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HostVirtualSwitch resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/hostvirtualswitch"

hostvirtualswitch.HostVirtualSwitch_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/hostvirtualswitch"

hostvirtualswitch.HostVirtualSwitch_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/hostvirtualswitch"

hostvirtualswitch.HostVirtualSwitch_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/hostvirtualswitch"

hostvirtualswitch.HostVirtualSwitch_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a HostVirtualSwitch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the HostVirtualSwitch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing HostVirtualSwitch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the HostVirtualSwitch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNicsInput">ActiveNicsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmitsInput">AllowForgedTransmitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChangesInput">AllowMacChangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuousInput">AllowPromiscuousInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconIntervalInput">BeaconIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeaconInput">CheckBeaconInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failbackInput">FailbackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemIdInput">HostSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperationInput">LinkDiscoveryOperationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocolInput">LinkDiscoveryProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtuInput">MtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdaptersInput">NetworkAdaptersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitchesInput">NotifySwitchesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPortsInput">NumberOfPortsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidthInput">ShapingAverageBandwidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSizeInput">ShapingBurstSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabledInput">ShapingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidthInput">ShapingPeakBandwidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNicsInput">StandbyNicsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicyInput">TeamingPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNics">ActiveNics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmits">AllowForgedTransmits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChanges">AllowMacChanges</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuous">AllowPromiscuous</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconInterval">BeaconInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeacon">CheckBeacon</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failback">Failback</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemId">HostSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperation">LinkDiscoveryOperation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocol">LinkDiscoveryProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdapters">NetworkAdapters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitches">NotifySwitches</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPorts">NumberOfPorts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidth">ShapingAverageBandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSize">ShapingBurstSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabled">ShapingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidth">ShapingPeakBandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNics">StandbyNics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicy">TeamingPolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActiveNicsInput`<sup>Optional</sup> <a name="ActiveNicsInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNicsInput"></a>

```go
func ActiveNicsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowForgedTransmitsInput`<sup>Optional</sup> <a name="AllowForgedTransmitsInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmitsInput"></a>

```go
func AllowForgedTransmitsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowMacChangesInput`<sup>Optional</sup> <a name="AllowMacChangesInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChangesInput"></a>

```go
func AllowMacChangesInput() interface{}
```

- *Type:* interface{}

---

##### `AllowPromiscuousInput`<sup>Optional</sup> <a name="AllowPromiscuousInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuousInput"></a>

```go
func AllowPromiscuousInput() interface{}
```

- *Type:* interface{}

---

##### `BeaconIntervalInput`<sup>Optional</sup> <a name="BeaconIntervalInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconIntervalInput"></a>

```go
func BeaconIntervalInput() *f64
```

- *Type:* *f64

---

##### `CheckBeaconInput`<sup>Optional</sup> <a name="CheckBeaconInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeaconInput"></a>

```go
func CheckBeaconInput() interface{}
```

- *Type:* interface{}

---

##### `FailbackInput`<sup>Optional</sup> <a name="FailbackInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failbackInput"></a>

```go
func FailbackInput() interface{}
```

- *Type:* interface{}

---

##### `HostSystemIdInput`<sup>Optional</sup> <a name="HostSystemIdInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemIdInput"></a>

```go
func HostSystemIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LinkDiscoveryOperationInput`<sup>Optional</sup> <a name="LinkDiscoveryOperationInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperationInput"></a>

```go
func LinkDiscoveryOperationInput() *string
```

- *Type:* *string

---

##### `LinkDiscoveryProtocolInput`<sup>Optional</sup> <a name="LinkDiscoveryProtocolInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocolInput"></a>

```go
func LinkDiscoveryProtocolInput() *string
```

- *Type:* *string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtuInput"></a>

```go
func MtuInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkAdaptersInput`<sup>Optional</sup> <a name="NetworkAdaptersInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdaptersInput"></a>

```go
func NetworkAdaptersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotifySwitchesInput`<sup>Optional</sup> <a name="NotifySwitchesInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitchesInput"></a>

```go
func NotifySwitchesInput() interface{}
```

- *Type:* interface{}

---

##### `NumberOfPortsInput`<sup>Optional</sup> <a name="NumberOfPortsInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPortsInput"></a>

```go
func NumberOfPortsInput() *f64
```

- *Type:* *f64

---

##### `ShapingAverageBandwidthInput`<sup>Optional</sup> <a name="ShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidthInput"></a>

```go
func ShapingAverageBandwidthInput() *f64
```

- *Type:* *f64

---

##### `ShapingBurstSizeInput`<sup>Optional</sup> <a name="ShapingBurstSizeInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSizeInput"></a>

```go
func ShapingBurstSizeInput() *f64
```

- *Type:* *f64

---

##### `ShapingEnabledInput`<sup>Optional</sup> <a name="ShapingEnabledInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabledInput"></a>

```go
func ShapingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ShapingPeakBandwidthInput`<sup>Optional</sup> <a name="ShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidthInput"></a>

```go
func ShapingPeakBandwidthInput() *f64
```

- *Type:* *f64

---

##### `StandbyNicsInput`<sup>Optional</sup> <a name="StandbyNicsInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNicsInput"></a>

```go
func StandbyNicsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TeamingPolicyInput`<sup>Optional</sup> <a name="TeamingPolicyInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicyInput"></a>

```go
func TeamingPolicyInput() *string
```

- *Type:* *string

---

##### `ActiveNics`<sup>Required</sup> <a name="ActiveNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNics"></a>

```go
func ActiveNics() *[]*string
```

- *Type:* *[]*string

---

##### `AllowForgedTransmits`<sup>Required</sup> <a name="AllowForgedTransmits" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmits"></a>

```go
func AllowForgedTransmits() interface{}
```

- *Type:* interface{}

---

##### `AllowMacChanges`<sup>Required</sup> <a name="AllowMacChanges" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChanges"></a>

```go
func AllowMacChanges() interface{}
```

- *Type:* interface{}

---

##### `AllowPromiscuous`<sup>Required</sup> <a name="AllowPromiscuous" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuous"></a>

```go
func AllowPromiscuous() interface{}
```

- *Type:* interface{}

---

##### `BeaconInterval`<sup>Required</sup> <a name="BeaconInterval" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconInterval"></a>

```go
func BeaconInterval() *f64
```

- *Type:* *f64

---

##### `CheckBeacon`<sup>Required</sup> <a name="CheckBeacon" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeacon"></a>

```go
func CheckBeacon() interface{}
```

- *Type:* interface{}

---

##### `Failback`<sup>Required</sup> <a name="Failback" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failback"></a>

```go
func Failback() interface{}
```

- *Type:* interface{}

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemId"></a>

```go
func HostSystemId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LinkDiscoveryOperation`<sup>Required</sup> <a name="LinkDiscoveryOperation" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperation"></a>

```go
func LinkDiscoveryOperation() *string
```

- *Type:* *string

---

##### `LinkDiscoveryProtocol`<sup>Required</sup> <a name="LinkDiscoveryProtocol" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocol"></a>

```go
func LinkDiscoveryProtocol() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkAdapters`<sup>Required</sup> <a name="NetworkAdapters" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdapters"></a>

```go
func NetworkAdapters() *[]*string
```

- *Type:* *[]*string

---

##### `NotifySwitches`<sup>Required</sup> <a name="NotifySwitches" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitches"></a>

```go
func NotifySwitches() interface{}
```

- *Type:* interface{}

---

##### `NumberOfPorts`<sup>Required</sup> <a name="NumberOfPorts" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPorts"></a>

```go
func NumberOfPorts() *f64
```

- *Type:* *f64

---

##### `ShapingAverageBandwidth`<sup>Required</sup> <a name="ShapingAverageBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidth"></a>

```go
func ShapingAverageBandwidth() *f64
```

- *Type:* *f64

---

##### `ShapingBurstSize`<sup>Required</sup> <a name="ShapingBurstSize" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSize"></a>

```go
func ShapingBurstSize() *f64
```

- *Type:* *f64

---

##### `ShapingEnabled`<sup>Required</sup> <a name="ShapingEnabled" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabled"></a>

```go
func ShapingEnabled() interface{}
```

- *Type:* interface{}

---

##### `ShapingPeakBandwidth`<sup>Required</sup> <a name="ShapingPeakBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidth"></a>

```go
func ShapingPeakBandwidth() *f64
```

- *Type:* *f64

---

##### `StandbyNics`<sup>Required</sup> <a name="StandbyNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNics"></a>

```go
func StandbyNics() *[]*string
```

- *Type:* *[]*string

---

##### `TeamingPolicy`<sup>Required</sup> <a name="TeamingPolicy" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicy"></a>

```go
func TeamingPolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HostVirtualSwitchConfig <a name="HostVirtualSwitchConfig" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/hostvirtualswitch"

&hostvirtualswitch.HostVirtualSwitchConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ActiveNics: *[]*string,
	HostSystemId: *string,
	Name: *string,
	NetworkAdapters: *[]*string,
	AllowForgedTransmits: interface{},
	AllowMacChanges: interface{},
	AllowPromiscuous: interface{},
	BeaconInterval: *f64,
	CheckBeacon: interface{},
	Failback: interface{},
	Id: *string,
	LinkDiscoveryOperation: *string,
	LinkDiscoveryProtocol: *string,
	Mtu: *f64,
	NotifySwitches: interface{},
	NumberOfPorts: *f64,
	ShapingAverageBandwidth: *f64,
	ShapingBurstSize: *f64,
	ShapingEnabled: interface{},
	ShapingPeakBandwidth: *f64,
	StandbyNics: *[]*string,
	TeamingPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.activeNics">ActiveNics</a></code> | <code>*[]*string</code> | List of active network adapters used for load balancing. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.hostSystemId">HostSystemId</a></code> | <code>*string</code> | The managed object ID of the host to set the virtual switch up on. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.name">Name</a></code> | <code>*string</code> | The name of the virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.networkAdapters">NetworkAdapters</a></code> | <code>*[]*string</code> | The list of network adapters to bind to this virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowForgedTransmits">AllowForgedTransmits</a></code> | <code>interface{}</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowMacChanges">AllowMacChanges</a></code> | <code>interface{}</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowPromiscuous">AllowPromiscuous</a></code> | <code>interface{}</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.beaconInterval">BeaconInterval</a></code> | <code>*f64</code> | Determines how often, in seconds, a beacon should be sent to probe for the validity of a link. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.checkBeacon">CheckBeacon</a></code> | <code>interface{}</code> | Enable beacon probing. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.failback">Failback</a></code> | <code>interface{}</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#id HostVirtualSwitch#id}. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryOperation">LinkDiscoveryOperation</a></code> | <code>*string</code> | Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryProtocol">LinkDiscoveryProtocol</a></code> | <code>*string</code> | The discovery protocol type. Valid values are cdp and lldp. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.mtu">Mtu</a></code> | <code>*f64</code> | The maximum transmission unit (MTU) of the virtual switch in bytes. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.notifySwitches">NotifySwitches</a></code> | <code>interface{}</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.numberOfPorts">NumberOfPorts</a></code> | <code>*f64</code> | The number of ports that this virtual switch is configured to use. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingAverageBandwidth">ShapingAverageBandwidth</a></code> | <code>*f64</code> | The average bandwidth in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingBurstSize">ShapingBurstSize</a></code> | <code>*f64</code> | The maximum burst size allowed in bytes if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingEnabled">ShapingEnabled</a></code> | <code>interface{}</code> | Enable traffic shaping on this virtual switch or port group. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingPeakBandwidth">ShapingPeakBandwidth</a></code> | <code>*f64</code> | The peak bandwidth during bursts in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.standbyNics">StandbyNics</a></code> | <code>*[]*string</code> | List of standby network adapters used for failover. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.teamingPolicy">TeamingPolicy</a></code> | <code>*string</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActiveNics`<sup>Required</sup> <a name="ActiveNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.activeNics"></a>

```go
ActiveNics *[]*string
```

- *Type:* *[]*string

List of active network adapters used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#active_nics HostVirtualSwitch#active_nics}

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.hostSystemId"></a>

```go
HostSystemId *string
```

- *Type:* *string

The managed object ID of the host to set the virtual switch up on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#host_system_id HostVirtualSwitch#host_system_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the virtual switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#name HostVirtualSwitch#name}

---

##### `NetworkAdapters`<sup>Required</sup> <a name="NetworkAdapters" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.networkAdapters"></a>

```go
NetworkAdapters *[]*string
```

- *Type:* *[]*string

The list of network adapters to bind to this virtual switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#network_adapters HostVirtualSwitch#network_adapters}

---

##### `AllowForgedTransmits`<sup>Optional</sup> <a name="AllowForgedTransmits" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowForgedTransmits"></a>

```go
AllowForgedTransmits interface{}
```

- *Type:* interface{}

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#allow_forged_transmits HostVirtualSwitch#allow_forged_transmits}

---

##### `AllowMacChanges`<sup>Optional</sup> <a name="AllowMacChanges" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowMacChanges"></a>

```go
AllowMacChanges interface{}
```

- *Type:* interface{}

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#allow_mac_changes HostVirtualSwitch#allow_mac_changes}

---

##### `AllowPromiscuous`<sup>Optional</sup> <a name="AllowPromiscuous" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowPromiscuous"></a>

```go
AllowPromiscuous interface{}
```

- *Type:* interface{}

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#allow_promiscuous HostVirtualSwitch#allow_promiscuous}

---

##### `BeaconInterval`<sup>Optional</sup> <a name="BeaconInterval" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.beaconInterval"></a>

```go
BeaconInterval *f64
```

- *Type:* *f64

Determines how often, in seconds, a beacon should be sent to probe for the validity of a link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#beacon_interval HostVirtualSwitch#beacon_interval}

---

##### `CheckBeacon`<sup>Optional</sup> <a name="CheckBeacon" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.checkBeacon"></a>

```go
CheckBeacon interface{}
```

- *Type:* interface{}

Enable beacon probing.

Requires that the vSwitch has been configured to use a beacon. If disabled, link status is used only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#check_beacon HostVirtualSwitch#check_beacon}

---

##### `Failback`<sup>Optional</sup> <a name="Failback" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.failback"></a>

```go
Failback interface{}
```

- *Type:* interface{}

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#failback HostVirtualSwitch#failback}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#id HostVirtualSwitch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LinkDiscoveryOperation`<sup>Optional</sup> <a name="LinkDiscoveryOperation" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryOperation"></a>

```go
LinkDiscoveryOperation *string
```

- *Type:* *string

Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#link_discovery_operation HostVirtualSwitch#link_discovery_operation}

---

##### `LinkDiscoveryProtocol`<sup>Optional</sup> <a name="LinkDiscoveryProtocol" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryProtocol"></a>

```go
LinkDiscoveryProtocol *string
```

- *Type:* *string

The discovery protocol type. Valid values are cdp and lldp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#link_discovery_protocol HostVirtualSwitch#link_discovery_protocol}

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.mtu"></a>

```go
Mtu *f64
```

- *Type:* *f64

The maximum transmission unit (MTU) of the virtual switch in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#mtu HostVirtualSwitch#mtu}

---

##### `NotifySwitches`<sup>Optional</sup> <a name="NotifySwitches" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.notifySwitches"></a>

```go
NotifySwitches interface{}
```

- *Type:* interface{}

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#notify_switches HostVirtualSwitch#notify_switches}

---

##### `NumberOfPorts`<sup>Optional</sup> <a name="NumberOfPorts" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.numberOfPorts"></a>

```go
NumberOfPorts *f64
```

- *Type:* *f64

The number of ports that this virtual switch is configured to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#number_of_ports HostVirtualSwitch#number_of_ports}

---

##### `ShapingAverageBandwidth`<sup>Optional</sup> <a name="ShapingAverageBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingAverageBandwidth"></a>

```go
ShapingAverageBandwidth *f64
```

- *Type:* *f64

The average bandwidth in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#shaping_average_bandwidth HostVirtualSwitch#shaping_average_bandwidth}

---

##### `ShapingBurstSize`<sup>Optional</sup> <a name="ShapingBurstSize" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingBurstSize"></a>

```go
ShapingBurstSize *f64
```

- *Type:* *f64

The maximum burst size allowed in bytes if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#shaping_burst_size HostVirtualSwitch#shaping_burst_size}

---

##### `ShapingEnabled`<sup>Optional</sup> <a name="ShapingEnabled" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingEnabled"></a>

```go
ShapingEnabled interface{}
```

- *Type:* interface{}

Enable traffic shaping on this virtual switch or port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#shaping_enabled HostVirtualSwitch#shaping_enabled}

---

##### `ShapingPeakBandwidth`<sup>Optional</sup> <a name="ShapingPeakBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingPeakBandwidth"></a>

```go
ShapingPeakBandwidth *f64
```

- *Type:* *f64

The peak bandwidth during bursts in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#shaping_peak_bandwidth HostVirtualSwitch#shaping_peak_bandwidth}

---

##### `StandbyNics`<sup>Optional</sup> <a name="StandbyNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.standbyNics"></a>

```go
StandbyNics *[]*string
```

- *Type:* *[]*string

List of standby network adapters used for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#standby_nics HostVirtualSwitch#standby_nics}

---

##### `TeamingPolicy`<sup>Optional</sup> <a name="TeamingPolicy" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.teamingPolicy"></a>

```go
TeamingPolicy *string
```

- *Type:* *string

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#teaming_policy HostVirtualSwitch#teaming_policy}

---



