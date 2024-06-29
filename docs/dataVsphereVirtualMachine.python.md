# `dataVsphereVirtualMachine` Submodule <a name="`dataVsphereVirtualMachine` Submodule" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereVirtualMachine <a name="DataVsphereVirtualMachine" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine vsphere_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_virtual_machine

dataVsphereVirtualMachine.DataVsphereVirtualMachine(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alternate_guest_name: str = None,
  annotation: str = None,
  boot_delay: typing.Union[int, float] = None,
  boot_retry_delay: typing.Union[int, float] = None,
  boot_retry_enabled: typing.Union[bool, IResolvable] = None,
  cpu_hot_add_enabled: typing.Union[bool, IResolvable] = None,
  cpu_hot_remove_enabled: typing.Union[bool, IResolvable] = None,
  cpu_limit: typing.Union[int, float] = None,
  cpu_performance_counters_enabled: typing.Union[bool, IResolvable] = None,
  cpu_reservation: typing.Union[int, float] = None,
  cpu_share_count: typing.Union[int, float] = None,
  cpu_share_level: str = None,
  datacenter_id: str = None,
  efi_secure_boot_enabled: typing.Union[bool, IResolvable] = None,
  enable_disk_uuid: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  ept_rvi_mode: str = None,
  extra_config: typing.Mapping[str] = None,
  extra_config_reboot_required: typing.Union[bool, IResolvable] = None,
  firmware: str = None,
  folder: str = None,
  guest_id: str = None,
  hardware_version: typing.Union[int, float] = None,
  hv_mode: str = None,
  id: str = None,
  ide_controller_scan_count: typing.Union[int, float] = None,
  latency_sensitivity: str = None,
  memory: typing.Union[int, float] = None,
  memory_hot_add_enabled: typing.Union[bool, IResolvable] = None,
  memory_limit: typing.Union[int, float] = None,
  memory_reservation: typing.Union[int, float] = None,
  memory_reservation_locked_to_max: typing.Union[bool, IResolvable] = None,
  memory_share_count: typing.Union[int, float] = None,
  memory_share_level: str = None,
  moid: str = None,
  name: str = None,
  nested_hv_enabled: typing.Union[bool, IResolvable] = None,
  num_cores_per_socket: typing.Union[int, float] = None,
  num_cpus: typing.Union[int, float] = None,
  replace_trigger: str = None,
  run_tools_scripts_after_power_on: typing.Union[bool, IResolvable] = None,
  run_tools_scripts_after_resume: typing.Union[bool, IResolvable] = None,
  run_tools_scripts_before_guest_reboot: typing.Union[bool, IResolvable] = None,
  run_tools_scripts_before_guest_shutdown: typing.Union[bool, IResolvable] = None,
  run_tools_scripts_before_guest_standby: typing.Union[bool, IResolvable] = None,
  sata_controller_scan_count: typing.Union[int, float] = None,
  scsi_controller_scan_count: typing.Union[int, float] = None,
  storage_policy_id: str = None,
  swap_placement_policy: str = None,
  sync_time_with_host: typing.Union[bool, IResolvable] = None,
  sync_time_with_host_periodically: typing.Union[bool, IResolvable] = None,
  tools_upgrade_policy: str = None,
  uuid: str = None,
  vapp: DataVsphereVirtualMachineVapp = None,
  vbs_enabled: typing.Union[bool, IResolvable] = None,
  vvtd_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.alternateGuestName">alternate_guest_name</a></code> | <code>str</code> | The guest name for the operating system when guest_id is otherGuest or otherGuest64. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.annotation">annotation</a></code> | <code>str</code> | User-provided description of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.bootDelay">boot_delay</a></code> | <code>typing.Union[int, float]</code> | The number of milliseconds to wait before starting the boot sequence. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.bootRetryDelay">boot_retry_delay</a></code> | <code>typing.Union[int, float]</code> | The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.bootRetryEnabled">boot_retry_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuHotAddEnabled">cpu_hot_add_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuHotRemoveEnabled">cpu_hot_remove_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuLimit">cpu_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuPerformanceCountersEnabled">cpu_performance_counters_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable CPU performance counters on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuReservation">cpu_reservation</a></code> | <code>typing.Union[int, float]</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuShareCount">cpu_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to cpu for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuShareLevel">cpu_share_level</a></code> | <code>str</code> | The allocation level for cpu resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | The managed object ID of the datacenter the virtual machine is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.efiSecureBootEnabled">efi_secure_boot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When the boot type set in firmware is efi, this enables EFI secure boot. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.enableDiskUuid">enable_disk_uuid</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable logging on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.eptRviMode">ept_rvi_mode</a></code> | <code>str</code> | The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.extraConfig">extra_config</a></code> | <code>typing.Mapping[str]</code> | Extra configuration data for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.extraConfigRebootRequired">extra_config_reboot_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the virtual machine to be rebooted when a change to `extra_config` occurs. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.firmware">firmware</a></code> | <code>str</code> | The firmware interface to use on the virtual machine. Can be one of bios or efi. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.folder">folder</a></code> | <code>str</code> | The name of the folder the virtual machine is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.guestId">guest_id</a></code> | <code>str</code> | The guest ID for the operating system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.hardwareVersion">hardware_version</a></code> | <code>typing.Union[int, float]</code> | The hardware version for the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.hvMode">hv_mode</a></code> | <code>str</code> | The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#id DataVsphereVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.ideControllerScanCount">ide_controller_scan_count</a></code> | <code>typing.Union[int, float]</code> | The number of IDE controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.latencySensitivity">latency_sensitivity</a></code> | <code>str</code> | Controls the scheduling delay of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memory">memory</a></code> | <code>typing.Union[int, float]</code> | The size of the virtual machine's memory, in MB. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryHotAddEnabled">memory_hot_add_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow memory to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryLimit">memory_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryReservation">memory_reservation</a></code> | <code>typing.Union[int, float]</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryReservationLockedToMax">memory_reservation_locked_to_max</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryShareCount">memory_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to memory for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryShareLevel">memory_share_level</a></code> | <code>str</code> | The allocation level for memory resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.moid">moid</a></code> | <code>str</code> | The machine object ID from VMware vSphere. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.nestedHvEnabled">nested_hv_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.numCoresPerSocket">num_cores_per_socket</a></code> | <code>typing.Union[int, float]</code> | The number of cores to distribute amongst the CPUs in this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.numCpus">num_cpus</a></code> | <code>typing.Union[int, float]</code> | The number of virtual processors to assign to this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.replaceTrigger">replace_trigger</a></code> | <code>str</code> | Triggers replacement of resource whenever it changes. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsAfterPowerOn">run_tools_scripts_after_power_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts after virtual machine power-on when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsAfterResume">run_tools_scripts_after_resume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts after virtual machine resume when when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestReboot">run_tools_scripts_before_guest_reboot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts before guest operating system reboot when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestShutdown">run_tools_scripts_before_guest_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts before guest operating system shutdown when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestStandby">run_tools_scripts_before_guest_standby</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts before guest operating system standby when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.sataControllerScanCount">sata_controller_scan_count</a></code> | <code>typing.Union[int, float]</code> | The number of SATA controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.scsiControllerScanCount">scsi_controller_scan_count</a></code> | <code>typing.Union[int, float]</code> | The number of SCSI controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.storagePolicyId">storage_policy_id</a></code> | <code>str</code> | The ID of the storage policy to assign to the virtual machine home directory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.swapPlacementPolicy">swap_placement_policy</a></code> | <code>str</code> | The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.syncTimeWithHost">sync_time_with_host</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable guest clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.syncTimeWithHostPeriodically">sync_time_with_host_periodically</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable periodic clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.toolsUpgradePolicy">tools_upgrade_policy</a></code> | <code>str</code> | Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.uuid">uuid</a></code> | <code>str</code> | The UUID of the virtual machine. Also exposed as the ID of the resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.vapp">vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a></code> | vapp block. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.vbsEnabled">vbs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to specify if Virtualization-based security is enabled for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.vvtdEnabled">vvtd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alternate_guest_name`<sup>Optional</sup> <a name="alternate_guest_name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.alternateGuestName"></a>

- *Type:* str

The guest name for the operating system when guest_id is otherGuest or otherGuest64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#alternate_guest_name DataVsphereVirtualMachine#alternate_guest_name}

---

##### `annotation`<sup>Optional</sup> <a name="annotation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.annotation"></a>

- *Type:* str

User-provided description of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#annotation DataVsphereVirtualMachine#annotation}

---

##### `boot_delay`<sup>Optional</sup> <a name="boot_delay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.bootDelay"></a>

- *Type:* typing.Union[int, float]

The number of milliseconds to wait before starting the boot sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#boot_delay DataVsphereVirtualMachine#boot_delay}

---

##### `boot_retry_delay`<sup>Optional</sup> <a name="boot_retry_delay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.bootRetryDelay"></a>

- *Type:* typing.Union[int, float]

The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#boot_retry_delay DataVsphereVirtualMachine#boot_retry_delay}

---

##### `boot_retry_enabled`<sup>Optional</sup> <a name="boot_retry_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.bootRetryEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#boot_retry_enabled DataVsphereVirtualMachine#boot_retry_enabled}

---

##### `cpu_hot_add_enabled`<sup>Optional</sup> <a name="cpu_hot_add_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuHotAddEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#cpu_hot_add_enabled DataVsphereVirtualMachine#cpu_hot_add_enabled}

---

##### `cpu_hot_remove_enabled`<sup>Optional</sup> <a name="cpu_hot_remove_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuHotRemoveEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#cpu_hot_remove_enabled DataVsphereVirtualMachine#cpu_hot_remove_enabled}

---

##### `cpu_limit`<sup>Optional</sup> <a name="cpu_limit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuLimit"></a>

- *Type:* typing.Union[int, float]

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#cpu_limit DataVsphereVirtualMachine#cpu_limit}

---

##### `cpu_performance_counters_enabled`<sup>Optional</sup> <a name="cpu_performance_counters_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuPerformanceCountersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable CPU performance counters on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#cpu_performance_counters_enabled DataVsphereVirtualMachine#cpu_performance_counters_enabled}

---

##### `cpu_reservation`<sup>Optional</sup> <a name="cpu_reservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuReservation"></a>

- *Type:* typing.Union[int, float]

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#cpu_reservation DataVsphereVirtualMachine#cpu_reservation}

---

##### `cpu_share_count`<sup>Optional</sup> <a name="cpu_share_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuShareCount"></a>

- *Type:* typing.Union[int, float]

The amount of shares to allocate to cpu for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#cpu_share_count DataVsphereVirtualMachine#cpu_share_count}

---

##### `cpu_share_level`<sup>Optional</sup> <a name="cpu_share_level" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuShareLevel"></a>

- *Type:* str

The allocation level for cpu resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#cpu_share_level DataVsphereVirtualMachine#cpu_share_level}

---

##### `datacenter_id`<sup>Optional</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.datacenterId"></a>

- *Type:* str

The managed object ID of the datacenter the virtual machine is in.

This is not required when using ESXi directly, or if there is only one datacenter in your infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#datacenter_id DataVsphereVirtualMachine#datacenter_id}

---

##### `efi_secure_boot_enabled`<sup>Optional</sup> <a name="efi_secure_boot_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.efiSecureBootEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When the boot type set in firmware is efi, this enables EFI secure boot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#efi_secure_boot_enabled DataVsphereVirtualMachine#efi_secure_boot_enabled}

---

##### `enable_disk_uuid`<sup>Optional</sup> <a name="enable_disk_uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.enableDiskUuid"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#enable_disk_uuid DataVsphereVirtualMachine#enable_disk_uuid}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.enableLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable logging on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#enable_logging DataVsphereVirtualMachine#enable_logging}

---

##### `ept_rvi_mode`<sup>Optional</sup> <a name="ept_rvi_mode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.eptRviMode"></a>

- *Type:* str

The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#ept_rvi_mode DataVsphereVirtualMachine#ept_rvi_mode}

---

##### `extra_config`<sup>Optional</sup> <a name="extra_config" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.extraConfig"></a>

- *Type:* typing.Mapping[str]

Extra configuration data for this virtual machine.

Can be used to supply advanced parameters not normally in configuration, such as instance metadata, or configuration data for OVF images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#extra_config DataVsphereVirtualMachine#extra_config}

---

##### `extra_config_reboot_required`<sup>Optional</sup> <a name="extra_config_reboot_required" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.extraConfigRebootRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the virtual machine to be rebooted when a change to `extra_config` occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#extra_config_reboot_required DataVsphereVirtualMachine#extra_config_reboot_required}

---

##### `firmware`<sup>Optional</sup> <a name="firmware" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.firmware"></a>

- *Type:* str

The firmware interface to use on the virtual machine. Can be one of bios or efi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#firmware DataVsphereVirtualMachine#firmware}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.folder"></a>

- *Type:* str

The name of the folder the virtual machine is in.

Allows distinguishing virtual machines with the same name in different folder paths

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#folder DataVsphereVirtualMachine#folder}

---

##### `guest_id`<sup>Optional</sup> <a name="guest_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.guestId"></a>

- *Type:* str

The guest ID for the operating system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#guest_id DataVsphereVirtualMachine#guest_id}

---

##### `hardware_version`<sup>Optional</sup> <a name="hardware_version" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.hardwareVersion"></a>

- *Type:* typing.Union[int, float]

The hardware version for the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#hardware_version DataVsphereVirtualMachine#hardware_version}

---

##### `hv_mode`<sup>Optional</sup> <a name="hv_mode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.hvMode"></a>

- *Type:* str

The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#hv_mode DataVsphereVirtualMachine#hv_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#id DataVsphereVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ide_controller_scan_count`<sup>Optional</sup> <a name="ide_controller_scan_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.ideControllerScanCount"></a>

- *Type:* typing.Union[int, float]

The number of IDE controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#ide_controller_scan_count DataVsphereVirtualMachine#ide_controller_scan_count}

---

##### `latency_sensitivity`<sup>Optional</sup> <a name="latency_sensitivity" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.latencySensitivity"></a>

- *Type:* str

Controls the scheduling delay of the virtual machine.

Use a higher sensitivity for applications that require lower latency, such as VOIP, media player applications, or applications that require frequent access to mouse or keyboard devices. Can be one of low, normal, medium, or high.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#latency_sensitivity DataVsphereVirtualMachine#latency_sensitivity}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memory"></a>

- *Type:* typing.Union[int, float]

The size of the virtual machine's memory, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#memory DataVsphereVirtualMachine#memory}

---

##### `memory_hot_add_enabled`<sup>Optional</sup> <a name="memory_hot_add_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryHotAddEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow memory to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#memory_hot_add_enabled DataVsphereVirtualMachine#memory_hot_add_enabled}

---

##### `memory_limit`<sup>Optional</sup> <a name="memory_limit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryLimit"></a>

- *Type:* typing.Union[int, float]

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#memory_limit DataVsphereVirtualMachine#memory_limit}

---

##### `memory_reservation`<sup>Optional</sup> <a name="memory_reservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryReservation"></a>

- *Type:* typing.Union[int, float]

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#memory_reservation DataVsphereVirtualMachine#memory_reservation}

---

##### `memory_reservation_locked_to_max`<sup>Optional</sup> <a name="memory_reservation_locked_to_max" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryReservationLockedToMax"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#memory_reservation_locked_to_max DataVsphereVirtualMachine#memory_reservation_locked_to_max}

---

##### `memory_share_count`<sup>Optional</sup> <a name="memory_share_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryShareCount"></a>

- *Type:* typing.Union[int, float]

The amount of shares to allocate to memory for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#memory_share_count DataVsphereVirtualMachine#memory_share_count}

---

##### `memory_share_level`<sup>Optional</sup> <a name="memory_share_level" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryShareLevel"></a>

- *Type:* str

The allocation level for memory resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#memory_share_level DataVsphereVirtualMachine#memory_share_level}

---

##### `moid`<sup>Optional</sup> <a name="moid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.moid"></a>

- *Type:* str

The machine object ID from VMware vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#moid DataVsphereVirtualMachine#moid}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.name"></a>

- *Type:* str

The name of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#name DataVsphereVirtualMachine#name}

---

##### `nested_hv_enabled`<sup>Optional</sup> <a name="nested_hv_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.nestedHvEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#nested_hv_enabled DataVsphereVirtualMachine#nested_hv_enabled}

---

##### `num_cores_per_socket`<sup>Optional</sup> <a name="num_cores_per_socket" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.numCoresPerSocket"></a>

- *Type:* typing.Union[int, float]

The number of cores to distribute amongst the CPUs in this virtual machine.

If specified, the value supplied to num_cpus must be evenly divisible by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#num_cores_per_socket DataVsphereVirtualMachine#num_cores_per_socket}

---

##### `num_cpus`<sup>Optional</sup> <a name="num_cpus" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.numCpus"></a>

- *Type:* typing.Union[int, float]

The number of virtual processors to assign to this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#num_cpus DataVsphereVirtualMachine#num_cpus}

---

##### `replace_trigger`<sup>Optional</sup> <a name="replace_trigger" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.replaceTrigger"></a>

- *Type:* str

Triggers replacement of resource whenever it changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#replace_trigger DataVsphereVirtualMachine#replace_trigger}

---

##### `run_tools_scripts_after_power_on`<sup>Optional</sup> <a name="run_tools_scripts_after_power_on" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsAfterPowerOn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts after virtual machine power-on when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#run_tools_scripts_after_power_on DataVsphereVirtualMachine#run_tools_scripts_after_power_on}

---

##### `run_tools_scripts_after_resume`<sup>Optional</sup> <a name="run_tools_scripts_after_resume" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsAfterResume"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts after virtual machine resume when when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#run_tools_scripts_after_resume DataVsphereVirtualMachine#run_tools_scripts_after_resume}

---

##### `run_tools_scripts_before_guest_reboot`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_reboot" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestReboot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts before guest operating system reboot when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_reboot DataVsphereVirtualMachine#run_tools_scripts_before_guest_reboot}

---

##### `run_tools_scripts_before_guest_shutdown`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_shutdown" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestShutdown"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts before guest operating system shutdown when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_shutdown DataVsphereVirtualMachine#run_tools_scripts_before_guest_shutdown}

---

##### `run_tools_scripts_before_guest_standby`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_standby" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestStandby"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts before guest operating system standby when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_standby DataVsphereVirtualMachine#run_tools_scripts_before_guest_standby}

---

##### `sata_controller_scan_count`<sup>Optional</sup> <a name="sata_controller_scan_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.sataControllerScanCount"></a>

- *Type:* typing.Union[int, float]

The number of SATA controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#sata_controller_scan_count DataVsphereVirtualMachine#sata_controller_scan_count}

---

##### `scsi_controller_scan_count`<sup>Optional</sup> <a name="scsi_controller_scan_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.scsiControllerScanCount"></a>

- *Type:* typing.Union[int, float]

The number of SCSI controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#scsi_controller_scan_count DataVsphereVirtualMachine#scsi_controller_scan_count}

---

##### `storage_policy_id`<sup>Optional</sup> <a name="storage_policy_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.storagePolicyId"></a>

- *Type:* str

The ID of the storage policy to assign to the virtual machine home directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#storage_policy_id DataVsphereVirtualMachine#storage_policy_id}

---

##### `swap_placement_policy`<sup>Optional</sup> <a name="swap_placement_policy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.swapPlacementPolicy"></a>

- *Type:* str

The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#swap_placement_policy DataVsphereVirtualMachine#swap_placement_policy}

---

##### `sync_time_with_host`<sup>Optional</sup> <a name="sync_time_with_host" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.syncTimeWithHost"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable guest clock synchronization with the host.

On vSphere 7.0 U1 and above, with only this setting the clock is synchronized on startup and resume. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#sync_time_with_host DataVsphereVirtualMachine#sync_time_with_host}

---

##### `sync_time_with_host_periodically`<sup>Optional</sup> <a name="sync_time_with_host_periodically" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.syncTimeWithHostPeriodically"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable periodic clock synchronization with the host.

Supported only on vSphere 7.0 U1 and above. On prior versions setting `sync_time_with_host` is enough for periodic synchronization. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#sync_time_with_host_periodically DataVsphereVirtualMachine#sync_time_with_host_periodically}

---

##### `tools_upgrade_policy`<sup>Optional</sup> <a name="tools_upgrade_policy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.toolsUpgradePolicy"></a>

- *Type:* str

Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#tools_upgrade_policy DataVsphereVirtualMachine#tools_upgrade_policy}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.uuid"></a>

- *Type:* str

The UUID of the virtual machine. Also exposed as the ID of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#uuid DataVsphereVirtualMachine#uuid}

---

##### `vapp`<sup>Optional</sup> <a name="vapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.vapp"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

vapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#vapp DataVsphereVirtualMachine#vapp}

---

##### `vbs_enabled`<sup>Optional</sup> <a name="vbs_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.vbsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to specify if Virtualization-based security is enabled for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#vbs_enabled DataVsphereVirtualMachine#vbs_enabled}

---

##### `vvtd_enabled`<sup>Optional</sup> <a name="vvtd_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.vvtdEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#vvtd_enabled DataVsphereVirtualMachine#vvtd_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.putVapp">put_vapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAlternateGuestName">reset_alternate_guest_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAnnotation">reset_annotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootDelay">reset_boot_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryDelay">reset_boot_retry_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryEnabled">reset_boot_retry_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotAddEnabled">reset_cpu_hot_add_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotRemoveEnabled">reset_cpu_hot_remove_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuLimit">reset_cpu_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuPerformanceCountersEnabled">reset_cpu_performance_counters_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuReservation">reset_cpu_reservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareCount">reset_cpu_share_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareLevel">reset_cpu_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetDatacenterId">reset_datacenter_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEfiSecureBootEnabled">reset_efi_secure_boot_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableDiskUuid">reset_enable_disk_uuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableLogging">reset_enable_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEptRviMode">reset_ept_rvi_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfig">reset_extra_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfigRebootRequired">reset_extra_config_reboot_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetFirmware">reset_firmware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetFolder">reset_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetGuestId">reset_guest_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHardwareVersion">reset_hardware_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHvMode">reset_hv_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetIdeControllerScanCount">reset_ide_controller_scan_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetLatencySensitivity">reset_latency_sensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemory">reset_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryHotAddEnabled">reset_memory_hot_add_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryLimit">reset_memory_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryReservation">reset_memory_reservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryReservationLockedToMax">reset_memory_reservation_locked_to_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareCount">reset_memory_share_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareLevel">reset_memory_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMoid">reset_moid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNestedHvEnabled">reset_nested_hv_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCoresPerSocket">reset_num_cores_per_socket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCpus">reset_num_cpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetReplaceTrigger">reset_replace_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterPowerOn">reset_run_tools_scripts_after_power_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterResume">reset_run_tools_scripts_after_resume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestReboot">reset_run_tools_scripts_before_guest_reboot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestShutdown">reset_run_tools_scripts_before_guest_shutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestStandby">reset_run_tools_scripts_before_guest_standby</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSataControllerScanCount">reset_sata_controller_scan_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetScsiControllerScanCount">reset_scsi_controller_scan_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetStoragePolicyId">reset_storage_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSwapPlacementPolicy">reset_swap_placement_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHost">reset_sync_time_with_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHostPeriodically">reset_sync_time_with_host_periodically</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetToolsUpgradePolicy">reset_tools_upgrade_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetUuid">reset_uuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVapp">reset_vapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVbsEnabled">reset_vbs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVvtdEnabled">reset_vvtd_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_vapp` <a name="put_vapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.putVapp"></a>

```python
def put_vapp(
  properties: typing.Mapping[str] = None
) -> None
```

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.putVapp.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A map of customizable vApp properties and their values.

Allows customization of VMs cloned from OVF templates which have customizable vApp properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#properties DataVsphereVirtualMachine#properties}

---

##### `reset_alternate_guest_name` <a name="reset_alternate_guest_name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAlternateGuestName"></a>

```python
def reset_alternate_guest_name() -> None
```

##### `reset_annotation` <a name="reset_annotation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAnnotation"></a>

```python
def reset_annotation() -> None
```

##### `reset_boot_delay` <a name="reset_boot_delay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootDelay"></a>

```python
def reset_boot_delay() -> None
```

##### `reset_boot_retry_delay` <a name="reset_boot_retry_delay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryDelay"></a>

```python
def reset_boot_retry_delay() -> None
```

##### `reset_boot_retry_enabled` <a name="reset_boot_retry_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryEnabled"></a>

```python
def reset_boot_retry_enabled() -> None
```

##### `reset_cpu_hot_add_enabled` <a name="reset_cpu_hot_add_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotAddEnabled"></a>

```python
def reset_cpu_hot_add_enabled() -> None
```

##### `reset_cpu_hot_remove_enabled` <a name="reset_cpu_hot_remove_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotRemoveEnabled"></a>

```python
def reset_cpu_hot_remove_enabled() -> None
```

##### `reset_cpu_limit` <a name="reset_cpu_limit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuLimit"></a>

```python
def reset_cpu_limit() -> None
```

##### `reset_cpu_performance_counters_enabled` <a name="reset_cpu_performance_counters_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuPerformanceCountersEnabled"></a>

```python
def reset_cpu_performance_counters_enabled() -> None
```

##### `reset_cpu_reservation` <a name="reset_cpu_reservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuReservation"></a>

```python
def reset_cpu_reservation() -> None
```

##### `reset_cpu_share_count` <a name="reset_cpu_share_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareCount"></a>

```python
def reset_cpu_share_count() -> None
```

##### `reset_cpu_share_level` <a name="reset_cpu_share_level" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareLevel"></a>

```python
def reset_cpu_share_level() -> None
```

##### `reset_datacenter_id` <a name="reset_datacenter_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetDatacenterId"></a>

```python
def reset_datacenter_id() -> None
```

##### `reset_efi_secure_boot_enabled` <a name="reset_efi_secure_boot_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEfiSecureBootEnabled"></a>

```python
def reset_efi_secure_boot_enabled() -> None
```

##### `reset_enable_disk_uuid` <a name="reset_enable_disk_uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableDiskUuid"></a>

```python
def reset_enable_disk_uuid() -> None
```

##### `reset_enable_logging` <a name="reset_enable_logging" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableLogging"></a>

```python
def reset_enable_logging() -> None
```

##### `reset_ept_rvi_mode` <a name="reset_ept_rvi_mode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEptRviMode"></a>

```python
def reset_ept_rvi_mode() -> None
```

##### `reset_extra_config` <a name="reset_extra_config" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfig"></a>

```python
def reset_extra_config() -> None
```

##### `reset_extra_config_reboot_required` <a name="reset_extra_config_reboot_required" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfigRebootRequired"></a>

```python
def reset_extra_config_reboot_required() -> None
```

##### `reset_firmware` <a name="reset_firmware" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetFirmware"></a>

```python
def reset_firmware() -> None
```

##### `reset_folder` <a name="reset_folder" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetFolder"></a>

```python
def reset_folder() -> None
```

##### `reset_guest_id` <a name="reset_guest_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetGuestId"></a>

```python
def reset_guest_id() -> None
```

##### `reset_hardware_version` <a name="reset_hardware_version" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHardwareVersion"></a>

```python
def reset_hardware_version() -> None
```

##### `reset_hv_mode` <a name="reset_hv_mode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHvMode"></a>

```python
def reset_hv_mode() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ide_controller_scan_count` <a name="reset_ide_controller_scan_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetIdeControllerScanCount"></a>

```python
def reset_ide_controller_scan_count() -> None
```

##### `reset_latency_sensitivity` <a name="reset_latency_sensitivity" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetLatencySensitivity"></a>

```python
def reset_latency_sensitivity() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemory"></a>

```python
def reset_memory() -> None
```

##### `reset_memory_hot_add_enabled` <a name="reset_memory_hot_add_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryHotAddEnabled"></a>

```python
def reset_memory_hot_add_enabled() -> None
```

##### `reset_memory_limit` <a name="reset_memory_limit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryLimit"></a>

```python
def reset_memory_limit() -> None
```

##### `reset_memory_reservation` <a name="reset_memory_reservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryReservation"></a>

```python
def reset_memory_reservation() -> None
```

##### `reset_memory_reservation_locked_to_max` <a name="reset_memory_reservation_locked_to_max" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryReservationLockedToMax"></a>

```python
def reset_memory_reservation_locked_to_max() -> None
```

##### `reset_memory_share_count` <a name="reset_memory_share_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareCount"></a>

```python
def reset_memory_share_count() -> None
```

##### `reset_memory_share_level` <a name="reset_memory_share_level" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareLevel"></a>

```python
def reset_memory_share_level() -> None
```

##### `reset_moid` <a name="reset_moid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMoid"></a>

```python
def reset_moid() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_nested_hv_enabled` <a name="reset_nested_hv_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNestedHvEnabled"></a>

```python
def reset_nested_hv_enabled() -> None
```

##### `reset_num_cores_per_socket` <a name="reset_num_cores_per_socket" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCoresPerSocket"></a>

```python
def reset_num_cores_per_socket() -> None
```

##### `reset_num_cpus` <a name="reset_num_cpus" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCpus"></a>

```python
def reset_num_cpus() -> None
```

##### `reset_replace_trigger` <a name="reset_replace_trigger" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetReplaceTrigger"></a>

```python
def reset_replace_trigger() -> None
```

##### `reset_run_tools_scripts_after_power_on` <a name="reset_run_tools_scripts_after_power_on" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterPowerOn"></a>

```python
def reset_run_tools_scripts_after_power_on() -> None
```

##### `reset_run_tools_scripts_after_resume` <a name="reset_run_tools_scripts_after_resume" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterResume"></a>

```python
def reset_run_tools_scripts_after_resume() -> None
```

##### `reset_run_tools_scripts_before_guest_reboot` <a name="reset_run_tools_scripts_before_guest_reboot" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestReboot"></a>

```python
def reset_run_tools_scripts_before_guest_reboot() -> None
```

##### `reset_run_tools_scripts_before_guest_shutdown` <a name="reset_run_tools_scripts_before_guest_shutdown" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestShutdown"></a>

```python
def reset_run_tools_scripts_before_guest_shutdown() -> None
```

##### `reset_run_tools_scripts_before_guest_standby` <a name="reset_run_tools_scripts_before_guest_standby" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestStandby"></a>

```python
def reset_run_tools_scripts_before_guest_standby() -> None
```

##### `reset_sata_controller_scan_count` <a name="reset_sata_controller_scan_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSataControllerScanCount"></a>

```python
def reset_sata_controller_scan_count() -> None
```

##### `reset_scsi_controller_scan_count` <a name="reset_scsi_controller_scan_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetScsiControllerScanCount"></a>

```python
def reset_scsi_controller_scan_count() -> None
```

##### `reset_storage_policy_id` <a name="reset_storage_policy_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetStoragePolicyId"></a>

```python
def reset_storage_policy_id() -> None
```

##### `reset_swap_placement_policy` <a name="reset_swap_placement_policy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSwapPlacementPolicy"></a>

```python
def reset_swap_placement_policy() -> None
```

##### `reset_sync_time_with_host` <a name="reset_sync_time_with_host" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHost"></a>

```python
def reset_sync_time_with_host() -> None
```

##### `reset_sync_time_with_host_periodically` <a name="reset_sync_time_with_host_periodically" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHostPeriodically"></a>

```python
def reset_sync_time_with_host_periodically() -> None
```

##### `reset_tools_upgrade_policy` <a name="reset_tools_upgrade_policy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetToolsUpgradePolicy"></a>

```python
def reset_tools_upgrade_policy() -> None
```

##### `reset_uuid` <a name="reset_uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetUuid"></a>

```python
def reset_uuid() -> None
```

##### `reset_vapp` <a name="reset_vapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVapp"></a>

```python
def reset_vapp() -> None
```

##### `reset_vbs_enabled` <a name="reset_vbs_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVbsEnabled"></a>

```python
def reset_vbs_enabled() -> None
```

##### `reset_vvtd_enabled` <a name="reset_vvtd_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVvtdEnabled"></a>

```python
def reset_vvtd_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVsphereVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_virtual_machine

dataVsphereVirtualMachine.DataVsphereVirtualMachine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_virtual_machine

dataVsphereVirtualMachine.DataVsphereVirtualMachine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_virtual_machine

dataVsphereVirtualMachine.DataVsphereVirtualMachine.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_virtual_machine

dataVsphereVirtualMachine.DataVsphereVirtualMachine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVsphereVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVsphereVirtualMachine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVsphereVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.changeVersion">change_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.defaultIpAddress">default_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.disks">disks</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList">DataVsphereVirtualMachineDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIpAddresses">guest_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.instanceUuid">instance_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaces">network_interfaces</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList">DataVsphereVirtualMachineNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaceTypes">network_interface_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiBusSharing">scsi_bus_sharing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiType">scsi_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vapp">vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference">DataVsphereVirtualMachineVappOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappTransport">vapp_transport</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestNameInput">alternate_guest_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotationInput">annotation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelayInput">boot_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelayInput">boot_retry_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabledInput">boot_retry_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabledInput">cpu_hot_add_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabledInput">cpu_hot_remove_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimitInput">cpu_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabledInput">cpu_performance_counters_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservationInput">cpu_reservation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCountInput">cpu_share_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevelInput">cpu_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabledInput">efi_secure_boot_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuidInput">enable_disk_uuid_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLoggingInput">enable_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviModeInput">ept_rvi_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigInput">extra_config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequiredInput">extra_config_reboot_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmwareInput">firmware_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIdInput">guest_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersionInput">hardware_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvModeInput">hv_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCountInput">ide_controller_scan_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivityInput">latency_sensitivity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabledInput">memory_hot_add_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryInput">memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimitInput">memory_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationInput">memory_reservation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationLockedToMaxInput">memory_reservation_locked_to_max_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCountInput">memory_share_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevelInput">memory_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moidInput">moid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabledInput">nested_hv_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocketInput">num_cores_per_socket_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpusInput">num_cpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTriggerInput">replace_trigger_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOnInput">run_tools_scripts_after_power_on_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResumeInput">run_tools_scripts_after_resume_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestRebootInput">run_tools_scripts_before_guest_reboot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput">run_tools_scripts_before_guest_shutdown_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput">run_tools_scripts_before_guest_standby_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCountInput">sata_controller_scan_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCountInput">scsi_controller_scan_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyIdInput">storage_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicyInput">swap_placement_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostInput">sync_time_with_host_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodicallyInput">sync_time_with_host_periodically_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicyInput">tools_upgrade_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappInput">vapp_input</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabledInput">vbs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabledInput">vvtd_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestName">alternate_guest_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotation">annotation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelay">boot_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelay">boot_retry_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabled">boot_retry_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabled">cpu_hot_add_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabled">cpu_hot_remove_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimit">cpu_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabled">cpu_performance_counters_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservation">cpu_reservation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCount">cpu_share_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevel">cpu_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabled">efi_secure_boot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuid">enable_disk_uuid</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviMode">ept_rvi_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfig">extra_config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequired">extra_config_reboot_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmware">firmware</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestId">guest_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersion">hardware_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvMode">hv_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCount">ide_controller_scan_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivity">latency_sensitivity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabled">memory_hot_add_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimit">memory_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservation">memory_reservation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationLockedToMax">memory_reservation_locked_to_max</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCount">memory_share_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevel">memory_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moid">moid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabled">nested_hv_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocket">num_cores_per_socket</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpus">num_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTrigger">replace_trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOn">run_tools_scripts_after_power_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResume">run_tools_scripts_after_resume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestReboot">run_tools_scripts_before_guest_reboot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdown">run_tools_scripts_before_guest_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandby">run_tools_scripts_before_guest_standby</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCount">sata_controller_scan_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCount">scsi_controller_scan_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyId">storage_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicy">swap_placement_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHost">sync_time_with_host</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodically">sync_time_with_host_periodically</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicy">tools_upgrade_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabled">vbs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabled">vvtd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `change_version`<sup>Required</sup> <a name="change_version" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.changeVersion"></a>

```python
change_version: str
```

- *Type:* str

---

##### `default_ip_address`<sup>Required</sup> <a name="default_ip_address" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.defaultIpAddress"></a>

```python
default_ip_address: str
```

- *Type:* str

---

##### `disks`<sup>Required</sup> <a name="disks" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.disks"></a>

```python
disks: DataVsphereVirtualMachineDisksList
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList">DataVsphereVirtualMachineDisksList</a>

---

##### `guest_ip_addresses`<sup>Required</sup> <a name="guest_ip_addresses" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIpAddresses"></a>

```python
guest_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_uuid`<sup>Required</sup> <a name="instance_uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.instanceUuid"></a>

```python
instance_uuid: str
```

- *Type:* str

---

##### `network_interfaces`<sup>Required</sup> <a name="network_interfaces" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaces"></a>

```python
network_interfaces: DataVsphereVirtualMachineNetworkInterfacesList
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList">DataVsphereVirtualMachineNetworkInterfacesList</a>

---

##### `network_interface_types`<sup>Required</sup> <a name="network_interface_types" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaceTypes"></a>

```python
network_interface_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scsi_bus_sharing`<sup>Required</sup> <a name="scsi_bus_sharing" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiBusSharing"></a>

```python
scsi_bus_sharing: str
```

- *Type:* str

---

##### `scsi_type`<sup>Required</sup> <a name="scsi_type" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiType"></a>

```python
scsi_type: str
```

- *Type:* str

---

##### `vapp`<sup>Required</sup> <a name="vapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vapp"></a>

```python
vapp: DataVsphereVirtualMachineVappOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference">DataVsphereVirtualMachineVappOutputReference</a>

---

##### `vapp_transport`<sup>Required</sup> <a name="vapp_transport" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappTransport"></a>

```python
vapp_transport: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alternate_guest_name_input`<sup>Optional</sup> <a name="alternate_guest_name_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestNameInput"></a>

```python
alternate_guest_name_input: str
```

- *Type:* str

---

##### `annotation_input`<sup>Optional</sup> <a name="annotation_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotationInput"></a>

```python
annotation_input: str
```

- *Type:* str

---

##### `boot_delay_input`<sup>Optional</sup> <a name="boot_delay_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelayInput"></a>

```python
boot_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_retry_delay_input`<sup>Optional</sup> <a name="boot_retry_delay_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelayInput"></a>

```python
boot_retry_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_retry_enabled_input`<sup>Optional</sup> <a name="boot_retry_enabled_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabledInput"></a>

```python
boot_retry_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_hot_add_enabled_input`<sup>Optional</sup> <a name="cpu_hot_add_enabled_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabledInput"></a>

```python
cpu_hot_add_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_hot_remove_enabled_input`<sup>Optional</sup> <a name="cpu_hot_remove_enabled_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabledInput"></a>

```python
cpu_hot_remove_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_limit_input`<sup>Optional</sup> <a name="cpu_limit_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimitInput"></a>

```python
cpu_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_performance_counters_enabled_input`<sup>Optional</sup> <a name="cpu_performance_counters_enabled_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabledInput"></a>

```python
cpu_performance_counters_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_reservation_input`<sup>Optional</sup> <a name="cpu_reservation_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservationInput"></a>

```python
cpu_reservation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_share_count_input`<sup>Optional</sup> <a name="cpu_share_count_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCountInput"></a>

```python
cpu_share_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_share_level_input`<sup>Optional</sup> <a name="cpu_share_level_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevelInput"></a>

```python
cpu_share_level_input: str
```

- *Type:* str

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `efi_secure_boot_enabled_input`<sup>Optional</sup> <a name="efi_secure_boot_enabled_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabledInput"></a>

```python
efi_secure_boot_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_disk_uuid_input`<sup>Optional</sup> <a name="enable_disk_uuid_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuidInput"></a>

```python
enable_disk_uuid_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging_input`<sup>Optional</sup> <a name="enable_logging_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLoggingInput"></a>

```python
enable_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ept_rvi_mode_input`<sup>Optional</sup> <a name="ept_rvi_mode_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviModeInput"></a>

```python
ept_rvi_mode_input: str
```

- *Type:* str

---

##### `extra_config_input`<sup>Optional</sup> <a name="extra_config_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigInput"></a>

```python
extra_config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `extra_config_reboot_required_input`<sup>Optional</sup> <a name="extra_config_reboot_required_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequiredInput"></a>

```python
extra_config_reboot_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firmware_input`<sup>Optional</sup> <a name="firmware_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmwareInput"></a>

```python
firmware_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `guest_id_input`<sup>Optional</sup> <a name="guest_id_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIdInput"></a>

```python
guest_id_input: str
```

- *Type:* str

---

##### `hardware_version_input`<sup>Optional</sup> <a name="hardware_version_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersionInput"></a>

```python
hardware_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hv_mode_input`<sup>Optional</sup> <a name="hv_mode_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvModeInput"></a>

```python
hv_mode_input: str
```

- *Type:* str

---

##### `ide_controller_scan_count_input`<sup>Optional</sup> <a name="ide_controller_scan_count_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCountInput"></a>

```python
ide_controller_scan_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `latency_sensitivity_input`<sup>Optional</sup> <a name="latency_sensitivity_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivityInput"></a>

```python
latency_sensitivity_input: str
```

- *Type:* str

---

##### `memory_hot_add_enabled_input`<sup>Optional</sup> <a name="memory_hot_add_enabled_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabledInput"></a>

```python
memory_hot_add_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryInput"></a>

```python
memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_limit_input`<sup>Optional</sup> <a name="memory_limit_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimitInput"></a>

```python
memory_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_reservation_input`<sup>Optional</sup> <a name="memory_reservation_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationInput"></a>

```python
memory_reservation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_reservation_locked_to_max_input`<sup>Optional</sup> <a name="memory_reservation_locked_to_max_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationLockedToMaxInput"></a>

```python
memory_reservation_locked_to_max_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `memory_share_count_input`<sup>Optional</sup> <a name="memory_share_count_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCountInput"></a>

```python
memory_share_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_share_level_input`<sup>Optional</sup> <a name="memory_share_level_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevelInput"></a>

```python
memory_share_level_input: str
```

- *Type:* str

---

##### `moid_input`<sup>Optional</sup> <a name="moid_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moidInput"></a>

```python
moid_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nested_hv_enabled_input`<sup>Optional</sup> <a name="nested_hv_enabled_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabledInput"></a>

```python
nested_hv_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `num_cores_per_socket_input`<sup>Optional</sup> <a name="num_cores_per_socket_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocketInput"></a>

```python
num_cores_per_socket_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_cpus_input`<sup>Optional</sup> <a name="num_cpus_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpusInput"></a>

```python
num_cpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replace_trigger_input`<sup>Optional</sup> <a name="replace_trigger_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTriggerInput"></a>

```python
replace_trigger_input: str
```

- *Type:* str

---

##### `run_tools_scripts_after_power_on_input`<sup>Optional</sup> <a name="run_tools_scripts_after_power_on_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOnInput"></a>

```python
run_tools_scripts_after_power_on_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_tools_scripts_after_resume_input`<sup>Optional</sup> <a name="run_tools_scripts_after_resume_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResumeInput"></a>

```python
run_tools_scripts_after_resume_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_tools_scripts_before_guest_reboot_input`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_reboot_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestRebootInput"></a>

```python
run_tools_scripts_before_guest_reboot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_tools_scripts_before_guest_shutdown_input`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_shutdown_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput"></a>

```python
run_tools_scripts_before_guest_shutdown_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_tools_scripts_before_guest_standby_input`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_standby_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput"></a>

```python
run_tools_scripts_before_guest_standby_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sata_controller_scan_count_input`<sup>Optional</sup> <a name="sata_controller_scan_count_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCountInput"></a>

```python
sata_controller_scan_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scsi_controller_scan_count_input`<sup>Optional</sup> <a name="scsi_controller_scan_count_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCountInput"></a>

```python
scsi_controller_scan_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_policy_id_input`<sup>Optional</sup> <a name="storage_policy_id_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyIdInput"></a>

```python
storage_policy_id_input: str
```

- *Type:* str

---

##### `swap_placement_policy_input`<sup>Optional</sup> <a name="swap_placement_policy_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicyInput"></a>

```python
swap_placement_policy_input: str
```

- *Type:* str

---

##### `sync_time_with_host_input`<sup>Optional</sup> <a name="sync_time_with_host_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostInput"></a>

```python
sync_time_with_host_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sync_time_with_host_periodically_input`<sup>Optional</sup> <a name="sync_time_with_host_periodically_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodicallyInput"></a>

```python
sync_time_with_host_periodically_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tools_upgrade_policy_input`<sup>Optional</sup> <a name="tools_upgrade_policy_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicyInput"></a>

```python
tools_upgrade_policy_input: str
```

- *Type:* str

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `vapp_input`<sup>Optional</sup> <a name="vapp_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappInput"></a>

```python
vapp_input: DataVsphereVirtualMachineVapp
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

---

##### `vbs_enabled_input`<sup>Optional</sup> <a name="vbs_enabled_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabledInput"></a>

```python
vbs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vvtd_enabled_input`<sup>Optional</sup> <a name="vvtd_enabled_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabledInput"></a>

```python
vvtd_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `alternate_guest_name`<sup>Required</sup> <a name="alternate_guest_name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestName"></a>

```python
alternate_guest_name: str
```

- *Type:* str

---

##### `annotation`<sup>Required</sup> <a name="annotation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotation"></a>

```python
annotation: str
```

- *Type:* str

---

##### `boot_delay`<sup>Required</sup> <a name="boot_delay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelay"></a>

```python
boot_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_retry_delay`<sup>Required</sup> <a name="boot_retry_delay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelay"></a>

```python
boot_retry_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_retry_enabled`<sup>Required</sup> <a name="boot_retry_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabled"></a>

```python
boot_retry_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_hot_add_enabled`<sup>Required</sup> <a name="cpu_hot_add_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabled"></a>

```python
cpu_hot_add_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_hot_remove_enabled`<sup>Required</sup> <a name="cpu_hot_remove_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabled"></a>

```python
cpu_hot_remove_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_limit`<sup>Required</sup> <a name="cpu_limit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimit"></a>

```python
cpu_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_performance_counters_enabled`<sup>Required</sup> <a name="cpu_performance_counters_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabled"></a>

```python
cpu_performance_counters_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_reservation`<sup>Required</sup> <a name="cpu_reservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservation"></a>

```python
cpu_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_share_count`<sup>Required</sup> <a name="cpu_share_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCount"></a>

```python
cpu_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_share_level`<sup>Required</sup> <a name="cpu_share_level" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevel"></a>

```python
cpu_share_level: str
```

- *Type:* str

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `efi_secure_boot_enabled`<sup>Required</sup> <a name="efi_secure_boot_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabled"></a>

```python
efi_secure_boot_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_disk_uuid`<sup>Required</sup> <a name="enable_disk_uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuid"></a>

```python
enable_disk_uuid: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ept_rvi_mode`<sup>Required</sup> <a name="ept_rvi_mode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviMode"></a>

```python
ept_rvi_mode: str
```

- *Type:* str

---

##### `extra_config`<sup>Required</sup> <a name="extra_config" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfig"></a>

```python
extra_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `extra_config_reboot_required`<sup>Required</sup> <a name="extra_config_reboot_required" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequired"></a>

```python
extra_config_reboot_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmware"></a>

```python
firmware: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `guest_id`<sup>Required</sup> <a name="guest_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestId"></a>

```python
guest_id: str
```

- *Type:* str

---

##### `hardware_version`<sup>Required</sup> <a name="hardware_version" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersion"></a>

```python
hardware_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hv_mode`<sup>Required</sup> <a name="hv_mode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvMode"></a>

```python
hv_mode: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ide_controller_scan_count`<sup>Required</sup> <a name="ide_controller_scan_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCount"></a>

```python
ide_controller_scan_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `latency_sensitivity`<sup>Required</sup> <a name="latency_sensitivity" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivity"></a>

```python
latency_sensitivity: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_hot_add_enabled`<sup>Required</sup> <a name="memory_hot_add_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabled"></a>

```python
memory_hot_add_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `memory_limit`<sup>Required</sup> <a name="memory_limit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimit"></a>

```python
memory_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_reservation`<sup>Required</sup> <a name="memory_reservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservation"></a>

```python
memory_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_reservation_locked_to_max`<sup>Required</sup> <a name="memory_reservation_locked_to_max" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationLockedToMax"></a>

```python
memory_reservation_locked_to_max: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `memory_share_count`<sup>Required</sup> <a name="memory_share_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCount"></a>

```python
memory_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_share_level`<sup>Required</sup> <a name="memory_share_level" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevel"></a>

```python
memory_share_level: str
```

- *Type:* str

---

##### `moid`<sup>Required</sup> <a name="moid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moid"></a>

```python
moid: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nested_hv_enabled`<sup>Required</sup> <a name="nested_hv_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabled"></a>

```python
nested_hv_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `num_cores_per_socket`<sup>Required</sup> <a name="num_cores_per_socket" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocket"></a>

```python
num_cores_per_socket: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_cpus`<sup>Required</sup> <a name="num_cpus" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpus"></a>

```python
num_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replace_trigger`<sup>Required</sup> <a name="replace_trigger" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTrigger"></a>

```python
replace_trigger: str
```

- *Type:* str

---

##### `run_tools_scripts_after_power_on`<sup>Required</sup> <a name="run_tools_scripts_after_power_on" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOn"></a>

```python
run_tools_scripts_after_power_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_tools_scripts_after_resume`<sup>Required</sup> <a name="run_tools_scripts_after_resume" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResume"></a>

```python
run_tools_scripts_after_resume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_tools_scripts_before_guest_reboot`<sup>Required</sup> <a name="run_tools_scripts_before_guest_reboot" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestReboot"></a>

```python
run_tools_scripts_before_guest_reboot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_tools_scripts_before_guest_shutdown`<sup>Required</sup> <a name="run_tools_scripts_before_guest_shutdown" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdown"></a>

```python
run_tools_scripts_before_guest_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_tools_scripts_before_guest_standby`<sup>Required</sup> <a name="run_tools_scripts_before_guest_standby" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandby"></a>

```python
run_tools_scripts_before_guest_standby: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sata_controller_scan_count`<sup>Required</sup> <a name="sata_controller_scan_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCount"></a>

```python
sata_controller_scan_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scsi_controller_scan_count`<sup>Required</sup> <a name="scsi_controller_scan_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCount"></a>

```python
scsi_controller_scan_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_policy_id`<sup>Required</sup> <a name="storage_policy_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyId"></a>

```python
storage_policy_id: str
```

- *Type:* str

---

##### `swap_placement_policy`<sup>Required</sup> <a name="swap_placement_policy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicy"></a>

```python
swap_placement_policy: str
```

- *Type:* str

---

##### `sync_time_with_host`<sup>Required</sup> <a name="sync_time_with_host" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHost"></a>

```python
sync_time_with_host: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sync_time_with_host_periodically`<sup>Required</sup> <a name="sync_time_with_host_periodically" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodically"></a>

```python
sync_time_with_host_periodically: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tools_upgrade_policy`<sup>Required</sup> <a name="tools_upgrade_policy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicy"></a>

```python
tools_upgrade_policy: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `vbs_enabled`<sup>Required</sup> <a name="vbs_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabled"></a>

```python
vbs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vvtd_enabled`<sup>Required</sup> <a name="vvtd_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabled"></a>

```python
vvtd_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereVirtualMachineConfig <a name="DataVsphereVirtualMachineConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_virtual_machine

dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alternate_guest_name: str = None,
  annotation: str = None,
  boot_delay: typing.Union[int, float] = None,
  boot_retry_delay: typing.Union[int, float] = None,
  boot_retry_enabled: typing.Union[bool, IResolvable] = None,
  cpu_hot_add_enabled: typing.Union[bool, IResolvable] = None,
  cpu_hot_remove_enabled: typing.Union[bool, IResolvable] = None,
  cpu_limit: typing.Union[int, float] = None,
  cpu_performance_counters_enabled: typing.Union[bool, IResolvable] = None,
  cpu_reservation: typing.Union[int, float] = None,
  cpu_share_count: typing.Union[int, float] = None,
  cpu_share_level: str = None,
  datacenter_id: str = None,
  efi_secure_boot_enabled: typing.Union[bool, IResolvable] = None,
  enable_disk_uuid: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  ept_rvi_mode: str = None,
  extra_config: typing.Mapping[str] = None,
  extra_config_reboot_required: typing.Union[bool, IResolvable] = None,
  firmware: str = None,
  folder: str = None,
  guest_id: str = None,
  hardware_version: typing.Union[int, float] = None,
  hv_mode: str = None,
  id: str = None,
  ide_controller_scan_count: typing.Union[int, float] = None,
  latency_sensitivity: str = None,
  memory: typing.Union[int, float] = None,
  memory_hot_add_enabled: typing.Union[bool, IResolvable] = None,
  memory_limit: typing.Union[int, float] = None,
  memory_reservation: typing.Union[int, float] = None,
  memory_reservation_locked_to_max: typing.Union[bool, IResolvable] = None,
  memory_share_count: typing.Union[int, float] = None,
  memory_share_level: str = None,
  moid: str = None,
  name: str = None,
  nested_hv_enabled: typing.Union[bool, IResolvable] = None,
  num_cores_per_socket: typing.Union[int, float] = None,
  num_cpus: typing.Union[int, float] = None,
  replace_trigger: str = None,
  run_tools_scripts_after_power_on: typing.Union[bool, IResolvable] = None,
  run_tools_scripts_after_resume: typing.Union[bool, IResolvable] = None,
  run_tools_scripts_before_guest_reboot: typing.Union[bool, IResolvable] = None,
  run_tools_scripts_before_guest_shutdown: typing.Union[bool, IResolvable] = None,
  run_tools_scripts_before_guest_standby: typing.Union[bool, IResolvable] = None,
  sata_controller_scan_count: typing.Union[int, float] = None,
  scsi_controller_scan_count: typing.Union[int, float] = None,
  storage_policy_id: str = None,
  swap_placement_policy: str = None,
  sync_time_with_host: typing.Union[bool, IResolvable] = None,
  sync_time_with_host_periodically: typing.Union[bool, IResolvable] = None,
  tools_upgrade_policy: str = None,
  uuid: str = None,
  vapp: DataVsphereVirtualMachineVapp = None,
  vbs_enabled: typing.Union[bool, IResolvable] = None,
  vvtd_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.alternateGuestName">alternate_guest_name</a></code> | <code>str</code> | The guest name for the operating system when guest_id is otherGuest or otherGuest64. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.annotation">annotation</a></code> | <code>str</code> | User-provided description of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootDelay">boot_delay</a></code> | <code>typing.Union[int, float]</code> | The number of milliseconds to wait before starting the boot sequence. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryDelay">boot_retry_delay</a></code> | <code>typing.Union[int, float]</code> | The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryEnabled">boot_retry_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotAddEnabled">cpu_hot_add_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotRemoveEnabled">cpu_hot_remove_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuLimit">cpu_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuPerformanceCountersEnabled">cpu_performance_counters_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable CPU performance counters on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuReservation">cpu_reservation</a></code> | <code>typing.Union[int, float]</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareCount">cpu_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to cpu for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareLevel">cpu_share_level</a></code> | <code>str</code> | The allocation level for cpu resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | The managed object ID of the datacenter the virtual machine is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.efiSecureBootEnabled">efi_secure_boot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When the boot type set in firmware is efi, this enables EFI secure boot. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableDiskUuid">enable_disk_uuid</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable logging on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.eptRviMode">ept_rvi_mode</a></code> | <code>str</code> | The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfig">extra_config</a></code> | <code>typing.Mapping[str]</code> | Extra configuration data for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfigRebootRequired">extra_config_reboot_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the virtual machine to be rebooted when a change to `extra_config` occurs. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.firmware">firmware</a></code> | <code>str</code> | The firmware interface to use on the virtual machine. Can be one of bios or efi. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.folder">folder</a></code> | <code>str</code> | The name of the folder the virtual machine is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.guestId">guest_id</a></code> | <code>str</code> | The guest ID for the operating system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hardwareVersion">hardware_version</a></code> | <code>typing.Union[int, float]</code> | The hardware version for the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hvMode">hv_mode</a></code> | <code>str</code> | The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#id DataVsphereVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.ideControllerScanCount">ide_controller_scan_count</a></code> | <code>typing.Union[int, float]</code> | The number of IDE controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.latencySensitivity">latency_sensitivity</a></code> | <code>str</code> | Controls the scheduling delay of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | The size of the virtual machine's memory, in MB. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryHotAddEnabled">memory_hot_add_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow memory to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryLimit">memory_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryReservation">memory_reservation</a></code> | <code>typing.Union[int, float]</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryReservationLockedToMax">memory_reservation_locked_to_max</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareCount">memory_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to memory for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareLevel">memory_share_level</a></code> | <code>str</code> | The allocation level for memory resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.moid">moid</a></code> | <code>str</code> | The machine object ID from VMware vSphere. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.name">name</a></code> | <code>str</code> | The name of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.nestedHvEnabled">nested_hv_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCoresPerSocket">num_cores_per_socket</a></code> | <code>typing.Union[int, float]</code> | The number of cores to distribute amongst the CPUs in this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCpus">num_cpus</a></code> | <code>typing.Union[int, float]</code> | The number of virtual processors to assign to this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.replaceTrigger">replace_trigger</a></code> | <code>str</code> | Triggers replacement of resource whenever it changes. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterPowerOn">run_tools_scripts_after_power_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts after virtual machine power-on when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterResume">run_tools_scripts_after_resume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts after virtual machine resume when when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot">run_tools_scripts_before_guest_reboot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts before guest operating system reboot when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown">run_tools_scripts_before_guest_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts before guest operating system shutdown when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby">run_tools_scripts_before_guest_standby</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts before guest operating system standby when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.sataControllerScanCount">sata_controller_scan_count</a></code> | <code>typing.Union[int, float]</code> | The number of SATA controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.scsiControllerScanCount">scsi_controller_scan_count</a></code> | <code>typing.Union[int, float]</code> | The number of SCSI controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.storagePolicyId">storage_policy_id</a></code> | <code>str</code> | The ID of the storage policy to assign to the virtual machine home directory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.swapPlacementPolicy">swap_placement_policy</a></code> | <code>str</code> | The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHost">sync_time_with_host</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable guest clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHostPeriodically">sync_time_with_host_periodically</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable periodic clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.toolsUpgradePolicy">tools_upgrade_policy</a></code> | <code>str</code> | Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.uuid">uuid</a></code> | <code>str</code> | The UUID of the virtual machine. Also exposed as the ID of the resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vapp">vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a></code> | vapp block. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vbsEnabled">vbs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to specify if Virtualization-based security is enabled for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vvtdEnabled">vvtd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alternate_guest_name`<sup>Optional</sup> <a name="alternate_guest_name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.alternateGuestName"></a>

```python
alternate_guest_name: str
```

- *Type:* str

The guest name for the operating system when guest_id is otherGuest or otherGuest64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#alternate_guest_name DataVsphereVirtualMachine#alternate_guest_name}

---

##### `annotation`<sup>Optional</sup> <a name="annotation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.annotation"></a>

```python
annotation: str
```

- *Type:* str

User-provided description of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#annotation DataVsphereVirtualMachine#annotation}

---

##### `boot_delay`<sup>Optional</sup> <a name="boot_delay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootDelay"></a>

```python
boot_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of milliseconds to wait before starting the boot sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#boot_delay DataVsphereVirtualMachine#boot_delay}

---

##### `boot_retry_delay`<sup>Optional</sup> <a name="boot_retry_delay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryDelay"></a>

```python
boot_retry_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#boot_retry_delay DataVsphereVirtualMachine#boot_retry_delay}

---

##### `boot_retry_enabled`<sup>Optional</sup> <a name="boot_retry_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryEnabled"></a>

```python
boot_retry_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#boot_retry_enabled DataVsphereVirtualMachine#boot_retry_enabled}

---

##### `cpu_hot_add_enabled`<sup>Optional</sup> <a name="cpu_hot_add_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotAddEnabled"></a>

```python
cpu_hot_add_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#cpu_hot_add_enabled DataVsphereVirtualMachine#cpu_hot_add_enabled}

---

##### `cpu_hot_remove_enabled`<sup>Optional</sup> <a name="cpu_hot_remove_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotRemoveEnabled"></a>

```python
cpu_hot_remove_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#cpu_hot_remove_enabled DataVsphereVirtualMachine#cpu_hot_remove_enabled}

---

##### `cpu_limit`<sup>Optional</sup> <a name="cpu_limit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuLimit"></a>

```python
cpu_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#cpu_limit DataVsphereVirtualMachine#cpu_limit}

---

##### `cpu_performance_counters_enabled`<sup>Optional</sup> <a name="cpu_performance_counters_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuPerformanceCountersEnabled"></a>

```python
cpu_performance_counters_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable CPU performance counters on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#cpu_performance_counters_enabled DataVsphereVirtualMachine#cpu_performance_counters_enabled}

---

##### `cpu_reservation`<sup>Optional</sup> <a name="cpu_reservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuReservation"></a>

```python
cpu_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#cpu_reservation DataVsphereVirtualMachine#cpu_reservation}

---

##### `cpu_share_count`<sup>Optional</sup> <a name="cpu_share_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareCount"></a>

```python
cpu_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of shares to allocate to cpu for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#cpu_share_count DataVsphereVirtualMachine#cpu_share_count}

---

##### `cpu_share_level`<sup>Optional</sup> <a name="cpu_share_level" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareLevel"></a>

```python
cpu_share_level: str
```

- *Type:* str

The allocation level for cpu resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#cpu_share_level DataVsphereVirtualMachine#cpu_share_level}

---

##### `datacenter_id`<sup>Optional</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

The managed object ID of the datacenter the virtual machine is in.

This is not required when using ESXi directly, or if there is only one datacenter in your infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#datacenter_id DataVsphereVirtualMachine#datacenter_id}

---

##### `efi_secure_boot_enabled`<sup>Optional</sup> <a name="efi_secure_boot_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.efiSecureBootEnabled"></a>

```python
efi_secure_boot_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When the boot type set in firmware is efi, this enables EFI secure boot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#efi_secure_boot_enabled DataVsphereVirtualMachine#efi_secure_boot_enabled}

---

##### `enable_disk_uuid`<sup>Optional</sup> <a name="enable_disk_uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableDiskUuid"></a>

```python
enable_disk_uuid: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#enable_disk_uuid DataVsphereVirtualMachine#enable_disk_uuid}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable logging on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#enable_logging DataVsphereVirtualMachine#enable_logging}

---

##### `ept_rvi_mode`<sup>Optional</sup> <a name="ept_rvi_mode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.eptRviMode"></a>

```python
ept_rvi_mode: str
```

- *Type:* str

The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#ept_rvi_mode DataVsphereVirtualMachine#ept_rvi_mode}

---

##### `extra_config`<sup>Optional</sup> <a name="extra_config" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfig"></a>

```python
extra_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Extra configuration data for this virtual machine.

Can be used to supply advanced parameters not normally in configuration, such as instance metadata, or configuration data for OVF images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#extra_config DataVsphereVirtualMachine#extra_config}

---

##### `extra_config_reboot_required`<sup>Optional</sup> <a name="extra_config_reboot_required" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfigRebootRequired"></a>

```python
extra_config_reboot_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the virtual machine to be rebooted when a change to `extra_config` occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#extra_config_reboot_required DataVsphereVirtualMachine#extra_config_reboot_required}

---

##### `firmware`<sup>Optional</sup> <a name="firmware" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.firmware"></a>

```python
firmware: str
```

- *Type:* str

The firmware interface to use on the virtual machine. Can be one of bios or efi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#firmware DataVsphereVirtualMachine#firmware}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

The name of the folder the virtual machine is in.

Allows distinguishing virtual machines with the same name in different folder paths

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#folder DataVsphereVirtualMachine#folder}

---

##### `guest_id`<sup>Optional</sup> <a name="guest_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.guestId"></a>

```python
guest_id: str
```

- *Type:* str

The guest ID for the operating system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#guest_id DataVsphereVirtualMachine#guest_id}

---

##### `hardware_version`<sup>Optional</sup> <a name="hardware_version" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hardwareVersion"></a>

```python
hardware_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The hardware version for the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#hardware_version DataVsphereVirtualMachine#hardware_version}

---

##### `hv_mode`<sup>Optional</sup> <a name="hv_mode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hvMode"></a>

```python
hv_mode: str
```

- *Type:* str

The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#hv_mode DataVsphereVirtualMachine#hv_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#id DataVsphereVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ide_controller_scan_count`<sup>Optional</sup> <a name="ide_controller_scan_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.ideControllerScanCount"></a>

```python
ide_controller_scan_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of IDE controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#ide_controller_scan_count DataVsphereVirtualMachine#ide_controller_scan_count}

---

##### `latency_sensitivity`<sup>Optional</sup> <a name="latency_sensitivity" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.latencySensitivity"></a>

```python
latency_sensitivity: str
```

- *Type:* str

Controls the scheduling delay of the virtual machine.

Use a higher sensitivity for applications that require lower latency, such as VOIP, media player applications, or applications that require frequent access to mouse or keyboard devices. Can be one of low, normal, medium, or high.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#latency_sensitivity DataVsphereVirtualMachine#latency_sensitivity}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the virtual machine's memory, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#memory DataVsphereVirtualMachine#memory}

---

##### `memory_hot_add_enabled`<sup>Optional</sup> <a name="memory_hot_add_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryHotAddEnabled"></a>

```python
memory_hot_add_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow memory to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#memory_hot_add_enabled DataVsphereVirtualMachine#memory_hot_add_enabled}

---

##### `memory_limit`<sup>Optional</sup> <a name="memory_limit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryLimit"></a>

```python
memory_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#memory_limit DataVsphereVirtualMachine#memory_limit}

---

##### `memory_reservation`<sup>Optional</sup> <a name="memory_reservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryReservation"></a>

```python
memory_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#memory_reservation DataVsphereVirtualMachine#memory_reservation}

---

##### `memory_reservation_locked_to_max`<sup>Optional</sup> <a name="memory_reservation_locked_to_max" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryReservationLockedToMax"></a>

```python
memory_reservation_locked_to_max: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#memory_reservation_locked_to_max DataVsphereVirtualMachine#memory_reservation_locked_to_max}

---

##### `memory_share_count`<sup>Optional</sup> <a name="memory_share_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareCount"></a>

```python
memory_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of shares to allocate to memory for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#memory_share_count DataVsphereVirtualMachine#memory_share_count}

---

##### `memory_share_level`<sup>Optional</sup> <a name="memory_share_level" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareLevel"></a>

```python
memory_share_level: str
```

- *Type:* str

The allocation level for memory resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#memory_share_level DataVsphereVirtualMachine#memory_share_level}

---

##### `moid`<sup>Optional</sup> <a name="moid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.moid"></a>

```python
moid: str
```

- *Type:* str

The machine object ID from VMware vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#moid DataVsphereVirtualMachine#moid}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#name DataVsphereVirtualMachine#name}

---

##### `nested_hv_enabled`<sup>Optional</sup> <a name="nested_hv_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.nestedHvEnabled"></a>

```python
nested_hv_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#nested_hv_enabled DataVsphereVirtualMachine#nested_hv_enabled}

---

##### `num_cores_per_socket`<sup>Optional</sup> <a name="num_cores_per_socket" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCoresPerSocket"></a>

```python
num_cores_per_socket: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of cores to distribute amongst the CPUs in this virtual machine.

If specified, the value supplied to num_cpus must be evenly divisible by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#num_cores_per_socket DataVsphereVirtualMachine#num_cores_per_socket}

---

##### `num_cpus`<sup>Optional</sup> <a name="num_cpus" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCpus"></a>

```python
num_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of virtual processors to assign to this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#num_cpus DataVsphereVirtualMachine#num_cpus}

---

##### `replace_trigger`<sup>Optional</sup> <a name="replace_trigger" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.replaceTrigger"></a>

```python
replace_trigger: str
```

- *Type:* str

Triggers replacement of resource whenever it changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#replace_trigger DataVsphereVirtualMachine#replace_trigger}

---

##### `run_tools_scripts_after_power_on`<sup>Optional</sup> <a name="run_tools_scripts_after_power_on" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterPowerOn"></a>

```python
run_tools_scripts_after_power_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts after virtual machine power-on when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#run_tools_scripts_after_power_on DataVsphereVirtualMachine#run_tools_scripts_after_power_on}

---

##### `run_tools_scripts_after_resume`<sup>Optional</sup> <a name="run_tools_scripts_after_resume" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterResume"></a>

```python
run_tools_scripts_after_resume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts after virtual machine resume when when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#run_tools_scripts_after_resume DataVsphereVirtualMachine#run_tools_scripts_after_resume}

---

##### `run_tools_scripts_before_guest_reboot`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_reboot" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot"></a>

```python
run_tools_scripts_before_guest_reboot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts before guest operating system reboot when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_reboot DataVsphereVirtualMachine#run_tools_scripts_before_guest_reboot}

---

##### `run_tools_scripts_before_guest_shutdown`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_shutdown" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown"></a>

```python
run_tools_scripts_before_guest_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts before guest operating system shutdown when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_shutdown DataVsphereVirtualMachine#run_tools_scripts_before_guest_shutdown}

---

##### `run_tools_scripts_before_guest_standby`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_standby" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby"></a>

```python
run_tools_scripts_before_guest_standby: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts before guest operating system standby when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_standby DataVsphereVirtualMachine#run_tools_scripts_before_guest_standby}

---

##### `sata_controller_scan_count`<sup>Optional</sup> <a name="sata_controller_scan_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.sataControllerScanCount"></a>

```python
sata_controller_scan_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of SATA controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#sata_controller_scan_count DataVsphereVirtualMachine#sata_controller_scan_count}

---

##### `scsi_controller_scan_count`<sup>Optional</sup> <a name="scsi_controller_scan_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.scsiControllerScanCount"></a>

```python
scsi_controller_scan_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of SCSI controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#scsi_controller_scan_count DataVsphereVirtualMachine#scsi_controller_scan_count}

---

##### `storage_policy_id`<sup>Optional</sup> <a name="storage_policy_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.storagePolicyId"></a>

```python
storage_policy_id: str
```

- *Type:* str

The ID of the storage policy to assign to the virtual machine home directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#storage_policy_id DataVsphereVirtualMachine#storage_policy_id}

---

##### `swap_placement_policy`<sup>Optional</sup> <a name="swap_placement_policy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.swapPlacementPolicy"></a>

```python
swap_placement_policy: str
```

- *Type:* str

The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#swap_placement_policy DataVsphereVirtualMachine#swap_placement_policy}

---

##### `sync_time_with_host`<sup>Optional</sup> <a name="sync_time_with_host" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHost"></a>

```python
sync_time_with_host: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable guest clock synchronization with the host.

On vSphere 7.0 U1 and above, with only this setting the clock is synchronized on startup and resume. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#sync_time_with_host DataVsphereVirtualMachine#sync_time_with_host}

---

##### `sync_time_with_host_periodically`<sup>Optional</sup> <a name="sync_time_with_host_periodically" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHostPeriodically"></a>

```python
sync_time_with_host_periodically: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable periodic clock synchronization with the host.

Supported only on vSphere 7.0 U1 and above. On prior versions setting `sync_time_with_host` is enough for periodic synchronization. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#sync_time_with_host_periodically DataVsphereVirtualMachine#sync_time_with_host_periodically}

---

##### `tools_upgrade_policy`<sup>Optional</sup> <a name="tools_upgrade_policy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.toolsUpgradePolicy"></a>

```python
tools_upgrade_policy: str
```

- *Type:* str

Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#tools_upgrade_policy DataVsphereVirtualMachine#tools_upgrade_policy}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

The UUID of the virtual machine. Also exposed as the ID of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#uuid DataVsphereVirtualMachine#uuid}

---

##### `vapp`<sup>Optional</sup> <a name="vapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vapp"></a>

```python
vapp: DataVsphereVirtualMachineVapp
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

vapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#vapp DataVsphereVirtualMachine#vapp}

---

##### `vbs_enabled`<sup>Optional</sup> <a name="vbs_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vbsEnabled"></a>

```python
vbs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to specify if Virtualization-based security is enabled for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#vbs_enabled DataVsphereVirtualMachine#vbs_enabled}

---

##### `vvtd_enabled`<sup>Optional</sup> <a name="vvtd_enabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vvtdEnabled"></a>

```python
vvtd_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#vvtd_enabled DataVsphereVirtualMachine#vvtd_enabled}

---

### DataVsphereVirtualMachineDisks <a name="DataVsphereVirtualMachineDisks" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_virtual_machine

dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks()
```


### DataVsphereVirtualMachineNetworkInterfaces <a name="DataVsphereVirtualMachineNetworkInterfaces" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_virtual_machine

dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces()
```


### DataVsphereVirtualMachineVapp <a name="DataVsphereVirtualMachineVapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_virtual_machine

dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp(
  properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A map of customizable vApp properties and their values. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of customizable vApp properties and their values.

Allows customization of VMs cloned from OVF templates which have customizable vApp properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/virtual_machine#properties DataVsphereVirtualMachine#properties}

---

## Classes <a name="Classes" id="Classes"></a>

### DataVsphereVirtualMachineDisksList <a name="DataVsphereVirtualMachineDisksList" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_virtual_machine

dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataVsphereVirtualMachineDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataVsphereVirtualMachineDisksOutputReference <a name="DataVsphereVirtualMachineDisksOutputReference" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_virtual_machine

dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.eagerlyScrub">eagerly_scrub</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.thinProvisioned">thin_provisioned</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.unitNumber">unit_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks">DataVsphereVirtualMachineDisks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eagerly_scrub`<sup>Required</sup> <a name="eagerly_scrub" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.eagerlyScrub"></a>

```python
eagerly_scrub: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thin_provisioned`<sup>Required</sup> <a name="thin_provisioned" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.thinProvisioned"></a>

```python
thin_provisioned: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `unit_number`<sup>Required</sup> <a name="unit_number" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.unitNumber"></a>

```python
unit_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.internalValue"></a>

```python
internal_value: DataVsphereVirtualMachineDisks
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks">DataVsphereVirtualMachineDisks</a>

---


### DataVsphereVirtualMachineNetworkInterfacesList <a name="DataVsphereVirtualMachineNetworkInterfacesList" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_virtual_machine

dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataVsphereVirtualMachineNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataVsphereVirtualMachineNetworkInterfacesOutputReference <a name="DataVsphereVirtualMachineNetworkInterfacesOutputReference" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_virtual_machine

dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.adapterType">adapter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthLimit">bandwidth_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthReservation">bandwidth_reservation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareCount">bandwidth_share_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareLevel">bandwidth_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.macAddress">mac_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.networkId">network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.physicalFunction">physical_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces">DataVsphereVirtualMachineNetworkInterfaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `adapter_type`<sup>Required</sup> <a name="adapter_type" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.adapterType"></a>

```python
adapter_type: str
```

- *Type:* str

---

##### `bandwidth_limit`<sup>Required</sup> <a name="bandwidth_limit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthLimit"></a>

```python
bandwidth_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth_reservation`<sup>Required</sup> <a name="bandwidth_reservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthReservation"></a>

```python
bandwidth_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth_share_count`<sup>Required</sup> <a name="bandwidth_share_count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareCount"></a>

```python
bandwidth_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth_share_level`<sup>Required</sup> <a name="bandwidth_share_level" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareLevel"></a>

```python
bandwidth_share_level: str
```

- *Type:* str

---

##### `mac_address`<sup>Required</sup> <a name="mac_address" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

---

##### `physical_function`<sup>Required</sup> <a name="physical_function" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.physicalFunction"></a>

```python
physical_function: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: DataVsphereVirtualMachineNetworkInterfaces
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces">DataVsphereVirtualMachineNetworkInterfaces</a>

---


### DataVsphereVirtualMachineVappOutputReference <a name="DataVsphereVirtualMachineVappOutputReference" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_virtual_machine

dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.internalValue"></a>

```python
internal_value: DataVsphereVirtualMachineVapp
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

---



