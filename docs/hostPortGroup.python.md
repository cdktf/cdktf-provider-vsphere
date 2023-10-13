# `vsphere_host_port_group`

Refer to the Terraform Registory for docs: [`vsphere_host_port_group`](https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group).

# `hostPortGroup` Submodule <a name="`hostPortGroup` Submodule" id="@cdktf/provider-vsphere.hostPortGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostPortGroup <a name="HostPortGroup" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group vsphere_host_port_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import host_port_group

hostPortGroup.HostPortGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host_system_id: str,
  name: str,
  virtual_switch_name: str,
  active_nics: typing.List[str] = None,
  allow_forged_transmits: typing.Union[bool, IResolvable] = None,
  allow_mac_changes: typing.Union[bool, IResolvable] = None,
  allow_promiscuous: typing.Union[bool, IResolvable] = None,
  check_beacon: typing.Union[bool, IResolvable] = None,
  failback: typing.Union[bool, IResolvable] = None,
  id: str = None,
  notify_switches: typing.Union[bool, IResolvable] = None,
  shaping_average_bandwidth: typing.Union[int, float] = None,
  shaping_burst_size: typing.Union[int, float] = None,
  shaping_enabled: typing.Union[bool, IResolvable] = None,
  shaping_peak_bandwidth: typing.Union[int, float] = None,
  standby_nics: typing.List[str] = None,
  teaming_policy: str = None,
  vlan_id: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.hostSystemId">host_system_id</a></code> | <code>str</code> | The managed object ID of the host to set the virtual switch up on. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the port group. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.virtualSwitchName">virtual_switch_name</a></code> | <code>str</code> | The name of the virtual switch to bind this port group to. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.activeNics">active_nics</a></code> | <code>typing.List[str]</code> | List of active network adapters used for load balancing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.allowForgedTransmits">allow_forged_transmits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.allowMacChanges">allow_mac_changes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.allowPromiscuous">allow_promiscuous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.checkBeacon">check_beacon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable beacon probing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.failback">failback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#id HostPortGroup#id}. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.notifySwitches">notify_switches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.shapingAverageBandwidth">shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The average bandwidth in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.shapingBurstSize">shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | The maximum burst size allowed in bytes if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.shapingEnabled">shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable traffic shaping on this virtual switch or port group. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.shapingPeakBandwidth">shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The peak bandwidth during bursts in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.standbyNics">standby_nics</a></code> | <code>typing.List[str]</code> | List of standby network adapters used for failover. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.teamingPolicy">teaming_policy</a></code> | <code>str</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.vlanId">vlan_id</a></code> | <code>typing.Union[int, float]</code> | The VLAN ID/trunk mode for this port group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_system_id`<sup>Required</sup> <a name="host_system_id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.hostSystemId"></a>

- *Type:* str

The managed object ID of the host to set the virtual switch up on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#host_system_id HostPortGroup#host_system_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.name"></a>

- *Type:* str

The name of the port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#name HostPortGroup#name}

---

##### `virtual_switch_name`<sup>Required</sup> <a name="virtual_switch_name" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.virtualSwitchName"></a>

- *Type:* str

The name of the virtual switch to bind this port group to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#virtual_switch_name HostPortGroup#virtual_switch_name}

---

##### `active_nics`<sup>Optional</sup> <a name="active_nics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.activeNics"></a>

- *Type:* typing.List[str]

List of active network adapters used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#active_nics HostPortGroup#active_nics}

---

##### `allow_forged_transmits`<sup>Optional</sup> <a name="allow_forged_transmits" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.allowForgedTransmits"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#allow_forged_transmits HostPortGroup#allow_forged_transmits}

---

##### `allow_mac_changes`<sup>Optional</sup> <a name="allow_mac_changes" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.allowMacChanges"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#allow_mac_changes HostPortGroup#allow_mac_changes}

---

##### `allow_promiscuous`<sup>Optional</sup> <a name="allow_promiscuous" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.allowPromiscuous"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#allow_promiscuous HostPortGroup#allow_promiscuous}

---

##### `check_beacon`<sup>Optional</sup> <a name="check_beacon" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.checkBeacon"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable beacon probing.

Requires that the vSwitch has been configured to use a beacon. If disabled, link status is used only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#check_beacon HostPortGroup#check_beacon}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.failback"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#failback HostPortGroup#failback}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#id HostPortGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notify_switches`<sup>Optional</sup> <a name="notify_switches" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.notifySwitches"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#notify_switches HostPortGroup#notify_switches}

---

##### `shaping_average_bandwidth`<sup>Optional</sup> <a name="shaping_average_bandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.shapingAverageBandwidth"></a>

- *Type:* typing.Union[int, float]

The average bandwidth in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#shaping_average_bandwidth HostPortGroup#shaping_average_bandwidth}

---

##### `shaping_burst_size`<sup>Optional</sup> <a name="shaping_burst_size" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.shapingBurstSize"></a>

- *Type:* typing.Union[int, float]

The maximum burst size allowed in bytes if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#shaping_burst_size HostPortGroup#shaping_burst_size}

---

##### `shaping_enabled`<sup>Optional</sup> <a name="shaping_enabled" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.shapingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable traffic shaping on this virtual switch or port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#shaping_enabled HostPortGroup#shaping_enabled}

---

##### `shaping_peak_bandwidth`<sup>Optional</sup> <a name="shaping_peak_bandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.shapingPeakBandwidth"></a>

- *Type:* typing.Union[int, float]

The peak bandwidth during bursts in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#shaping_peak_bandwidth HostPortGroup#shaping_peak_bandwidth}

---

##### `standby_nics`<sup>Optional</sup> <a name="standby_nics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.standbyNics"></a>

- *Type:* typing.List[str]

List of standby network adapters used for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#standby_nics HostPortGroup#standby_nics}

---

##### `teaming_policy`<sup>Optional</sup> <a name="teaming_policy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.teamingPolicy"></a>

- *Type:* str

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#teaming_policy HostPortGroup#teaming_policy}

---

##### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.vlanId"></a>

- *Type:* typing.Union[int, float]

The VLAN ID/trunk mode for this port group.

An ID of 0 denotes no tagging, an ID of 1-4094 tags with the specific ID, and an ID of 4095 enables trunk mode, allowing the guest to manage its own tagging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#vlan_id HostPortGroup#vlan_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetActiveNics">reset_active_nics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowForgedTransmits">reset_allow_forged_transmits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowMacChanges">reset_allow_mac_changes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowPromiscuous">reset_allow_promiscuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetCheckBeacon">reset_check_beacon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetFailback">reset_failback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetNotifySwitches">reset_notify_switches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingAverageBandwidth">reset_shaping_average_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingBurstSize">reset_shaping_burst_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingEnabled">reset_shaping_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingPeakBandwidth">reset_shaping_peak_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetStandbyNics">reset_standby_nics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetTeamingPolicy">reset_teaming_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetVlanId">reset_vlan_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_active_nics` <a name="reset_active_nics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetActiveNics"></a>

```python
def reset_active_nics() -> None
```

##### `reset_allow_forged_transmits` <a name="reset_allow_forged_transmits" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowForgedTransmits"></a>

```python
def reset_allow_forged_transmits() -> None
```

##### `reset_allow_mac_changes` <a name="reset_allow_mac_changes" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowMacChanges"></a>

```python
def reset_allow_mac_changes() -> None
```

##### `reset_allow_promiscuous` <a name="reset_allow_promiscuous" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowPromiscuous"></a>

```python
def reset_allow_promiscuous() -> None
```

##### `reset_check_beacon` <a name="reset_check_beacon" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetCheckBeacon"></a>

```python
def reset_check_beacon() -> None
```

##### `reset_failback` <a name="reset_failback" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetFailback"></a>

```python
def reset_failback() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notify_switches` <a name="reset_notify_switches" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetNotifySwitches"></a>

```python
def reset_notify_switches() -> None
```

##### `reset_shaping_average_bandwidth` <a name="reset_shaping_average_bandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingAverageBandwidth"></a>

```python
def reset_shaping_average_bandwidth() -> None
```

##### `reset_shaping_burst_size` <a name="reset_shaping_burst_size" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingBurstSize"></a>

```python
def reset_shaping_burst_size() -> None
```

##### `reset_shaping_enabled` <a name="reset_shaping_enabled" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingEnabled"></a>

```python
def reset_shaping_enabled() -> None
```

##### `reset_shaping_peak_bandwidth` <a name="reset_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingPeakBandwidth"></a>

```python
def reset_shaping_peak_bandwidth() -> None
```

##### `reset_standby_nics` <a name="reset_standby_nics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetStandbyNics"></a>

```python
def reset_standby_nics() -> None
```

##### `reset_teaming_policy` <a name="reset_teaming_policy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetTeamingPolicy"></a>

```python
def reset_teaming_policy() -> None
```

##### `reset_vlan_id` <a name="reset_vlan_id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetVlanId"></a>

```python
def reset_vlan_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import host_port_group

hostPortGroup.HostPortGroup.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import host_port_group

hostPortGroup.HostPortGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import host_port_group

hostPortGroup.HostPortGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.computedPolicy">computed_policy</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList">HostPortGroupPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNicsInput">active_nics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmitsInput">allow_forged_transmits_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChangesInput">allow_mac_changes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuousInput">allow_promiscuous_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeaconInput">check_beacon_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failbackInput">failback_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemIdInput">host_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitchesInput">notify_switches_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidthInput">shaping_average_bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSizeInput">shaping_burst_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabledInput">shaping_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidthInput">shaping_peak_bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNicsInput">standby_nics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicyInput">teaming_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchNameInput">virtual_switch_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanIdInput">vlan_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNics">active_nics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmits">allow_forged_transmits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChanges">allow_mac_changes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuous">allow_promiscuous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeacon">check_beacon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failback">failback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemId">host_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitches">notify_switches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidth">shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSize">shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabled">shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidth">shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNics">standby_nics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicy">teaming_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchName">virtual_switch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanId">vlan_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `computed_policy`<sup>Required</sup> <a name="computed_policy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.computedPolicy"></a>

```python
computed_policy: StringMap
```

- *Type:* cdktf.StringMap

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.ports"></a>

```python
ports: HostPortGroupPortsList
```

- *Type:* <a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList">HostPortGroupPortsList</a>

---

##### `active_nics_input`<sup>Optional</sup> <a name="active_nics_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNicsInput"></a>

```python
active_nics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_forged_transmits_input`<sup>Optional</sup> <a name="allow_forged_transmits_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmitsInput"></a>

```python
allow_forged_transmits_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_mac_changes_input`<sup>Optional</sup> <a name="allow_mac_changes_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChangesInput"></a>

```python
allow_mac_changes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_promiscuous_input`<sup>Optional</sup> <a name="allow_promiscuous_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuousInput"></a>

```python
allow_promiscuous_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `check_beacon_input`<sup>Optional</sup> <a name="check_beacon_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeaconInput"></a>

```python
check_beacon_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failback_input`<sup>Optional</sup> <a name="failback_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failbackInput"></a>

```python
failback_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_system_id_input`<sup>Optional</sup> <a name="host_system_id_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemIdInput"></a>

```python
host_system_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notify_switches_input`<sup>Optional</sup> <a name="notify_switches_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitchesInput"></a>

```python
notify_switches_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shaping_average_bandwidth_input`<sup>Optional</sup> <a name="shaping_average_bandwidth_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidthInput"></a>

```python
shaping_average_bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shaping_burst_size_input`<sup>Optional</sup> <a name="shaping_burst_size_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSizeInput"></a>

```python
shaping_burst_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shaping_enabled_input`<sup>Optional</sup> <a name="shaping_enabled_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabledInput"></a>

```python
shaping_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shaping_peak_bandwidth_input`<sup>Optional</sup> <a name="shaping_peak_bandwidth_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidthInput"></a>

```python
shaping_peak_bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `standby_nics_input`<sup>Optional</sup> <a name="standby_nics_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNicsInput"></a>

```python
standby_nics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `teaming_policy_input`<sup>Optional</sup> <a name="teaming_policy_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicyInput"></a>

```python
teaming_policy_input: str
```

- *Type:* str

---

##### `virtual_switch_name_input`<sup>Optional</sup> <a name="virtual_switch_name_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchNameInput"></a>

```python
virtual_switch_name_input: str
```

- *Type:* str

---

##### `vlan_id_input`<sup>Optional</sup> <a name="vlan_id_input" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanIdInput"></a>

```python
vlan_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `active_nics`<sup>Required</sup> <a name="active_nics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNics"></a>

```python
active_nics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_forged_transmits`<sup>Required</sup> <a name="allow_forged_transmits" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmits"></a>

```python
allow_forged_transmits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_mac_changes`<sup>Required</sup> <a name="allow_mac_changes" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChanges"></a>

```python
allow_mac_changes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_promiscuous`<sup>Required</sup> <a name="allow_promiscuous" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuous"></a>

```python
allow_promiscuous: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `check_beacon`<sup>Required</sup> <a name="check_beacon" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeacon"></a>

```python
check_beacon: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failback`<sup>Required</sup> <a name="failback" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failback"></a>

```python
failback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_system_id`<sup>Required</sup> <a name="host_system_id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemId"></a>

```python
host_system_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notify_switches`<sup>Required</sup> <a name="notify_switches" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitches"></a>

```python
notify_switches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shaping_average_bandwidth`<sup>Required</sup> <a name="shaping_average_bandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidth"></a>

```python
shaping_average_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shaping_burst_size`<sup>Required</sup> <a name="shaping_burst_size" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSize"></a>

```python
shaping_burst_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shaping_enabled`<sup>Required</sup> <a name="shaping_enabled" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabled"></a>

```python
shaping_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shaping_peak_bandwidth`<sup>Required</sup> <a name="shaping_peak_bandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidth"></a>

```python
shaping_peak_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `standby_nics`<sup>Required</sup> <a name="standby_nics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNics"></a>

```python
standby_nics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `teaming_policy`<sup>Required</sup> <a name="teaming_policy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicy"></a>

```python
teaming_policy: str
```

- *Type:* str

---

##### `virtual_switch_name`<sup>Required</sup> <a name="virtual_switch_name" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchName"></a>

```python
virtual_switch_name: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanId"></a>

```python
vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HostPortGroupConfig <a name="HostPortGroupConfig" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import host_port_group

hostPortGroup.HostPortGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host_system_id: str,
  name: str,
  virtual_switch_name: str,
  active_nics: typing.List[str] = None,
  allow_forged_transmits: typing.Union[bool, IResolvable] = None,
  allow_mac_changes: typing.Union[bool, IResolvable] = None,
  allow_promiscuous: typing.Union[bool, IResolvable] = None,
  check_beacon: typing.Union[bool, IResolvable] = None,
  failback: typing.Union[bool, IResolvable] = None,
  id: str = None,
  notify_switches: typing.Union[bool, IResolvable] = None,
  shaping_average_bandwidth: typing.Union[int, float] = None,
  shaping_burst_size: typing.Union[int, float] = None,
  shaping_enabled: typing.Union[bool, IResolvable] = None,
  shaping_peak_bandwidth: typing.Union[int, float] = None,
  standby_nics: typing.List[str] = None,
  teaming_policy: str = None,
  vlan_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.hostSystemId">host_system_id</a></code> | <code>str</code> | The managed object ID of the host to set the virtual switch up on. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.name">name</a></code> | <code>str</code> | The name of the port group. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.virtualSwitchName">virtual_switch_name</a></code> | <code>str</code> | The name of the virtual switch to bind this port group to. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.activeNics">active_nics</a></code> | <code>typing.List[str]</code> | List of active network adapters used for load balancing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowForgedTransmits">allow_forged_transmits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowMacChanges">allow_mac_changes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowPromiscuous">allow_promiscuous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.checkBeacon">check_beacon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable beacon probing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.failback">failback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#id HostPortGroup#id}. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.notifySwitches">notify_switches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingAverageBandwidth">shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The average bandwidth in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingBurstSize">shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | The maximum burst size allowed in bytes if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingEnabled">shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable traffic shaping on this virtual switch or port group. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingPeakBandwidth">shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The peak bandwidth during bursts in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.standbyNics">standby_nics</a></code> | <code>typing.List[str]</code> | List of standby network adapters used for failover. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.teamingPolicy">teaming_policy</a></code> | <code>str</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.vlanId">vlan_id</a></code> | <code>typing.Union[int, float]</code> | The VLAN ID/trunk mode for this port group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_system_id`<sup>Required</sup> <a name="host_system_id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.hostSystemId"></a>

```python
host_system_id: str
```

- *Type:* str

The managed object ID of the host to set the virtual switch up on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#host_system_id HostPortGroup#host_system_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#name HostPortGroup#name}

---

##### `virtual_switch_name`<sup>Required</sup> <a name="virtual_switch_name" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.virtualSwitchName"></a>

```python
virtual_switch_name: str
```

- *Type:* str

The name of the virtual switch to bind this port group to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#virtual_switch_name HostPortGroup#virtual_switch_name}

---

##### `active_nics`<sup>Optional</sup> <a name="active_nics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.activeNics"></a>

```python
active_nics: typing.List[str]
```

- *Type:* typing.List[str]

List of active network adapters used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#active_nics HostPortGroup#active_nics}

---

##### `allow_forged_transmits`<sup>Optional</sup> <a name="allow_forged_transmits" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowForgedTransmits"></a>

```python
allow_forged_transmits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#allow_forged_transmits HostPortGroup#allow_forged_transmits}

---

##### `allow_mac_changes`<sup>Optional</sup> <a name="allow_mac_changes" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowMacChanges"></a>

```python
allow_mac_changes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#allow_mac_changes HostPortGroup#allow_mac_changes}

---

##### `allow_promiscuous`<sup>Optional</sup> <a name="allow_promiscuous" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowPromiscuous"></a>

```python
allow_promiscuous: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#allow_promiscuous HostPortGroup#allow_promiscuous}

---

##### `check_beacon`<sup>Optional</sup> <a name="check_beacon" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.checkBeacon"></a>

```python
check_beacon: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable beacon probing.

Requires that the vSwitch has been configured to use a beacon. If disabled, link status is used only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#check_beacon HostPortGroup#check_beacon}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.failback"></a>

```python
failback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#failback HostPortGroup#failback}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#id HostPortGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notify_switches`<sup>Optional</sup> <a name="notify_switches" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.notifySwitches"></a>

```python
notify_switches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#notify_switches HostPortGroup#notify_switches}

---

##### `shaping_average_bandwidth`<sup>Optional</sup> <a name="shaping_average_bandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingAverageBandwidth"></a>

```python
shaping_average_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The average bandwidth in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#shaping_average_bandwidth HostPortGroup#shaping_average_bandwidth}

---

##### `shaping_burst_size`<sup>Optional</sup> <a name="shaping_burst_size" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingBurstSize"></a>

```python
shaping_burst_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum burst size allowed in bytes if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#shaping_burst_size HostPortGroup#shaping_burst_size}

---

##### `shaping_enabled`<sup>Optional</sup> <a name="shaping_enabled" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingEnabled"></a>

```python
shaping_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable traffic shaping on this virtual switch or port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#shaping_enabled HostPortGroup#shaping_enabled}

---

##### `shaping_peak_bandwidth`<sup>Optional</sup> <a name="shaping_peak_bandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingPeakBandwidth"></a>

```python
shaping_peak_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The peak bandwidth during bursts in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#shaping_peak_bandwidth HostPortGroup#shaping_peak_bandwidth}

---

##### `standby_nics`<sup>Optional</sup> <a name="standby_nics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.standbyNics"></a>

```python
standby_nics: typing.List[str]
```

- *Type:* typing.List[str]

List of standby network adapters used for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#standby_nics HostPortGroup#standby_nics}

---

##### `teaming_policy`<sup>Optional</sup> <a name="teaming_policy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.teamingPolicy"></a>

```python
teaming_policy: str
```

- *Type:* str

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#teaming_policy HostPortGroup#teaming_policy}

---

##### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.vlanId"></a>

```python
vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The VLAN ID/trunk mode for this port group.

An ID of 0 denotes no tagging, an ID of 1-4094 tags with the specific ID, and an ID of 4095 enables trunk mode, allowing the guest to manage its own tagging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/host_port_group#vlan_id HostPortGroup#vlan_id}

---

### HostPortGroupPorts <a name="HostPortGroupPorts" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import host_port_group

hostPortGroup.HostPortGroupPorts()
```


## Classes <a name="Classes" id="Classes"></a>

### HostPortGroupPortsList <a name="HostPortGroupPortsList" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import host_port_group

hostPortGroup.HostPortGroupPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HostPortGroupPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### HostPortGroupPortsOutputReference <a name="HostPortGroupPortsOutputReference" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import host_port_group

hostPortGroup.HostPortGroupPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.macAddresses">mac_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts">HostPortGroupPorts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `mac_addresses`<sup>Required</sup> <a name="mac_addresses" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.macAddresses"></a>

```python
mac_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.internalValue"></a>

```python
internal_value: HostPortGroupPorts
```

- *Type:* <a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts">HostPortGroupPorts</a>

---



