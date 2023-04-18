# `vsphere_vnic`

Refer to the Terraform Registory for docs: [`vsphere_vnic`](https://www.terraform.io/docs/providers/vsphere/r/vnic).

# `vnic` Submodule <a name="`vnic` Submodule" id="@cdktf/provider-vsphere.vnic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Vnic <a name="Vnic" id="@cdktf/provider-vsphere.vnic.Vnic"></a>

Represents a {@link https://www.terraform.io/docs/providers/vsphere/r/vnic vsphere_vnic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import vnic

vnic.Vnic(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host: str,
  distributed_port_group: str = None,
  distributed_switch_port: str = None,
  id: str = None,
  ipv4: VnicIpv4 = None,
  ipv6: VnicIpv6 = None,
  mac: str = None,
  mtu: typing.Union[int, float] = None,
  netstack: str = None,
  portgroup: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.host">host</a></code> | <code>str</code> | ESX host the interface belongs to. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.distributedPortGroup">distributed_port_group</a></code> | <code>str</code> | Key of the distributed portgroup the nic will connect to. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.distributedSwitchPort">distributed_switch_port</a></code> | <code>str</code> | UUID of the DVSwitch the nic will be attached to. Do not set if you set portgroup. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#id Vnic#id}. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a></code> | ipv4 block. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a></code> | ipv6 block. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.mac">mac</a></code> | <code>str</code> | MAC address of the interface. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | MTU of the interface. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.netstack">netstack</a></code> | <code>str</code> | TCP/IP stack setting for this interface. Possible values are 'defaultTcpipStack', 'vmotion', 'provisioning'. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.portgroup">portgroup</a></code> | <code>str</code> | portgroup to attach the nic to. Do not set if you set distributed_switch_port. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.host"></a>

- *Type:* str

ESX host the interface belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#host Vnic#host}

---

##### `distributed_port_group`<sup>Optional</sup> <a name="distributed_port_group" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.distributedPortGroup"></a>

- *Type:* str

Key of the distributed portgroup the nic will connect to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#distributed_port_group Vnic#distributed_port_group}

---

##### `distributed_switch_port`<sup>Optional</sup> <a name="distributed_switch_port" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.distributedSwitchPort"></a>

- *Type:* str

UUID of the DVSwitch the nic will be attached to. Do not set if you set portgroup.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#distributed_switch_port Vnic#distributed_switch_port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#id Vnic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.ipv4"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

ipv4 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#ipv4 Vnic#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.ipv6"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

ipv6 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#ipv6 Vnic#ipv6}

---

##### `mac`<sup>Optional</sup> <a name="mac" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.mac"></a>

- *Type:* str

MAC address of the interface.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#mac Vnic#mac}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.mtu"></a>

- *Type:* typing.Union[int, float]

MTU of the interface.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#mtu Vnic#mtu}

---

##### `netstack`<sup>Optional</sup> <a name="netstack" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.netstack"></a>

- *Type:* str

TCP/IP stack setting for this interface. Possible values are 'defaultTcpipStack', 'vmotion', 'provisioning'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#netstack Vnic#netstack}

---

##### `portgroup`<sup>Optional</sup> <a name="portgroup" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.portgroup"></a>

- *Type:* str

portgroup to attach the nic to. Do not set if you set distributed_switch_port.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#portgroup Vnic#portgroup}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.putIpv4">put_ipv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.putIpv6">put_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetDistributedPortGroup">reset_distributed_port_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetDistributedSwitchPort">reset_distributed_switch_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetIpv4">reset_ipv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetIpv6">reset_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetMac">reset_mac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetMtu">reset_mtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetNetstack">reset_netstack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetPortgroup">reset_portgroup</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.vnic.Vnic.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.vnic.Vnic.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.vnic.Vnic.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vnic.Vnic.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.vnic.Vnic.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.vnic.Vnic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.vnic.Vnic.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.vnic.Vnic.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.vnic.Vnic.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.Vnic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_ipv4` <a name="put_ipv4" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv4"></a>

```python
def put_ipv4(
  dhcp: typing.Union[bool, IResolvable] = None,
  gw: str = None,
  ip: str = None,
  netmask: str = None
) -> None
```

###### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv4.parameter.dhcp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use DHCP to configure the interface's IPv4 stack.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#dhcp Vnic#dhcp}

---

###### `gw`<sup>Optional</sup> <a name="gw" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv4.parameter.gw"></a>

- *Type:* str

IP address of the default gateway, if DHCP is not set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#gw Vnic#gw}

---

###### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv4.parameter.ip"></a>

- *Type:* str

address of the interface, if DHCP is not set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#ip Vnic#ip}

---

###### `netmask`<sup>Optional</sup> <a name="netmask" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv4.parameter.netmask"></a>

- *Type:* str

netmask of the interface, if DHCP is not set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#netmask Vnic#netmask}

---

##### `put_ipv6` <a name="put_ipv6" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv6"></a>

```python
def put_ipv6(
  addresses: typing.List[str] = None,
  autoconfig: typing.Union[bool, IResolvable] = None,
  dhcp: typing.Union[bool, IResolvable] = None,
  gw: str = None
) -> None
```

###### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv6.parameter.addresses"></a>

- *Type:* typing.List[str]

List of IPv6 addresses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#addresses Vnic#addresses}

---

###### `autoconfig`<sup>Optional</sup> <a name="autoconfig" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv6.parameter.autoconfig"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use IPv6 Autoconfiguration (RFC2462).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#autoconfig Vnic#autoconfig}

---

###### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv6.parameter.dhcp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use DHCP to configure the interface's IPv4 stack.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#dhcp Vnic#dhcp}

---

###### `gw`<sup>Optional</sup> <a name="gw" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv6.parameter.gw"></a>

- *Type:* str

IP address of the default gateway, if DHCP or autoconfig is not set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#gw Vnic#gw}

---

##### `reset_distributed_port_group` <a name="reset_distributed_port_group" id="@cdktf/provider-vsphere.vnic.Vnic.resetDistributedPortGroup"></a>

```python
def reset_distributed_port_group() -> None
```

##### `reset_distributed_switch_port` <a name="reset_distributed_switch_port" id="@cdktf/provider-vsphere.vnic.Vnic.resetDistributedSwitchPort"></a>

```python
def reset_distributed_switch_port() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.vnic.Vnic.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ipv4` <a name="reset_ipv4" id="@cdktf/provider-vsphere.vnic.Vnic.resetIpv4"></a>

```python
def reset_ipv4() -> None
```

##### `reset_ipv6` <a name="reset_ipv6" id="@cdktf/provider-vsphere.vnic.Vnic.resetIpv6"></a>

```python
def reset_ipv6() -> None
```

##### `reset_mac` <a name="reset_mac" id="@cdktf/provider-vsphere.vnic.Vnic.resetMac"></a>

```python
def reset_mac() -> None
```

##### `reset_mtu` <a name="reset_mtu" id="@cdktf/provider-vsphere.vnic.Vnic.resetMtu"></a>

```python
def reset_mtu() -> None
```

##### `reset_netstack` <a name="reset_netstack" id="@cdktf/provider-vsphere.vnic.Vnic.resetNetstack"></a>

```python
def reset_netstack() -> None
```

##### `reset_portgroup` <a name="reset_portgroup" id="@cdktf/provider-vsphere.vnic.Vnic.resetPortgroup"></a>

```python
def reset_portgroup() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.vnic.Vnic.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import vnic

vnic.Vnic.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vnic.Vnic.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import vnic

vnic.Vnic.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import vnic

vnic.Vnic.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference">VnicIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference">VnicIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroupInput">distributed_port_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPortInput">distributed_switch_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv4Input">ipv4_input</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv6Input">ipv6_input</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.macInput">mac_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.mtuInput">mtu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.netstackInput">netstack_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.portgroupInput">portgroup_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroup">distributed_port_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPort">distributed_switch_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.mac">mac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.netstack">netstack</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.portgroup">portgroup</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.vnic.Vnic.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.vnic.Vnic.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vnic.Vnic.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.vnic.Vnic.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.vnic.Vnic.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.vnic.Vnic.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.vnic.Vnic.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vnic.Vnic.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vnic.Vnic.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.vnic.Vnic.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.vnic.Vnic.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vnic.Vnic.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vnic.Vnic.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vnic.Vnic.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv4"></a>

```python
ipv4: VnicIpv4OutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference">VnicIpv4OutputReference</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv6"></a>

```python
ipv6: VnicIpv6OutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference">VnicIpv6OutputReference</a>

---

##### `distributed_port_group_input`<sup>Optional</sup> <a name="distributed_port_group_input" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroupInput"></a>

```python
distributed_port_group_input: str
```

- *Type:* str

---

##### `distributed_switch_port_input`<sup>Optional</sup> <a name="distributed_switch_port_input" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPortInput"></a>

```python
distributed_switch_port_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-vsphere.vnic.Vnic.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.vnic.Vnic.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipv4_input`<sup>Optional</sup> <a name="ipv4_input" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv4Input"></a>

```python
ipv4_input: VnicIpv4
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

---

##### `ipv6_input`<sup>Optional</sup> <a name="ipv6_input" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv6Input"></a>

```python
ipv6_input: VnicIpv6
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

---

##### `mac_input`<sup>Optional</sup> <a name="mac_input" id="@cdktf/provider-vsphere.vnic.Vnic.property.macInput"></a>

```python
mac_input: str
```

- *Type:* str

---

##### `mtu_input`<sup>Optional</sup> <a name="mtu_input" id="@cdktf/provider-vsphere.vnic.Vnic.property.mtuInput"></a>

```python
mtu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `netstack_input`<sup>Optional</sup> <a name="netstack_input" id="@cdktf/provider-vsphere.vnic.Vnic.property.netstackInput"></a>

```python
netstack_input: str
```

- *Type:* str

---

##### `portgroup_input`<sup>Optional</sup> <a name="portgroup_input" id="@cdktf/provider-vsphere.vnic.Vnic.property.portgroupInput"></a>

```python
portgroup_input: str
```

- *Type:* str

---

##### `distributed_port_group`<sup>Required</sup> <a name="distributed_port_group" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroup"></a>

```python
distributed_port_group: str
```

- *Type:* str

---

##### `distributed_switch_port`<sup>Required</sup> <a name="distributed_switch_port" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPort"></a>

```python
distributed_switch_port: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vsphere.vnic.Vnic.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vnic.Vnic.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-vsphere.vnic.Vnic.property.mac"></a>

```python
mac: str
```

- *Type:* str

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-vsphere.vnic.Vnic.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `netstack`<sup>Required</sup> <a name="netstack" id="@cdktf/provider-vsphere.vnic.Vnic.property.netstack"></a>

```python
netstack: str
```

- *Type:* str

---

##### `portgroup`<sup>Required</sup> <a name="portgroup" id="@cdktf/provider-vsphere.vnic.Vnic.property.portgroup"></a>

```python
portgroup: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.vnic.Vnic.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VnicConfig <a name="VnicConfig" id="@cdktf/provider-vsphere.vnic.VnicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vnic.VnicConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import vnic

vnic.VnicConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host: str,
  distributed_port_group: str = None,
  distributed_switch_port: str = None,
  id: str = None,
  ipv4: VnicIpv4 = None,
  ipv6: VnicIpv6 = None,
  mac: str = None,
  mtu: typing.Union[int, float] = None,
  netstack: str = None,
  portgroup: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.host">host</a></code> | <code>str</code> | ESX host the interface belongs to. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedPortGroup">distributed_port_group</a></code> | <code>str</code> | Key of the distributed portgroup the nic will connect to. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedSwitchPort">distributed_switch_port</a></code> | <code>str</code> | UUID of the DVSwitch the nic will be attached to. Do not set if you set portgroup. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#id Vnic#id}. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a></code> | ipv4 block. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a></code> | ipv6 block. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.mac">mac</a></code> | <code>str</code> | MAC address of the interface. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | MTU of the interface. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.netstack">netstack</a></code> | <code>str</code> | TCP/IP stack setting for this interface. Possible values are 'defaultTcpipStack', 'vmotion', 'provisioning'. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.portgroup">portgroup</a></code> | <code>str</code> | portgroup to attach the nic to. Do not set if you set distributed_switch_port. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.host"></a>

```python
host: str
```

- *Type:* str

ESX host the interface belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#host Vnic#host}

---

##### `distributed_port_group`<sup>Optional</sup> <a name="distributed_port_group" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedPortGroup"></a>

```python
distributed_port_group: str
```

- *Type:* str

Key of the distributed portgroup the nic will connect to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#distributed_port_group Vnic#distributed_port_group}

---

##### `distributed_switch_port`<sup>Optional</sup> <a name="distributed_switch_port" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedSwitchPort"></a>

```python
distributed_switch_port: str
```

- *Type:* str

UUID of the DVSwitch the nic will be attached to. Do not set if you set portgroup.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#distributed_switch_port Vnic#distributed_switch_port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#id Vnic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv4"></a>

```python
ipv4: VnicIpv4
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

ipv4 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#ipv4 Vnic#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv6"></a>

```python
ipv6: VnicIpv6
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

ipv6 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#ipv6 Vnic#ipv6}

---

##### `mac`<sup>Optional</sup> <a name="mac" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.mac"></a>

```python
mac: str
```

- *Type:* str

MAC address of the interface.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#mac Vnic#mac}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

MTU of the interface.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#mtu Vnic#mtu}

---

##### `netstack`<sup>Optional</sup> <a name="netstack" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.netstack"></a>

```python
netstack: str
```

- *Type:* str

TCP/IP stack setting for this interface. Possible values are 'defaultTcpipStack', 'vmotion', 'provisioning'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#netstack Vnic#netstack}

---

##### `portgroup`<sup>Optional</sup> <a name="portgroup" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.portgroup"></a>

```python
portgroup: str
```

- *Type:* str

portgroup to attach the nic to. Do not set if you set distributed_switch_port.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#portgroup Vnic#portgroup}

---

### VnicIpv4 <a name="VnicIpv4" id="@cdktf/provider-vsphere.vnic.VnicIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vnic.VnicIpv4.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import vnic

vnic.VnicIpv4(
  dhcp: typing.Union[bool, IResolvable] = None,
  gw: str = None,
  ip: str = None,
  netmask: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.dhcp">dhcp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use DHCP to configure the interface's IPv4 stack. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.gw">gw</a></code> | <code>str</code> | IP address of the default gateway, if DHCP is not set. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.ip">ip</a></code> | <code>str</code> | address of the interface, if DHCP is not set. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.netmask">netmask</a></code> | <code>str</code> | netmask of the interface, if DHCP is not set. |

---

##### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.dhcp"></a>

```python
dhcp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use DHCP to configure the interface's IPv4 stack.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#dhcp Vnic#dhcp}

---

##### `gw`<sup>Optional</sup> <a name="gw" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.gw"></a>

```python
gw: str
```

- *Type:* str

IP address of the default gateway, if DHCP is not set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#gw Vnic#gw}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.ip"></a>

```python
ip: str
```

- *Type:* str

address of the interface, if DHCP is not set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#ip Vnic#ip}

---

##### `netmask`<sup>Optional</sup> <a name="netmask" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.netmask"></a>

```python
netmask: str
```

- *Type:* str

netmask of the interface, if DHCP is not set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#netmask Vnic#netmask}

---

### VnicIpv6 <a name="VnicIpv6" id="@cdktf/provider-vsphere.vnic.VnicIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vnic.VnicIpv6.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import vnic

vnic.VnicIpv6(
  addresses: typing.List[str] = None,
  autoconfig: typing.Union[bool, IResolvable] = None,
  dhcp: typing.Union[bool, IResolvable] = None,
  gw: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | List of IPv6 addresses. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.autoconfig">autoconfig</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use IPv6 Autoconfiguration (RFC2462). |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.dhcp">dhcp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use DHCP to configure the interface's IPv4 stack. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.gw">gw</a></code> | <code>str</code> | IP address of the default gateway, if DHCP or autoconfig is not set. |

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

List of IPv6 addresses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#addresses Vnic#addresses}

---

##### `autoconfig`<sup>Optional</sup> <a name="autoconfig" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.autoconfig"></a>

```python
autoconfig: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use IPv6 Autoconfiguration (RFC2462).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#autoconfig Vnic#autoconfig}

---

##### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.dhcp"></a>

```python
dhcp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use DHCP to configure the interface's IPv4 stack.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#dhcp Vnic#dhcp}

---

##### `gw`<sup>Optional</sup> <a name="gw" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.gw"></a>

```python
gw: str
```

- *Type:* str

IP address of the default gateway, if DHCP or autoconfig is not set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/vnic#gw Vnic#gw}

---

## Classes <a name="Classes" id="Classes"></a>

### VnicIpv4OutputReference <a name="VnicIpv4OutputReference" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import vnic

vnic.VnicIpv4OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetDhcp">reset_dhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetGw">reset_gw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetIp">reset_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetNetmask">reset_netmask</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dhcp` <a name="reset_dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetDhcp"></a>

```python
def reset_dhcp() -> None
```

##### `reset_gw` <a name="reset_gw" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetGw"></a>

```python
def reset_gw() -> None
```

##### `reset_ip` <a name="reset_ip" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetIp"></a>

```python
def reset_ip() -> None
```

##### `reset_netmask` <a name="reset_netmask" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetNetmask"></a>

```python
def reset_netmask() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcpInput">dhcp_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gwInput">gw_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmaskInput">netmask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcp">dhcp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gw">gw</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmask">netmask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dhcp_input`<sup>Optional</sup> <a name="dhcp_input" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcpInput"></a>

```python
dhcp_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gw_input`<sup>Optional</sup> <a name="gw_input" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gwInput"></a>

```python
gw_input: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `netmask_input`<sup>Optional</sup> <a name="netmask_input" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmaskInput"></a>

```python
netmask_input: str
```

- *Type:* str

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcp"></a>

```python
dhcp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gw`<sup>Required</sup> <a name="gw" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gw"></a>

```python
gw: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmask"></a>

```python
netmask: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.internalValue"></a>

```python
internal_value: VnicIpv4
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

---


### VnicIpv6OutputReference <a name="VnicIpv6OutputReference" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import vnic

vnic.VnicIpv6OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAddresses">reset_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAutoconfig">reset_autoconfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetDhcp">reset_dhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetGw">reset_gw</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_addresses` <a name="reset_addresses" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAddresses"></a>

```python
def reset_addresses() -> None
```

##### `reset_autoconfig` <a name="reset_autoconfig" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAutoconfig"></a>

```python
def reset_autoconfig() -> None
```

##### `reset_dhcp` <a name="reset_dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetDhcp"></a>

```python
def reset_dhcp() -> None
```

##### `reset_gw` <a name="reset_gw" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetGw"></a>

```python
def reset_gw() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addressesInput">addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfigInput">autoconfig_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcpInput">dhcp_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gwInput">gw_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfig">autoconfig</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcp">dhcp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gw">gw</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `addresses_input`<sup>Optional</sup> <a name="addresses_input" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addressesInput"></a>

```python
addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `autoconfig_input`<sup>Optional</sup> <a name="autoconfig_input" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfigInput"></a>

```python
autoconfig_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dhcp_input`<sup>Optional</sup> <a name="dhcp_input" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcpInput"></a>

```python
dhcp_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gw_input`<sup>Optional</sup> <a name="gw_input" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gwInput"></a>

```python
gw_input: str
```

- *Type:* str

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `autoconfig`<sup>Required</sup> <a name="autoconfig" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfig"></a>

```python
autoconfig: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcp"></a>

```python
dhcp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gw`<sup>Required</sup> <a name="gw" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gw"></a>

```python
gw: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.internalValue"></a>

```python
internal_value: VnicIpv6
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

---



