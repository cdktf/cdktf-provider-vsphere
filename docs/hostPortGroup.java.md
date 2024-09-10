# `hostPortGroup` Submodule <a name="`hostPortGroup` Submodule" id="@cdktf/provider-vsphere.hostPortGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostPortGroup <a name="HostPortGroup" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group vsphere_host_port_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host_port_group.HostPortGroup;

HostPortGroup.Builder.create(Construct scope, java.lang.String id)
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
    .hostSystemId(java.lang.String)
    .name(java.lang.String)
    .virtualSwitchName(java.lang.String)
//  .activeNics(java.util.List<java.lang.String>)
//  .allowForgedTransmits(java.lang.Boolean)
//  .allowForgedTransmits(IResolvable)
//  .allowMacChanges(java.lang.Boolean)
//  .allowMacChanges(IResolvable)
//  .allowPromiscuous(java.lang.Boolean)
//  .allowPromiscuous(IResolvable)
//  .checkBeacon(java.lang.Boolean)
//  .checkBeacon(IResolvable)
//  .failback(java.lang.Boolean)
//  .failback(IResolvable)
//  .id(java.lang.String)
//  .notifySwitches(java.lang.Boolean)
//  .notifySwitches(IResolvable)
//  .shapingAverageBandwidth(java.lang.Number)
//  .shapingBurstSize(java.lang.Number)
//  .shapingEnabled(java.lang.Boolean)
//  .shapingEnabled(IResolvable)
//  .shapingPeakBandwidth(java.lang.Number)
//  .standbyNics(java.util.List<java.lang.String>)
//  .teamingPolicy(java.lang.String)
//  .vlanId(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.hostSystemId">hostSystemId</a></code> | <code>java.lang.String</code> | The managed object ID of the host to set the virtual switch up on. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the port group. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.virtualSwitchName">virtualSwitchName</a></code> | <code>java.lang.String</code> | The name of the virtual switch to bind this port group to. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.activeNics">activeNics</a></code> | <code>java.util.List<java.lang.String></code> | List of active network adapters used for load balancing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.allowForgedTransmits">allowForgedTransmits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.allowMacChanges">allowMacChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.allowPromiscuous">allowPromiscuous</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.checkBeacon">checkBeacon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable beacon probing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.failback">failback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#id HostPortGroup#id}. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.notifySwitches">notifySwitches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.shapingAverageBandwidth">shapingAverageBandwidth</a></code> | <code>java.lang.Number</code> | The average bandwidth in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.shapingBurstSize">shapingBurstSize</a></code> | <code>java.lang.Number</code> | The maximum burst size allowed in bytes if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.shapingEnabled">shapingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable traffic shaping on this virtual switch or port group. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.shapingPeakBandwidth">shapingPeakBandwidth</a></code> | <code>java.lang.Number</code> | The peak bandwidth during bursts in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.standbyNics">standbyNics</a></code> | <code>java.util.List<java.lang.String></code> | List of standby network adapters used for failover. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.teamingPolicy">teamingPolicy</a></code> | <code>java.lang.String</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.vlanId">vlanId</a></code> | <code>java.lang.Number</code> | The VLAN ID/trunk mode for this port group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.hostSystemId"></a>

- *Type:* java.lang.String

The managed object ID of the host to set the virtual switch up on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#host_system_id HostPortGroup#host_system_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#name HostPortGroup#name}

---

##### `virtualSwitchName`<sup>Required</sup> <a name="virtualSwitchName" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.virtualSwitchName"></a>

- *Type:* java.lang.String

The name of the virtual switch to bind this port group to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#virtual_switch_name HostPortGroup#virtual_switch_name}

---

##### `activeNics`<sup>Optional</sup> <a name="activeNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.activeNics"></a>

- *Type:* java.util.List<java.lang.String>

List of active network adapters used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#active_nics HostPortGroup#active_nics}

---

##### `allowForgedTransmits`<sup>Optional</sup> <a name="allowForgedTransmits" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.allowForgedTransmits"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#allow_forged_transmits HostPortGroup#allow_forged_transmits}

---

##### `allowMacChanges`<sup>Optional</sup> <a name="allowMacChanges" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.allowMacChanges"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#allow_mac_changes HostPortGroup#allow_mac_changes}

---

##### `allowPromiscuous`<sup>Optional</sup> <a name="allowPromiscuous" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.allowPromiscuous"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#allow_promiscuous HostPortGroup#allow_promiscuous}

---

##### `checkBeacon`<sup>Optional</sup> <a name="checkBeacon" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.checkBeacon"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable beacon probing.

Requires that the vSwitch has been configured to use a beacon. If disabled, link status is used only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#check_beacon HostPortGroup#check_beacon}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.failback"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#failback HostPortGroup#failback}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#id HostPortGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notifySwitches`<sup>Optional</sup> <a name="notifySwitches" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.notifySwitches"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#notify_switches HostPortGroup#notify_switches}

---

##### `shapingAverageBandwidth`<sup>Optional</sup> <a name="shapingAverageBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.shapingAverageBandwidth"></a>

- *Type:* java.lang.Number

The average bandwidth in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#shaping_average_bandwidth HostPortGroup#shaping_average_bandwidth}

---

##### `shapingBurstSize`<sup>Optional</sup> <a name="shapingBurstSize" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.shapingBurstSize"></a>

- *Type:* java.lang.Number

The maximum burst size allowed in bytes if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#shaping_burst_size HostPortGroup#shaping_burst_size}

---

##### `shapingEnabled`<sup>Optional</sup> <a name="shapingEnabled" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.shapingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable traffic shaping on this virtual switch or port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#shaping_enabled HostPortGroup#shaping_enabled}

---

##### `shapingPeakBandwidth`<sup>Optional</sup> <a name="shapingPeakBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.shapingPeakBandwidth"></a>

- *Type:* java.lang.Number

The peak bandwidth during bursts in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#shaping_peak_bandwidth HostPortGroup#shaping_peak_bandwidth}

---

##### `standbyNics`<sup>Optional</sup> <a name="standbyNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.standbyNics"></a>

- *Type:* java.util.List<java.lang.String>

List of standby network adapters used for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#standby_nics HostPortGroup#standby_nics}

---

##### `teamingPolicy`<sup>Optional</sup> <a name="teamingPolicy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.teamingPolicy"></a>

- *Type:* java.lang.String

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#teaming_policy HostPortGroup#teaming_policy}

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.vlanId"></a>

- *Type:* java.lang.Number

The VLAN ID/trunk mode for this port group.

An ID of 0 denotes no tagging, an ID of 1-4094 tags with the specific ID, and an ID of 4095 enables trunk mode, allowing the guest to manage its own tagging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#vlan_id HostPortGroup#vlan_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetActiveNics">resetActiveNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowForgedTransmits">resetAllowForgedTransmits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowMacChanges">resetAllowMacChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowPromiscuous">resetAllowPromiscuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetCheckBeacon">resetCheckBeacon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetFailback">resetFailback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetNotifySwitches">resetNotifySwitches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingAverageBandwidth">resetShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingBurstSize">resetShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingEnabled">resetShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingPeakBandwidth">resetShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetStandbyNics">resetStandbyNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetTeamingPolicy">resetTeamingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetVlanId">resetVlanId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetActiveNics` <a name="resetActiveNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetActiveNics"></a>

```java
public void resetActiveNics()
```

##### `resetAllowForgedTransmits` <a name="resetAllowForgedTransmits" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowForgedTransmits"></a>

```java
public void resetAllowForgedTransmits()
```

##### `resetAllowMacChanges` <a name="resetAllowMacChanges" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowMacChanges"></a>

```java
public void resetAllowMacChanges()
```

##### `resetAllowPromiscuous` <a name="resetAllowPromiscuous" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowPromiscuous"></a>

```java
public void resetAllowPromiscuous()
```

##### `resetCheckBeacon` <a name="resetCheckBeacon" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetCheckBeacon"></a>

```java
public void resetCheckBeacon()
```

##### `resetFailback` <a name="resetFailback" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetFailback"></a>

```java
public void resetFailback()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetId"></a>

```java
public void resetId()
```

##### `resetNotifySwitches` <a name="resetNotifySwitches" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetNotifySwitches"></a>

```java
public void resetNotifySwitches()
```

##### `resetShapingAverageBandwidth` <a name="resetShapingAverageBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingAverageBandwidth"></a>

```java
public void resetShapingAverageBandwidth()
```

##### `resetShapingBurstSize` <a name="resetShapingBurstSize" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingBurstSize"></a>

```java
public void resetShapingBurstSize()
```

##### `resetShapingEnabled` <a name="resetShapingEnabled" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingEnabled"></a>

```java
public void resetShapingEnabled()
```

##### `resetShapingPeakBandwidth` <a name="resetShapingPeakBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingPeakBandwidth"></a>

```java
public void resetShapingPeakBandwidth()
```

##### `resetStandbyNics` <a name="resetStandbyNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetStandbyNics"></a>

```java
public void resetStandbyNics()
```

##### `resetTeamingPolicy` <a name="resetTeamingPolicy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetTeamingPolicy"></a>

```java
public void resetTeamingPolicy()
```

##### `resetVlanId` <a name="resetVlanId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetVlanId"></a>

```java
public void resetVlanId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HostPortGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host_port_group.HostPortGroup;

HostPortGroup.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host_port_group.HostPortGroup;

HostPortGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host_port_group.HostPortGroup;

HostPortGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host_port_group.HostPortGroup;

HostPortGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HostPortGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a HostPortGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HostPortGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HostPortGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the HostPortGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.computedPolicy">computedPolicy</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList">HostPortGroupPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNicsInput">activeNicsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmitsInput">allowForgedTransmitsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChangesInput">allowMacChangesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuousInput">allowPromiscuousInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeaconInput">checkBeaconInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failbackInput">failbackInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemIdInput">hostSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitchesInput">notifySwitchesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidthInput">shapingAverageBandwidthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSizeInput">shapingBurstSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabledInput">shapingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidthInput">shapingPeakBandwidthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNicsInput">standbyNicsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicyInput">teamingPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchNameInput">virtualSwitchNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanIdInput">vlanIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNics">activeNics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmits">allowForgedTransmits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChanges">allowMacChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuous">allowPromiscuous</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeacon">checkBeacon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failback">failback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemId">hostSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitches">notifySwitches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidth">shapingAverageBandwidth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSize">shapingBurstSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabled">shapingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidth">shapingPeakBandwidth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNics">standbyNics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicy">teamingPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchName">virtualSwitchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanId">vlanId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computedPolicy`<sup>Required</sup> <a name="computedPolicy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.computedPolicy"></a>

```java
public StringMap getComputedPolicy();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.ports"></a>

```java
public HostPortGroupPortsList getPorts();
```

- *Type:* <a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList">HostPortGroupPortsList</a>

---

##### `activeNicsInput`<sup>Optional</sup> <a name="activeNicsInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNicsInput"></a>

```java
public java.util.List<java.lang.String> getActiveNicsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowForgedTransmitsInput`<sup>Optional</sup> <a name="allowForgedTransmitsInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmitsInput"></a>

```java
public java.lang.Object getAllowForgedTransmitsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowMacChangesInput`<sup>Optional</sup> <a name="allowMacChangesInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChangesInput"></a>

```java
public java.lang.Object getAllowMacChangesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowPromiscuousInput`<sup>Optional</sup> <a name="allowPromiscuousInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuousInput"></a>

```java
public java.lang.Object getAllowPromiscuousInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `checkBeaconInput`<sup>Optional</sup> <a name="checkBeaconInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeaconInput"></a>

```java
public java.lang.Object getCheckBeaconInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failbackInput`<sup>Optional</sup> <a name="failbackInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failbackInput"></a>

```java
public java.lang.Object getFailbackInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostSystemIdInput`<sup>Optional</sup> <a name="hostSystemIdInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemIdInput"></a>

```java
public java.lang.String getHostSystemIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notifySwitchesInput`<sup>Optional</sup> <a name="notifySwitchesInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitchesInput"></a>

```java
public java.lang.Object getNotifySwitchesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shapingAverageBandwidthInput`<sup>Optional</sup> <a name="shapingAverageBandwidthInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidthInput"></a>

```java
public java.lang.Number getShapingAverageBandwidthInput();
```

- *Type:* java.lang.Number

---

##### `shapingBurstSizeInput`<sup>Optional</sup> <a name="shapingBurstSizeInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSizeInput"></a>

```java
public java.lang.Number getShapingBurstSizeInput();
```

- *Type:* java.lang.Number

---

##### `shapingEnabledInput`<sup>Optional</sup> <a name="shapingEnabledInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabledInput"></a>

```java
public java.lang.Object getShapingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shapingPeakBandwidthInput`<sup>Optional</sup> <a name="shapingPeakBandwidthInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidthInput"></a>

```java
public java.lang.Number getShapingPeakBandwidthInput();
```

- *Type:* java.lang.Number

---

##### `standbyNicsInput`<sup>Optional</sup> <a name="standbyNicsInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNicsInput"></a>

```java
public java.util.List<java.lang.String> getStandbyNicsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `teamingPolicyInput`<sup>Optional</sup> <a name="teamingPolicyInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicyInput"></a>

```java
public java.lang.String getTeamingPolicyInput();
```

- *Type:* java.lang.String

---

##### `virtualSwitchNameInput`<sup>Optional</sup> <a name="virtualSwitchNameInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchNameInput"></a>

```java
public java.lang.String getVirtualSwitchNameInput();
```

- *Type:* java.lang.String

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanIdInput"></a>

```java
public java.lang.Number getVlanIdInput();
```

- *Type:* java.lang.Number

---

##### `activeNics`<sup>Required</sup> <a name="activeNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNics"></a>

```java
public java.util.List<java.lang.String> getActiveNics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowForgedTransmits`<sup>Required</sup> <a name="allowForgedTransmits" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmits"></a>

```java
public java.lang.Object getAllowForgedTransmits();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowMacChanges`<sup>Required</sup> <a name="allowMacChanges" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChanges"></a>

```java
public java.lang.Object getAllowMacChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowPromiscuous`<sup>Required</sup> <a name="allowPromiscuous" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuous"></a>

```java
public java.lang.Object getAllowPromiscuous();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `checkBeacon`<sup>Required</sup> <a name="checkBeacon" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeacon"></a>

```java
public java.lang.Object getCheckBeacon();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failback`<sup>Required</sup> <a name="failback" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failback"></a>

```java
public java.lang.Object getFailback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemId"></a>

```java
public java.lang.String getHostSystemId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notifySwitches`<sup>Required</sup> <a name="notifySwitches" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitches"></a>

```java
public java.lang.Object getNotifySwitches();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shapingAverageBandwidth`<sup>Required</sup> <a name="shapingAverageBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidth"></a>

```java
public java.lang.Number getShapingAverageBandwidth();
```

- *Type:* java.lang.Number

---

##### `shapingBurstSize`<sup>Required</sup> <a name="shapingBurstSize" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSize"></a>

```java
public java.lang.Number getShapingBurstSize();
```

- *Type:* java.lang.Number

---

##### `shapingEnabled`<sup>Required</sup> <a name="shapingEnabled" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabled"></a>

```java
public java.lang.Object getShapingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shapingPeakBandwidth`<sup>Required</sup> <a name="shapingPeakBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidth"></a>

```java
public java.lang.Number getShapingPeakBandwidth();
```

- *Type:* java.lang.Number

---

##### `standbyNics`<sup>Required</sup> <a name="standbyNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNics"></a>

```java
public java.util.List<java.lang.String> getStandbyNics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `teamingPolicy`<sup>Required</sup> <a name="teamingPolicy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicy"></a>

```java
public java.lang.String getTeamingPolicy();
```

- *Type:* java.lang.String

---

##### `virtualSwitchName`<sup>Required</sup> <a name="virtualSwitchName" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchName"></a>

```java
public java.lang.String getVirtualSwitchName();
```

- *Type:* java.lang.String

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanId"></a>

```java
public java.lang.Number getVlanId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HostPortGroupConfig <a name="HostPortGroupConfig" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host_port_group.HostPortGroupConfig;

HostPortGroupConfig.builder()
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
    .hostSystemId(java.lang.String)
    .name(java.lang.String)
    .virtualSwitchName(java.lang.String)
//  .activeNics(java.util.List<java.lang.String>)
//  .allowForgedTransmits(java.lang.Boolean)
//  .allowForgedTransmits(IResolvable)
//  .allowMacChanges(java.lang.Boolean)
//  .allowMacChanges(IResolvable)
//  .allowPromiscuous(java.lang.Boolean)
//  .allowPromiscuous(IResolvable)
//  .checkBeacon(java.lang.Boolean)
//  .checkBeacon(IResolvable)
//  .failback(java.lang.Boolean)
//  .failback(IResolvable)
//  .id(java.lang.String)
//  .notifySwitches(java.lang.Boolean)
//  .notifySwitches(IResolvable)
//  .shapingAverageBandwidth(java.lang.Number)
//  .shapingBurstSize(java.lang.Number)
//  .shapingEnabled(java.lang.Boolean)
//  .shapingEnabled(IResolvable)
//  .shapingPeakBandwidth(java.lang.Number)
//  .standbyNics(java.util.List<java.lang.String>)
//  .teamingPolicy(java.lang.String)
//  .vlanId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.hostSystemId">hostSystemId</a></code> | <code>java.lang.String</code> | The managed object ID of the host to set the virtual switch up on. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the port group. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.virtualSwitchName">virtualSwitchName</a></code> | <code>java.lang.String</code> | The name of the virtual switch to bind this port group to. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.activeNics">activeNics</a></code> | <code>java.util.List<java.lang.String></code> | List of active network adapters used for load balancing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowForgedTransmits">allowForgedTransmits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowMacChanges">allowMacChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowPromiscuous">allowPromiscuous</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.checkBeacon">checkBeacon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable beacon probing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.failback">failback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#id HostPortGroup#id}. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.notifySwitches">notifySwitches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingAverageBandwidth">shapingAverageBandwidth</a></code> | <code>java.lang.Number</code> | The average bandwidth in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingBurstSize">shapingBurstSize</a></code> | <code>java.lang.Number</code> | The maximum burst size allowed in bytes if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingEnabled">shapingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable traffic shaping on this virtual switch or port group. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingPeakBandwidth">shapingPeakBandwidth</a></code> | <code>java.lang.Number</code> | The peak bandwidth during bursts in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.standbyNics">standbyNics</a></code> | <code>java.util.List<java.lang.String></code> | List of standby network adapters used for failover. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.teamingPolicy">teamingPolicy</a></code> | <code>java.lang.String</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.vlanId">vlanId</a></code> | <code>java.lang.Number</code> | The VLAN ID/trunk mode for this port group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.hostSystemId"></a>

```java
public java.lang.String getHostSystemId();
```

- *Type:* java.lang.String

The managed object ID of the host to set the virtual switch up on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#host_system_id HostPortGroup#host_system_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#name HostPortGroup#name}

---

##### `virtualSwitchName`<sup>Required</sup> <a name="virtualSwitchName" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.virtualSwitchName"></a>

```java
public java.lang.String getVirtualSwitchName();
```

- *Type:* java.lang.String

The name of the virtual switch to bind this port group to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#virtual_switch_name HostPortGroup#virtual_switch_name}

---

##### `activeNics`<sup>Optional</sup> <a name="activeNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.activeNics"></a>

```java
public java.util.List<java.lang.String> getActiveNics();
```

- *Type:* java.util.List<java.lang.String>

List of active network adapters used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#active_nics HostPortGroup#active_nics}

---

##### `allowForgedTransmits`<sup>Optional</sup> <a name="allowForgedTransmits" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowForgedTransmits"></a>

```java
public java.lang.Object getAllowForgedTransmits();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#allow_forged_transmits HostPortGroup#allow_forged_transmits}

---

##### `allowMacChanges`<sup>Optional</sup> <a name="allowMacChanges" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowMacChanges"></a>

```java
public java.lang.Object getAllowMacChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#allow_mac_changes HostPortGroup#allow_mac_changes}

---

##### `allowPromiscuous`<sup>Optional</sup> <a name="allowPromiscuous" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowPromiscuous"></a>

```java
public java.lang.Object getAllowPromiscuous();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#allow_promiscuous HostPortGroup#allow_promiscuous}

---

##### `checkBeacon`<sup>Optional</sup> <a name="checkBeacon" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.checkBeacon"></a>

```java
public java.lang.Object getCheckBeacon();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable beacon probing.

Requires that the vSwitch has been configured to use a beacon. If disabled, link status is used only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#check_beacon HostPortGroup#check_beacon}

---

##### `failback`<sup>Optional</sup> <a name="failback" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.failback"></a>

```java
public java.lang.Object getFailback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#failback HostPortGroup#failback}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#id HostPortGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notifySwitches`<sup>Optional</sup> <a name="notifySwitches" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.notifySwitches"></a>

```java
public java.lang.Object getNotifySwitches();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#notify_switches HostPortGroup#notify_switches}

---

##### `shapingAverageBandwidth`<sup>Optional</sup> <a name="shapingAverageBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingAverageBandwidth"></a>

```java
public java.lang.Number getShapingAverageBandwidth();
```

- *Type:* java.lang.Number

The average bandwidth in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#shaping_average_bandwidth HostPortGroup#shaping_average_bandwidth}

---

##### `shapingBurstSize`<sup>Optional</sup> <a name="shapingBurstSize" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingBurstSize"></a>

```java
public java.lang.Number getShapingBurstSize();
```

- *Type:* java.lang.Number

The maximum burst size allowed in bytes if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#shaping_burst_size HostPortGroup#shaping_burst_size}

---

##### `shapingEnabled`<sup>Optional</sup> <a name="shapingEnabled" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingEnabled"></a>

```java
public java.lang.Object getShapingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable traffic shaping on this virtual switch or port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#shaping_enabled HostPortGroup#shaping_enabled}

---

##### `shapingPeakBandwidth`<sup>Optional</sup> <a name="shapingPeakBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingPeakBandwidth"></a>

```java
public java.lang.Number getShapingPeakBandwidth();
```

- *Type:* java.lang.Number

The peak bandwidth during bursts in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#shaping_peak_bandwidth HostPortGroup#shaping_peak_bandwidth}

---

##### `standbyNics`<sup>Optional</sup> <a name="standbyNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.standbyNics"></a>

```java
public java.util.List<java.lang.String> getStandbyNics();
```

- *Type:* java.util.List<java.lang.String>

List of standby network adapters used for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#standby_nics HostPortGroup#standby_nics}

---

##### `teamingPolicy`<sup>Optional</sup> <a name="teamingPolicy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.teamingPolicy"></a>

```java
public java.lang.String getTeamingPolicy();
```

- *Type:* java.lang.String

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#teaming_policy HostPortGroup#teaming_policy}

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.vlanId"></a>

```java
public java.lang.Number getVlanId();
```

- *Type:* java.lang.Number

The VLAN ID/trunk mode for this port group.

An ID of 0 denotes no tagging, an ID of 1-4094 tags with the specific ID, and an ID of 4095 enables trunk mode, allowing the guest to manage its own tagging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/resources/host_port_group#vlan_id HostPortGroup#vlan_id}

---

### HostPortGroupPorts <a name="HostPortGroupPorts" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host_port_group.HostPortGroupPorts;

HostPortGroupPorts.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### HostPortGroupPortsList <a name="HostPortGroupPortsList" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host_port_group.HostPortGroupPortsList;

new HostPortGroupPortsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.get"></a>

```java
public HostPortGroupPortsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### HostPortGroupPortsOutputReference <a name="HostPortGroupPortsOutputReference" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.host_port_group.HostPortGroupPortsOutputReference;

new HostPortGroupPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.macAddresses">macAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts">HostPortGroupPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `macAddresses`<sup>Required</sup> <a name="macAddresses" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.macAddresses"></a>

```java
public java.util.List<java.lang.String> getMacAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.internalValue"></a>

```java
public HostPortGroupPorts getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts">HostPortGroupPorts</a>

---



