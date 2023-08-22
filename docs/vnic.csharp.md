# `vsphere_vnic`

Refer to the Terraform Registory for docs: [`vsphere_vnic`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic).

# `vnic` Submodule <a name="`vnic` Submodule" id="@cdktf/provider-vsphere.vnic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Vnic <a name="Vnic" id="@cdktf/provider-vsphere.vnic.Vnic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic vsphere_vnic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new Vnic(Construct Scope, string Id, VnicConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig">VnicConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicConfig">VnicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.putIpv4">PutIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.putIpv6">PutIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetDistributedPortGroup">ResetDistributedPortGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetDistributedSwitchPort">ResetDistributedSwitchPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetIpv4">ResetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetIpv6">ResetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetMac">ResetMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetNetstack">ResetNetstack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetPortgroup">ResetPortgroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetServices">ResetServices</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.vnic.Vnic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.vnic.Vnic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.vnic.Vnic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.vnic.Vnic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.vnic.Vnic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.vnic.Vnic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.vnic.Vnic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.vnic.Vnic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.vnic.Vnic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIpv4` <a name="PutIpv4" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv4"></a>

```csharp
private void PutIpv4(VnicIpv4 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

---

##### `PutIpv6` <a name="PutIpv6" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv6"></a>

```csharp
private void PutIpv6(VnicIpv6 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

---

##### `ResetDistributedPortGroup` <a name="ResetDistributedPortGroup" id="@cdktf/provider-vsphere.vnic.Vnic.resetDistributedPortGroup"></a>

```csharp
private void ResetDistributedPortGroup()
```

##### `ResetDistributedSwitchPort` <a name="ResetDistributedSwitchPort" id="@cdktf/provider-vsphere.vnic.Vnic.resetDistributedSwitchPort"></a>

```csharp
private void ResetDistributedSwitchPort()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.vnic.Vnic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpv4` <a name="ResetIpv4" id="@cdktf/provider-vsphere.vnic.Vnic.resetIpv4"></a>

```csharp
private void ResetIpv4()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-vsphere.vnic.Vnic.resetIpv6"></a>

```csharp
private void ResetIpv6()
```

##### `ResetMac` <a name="ResetMac" id="@cdktf/provider-vsphere.vnic.Vnic.resetMac"></a>

```csharp
private void ResetMac()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktf/provider-vsphere.vnic.Vnic.resetMtu"></a>

```csharp
private void ResetMtu()
```

##### `ResetNetstack` <a name="ResetNetstack" id="@cdktf/provider-vsphere.vnic.Vnic.resetNetstack"></a>

```csharp
private void ResetNetstack()
```

##### `ResetPortgroup` <a name="ResetPortgroup" id="@cdktf/provider-vsphere.vnic.Vnic.resetPortgroup"></a>

```csharp
private void ResetPortgroup()
```

##### `ResetServices` <a name="ResetServices" id="@cdktf/provider-vsphere.vnic.Vnic.resetServices"></a>

```csharp
private void ResetServices()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.vnic.Vnic.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

Vnic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.vnic.Vnic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

Vnic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

Vnic.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference">VnicIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference">VnicIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroupInput">DistributedPortGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPortInput">DistributedSwitchPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv4Input">Ipv4Input</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv6Input">Ipv6Input</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.macInput">MacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.netstackInput">NetstackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.portgroupInput">PortgroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.servicesInput">ServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroup">DistributedPortGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPort">DistributedSwitchPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.mac">Mac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.netstack">Netstack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.portgroup">Portgroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.services">Services</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.vnic.Vnic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.vnic.Vnic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.vnic.Vnic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.vnic.Vnic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.vnic.Vnic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.vnic.Vnic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.vnic.Vnic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.vnic.Vnic.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.vnic.Vnic.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.vnic.Vnic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.vnic.Vnic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.vnic.Vnic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.vnic.Vnic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.vnic.Vnic.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv4"></a>

```csharp
public VnicIpv4OutputReference Ipv4 { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference">VnicIpv4OutputReference</a>

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv6"></a>

```csharp
public VnicIpv6OutputReference Ipv6 { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference">VnicIpv6OutputReference</a>

---

##### `DistributedPortGroupInput`<sup>Optional</sup> <a name="DistributedPortGroupInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroupInput"></a>

```csharp
public string DistributedPortGroupInput { get; }
```

- *Type:* string

---

##### `DistributedSwitchPortInput`<sup>Optional</sup> <a name="DistributedSwitchPortInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPortInput"></a>

```csharp
public string DistributedSwitchPortInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Ipv4Input`<sup>Optional</sup> <a name="Ipv4Input" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv4Input"></a>

```csharp
public VnicIpv4 Ipv4Input { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv6Input"></a>

```csharp
public VnicIpv6 Ipv6Input { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

---

##### `MacInput`<sup>Optional</sup> <a name="MacInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.macInput"></a>

```csharp
public string MacInput { get; }
```

- *Type:* string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.mtuInput"></a>

```csharp
public double MtuInput { get; }
```

- *Type:* double

---

##### `NetstackInput`<sup>Optional</sup> <a name="NetstackInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.netstackInput"></a>

```csharp
public string NetstackInput { get; }
```

- *Type:* string

---

##### `PortgroupInput`<sup>Optional</sup> <a name="PortgroupInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.portgroupInput"></a>

```csharp
public string PortgroupInput { get; }
```

- *Type:* string

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.servicesInput"></a>

```csharp
public string[] ServicesInput { get; }
```

- *Type:* string[]

---

##### `DistributedPortGroup`<sup>Required</sup> <a name="DistributedPortGroup" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroup"></a>

```csharp
public string DistributedPortGroup { get; }
```

- *Type:* string

---

##### `DistributedSwitchPort`<sup>Required</sup> <a name="DistributedSwitchPort" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPort"></a>

```csharp
public string DistributedSwitchPort { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vsphere.vnic.Vnic.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.vnic.Vnic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Mac`<sup>Required</sup> <a name="Mac" id="@cdktf/provider-vsphere.vnic.Vnic.property.mac"></a>

```csharp
public string Mac { get; }
```

- *Type:* string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-vsphere.vnic.Vnic.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `Netstack`<sup>Required</sup> <a name="Netstack" id="@cdktf/provider-vsphere.vnic.Vnic.property.netstack"></a>

```csharp
public string Netstack { get; }
```

- *Type:* string

---

##### `Portgroup`<sup>Required</sup> <a name="Portgroup" id="@cdktf/provider-vsphere.vnic.Vnic.property.portgroup"></a>

```csharp
public string Portgroup { get; }
```

- *Type:* string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-vsphere.vnic.Vnic.property.services"></a>

```csharp
public string[] Services { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.vnic.Vnic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VnicConfig <a name="VnicConfig" id="@cdktf/provider-vsphere.vnic.VnicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vnic.VnicConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VnicConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Host,
    string DistributedPortGroup = null,
    string DistributedSwitchPort = null,
    string Id = null,
    VnicIpv4 Ipv4 = null,
    VnicIpv6 Ipv6 = null,
    string Mac = null,
    double Mtu = null,
    string Netstack = null,
    string Portgroup = null,
    string[] Services = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.host">Host</a></code> | <code>string</code> | ESX host the interface belongs to. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedPortGroup">DistributedPortGroup</a></code> | <code>string</code> | Key of the distributed portgroup the nic will connect to. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedSwitchPort">DistributedSwitchPort</a></code> | <code>string</code> | UUID of the DVSwitch the nic will be attached to. Do not set if you set portgroup. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#id Vnic#id}. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a></code> | ipv4 block. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a></code> | ipv6 block. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.mac">Mac</a></code> | <code>string</code> | MAC address of the interface. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.mtu">Mtu</a></code> | <code>double</code> | MTU of the interface. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.netstack">Netstack</a></code> | <code>string</code> | TCP/IP stack setting for this interface. Possible values are 'defaultTcpipStack', 'vmotion', 'provisioning'. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.portgroup">Portgroup</a></code> | <code>string</code> | portgroup to attach the nic to. Do not set if you set distributed_switch_port. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.services">Services</a></code> | <code>string[]</code> | Enabled services setting for this interface. Current possible values are 'vmotion', 'management' and 'vsan'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

ESX host the interface belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#host Vnic#host}

---

##### `DistributedPortGroup`<sup>Optional</sup> <a name="DistributedPortGroup" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedPortGroup"></a>

```csharp
public string DistributedPortGroup { get; set; }
```

- *Type:* string

Key of the distributed portgroup the nic will connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#distributed_port_group Vnic#distributed_port_group}

---

##### `DistributedSwitchPort`<sup>Optional</sup> <a name="DistributedSwitchPort" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedSwitchPort"></a>

```csharp
public string DistributedSwitchPort { get; set; }
```

- *Type:* string

UUID of the DVSwitch the nic will be attached to. Do not set if you set portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#distributed_switch_port Vnic#distributed_switch_port}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#id Vnic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv4`<sup>Optional</sup> <a name="Ipv4" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv4"></a>

```csharp
public VnicIpv4 Ipv4 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

ipv4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#ipv4 Vnic#ipv4}

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv6"></a>

```csharp
public VnicIpv6 Ipv6 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#ipv6 Vnic#ipv6}

---

##### `Mac`<sup>Optional</sup> <a name="Mac" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.mac"></a>

```csharp
public string Mac { get; set; }
```

- *Type:* string

MAC address of the interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#mac Vnic#mac}

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

MTU of the interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#mtu Vnic#mtu}

---

##### `Netstack`<sup>Optional</sup> <a name="Netstack" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.netstack"></a>

```csharp
public string Netstack { get; set; }
```

- *Type:* string

TCP/IP stack setting for this interface. Possible values are 'defaultTcpipStack', 'vmotion', 'provisioning'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#netstack Vnic#netstack}

---

##### `Portgroup`<sup>Optional</sup> <a name="Portgroup" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.portgroup"></a>

```csharp
public string Portgroup { get; set; }
```

- *Type:* string

portgroup to attach the nic to. Do not set if you set distributed_switch_port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#portgroup Vnic#portgroup}

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.services"></a>

```csharp
public string[] Services { get; set; }
```

- *Type:* string[]

Enabled services setting for this interface. Current possible values are 'vmotion', 'management' and 'vsan'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#services Vnic#services}

---

### VnicIpv4 <a name="VnicIpv4" id="@cdktf/provider-vsphere.vnic.VnicIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vnic.VnicIpv4.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VnicIpv4 {
    object Dhcp = null,
    string Gw = null,
    string Ip = null,
    string Netmask = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.dhcp">Dhcp</a></code> | <code>object</code> | Use DHCP to configure the interface's IPv4 stack. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.gw">Gw</a></code> | <code>string</code> | IP address of the default gateway, if DHCP is not set. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.ip">Ip</a></code> | <code>string</code> | address of the interface, if DHCP is not set. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.netmask">Netmask</a></code> | <code>string</code> | netmask of the interface, if DHCP is not set. |

---

##### `Dhcp`<sup>Optional</sup> <a name="Dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.dhcp"></a>

```csharp
public object Dhcp { get; set; }
```

- *Type:* object

Use DHCP to configure the interface's IPv4 stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#dhcp Vnic#dhcp}

---

##### `Gw`<sup>Optional</sup> <a name="Gw" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.gw"></a>

```csharp
public string Gw { get; set; }
```

- *Type:* string

IP address of the default gateway, if DHCP is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#gw Vnic#gw}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

address of the interface, if DHCP is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#ip Vnic#ip}

---

##### `Netmask`<sup>Optional</sup> <a name="Netmask" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.netmask"></a>

```csharp
public string Netmask { get; set; }
```

- *Type:* string

netmask of the interface, if DHCP is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#netmask Vnic#netmask}

---

### VnicIpv6 <a name="VnicIpv6" id="@cdktf/provider-vsphere.vnic.VnicIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vnic.VnicIpv6.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VnicIpv6 {
    string[] Addresses = null,
    object Autoconfig = null,
    object Dhcp = null,
    string Gw = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.addresses">Addresses</a></code> | <code>string[]</code> | List of IPv6 addresses. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.autoconfig">Autoconfig</a></code> | <code>object</code> | Use IPv6 Autoconfiguration (RFC2462). |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.dhcp">Dhcp</a></code> | <code>object</code> | Use DHCP to configure the interface's IPv4 stack. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.gw">Gw</a></code> | <code>string</code> | IP address of the default gateway, if DHCP or autoconfig is not set. |

---

##### `Addresses`<sup>Optional</sup> <a name="Addresses" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.addresses"></a>

```csharp
public string[] Addresses { get; set; }
```

- *Type:* string[]

List of IPv6 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#addresses Vnic#addresses}

---

##### `Autoconfig`<sup>Optional</sup> <a name="Autoconfig" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.autoconfig"></a>

```csharp
public object Autoconfig { get; set; }
```

- *Type:* object

Use IPv6 Autoconfiguration (RFC2462).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#autoconfig Vnic#autoconfig}

---

##### `Dhcp`<sup>Optional</sup> <a name="Dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.dhcp"></a>

```csharp
public object Dhcp { get; set; }
```

- *Type:* object

Use DHCP to configure the interface's IPv4 stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#dhcp Vnic#dhcp}

---

##### `Gw`<sup>Optional</sup> <a name="Gw" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.gw"></a>

```csharp
public string Gw { get; set; }
```

- *Type:* string

IP address of the default gateway, if DHCP or autoconfig is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/vnic#gw Vnic#gw}

---

## Classes <a name="Classes" id="Classes"></a>

### VnicIpv4OutputReference <a name="VnicIpv4OutputReference" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VnicIpv4OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetDhcp">ResetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetGw">ResetGw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetNetmask">ResetNetmask</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDhcp` <a name="ResetDhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetDhcp"></a>

```csharp
private void ResetDhcp()
```

##### `ResetGw` <a name="ResetGw" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetGw"></a>

```csharp
private void ResetGw()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetNetmask` <a name="ResetNetmask" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetNetmask"></a>

```csharp
private void ResetNetmask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcpInput">DhcpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gwInput">GwInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmaskInput">NetmaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcp">Dhcp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gw">Gw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmask">Netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DhcpInput`<sup>Optional</sup> <a name="DhcpInput" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcpInput"></a>

```csharp
public object DhcpInput { get; }
```

- *Type:* object

---

##### `GwInput`<sup>Optional</sup> <a name="GwInput" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gwInput"></a>

```csharp
public string GwInput { get; }
```

- *Type:* string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `NetmaskInput`<sup>Optional</sup> <a name="NetmaskInput" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmaskInput"></a>

```csharp
public string NetmaskInput { get; }
```

- *Type:* string

---

##### `Dhcp`<sup>Required</sup> <a name="Dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcp"></a>

```csharp
public object Dhcp { get; }
```

- *Type:* object

---

##### `Gw`<sup>Required</sup> <a name="Gw" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gw"></a>

```csharp
public string Gw { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmask"></a>

```csharp
public string Netmask { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.internalValue"></a>

```csharp
public VnicIpv4 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

---


### VnicIpv6OutputReference <a name="VnicIpv6OutputReference" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VnicIpv6OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAddresses">ResetAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAutoconfig">ResetAutoconfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetDhcp">ResetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetGw">ResetGw</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddresses` <a name="ResetAddresses" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAddresses"></a>

```csharp
private void ResetAddresses()
```

##### `ResetAutoconfig` <a name="ResetAutoconfig" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAutoconfig"></a>

```csharp
private void ResetAutoconfig()
```

##### `ResetDhcp` <a name="ResetDhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetDhcp"></a>

```csharp
private void ResetDhcp()
```

##### `ResetGw` <a name="ResetGw" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetGw"></a>

```csharp
private void ResetGw()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addressesInput">AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfigInput">AutoconfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcpInput">DhcpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gwInput">GwInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addresses">Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfig">Autoconfig</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcp">Dhcp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gw">Gw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressesInput`<sup>Optional</sup> <a name="AddressesInput" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addressesInput"></a>

```csharp
public string[] AddressesInput { get; }
```

- *Type:* string[]

---

##### `AutoconfigInput`<sup>Optional</sup> <a name="AutoconfigInput" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfigInput"></a>

```csharp
public object AutoconfigInput { get; }
```

- *Type:* object

---

##### `DhcpInput`<sup>Optional</sup> <a name="DhcpInput" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcpInput"></a>

```csharp
public object DhcpInput { get; }
```

- *Type:* object

---

##### `GwInput`<sup>Optional</sup> <a name="GwInput" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gwInput"></a>

```csharp
public string GwInput { get; }
```

- *Type:* string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addresses"></a>

```csharp
public string[] Addresses { get; }
```

- *Type:* string[]

---

##### `Autoconfig`<sup>Required</sup> <a name="Autoconfig" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfig"></a>

```csharp
public object Autoconfig { get; }
```

- *Type:* object

---

##### `Dhcp`<sup>Required</sup> <a name="Dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcp"></a>

```csharp
public object Dhcp { get; }
```

- *Type:* object

---

##### `Gw`<sup>Required</sup> <a name="Gw" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gw"></a>

```csharp
public string Gw { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.internalValue"></a>

```csharp
public VnicIpv6 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

---



