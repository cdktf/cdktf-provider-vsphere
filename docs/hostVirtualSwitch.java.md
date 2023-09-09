# `vsphere_host_virtual_switch`

Refer to the Terraform Registory for docs: [`vsphere_host_virtual_switch`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch).

# `hostVirtualSwitch` Submodule <a name="`hostVirtualSwitch` Submodule" id="@cdktf/provider-vsphere.hostVirtualSwitch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostVirtualSwitch <a name="HostVirtualSwitch" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch vsphere_host_virtual_switch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host_virtual_switch.HostVirtualSwitch;

HostVirtualSwitch.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .activeNics(java.util.List<java.lang.String>)
    .hostSystemId(java.lang.String)
    .name(java.lang.String)
    .networkAdapters(java.util.List<java.lang.String>)
//  .allowForgedTransmits(java.lang.Boolean)
//  .allowForgedTransmits(IResolvable)
//  .allowMacChanges(java.lang.Boolean)
//  .allowMacChanges(IResolvable)
//  .allowPromiscuous(java.lang.Boolean)
//  .allowPromiscuous(IResolvable)
//  .beaconInterval(java.lang.Number)
//  .checkBeacon(java.lang.Boolean)
//  .checkBeacon(IResolvable)
//  .failback(java.lang.Boolean)
//  .failback(IResolvable)
//  .id(java.lang.String)
//  .linkDiscoveryOperation(java.lang.String)
//  .linkDiscoveryProtocol(java.lang.String)
//  .mtu(java.lang.Number)
//  .notifySwitches(java.lang.Boolean)
//  .notifySwitches(IResolvable)
//  .numberOfPorts(java.lang.Number)
//  .shapingAverageBandwidth(java.lang.Number)
//  .shapingBurstSize(java.lang.Number)
//  .shapingEnabled(java.lang.Boolean)
//  .shapingEnabled(IResolvable)
//  .shapingPeakBandwidth(java.lang.Number)
//  .standbyNics(java.util.List<java.lang.String>)
//  .teamingPolicy(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.activeNics">activeNics</a></code> | <code>java.util.List<java.lang.String></code> | List of active network adapters used for load balancing. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.hostSystemId">hostSystemId</a></code> | <code>java.lang.String</code> | The managed object ID of the host to set the virtual switch up on. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.networkAdapters">networkAdapters</a></code> | <code>java.util.List<java.lang.String></code> | The list of network adapters to bind to this virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.allowForgedTransmits">allowForgedTransmits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.allowMacChanges">allowMacChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.allowPromiscuous">allowPromiscuous</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.beaconInterval">beaconInterval</a></code> | <code>java.lang.Number</code> | Determines how often, in seconds, a beacon should be sent to probe for the validity of a link. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.checkBeacon">checkBeacon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable beacon probing. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.failback">failback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#id HostVirtualSwitch#id}. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.linkDiscoveryOperation">linkDiscoveryOperation</a></code> | <code>java.lang.String</code> | Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.linkDiscoveryProtocol">linkDiscoveryProtocol</a></code> | <code>java.lang.String</code> | The discovery protocol type. Valid values are cdp and lldp. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.mtu">mtu</a></code> | <code>java.lang.Number</code> | The maximum transmission unit (MTU) of the virtual switch in bytes. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.notifySwitches">notifySwitches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.numberOfPorts">numberOfPorts</a></code> | <code>java.lang.Number</code> | The number of ports that this virtual switch is configured to use. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.shapingAverageBandwidth">shapingAverageBandwidth</a></code> | <code>java.lang.Number</code> | The average bandwidth in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.shapingBurstSize">shapingBurstSize</a></code> | <code>java.lang.Number</code> | The maximum burst size allowed in bytes if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.shapingEnabled">shapingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable traffic shaping on this virtual switch or port group. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.shapingPeakBandwidth">shapingPeakBandwidth</a></code> | <code>java.lang.Number</code> | The peak bandwidth during bursts in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.standbyNics">standbyNics</a></code> | <code>java.util.List<java.lang.String></code> | List of standby network adapters used for failover. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.teamingPolicy">teamingPolicy</a></code> | <code>java.lang.String</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `activeNics`<sup>Required</sup> <a name="activeNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.activeNics"></a>

- *Type:* java.util.List<java.lang.String>

List of active network adapters used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#active_nics HostVirtualSwitch#active_nics}

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.hostSystemId"></a>

- *Type:* java.lang.String

The managed object ID of the host to set the virtual switch up on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#host_system_id HostVirtualSwitch#host_system_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the virtual switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#name HostVirtualSwitch#name}

---

##### `networkAdapters`<sup>Required</sup> <a name="networkAdapters" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.networkAdapters"></a>

- *Type:* java.util.List<java.lang.String>

The list of network adapters to bind to this virtual switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#network_adapters HostVirtualSwitch#network_adapters}

---

##### `allowForgedTransmits`<sup>Optional</sup> <a name="allowForgedTransmits" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.allowForgedTransmits"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#allow_forged_transmits HostVirtualSwitch#allow_forged_transmits}

---

##### `allowMacChanges`<sup>Optional</sup> <a name="allowMacChanges" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.allowMacChanges"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#allow_mac_changes HostVirtualSwitch#allow_mac_changes}

---

##### `allowPromiscuous`<sup>Optional</sup> <a name="allowPromiscuous" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.allowPromiscuous"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#allow_promiscuous HostVirtualSwitch#allow_promiscuous}

---

##### `beaconInterval`<sup>Optional</sup> <a name="beaconInterval" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.beaconInterval"></a>

- *Type:* java.lang.Number

Determines how often, in seconds, a beacon should be sent to probe for the validity of a link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#beacon_interval HostVirtualSwitch#beacon_interval}

---

##### `checkBeacon`<sup>Optional</sup> <a name="checkBeacon" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.checkBeacon"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable beacon probing.

Requires that the vSwitch has been configured to use a beacon. If disabled, link status is used only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#check_beacon HostVirtualSwitch#check_beacon}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.failback"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#failback HostVirtualSwitch#failback}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#id HostVirtualSwitch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linkDiscoveryOperation`<sup>Optional</sup> <a name="linkDiscoveryOperation" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.linkDiscoveryOperation"></a>

- *Type:* java.lang.String

Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#link_discovery_operation HostVirtualSwitch#link_discovery_operation}

---

##### `linkDiscoveryProtocol`<sup>Optional</sup> <a name="linkDiscoveryProtocol" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.linkDiscoveryProtocol"></a>

- *Type:* java.lang.String

The discovery protocol type. Valid values are cdp and lldp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#link_discovery_protocol HostVirtualSwitch#link_discovery_protocol}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.mtu"></a>

- *Type:* java.lang.Number

The maximum transmission unit (MTU) of the virtual switch in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#mtu HostVirtualSwitch#mtu}

---

##### `notifySwitches`<sup>Optional</sup> <a name="notifySwitches" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.notifySwitches"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#notify_switches HostVirtualSwitch#notify_switches}

---

##### `numberOfPorts`<sup>Optional</sup> <a name="numberOfPorts" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.numberOfPorts"></a>

- *Type:* java.lang.Number

The number of ports that this virtual switch is configured to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#number_of_ports HostVirtualSwitch#number_of_ports}

---

##### `shapingAverageBandwidth`<sup>Optional</sup> <a name="shapingAverageBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.shapingAverageBandwidth"></a>

- *Type:* java.lang.Number

The average bandwidth in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#shaping_average_bandwidth HostVirtualSwitch#shaping_average_bandwidth}

---

##### `shapingBurstSize`<sup>Optional</sup> <a name="shapingBurstSize" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.shapingBurstSize"></a>

- *Type:* java.lang.Number

The maximum burst size allowed in bytes if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#shaping_burst_size HostVirtualSwitch#shaping_burst_size}

---

##### `shapingEnabled`<sup>Optional</sup> <a name="shapingEnabled" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.shapingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable traffic shaping on this virtual switch or port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#shaping_enabled HostVirtualSwitch#shaping_enabled}

---

##### `shapingPeakBandwidth`<sup>Optional</sup> <a name="shapingPeakBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.shapingPeakBandwidth"></a>

- *Type:* java.lang.Number

The peak bandwidth during bursts in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#shaping_peak_bandwidth HostVirtualSwitch#shaping_peak_bandwidth}

---

##### `standbyNics`<sup>Optional</sup> <a name="standbyNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.standbyNics"></a>

- *Type:* java.util.List<java.lang.String>

List of standby network adapters used for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#standby_nics HostVirtualSwitch#standby_nics}

---

##### `teamingPolicy`<sup>Optional</sup> <a name="teamingPolicy" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.teamingPolicy"></a>

- *Type:* java.lang.String

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#teaming_policy HostVirtualSwitch#teaming_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowForgedTransmits">resetAllowForgedTransmits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowMacChanges">resetAllowMacChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowPromiscuous">resetAllowPromiscuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetBeaconInterval">resetBeaconInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetCheckBeacon">resetCheckBeacon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetFailback">resetFailback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryOperation">resetLinkDiscoveryOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryProtocol">resetLinkDiscoveryProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNotifySwitches">resetNotifySwitches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNumberOfPorts">resetNumberOfPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingAverageBandwidth">resetShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingBurstSize">resetShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingEnabled">resetShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingPeakBandwidth">resetShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetStandbyNics">resetStandbyNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetTeamingPolicy">resetTeamingPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAllowForgedTransmits` <a name="resetAllowForgedTransmits" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowForgedTransmits"></a>

```java
public void resetAllowForgedTransmits()
```

##### `resetAllowMacChanges` <a name="resetAllowMacChanges" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowMacChanges"></a>

```java
public void resetAllowMacChanges()
```

##### `resetAllowPromiscuous` <a name="resetAllowPromiscuous" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowPromiscuous"></a>

```java
public void resetAllowPromiscuous()
```

##### `resetBeaconInterval` <a name="resetBeaconInterval" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetBeaconInterval"></a>

```java
public void resetBeaconInterval()
```

##### `resetCheckBeacon` <a name="resetCheckBeacon" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetCheckBeacon"></a>

```java
public void resetCheckBeacon()
```

##### `resetFailback` <a name="resetFailback" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetFailback"></a>

```java
public void resetFailback()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetId"></a>

```java
public void resetId()
```

##### `resetLinkDiscoveryOperation` <a name="resetLinkDiscoveryOperation" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryOperation"></a>

```java
public void resetLinkDiscoveryOperation()
```

##### `resetLinkDiscoveryProtocol` <a name="resetLinkDiscoveryProtocol" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryProtocol"></a>

```java
public void resetLinkDiscoveryProtocol()
```

##### `resetMtu` <a name="resetMtu" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetMtu"></a>

```java
public void resetMtu()
```

##### `resetNotifySwitches` <a name="resetNotifySwitches" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNotifySwitches"></a>

```java
public void resetNotifySwitches()
```

##### `resetNumberOfPorts` <a name="resetNumberOfPorts" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNumberOfPorts"></a>

```java
public void resetNumberOfPorts()
```

##### `resetShapingAverageBandwidth` <a name="resetShapingAverageBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingAverageBandwidth"></a>

```java
public void resetShapingAverageBandwidth()
```

##### `resetShapingBurstSize` <a name="resetShapingBurstSize" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingBurstSize"></a>

```java
public void resetShapingBurstSize()
```

##### `resetShapingEnabled` <a name="resetShapingEnabled" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingEnabled"></a>

```java
public void resetShapingEnabled()
```

##### `resetShapingPeakBandwidth` <a name="resetShapingPeakBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingPeakBandwidth"></a>

```java
public void resetShapingPeakBandwidth()
```

##### `resetStandbyNics` <a name="resetStandbyNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetStandbyNics"></a>

```java
public void resetStandbyNics()
```

##### `resetTeamingPolicy` <a name="resetTeamingPolicy" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetTeamingPolicy"></a>

```java
public void resetTeamingPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host_virtual_switch.HostVirtualSwitch;

HostVirtualSwitch.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host_virtual_switch.HostVirtualSwitch;

HostVirtualSwitch.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host_virtual_switch.HostVirtualSwitch;

HostVirtualSwitch.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNicsInput">activeNicsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmitsInput">allowForgedTransmitsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChangesInput">allowMacChangesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuousInput">allowPromiscuousInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconIntervalInput">beaconIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeaconInput">checkBeaconInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failbackInput">failbackInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemIdInput">hostSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperationInput">linkDiscoveryOperationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocolInput">linkDiscoveryProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtuInput">mtuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdaptersInput">networkAdaptersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitchesInput">notifySwitchesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPortsInput">numberOfPortsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidthInput">shapingAverageBandwidthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSizeInput">shapingBurstSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabledInput">shapingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidthInput">shapingPeakBandwidthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNicsInput">standbyNicsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicyInput">teamingPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNics">activeNics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmits">allowForgedTransmits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChanges">allowMacChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuous">allowPromiscuous</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconInterval">beaconInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeacon">checkBeacon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failback">failback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemId">hostSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperation">linkDiscoveryOperation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocol">linkDiscoveryProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdapters">networkAdapters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitches">notifySwitches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPorts">numberOfPorts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidth">shapingAverageBandwidth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSize">shapingBurstSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabled">shapingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidth">shapingPeakBandwidth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNics">standbyNics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicy">teamingPolicy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `activeNicsInput`<sup>Optional</sup> <a name="activeNicsInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNicsInput"></a>

```java
public java.util.List<java.lang.String> getActiveNicsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowForgedTransmitsInput`<sup>Optional</sup> <a name="allowForgedTransmitsInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmitsInput"></a>

```java
public java.lang.Object getAllowForgedTransmitsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowMacChangesInput`<sup>Optional</sup> <a name="allowMacChangesInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChangesInput"></a>

```java
public java.lang.Object getAllowMacChangesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowPromiscuousInput`<sup>Optional</sup> <a name="allowPromiscuousInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuousInput"></a>

```java
public java.lang.Object getAllowPromiscuousInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `beaconIntervalInput`<sup>Optional</sup> <a name="beaconIntervalInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconIntervalInput"></a>

```java
public java.lang.Number getBeaconIntervalInput();
```

- *Type:* java.lang.Number

---

##### `checkBeaconInput`<sup>Optional</sup> <a name="checkBeaconInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeaconInput"></a>

```java
public java.lang.Object getCheckBeaconInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failbackInput`<sup>Optional</sup> <a name="failbackInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failbackInput"></a>

```java
public java.lang.Object getFailbackInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostSystemIdInput`<sup>Optional</sup> <a name="hostSystemIdInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemIdInput"></a>

```java
public java.lang.String getHostSystemIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `linkDiscoveryOperationInput`<sup>Optional</sup> <a name="linkDiscoveryOperationInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperationInput"></a>

```java
public java.lang.String getLinkDiscoveryOperationInput();
```

- *Type:* java.lang.String

---

##### `linkDiscoveryProtocolInput`<sup>Optional</sup> <a name="linkDiscoveryProtocolInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocolInput"></a>

```java
public java.lang.String getLinkDiscoveryProtocolInput();
```

- *Type:* java.lang.String

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtuInput"></a>

```java
public java.lang.Number getMtuInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkAdaptersInput`<sup>Optional</sup> <a name="networkAdaptersInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdaptersInput"></a>

```java
public java.util.List<java.lang.String> getNetworkAdaptersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notifySwitchesInput`<sup>Optional</sup> <a name="notifySwitchesInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitchesInput"></a>

```java
public java.lang.Object getNotifySwitchesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `numberOfPortsInput`<sup>Optional</sup> <a name="numberOfPortsInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPortsInput"></a>

```java
public java.lang.Number getNumberOfPortsInput();
```

- *Type:* java.lang.Number

---

##### `shapingAverageBandwidthInput`<sup>Optional</sup> <a name="shapingAverageBandwidthInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidthInput"></a>

```java
public java.lang.Number getShapingAverageBandwidthInput();
```

- *Type:* java.lang.Number

---

##### `shapingBurstSizeInput`<sup>Optional</sup> <a name="shapingBurstSizeInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSizeInput"></a>

```java
public java.lang.Number getShapingBurstSizeInput();
```

- *Type:* java.lang.Number

---

##### `shapingEnabledInput`<sup>Optional</sup> <a name="shapingEnabledInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabledInput"></a>

```java
public java.lang.Object getShapingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shapingPeakBandwidthInput`<sup>Optional</sup> <a name="shapingPeakBandwidthInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidthInput"></a>

```java
public java.lang.Number getShapingPeakBandwidthInput();
```

- *Type:* java.lang.Number

---

##### `standbyNicsInput`<sup>Optional</sup> <a name="standbyNicsInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNicsInput"></a>

```java
public java.util.List<java.lang.String> getStandbyNicsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `teamingPolicyInput`<sup>Optional</sup> <a name="teamingPolicyInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicyInput"></a>

```java
public java.lang.String getTeamingPolicyInput();
```

- *Type:* java.lang.String

---

##### `activeNics`<sup>Required</sup> <a name="activeNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNics"></a>

```java
public java.util.List<java.lang.String> getActiveNics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowForgedTransmits`<sup>Required</sup> <a name="allowForgedTransmits" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmits"></a>

```java
public java.lang.Object getAllowForgedTransmits();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowMacChanges`<sup>Required</sup> <a name="allowMacChanges" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChanges"></a>

```java
public java.lang.Object getAllowMacChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowPromiscuous`<sup>Required</sup> <a name="allowPromiscuous" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuous"></a>

```java
public java.lang.Object getAllowPromiscuous();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `beaconInterval`<sup>Required</sup> <a name="beaconInterval" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconInterval"></a>

```java
public java.lang.Number getBeaconInterval();
```

- *Type:* java.lang.Number

---

##### `checkBeacon`<sup>Required</sup> <a name="checkBeacon" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeacon"></a>

```java
public java.lang.Object getCheckBeacon();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failback`<sup>Required</sup> <a name="failback" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failback"></a>

```java
public java.lang.Object getFailback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemId"></a>

```java
public java.lang.String getHostSystemId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `linkDiscoveryOperation`<sup>Required</sup> <a name="linkDiscoveryOperation" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperation"></a>

```java
public java.lang.String getLinkDiscoveryOperation();
```

- *Type:* java.lang.String

---

##### `linkDiscoveryProtocol`<sup>Required</sup> <a name="linkDiscoveryProtocol" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocol"></a>

```java
public java.lang.String getLinkDiscoveryProtocol();
```

- *Type:* java.lang.String

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkAdapters`<sup>Required</sup> <a name="networkAdapters" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdapters"></a>

```java
public java.util.List<java.lang.String> getNetworkAdapters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notifySwitches`<sup>Required</sup> <a name="notifySwitches" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitches"></a>

```java
public java.lang.Object getNotifySwitches();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `numberOfPorts`<sup>Required</sup> <a name="numberOfPorts" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPorts"></a>

```java
public java.lang.Number getNumberOfPorts();
```

- *Type:* java.lang.Number

---

##### `shapingAverageBandwidth`<sup>Required</sup> <a name="shapingAverageBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidth"></a>

```java
public java.lang.Number getShapingAverageBandwidth();
```

- *Type:* java.lang.Number

---

##### `shapingBurstSize`<sup>Required</sup> <a name="shapingBurstSize" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSize"></a>

```java
public java.lang.Number getShapingBurstSize();
```

- *Type:* java.lang.Number

---

##### `shapingEnabled`<sup>Required</sup> <a name="shapingEnabled" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabled"></a>

```java
public java.lang.Object getShapingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shapingPeakBandwidth`<sup>Required</sup> <a name="shapingPeakBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidth"></a>

```java
public java.lang.Number getShapingPeakBandwidth();
```

- *Type:* java.lang.Number

---

##### `standbyNics`<sup>Required</sup> <a name="standbyNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNics"></a>

```java
public java.util.List<java.lang.String> getStandbyNics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `teamingPolicy`<sup>Required</sup> <a name="teamingPolicy" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicy"></a>

```java
public java.lang.String getTeamingPolicy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HostVirtualSwitchConfig <a name="HostVirtualSwitchConfig" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host_virtual_switch.HostVirtualSwitchConfig;

HostVirtualSwitchConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .activeNics(java.util.List<java.lang.String>)
    .hostSystemId(java.lang.String)
    .name(java.lang.String)
    .networkAdapters(java.util.List<java.lang.String>)
//  .allowForgedTransmits(java.lang.Boolean)
//  .allowForgedTransmits(IResolvable)
//  .allowMacChanges(java.lang.Boolean)
//  .allowMacChanges(IResolvable)
//  .allowPromiscuous(java.lang.Boolean)
//  .allowPromiscuous(IResolvable)
//  .beaconInterval(java.lang.Number)
//  .checkBeacon(java.lang.Boolean)
//  .checkBeacon(IResolvable)
//  .failback(java.lang.Boolean)
//  .failback(IResolvable)
//  .id(java.lang.String)
//  .linkDiscoveryOperation(java.lang.String)
//  .linkDiscoveryProtocol(java.lang.String)
//  .mtu(java.lang.Number)
//  .notifySwitches(java.lang.Boolean)
//  .notifySwitches(IResolvable)
//  .numberOfPorts(java.lang.Number)
//  .shapingAverageBandwidth(java.lang.Number)
//  .shapingBurstSize(java.lang.Number)
//  .shapingEnabled(java.lang.Boolean)
//  .shapingEnabled(IResolvable)
//  .shapingPeakBandwidth(java.lang.Number)
//  .standbyNics(java.util.List<java.lang.String>)
//  .teamingPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.activeNics">activeNics</a></code> | <code>java.util.List<java.lang.String></code> | List of active network adapters used for load balancing. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.hostSystemId">hostSystemId</a></code> | <code>java.lang.String</code> | The managed object ID of the host to set the virtual switch up on. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.networkAdapters">networkAdapters</a></code> | <code>java.util.List<java.lang.String></code> | The list of network adapters to bind to this virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowForgedTransmits">allowForgedTransmits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowMacChanges">allowMacChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowPromiscuous">allowPromiscuous</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.beaconInterval">beaconInterval</a></code> | <code>java.lang.Number</code> | Determines how often, in seconds, a beacon should be sent to probe for the validity of a link. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.checkBeacon">checkBeacon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable beacon probing. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.failback">failback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#id HostVirtualSwitch#id}. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryOperation">linkDiscoveryOperation</a></code> | <code>java.lang.String</code> | Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryProtocol">linkDiscoveryProtocol</a></code> | <code>java.lang.String</code> | The discovery protocol type. Valid values are cdp and lldp. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | The maximum transmission unit (MTU) of the virtual switch in bytes. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.notifySwitches">notifySwitches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.numberOfPorts">numberOfPorts</a></code> | <code>java.lang.Number</code> | The number of ports that this virtual switch is configured to use. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingAverageBandwidth">shapingAverageBandwidth</a></code> | <code>java.lang.Number</code> | The average bandwidth in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingBurstSize">shapingBurstSize</a></code> | <code>java.lang.Number</code> | The maximum burst size allowed in bytes if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingEnabled">shapingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable traffic shaping on this virtual switch or port group. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingPeakBandwidth">shapingPeakBandwidth</a></code> | <code>java.lang.Number</code> | The peak bandwidth during bursts in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.standbyNics">standbyNics</a></code> | <code>java.util.List<java.lang.String></code> | List of standby network adapters used for failover. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.teamingPolicy">teamingPolicy</a></code> | <code>java.lang.String</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `activeNics`<sup>Required</sup> <a name="activeNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.activeNics"></a>

```java
public java.util.List<java.lang.String> getActiveNics();
```

- *Type:* java.util.List<java.lang.String>

List of active network adapters used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#active_nics HostVirtualSwitch#active_nics}

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.hostSystemId"></a>

```java
public java.lang.String getHostSystemId();
```

- *Type:* java.lang.String

The managed object ID of the host to set the virtual switch up on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#host_system_id HostVirtualSwitch#host_system_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the virtual switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#name HostVirtualSwitch#name}

---

##### `networkAdapters`<sup>Required</sup> <a name="networkAdapters" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.networkAdapters"></a>

```java
public java.util.List<java.lang.String> getNetworkAdapters();
```

- *Type:* java.util.List<java.lang.String>

The list of network adapters to bind to this virtual switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#network_adapters HostVirtualSwitch#network_adapters}

---

##### `allowForgedTransmits`<sup>Optional</sup> <a name="allowForgedTransmits" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowForgedTransmits"></a>

```java
public java.lang.Object getAllowForgedTransmits();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#allow_forged_transmits HostVirtualSwitch#allow_forged_transmits}

---

##### `allowMacChanges`<sup>Optional</sup> <a name="allowMacChanges" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowMacChanges"></a>

```java
public java.lang.Object getAllowMacChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#allow_mac_changes HostVirtualSwitch#allow_mac_changes}

---

##### `allowPromiscuous`<sup>Optional</sup> <a name="allowPromiscuous" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowPromiscuous"></a>

```java
public java.lang.Object getAllowPromiscuous();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#allow_promiscuous HostVirtualSwitch#allow_promiscuous}

---

##### `beaconInterval`<sup>Optional</sup> <a name="beaconInterval" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.beaconInterval"></a>

```java
public java.lang.Number getBeaconInterval();
```

- *Type:* java.lang.Number

Determines how often, in seconds, a beacon should be sent to probe for the validity of a link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#beacon_interval HostVirtualSwitch#beacon_interval}

---

##### `checkBeacon`<sup>Optional</sup> <a name="checkBeacon" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.checkBeacon"></a>

```java
public java.lang.Object getCheckBeacon();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable beacon probing.

Requires that the vSwitch has been configured to use a beacon. If disabled, link status is used only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#check_beacon HostVirtualSwitch#check_beacon}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.failback"></a>

```java
public java.lang.Object getFailback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#failback HostVirtualSwitch#failback}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#id HostVirtualSwitch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linkDiscoveryOperation`<sup>Optional</sup> <a name="linkDiscoveryOperation" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryOperation"></a>

```java
public java.lang.String getLinkDiscoveryOperation();
```

- *Type:* java.lang.String

Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#link_discovery_operation HostVirtualSwitch#link_discovery_operation}

---

##### `linkDiscoveryProtocol`<sup>Optional</sup> <a name="linkDiscoveryProtocol" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryProtocol"></a>

```java
public java.lang.String getLinkDiscoveryProtocol();
```

- *Type:* java.lang.String

The discovery protocol type. Valid values are cdp and lldp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#link_discovery_protocol HostVirtualSwitch#link_discovery_protocol}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

The maximum transmission unit (MTU) of the virtual switch in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#mtu HostVirtualSwitch#mtu}

---

##### `notifySwitches`<sup>Optional</sup> <a name="notifySwitches" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.notifySwitches"></a>

```java
public java.lang.Object getNotifySwitches();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#notify_switches HostVirtualSwitch#notify_switches}

---

##### `numberOfPorts`<sup>Optional</sup> <a name="numberOfPorts" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.numberOfPorts"></a>

```java
public java.lang.Number getNumberOfPorts();
```

- *Type:* java.lang.Number

The number of ports that this virtual switch is configured to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#number_of_ports HostVirtualSwitch#number_of_ports}

---

##### `shapingAverageBandwidth`<sup>Optional</sup> <a name="shapingAverageBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingAverageBandwidth"></a>

```java
public java.lang.Number getShapingAverageBandwidth();
```

- *Type:* java.lang.Number

The average bandwidth in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#shaping_average_bandwidth HostVirtualSwitch#shaping_average_bandwidth}

---

##### `shapingBurstSize`<sup>Optional</sup> <a name="shapingBurstSize" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingBurstSize"></a>

```java
public java.lang.Number getShapingBurstSize();
```

- *Type:* java.lang.Number

The maximum burst size allowed in bytes if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#shaping_burst_size HostVirtualSwitch#shaping_burst_size}

---

##### `shapingEnabled`<sup>Optional</sup> <a name="shapingEnabled" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingEnabled"></a>

```java
public java.lang.Object getShapingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable traffic shaping on this virtual switch or port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#shaping_enabled HostVirtualSwitch#shaping_enabled}

---

##### `shapingPeakBandwidth`<sup>Optional</sup> <a name="shapingPeakBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingPeakBandwidth"></a>

```java
public java.lang.Number getShapingPeakBandwidth();
```

- *Type:* java.lang.Number

The peak bandwidth during bursts in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#shaping_peak_bandwidth HostVirtualSwitch#shaping_peak_bandwidth}

---

##### `standbyNics`<sup>Optional</sup> <a name="standbyNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.standbyNics"></a>

```java
public java.util.List<java.lang.String> getStandbyNics();
```

- *Type:* java.util.List<java.lang.String>

List of standby network adapters used for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#standby_nics HostVirtualSwitch#standby_nics}

---

##### `teamingPolicy`<sup>Optional</sup> <a name="teamingPolicy" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.teamingPolicy"></a>

```java
public java.lang.String getTeamingPolicy();
```

- *Type:* java.lang.String

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/host_virtual_switch#teaming_policy HostVirtualSwitch#teaming_policy}

---



