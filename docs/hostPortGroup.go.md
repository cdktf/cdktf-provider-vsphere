# `vsphere_host_port_group`

Refer to the Terraform Registory for docs: [`vsphere_host_port_group`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group).

# `hostPortGroup` Submodule <a name="`hostPortGroup` Submodule" id="@cdktf/provider-vsphere.hostPortGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostPortGroup <a name="HostPortGroup" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group vsphere_host_port_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/hostportgroup"

hostportgroup.NewHostPortGroup(scope Construct, id *string, config HostPortGroupConfig) HostPortGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig">HostPortGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig">HostPortGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetActiveNics">ResetActiveNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowForgedTransmits">ResetAllowForgedTransmits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowMacChanges">ResetAllowMacChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowPromiscuous">ResetAllowPromiscuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetCheckBeacon">ResetCheckBeacon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetFailback">ResetFailback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetNotifySwitches">ResetNotifySwitches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingAverageBandwidth">ResetShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingBurstSize">ResetShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingEnabled">ResetShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingPeakBandwidth">ResetShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetStandbyNics">ResetStandbyNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetTeamingPolicy">ResetTeamingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetVlanId">ResetVlanId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetActiveNics` <a name="ResetActiveNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetActiveNics"></a>

```go
func ResetActiveNics()
```

##### `ResetAllowForgedTransmits` <a name="ResetAllowForgedTransmits" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowForgedTransmits"></a>

```go
func ResetAllowForgedTransmits()
```

##### `ResetAllowMacChanges` <a name="ResetAllowMacChanges" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowMacChanges"></a>

```go
func ResetAllowMacChanges()
```

##### `ResetAllowPromiscuous` <a name="ResetAllowPromiscuous" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowPromiscuous"></a>

```go
func ResetAllowPromiscuous()
```

##### `ResetCheckBeacon` <a name="ResetCheckBeacon" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetCheckBeacon"></a>

```go
func ResetCheckBeacon()
```

##### `ResetFailback` <a name="ResetFailback" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetFailback"></a>

```go
func ResetFailback()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetNotifySwitches` <a name="ResetNotifySwitches" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetNotifySwitches"></a>

```go
func ResetNotifySwitches()
```

##### `ResetShapingAverageBandwidth` <a name="ResetShapingAverageBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingAverageBandwidth"></a>

```go
func ResetShapingAverageBandwidth()
```

##### `ResetShapingBurstSize` <a name="ResetShapingBurstSize" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingBurstSize"></a>

```go
func ResetShapingBurstSize()
```

##### `ResetShapingEnabled` <a name="ResetShapingEnabled" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingEnabled"></a>

```go
func ResetShapingEnabled()
```

##### `ResetShapingPeakBandwidth` <a name="ResetShapingPeakBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingPeakBandwidth"></a>

```go
func ResetShapingPeakBandwidth()
```

##### `ResetStandbyNics` <a name="ResetStandbyNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetStandbyNics"></a>

```go
func ResetStandbyNics()
```

##### `ResetTeamingPolicy` <a name="ResetTeamingPolicy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetTeamingPolicy"></a>

```go
func ResetTeamingPolicy()
```

##### `ResetVlanId` <a name="ResetVlanId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetVlanId"></a>

```go
func ResetVlanId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/hostportgroup"

hostportgroup.HostPortGroup_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/hostportgroup"

hostportgroup.HostPortGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/hostportgroup"

hostportgroup.HostPortGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.computedPolicy">ComputedPolicy</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.ports">Ports</a></code> | <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList">HostPortGroupPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNicsInput">ActiveNicsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmitsInput">AllowForgedTransmitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChangesInput">AllowMacChangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuousInput">AllowPromiscuousInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeaconInput">CheckBeaconInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failbackInput">FailbackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemIdInput">HostSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitchesInput">NotifySwitchesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidthInput">ShapingAverageBandwidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSizeInput">ShapingBurstSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabledInput">ShapingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidthInput">ShapingPeakBandwidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNicsInput">StandbyNicsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicyInput">TeamingPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchNameInput">VirtualSwitchNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanIdInput">VlanIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNics">ActiveNics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmits">AllowForgedTransmits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChanges">AllowMacChanges</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuous">AllowPromiscuous</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeacon">CheckBeacon</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failback">Failback</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemId">HostSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitches">NotifySwitches</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidth">ShapingAverageBandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSize">ShapingBurstSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabled">ShapingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidth">ShapingPeakBandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNics">StandbyNics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicy">TeamingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchName">VirtualSwitchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanId">VlanId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComputedPolicy`<sup>Required</sup> <a name="ComputedPolicy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.computedPolicy"></a>

```go
func ComputedPolicy() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.ports"></a>

```go
func Ports() HostPortGroupPortsList
```

- *Type:* <a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList">HostPortGroupPortsList</a>

---

##### `ActiveNicsInput`<sup>Optional</sup> <a name="ActiveNicsInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNicsInput"></a>

```go
func ActiveNicsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowForgedTransmitsInput`<sup>Optional</sup> <a name="AllowForgedTransmitsInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmitsInput"></a>

```go
func AllowForgedTransmitsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowMacChangesInput`<sup>Optional</sup> <a name="AllowMacChangesInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChangesInput"></a>

```go
func AllowMacChangesInput() interface{}
```

- *Type:* interface{}

---

##### `AllowPromiscuousInput`<sup>Optional</sup> <a name="AllowPromiscuousInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuousInput"></a>

```go
func AllowPromiscuousInput() interface{}
```

- *Type:* interface{}

---

##### `CheckBeaconInput`<sup>Optional</sup> <a name="CheckBeaconInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeaconInput"></a>

```go
func CheckBeaconInput() interface{}
```

- *Type:* interface{}

---

##### `FailbackInput`<sup>Optional</sup> <a name="FailbackInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failbackInput"></a>

```go
func FailbackInput() interface{}
```

- *Type:* interface{}

---

##### `HostSystemIdInput`<sup>Optional</sup> <a name="HostSystemIdInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemIdInput"></a>

```go
func HostSystemIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotifySwitchesInput`<sup>Optional</sup> <a name="NotifySwitchesInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitchesInput"></a>

```go
func NotifySwitchesInput() interface{}
```

- *Type:* interface{}

---

##### `ShapingAverageBandwidthInput`<sup>Optional</sup> <a name="ShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidthInput"></a>

```go
func ShapingAverageBandwidthInput() *f64
```

- *Type:* *f64

---

##### `ShapingBurstSizeInput`<sup>Optional</sup> <a name="ShapingBurstSizeInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSizeInput"></a>

```go
func ShapingBurstSizeInput() *f64
```

- *Type:* *f64

---

##### `ShapingEnabledInput`<sup>Optional</sup> <a name="ShapingEnabledInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabledInput"></a>

```go
func ShapingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ShapingPeakBandwidthInput`<sup>Optional</sup> <a name="ShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidthInput"></a>

```go
func ShapingPeakBandwidthInput() *f64
```

- *Type:* *f64

---

##### `StandbyNicsInput`<sup>Optional</sup> <a name="StandbyNicsInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNicsInput"></a>

```go
func StandbyNicsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TeamingPolicyInput`<sup>Optional</sup> <a name="TeamingPolicyInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicyInput"></a>

```go
func TeamingPolicyInput() *string
```

- *Type:* *string

---

##### `VirtualSwitchNameInput`<sup>Optional</sup> <a name="VirtualSwitchNameInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchNameInput"></a>

```go
func VirtualSwitchNameInput() *string
```

- *Type:* *string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanIdInput"></a>

```go
func VlanIdInput() *f64
```

- *Type:* *f64

---

##### `ActiveNics`<sup>Required</sup> <a name="ActiveNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNics"></a>

```go
func ActiveNics() *[]*string
```

- *Type:* *[]*string

---

##### `AllowForgedTransmits`<sup>Required</sup> <a name="AllowForgedTransmits" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmits"></a>

```go
func AllowForgedTransmits() interface{}
```

- *Type:* interface{}

---

##### `AllowMacChanges`<sup>Required</sup> <a name="AllowMacChanges" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChanges"></a>

```go
func AllowMacChanges() interface{}
```

- *Type:* interface{}

---

##### `AllowPromiscuous`<sup>Required</sup> <a name="AllowPromiscuous" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuous"></a>

```go
func AllowPromiscuous() interface{}
```

- *Type:* interface{}

---

##### `CheckBeacon`<sup>Required</sup> <a name="CheckBeacon" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeacon"></a>

```go
func CheckBeacon() interface{}
```

- *Type:* interface{}

---

##### `Failback`<sup>Required</sup> <a name="Failback" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failback"></a>

```go
func Failback() interface{}
```

- *Type:* interface{}

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemId"></a>

```go
func HostSystemId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotifySwitches`<sup>Required</sup> <a name="NotifySwitches" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitches"></a>

```go
func NotifySwitches() interface{}
```

- *Type:* interface{}

---

##### `ShapingAverageBandwidth`<sup>Required</sup> <a name="ShapingAverageBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidth"></a>

```go
func ShapingAverageBandwidth() *f64
```

- *Type:* *f64

---

##### `ShapingBurstSize`<sup>Required</sup> <a name="ShapingBurstSize" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSize"></a>

```go
func ShapingBurstSize() *f64
```

- *Type:* *f64

---

##### `ShapingEnabled`<sup>Required</sup> <a name="ShapingEnabled" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabled"></a>

```go
func ShapingEnabled() interface{}
```

- *Type:* interface{}

---

##### `ShapingPeakBandwidth`<sup>Required</sup> <a name="ShapingPeakBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidth"></a>

```go
func ShapingPeakBandwidth() *f64
```

- *Type:* *f64

---

##### `StandbyNics`<sup>Required</sup> <a name="StandbyNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNics"></a>

```go
func StandbyNics() *[]*string
```

- *Type:* *[]*string

---

##### `TeamingPolicy`<sup>Required</sup> <a name="TeamingPolicy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicy"></a>

```go
func TeamingPolicy() *string
```

- *Type:* *string

---

##### `VirtualSwitchName`<sup>Required</sup> <a name="VirtualSwitchName" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchName"></a>

```go
func VirtualSwitchName() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanId"></a>

```go
func VlanId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HostPortGroupConfig <a name="HostPortGroupConfig" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/hostportgroup"

&hostportgroup.HostPortGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	HostSystemId: *string,
	Name: *string,
	VirtualSwitchName: *string,
	ActiveNics: *[]*string,
	AllowForgedTransmits: interface{},
	AllowMacChanges: interface{},
	AllowPromiscuous: interface{},
	CheckBeacon: interface{},
	Failback: interface{},
	Id: *string,
	NotifySwitches: interface{},
	ShapingAverageBandwidth: *f64,
	ShapingBurstSize: *f64,
	ShapingEnabled: interface{},
	ShapingPeakBandwidth: *f64,
	StandbyNics: *[]*string,
	TeamingPolicy: *string,
	VlanId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.hostSystemId">HostSystemId</a></code> | <code>*string</code> | The managed object ID of the host to set the virtual switch up on. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.name">Name</a></code> | <code>*string</code> | The name of the port group. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.virtualSwitchName">VirtualSwitchName</a></code> | <code>*string</code> | The name of the virtual switch to bind this port group to. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.activeNics">ActiveNics</a></code> | <code>*[]*string</code> | List of active network adapters used for load balancing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowForgedTransmits">AllowForgedTransmits</a></code> | <code>interface{}</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowMacChanges">AllowMacChanges</a></code> | <code>interface{}</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowPromiscuous">AllowPromiscuous</a></code> | <code>interface{}</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.checkBeacon">CheckBeacon</a></code> | <code>interface{}</code> | Enable beacon probing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.failback">Failback</a></code> | <code>interface{}</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#id HostPortGroup#id}. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.notifySwitches">NotifySwitches</a></code> | <code>interface{}</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingAverageBandwidth">ShapingAverageBandwidth</a></code> | <code>*f64</code> | The average bandwidth in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingBurstSize">ShapingBurstSize</a></code> | <code>*f64</code> | The maximum burst size allowed in bytes if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingEnabled">ShapingEnabled</a></code> | <code>interface{}</code> | Enable traffic shaping on this virtual switch or port group. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingPeakBandwidth">ShapingPeakBandwidth</a></code> | <code>*f64</code> | The peak bandwidth during bursts in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.standbyNics">StandbyNics</a></code> | <code>*[]*string</code> | List of standby network adapters used for failover. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.teamingPolicy">TeamingPolicy</a></code> | <code>*string</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.vlanId">VlanId</a></code> | <code>*f64</code> | The VLAN ID/trunk mode for this port group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.hostSystemId"></a>

```go
HostSystemId *string
```

- *Type:* *string

The managed object ID of the host to set the virtual switch up on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#host_system_id HostPortGroup#host_system_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#name HostPortGroup#name}

---

##### `VirtualSwitchName`<sup>Required</sup> <a name="VirtualSwitchName" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.virtualSwitchName"></a>

```go
VirtualSwitchName *string
```

- *Type:* *string

The name of the virtual switch to bind this port group to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#virtual_switch_name HostPortGroup#virtual_switch_name}

---

##### `ActiveNics`<sup>Optional</sup> <a name="ActiveNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.activeNics"></a>

```go
ActiveNics *[]*string
```

- *Type:* *[]*string

List of active network adapters used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#active_nics HostPortGroup#active_nics}

---

##### `AllowForgedTransmits`<sup>Optional</sup> <a name="AllowForgedTransmits" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowForgedTransmits"></a>

```go
AllowForgedTransmits interface{}
```

- *Type:* interface{}

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#allow_forged_transmits HostPortGroup#allow_forged_transmits}

---

##### `AllowMacChanges`<sup>Optional</sup> <a name="AllowMacChanges" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowMacChanges"></a>

```go
AllowMacChanges interface{}
```

- *Type:* interface{}

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#allow_mac_changes HostPortGroup#allow_mac_changes}

---

##### `AllowPromiscuous`<sup>Optional</sup> <a name="AllowPromiscuous" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowPromiscuous"></a>

```go
AllowPromiscuous interface{}
```

- *Type:* interface{}

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#allow_promiscuous HostPortGroup#allow_promiscuous}

---

##### `CheckBeacon`<sup>Optional</sup> <a name="CheckBeacon" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.checkBeacon"></a>

```go
CheckBeacon interface{}
```

- *Type:* interface{}

Enable beacon probing.

Requires that the vSwitch has been configured to use a beacon. If disabled, link status is used only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#check_beacon HostPortGroup#check_beacon}

---

##### `Failback`<sup>Optional</sup> <a name="Failback" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.failback"></a>

```go
Failback interface{}
```

- *Type:* interface{}

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#failback HostPortGroup#failback}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#id HostPortGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotifySwitches`<sup>Optional</sup> <a name="NotifySwitches" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.notifySwitches"></a>

```go
NotifySwitches interface{}
```

- *Type:* interface{}

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#notify_switches HostPortGroup#notify_switches}

---

##### `ShapingAverageBandwidth`<sup>Optional</sup> <a name="ShapingAverageBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingAverageBandwidth"></a>

```go
ShapingAverageBandwidth *f64
```

- *Type:* *f64

The average bandwidth in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#shaping_average_bandwidth HostPortGroup#shaping_average_bandwidth}

---

##### `ShapingBurstSize`<sup>Optional</sup> <a name="ShapingBurstSize" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingBurstSize"></a>

```go
ShapingBurstSize *f64
```

- *Type:* *f64

The maximum burst size allowed in bytes if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#shaping_burst_size HostPortGroup#shaping_burst_size}

---

##### `ShapingEnabled`<sup>Optional</sup> <a name="ShapingEnabled" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingEnabled"></a>

```go
ShapingEnabled interface{}
```

- *Type:* interface{}

Enable traffic shaping on this virtual switch or port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#shaping_enabled HostPortGroup#shaping_enabled}

---

##### `ShapingPeakBandwidth`<sup>Optional</sup> <a name="ShapingPeakBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingPeakBandwidth"></a>

```go
ShapingPeakBandwidth *f64
```

- *Type:* *f64

The peak bandwidth during bursts in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#shaping_peak_bandwidth HostPortGroup#shaping_peak_bandwidth}

---

##### `StandbyNics`<sup>Optional</sup> <a name="StandbyNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.standbyNics"></a>

```go
StandbyNics *[]*string
```

- *Type:* *[]*string

List of standby network adapters used for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#standby_nics HostPortGroup#standby_nics}

---

##### `TeamingPolicy`<sup>Optional</sup> <a name="TeamingPolicy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.teamingPolicy"></a>

```go
TeamingPolicy *string
```

- *Type:* *string

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#teaming_policy HostPortGroup#teaming_policy}

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.vlanId"></a>

```go
VlanId *f64
```

- *Type:* *f64

The VLAN ID/trunk mode for this port group.

An ID of 0 denotes no tagging, an ID of 1-4094 tags with the specific ID, and an ID of 4095 enables trunk mode, allowing the guest to manage its own tagging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/host_port_group#vlan_id HostPortGroup#vlan_id}

---

### HostPortGroupPorts <a name="HostPortGroupPorts" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/hostportgroup"

&hostportgroup.HostPortGroupPorts {

}
```


## Classes <a name="Classes" id="Classes"></a>

### HostPortGroupPortsList <a name="HostPortGroupPortsList" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/hostportgroup"

hostportgroup.NewHostPortGroupPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HostPortGroupPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.get"></a>

```go
func Get(index *f64) HostPortGroupPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### HostPortGroupPortsOutputReference <a name="HostPortGroupPortsOutputReference" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/hostportgroup"

hostportgroup.NewHostPortGroupPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HostPortGroupPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.macAddresses">MacAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts">HostPortGroupPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MacAddresses`<sup>Required</sup> <a name="MacAddresses" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.macAddresses"></a>

```go
func MacAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() HostPortGroupPorts
```

- *Type:* <a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts">HostPortGroupPorts</a>

---



