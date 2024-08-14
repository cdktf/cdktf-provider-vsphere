# `hostVirtualSwitch` Submodule <a name="`hostVirtualSwitch` Submodule" id="@cdktf/provider-vsphere.hostVirtualSwitch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostVirtualSwitch <a name="HostVirtualSwitch" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch vsphere_host_virtual_switch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import host_virtual_switch

hostVirtualSwitch.HostVirtualSwitch(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  active_nics: typing.List[str],
  host_system_id: str,
  name: str,
  network_adapters: typing.List[str],
  allow_forged_transmits: typing.Union[bool, IResolvable] = None,
  allow_mac_changes: typing.Union[bool, IResolvable] = None,
  allow_promiscuous: typing.Union[bool, IResolvable] = None,
  beacon_interval: typing.Union[int, float] = None,
  check_beacon: typing.Union[bool, IResolvable] = None,
  failback: typing.Union[bool, IResolvable] = None,
  id: str = None,
  link_discovery_operation: str = None,
  link_discovery_protocol: str = None,
  mtu: typing.Union[int, float] = None,
  notify_switches: typing.Union[bool, IResolvable] = None,
  number_of_ports: typing.Union[int, float] = None,
  shaping_average_bandwidth: typing.Union[int, float] = None,
  shaping_burst_size: typing.Union[int, float] = None,
  shaping_enabled: typing.Union[bool, IResolvable] = None,
  shaping_peak_bandwidth: typing.Union[int, float] = None,
  standby_nics: typing.List[str] = None,
  teaming_policy: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.activeNics">active_nics</a></code> | <code>typing.List[str]</code> | List of active network adapters used for load balancing. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.hostSystemId">host_system_id</a></code> | <code>str</code> | The managed object ID of the host to set the virtual switch up on. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.networkAdapters">network_adapters</a></code> | <code>typing.List[str]</code> | The list of network adapters to bind to this virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.allowForgedTransmits">allow_forged_transmits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.allowMacChanges">allow_mac_changes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.allowPromiscuous">allow_promiscuous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.beaconInterval">beacon_interval</a></code> | <code>typing.Union[int, float]</code> | Determines how often, in seconds, a beacon should be sent to probe for the validity of a link. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.checkBeacon">check_beacon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable beacon probing. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.failback">failback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#id HostVirtualSwitch#id}. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.linkDiscoveryOperation">link_discovery_operation</a></code> | <code>str</code> | Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.linkDiscoveryProtocol">link_discovery_protocol</a></code> | <code>str</code> | The discovery protocol type. Valid values are cdp and lldp. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | The maximum transmission unit (MTU) of the virtual switch in bytes. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.notifySwitches">notify_switches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.numberOfPorts">number_of_ports</a></code> | <code>typing.Union[int, float]</code> | The number of ports that this virtual switch is configured to use. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.shapingAverageBandwidth">shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The average bandwidth in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.shapingBurstSize">shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | The maximum burst size allowed in bytes if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.shapingEnabled">shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable traffic shaping on this virtual switch or port group. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.shapingPeakBandwidth">shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The peak bandwidth during bursts in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.standbyNics">standby_nics</a></code> | <code>typing.List[str]</code> | List of standby network adapters used for failover. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.teamingPolicy">teaming_policy</a></code> | <code>str</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active_nics`<sup>Required</sup> <a name="active_nics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.activeNics"></a>

- *Type:* typing.List[str]

List of active network adapters used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#active_nics HostVirtualSwitch#active_nics}

---

##### `host_system_id`<sup>Required</sup> <a name="host_system_id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.hostSystemId"></a>

- *Type:* str

The managed object ID of the host to set the virtual switch up on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#host_system_id HostVirtualSwitch#host_system_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.name"></a>

- *Type:* str

The name of the virtual switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#name HostVirtualSwitch#name}

---

##### `network_adapters`<sup>Required</sup> <a name="network_adapters" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.networkAdapters"></a>

- *Type:* typing.List[str]

The list of network adapters to bind to this virtual switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#network_adapters HostVirtualSwitch#network_adapters}

---

##### `allow_forged_transmits`<sup>Optional</sup> <a name="allow_forged_transmits" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.allowForgedTransmits"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#allow_forged_transmits HostVirtualSwitch#allow_forged_transmits}

---

##### `allow_mac_changes`<sup>Optional</sup> <a name="allow_mac_changes" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.allowMacChanges"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#allow_mac_changes HostVirtualSwitch#allow_mac_changes}

---

##### `allow_promiscuous`<sup>Optional</sup> <a name="allow_promiscuous" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.allowPromiscuous"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#allow_promiscuous HostVirtualSwitch#allow_promiscuous}

---

##### `beacon_interval`<sup>Optional</sup> <a name="beacon_interval" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.beaconInterval"></a>

- *Type:* typing.Union[int, float]

Determines how often, in seconds, a beacon should be sent to probe for the validity of a link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#beacon_interval HostVirtualSwitch#beacon_interval}

---

##### `check_beacon`<sup>Optional</sup> <a name="check_beacon" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.checkBeacon"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable beacon probing.

Requires that the vSwitch has been configured to use a beacon. If disabled, link status is used only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#check_beacon HostVirtualSwitch#check_beacon}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.failback"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#failback HostVirtualSwitch#failback}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#id HostVirtualSwitch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `link_discovery_operation`<sup>Optional</sup> <a name="link_discovery_operation" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.linkDiscoveryOperation"></a>

- *Type:* str

Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#link_discovery_operation HostVirtualSwitch#link_discovery_operation}

---

##### `link_discovery_protocol`<sup>Optional</sup> <a name="link_discovery_protocol" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.linkDiscoveryProtocol"></a>

- *Type:* str

The discovery protocol type. Valid values are cdp and lldp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#link_discovery_protocol HostVirtualSwitch#link_discovery_protocol}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.mtu"></a>

- *Type:* typing.Union[int, float]

The maximum transmission unit (MTU) of the virtual switch in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#mtu HostVirtualSwitch#mtu}

---

##### `notify_switches`<sup>Optional</sup> <a name="notify_switches" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.notifySwitches"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#notify_switches HostVirtualSwitch#notify_switches}

---

##### `number_of_ports`<sup>Optional</sup> <a name="number_of_ports" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.numberOfPorts"></a>

- *Type:* typing.Union[int, float]

The number of ports that this virtual switch is configured to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#number_of_ports HostVirtualSwitch#number_of_ports}

---

##### `shaping_average_bandwidth`<sup>Optional</sup> <a name="shaping_average_bandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.shapingAverageBandwidth"></a>

- *Type:* typing.Union[int, float]

The average bandwidth in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#shaping_average_bandwidth HostVirtualSwitch#shaping_average_bandwidth}

---

##### `shaping_burst_size`<sup>Optional</sup> <a name="shaping_burst_size" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.shapingBurstSize"></a>

- *Type:* typing.Union[int, float]

The maximum burst size allowed in bytes if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#shaping_burst_size HostVirtualSwitch#shaping_burst_size}

---

##### `shaping_enabled`<sup>Optional</sup> <a name="shaping_enabled" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.shapingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable traffic shaping on this virtual switch or port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#shaping_enabled HostVirtualSwitch#shaping_enabled}

---

##### `shaping_peak_bandwidth`<sup>Optional</sup> <a name="shaping_peak_bandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.shapingPeakBandwidth"></a>

- *Type:* typing.Union[int, float]

The peak bandwidth during bursts in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#shaping_peak_bandwidth HostVirtualSwitch#shaping_peak_bandwidth}

---

##### `standby_nics`<sup>Optional</sup> <a name="standby_nics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.standbyNics"></a>

- *Type:* typing.List[str]

List of standby network adapters used for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#standby_nics HostVirtualSwitch#standby_nics}

---

##### `teaming_policy`<sup>Optional</sup> <a name="teaming_policy" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.teamingPolicy"></a>

- *Type:* str

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#teaming_policy HostVirtualSwitch#teaming_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowForgedTransmits">reset_allow_forged_transmits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowMacChanges">reset_allow_mac_changes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowPromiscuous">reset_allow_promiscuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetBeaconInterval">reset_beacon_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetCheckBeacon">reset_check_beacon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetFailback">reset_failback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryOperation">reset_link_discovery_operation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryProtocol">reset_link_discovery_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetMtu">reset_mtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNotifySwitches">reset_notify_switches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNumberOfPorts">reset_number_of_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingAverageBandwidth">reset_shaping_average_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingBurstSize">reset_shaping_burst_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingEnabled">reset_shaping_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingPeakBandwidth">reset_shaping_peak_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetStandbyNics">reset_standby_nics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetTeamingPolicy">reset_teaming_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allow_forged_transmits` <a name="reset_allow_forged_transmits" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowForgedTransmits"></a>

```python
def reset_allow_forged_transmits() -> None
```

##### `reset_allow_mac_changes` <a name="reset_allow_mac_changes" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowMacChanges"></a>

```python
def reset_allow_mac_changes() -> None
```

##### `reset_allow_promiscuous` <a name="reset_allow_promiscuous" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowPromiscuous"></a>

```python
def reset_allow_promiscuous() -> None
```

##### `reset_beacon_interval` <a name="reset_beacon_interval" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetBeaconInterval"></a>

```python
def reset_beacon_interval() -> None
```

##### `reset_check_beacon` <a name="reset_check_beacon" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetCheckBeacon"></a>

```python
def reset_check_beacon() -> None
```

##### `reset_failback` <a name="reset_failback" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetFailback"></a>

```python
def reset_failback() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_link_discovery_operation` <a name="reset_link_discovery_operation" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryOperation"></a>

```python
def reset_link_discovery_operation() -> None
```

##### `reset_link_discovery_protocol` <a name="reset_link_discovery_protocol" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryProtocol"></a>

```python
def reset_link_discovery_protocol() -> None
```

##### `reset_mtu` <a name="reset_mtu" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetMtu"></a>

```python
def reset_mtu() -> None
```

##### `reset_notify_switches` <a name="reset_notify_switches" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNotifySwitches"></a>

```python
def reset_notify_switches() -> None
```

##### `reset_number_of_ports` <a name="reset_number_of_ports" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNumberOfPorts"></a>

```python
def reset_number_of_ports() -> None
```

##### `reset_shaping_average_bandwidth` <a name="reset_shaping_average_bandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingAverageBandwidth"></a>

```python
def reset_shaping_average_bandwidth() -> None
```

##### `reset_shaping_burst_size` <a name="reset_shaping_burst_size" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingBurstSize"></a>

```python
def reset_shaping_burst_size() -> None
```

##### `reset_shaping_enabled` <a name="reset_shaping_enabled" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingEnabled"></a>

```python
def reset_shaping_enabled() -> None
```

##### `reset_shaping_peak_bandwidth` <a name="reset_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingPeakBandwidth"></a>

```python
def reset_shaping_peak_bandwidth() -> None
```

##### `reset_standby_nics` <a name="reset_standby_nics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetStandbyNics"></a>

```python
def reset_standby_nics() -> None
```

##### `reset_teaming_policy` <a name="reset_teaming_policy" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetTeamingPolicy"></a>

```python
def reset_teaming_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HostVirtualSwitch resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import host_virtual_switch

hostVirtualSwitch.HostVirtualSwitch.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import host_virtual_switch

hostVirtualSwitch.HostVirtualSwitch.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import host_virtual_switch

hostVirtualSwitch.HostVirtualSwitch.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import host_virtual_switch

hostVirtualSwitch.HostVirtualSwitch.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HostVirtualSwitch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HostVirtualSwitch to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HostVirtualSwitch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HostVirtualSwitch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNicsInput">active_nics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmitsInput">allow_forged_transmits_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChangesInput">allow_mac_changes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuousInput">allow_promiscuous_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconIntervalInput">beacon_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeaconInput">check_beacon_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failbackInput">failback_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemIdInput">host_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperationInput">link_discovery_operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocolInput">link_discovery_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtuInput">mtu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdaptersInput">network_adapters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitchesInput">notify_switches_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPortsInput">number_of_ports_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidthInput">shaping_average_bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSizeInput">shaping_burst_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabledInput">shaping_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidthInput">shaping_peak_bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNicsInput">standby_nics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicyInput">teaming_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNics">active_nics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmits">allow_forged_transmits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChanges">allow_mac_changes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuous">allow_promiscuous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconInterval">beacon_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeacon">check_beacon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failback">failback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemId">host_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperation">link_discovery_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocol">link_discovery_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdapters">network_adapters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitches">notify_switches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPorts">number_of_ports</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidth">shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSize">shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabled">shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidth">shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNics">standby_nics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicy">teaming_policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active_nics_input`<sup>Optional</sup> <a name="active_nics_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNicsInput"></a>

```python
active_nics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_forged_transmits_input`<sup>Optional</sup> <a name="allow_forged_transmits_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmitsInput"></a>

```python
allow_forged_transmits_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_mac_changes_input`<sup>Optional</sup> <a name="allow_mac_changes_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChangesInput"></a>

```python
allow_mac_changes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_promiscuous_input`<sup>Optional</sup> <a name="allow_promiscuous_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuousInput"></a>

```python
allow_promiscuous_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `beacon_interval_input`<sup>Optional</sup> <a name="beacon_interval_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconIntervalInput"></a>

```python
beacon_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `check_beacon_input`<sup>Optional</sup> <a name="check_beacon_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeaconInput"></a>

```python
check_beacon_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failback_input`<sup>Optional</sup> <a name="failback_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failbackInput"></a>

```python
failback_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_system_id_input`<sup>Optional</sup> <a name="host_system_id_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemIdInput"></a>

```python
host_system_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `link_discovery_operation_input`<sup>Optional</sup> <a name="link_discovery_operation_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperationInput"></a>

```python
link_discovery_operation_input: str
```

- *Type:* str

---

##### `link_discovery_protocol_input`<sup>Optional</sup> <a name="link_discovery_protocol_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocolInput"></a>

```python
link_discovery_protocol_input: str
```

- *Type:* str

---

##### `mtu_input`<sup>Optional</sup> <a name="mtu_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtuInput"></a>

```python
mtu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_adapters_input`<sup>Optional</sup> <a name="network_adapters_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdaptersInput"></a>

```python
network_adapters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notify_switches_input`<sup>Optional</sup> <a name="notify_switches_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitchesInput"></a>

```python
notify_switches_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `number_of_ports_input`<sup>Optional</sup> <a name="number_of_ports_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPortsInput"></a>

```python
number_of_ports_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shaping_average_bandwidth_input`<sup>Optional</sup> <a name="shaping_average_bandwidth_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidthInput"></a>

```python
shaping_average_bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shaping_burst_size_input`<sup>Optional</sup> <a name="shaping_burst_size_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSizeInput"></a>

```python
shaping_burst_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shaping_enabled_input`<sup>Optional</sup> <a name="shaping_enabled_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabledInput"></a>

```python
shaping_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shaping_peak_bandwidth_input`<sup>Optional</sup> <a name="shaping_peak_bandwidth_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidthInput"></a>

```python
shaping_peak_bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `standby_nics_input`<sup>Optional</sup> <a name="standby_nics_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNicsInput"></a>

```python
standby_nics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `teaming_policy_input`<sup>Optional</sup> <a name="teaming_policy_input" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicyInput"></a>

```python
teaming_policy_input: str
```

- *Type:* str

---

##### `active_nics`<sup>Required</sup> <a name="active_nics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNics"></a>

```python
active_nics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_forged_transmits`<sup>Required</sup> <a name="allow_forged_transmits" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmits"></a>

```python
allow_forged_transmits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_mac_changes`<sup>Required</sup> <a name="allow_mac_changes" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChanges"></a>

```python
allow_mac_changes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_promiscuous`<sup>Required</sup> <a name="allow_promiscuous" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuous"></a>

```python
allow_promiscuous: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `beacon_interval`<sup>Required</sup> <a name="beacon_interval" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconInterval"></a>

```python
beacon_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `check_beacon`<sup>Required</sup> <a name="check_beacon" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeacon"></a>

```python
check_beacon: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failback`<sup>Required</sup> <a name="failback" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failback"></a>

```python
failback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_system_id`<sup>Required</sup> <a name="host_system_id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemId"></a>

```python
host_system_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `link_discovery_operation`<sup>Required</sup> <a name="link_discovery_operation" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperation"></a>

```python
link_discovery_operation: str
```

- *Type:* str

---

##### `link_discovery_protocol`<sup>Required</sup> <a name="link_discovery_protocol" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocol"></a>

```python
link_discovery_protocol: str
```

- *Type:* str

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_adapters`<sup>Required</sup> <a name="network_adapters" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdapters"></a>

```python
network_adapters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notify_switches`<sup>Required</sup> <a name="notify_switches" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitches"></a>

```python
notify_switches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `number_of_ports`<sup>Required</sup> <a name="number_of_ports" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPorts"></a>

```python
number_of_ports: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shaping_average_bandwidth`<sup>Required</sup> <a name="shaping_average_bandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidth"></a>

```python
shaping_average_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shaping_burst_size`<sup>Required</sup> <a name="shaping_burst_size" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSize"></a>

```python
shaping_burst_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shaping_enabled`<sup>Required</sup> <a name="shaping_enabled" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabled"></a>

```python
shaping_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shaping_peak_bandwidth`<sup>Required</sup> <a name="shaping_peak_bandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidth"></a>

```python
shaping_peak_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `standby_nics`<sup>Required</sup> <a name="standby_nics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNics"></a>

```python
standby_nics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `teaming_policy`<sup>Required</sup> <a name="teaming_policy" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicy"></a>

```python
teaming_policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HostVirtualSwitchConfig <a name="HostVirtualSwitchConfig" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import host_virtual_switch

hostVirtualSwitch.HostVirtualSwitchConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  active_nics: typing.List[str],
  host_system_id: str,
  name: str,
  network_adapters: typing.List[str],
  allow_forged_transmits: typing.Union[bool, IResolvable] = None,
  allow_mac_changes: typing.Union[bool, IResolvable] = None,
  allow_promiscuous: typing.Union[bool, IResolvable] = None,
  beacon_interval: typing.Union[int, float] = None,
  check_beacon: typing.Union[bool, IResolvable] = None,
  failback: typing.Union[bool, IResolvable] = None,
  id: str = None,
  link_discovery_operation: str = None,
  link_discovery_protocol: str = None,
  mtu: typing.Union[int, float] = None,
  notify_switches: typing.Union[bool, IResolvable] = None,
  number_of_ports: typing.Union[int, float] = None,
  shaping_average_bandwidth: typing.Union[int, float] = None,
  shaping_burst_size: typing.Union[int, float] = None,
  shaping_enabled: typing.Union[bool, IResolvable] = None,
  shaping_peak_bandwidth: typing.Union[int, float] = None,
  standby_nics: typing.List[str] = None,
  teaming_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.activeNics">active_nics</a></code> | <code>typing.List[str]</code> | List of active network adapters used for load balancing. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.hostSystemId">host_system_id</a></code> | <code>str</code> | The managed object ID of the host to set the virtual switch up on. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.name">name</a></code> | <code>str</code> | The name of the virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.networkAdapters">network_adapters</a></code> | <code>typing.List[str]</code> | The list of network adapters to bind to this virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowForgedTransmits">allow_forged_transmits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowMacChanges">allow_mac_changes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowPromiscuous">allow_promiscuous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.beaconInterval">beacon_interval</a></code> | <code>typing.Union[int, float]</code> | Determines how often, in seconds, a beacon should be sent to probe for the validity of a link. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.checkBeacon">check_beacon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable beacon probing. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.failback">failback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#id HostVirtualSwitch#id}. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryOperation">link_discovery_operation</a></code> | <code>str</code> | Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryProtocol">link_discovery_protocol</a></code> | <code>str</code> | The discovery protocol type. Valid values are cdp and lldp. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | The maximum transmission unit (MTU) of the virtual switch in bytes. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.notifySwitches">notify_switches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.numberOfPorts">number_of_ports</a></code> | <code>typing.Union[int, float]</code> | The number of ports that this virtual switch is configured to use. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingAverageBandwidth">shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The average bandwidth in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingBurstSize">shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | The maximum burst size allowed in bytes if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingEnabled">shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable traffic shaping on this virtual switch or port group. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingPeakBandwidth">shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The peak bandwidth during bursts in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.standbyNics">standby_nics</a></code> | <code>typing.List[str]</code> | List of standby network adapters used for failover. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.teamingPolicy">teaming_policy</a></code> | <code>str</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active_nics`<sup>Required</sup> <a name="active_nics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.activeNics"></a>

```python
active_nics: typing.List[str]
```

- *Type:* typing.List[str]

List of active network adapters used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#active_nics HostVirtualSwitch#active_nics}

---

##### `host_system_id`<sup>Required</sup> <a name="host_system_id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.hostSystemId"></a>

```python
host_system_id: str
```

- *Type:* str

The managed object ID of the host to set the virtual switch up on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#host_system_id HostVirtualSwitch#host_system_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the virtual switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#name HostVirtualSwitch#name}

---

##### `network_adapters`<sup>Required</sup> <a name="network_adapters" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.networkAdapters"></a>

```python
network_adapters: typing.List[str]
```

- *Type:* typing.List[str]

The list of network adapters to bind to this virtual switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#network_adapters HostVirtualSwitch#network_adapters}

---

##### `allow_forged_transmits`<sup>Optional</sup> <a name="allow_forged_transmits" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowForgedTransmits"></a>

```python
allow_forged_transmits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#allow_forged_transmits HostVirtualSwitch#allow_forged_transmits}

---

##### `allow_mac_changes`<sup>Optional</sup> <a name="allow_mac_changes" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowMacChanges"></a>

```python
allow_mac_changes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#allow_mac_changes HostVirtualSwitch#allow_mac_changes}

---

##### `allow_promiscuous`<sup>Optional</sup> <a name="allow_promiscuous" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowPromiscuous"></a>

```python
allow_promiscuous: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#allow_promiscuous HostVirtualSwitch#allow_promiscuous}

---

##### `beacon_interval`<sup>Optional</sup> <a name="beacon_interval" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.beaconInterval"></a>

```python
beacon_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Determines how often, in seconds, a beacon should be sent to probe for the validity of a link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#beacon_interval HostVirtualSwitch#beacon_interval}

---

##### `check_beacon`<sup>Optional</sup> <a name="check_beacon" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.checkBeacon"></a>

```python
check_beacon: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable beacon probing.

Requires that the vSwitch has been configured to use a beacon. If disabled, link status is used only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#check_beacon HostVirtualSwitch#check_beacon}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.failback"></a>

```python
failback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#failback HostVirtualSwitch#failback}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#id HostVirtualSwitch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `link_discovery_operation`<sup>Optional</sup> <a name="link_discovery_operation" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryOperation"></a>

```python
link_discovery_operation: str
```

- *Type:* str

Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#link_discovery_operation HostVirtualSwitch#link_discovery_operation}

---

##### `link_discovery_protocol`<sup>Optional</sup> <a name="link_discovery_protocol" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryProtocol"></a>

```python
link_discovery_protocol: str
```

- *Type:* str

The discovery protocol type. Valid values are cdp and lldp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#link_discovery_protocol HostVirtualSwitch#link_discovery_protocol}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum transmission unit (MTU) of the virtual switch in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#mtu HostVirtualSwitch#mtu}

---

##### `notify_switches`<sup>Optional</sup> <a name="notify_switches" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.notifySwitches"></a>

```python
notify_switches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#notify_switches HostVirtualSwitch#notify_switches}

---

##### `number_of_ports`<sup>Optional</sup> <a name="number_of_ports" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.numberOfPorts"></a>

```python
number_of_ports: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of ports that this virtual switch is configured to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#number_of_ports HostVirtualSwitch#number_of_ports}

---

##### `shaping_average_bandwidth`<sup>Optional</sup> <a name="shaping_average_bandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingAverageBandwidth"></a>

```python
shaping_average_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The average bandwidth in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#shaping_average_bandwidth HostVirtualSwitch#shaping_average_bandwidth}

---

##### `shaping_burst_size`<sup>Optional</sup> <a name="shaping_burst_size" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingBurstSize"></a>

```python
shaping_burst_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum burst size allowed in bytes if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#shaping_burst_size HostVirtualSwitch#shaping_burst_size}

---

##### `shaping_enabled`<sup>Optional</sup> <a name="shaping_enabled" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingEnabled"></a>

```python
shaping_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable traffic shaping on this virtual switch or port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#shaping_enabled HostVirtualSwitch#shaping_enabled}

---

##### `shaping_peak_bandwidth`<sup>Optional</sup> <a name="shaping_peak_bandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingPeakBandwidth"></a>

```python
shaping_peak_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The peak bandwidth during bursts in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#shaping_peak_bandwidth HostVirtualSwitch#shaping_peak_bandwidth}

---

##### `standby_nics`<sup>Optional</sup> <a name="standby_nics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.standbyNics"></a>

```python
standby_nics: typing.List[str]
```

- *Type:* typing.List[str]

List of standby network adapters used for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#standby_nics HostVirtualSwitch#standby_nics}

---

##### `teaming_policy`<sup>Optional</sup> <a name="teaming_policy" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.teamingPolicy"></a>

```python
teaming_policy: str
```

- *Type:* str

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/host_virtual_switch#teaming_policy HostVirtualSwitch#teaming_policy}

---



