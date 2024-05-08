# `distributedPortGroup` Submodule <a name="`distributedPortGroup` Submodule" id="@cdktf/provider-vsphere.distributedPortGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DistributedPortGroup <a name="DistributedPortGroup" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group vsphere_distributed_port_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_port_group

distributedPortGroup.DistributedPortGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  distributed_virtual_switch_uuid: str,
  name: str,
  active_uplinks: typing.List[str] = None,
  allow_forged_transmits: typing.Union[bool, IResolvable] = None,
  allow_mac_changes: typing.Union[bool, IResolvable] = None,
  allow_promiscuous: typing.Union[bool, IResolvable] = None,
  auto_expand: typing.Union[bool, IResolvable] = None,
  block_all_ports: typing.Union[bool, IResolvable] = None,
  block_override_allowed: typing.Union[bool, IResolvable] = None,
  check_beacon: typing.Union[bool, IResolvable] = None,
  custom_attributes: typing.Mapping[str] = None,
  description: str = None,
  directpath_gen2_allowed: typing.Union[bool, IResolvable] = None,
  egress_shaping_average_bandwidth: typing.Union[int, float] = None,
  egress_shaping_burst_size: typing.Union[int, float] = None,
  egress_shaping_enabled: typing.Union[bool, IResolvable] = None,
  egress_shaping_peak_bandwidth: typing.Union[int, float] = None,
  failback: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ingress_shaping_average_bandwidth: typing.Union[int, float] = None,
  ingress_shaping_burst_size: typing.Union[int, float] = None,
  ingress_shaping_enabled: typing.Union[bool, IResolvable] = None,
  ingress_shaping_peak_bandwidth: typing.Union[int, float] = None,
  lacp_enabled: typing.Union[bool, IResolvable] = None,
  lacp_mode: str = None,
  live_port_moving_allowed: typing.Union[bool, IResolvable] = None,
  netflow_enabled: typing.Union[bool, IResolvable] = None,
  netflow_override_allowed: typing.Union[bool, IResolvable] = None,
  network_resource_pool_key: str = None,
  network_resource_pool_override_allowed: typing.Union[bool, IResolvable] = None,
  notify_switches: typing.Union[bool, IResolvable] = None,
  number_of_ports: typing.Union[int, float] = None,
  port_config_reset_at_disconnect: typing.Union[bool, IResolvable] = None,
  port_name_format: str = None,
  port_private_secondary_vlan_id: typing.Union[int, float] = None,
  security_policy_override_allowed: typing.Union[bool, IResolvable] = None,
  shaping_override_allowed: typing.Union[bool, IResolvable] = None,
  standby_uplinks: typing.List[str] = None,
  tags: typing.List[str] = None,
  teaming_policy: str = None,
  traffic_filter_override_allowed: typing.Union[bool, IResolvable] = None,
  tx_uplink: typing.Union[bool, IResolvable] = None,
  type: str = None,
  uplink_teaming_override_allowed: typing.Union[bool, IResolvable] = None,
  vlan_id: typing.Union[int, float] = None,
  vlan_override_allowed: typing.Union[bool, IResolvable] = None,
  vlan_range: typing.Union[IResolvable, typing.List[DistributedPortGroupVlanRange]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.distributedVirtualSwitchUuid">distributed_virtual_switch_uuid</a></code> | <code>str</code> | The UUID of the DVS to attach this port group to. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.activeUplinks">active_uplinks</a></code> | <code>typing.List[str]</code> | List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.allowForgedTransmits">allow_forged_transmits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.allowMacChanges">allow_mac_changes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.allowPromiscuous">allow_promiscuous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.autoExpand">auto_expand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Auto-expands the port group beyond the port count configured in number_of_ports when necessary. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.blockAllPorts">block_all_ports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether to block all ports by default. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.blockOverrideAllowed">block_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the blocked setting of an individual port to override the setting in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.checkBeacon">check_beacon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable beacon probing on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.directpathGen2Allowed">directpath_gen2_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow VMDirectPath Gen2 on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.egressShapingAverageBandwidth">egress_shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The average egress bandwidth in bits per second if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.egressShapingBurstSize">egress_shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | The maximum egress burst size allowed in bytes if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.egressShapingEnabled">egress_shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if the traffic shaper is enabled for egress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.egressShapingPeakBandwidth">egress_shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.failback">failback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#id DistributedPortGroup#id}. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.ingressShapingAverageBandwidth">ingress_shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The average ingress bandwidth in bits per second if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.ingressShapingBurstSize">ingress_shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.ingressShapingEnabled">ingress_shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if the traffic shaper is enabled for ingress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.ingressShapingPeakBandwidth">ingress_shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.lacpEnabled">lacp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to enable LACP on all uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.lacpMode">lacp_mode</a></code> | <code>str</code> | The uplink LACP mode to use. Can be one of active or passive. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.livePortMovingAllowed">live_port_moving_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow a live port to be moved in and out of the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.netflowEnabled">netflow_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether to enable netflow on all ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.netflowOverrideAllowed">netflow_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the enabling or disabling of Netflow on a port, contrary to the policy in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.networkResourcePoolKey">network_resource_pool_key</a></code> | <code>str</code> | The key of a network resource pool to associate with this portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.networkResourcePoolOverrideAllowed">network_resource_pool_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the network resource pool of an individual port to override the setting in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.notifySwitches">notify_switches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.numberOfPorts">number_of_ports</a></code> | <code>typing.Union[int, float]</code> | The number of ports in this portgroup. The DVS will expand and shrink by modifying this setting. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.portConfigResetAtDisconnect">port_config_reset_at_disconnect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Reset the setting of any ports in this portgroup back to the default setting when the port disconnects. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.portNameFormat">port_name_format</a></code> | <code>str</code> | A template string to use when creating ports in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.portPrivateSecondaryVlanId">port_private_secondary_vlan_id</a></code> | <code>typing.Union[int, float]</code> | The secondary VLAN ID for this port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.securityPolicyOverrideAllowed">security_policy_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow security policy settings on a port to override those on the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.shapingOverrideAllowed">shaping_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the traffic shaping policies of an individual port to override the settings in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.standbyUplinks">standby_uplinks</a></code> | <code>typing.List[str]</code> | List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.teamingPolicy">teaming_policy</a></code> | <code>str</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.trafficFilterOverrideAllowed">traffic_filter_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow any filter policies set on the individual port to override those in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.txUplink">tx_uplink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of portgroup. Can be one of earlyBinding (static) or ephemeral. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.uplinkTeamingOverrideAllowed">uplink_teaming_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the uplink teaming policies on a port to override those on the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.vlanId">vlan_id</a></code> | <code>typing.Union[int, float]</code> | The VLAN ID for single VLAN mode. 0 denotes no VLAN. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.vlanOverrideAllowed">vlan_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the VLAN configuration on a port to override those on the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.vlanRange">vlan_range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>]]</code> | vlan_range block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `distributed_virtual_switch_uuid`<sup>Required</sup> <a name="distributed_virtual_switch_uuid" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.distributedVirtualSwitchUuid"></a>

- *Type:* str

The UUID of the DVS to attach this port group to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#distributed_virtual_switch_uuid DistributedPortGroup#distributed_virtual_switch_uuid}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.name"></a>

- *Type:* str

The name of the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#name DistributedPortGroup#name}

---

##### `active_uplinks`<sup>Optional</sup> <a name="active_uplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.activeUplinks"></a>

- *Type:* typing.List[str]

List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#active_uplinks DistributedPortGroup#active_uplinks}

---

##### `allow_forged_transmits`<sup>Optional</sup> <a name="allow_forged_transmits" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.allowForgedTransmits"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#allow_forged_transmits DistributedPortGroup#allow_forged_transmits}

---

##### `allow_mac_changes`<sup>Optional</sup> <a name="allow_mac_changes" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.allowMacChanges"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#allow_mac_changes DistributedPortGroup#allow_mac_changes}

---

##### `allow_promiscuous`<sup>Optional</sup> <a name="allow_promiscuous" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.allowPromiscuous"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#allow_promiscuous DistributedPortGroup#allow_promiscuous}

---

##### `auto_expand`<sup>Optional</sup> <a name="auto_expand" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.autoExpand"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Auto-expands the port group beyond the port count configured in number_of_ports when necessary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#auto_expand DistributedPortGroup#auto_expand}

---

##### `block_all_ports`<sup>Optional</sup> <a name="block_all_ports" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.blockAllPorts"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to block all ports by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#block_all_ports DistributedPortGroup#block_all_ports}

---

##### `block_override_allowed`<sup>Optional</sup> <a name="block_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.blockOverrideAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the blocked setting of an individual port to override the setting in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#block_override_allowed DistributedPortGroup#block_override_allowed}

---

##### `check_beacon`<sup>Optional</sup> <a name="check_beacon" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.checkBeacon"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable beacon probing on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#check_beacon DistributedPortGroup#check_beacon}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.customAttributes"></a>

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#custom_attributes DistributedPortGroup#custom_attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.description"></a>

- *Type:* str

The description of the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#description DistributedPortGroup#description}

---

##### `directpath_gen2_allowed`<sup>Optional</sup> <a name="directpath_gen2_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.directpathGen2Allowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow VMDirectPath Gen2 on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#directpath_gen2_allowed DistributedPortGroup#directpath_gen2_allowed}

---

##### `egress_shaping_average_bandwidth`<sup>Optional</sup> <a name="egress_shaping_average_bandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.egressShapingAverageBandwidth"></a>

- *Type:* typing.Union[int, float]

The average egress bandwidth in bits per second if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#egress_shaping_average_bandwidth DistributedPortGroup#egress_shaping_average_bandwidth}

---

##### `egress_shaping_burst_size`<sup>Optional</sup> <a name="egress_shaping_burst_size" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.egressShapingBurstSize"></a>

- *Type:* typing.Union[int, float]

The maximum egress burst size allowed in bytes if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#egress_shaping_burst_size DistributedPortGroup#egress_shaping_burst_size}

---

##### `egress_shaping_enabled`<sup>Optional</sup> <a name="egress_shaping_enabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.egressShapingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if the traffic shaper is enabled for egress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#egress_shaping_enabled DistributedPortGroup#egress_shaping_enabled}

---

##### `egress_shaping_peak_bandwidth`<sup>Optional</sup> <a name="egress_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.egressShapingPeakBandwidth"></a>

- *Type:* typing.Union[int, float]

The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#egress_shaping_peak_bandwidth DistributedPortGroup#egress_shaping_peak_bandwidth}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.failback"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#failback DistributedPortGroup#failback}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#id DistributedPortGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress_shaping_average_bandwidth`<sup>Optional</sup> <a name="ingress_shaping_average_bandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.ingressShapingAverageBandwidth"></a>

- *Type:* typing.Union[int, float]

The average ingress bandwidth in bits per second if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#ingress_shaping_average_bandwidth DistributedPortGroup#ingress_shaping_average_bandwidth}

---

##### `ingress_shaping_burst_size`<sup>Optional</sup> <a name="ingress_shaping_burst_size" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.ingressShapingBurstSize"></a>

- *Type:* typing.Union[int, float]

The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#ingress_shaping_burst_size DistributedPortGroup#ingress_shaping_burst_size}

---

##### `ingress_shaping_enabled`<sup>Optional</sup> <a name="ingress_shaping_enabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.ingressShapingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if the traffic shaper is enabled for ingress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#ingress_shaping_enabled DistributedPortGroup#ingress_shaping_enabled}

---

##### `ingress_shaping_peak_bandwidth`<sup>Optional</sup> <a name="ingress_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.ingressShapingPeakBandwidth"></a>

- *Type:* typing.Union[int, float]

The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#ingress_shaping_peak_bandwidth DistributedPortGroup#ingress_shaping_peak_bandwidth}

---

##### `lacp_enabled`<sup>Optional</sup> <a name="lacp_enabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.lacpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to enable LACP on all uplink ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#lacp_enabled DistributedPortGroup#lacp_enabled}

---

##### `lacp_mode`<sup>Optional</sup> <a name="lacp_mode" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.lacpMode"></a>

- *Type:* str

The uplink LACP mode to use. Can be one of active or passive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#lacp_mode DistributedPortGroup#lacp_mode}

---

##### `live_port_moving_allowed`<sup>Optional</sup> <a name="live_port_moving_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.livePortMovingAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow a live port to be moved in and out of the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#live_port_moving_allowed DistributedPortGroup#live_port_moving_allowed}

---

##### `netflow_enabled`<sup>Optional</sup> <a name="netflow_enabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.netflowEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to enable netflow on all ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#netflow_enabled DistributedPortGroup#netflow_enabled}

---

##### `netflow_override_allowed`<sup>Optional</sup> <a name="netflow_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.netflowOverrideAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the enabling or disabling of Netflow on a port, contrary to the policy in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#netflow_override_allowed DistributedPortGroup#netflow_override_allowed}

---

##### `network_resource_pool_key`<sup>Optional</sup> <a name="network_resource_pool_key" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.networkResourcePoolKey"></a>

- *Type:* str

The key of a network resource pool to associate with this portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#network_resource_pool_key DistributedPortGroup#network_resource_pool_key}

---

##### `network_resource_pool_override_allowed`<sup>Optional</sup> <a name="network_resource_pool_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.networkResourcePoolOverrideAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the network resource pool of an individual port to override the setting in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#network_resource_pool_override_allowed DistributedPortGroup#network_resource_pool_override_allowed}

---

##### `notify_switches`<sup>Optional</sup> <a name="notify_switches" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.notifySwitches"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#notify_switches DistributedPortGroup#notify_switches}

---

##### `number_of_ports`<sup>Optional</sup> <a name="number_of_ports" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.numberOfPorts"></a>

- *Type:* typing.Union[int, float]

The number of ports in this portgroup. The DVS will expand and shrink by modifying this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#number_of_ports DistributedPortGroup#number_of_ports}

---

##### `port_config_reset_at_disconnect`<sup>Optional</sup> <a name="port_config_reset_at_disconnect" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.portConfigResetAtDisconnect"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Reset the setting of any ports in this portgroup back to the default setting when the port disconnects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#port_config_reset_at_disconnect DistributedPortGroup#port_config_reset_at_disconnect}

---

##### `port_name_format`<sup>Optional</sup> <a name="port_name_format" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.portNameFormat"></a>

- *Type:* str

A template string to use when creating ports in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#port_name_format DistributedPortGroup#port_name_format}

---

##### `port_private_secondary_vlan_id`<sup>Optional</sup> <a name="port_private_secondary_vlan_id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.portPrivateSecondaryVlanId"></a>

- *Type:* typing.Union[int, float]

The secondary VLAN ID for this port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#port_private_secondary_vlan_id DistributedPortGroup#port_private_secondary_vlan_id}

---

##### `security_policy_override_allowed`<sup>Optional</sup> <a name="security_policy_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.securityPolicyOverrideAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow security policy settings on a port to override those on the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#security_policy_override_allowed DistributedPortGroup#security_policy_override_allowed}

---

##### `shaping_override_allowed`<sup>Optional</sup> <a name="shaping_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.shapingOverrideAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the traffic shaping policies of an individual port to override the settings in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#shaping_override_allowed DistributedPortGroup#shaping_override_allowed}

---

##### `standby_uplinks`<sup>Optional</sup> <a name="standby_uplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.standbyUplinks"></a>

- *Type:* typing.List[str]

List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#standby_uplinks DistributedPortGroup#standby_uplinks}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#tags DistributedPortGroup#tags}

---

##### `teaming_policy`<sup>Optional</sup> <a name="teaming_policy" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.teamingPolicy"></a>

- *Type:* str

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#teaming_policy DistributedPortGroup#teaming_policy}

---

##### `traffic_filter_override_allowed`<sup>Optional</sup> <a name="traffic_filter_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.trafficFilterOverrideAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow any filter policies set on the individual port to override those in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#traffic_filter_override_allowed DistributedPortGroup#traffic_filter_override_allowed}

---

##### `tx_uplink`<sup>Optional</sup> <a name="tx_uplink" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.txUplink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#tx_uplink DistributedPortGroup#tx_uplink}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.type"></a>

- *Type:* str

The type of portgroup. Can be one of earlyBinding (static) or ephemeral.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#type DistributedPortGroup#type}

---

##### `uplink_teaming_override_allowed`<sup>Optional</sup> <a name="uplink_teaming_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.uplinkTeamingOverrideAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the uplink teaming policies on a port to override those on the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#uplink_teaming_override_allowed DistributedPortGroup#uplink_teaming_override_allowed}

---

##### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.vlanId"></a>

- *Type:* typing.Union[int, float]

The VLAN ID for single VLAN mode. 0 denotes no VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#vlan_id DistributedPortGroup#vlan_id}

---

##### `vlan_override_allowed`<sup>Optional</sup> <a name="vlan_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.vlanOverrideAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the VLAN configuration on a port to override those on the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#vlan_override_allowed DistributedPortGroup#vlan_override_allowed}

---

##### `vlan_range`<sup>Optional</sup> <a name="vlan_range" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.vlanRange"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>]]

vlan_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#vlan_range DistributedPortGroup#vlan_range}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.putVlanRange">put_vlan_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetActiveUplinks">reset_active_uplinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowForgedTransmits">reset_allow_forged_transmits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowMacChanges">reset_allow_mac_changes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowPromiscuous">reset_allow_promiscuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAutoExpand">reset_auto_expand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetBlockAllPorts">reset_block_all_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetBlockOverrideAllowed">reset_block_override_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetCheckBeacon">reset_check_beacon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetDirectpathGen2Allowed">reset_directpath_gen2_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingAverageBandwidth">reset_egress_shaping_average_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingBurstSize">reset_egress_shaping_burst_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingEnabled">reset_egress_shaping_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingPeakBandwidth">reset_egress_shaping_peak_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetFailback">reset_failback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingAverageBandwidth">reset_ingress_shaping_average_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingBurstSize">reset_ingress_shaping_burst_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingEnabled">reset_ingress_shaping_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingPeakBandwidth">reset_ingress_shaping_peak_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLacpEnabled">reset_lacp_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLacpMode">reset_lacp_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLivePortMovingAllowed">reset_live_port_moving_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetflowEnabled">reset_netflow_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetflowOverrideAllowed">reset_netflow_override_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetworkResourcePoolKey">reset_network_resource_pool_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetworkResourcePoolOverrideAllowed">reset_network_resource_pool_override_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNotifySwitches">reset_notify_switches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNumberOfPorts">reset_number_of_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortConfigResetAtDisconnect">reset_port_config_reset_at_disconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortNameFormat">reset_port_name_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortPrivateSecondaryVlanId">reset_port_private_secondary_vlan_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetSecurityPolicyOverrideAllowed">reset_security_policy_override_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetShapingOverrideAllowed">reset_shaping_override_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetStandbyUplinks">reset_standby_uplinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTeamingPolicy">reset_teaming_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTrafficFilterOverrideAllowed">reset_traffic_filter_override_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTxUplink">reset_tx_uplink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetUplinkTeamingOverrideAllowed">reset_uplink_teaming_override_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanId">reset_vlan_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanOverrideAllowed">reset_vlan_override_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanRange">reset_vlan_range</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_vlan_range` <a name="put_vlan_range" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.putVlanRange"></a>

```python
def put_vlan_range(
  value: typing.Union[IResolvable, typing.List[DistributedPortGroupVlanRange]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.putVlanRange.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>]]

---

##### `reset_active_uplinks` <a name="reset_active_uplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetActiveUplinks"></a>

```python
def reset_active_uplinks() -> None
```

##### `reset_allow_forged_transmits` <a name="reset_allow_forged_transmits" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowForgedTransmits"></a>

```python
def reset_allow_forged_transmits() -> None
```

##### `reset_allow_mac_changes` <a name="reset_allow_mac_changes" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowMacChanges"></a>

```python
def reset_allow_mac_changes() -> None
```

##### `reset_allow_promiscuous` <a name="reset_allow_promiscuous" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowPromiscuous"></a>

```python
def reset_allow_promiscuous() -> None
```

##### `reset_auto_expand` <a name="reset_auto_expand" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAutoExpand"></a>

```python
def reset_auto_expand() -> None
```

##### `reset_block_all_ports` <a name="reset_block_all_ports" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetBlockAllPorts"></a>

```python
def reset_block_all_ports() -> None
```

##### `reset_block_override_allowed` <a name="reset_block_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetBlockOverrideAllowed"></a>

```python
def reset_block_override_allowed() -> None
```

##### `reset_check_beacon` <a name="reset_check_beacon" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetCheckBeacon"></a>

```python
def reset_check_beacon() -> None
```

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_directpath_gen2_allowed` <a name="reset_directpath_gen2_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetDirectpathGen2Allowed"></a>

```python
def reset_directpath_gen2_allowed() -> None
```

##### `reset_egress_shaping_average_bandwidth` <a name="reset_egress_shaping_average_bandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingAverageBandwidth"></a>

```python
def reset_egress_shaping_average_bandwidth() -> None
```

##### `reset_egress_shaping_burst_size` <a name="reset_egress_shaping_burst_size" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingBurstSize"></a>

```python
def reset_egress_shaping_burst_size() -> None
```

##### `reset_egress_shaping_enabled` <a name="reset_egress_shaping_enabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingEnabled"></a>

```python
def reset_egress_shaping_enabled() -> None
```

##### `reset_egress_shaping_peak_bandwidth` <a name="reset_egress_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingPeakBandwidth"></a>

```python
def reset_egress_shaping_peak_bandwidth() -> None
```

##### `reset_failback` <a name="reset_failback" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetFailback"></a>

```python
def reset_failback() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingress_shaping_average_bandwidth` <a name="reset_ingress_shaping_average_bandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingAverageBandwidth"></a>

```python
def reset_ingress_shaping_average_bandwidth() -> None
```

##### `reset_ingress_shaping_burst_size` <a name="reset_ingress_shaping_burst_size" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingBurstSize"></a>

```python
def reset_ingress_shaping_burst_size() -> None
```

##### `reset_ingress_shaping_enabled` <a name="reset_ingress_shaping_enabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingEnabled"></a>

```python
def reset_ingress_shaping_enabled() -> None
```

##### `reset_ingress_shaping_peak_bandwidth` <a name="reset_ingress_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingPeakBandwidth"></a>

```python
def reset_ingress_shaping_peak_bandwidth() -> None
```

##### `reset_lacp_enabled` <a name="reset_lacp_enabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLacpEnabled"></a>

```python
def reset_lacp_enabled() -> None
```

##### `reset_lacp_mode` <a name="reset_lacp_mode" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLacpMode"></a>

```python
def reset_lacp_mode() -> None
```

##### `reset_live_port_moving_allowed` <a name="reset_live_port_moving_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLivePortMovingAllowed"></a>

```python
def reset_live_port_moving_allowed() -> None
```

##### `reset_netflow_enabled` <a name="reset_netflow_enabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetflowEnabled"></a>

```python
def reset_netflow_enabled() -> None
```

##### `reset_netflow_override_allowed` <a name="reset_netflow_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetflowOverrideAllowed"></a>

```python
def reset_netflow_override_allowed() -> None
```

##### `reset_network_resource_pool_key` <a name="reset_network_resource_pool_key" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetworkResourcePoolKey"></a>

```python
def reset_network_resource_pool_key() -> None
```

##### `reset_network_resource_pool_override_allowed` <a name="reset_network_resource_pool_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetworkResourcePoolOverrideAllowed"></a>

```python
def reset_network_resource_pool_override_allowed() -> None
```

##### `reset_notify_switches` <a name="reset_notify_switches" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNotifySwitches"></a>

```python
def reset_notify_switches() -> None
```

##### `reset_number_of_ports` <a name="reset_number_of_ports" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNumberOfPorts"></a>

```python
def reset_number_of_ports() -> None
```

##### `reset_port_config_reset_at_disconnect` <a name="reset_port_config_reset_at_disconnect" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortConfigResetAtDisconnect"></a>

```python
def reset_port_config_reset_at_disconnect() -> None
```

##### `reset_port_name_format` <a name="reset_port_name_format" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortNameFormat"></a>

```python
def reset_port_name_format() -> None
```

##### `reset_port_private_secondary_vlan_id` <a name="reset_port_private_secondary_vlan_id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortPrivateSecondaryVlanId"></a>

```python
def reset_port_private_secondary_vlan_id() -> None
```

##### `reset_security_policy_override_allowed` <a name="reset_security_policy_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetSecurityPolicyOverrideAllowed"></a>

```python
def reset_security_policy_override_allowed() -> None
```

##### `reset_shaping_override_allowed` <a name="reset_shaping_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetShapingOverrideAllowed"></a>

```python
def reset_shaping_override_allowed() -> None
```

##### `reset_standby_uplinks` <a name="reset_standby_uplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetStandbyUplinks"></a>

```python
def reset_standby_uplinks() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_teaming_policy` <a name="reset_teaming_policy" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTeamingPolicy"></a>

```python
def reset_teaming_policy() -> None
```

##### `reset_traffic_filter_override_allowed` <a name="reset_traffic_filter_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTrafficFilterOverrideAllowed"></a>

```python
def reset_traffic_filter_override_allowed() -> None
```

##### `reset_tx_uplink` <a name="reset_tx_uplink" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTxUplink"></a>

```python
def reset_tx_uplink() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_uplink_teaming_override_allowed` <a name="reset_uplink_teaming_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetUplinkTeamingOverrideAllowed"></a>

```python
def reset_uplink_teaming_override_allowed() -> None
```

##### `reset_vlan_id` <a name="reset_vlan_id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanId"></a>

```python
def reset_vlan_id() -> None
```

##### `reset_vlan_override_allowed` <a name="reset_vlan_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanOverrideAllowed"></a>

```python
def reset_vlan_override_allowed() -> None
```

##### `reset_vlan_range` <a name="reset_vlan_range" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanRange"></a>

```python
def reset_vlan_range() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DistributedPortGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_port_group

distributedPortGroup.DistributedPortGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_port_group

distributedPortGroup.DistributedPortGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_port_group

distributedPortGroup.DistributedPortGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_port_group

distributedPortGroup.DistributedPortGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DistributedPortGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DistributedPortGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DistributedPortGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DistributedPortGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.configVersion">config_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanRange">vlan_range</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList">DistributedPortGroupVlanRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.activeUplinksInput">active_uplinks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowForgedTransmitsInput">allow_forged_transmits_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowMacChangesInput">allow_mac_changes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowPromiscuousInput">allow_promiscuous_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.autoExpandInput">auto_expand_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockAllPortsInput">block_all_ports_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockOverrideAllowedInput">block_override_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.checkBeaconInput">check_beacon_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.customAttributesInput">custom_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.directpathGen2AllowedInput">directpath_gen2_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.distributedVirtualSwitchUuidInput">distributed_virtual_switch_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingAverageBandwidthInput">egress_shaping_average_bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingBurstSizeInput">egress_shaping_burst_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingEnabledInput">egress_shaping_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingPeakBandwidthInput">egress_shaping_peak_bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.failbackInput">failback_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingAverageBandwidthInput">ingress_shaping_average_bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingBurstSizeInput">ingress_shaping_burst_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingEnabledInput">ingress_shaping_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingPeakBandwidthInput">ingress_shaping_peak_bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpEnabledInput">lacp_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpModeInput">lacp_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.livePortMovingAllowedInput">live_port_moving_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowEnabledInput">netflow_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowOverrideAllowedInput">netflow_override_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolKeyInput">network_resource_pool_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolOverrideAllowedInput">network_resource_pool_override_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.notifySwitchesInput">notify_switches_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.numberOfPortsInput">number_of_ports_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portConfigResetAtDisconnectInput">port_config_reset_at_disconnect_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portNameFormatInput">port_name_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portPrivateSecondaryVlanIdInput">port_private_secondary_vlan_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.securityPolicyOverrideAllowedInput">security_policy_override_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.shapingOverrideAllowedInput">shaping_override_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.standbyUplinksInput">standby_uplinks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.teamingPolicyInput">teaming_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.trafficFilterOverrideAllowedInput">traffic_filter_override_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.txUplinkInput">tx_uplink_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.uplinkTeamingOverrideAllowedInput">uplink_teaming_override_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanIdInput">vlan_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanOverrideAllowedInput">vlan_override_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanRangeInput">vlan_range_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.activeUplinks">active_uplinks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowForgedTransmits">allow_forged_transmits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowMacChanges">allow_mac_changes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowPromiscuous">allow_promiscuous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.autoExpand">auto_expand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockAllPorts">block_all_ports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockOverrideAllowed">block_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.checkBeacon">check_beacon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.directpathGen2Allowed">directpath_gen2_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.distributedVirtualSwitchUuid">distributed_virtual_switch_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingAverageBandwidth">egress_shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingBurstSize">egress_shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingEnabled">egress_shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingPeakBandwidth">egress_shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.failback">failback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingAverageBandwidth">ingress_shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingBurstSize">ingress_shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingEnabled">ingress_shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingPeakBandwidth">ingress_shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpEnabled">lacp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpMode">lacp_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.livePortMovingAllowed">live_port_moving_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowEnabled">netflow_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowOverrideAllowed">netflow_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolKey">network_resource_pool_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolOverrideAllowed">network_resource_pool_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.notifySwitches">notify_switches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.numberOfPorts">number_of_ports</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portConfigResetAtDisconnect">port_config_reset_at_disconnect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portNameFormat">port_name_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portPrivateSecondaryVlanId">port_private_secondary_vlan_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.securityPolicyOverrideAllowed">security_policy_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.shapingOverrideAllowed">shaping_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.standbyUplinks">standby_uplinks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.teamingPolicy">teaming_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.trafficFilterOverrideAllowed">traffic_filter_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.txUplink">tx_uplink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.uplinkTeamingOverrideAllowed">uplink_teaming_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanId">vlan_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanOverrideAllowed">vlan_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config_version`<sup>Required</sup> <a name="config_version" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.configVersion"></a>

```python
config_version: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `vlan_range`<sup>Required</sup> <a name="vlan_range" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanRange"></a>

```python
vlan_range: DistributedPortGroupVlanRangeList
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList">DistributedPortGroupVlanRangeList</a>

---

##### `active_uplinks_input`<sup>Optional</sup> <a name="active_uplinks_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.activeUplinksInput"></a>

```python
active_uplinks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_forged_transmits_input`<sup>Optional</sup> <a name="allow_forged_transmits_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowForgedTransmitsInput"></a>

```python
allow_forged_transmits_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_mac_changes_input`<sup>Optional</sup> <a name="allow_mac_changes_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowMacChangesInput"></a>

```python
allow_mac_changes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_promiscuous_input`<sup>Optional</sup> <a name="allow_promiscuous_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowPromiscuousInput"></a>

```python
allow_promiscuous_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_expand_input`<sup>Optional</sup> <a name="auto_expand_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.autoExpandInput"></a>

```python
auto_expand_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_all_ports_input`<sup>Optional</sup> <a name="block_all_ports_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockAllPortsInput"></a>

```python
block_all_ports_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_override_allowed_input`<sup>Optional</sup> <a name="block_override_allowed_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockOverrideAllowedInput"></a>

```python
block_override_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `check_beacon_input`<sup>Optional</sup> <a name="check_beacon_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.checkBeaconInput"></a>

```python
check_beacon_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.customAttributesInput"></a>

```python
custom_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `directpath_gen2_allowed_input`<sup>Optional</sup> <a name="directpath_gen2_allowed_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.directpathGen2AllowedInput"></a>

```python
directpath_gen2_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `distributed_virtual_switch_uuid_input`<sup>Optional</sup> <a name="distributed_virtual_switch_uuid_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.distributedVirtualSwitchUuidInput"></a>

```python
distributed_virtual_switch_uuid_input: str
```

- *Type:* str

---

##### `egress_shaping_average_bandwidth_input`<sup>Optional</sup> <a name="egress_shaping_average_bandwidth_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingAverageBandwidthInput"></a>

```python
egress_shaping_average_bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `egress_shaping_burst_size_input`<sup>Optional</sup> <a name="egress_shaping_burst_size_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingBurstSizeInput"></a>

```python
egress_shaping_burst_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `egress_shaping_enabled_input`<sup>Optional</sup> <a name="egress_shaping_enabled_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingEnabledInput"></a>

```python
egress_shaping_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `egress_shaping_peak_bandwidth_input`<sup>Optional</sup> <a name="egress_shaping_peak_bandwidth_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingPeakBandwidthInput"></a>

```python
egress_shaping_peak_bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failback_input`<sup>Optional</sup> <a name="failback_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.failbackInput"></a>

```python
failback_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_shaping_average_bandwidth_input`<sup>Optional</sup> <a name="ingress_shaping_average_bandwidth_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingAverageBandwidthInput"></a>

```python
ingress_shaping_average_bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ingress_shaping_burst_size_input`<sup>Optional</sup> <a name="ingress_shaping_burst_size_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingBurstSizeInput"></a>

```python
ingress_shaping_burst_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ingress_shaping_enabled_input`<sup>Optional</sup> <a name="ingress_shaping_enabled_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingEnabledInput"></a>

```python
ingress_shaping_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ingress_shaping_peak_bandwidth_input`<sup>Optional</sup> <a name="ingress_shaping_peak_bandwidth_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingPeakBandwidthInput"></a>

```python
ingress_shaping_peak_bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lacp_enabled_input`<sup>Optional</sup> <a name="lacp_enabled_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpEnabledInput"></a>

```python
lacp_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lacp_mode_input`<sup>Optional</sup> <a name="lacp_mode_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpModeInput"></a>

```python
lacp_mode_input: str
```

- *Type:* str

---

##### `live_port_moving_allowed_input`<sup>Optional</sup> <a name="live_port_moving_allowed_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.livePortMovingAllowedInput"></a>

```python
live_port_moving_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `netflow_enabled_input`<sup>Optional</sup> <a name="netflow_enabled_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowEnabledInput"></a>

```python
netflow_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `netflow_override_allowed_input`<sup>Optional</sup> <a name="netflow_override_allowed_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowOverrideAllowedInput"></a>

```python
netflow_override_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_resource_pool_key_input`<sup>Optional</sup> <a name="network_resource_pool_key_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolKeyInput"></a>

```python
network_resource_pool_key_input: str
```

- *Type:* str

---

##### `network_resource_pool_override_allowed_input`<sup>Optional</sup> <a name="network_resource_pool_override_allowed_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolOverrideAllowedInput"></a>

```python
network_resource_pool_override_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notify_switches_input`<sup>Optional</sup> <a name="notify_switches_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.notifySwitchesInput"></a>

```python
notify_switches_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `number_of_ports_input`<sup>Optional</sup> <a name="number_of_ports_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.numberOfPortsInput"></a>

```python
number_of_ports_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_config_reset_at_disconnect_input`<sup>Optional</sup> <a name="port_config_reset_at_disconnect_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portConfigResetAtDisconnectInput"></a>

```python
port_config_reset_at_disconnect_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `port_name_format_input`<sup>Optional</sup> <a name="port_name_format_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portNameFormatInput"></a>

```python
port_name_format_input: str
```

- *Type:* str

---

##### `port_private_secondary_vlan_id_input`<sup>Optional</sup> <a name="port_private_secondary_vlan_id_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portPrivateSecondaryVlanIdInput"></a>

```python
port_private_secondary_vlan_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_policy_override_allowed_input`<sup>Optional</sup> <a name="security_policy_override_allowed_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.securityPolicyOverrideAllowedInput"></a>

```python
security_policy_override_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shaping_override_allowed_input`<sup>Optional</sup> <a name="shaping_override_allowed_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.shapingOverrideAllowedInput"></a>

```python
shaping_override_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `standby_uplinks_input`<sup>Optional</sup> <a name="standby_uplinks_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.standbyUplinksInput"></a>

```python
standby_uplinks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `teaming_policy_input`<sup>Optional</sup> <a name="teaming_policy_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.teamingPolicyInput"></a>

```python
teaming_policy_input: str
```

- *Type:* str

---

##### `traffic_filter_override_allowed_input`<sup>Optional</sup> <a name="traffic_filter_override_allowed_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.trafficFilterOverrideAllowedInput"></a>

```python
traffic_filter_override_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tx_uplink_input`<sup>Optional</sup> <a name="tx_uplink_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.txUplinkInput"></a>

```python
tx_uplink_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uplink_teaming_override_allowed_input`<sup>Optional</sup> <a name="uplink_teaming_override_allowed_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.uplinkTeamingOverrideAllowedInput"></a>

```python
uplink_teaming_override_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vlan_id_input`<sup>Optional</sup> <a name="vlan_id_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanIdInput"></a>

```python
vlan_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vlan_override_allowed_input`<sup>Optional</sup> <a name="vlan_override_allowed_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanOverrideAllowedInput"></a>

```python
vlan_override_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vlan_range_input`<sup>Optional</sup> <a name="vlan_range_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanRangeInput"></a>

```python
vlan_range_input: typing.Union[IResolvable, typing.List[DistributedPortGroupVlanRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>]]

---

##### `active_uplinks`<sup>Required</sup> <a name="active_uplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.activeUplinks"></a>

```python
active_uplinks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_forged_transmits`<sup>Required</sup> <a name="allow_forged_transmits" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowForgedTransmits"></a>

```python
allow_forged_transmits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_mac_changes`<sup>Required</sup> <a name="allow_mac_changes" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowMacChanges"></a>

```python
allow_mac_changes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_promiscuous`<sup>Required</sup> <a name="allow_promiscuous" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowPromiscuous"></a>

```python
allow_promiscuous: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_expand`<sup>Required</sup> <a name="auto_expand" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.autoExpand"></a>

```python
auto_expand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_all_ports`<sup>Required</sup> <a name="block_all_ports" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockAllPorts"></a>

```python
block_all_ports: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_override_allowed`<sup>Required</sup> <a name="block_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockOverrideAllowed"></a>

```python
block_override_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `check_beacon`<sup>Required</sup> <a name="check_beacon" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.checkBeacon"></a>

```python
check_beacon: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `directpath_gen2_allowed`<sup>Required</sup> <a name="directpath_gen2_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.directpathGen2Allowed"></a>

```python
directpath_gen2_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `distributed_virtual_switch_uuid`<sup>Required</sup> <a name="distributed_virtual_switch_uuid" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.distributedVirtualSwitchUuid"></a>

```python
distributed_virtual_switch_uuid: str
```

- *Type:* str

---

##### `egress_shaping_average_bandwidth`<sup>Required</sup> <a name="egress_shaping_average_bandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingAverageBandwidth"></a>

```python
egress_shaping_average_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `egress_shaping_burst_size`<sup>Required</sup> <a name="egress_shaping_burst_size" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingBurstSize"></a>

```python
egress_shaping_burst_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `egress_shaping_enabled`<sup>Required</sup> <a name="egress_shaping_enabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingEnabled"></a>

```python
egress_shaping_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `egress_shaping_peak_bandwidth`<sup>Required</sup> <a name="egress_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingPeakBandwidth"></a>

```python
egress_shaping_peak_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failback`<sup>Required</sup> <a name="failback" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.failback"></a>

```python
failback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress_shaping_average_bandwidth`<sup>Required</sup> <a name="ingress_shaping_average_bandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingAverageBandwidth"></a>

```python
ingress_shaping_average_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ingress_shaping_burst_size`<sup>Required</sup> <a name="ingress_shaping_burst_size" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingBurstSize"></a>

```python
ingress_shaping_burst_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ingress_shaping_enabled`<sup>Required</sup> <a name="ingress_shaping_enabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingEnabled"></a>

```python
ingress_shaping_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ingress_shaping_peak_bandwidth`<sup>Required</sup> <a name="ingress_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingPeakBandwidth"></a>

```python
ingress_shaping_peak_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lacp_enabled`<sup>Required</sup> <a name="lacp_enabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpEnabled"></a>

```python
lacp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lacp_mode`<sup>Required</sup> <a name="lacp_mode" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpMode"></a>

```python
lacp_mode: str
```

- *Type:* str

---

##### `live_port_moving_allowed`<sup>Required</sup> <a name="live_port_moving_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.livePortMovingAllowed"></a>

```python
live_port_moving_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `netflow_enabled`<sup>Required</sup> <a name="netflow_enabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowEnabled"></a>

```python
netflow_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `netflow_override_allowed`<sup>Required</sup> <a name="netflow_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowOverrideAllowed"></a>

```python
netflow_override_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_resource_pool_key`<sup>Required</sup> <a name="network_resource_pool_key" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolKey"></a>

```python
network_resource_pool_key: str
```

- *Type:* str

---

##### `network_resource_pool_override_allowed`<sup>Required</sup> <a name="network_resource_pool_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolOverrideAllowed"></a>

```python
network_resource_pool_override_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notify_switches`<sup>Required</sup> <a name="notify_switches" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.notifySwitches"></a>

```python
notify_switches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `number_of_ports`<sup>Required</sup> <a name="number_of_ports" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.numberOfPorts"></a>

```python
number_of_ports: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_config_reset_at_disconnect`<sup>Required</sup> <a name="port_config_reset_at_disconnect" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portConfigResetAtDisconnect"></a>

```python
port_config_reset_at_disconnect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `port_name_format`<sup>Required</sup> <a name="port_name_format" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portNameFormat"></a>

```python
port_name_format: str
```

- *Type:* str

---

##### `port_private_secondary_vlan_id`<sup>Required</sup> <a name="port_private_secondary_vlan_id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portPrivateSecondaryVlanId"></a>

```python
port_private_secondary_vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_policy_override_allowed`<sup>Required</sup> <a name="security_policy_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.securityPolicyOverrideAllowed"></a>

```python
security_policy_override_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shaping_override_allowed`<sup>Required</sup> <a name="shaping_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.shapingOverrideAllowed"></a>

```python
shaping_override_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `standby_uplinks`<sup>Required</sup> <a name="standby_uplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.standbyUplinks"></a>

```python
standby_uplinks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `teaming_policy`<sup>Required</sup> <a name="teaming_policy" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.teamingPolicy"></a>

```python
teaming_policy: str
```

- *Type:* str

---

##### `traffic_filter_override_allowed`<sup>Required</sup> <a name="traffic_filter_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.trafficFilterOverrideAllowed"></a>

```python
traffic_filter_override_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tx_uplink`<sup>Required</sup> <a name="tx_uplink" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.txUplink"></a>

```python
tx_uplink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uplink_teaming_override_allowed`<sup>Required</sup> <a name="uplink_teaming_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.uplinkTeamingOverrideAllowed"></a>

```python
uplink_teaming_override_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanId"></a>

```python
vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vlan_override_allowed`<sup>Required</sup> <a name="vlan_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanOverrideAllowed"></a>

```python
vlan_override_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DistributedPortGroupConfig <a name="DistributedPortGroupConfig" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_port_group

distributedPortGroup.DistributedPortGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  distributed_virtual_switch_uuid: str,
  name: str,
  active_uplinks: typing.List[str] = None,
  allow_forged_transmits: typing.Union[bool, IResolvable] = None,
  allow_mac_changes: typing.Union[bool, IResolvable] = None,
  allow_promiscuous: typing.Union[bool, IResolvable] = None,
  auto_expand: typing.Union[bool, IResolvable] = None,
  block_all_ports: typing.Union[bool, IResolvable] = None,
  block_override_allowed: typing.Union[bool, IResolvable] = None,
  check_beacon: typing.Union[bool, IResolvable] = None,
  custom_attributes: typing.Mapping[str] = None,
  description: str = None,
  directpath_gen2_allowed: typing.Union[bool, IResolvable] = None,
  egress_shaping_average_bandwidth: typing.Union[int, float] = None,
  egress_shaping_burst_size: typing.Union[int, float] = None,
  egress_shaping_enabled: typing.Union[bool, IResolvable] = None,
  egress_shaping_peak_bandwidth: typing.Union[int, float] = None,
  failback: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ingress_shaping_average_bandwidth: typing.Union[int, float] = None,
  ingress_shaping_burst_size: typing.Union[int, float] = None,
  ingress_shaping_enabled: typing.Union[bool, IResolvable] = None,
  ingress_shaping_peak_bandwidth: typing.Union[int, float] = None,
  lacp_enabled: typing.Union[bool, IResolvable] = None,
  lacp_mode: str = None,
  live_port_moving_allowed: typing.Union[bool, IResolvable] = None,
  netflow_enabled: typing.Union[bool, IResolvable] = None,
  netflow_override_allowed: typing.Union[bool, IResolvable] = None,
  network_resource_pool_key: str = None,
  network_resource_pool_override_allowed: typing.Union[bool, IResolvable] = None,
  notify_switches: typing.Union[bool, IResolvable] = None,
  number_of_ports: typing.Union[int, float] = None,
  port_config_reset_at_disconnect: typing.Union[bool, IResolvable] = None,
  port_name_format: str = None,
  port_private_secondary_vlan_id: typing.Union[int, float] = None,
  security_policy_override_allowed: typing.Union[bool, IResolvable] = None,
  shaping_override_allowed: typing.Union[bool, IResolvable] = None,
  standby_uplinks: typing.List[str] = None,
  tags: typing.List[str] = None,
  teaming_policy: str = None,
  traffic_filter_override_allowed: typing.Union[bool, IResolvable] = None,
  tx_uplink: typing.Union[bool, IResolvable] = None,
  type: str = None,
  uplink_teaming_override_allowed: typing.Union[bool, IResolvable] = None,
  vlan_id: typing.Union[int, float] = None,
  vlan_override_allowed: typing.Union[bool, IResolvable] = None,
  vlan_range: typing.Union[IResolvable, typing.List[DistributedPortGroupVlanRange]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.distributedVirtualSwitchUuid">distributed_virtual_switch_uuid</a></code> | <code>str</code> | The UUID of the DVS to attach this port group to. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.name">name</a></code> | <code>str</code> | The name of the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.activeUplinks">active_uplinks</a></code> | <code>typing.List[str]</code> | List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowForgedTransmits">allow_forged_transmits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowMacChanges">allow_mac_changes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowPromiscuous">allow_promiscuous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.autoExpand">auto_expand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Auto-expands the port group beyond the port count configured in number_of_ports when necessary. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.blockAllPorts">block_all_ports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether to block all ports by default. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.blockOverrideAllowed">block_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the blocked setting of an individual port to override the setting in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.checkBeacon">check_beacon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable beacon probing on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.description">description</a></code> | <code>str</code> | The description of the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.directpathGen2Allowed">directpath_gen2_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow VMDirectPath Gen2 on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingAverageBandwidth">egress_shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The average egress bandwidth in bits per second if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingBurstSize">egress_shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | The maximum egress burst size allowed in bytes if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingEnabled">egress_shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if the traffic shaper is enabled for egress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingPeakBandwidth">egress_shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.failback">failback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#id DistributedPortGroup#id}. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingAverageBandwidth">ingress_shaping_average_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The average ingress bandwidth in bits per second if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingBurstSize">ingress_shaping_burst_size</a></code> | <code>typing.Union[int, float]</code> | The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingEnabled">ingress_shaping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if the traffic shaper is enabled for ingress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingPeakBandwidth">ingress_shaping_peak_bandwidth</a></code> | <code>typing.Union[int, float]</code> | The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lacpEnabled">lacp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to enable LACP on all uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lacpMode">lacp_mode</a></code> | <code>str</code> | The uplink LACP mode to use. Can be one of active or passive. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.livePortMovingAllowed">live_port_moving_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow a live port to be moved in and out of the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.netflowEnabled">netflow_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether to enable netflow on all ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.netflowOverrideAllowed">netflow_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the enabling or disabling of Netflow on a port, contrary to the policy in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.networkResourcePoolKey">network_resource_pool_key</a></code> | <code>str</code> | The key of a network resource pool to associate with this portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.networkResourcePoolOverrideAllowed">network_resource_pool_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the network resource pool of an individual port to override the setting in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.notifySwitches">notify_switches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.numberOfPorts">number_of_ports</a></code> | <code>typing.Union[int, float]</code> | The number of ports in this portgroup. The DVS will expand and shrink by modifying this setting. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portConfigResetAtDisconnect">port_config_reset_at_disconnect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Reset the setting of any ports in this portgroup back to the default setting when the port disconnects. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portNameFormat">port_name_format</a></code> | <code>str</code> | A template string to use when creating ports in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portPrivateSecondaryVlanId">port_private_secondary_vlan_id</a></code> | <code>typing.Union[int, float]</code> | The secondary VLAN ID for this port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.securityPolicyOverrideAllowed">security_policy_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow security policy settings on a port to override those on the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.shapingOverrideAllowed">shaping_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the traffic shaping policies of an individual port to override the settings in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.standbyUplinks">standby_uplinks</a></code> | <code>typing.List[str]</code> | List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.teamingPolicy">teaming_policy</a></code> | <code>str</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.trafficFilterOverrideAllowed">traffic_filter_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow any filter policies set on the individual port to override those in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.txUplink">tx_uplink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.type">type</a></code> | <code>str</code> | The type of portgroup. Can be one of earlyBinding (static) or ephemeral. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.uplinkTeamingOverrideAllowed">uplink_teaming_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the uplink teaming policies on a port to override those on the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanId">vlan_id</a></code> | <code>typing.Union[int, float]</code> | The VLAN ID for single VLAN mode. 0 denotes no VLAN. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanOverrideAllowed">vlan_override_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the VLAN configuration on a port to override those on the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanRange">vlan_range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>]]</code> | vlan_range block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `distributed_virtual_switch_uuid`<sup>Required</sup> <a name="distributed_virtual_switch_uuid" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.distributedVirtualSwitchUuid"></a>

```python
distributed_virtual_switch_uuid: str
```

- *Type:* str

The UUID of the DVS to attach this port group to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#distributed_virtual_switch_uuid DistributedPortGroup#distributed_virtual_switch_uuid}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#name DistributedPortGroup#name}

---

##### `active_uplinks`<sup>Optional</sup> <a name="active_uplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.activeUplinks"></a>

```python
active_uplinks: typing.List[str]
```

- *Type:* typing.List[str]

List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#active_uplinks DistributedPortGroup#active_uplinks}

---

##### `allow_forged_transmits`<sup>Optional</sup> <a name="allow_forged_transmits" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowForgedTransmits"></a>

```python
allow_forged_transmits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#allow_forged_transmits DistributedPortGroup#allow_forged_transmits}

---

##### `allow_mac_changes`<sup>Optional</sup> <a name="allow_mac_changes" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowMacChanges"></a>

```python
allow_mac_changes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#allow_mac_changes DistributedPortGroup#allow_mac_changes}

---

##### `allow_promiscuous`<sup>Optional</sup> <a name="allow_promiscuous" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowPromiscuous"></a>

```python
allow_promiscuous: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#allow_promiscuous DistributedPortGroup#allow_promiscuous}

---

##### `auto_expand`<sup>Optional</sup> <a name="auto_expand" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.autoExpand"></a>

```python
auto_expand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Auto-expands the port group beyond the port count configured in number_of_ports when necessary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#auto_expand DistributedPortGroup#auto_expand}

---

##### `block_all_ports`<sup>Optional</sup> <a name="block_all_ports" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.blockAllPorts"></a>

```python
block_all_ports: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to block all ports by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#block_all_ports DistributedPortGroup#block_all_ports}

---

##### `block_override_allowed`<sup>Optional</sup> <a name="block_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.blockOverrideAllowed"></a>

```python
block_override_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the blocked setting of an individual port to override the setting in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#block_override_allowed DistributedPortGroup#block_override_allowed}

---

##### `check_beacon`<sup>Optional</sup> <a name="check_beacon" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.checkBeacon"></a>

```python
check_beacon: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable beacon probing on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#check_beacon DistributedPortGroup#check_beacon}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#custom_attributes DistributedPortGroup#custom_attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#description DistributedPortGroup#description}

---

##### `directpath_gen2_allowed`<sup>Optional</sup> <a name="directpath_gen2_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.directpathGen2Allowed"></a>

```python
directpath_gen2_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow VMDirectPath Gen2 on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#directpath_gen2_allowed DistributedPortGroup#directpath_gen2_allowed}

---

##### `egress_shaping_average_bandwidth`<sup>Optional</sup> <a name="egress_shaping_average_bandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingAverageBandwidth"></a>

```python
egress_shaping_average_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The average egress bandwidth in bits per second if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#egress_shaping_average_bandwidth DistributedPortGroup#egress_shaping_average_bandwidth}

---

##### `egress_shaping_burst_size`<sup>Optional</sup> <a name="egress_shaping_burst_size" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingBurstSize"></a>

```python
egress_shaping_burst_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum egress burst size allowed in bytes if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#egress_shaping_burst_size DistributedPortGroup#egress_shaping_burst_size}

---

##### `egress_shaping_enabled`<sup>Optional</sup> <a name="egress_shaping_enabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingEnabled"></a>

```python
egress_shaping_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if the traffic shaper is enabled for egress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#egress_shaping_enabled DistributedPortGroup#egress_shaping_enabled}

---

##### `egress_shaping_peak_bandwidth`<sup>Optional</sup> <a name="egress_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingPeakBandwidth"></a>

```python
egress_shaping_peak_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#egress_shaping_peak_bandwidth DistributedPortGroup#egress_shaping_peak_bandwidth}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.failback"></a>

```python
failback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#failback DistributedPortGroup#failback}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#id DistributedPortGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress_shaping_average_bandwidth`<sup>Optional</sup> <a name="ingress_shaping_average_bandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingAverageBandwidth"></a>

```python
ingress_shaping_average_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The average ingress bandwidth in bits per second if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#ingress_shaping_average_bandwidth DistributedPortGroup#ingress_shaping_average_bandwidth}

---

##### `ingress_shaping_burst_size`<sup>Optional</sup> <a name="ingress_shaping_burst_size" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingBurstSize"></a>

```python
ingress_shaping_burst_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#ingress_shaping_burst_size DistributedPortGroup#ingress_shaping_burst_size}

---

##### `ingress_shaping_enabled`<sup>Optional</sup> <a name="ingress_shaping_enabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingEnabled"></a>

```python
ingress_shaping_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if the traffic shaper is enabled for ingress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#ingress_shaping_enabled DistributedPortGroup#ingress_shaping_enabled}

---

##### `ingress_shaping_peak_bandwidth`<sup>Optional</sup> <a name="ingress_shaping_peak_bandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingPeakBandwidth"></a>

```python
ingress_shaping_peak_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#ingress_shaping_peak_bandwidth DistributedPortGroup#ingress_shaping_peak_bandwidth}

---

##### `lacp_enabled`<sup>Optional</sup> <a name="lacp_enabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lacpEnabled"></a>

```python
lacp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to enable LACP on all uplink ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#lacp_enabled DistributedPortGroup#lacp_enabled}

---

##### `lacp_mode`<sup>Optional</sup> <a name="lacp_mode" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lacpMode"></a>

```python
lacp_mode: str
```

- *Type:* str

The uplink LACP mode to use. Can be one of active or passive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#lacp_mode DistributedPortGroup#lacp_mode}

---

##### `live_port_moving_allowed`<sup>Optional</sup> <a name="live_port_moving_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.livePortMovingAllowed"></a>

```python
live_port_moving_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow a live port to be moved in and out of the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#live_port_moving_allowed DistributedPortGroup#live_port_moving_allowed}

---

##### `netflow_enabled`<sup>Optional</sup> <a name="netflow_enabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.netflowEnabled"></a>

```python
netflow_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to enable netflow on all ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#netflow_enabled DistributedPortGroup#netflow_enabled}

---

##### `netflow_override_allowed`<sup>Optional</sup> <a name="netflow_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.netflowOverrideAllowed"></a>

```python
netflow_override_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the enabling or disabling of Netflow on a port, contrary to the policy in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#netflow_override_allowed DistributedPortGroup#netflow_override_allowed}

---

##### `network_resource_pool_key`<sup>Optional</sup> <a name="network_resource_pool_key" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.networkResourcePoolKey"></a>

```python
network_resource_pool_key: str
```

- *Type:* str

The key of a network resource pool to associate with this portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#network_resource_pool_key DistributedPortGroup#network_resource_pool_key}

---

##### `network_resource_pool_override_allowed`<sup>Optional</sup> <a name="network_resource_pool_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.networkResourcePoolOverrideAllowed"></a>

```python
network_resource_pool_override_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the network resource pool of an individual port to override the setting in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#network_resource_pool_override_allowed DistributedPortGroup#network_resource_pool_override_allowed}

---

##### `notify_switches`<sup>Optional</sup> <a name="notify_switches" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.notifySwitches"></a>

```python
notify_switches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#notify_switches DistributedPortGroup#notify_switches}

---

##### `number_of_ports`<sup>Optional</sup> <a name="number_of_ports" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.numberOfPorts"></a>

```python
number_of_ports: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of ports in this portgroup. The DVS will expand and shrink by modifying this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#number_of_ports DistributedPortGroup#number_of_ports}

---

##### `port_config_reset_at_disconnect`<sup>Optional</sup> <a name="port_config_reset_at_disconnect" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portConfigResetAtDisconnect"></a>

```python
port_config_reset_at_disconnect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Reset the setting of any ports in this portgroup back to the default setting when the port disconnects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#port_config_reset_at_disconnect DistributedPortGroup#port_config_reset_at_disconnect}

---

##### `port_name_format`<sup>Optional</sup> <a name="port_name_format" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portNameFormat"></a>

```python
port_name_format: str
```

- *Type:* str

A template string to use when creating ports in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#port_name_format DistributedPortGroup#port_name_format}

---

##### `port_private_secondary_vlan_id`<sup>Optional</sup> <a name="port_private_secondary_vlan_id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portPrivateSecondaryVlanId"></a>

```python
port_private_secondary_vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The secondary VLAN ID for this port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#port_private_secondary_vlan_id DistributedPortGroup#port_private_secondary_vlan_id}

---

##### `security_policy_override_allowed`<sup>Optional</sup> <a name="security_policy_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.securityPolicyOverrideAllowed"></a>

```python
security_policy_override_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow security policy settings on a port to override those on the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#security_policy_override_allowed DistributedPortGroup#security_policy_override_allowed}

---

##### `shaping_override_allowed`<sup>Optional</sup> <a name="shaping_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.shapingOverrideAllowed"></a>

```python
shaping_override_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the traffic shaping policies of an individual port to override the settings in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#shaping_override_allowed DistributedPortGroup#shaping_override_allowed}

---

##### `standby_uplinks`<sup>Optional</sup> <a name="standby_uplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.standbyUplinks"></a>

```python
standby_uplinks: typing.List[str]
```

- *Type:* typing.List[str]

List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#standby_uplinks DistributedPortGroup#standby_uplinks}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#tags DistributedPortGroup#tags}

---

##### `teaming_policy`<sup>Optional</sup> <a name="teaming_policy" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.teamingPolicy"></a>

```python
teaming_policy: str
```

- *Type:* str

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#teaming_policy DistributedPortGroup#teaming_policy}

---

##### `traffic_filter_override_allowed`<sup>Optional</sup> <a name="traffic_filter_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.trafficFilterOverrideAllowed"></a>

```python
traffic_filter_override_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow any filter policies set on the individual port to override those in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#traffic_filter_override_allowed DistributedPortGroup#traffic_filter_override_allowed}

---

##### `tx_uplink`<sup>Optional</sup> <a name="tx_uplink" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.txUplink"></a>

```python
tx_uplink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#tx_uplink DistributedPortGroup#tx_uplink}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of portgroup. Can be one of earlyBinding (static) or ephemeral.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#type DistributedPortGroup#type}

---

##### `uplink_teaming_override_allowed`<sup>Optional</sup> <a name="uplink_teaming_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.uplinkTeamingOverrideAllowed"></a>

```python
uplink_teaming_override_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the uplink teaming policies on a port to override those on the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#uplink_teaming_override_allowed DistributedPortGroup#uplink_teaming_override_allowed}

---

##### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanId"></a>

```python
vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The VLAN ID for single VLAN mode. 0 denotes no VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#vlan_id DistributedPortGroup#vlan_id}

---

##### `vlan_override_allowed`<sup>Optional</sup> <a name="vlan_override_allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanOverrideAllowed"></a>

```python
vlan_override_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the VLAN configuration on a port to override those on the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#vlan_override_allowed DistributedPortGroup#vlan_override_allowed}

---

##### `vlan_range`<sup>Optional</sup> <a name="vlan_range" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanRange"></a>

```python
vlan_range: typing.Union[IResolvable, typing.List[DistributedPortGroupVlanRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>]]

vlan_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#vlan_range DistributedPortGroup#vlan_range}

---

### DistributedPortGroupVlanRange <a name="DistributedPortGroupVlanRange" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_port_group

distributedPortGroup.DistributedPortGroupVlanRange(
  max_vlan: typing.Union[int, float],
  min_vlan: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.property.maxVlan">max_vlan</a></code> | <code>typing.Union[int, float]</code> | The minimum VLAN to use in the range. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.property.minVlan">min_vlan</a></code> | <code>typing.Union[int, float]</code> | The minimum VLAN to use in the range. |

---

##### `max_vlan`<sup>Required</sup> <a name="max_vlan" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.property.maxVlan"></a>

```python
max_vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#max_vlan DistributedPortGroup#max_vlan}

---

##### `min_vlan`<sup>Required</sup> <a name="min_vlan" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.property.minVlan"></a>

```python
min_vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/distributed_port_group#min_vlan DistributedPortGroup#min_vlan}

---

## Classes <a name="Classes" id="Classes"></a>

### DistributedPortGroupVlanRangeList <a name="DistributedPortGroupVlanRangeList" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_port_group

distributedPortGroup.DistributedPortGroupVlanRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DistributedPortGroupVlanRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DistributedPortGroupVlanRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>]]

---


### DistributedPortGroupVlanRangeOutputReference <a name="DistributedPortGroupVlanRangeOutputReference" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_port_group

distributedPortGroup.DistributedPortGroupVlanRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.maxVlanInput">max_vlan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.minVlanInput">min_vlan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.maxVlan">max_vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.minVlan">min_vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_vlan_input`<sup>Optional</sup> <a name="max_vlan_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.maxVlanInput"></a>

```python
max_vlan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_vlan_input`<sup>Optional</sup> <a name="min_vlan_input" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.minVlanInput"></a>

```python
min_vlan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_vlan`<sup>Required</sup> <a name="max_vlan" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.maxVlan"></a>

```python
max_vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_vlan`<sup>Required</sup> <a name="min_vlan" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.minVlan"></a>

```python
min_vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DistributedPortGroupVlanRange]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange">DistributedPortGroupVlanRange</a>]

---



