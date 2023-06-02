# `vsphere_distributed_port_group`

Refer to the Terraform Registory for docs: [`vsphere_distributed_port_group`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group).

# `distributedPortGroup` Submodule <a name="`distributedPortGroup` Submodule" id="@cdktf/provider-vsphere.distributedPortGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DistributedPortGroup <a name="DistributedPortGroup" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group vsphere_distributed_port_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v4/distributedportgroup"

distributedportgroup.NewDistributedPortGroup(scope Construct, id *string, config DistributedPortGroupConfig) DistributedPortGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig">DistributedPortGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig">DistributedPortGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.putVlanRange">PutVlanRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetActiveUplinks">ResetActiveUplinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowForgedTransmits">ResetAllowForgedTransmits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowMacChanges">ResetAllowMacChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowPromiscuous">ResetAllowPromiscuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAutoExpand">ResetAutoExpand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetBlockAllPorts">ResetBlockAllPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetBlockOverrideAllowed">ResetBlockOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetCheckBeacon">ResetCheckBeacon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetDirectpathGen2Allowed">ResetDirectpathGen2Allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingAverageBandwidth">ResetEgressShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingBurstSize">ResetEgressShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingEnabled">ResetEgressShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingPeakBandwidth">ResetEgressShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetFailback">ResetFailback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingAverageBandwidth">ResetIngressShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingBurstSize">ResetIngressShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingEnabled">ResetIngressShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingPeakBandwidth">ResetIngressShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLacpEnabled">ResetLacpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLacpMode">ResetLacpMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLivePortMovingAllowed">ResetLivePortMovingAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetflowEnabled">ResetNetflowEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetflowOverrideAllowed">ResetNetflowOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetworkResourcePoolKey">ResetNetworkResourcePoolKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetworkResourcePoolOverrideAllowed">ResetNetworkResourcePoolOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNotifySwitches">ResetNotifySwitches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNumberOfPorts">ResetNumberOfPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortConfigResetAtDisconnect">ResetPortConfigResetAtDisconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortNameFormat">ResetPortNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortPrivateSecondaryVlanId">ResetPortPrivateSecondaryVlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetSecurityPolicyOverrideAllowed">ResetSecurityPolicyOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetShapingOverrideAllowed">ResetShapingOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetStandbyUplinks">ResetStandbyUplinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTeamingPolicy">ResetTeamingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTrafficFilterOverrideAllowed">ResetTrafficFilterOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTxUplink">ResetTxUplink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetUplinkTeamingOverrideAllowed">ResetUplinkTeamingOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanId">ResetVlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanOverrideAllowed">ResetVlanOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanRange">ResetVlanRange</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutVlanRange` <a name="PutVlanRange" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.putVlanRange"></a>

```go
func PutVlanRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.putVlanRange.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActiveUplinks` <a name="ResetActiveUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetActiveUplinks"></a>

```go
func ResetActiveUplinks()
```

##### `ResetAllowForgedTransmits` <a name="ResetAllowForgedTransmits" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowForgedTransmits"></a>

```go
func ResetAllowForgedTransmits()
```

##### `ResetAllowMacChanges` <a name="ResetAllowMacChanges" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowMacChanges"></a>

```go
func ResetAllowMacChanges()
```

##### `ResetAllowPromiscuous` <a name="ResetAllowPromiscuous" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowPromiscuous"></a>

```go
func ResetAllowPromiscuous()
```

##### `ResetAutoExpand` <a name="ResetAutoExpand" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAutoExpand"></a>

```go
func ResetAutoExpand()
```

##### `ResetBlockAllPorts` <a name="ResetBlockAllPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetBlockAllPorts"></a>

```go
func ResetBlockAllPorts()
```

##### `ResetBlockOverrideAllowed` <a name="ResetBlockOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetBlockOverrideAllowed"></a>

```go
func ResetBlockOverrideAllowed()
```

##### `ResetCheckBeacon` <a name="ResetCheckBeacon" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetCheckBeacon"></a>

```go
func ResetCheckBeacon()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetCustomAttributes"></a>

```go
func ResetCustomAttributes()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDirectpathGen2Allowed` <a name="ResetDirectpathGen2Allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetDirectpathGen2Allowed"></a>

```go
func ResetDirectpathGen2Allowed()
```

##### `ResetEgressShapingAverageBandwidth` <a name="ResetEgressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingAverageBandwidth"></a>

```go
func ResetEgressShapingAverageBandwidth()
```

##### `ResetEgressShapingBurstSize` <a name="ResetEgressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingBurstSize"></a>

```go
func ResetEgressShapingBurstSize()
```

##### `ResetEgressShapingEnabled` <a name="ResetEgressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingEnabled"></a>

```go
func ResetEgressShapingEnabled()
```

##### `ResetEgressShapingPeakBandwidth` <a name="ResetEgressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingPeakBandwidth"></a>

```go
func ResetEgressShapingPeakBandwidth()
```

##### `ResetFailback` <a name="ResetFailback" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetFailback"></a>

```go
func ResetFailback()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetIngressShapingAverageBandwidth` <a name="ResetIngressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingAverageBandwidth"></a>

```go
func ResetIngressShapingAverageBandwidth()
```

##### `ResetIngressShapingBurstSize` <a name="ResetIngressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingBurstSize"></a>

```go
func ResetIngressShapingBurstSize()
```

##### `ResetIngressShapingEnabled` <a name="ResetIngressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingEnabled"></a>

```go
func ResetIngressShapingEnabled()
```

##### `ResetIngressShapingPeakBandwidth` <a name="ResetIngressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingPeakBandwidth"></a>

```go
func ResetIngressShapingPeakBandwidth()
```

##### `ResetLacpEnabled` <a name="ResetLacpEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLacpEnabled"></a>

```go
func ResetLacpEnabled()
```

##### `ResetLacpMode` <a name="ResetLacpMode" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLacpMode"></a>

```go
func ResetLacpMode()
```

##### `ResetLivePortMovingAllowed` <a name="ResetLivePortMovingAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLivePortMovingAllowed"></a>

```go
func ResetLivePortMovingAllowed()
```

##### `ResetNetflowEnabled` <a name="ResetNetflowEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetflowEnabled"></a>

```go
func ResetNetflowEnabled()
```

##### `ResetNetflowOverrideAllowed` <a name="ResetNetflowOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetflowOverrideAllowed"></a>

```go
func ResetNetflowOverrideAllowed()
```

##### `ResetNetworkResourcePoolKey` <a name="ResetNetworkResourcePoolKey" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetworkResourcePoolKey"></a>

```go
func ResetNetworkResourcePoolKey()
```

##### `ResetNetworkResourcePoolOverrideAllowed` <a name="ResetNetworkResourcePoolOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetworkResourcePoolOverrideAllowed"></a>

```go
func ResetNetworkResourcePoolOverrideAllowed()
```

##### `ResetNotifySwitches` <a name="ResetNotifySwitches" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNotifySwitches"></a>

```go
func ResetNotifySwitches()
```

##### `ResetNumberOfPorts` <a name="ResetNumberOfPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNumberOfPorts"></a>

```go
func ResetNumberOfPorts()
```

##### `ResetPortConfigResetAtDisconnect` <a name="ResetPortConfigResetAtDisconnect" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortConfigResetAtDisconnect"></a>

```go
func ResetPortConfigResetAtDisconnect()
```

##### `ResetPortNameFormat` <a name="ResetPortNameFormat" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortNameFormat"></a>

```go
func ResetPortNameFormat()
```

##### `ResetPortPrivateSecondaryVlanId` <a name="ResetPortPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortPrivateSecondaryVlanId"></a>

```go
func ResetPortPrivateSecondaryVlanId()
```

##### `ResetSecurityPolicyOverrideAllowed` <a name="ResetSecurityPolicyOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetSecurityPolicyOverrideAllowed"></a>

```go
func ResetSecurityPolicyOverrideAllowed()
```

##### `ResetShapingOverrideAllowed` <a name="ResetShapingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetShapingOverrideAllowed"></a>

```go
func ResetShapingOverrideAllowed()
```

##### `ResetStandbyUplinks` <a name="ResetStandbyUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetStandbyUplinks"></a>

```go
func ResetStandbyUplinks()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTeamingPolicy` <a name="ResetTeamingPolicy" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTeamingPolicy"></a>

```go
func ResetTeamingPolicy()
```

##### `ResetTrafficFilterOverrideAllowed` <a name="ResetTrafficFilterOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTrafficFilterOverrideAllowed"></a>

```go
func ResetTrafficFilterOverrideAllowed()
```

##### `ResetTxUplink` <a name="ResetTxUplink" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTxUplink"></a>

```go
func ResetTxUplink()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetType"></a>

```go
func ResetType()
```

##### `ResetUplinkTeamingOverrideAllowed` <a name="ResetUplinkTeamingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetUplinkTeamingOverrideAllowed"></a>

```go
func ResetUplinkTeamingOverrideAllowed()
```

##### `ResetVlanId` <a name="ResetVlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanId"></a>

```go
func ResetVlanId()
```

##### `ResetVlanOverrideAllowed` <a name="ResetVlanOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanOverrideAllowed"></a>

```go
func ResetVlanOverrideAllowed()
```

##### `ResetVlanRange` <a name="ResetVlanRange" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanRange"></a>

```go
func ResetVlanRange()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v4/distributedportgroup"

distributedportgroup.DistributedPortGroup_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v4/distributedportgroup"

distributedportgroup.DistributedPortGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v4/distributedportgroup"

distributedportgroup.DistributedPortGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.configVersion">ConfigVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanRange">VlanRange</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList">DistributedPortGroupVlanRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.activeUplinksInput">ActiveUplinksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowForgedTransmitsInput">AllowForgedTransmitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowMacChangesInput">AllowMacChangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowPromiscuousInput">AllowPromiscuousInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.autoExpandInput">AutoExpandInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockAllPortsInput">BlockAllPortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockOverrideAllowedInput">BlockOverrideAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.checkBeaconInput">CheckBeaconInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.customAttributesInput">CustomAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.directpathGen2AllowedInput">DirectpathGen2AllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.distributedVirtualSwitchUuidInput">DistributedVirtualSwitchUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingAverageBandwidthInput">EgressShapingAverageBandwidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingBurstSizeInput">EgressShapingBurstSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingEnabledInput">EgressShapingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingPeakBandwidthInput">EgressShapingPeakBandwidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.failbackInput">FailbackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingAverageBandwidthInput">IngressShapingAverageBandwidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingBurstSizeInput">IngressShapingBurstSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingEnabledInput">IngressShapingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingPeakBandwidthInput">IngressShapingPeakBandwidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpEnabledInput">LacpEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpModeInput">LacpModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.livePortMovingAllowedInput">LivePortMovingAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowEnabledInput">NetflowEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowOverrideAllowedInput">NetflowOverrideAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolKeyInput">NetworkResourcePoolKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolOverrideAllowedInput">NetworkResourcePoolOverrideAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.notifySwitchesInput">NotifySwitchesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.numberOfPortsInput">NumberOfPortsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portConfigResetAtDisconnectInput">PortConfigResetAtDisconnectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portNameFormatInput">PortNameFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portPrivateSecondaryVlanIdInput">PortPrivateSecondaryVlanIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.securityPolicyOverrideAllowedInput">SecurityPolicyOverrideAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.shapingOverrideAllowedInput">ShapingOverrideAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.standbyUplinksInput">StandbyUplinksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.teamingPolicyInput">TeamingPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.trafficFilterOverrideAllowedInput">TrafficFilterOverrideAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.txUplinkInput">TxUplinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.uplinkTeamingOverrideAllowedInput">UplinkTeamingOverrideAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanIdInput">VlanIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanOverrideAllowedInput">VlanOverrideAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanRangeInput">VlanRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.activeUplinks">ActiveUplinks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowForgedTransmits">AllowForgedTransmits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowMacChanges">AllowMacChanges</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowPromiscuous">AllowPromiscuous</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.autoExpand">AutoExpand</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockAllPorts">BlockAllPorts</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockOverrideAllowed">BlockOverrideAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.checkBeacon">CheckBeacon</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.directpathGen2Allowed">DirectpathGen2Allowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.distributedVirtualSwitchUuid">DistributedVirtualSwitchUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingAverageBandwidth">EgressShapingAverageBandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingBurstSize">EgressShapingBurstSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingEnabled">EgressShapingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingPeakBandwidth">EgressShapingPeakBandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.failback">Failback</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingAverageBandwidth">IngressShapingAverageBandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingBurstSize">IngressShapingBurstSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingEnabled">IngressShapingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingPeakBandwidth">IngressShapingPeakBandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpEnabled">LacpEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpMode">LacpMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.livePortMovingAllowed">LivePortMovingAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowEnabled">NetflowEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowOverrideAllowed">NetflowOverrideAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolKey">NetworkResourcePoolKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolOverrideAllowed">NetworkResourcePoolOverrideAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.notifySwitches">NotifySwitches</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.numberOfPorts">NumberOfPorts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portConfigResetAtDisconnect">PortConfigResetAtDisconnect</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portNameFormat">PortNameFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portPrivateSecondaryVlanId">PortPrivateSecondaryVlanId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.securityPolicyOverrideAllowed">SecurityPolicyOverrideAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.shapingOverrideAllowed">ShapingOverrideAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.standbyUplinks">StandbyUplinks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.teamingPolicy">TeamingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.trafficFilterOverrideAllowed">TrafficFilterOverrideAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.txUplink">TxUplink</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.uplinkTeamingOverrideAllowed">UplinkTeamingOverrideAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanId">VlanId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanOverrideAllowed">VlanOverrideAllowed</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigVersion`<sup>Required</sup> <a name="ConfigVersion" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.configVersion"></a>

```go
func ConfigVersion() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `VlanRange`<sup>Required</sup> <a name="VlanRange" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanRange"></a>

```go
func VlanRange() DistributedPortGroupVlanRangeList
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList">DistributedPortGroupVlanRangeList</a>

---

##### `ActiveUplinksInput`<sup>Optional</sup> <a name="ActiveUplinksInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.activeUplinksInput"></a>

```go
func ActiveUplinksInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowForgedTransmitsInput`<sup>Optional</sup> <a name="AllowForgedTransmitsInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowForgedTransmitsInput"></a>

```go
func AllowForgedTransmitsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowMacChangesInput`<sup>Optional</sup> <a name="AllowMacChangesInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowMacChangesInput"></a>

```go
func AllowMacChangesInput() interface{}
```

- *Type:* interface{}

---

##### `AllowPromiscuousInput`<sup>Optional</sup> <a name="AllowPromiscuousInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowPromiscuousInput"></a>

```go
func AllowPromiscuousInput() interface{}
```

- *Type:* interface{}

---

##### `AutoExpandInput`<sup>Optional</sup> <a name="AutoExpandInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.autoExpandInput"></a>

```go
func AutoExpandInput() interface{}
```

- *Type:* interface{}

---

##### `BlockAllPortsInput`<sup>Optional</sup> <a name="BlockAllPortsInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockAllPortsInput"></a>

```go
func BlockAllPortsInput() interface{}
```

- *Type:* interface{}

---

##### `BlockOverrideAllowedInput`<sup>Optional</sup> <a name="BlockOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockOverrideAllowedInput"></a>

```go
func BlockOverrideAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `CheckBeaconInput`<sup>Optional</sup> <a name="CheckBeaconInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.checkBeaconInput"></a>

```go
func CheckBeaconInput() interface{}
```

- *Type:* interface{}

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.customAttributesInput"></a>

```go
func CustomAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DirectpathGen2AllowedInput`<sup>Optional</sup> <a name="DirectpathGen2AllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.directpathGen2AllowedInput"></a>

```go
func DirectpathGen2AllowedInput() interface{}
```

- *Type:* interface{}

---

##### `DistributedVirtualSwitchUuidInput`<sup>Optional</sup> <a name="DistributedVirtualSwitchUuidInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.distributedVirtualSwitchUuidInput"></a>

```go
func DistributedVirtualSwitchUuidInput() *string
```

- *Type:* *string

---

##### `EgressShapingAverageBandwidthInput`<sup>Optional</sup> <a name="EgressShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingAverageBandwidthInput"></a>

```go
func EgressShapingAverageBandwidthInput() *f64
```

- *Type:* *f64

---

##### `EgressShapingBurstSizeInput`<sup>Optional</sup> <a name="EgressShapingBurstSizeInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingBurstSizeInput"></a>

```go
func EgressShapingBurstSizeInput() *f64
```

- *Type:* *f64

---

##### `EgressShapingEnabledInput`<sup>Optional</sup> <a name="EgressShapingEnabledInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingEnabledInput"></a>

```go
func EgressShapingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EgressShapingPeakBandwidthInput`<sup>Optional</sup> <a name="EgressShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingPeakBandwidthInput"></a>

```go
func EgressShapingPeakBandwidthInput() *f64
```

- *Type:* *f64

---

##### `FailbackInput`<sup>Optional</sup> <a name="FailbackInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.failbackInput"></a>

```go
func FailbackInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngressShapingAverageBandwidthInput`<sup>Optional</sup> <a name="IngressShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingAverageBandwidthInput"></a>

```go
func IngressShapingAverageBandwidthInput() *f64
```

- *Type:* *f64

---

##### `IngressShapingBurstSizeInput`<sup>Optional</sup> <a name="IngressShapingBurstSizeInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingBurstSizeInput"></a>

```go
func IngressShapingBurstSizeInput() *f64
```

- *Type:* *f64

---

##### `IngressShapingEnabledInput`<sup>Optional</sup> <a name="IngressShapingEnabledInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingEnabledInput"></a>

```go
func IngressShapingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IngressShapingPeakBandwidthInput`<sup>Optional</sup> <a name="IngressShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingPeakBandwidthInput"></a>

```go
func IngressShapingPeakBandwidthInput() *f64
```

- *Type:* *f64

---

##### `LacpEnabledInput`<sup>Optional</sup> <a name="LacpEnabledInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpEnabledInput"></a>

```go
func LacpEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LacpModeInput`<sup>Optional</sup> <a name="LacpModeInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpModeInput"></a>

```go
func LacpModeInput() *string
```

- *Type:* *string

---

##### `LivePortMovingAllowedInput`<sup>Optional</sup> <a name="LivePortMovingAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.livePortMovingAllowedInput"></a>

```go
func LivePortMovingAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetflowEnabledInput`<sup>Optional</sup> <a name="NetflowEnabledInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowEnabledInput"></a>

```go
func NetflowEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NetflowOverrideAllowedInput`<sup>Optional</sup> <a name="NetflowOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowOverrideAllowedInput"></a>

```go
func NetflowOverrideAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkResourcePoolKeyInput`<sup>Optional</sup> <a name="NetworkResourcePoolKeyInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolKeyInput"></a>

```go
func NetworkResourcePoolKeyInput() *string
```

- *Type:* *string

---

##### `NetworkResourcePoolOverrideAllowedInput`<sup>Optional</sup> <a name="NetworkResourcePoolOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolOverrideAllowedInput"></a>

```go
func NetworkResourcePoolOverrideAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `NotifySwitchesInput`<sup>Optional</sup> <a name="NotifySwitchesInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.notifySwitchesInput"></a>

```go
func NotifySwitchesInput() interface{}
```

- *Type:* interface{}

---

##### `NumberOfPortsInput`<sup>Optional</sup> <a name="NumberOfPortsInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.numberOfPortsInput"></a>

```go
func NumberOfPortsInput() *f64
```

- *Type:* *f64

---

##### `PortConfigResetAtDisconnectInput`<sup>Optional</sup> <a name="PortConfigResetAtDisconnectInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portConfigResetAtDisconnectInput"></a>

```go
func PortConfigResetAtDisconnectInput() interface{}
```

- *Type:* interface{}

---

##### `PortNameFormatInput`<sup>Optional</sup> <a name="PortNameFormatInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portNameFormatInput"></a>

```go
func PortNameFormatInput() *string
```

- *Type:* *string

---

##### `PortPrivateSecondaryVlanIdInput`<sup>Optional</sup> <a name="PortPrivateSecondaryVlanIdInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portPrivateSecondaryVlanIdInput"></a>

```go
func PortPrivateSecondaryVlanIdInput() *f64
```

- *Type:* *f64

---

##### `SecurityPolicyOverrideAllowedInput`<sup>Optional</sup> <a name="SecurityPolicyOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.securityPolicyOverrideAllowedInput"></a>

```go
func SecurityPolicyOverrideAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `ShapingOverrideAllowedInput`<sup>Optional</sup> <a name="ShapingOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.shapingOverrideAllowedInput"></a>

```go
func ShapingOverrideAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `StandbyUplinksInput`<sup>Optional</sup> <a name="StandbyUplinksInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.standbyUplinksInput"></a>

```go
func StandbyUplinksInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TeamingPolicyInput`<sup>Optional</sup> <a name="TeamingPolicyInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.teamingPolicyInput"></a>

```go
func TeamingPolicyInput() *string
```

- *Type:* *string

---

##### `TrafficFilterOverrideAllowedInput`<sup>Optional</sup> <a name="TrafficFilterOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.trafficFilterOverrideAllowedInput"></a>

```go
func TrafficFilterOverrideAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `TxUplinkInput`<sup>Optional</sup> <a name="TxUplinkInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.txUplinkInput"></a>

```go
func TxUplinkInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UplinkTeamingOverrideAllowedInput`<sup>Optional</sup> <a name="UplinkTeamingOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.uplinkTeamingOverrideAllowedInput"></a>

```go
func UplinkTeamingOverrideAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanIdInput"></a>

```go
func VlanIdInput() *f64
```

- *Type:* *f64

---

##### `VlanOverrideAllowedInput`<sup>Optional</sup> <a name="VlanOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanOverrideAllowedInput"></a>

```go
func VlanOverrideAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `VlanRangeInput`<sup>Optional</sup> <a name="VlanRangeInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanRangeInput"></a>

```go
func VlanRangeInput() interface{}
```

- *Type:* interface{}

---

##### `ActiveUplinks`<sup>Required</sup> <a name="ActiveUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.activeUplinks"></a>

```go
func ActiveUplinks() *[]*string
```

- *Type:* *[]*string

---

##### `AllowForgedTransmits`<sup>Required</sup> <a name="AllowForgedTransmits" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowForgedTransmits"></a>

```go
func AllowForgedTransmits() interface{}
```

- *Type:* interface{}

---

##### `AllowMacChanges`<sup>Required</sup> <a name="AllowMacChanges" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowMacChanges"></a>

```go
func AllowMacChanges() interface{}
```

- *Type:* interface{}

---

##### `AllowPromiscuous`<sup>Required</sup> <a name="AllowPromiscuous" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowPromiscuous"></a>

```go
func AllowPromiscuous() interface{}
```

- *Type:* interface{}

---

##### `AutoExpand`<sup>Required</sup> <a name="AutoExpand" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.autoExpand"></a>

```go
func AutoExpand() interface{}
```

- *Type:* interface{}

---

##### `BlockAllPorts`<sup>Required</sup> <a name="BlockAllPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockAllPorts"></a>

```go
func BlockAllPorts() interface{}
```

- *Type:* interface{}

---

##### `BlockOverrideAllowed`<sup>Required</sup> <a name="BlockOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockOverrideAllowed"></a>

```go
func BlockOverrideAllowed() interface{}
```

- *Type:* interface{}

---

##### `CheckBeacon`<sup>Required</sup> <a name="CheckBeacon" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.checkBeacon"></a>

```go
func CheckBeacon() interface{}
```

- *Type:* interface{}

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.customAttributes"></a>

```go
func CustomAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DirectpathGen2Allowed`<sup>Required</sup> <a name="DirectpathGen2Allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.directpathGen2Allowed"></a>

```go
func DirectpathGen2Allowed() interface{}
```

- *Type:* interface{}

---

##### `DistributedVirtualSwitchUuid`<sup>Required</sup> <a name="DistributedVirtualSwitchUuid" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.distributedVirtualSwitchUuid"></a>

```go
func DistributedVirtualSwitchUuid() *string
```

- *Type:* *string

---

##### `EgressShapingAverageBandwidth`<sup>Required</sup> <a name="EgressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingAverageBandwidth"></a>

```go
func EgressShapingAverageBandwidth() *f64
```

- *Type:* *f64

---

##### `EgressShapingBurstSize`<sup>Required</sup> <a name="EgressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingBurstSize"></a>

```go
func EgressShapingBurstSize() *f64
```

- *Type:* *f64

---

##### `EgressShapingEnabled`<sup>Required</sup> <a name="EgressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingEnabled"></a>

```go
func EgressShapingEnabled() interface{}
```

- *Type:* interface{}

---

##### `EgressShapingPeakBandwidth`<sup>Required</sup> <a name="EgressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingPeakBandwidth"></a>

```go
func EgressShapingPeakBandwidth() *f64
```

- *Type:* *f64

---

##### `Failback`<sup>Required</sup> <a name="Failback" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.failback"></a>

```go
func Failback() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IngressShapingAverageBandwidth`<sup>Required</sup> <a name="IngressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingAverageBandwidth"></a>

```go
func IngressShapingAverageBandwidth() *f64
```

- *Type:* *f64

---

##### `IngressShapingBurstSize`<sup>Required</sup> <a name="IngressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingBurstSize"></a>

```go
func IngressShapingBurstSize() *f64
```

- *Type:* *f64

---

##### `IngressShapingEnabled`<sup>Required</sup> <a name="IngressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingEnabled"></a>

```go
func IngressShapingEnabled() interface{}
```

- *Type:* interface{}

---

##### `IngressShapingPeakBandwidth`<sup>Required</sup> <a name="IngressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingPeakBandwidth"></a>

```go
func IngressShapingPeakBandwidth() *f64
```

- *Type:* *f64

---

##### `LacpEnabled`<sup>Required</sup> <a name="LacpEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpEnabled"></a>

```go
func LacpEnabled() interface{}
```

- *Type:* interface{}

---

##### `LacpMode`<sup>Required</sup> <a name="LacpMode" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpMode"></a>

```go
func LacpMode() *string
```

- *Type:* *string

---

##### `LivePortMovingAllowed`<sup>Required</sup> <a name="LivePortMovingAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.livePortMovingAllowed"></a>

```go
func LivePortMovingAllowed() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetflowEnabled`<sup>Required</sup> <a name="NetflowEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowEnabled"></a>

```go
func NetflowEnabled() interface{}
```

- *Type:* interface{}

---

##### `NetflowOverrideAllowed`<sup>Required</sup> <a name="NetflowOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowOverrideAllowed"></a>

```go
func NetflowOverrideAllowed() interface{}
```

- *Type:* interface{}

---

##### `NetworkResourcePoolKey`<sup>Required</sup> <a name="NetworkResourcePoolKey" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolKey"></a>

```go
func NetworkResourcePoolKey() *string
```

- *Type:* *string

---

##### `NetworkResourcePoolOverrideAllowed`<sup>Required</sup> <a name="NetworkResourcePoolOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolOverrideAllowed"></a>

```go
func NetworkResourcePoolOverrideAllowed() interface{}
```

- *Type:* interface{}

---

##### `NotifySwitches`<sup>Required</sup> <a name="NotifySwitches" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.notifySwitches"></a>

```go
func NotifySwitches() interface{}
```

- *Type:* interface{}

---

##### `NumberOfPorts`<sup>Required</sup> <a name="NumberOfPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.numberOfPorts"></a>

```go
func NumberOfPorts() *f64
```

- *Type:* *f64

---

##### `PortConfigResetAtDisconnect`<sup>Required</sup> <a name="PortConfigResetAtDisconnect" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portConfigResetAtDisconnect"></a>

```go
func PortConfigResetAtDisconnect() interface{}
```

- *Type:* interface{}

---

##### `PortNameFormat`<sup>Required</sup> <a name="PortNameFormat" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portNameFormat"></a>

```go
func PortNameFormat() *string
```

- *Type:* *string

---

##### `PortPrivateSecondaryVlanId`<sup>Required</sup> <a name="PortPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portPrivateSecondaryVlanId"></a>

```go
func PortPrivateSecondaryVlanId() *f64
```

- *Type:* *f64

---

##### `SecurityPolicyOverrideAllowed`<sup>Required</sup> <a name="SecurityPolicyOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.securityPolicyOverrideAllowed"></a>

```go
func SecurityPolicyOverrideAllowed() interface{}
```

- *Type:* interface{}

---

##### `ShapingOverrideAllowed`<sup>Required</sup> <a name="ShapingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.shapingOverrideAllowed"></a>

```go
func ShapingOverrideAllowed() interface{}
```

- *Type:* interface{}

---

##### `StandbyUplinks`<sup>Required</sup> <a name="StandbyUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.standbyUplinks"></a>

```go
func StandbyUplinks() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `TeamingPolicy`<sup>Required</sup> <a name="TeamingPolicy" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.teamingPolicy"></a>

```go
func TeamingPolicy() *string
```

- *Type:* *string

---

##### `TrafficFilterOverrideAllowed`<sup>Required</sup> <a name="TrafficFilterOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.trafficFilterOverrideAllowed"></a>

```go
func TrafficFilterOverrideAllowed() interface{}
```

- *Type:* interface{}

---

##### `TxUplink`<sup>Required</sup> <a name="TxUplink" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.txUplink"></a>

```go
func TxUplink() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UplinkTeamingOverrideAllowed`<sup>Required</sup> <a name="UplinkTeamingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.uplinkTeamingOverrideAllowed"></a>

```go
func UplinkTeamingOverrideAllowed() interface{}
```

- *Type:* interface{}

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanId"></a>

```go
func VlanId() *f64
```

- *Type:* *f64

---

##### `VlanOverrideAllowed`<sup>Required</sup> <a name="VlanOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanOverrideAllowed"></a>

```go
func VlanOverrideAllowed() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DistributedPortGroupConfig <a name="DistributedPortGroupConfig" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v4/distributedportgroup"

&distributedportgroup.DistributedPortGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DistributedVirtualSwitchUuid: *string,
	Name: *string,
	ActiveUplinks: *[]*string,
	AllowForgedTransmits: interface{},
	AllowMacChanges: interface{},
	AllowPromiscuous: interface{},
	AutoExpand: interface{},
	BlockAllPorts: interface{},
	BlockOverrideAllowed: interface{},
	CheckBeacon: interface{},
	CustomAttributes: *map[string]*string,
	Description: *string,
	DirectpathGen2Allowed: interface{},
	EgressShapingAverageBandwidth: *f64,
	EgressShapingBurstSize: *f64,
	EgressShapingEnabled: interface{},
	EgressShapingPeakBandwidth: *f64,
	Failback: interface{},
	Id: *string,
	IngressShapingAverageBandwidth: *f64,
	IngressShapingBurstSize: *f64,
	IngressShapingEnabled: interface{},
	IngressShapingPeakBandwidth: *f64,
	LacpEnabled: interface{},
	LacpMode: *string,
	LivePortMovingAllowed: interface{},
	NetflowEnabled: interface{},
	NetflowOverrideAllowed: interface{},
	NetworkResourcePoolKey: *string,
	NetworkResourcePoolOverrideAllowed: interface{},
	NotifySwitches: interface{},
	NumberOfPorts: *f64,
	PortConfigResetAtDisconnect: interface{},
	PortNameFormat: *string,
	PortPrivateSecondaryVlanId: *f64,
	SecurityPolicyOverrideAllowed: interface{},
	ShapingOverrideAllowed: interface{},
	StandbyUplinks: *[]*string,
	Tags: *[]*string,
	TeamingPolicy: *string,
	TrafficFilterOverrideAllowed: interface{},
	TxUplink: interface{},
	Type: *string,
	UplinkTeamingOverrideAllowed: interface{},
	VlanId: *f64,
	VlanOverrideAllowed: interface{},
	VlanRange: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.distributedVirtualSwitchUuid">DistributedVirtualSwitchUuid</a></code> | <code>*string</code> | The UUID of the DVS to attach this port group to. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.name">Name</a></code> | <code>*string</code> | The name of the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.activeUplinks">ActiveUplinks</a></code> | <code>*[]*string</code> | List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowForgedTransmits">AllowForgedTransmits</a></code> | <code>interface{}</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowMacChanges">AllowMacChanges</a></code> | <code>interface{}</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowPromiscuous">AllowPromiscuous</a></code> | <code>interface{}</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.autoExpand">AutoExpand</a></code> | <code>interface{}</code> | Auto-expands the port group beyond the port count configured in number_of_ports when necessary. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.blockAllPorts">BlockAllPorts</a></code> | <code>interface{}</code> | Indicates whether to block all ports by default. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.blockOverrideAllowed">BlockOverrideAllowed</a></code> | <code>interface{}</code> | Allow the blocked setting of an individual port to override the setting in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.checkBeacon">CheckBeacon</a></code> | <code>interface{}</code> | Enable beacon probing on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.description">Description</a></code> | <code>*string</code> | The description of the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.directpathGen2Allowed">DirectpathGen2Allowed</a></code> | <code>interface{}</code> | Allow VMDirectPath Gen2 on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingAverageBandwidth">EgressShapingAverageBandwidth</a></code> | <code>*f64</code> | The average egress bandwidth in bits per second if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingBurstSize">EgressShapingBurstSize</a></code> | <code>*f64</code> | The maximum egress burst size allowed in bytes if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingEnabled">EgressShapingEnabled</a></code> | <code>interface{}</code> | True if the traffic shaper is enabled for egress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingPeakBandwidth">EgressShapingPeakBandwidth</a></code> | <code>*f64</code> | The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.failback">Failback</a></code> | <code>interface{}</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#id DistributedPortGroup#id}. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingAverageBandwidth">IngressShapingAverageBandwidth</a></code> | <code>*f64</code> | The average ingress bandwidth in bits per second if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingBurstSize">IngressShapingBurstSize</a></code> | <code>*f64</code> | The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingEnabled">IngressShapingEnabled</a></code> | <code>interface{}</code> | True if the traffic shaper is enabled for ingress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingPeakBandwidth">IngressShapingPeakBandwidth</a></code> | <code>*f64</code> | The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lacpEnabled">LacpEnabled</a></code> | <code>interface{}</code> | Whether or not to enable LACP on all uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lacpMode">LacpMode</a></code> | <code>*string</code> | The uplink LACP mode to use. Can be one of active or passive. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.livePortMovingAllowed">LivePortMovingAllowed</a></code> | <code>interface{}</code> | Allow a live port to be moved in and out of the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.netflowEnabled">NetflowEnabled</a></code> | <code>interface{}</code> | Indicates whether to enable netflow on all ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.netflowOverrideAllowed">NetflowOverrideAllowed</a></code> | <code>interface{}</code> | Allow the enabling or disabling of Netflow on a port, contrary to the policy in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.networkResourcePoolKey">NetworkResourcePoolKey</a></code> | <code>*string</code> | The key of a network resource pool to associate with this portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.networkResourcePoolOverrideAllowed">NetworkResourcePoolOverrideAllowed</a></code> | <code>interface{}</code> | Allow the network resource pool of an individual port to override the setting in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.notifySwitches">NotifySwitches</a></code> | <code>interface{}</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.numberOfPorts">NumberOfPorts</a></code> | <code>*f64</code> | The number of ports in this portgroup. The DVS will expand and shrink by modifying this setting. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portConfigResetAtDisconnect">PortConfigResetAtDisconnect</a></code> | <code>interface{}</code> | Reset the setting of any ports in this portgroup back to the default setting when the port disconnects. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portNameFormat">PortNameFormat</a></code> | <code>*string</code> | A template string to use when creating ports in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portPrivateSecondaryVlanId">PortPrivateSecondaryVlanId</a></code> | <code>*f64</code> | The secondary VLAN ID for this port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.securityPolicyOverrideAllowed">SecurityPolicyOverrideAllowed</a></code> | <code>interface{}</code> | Allow security policy settings on a port to override those on the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.shapingOverrideAllowed">ShapingOverrideAllowed</a></code> | <code>interface{}</code> | Allow the traffic shaping policies of an individual port to override the settings in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.standbyUplinks">StandbyUplinks</a></code> | <code>*[]*string</code> | List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.teamingPolicy">TeamingPolicy</a></code> | <code>*string</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.trafficFilterOverrideAllowed">TrafficFilterOverrideAllowed</a></code> | <code>interface{}</code> | Allow any filter policies set on the individual port to override those in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.txUplink">TxUplink</a></code> | <code>interface{}</code> | If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.type">Type</a></code> | <code>*string</code> | The type of portgroup. Can be one of earlyBinding (static) or ephemeral. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.uplinkTeamingOverrideAllowed">UplinkTeamingOverrideAllowed</a></code> | <code>interface{}</code> | Allow the uplink teaming policies on a port to override those on the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanId">VlanId</a></code> | <code>*f64</code> | The VLAN ID for single VLAN mode. 0 denotes no VLAN. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanOverrideAllowed">VlanOverrideAllowed</a></code> | <code>interface{}</code> | Allow the VLAN configuration on a port to override those on the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanRange">VlanRange</a></code> | <code>interface{}</code> | vlan_range block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DistributedVirtualSwitchUuid`<sup>Required</sup> <a name="DistributedVirtualSwitchUuid" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.distributedVirtualSwitchUuid"></a>

```go
DistributedVirtualSwitchUuid *string
```

- *Type:* *string

The UUID of the DVS to attach this port group to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#distributed_virtual_switch_uuid DistributedPortGroup#distributed_virtual_switch_uuid}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#name DistributedPortGroup#name}

---

##### `ActiveUplinks`<sup>Optional</sup> <a name="ActiveUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.activeUplinks"></a>

```go
ActiveUplinks *[]*string
```

- *Type:* *[]*string

List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#active_uplinks DistributedPortGroup#active_uplinks}

---

##### `AllowForgedTransmits`<sup>Optional</sup> <a name="AllowForgedTransmits" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowForgedTransmits"></a>

```go
AllowForgedTransmits interface{}
```

- *Type:* interface{}

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#allow_forged_transmits DistributedPortGroup#allow_forged_transmits}

---

##### `AllowMacChanges`<sup>Optional</sup> <a name="AllowMacChanges" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowMacChanges"></a>

```go
AllowMacChanges interface{}
```

- *Type:* interface{}

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#allow_mac_changes DistributedPortGroup#allow_mac_changes}

---

##### `AllowPromiscuous`<sup>Optional</sup> <a name="AllowPromiscuous" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowPromiscuous"></a>

```go
AllowPromiscuous interface{}
```

- *Type:* interface{}

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#allow_promiscuous DistributedPortGroup#allow_promiscuous}

---

##### `AutoExpand`<sup>Optional</sup> <a name="AutoExpand" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.autoExpand"></a>

```go
AutoExpand interface{}
```

- *Type:* interface{}

Auto-expands the port group beyond the port count configured in number_of_ports when necessary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#auto_expand DistributedPortGroup#auto_expand}

---

##### `BlockAllPorts`<sup>Optional</sup> <a name="BlockAllPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.blockAllPorts"></a>

```go
BlockAllPorts interface{}
```

- *Type:* interface{}

Indicates whether to block all ports by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#block_all_ports DistributedPortGroup#block_all_ports}

---

##### `BlockOverrideAllowed`<sup>Optional</sup> <a name="BlockOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.blockOverrideAllowed"></a>

```go
BlockOverrideAllowed interface{}
```

- *Type:* interface{}

Allow the blocked setting of an individual port to override the setting in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#block_override_allowed DistributedPortGroup#block_override_allowed}

---

##### `CheckBeacon`<sup>Optional</sup> <a name="CheckBeacon" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.checkBeacon"></a>

```go
CheckBeacon interface{}
```

- *Type:* interface{}

Enable beacon probing on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#check_beacon DistributedPortGroup#check_beacon}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.customAttributes"></a>

```go
CustomAttributes *map[string]*string
```

- *Type:* *map[string]*string

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#custom_attributes DistributedPortGroup#custom_attributes}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#description DistributedPortGroup#description}

---

##### `DirectpathGen2Allowed`<sup>Optional</sup> <a name="DirectpathGen2Allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.directpathGen2Allowed"></a>

```go
DirectpathGen2Allowed interface{}
```

- *Type:* interface{}

Allow VMDirectPath Gen2 on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#directpath_gen2_allowed DistributedPortGroup#directpath_gen2_allowed}

---

##### `EgressShapingAverageBandwidth`<sup>Optional</sup> <a name="EgressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingAverageBandwidth"></a>

```go
EgressShapingAverageBandwidth *f64
```

- *Type:* *f64

The average egress bandwidth in bits per second if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#egress_shaping_average_bandwidth DistributedPortGroup#egress_shaping_average_bandwidth}

---

##### `EgressShapingBurstSize`<sup>Optional</sup> <a name="EgressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingBurstSize"></a>

```go
EgressShapingBurstSize *f64
```

- *Type:* *f64

The maximum egress burst size allowed in bytes if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#egress_shaping_burst_size DistributedPortGroup#egress_shaping_burst_size}

---

##### `EgressShapingEnabled`<sup>Optional</sup> <a name="EgressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingEnabled"></a>

```go
EgressShapingEnabled interface{}
```

- *Type:* interface{}

True if the traffic shaper is enabled for egress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#egress_shaping_enabled DistributedPortGroup#egress_shaping_enabled}

---

##### `EgressShapingPeakBandwidth`<sup>Optional</sup> <a name="EgressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingPeakBandwidth"></a>

```go
EgressShapingPeakBandwidth *f64
```

- *Type:* *f64

The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#egress_shaping_peak_bandwidth DistributedPortGroup#egress_shaping_peak_bandwidth}

---

##### `Failback`<sup>Optional</sup> <a name="Failback" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.failback"></a>

```go
Failback interface{}
```

- *Type:* interface{}

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#failback DistributedPortGroup#failback}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#id DistributedPortGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngressShapingAverageBandwidth`<sup>Optional</sup> <a name="IngressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingAverageBandwidth"></a>

```go
IngressShapingAverageBandwidth *f64
```

- *Type:* *f64

The average ingress bandwidth in bits per second if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#ingress_shaping_average_bandwidth DistributedPortGroup#ingress_shaping_average_bandwidth}

---

##### `IngressShapingBurstSize`<sup>Optional</sup> <a name="IngressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingBurstSize"></a>

```go
IngressShapingBurstSize *f64
```

- *Type:* *f64

The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#ingress_shaping_burst_size DistributedPortGroup#ingress_shaping_burst_size}

---

##### `IngressShapingEnabled`<sup>Optional</sup> <a name="IngressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingEnabled"></a>

```go
IngressShapingEnabled interface{}
```

- *Type:* interface{}

True if the traffic shaper is enabled for ingress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#ingress_shaping_enabled DistributedPortGroup#ingress_shaping_enabled}

---

##### `IngressShapingPeakBandwidth`<sup>Optional</sup> <a name="IngressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingPeakBandwidth"></a>

```go
IngressShapingPeakBandwidth *f64
```

- *Type:* *f64

The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#ingress_shaping_peak_bandwidth DistributedPortGroup#ingress_shaping_peak_bandwidth}

---

##### `LacpEnabled`<sup>Optional</sup> <a name="LacpEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lacpEnabled"></a>

```go
LacpEnabled interface{}
```

- *Type:* interface{}

Whether or not to enable LACP on all uplink ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#lacp_enabled DistributedPortGroup#lacp_enabled}

---

##### `LacpMode`<sup>Optional</sup> <a name="LacpMode" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lacpMode"></a>

```go
LacpMode *string
```

- *Type:* *string

The uplink LACP mode to use. Can be one of active or passive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#lacp_mode DistributedPortGroup#lacp_mode}

---

##### `LivePortMovingAllowed`<sup>Optional</sup> <a name="LivePortMovingAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.livePortMovingAllowed"></a>

```go
LivePortMovingAllowed interface{}
```

- *Type:* interface{}

Allow a live port to be moved in and out of the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#live_port_moving_allowed DistributedPortGroup#live_port_moving_allowed}

---

##### `NetflowEnabled`<sup>Optional</sup> <a name="NetflowEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.netflowEnabled"></a>

```go
NetflowEnabled interface{}
```

- *Type:* interface{}

Indicates whether to enable netflow on all ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#netflow_enabled DistributedPortGroup#netflow_enabled}

---

##### `NetflowOverrideAllowed`<sup>Optional</sup> <a name="NetflowOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.netflowOverrideAllowed"></a>

```go
NetflowOverrideAllowed interface{}
```

- *Type:* interface{}

Allow the enabling or disabling of Netflow on a port, contrary to the policy in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#netflow_override_allowed DistributedPortGroup#netflow_override_allowed}

---

##### `NetworkResourcePoolKey`<sup>Optional</sup> <a name="NetworkResourcePoolKey" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.networkResourcePoolKey"></a>

```go
NetworkResourcePoolKey *string
```

- *Type:* *string

The key of a network resource pool to associate with this portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#network_resource_pool_key DistributedPortGroup#network_resource_pool_key}

---

##### `NetworkResourcePoolOverrideAllowed`<sup>Optional</sup> <a name="NetworkResourcePoolOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.networkResourcePoolOverrideAllowed"></a>

```go
NetworkResourcePoolOverrideAllowed interface{}
```

- *Type:* interface{}

Allow the network resource pool of an individual port to override the setting in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#network_resource_pool_override_allowed DistributedPortGroup#network_resource_pool_override_allowed}

---

##### `NotifySwitches`<sup>Optional</sup> <a name="NotifySwitches" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.notifySwitches"></a>

```go
NotifySwitches interface{}
```

- *Type:* interface{}

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#notify_switches DistributedPortGroup#notify_switches}

---

##### `NumberOfPorts`<sup>Optional</sup> <a name="NumberOfPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.numberOfPorts"></a>

```go
NumberOfPorts *f64
```

- *Type:* *f64

The number of ports in this portgroup. The DVS will expand and shrink by modifying this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#number_of_ports DistributedPortGroup#number_of_ports}

---

##### `PortConfigResetAtDisconnect`<sup>Optional</sup> <a name="PortConfigResetAtDisconnect" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portConfigResetAtDisconnect"></a>

```go
PortConfigResetAtDisconnect interface{}
```

- *Type:* interface{}

Reset the setting of any ports in this portgroup back to the default setting when the port disconnects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#port_config_reset_at_disconnect DistributedPortGroup#port_config_reset_at_disconnect}

---

##### `PortNameFormat`<sup>Optional</sup> <a name="PortNameFormat" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portNameFormat"></a>

```go
PortNameFormat *string
```

- *Type:* *string

A template string to use when creating ports in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#port_name_format DistributedPortGroup#port_name_format}

---

##### `PortPrivateSecondaryVlanId`<sup>Optional</sup> <a name="PortPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portPrivateSecondaryVlanId"></a>

```go
PortPrivateSecondaryVlanId *f64
```

- *Type:* *f64

The secondary VLAN ID for this port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#port_private_secondary_vlan_id DistributedPortGroup#port_private_secondary_vlan_id}

---

##### `SecurityPolicyOverrideAllowed`<sup>Optional</sup> <a name="SecurityPolicyOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.securityPolicyOverrideAllowed"></a>

```go
SecurityPolicyOverrideAllowed interface{}
```

- *Type:* interface{}

Allow security policy settings on a port to override those on the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#security_policy_override_allowed DistributedPortGroup#security_policy_override_allowed}

---

##### `ShapingOverrideAllowed`<sup>Optional</sup> <a name="ShapingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.shapingOverrideAllowed"></a>

```go
ShapingOverrideAllowed interface{}
```

- *Type:* interface{}

Allow the traffic shaping policies of an individual port to override the settings in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#shaping_override_allowed DistributedPortGroup#shaping_override_allowed}

---

##### `StandbyUplinks`<sup>Optional</sup> <a name="StandbyUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.standbyUplinks"></a>

```go
StandbyUplinks *[]*string
```

- *Type:* *[]*string

List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#standby_uplinks DistributedPortGroup#standby_uplinks}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#tags DistributedPortGroup#tags}

---

##### `TeamingPolicy`<sup>Optional</sup> <a name="TeamingPolicy" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.teamingPolicy"></a>

```go
TeamingPolicy *string
```

- *Type:* *string

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#teaming_policy DistributedPortGroup#teaming_policy}

---

##### `TrafficFilterOverrideAllowed`<sup>Optional</sup> <a name="TrafficFilterOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.trafficFilterOverrideAllowed"></a>

```go
TrafficFilterOverrideAllowed interface{}
```

- *Type:* interface{}

Allow any filter policies set on the individual port to override those in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#traffic_filter_override_allowed DistributedPortGroup#traffic_filter_override_allowed}

---

##### `TxUplink`<sup>Optional</sup> <a name="TxUplink" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.txUplink"></a>

```go
TxUplink interface{}
```

- *Type:* interface{}

If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#tx_uplink DistributedPortGroup#tx_uplink}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of portgroup. Can be one of earlyBinding (static) or ephemeral.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#type DistributedPortGroup#type}

---

##### `UplinkTeamingOverrideAllowed`<sup>Optional</sup> <a name="UplinkTeamingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.uplinkTeamingOverrideAllowed"></a>

```go
UplinkTeamingOverrideAllowed interface{}
```

- *Type:* interface{}

Allow the uplink teaming policies on a port to override those on the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#uplink_teaming_override_allowed DistributedPortGroup#uplink_teaming_override_allowed}

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanId"></a>

```go
VlanId *f64
```

- *Type:* *f64

The VLAN ID for single VLAN mode. 0 denotes no VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#vlan_id DistributedPortGroup#vlan_id}

---

##### `VlanOverrideAllowed`<sup>Optional</sup> <a name="VlanOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanOverrideAllowed"></a>

```go
VlanOverrideAllowed interface{}
```

- *Type:* interface{}

Allow the VLAN configuration on a port to override those on the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#vlan_override_allowed DistributedPortGroup#vlan_override_allowed}

---

##### `VlanRange`<sup>Optional</sup> <a name="VlanRange" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanRange"></a>

```go
VlanRange interface{}
```

- *Type:* interface{}

vlan_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#vlan_range DistributedPortGroup#vlan_range}

---

### DistributedPortGroupVlanRange <a name="DistributedPortGroupVlanRange" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v4/distributedportgroup"

&distributedportgroup.DistributedPortGroupVlanRange {
	MaxVlan: *f64,
	MinVlan: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.property.maxVlan">MaxVlan</a></code> | <code>*f64</code> | The minimum VLAN to use in the range. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.property.minVlan">MinVlan</a></code> | <code>*f64</code> | The minimum VLAN to use in the range. |

---

##### `MaxVlan`<sup>Required</sup> <a name="MaxVlan" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.property.maxVlan"></a>

```go
MaxVlan *f64
```

- *Type:* *f64

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#max_vlan DistributedPortGroup#max_vlan}

---

##### `MinVlan`<sup>Required</sup> <a name="MinVlan" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.property.minVlan"></a>

```go
MinVlan *f64
```

- *Type:* *f64

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/distributed_port_group#min_vlan DistributedPortGroup#min_vlan}

---

## Classes <a name="Classes" id="Classes"></a>

### DistributedPortGroupVlanRangeList <a name="DistributedPortGroupVlanRangeList" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v4/distributedportgroup"

distributedportgroup.NewDistributedPortGroupVlanRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DistributedPortGroupVlanRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.get"></a>

```go
func Get(index *f64) DistributedPortGroupVlanRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DistributedPortGroupVlanRangeOutputReference <a name="DistributedPortGroupVlanRangeOutputReference" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v4/distributedportgroup"

distributedportgroup.NewDistributedPortGroupVlanRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DistributedPortGroupVlanRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.maxVlanInput">MaxVlanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.minVlanInput">MinVlanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.maxVlan">MaxVlan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.minVlan">MinVlan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxVlanInput`<sup>Optional</sup> <a name="MaxVlanInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.maxVlanInput"></a>

```go
func MaxVlanInput() *f64
```

- *Type:* *f64

---

##### `MinVlanInput`<sup>Optional</sup> <a name="MinVlanInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.minVlanInput"></a>

```go
func MinVlanInput() *f64
```

- *Type:* *f64

---

##### `MaxVlan`<sup>Required</sup> <a name="MaxVlan" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.maxVlan"></a>

```go
func MaxVlan() *f64
```

- *Type:* *f64

---

##### `MinVlan`<sup>Required</sup> <a name="MinVlan" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.minVlan"></a>

```go
func MinVlan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



