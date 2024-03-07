# `virtualMachine` Submodule <a name="`virtualMachine` Submodule" id="@cdktf/provider-vsphere.virtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachine <a name="VirtualMachine" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine vsphere_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachine(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_pool_id: str,
  alternate_guest_name: str = None,
  annotation: str = None,
  boot_delay: typing.Union[int, float] = None,
  boot_retry_delay: typing.Union[int, float] = None,
  boot_retry_enabled: typing.Union[bool, IResolvable] = None,
  cdrom: typing.Union[IResolvable, typing.List[VirtualMachineCdrom]] = None,
  clone: VirtualMachineClone = None,
  cpu_hot_add_enabled: typing.Union[bool, IResolvable] = None,
  cpu_hot_remove_enabled: typing.Union[bool, IResolvable] = None,
  cpu_limit: typing.Union[int, float] = None,
  cpu_performance_counters_enabled: typing.Union[bool, IResolvable] = None,
  cpu_reservation: typing.Union[int, float] = None,
  cpu_share_count: typing.Union[int, float] = None,
  cpu_share_level: str = None,
  custom_attributes: typing.Mapping[str] = None,
  datacenter_id: str = None,
  datastore_cluster_id: str = None,
  datastore_id: str = None,
  disk: typing.Union[IResolvable, typing.List[VirtualMachineDisk]] = None,
  efi_secure_boot_enabled: typing.Union[bool, IResolvable] = None,
  enable_disk_uuid: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  ept_rvi_mode: str = None,
  extra_config: typing.Mapping[str] = None,
  extra_config_reboot_required: typing.Union[bool, IResolvable] = None,
  firmware: str = None,
  folder: str = None,
  force_power_off: typing.Union[bool, IResolvable] = None,
  guest_id: str = None,
  hardware_version: typing.Union[int, float] = None,
  host_system_id: str = None,
  hv_mode: str = None,
  id: str = None,
  ide_controller_count: typing.Union[int, float] = None,
  ignored_guest_ips: typing.List[str] = None,
  latency_sensitivity: str = None,
  memory: typing.Union[int, float] = None,
  memory_hot_add_enabled: typing.Union[bool, IResolvable] = None,
  memory_limit: typing.Union[int, float] = None,
  memory_reservation: typing.Union[int, float] = None,
  memory_reservation_locked_to_max: typing.Union[bool, IResolvable] = None,
  memory_share_count: typing.Union[int, float] = None,
  memory_share_level: str = None,
  migrate_wait_timeout: typing.Union[int, float] = None,
  nested_hv_enabled: typing.Union[bool, IResolvable] = None,
  network_interface: typing.Union[IResolvable, typing.List[VirtualMachineNetworkInterface]] = None,
  num_cores_per_socket: typing.Union[int, float] = None,
  num_cpus: typing.Union[int, float] = None,
  ovf_deploy: VirtualMachineOvfDeploy = None,
  pci_device_id: typing.List[str] = None,
  poweron_timeout: typing.Union[int, float] = None,
  replace_trigger: str = None,
  run_tools_scripts_after_power_on: typing.Union[bool, IResolvable] = None,
  run_tools_scripts_after_resume: typing.Union[bool, IResolvable] = None,
  run_tools_scripts_before_guest_reboot: typing.Union[bool, IResolvable] = None,
  run_tools_scripts_before_guest_shutdown: typing.Union[bool, IResolvable] = None,
  run_tools_scripts_before_guest_standby: typing.Union[bool, IResolvable] = None,
  sata_controller_count: typing.Union[int, float] = None,
  scsi_bus_sharing: str = None,
  scsi_controller_count: typing.Union[int, float] = None,
  scsi_type: str = None,
  shutdown_wait_timeout: typing.Union[int, float] = None,
  storage_policy_id: str = None,
  swap_placement_policy: str = None,
  sync_time_with_host: typing.Union[bool, IResolvable] = None,
  sync_time_with_host_periodically: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  tools_upgrade_policy: str = None,
  vapp: VirtualMachineVapp = None,
  vbs_enabled: typing.Union[bool, IResolvable] = None,
  vvtd_enabled: typing.Union[bool, IResolvable] = None,
  wait_for_guest_ip_timeout: typing.Union[int, float] = None,
  wait_for_guest_net_routable: typing.Union[bool, IResolvable] = None,
  wait_for_guest_net_timeout: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.resourcePoolId">resource_pool_id</a></code> | <code>str</code> | The ID of a resource pool to put the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.alternateGuestName">alternate_guest_name</a></code> | <code>str</code> | The guest name for the operating system when guest_id is otherGuest or otherGuest64. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.annotation">annotation</a></code> | <code>str</code> | User-provided description of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.bootDelay">boot_delay</a></code> | <code>typing.Union[int, float]</code> | The number of milliseconds to wait before starting the boot sequence. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.bootRetryDelay">boot_retry_delay</a></code> | <code>typing.Union[int, float]</code> | The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.bootRetryEnabled">boot_retry_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cdrom">cdrom</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>]]</code> | cdrom block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.clone">clone</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuHotAddEnabled">cpu_hot_add_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuHotRemoveEnabled">cpu_hot_remove_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuLimit">cpu_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuPerformanceCountersEnabled">cpu_performance_counters_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable CPU performance counters on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuReservation">cpu_reservation</a></code> | <code>typing.Union[int, float]</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuShareCount">cpu_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to cpu for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuShareLevel">cpu_share_level</a></code> | <code>str</code> | The allocation level for cpu resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | The ID of the datacenter where the VM is to be created. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.datastoreClusterId">datastore_cluster_id</a></code> | <code>str</code> | The ID of a datastore cluster to put the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.datastoreId">datastore_id</a></code> | <code>str</code> | The ID of the virtual machine's datastore. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.disk">disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>]]</code> | disk block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.efiSecureBootEnabled">efi_secure_boot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When the boot type set in firmware is efi, this enables EFI secure boot. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.enableDiskUuid">enable_disk_uuid</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable logging on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.eptRviMode">ept_rvi_mode</a></code> | <code>str</code> | The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.extraConfig">extra_config</a></code> | <code>typing.Mapping[str]</code> | Extra configuration data for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.extraConfigRebootRequired">extra_config_reboot_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the virtual machine to be rebooted when a change to `extra_config` occurs. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.firmware">firmware</a></code> | <code>str</code> | The firmware interface to use on the virtual machine. Can be one of bios or efi. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.folder">folder</a></code> | <code>str</code> | The name of the folder to locate the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.forcePowerOff">force_power_off</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true to force power-off a virtual machine if a graceful guest shutdown failed for a necessary operation. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.guestId">guest_id</a></code> | <code>str</code> | The guest ID for the operating system. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.hardwareVersion">hardware_version</a></code> | <code>typing.Union[int, float]</code> | The hardware version for the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.hostSystemId">host_system_id</a></code> | <code>str</code> | The ID of an optional host system to pin the virtual machine to. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.hvMode">hv_mode</a></code> | <code>str</code> | The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#id VirtualMachine#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.ideControllerCount">ide_controller_count</a></code> | <code>typing.Union[int, float]</code> | The number of IDE controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.ignoredGuestIps">ignored_guest_ips</a></code> | <code>typing.List[str]</code> | List of IP addresses and CIDR networks to ignore while waiting for an IP. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.latencySensitivity">latency_sensitivity</a></code> | <code>str</code> | Controls the scheduling delay of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memory">memory</a></code> | <code>typing.Union[int, float]</code> | The size of the virtual machine's memory, in MB. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryHotAddEnabled">memory_hot_add_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow memory to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryLimit">memory_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryReservation">memory_reservation</a></code> | <code>typing.Union[int, float]</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryReservationLockedToMax">memory_reservation_locked_to_max</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryShareCount">memory_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to memory for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryShareLevel">memory_share_level</a></code> | <code>str</code> | The allocation level for memory resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.migrateWaitTimeout">migrate_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in minutes, to wait for a vMotion operation to complete before failing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.nestedHvEnabled">nested_hv_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.numCoresPerSocket">num_cores_per_socket</a></code> | <code>typing.Union[int, float]</code> | The number of cores to distribute amongst the CPUs in this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.numCpus">num_cpus</a></code> | <code>typing.Union[int, float]</code> | The number of virtual processors to assign to this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.ovfDeploy">ovf_deploy</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a></code> | ovf_deploy block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.pciDeviceId">pci_device_id</a></code> | <code>typing.List[str]</code> | A list of PCI passthrough devices. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.poweronTimeout">poweron_timeout</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in seconds, that we will be trying to power on a VM. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.replaceTrigger">replace_trigger</a></code> | <code>str</code> | Triggers replacement of resource whenever it changes. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsAfterPowerOn">run_tools_scripts_after_power_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts after virtual machine power-on when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsAfterResume">run_tools_scripts_after_resume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts after virtual machine resume when when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestReboot">run_tools_scripts_before_guest_reboot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts before guest operating system reboot when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestShutdown">run_tools_scripts_before_guest_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts before guest operating system shutdown when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestStandby">run_tools_scripts_before_guest_standby</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts before guest operating system standby when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.sataControllerCount">sata_controller_count</a></code> | <code>typing.Union[int, float]</code> | The number of SATA controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scsiBusSharing">scsi_bus_sharing</a></code> | <code>str</code> | Mode for sharing the SCSI bus. The modes are physicalSharing, virtualSharing, and noSharing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scsiControllerCount">scsi_controller_count</a></code> | <code>typing.Union[int, float]</code> | The number of SCSI controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scsiType">scsi_type</a></code> | <code>str</code> | The type of SCSI bus this virtual machine will have. Can be one of lsilogic, lsilogic-sas or pvscsi. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.shutdownWaitTimeout">shutdown_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in minutes, to wait for shutdown when making necessary updates to the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.storagePolicyId">storage_policy_id</a></code> | <code>str</code> | The ID of the storage policy to assign to the virtual machine home directory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.swapPlacementPolicy">swap_placement_policy</a></code> | <code>str</code> | The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.syncTimeWithHost">sync_time_with_host</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable guest clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.syncTimeWithHostPeriodically">sync_time_with_host_periodically</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable periodic clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.toolsUpgradePolicy">tools_upgrade_policy</a></code> | <code>str</code> | Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.vapp">vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a></code> | vapp block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.vbsEnabled">vbs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to specify if Virtualization-based security is enabled for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.vvtdEnabled">vvtd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.waitForGuestIpTimeout">wait_for_guest_ip_timeout</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in minutes, to wait for an available IP address on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.waitForGuestNetRoutable">wait_for_guest_net_routable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the guest network waiter waits for a routable address. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.waitForGuestNetTimeout">wait_for_guest_net_timeout</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in minutes, to wait for an available IP address on this virtual machine. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.name"></a>

- *Type:* str

The name of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#name VirtualMachine#name}

---

##### `resource_pool_id`<sup>Required</sup> <a name="resource_pool_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.resourcePoolId"></a>

- *Type:* str

The ID of a resource pool to put the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#resource_pool_id VirtualMachine#resource_pool_id}

---

##### `alternate_guest_name`<sup>Optional</sup> <a name="alternate_guest_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.alternateGuestName"></a>

- *Type:* str

The guest name for the operating system when guest_id is otherGuest or otherGuest64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#alternate_guest_name VirtualMachine#alternate_guest_name}

---

##### `annotation`<sup>Optional</sup> <a name="annotation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.annotation"></a>

- *Type:* str

User-provided description of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#annotation VirtualMachine#annotation}

---

##### `boot_delay`<sup>Optional</sup> <a name="boot_delay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.bootDelay"></a>

- *Type:* typing.Union[int, float]

The number of milliseconds to wait before starting the boot sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#boot_delay VirtualMachine#boot_delay}

---

##### `boot_retry_delay`<sup>Optional</sup> <a name="boot_retry_delay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.bootRetryDelay"></a>

- *Type:* typing.Union[int, float]

The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#boot_retry_delay VirtualMachine#boot_retry_delay}

---

##### `boot_retry_enabled`<sup>Optional</sup> <a name="boot_retry_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.bootRetryEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#boot_retry_enabled VirtualMachine#boot_retry_enabled}

---

##### `cdrom`<sup>Optional</sup> <a name="cdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cdrom"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>]]

cdrom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#cdrom VirtualMachine#cdrom}

---

##### `clone`<sup>Optional</sup> <a name="clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.clone"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#clone VirtualMachine#clone}

---

##### `cpu_hot_add_enabled`<sup>Optional</sup> <a name="cpu_hot_add_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuHotAddEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#cpu_hot_add_enabled VirtualMachine#cpu_hot_add_enabled}

---

##### `cpu_hot_remove_enabled`<sup>Optional</sup> <a name="cpu_hot_remove_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuHotRemoveEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#cpu_hot_remove_enabled VirtualMachine#cpu_hot_remove_enabled}

---

##### `cpu_limit`<sup>Optional</sup> <a name="cpu_limit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuLimit"></a>

- *Type:* typing.Union[int, float]

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#cpu_limit VirtualMachine#cpu_limit}

---

##### `cpu_performance_counters_enabled`<sup>Optional</sup> <a name="cpu_performance_counters_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuPerformanceCountersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable CPU performance counters on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#cpu_performance_counters_enabled VirtualMachine#cpu_performance_counters_enabled}

---

##### `cpu_reservation`<sup>Optional</sup> <a name="cpu_reservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuReservation"></a>

- *Type:* typing.Union[int, float]

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#cpu_reservation VirtualMachine#cpu_reservation}

---

##### `cpu_share_count`<sup>Optional</sup> <a name="cpu_share_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuShareCount"></a>

- *Type:* typing.Union[int, float]

The amount of shares to allocate to cpu for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#cpu_share_count VirtualMachine#cpu_share_count}

---

##### `cpu_share_level`<sup>Optional</sup> <a name="cpu_share_level" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuShareLevel"></a>

- *Type:* str

The allocation level for cpu resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#cpu_share_level VirtualMachine#cpu_share_level}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.customAttributes"></a>

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#custom_attributes VirtualMachine#custom_attributes}

---

##### `datacenter_id`<sup>Optional</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.datacenterId"></a>

- *Type:* str

The ID of the datacenter where the VM is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#datacenter_id VirtualMachine#datacenter_id}

---

##### `datastore_cluster_id`<sup>Optional</sup> <a name="datastore_cluster_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.datastoreClusterId"></a>

- *Type:* str

The ID of a datastore cluster to put the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#datastore_cluster_id VirtualMachine#datastore_cluster_id}

---

##### `datastore_id`<sup>Optional</sup> <a name="datastore_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.datastoreId"></a>

- *Type:* str

The ID of the virtual machine's datastore.

The virtual machine configuration is placed here, along with any virtual disks that are created without datastores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.disk"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>]]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#disk VirtualMachine#disk}

---

##### `efi_secure_boot_enabled`<sup>Optional</sup> <a name="efi_secure_boot_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.efiSecureBootEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When the boot type set in firmware is efi, this enables EFI secure boot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#efi_secure_boot_enabled VirtualMachine#efi_secure_boot_enabled}

---

##### `enable_disk_uuid`<sup>Optional</sup> <a name="enable_disk_uuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.enableDiskUuid"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#enable_disk_uuid VirtualMachine#enable_disk_uuid}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.enableLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable logging on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#enable_logging VirtualMachine#enable_logging}

---

##### `ept_rvi_mode`<sup>Optional</sup> <a name="ept_rvi_mode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.eptRviMode"></a>

- *Type:* str

The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ept_rvi_mode VirtualMachine#ept_rvi_mode}

---

##### `extra_config`<sup>Optional</sup> <a name="extra_config" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.extraConfig"></a>

- *Type:* typing.Mapping[str]

Extra configuration data for this virtual machine.

Can be used to supply advanced parameters not normally in configuration, such as instance metadata, or configuration data for OVF images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#extra_config VirtualMachine#extra_config}

---

##### `extra_config_reboot_required`<sup>Optional</sup> <a name="extra_config_reboot_required" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.extraConfigRebootRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the virtual machine to be rebooted when a change to `extra_config` occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#extra_config_reboot_required VirtualMachine#extra_config_reboot_required}

---

##### `firmware`<sup>Optional</sup> <a name="firmware" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.firmware"></a>

- *Type:* str

The firmware interface to use on the virtual machine. Can be one of bios or efi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#firmware VirtualMachine#firmware}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.folder"></a>

- *Type:* str

The name of the folder to locate the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#folder VirtualMachine#folder}

---

##### `force_power_off`<sup>Optional</sup> <a name="force_power_off" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.forcePowerOff"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true to force power-off a virtual machine if a graceful guest shutdown failed for a necessary operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#force_power_off VirtualMachine#force_power_off}

---

##### `guest_id`<sup>Optional</sup> <a name="guest_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.guestId"></a>

- *Type:* str

The guest ID for the operating system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#guest_id VirtualMachine#guest_id}

---

##### `hardware_version`<sup>Optional</sup> <a name="hardware_version" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.hardwareVersion"></a>

- *Type:* typing.Union[int, float]

The hardware version for the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#hardware_version VirtualMachine#hardware_version}

---

##### `host_system_id`<sup>Optional</sup> <a name="host_system_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.hostSystemId"></a>

- *Type:* str

The ID of an optional host system to pin the virtual machine to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#host_system_id VirtualMachine#host_system_id}

---

##### `hv_mode`<sup>Optional</sup> <a name="hv_mode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.hvMode"></a>

- *Type:* str

The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#hv_mode VirtualMachine#hv_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#id VirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ide_controller_count`<sup>Optional</sup> <a name="ide_controller_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.ideControllerCount"></a>

- *Type:* typing.Union[int, float]

The number of IDE controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ide_controller_count VirtualMachine#ide_controller_count}

---

##### `ignored_guest_ips`<sup>Optional</sup> <a name="ignored_guest_ips" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.ignoredGuestIps"></a>

- *Type:* typing.List[str]

List of IP addresses and CIDR networks to ignore while waiting for an IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ignored_guest_ips VirtualMachine#ignored_guest_ips}

---

##### `latency_sensitivity`<sup>Optional</sup> <a name="latency_sensitivity" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.latencySensitivity"></a>

- *Type:* str

Controls the scheduling delay of the virtual machine.

Use a higher sensitivity for applications that require lower latency, such as VOIP, media player applications, or applications that require frequent access to mouse or keyboard devices. Can be one of low, normal, medium, or high.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#latency_sensitivity VirtualMachine#latency_sensitivity}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memory"></a>

- *Type:* typing.Union[int, float]

The size of the virtual machine's memory, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#memory VirtualMachine#memory}

---

##### `memory_hot_add_enabled`<sup>Optional</sup> <a name="memory_hot_add_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryHotAddEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow memory to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#memory_hot_add_enabled VirtualMachine#memory_hot_add_enabled}

---

##### `memory_limit`<sup>Optional</sup> <a name="memory_limit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryLimit"></a>

- *Type:* typing.Union[int, float]

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#memory_limit VirtualMachine#memory_limit}

---

##### `memory_reservation`<sup>Optional</sup> <a name="memory_reservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryReservation"></a>

- *Type:* typing.Union[int, float]

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#memory_reservation VirtualMachine#memory_reservation}

---

##### `memory_reservation_locked_to_max`<sup>Optional</sup> <a name="memory_reservation_locked_to_max" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryReservationLockedToMax"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#memory_reservation_locked_to_max VirtualMachine#memory_reservation_locked_to_max}

---

##### `memory_share_count`<sup>Optional</sup> <a name="memory_share_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryShareCount"></a>

- *Type:* typing.Union[int, float]

The amount of shares to allocate to memory for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#memory_share_count VirtualMachine#memory_share_count}

---

##### `memory_share_level`<sup>Optional</sup> <a name="memory_share_level" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryShareLevel"></a>

- *Type:* str

The allocation level for memory resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#memory_share_level VirtualMachine#memory_share_level}

---

##### `migrate_wait_timeout`<sup>Optional</sup> <a name="migrate_wait_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.migrateWaitTimeout"></a>

- *Type:* typing.Union[int, float]

The amount of time, in minutes, to wait for a vMotion operation to complete before failing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#migrate_wait_timeout VirtualMachine#migrate_wait_timeout}

---

##### `nested_hv_enabled`<sup>Optional</sup> <a name="nested_hv_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.nestedHvEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#nested_hv_enabled VirtualMachine#nested_hv_enabled}

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.networkInterface"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#network_interface VirtualMachine#network_interface}

---

##### `num_cores_per_socket`<sup>Optional</sup> <a name="num_cores_per_socket" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.numCoresPerSocket"></a>

- *Type:* typing.Union[int, float]

The number of cores to distribute amongst the CPUs in this virtual machine.

If specified, the value supplied to num_cpus must be evenly divisible by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#num_cores_per_socket VirtualMachine#num_cores_per_socket}

---

##### `num_cpus`<sup>Optional</sup> <a name="num_cpus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.numCpus"></a>

- *Type:* typing.Union[int, float]

The number of virtual processors to assign to this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#num_cpus VirtualMachine#num_cpus}

---

##### `ovf_deploy`<sup>Optional</sup> <a name="ovf_deploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.ovfDeploy"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

ovf_deploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ovf_deploy VirtualMachine#ovf_deploy}

---

##### `pci_device_id`<sup>Optional</sup> <a name="pci_device_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.pciDeviceId"></a>

- *Type:* typing.List[str]

A list of PCI passthrough devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#pci_device_id VirtualMachine#pci_device_id}

---

##### `poweron_timeout`<sup>Optional</sup> <a name="poweron_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.poweronTimeout"></a>

- *Type:* typing.Union[int, float]

The amount of time, in seconds, that we will be trying to power on a VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#poweron_timeout VirtualMachine#poweron_timeout}

---

##### `replace_trigger`<sup>Optional</sup> <a name="replace_trigger" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.replaceTrigger"></a>

- *Type:* str

Triggers replacement of resource whenever it changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#replace_trigger VirtualMachine#replace_trigger}

---

##### `run_tools_scripts_after_power_on`<sup>Optional</sup> <a name="run_tools_scripts_after_power_on" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsAfterPowerOn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts after virtual machine power-on when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#run_tools_scripts_after_power_on VirtualMachine#run_tools_scripts_after_power_on}

---

##### `run_tools_scripts_after_resume`<sup>Optional</sup> <a name="run_tools_scripts_after_resume" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsAfterResume"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts after virtual machine resume when when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#run_tools_scripts_after_resume VirtualMachine#run_tools_scripts_after_resume}

---

##### `run_tools_scripts_before_guest_reboot`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_reboot" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestReboot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts before guest operating system reboot when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#run_tools_scripts_before_guest_reboot VirtualMachine#run_tools_scripts_before_guest_reboot}

---

##### `run_tools_scripts_before_guest_shutdown`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_shutdown" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestShutdown"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts before guest operating system shutdown when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#run_tools_scripts_before_guest_shutdown VirtualMachine#run_tools_scripts_before_guest_shutdown}

---

##### `run_tools_scripts_before_guest_standby`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_standby" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestStandby"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts before guest operating system standby when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#run_tools_scripts_before_guest_standby VirtualMachine#run_tools_scripts_before_guest_standby}

---

##### `sata_controller_count`<sup>Optional</sup> <a name="sata_controller_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.sataControllerCount"></a>

- *Type:* typing.Union[int, float]

The number of SATA controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#sata_controller_count VirtualMachine#sata_controller_count}

---

##### `scsi_bus_sharing`<sup>Optional</sup> <a name="scsi_bus_sharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scsiBusSharing"></a>

- *Type:* str

Mode for sharing the SCSI bus. The modes are physicalSharing, virtualSharing, and noSharing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#scsi_bus_sharing VirtualMachine#scsi_bus_sharing}

---

##### `scsi_controller_count`<sup>Optional</sup> <a name="scsi_controller_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scsiControllerCount"></a>

- *Type:* typing.Union[int, float]

The number of SCSI controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#scsi_controller_count VirtualMachine#scsi_controller_count}

---

##### `scsi_type`<sup>Optional</sup> <a name="scsi_type" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scsiType"></a>

- *Type:* str

The type of SCSI bus this virtual machine will have. Can be one of lsilogic, lsilogic-sas or pvscsi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#scsi_type VirtualMachine#scsi_type}

---

##### `shutdown_wait_timeout`<sup>Optional</sup> <a name="shutdown_wait_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.shutdownWaitTimeout"></a>

- *Type:* typing.Union[int, float]

The amount of time, in minutes, to wait for shutdown when making necessary updates to the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#shutdown_wait_timeout VirtualMachine#shutdown_wait_timeout}

---

##### `storage_policy_id`<sup>Optional</sup> <a name="storage_policy_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.storagePolicyId"></a>

- *Type:* str

The ID of the storage policy to assign to the virtual machine home directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#storage_policy_id VirtualMachine#storage_policy_id}

---

##### `swap_placement_policy`<sup>Optional</sup> <a name="swap_placement_policy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.swapPlacementPolicy"></a>

- *Type:* str

The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#swap_placement_policy VirtualMachine#swap_placement_policy}

---

##### `sync_time_with_host`<sup>Optional</sup> <a name="sync_time_with_host" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.syncTimeWithHost"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable guest clock synchronization with the host.

On vSphere 7.0 U1 and above, with only this setting the clock is synchronized on startup and resume. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#sync_time_with_host VirtualMachine#sync_time_with_host}

---

##### `sync_time_with_host_periodically`<sup>Optional</sup> <a name="sync_time_with_host_periodically" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.syncTimeWithHostPeriodically"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable periodic clock synchronization with the host.

Supported only on vSphere 7.0 U1 and above. On prior versions setting `sync_time_with_host` is enough for periodic synchronization. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#sync_time_with_host_periodically VirtualMachine#sync_time_with_host_periodically}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#tags VirtualMachine#tags}

---

##### `tools_upgrade_policy`<sup>Optional</sup> <a name="tools_upgrade_policy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.toolsUpgradePolicy"></a>

- *Type:* str

Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#tools_upgrade_policy VirtualMachine#tools_upgrade_policy}

---

##### `vapp`<sup>Optional</sup> <a name="vapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.vapp"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

vapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#vapp VirtualMachine#vapp}

---

##### `vbs_enabled`<sup>Optional</sup> <a name="vbs_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.vbsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to specify if Virtualization-based security is enabled for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#vbs_enabled VirtualMachine#vbs_enabled}

---

##### `vvtd_enabled`<sup>Optional</sup> <a name="vvtd_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.vvtdEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#vvtd_enabled VirtualMachine#vvtd_enabled}

---

##### `wait_for_guest_ip_timeout`<sup>Optional</sup> <a name="wait_for_guest_ip_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.waitForGuestIpTimeout"></a>

- *Type:* typing.Union[int, float]

The amount of time, in minutes, to wait for an available IP address on this virtual machine.

A value less than 1 disables the waiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#wait_for_guest_ip_timeout VirtualMachine#wait_for_guest_ip_timeout}

---

##### `wait_for_guest_net_routable`<sup>Optional</sup> <a name="wait_for_guest_net_routable" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.waitForGuestNetRoutable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the guest network waiter waits for a routable address.

When false, the waiter does not wait for a default gateway, nor are IP addresses checked against any discovered default gateways as part of its success criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#wait_for_guest_net_routable VirtualMachine#wait_for_guest_net_routable}

---

##### `wait_for_guest_net_timeout`<sup>Optional</sup> <a name="wait_for_guest_net_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.waitForGuestNetTimeout"></a>

- *Type:* typing.Union[int, float]

The amount of time, in minutes, to wait for an available IP address on this virtual machine.

A value less than 1 disables the waiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#wait_for_guest_net_timeout VirtualMachine#wait_for_guest_net_timeout}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putCdrom">put_cdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone">put_clone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putDisk">put_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putNetworkInterface">put_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy">put_ovf_deploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putVapp">put_vapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAlternateGuestName">reset_alternate_guest_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAnnotation">reset_annotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootDelay">reset_boot_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryDelay">reset_boot_retry_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryEnabled">reset_boot_retry_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCdrom">reset_cdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetClone">reset_clone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotAddEnabled">reset_cpu_hot_add_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotRemoveEnabled">reset_cpu_hot_remove_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuLimit">reset_cpu_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuPerformanceCountersEnabled">reset_cpu_performance_counters_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuReservation">reset_cpu_reservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareCount">reset_cpu_share_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareLevel">reset_cpu_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatacenterId">reset_datacenter_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreClusterId">reset_datastore_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreId">reset_datastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDisk">reset_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEfiSecureBootEnabled">reset_efi_secure_boot_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableDiskUuid">reset_enable_disk_uuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableLogging">reset_enable_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEptRviMode">reset_ept_rvi_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfig">reset_extra_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfigRebootRequired">reset_extra_config_reboot_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFirmware">reset_firmware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFolder">reset_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetForcePowerOff">reset_force_power_off</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetGuestId">reset_guest_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHardwareVersion">reset_hardware_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHostSystemId">reset_host_system_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHvMode">reset_hv_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIdeControllerCount">reset_ide_controller_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIgnoredGuestIps">reset_ignored_guest_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetLatencySensitivity">reset_latency_sensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemory">reset_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryHotAddEnabled">reset_memory_hot_add_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryLimit">reset_memory_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryReservation">reset_memory_reservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryReservationLockedToMax">reset_memory_reservation_locked_to_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareCount">reset_memory_share_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareLevel">reset_memory_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMigrateWaitTimeout">reset_migrate_wait_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNestedHvEnabled">reset_nested_hv_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNetworkInterface">reset_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCoresPerSocket">reset_num_cores_per_socket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCpus">reset_num_cpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOvfDeploy">reset_ovf_deploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPciDeviceId">reset_pci_device_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPoweronTimeout">reset_poweron_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetReplaceTrigger">reset_replace_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterPowerOn">reset_run_tools_scripts_after_power_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterResume">reset_run_tools_scripts_after_resume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestReboot">reset_run_tools_scripts_before_guest_reboot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestShutdown">reset_run_tools_scripts_before_guest_shutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestStandby">reset_run_tools_scripts_before_guest_standby</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSataControllerCount">reset_sata_controller_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiBusSharing">reset_scsi_bus_sharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiControllerCount">reset_scsi_controller_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiType">reset_scsi_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetShutdownWaitTimeout">reset_shutdown_wait_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetStoragePolicyId">reset_storage_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSwapPlacementPolicy">reset_swap_placement_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHost">reset_sync_time_with_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHostPeriodically">reset_sync_time_with_host_periodically</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetToolsUpgradePolicy">reset_tools_upgrade_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVapp">reset_vapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVbsEnabled">reset_vbs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVvtdEnabled">reset_vvtd_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestIpTimeout">reset_wait_for_guest_ip_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetRoutable">reset_wait_for_guest_net_routable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetTimeout">reset_wait_for_guest_net_timeout</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cdrom` <a name="put_cdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putCdrom"></a>

```python
def put_cdrom(
  value: typing.Union[IResolvable, typing.List[VirtualMachineCdrom]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putCdrom.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>]]

---

##### `put_clone` <a name="put_clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone"></a>

```python
def put_clone(
  template_uuid: str,
  customization_spec: VirtualMachineCloneCustomizationSpec = None,
  customize: VirtualMachineCloneCustomize = None,
  linked_clone: typing.Union[bool, IResolvable] = None,
  ovf_network_map: typing.Mapping[str] = None,
  ovf_storage_map: typing.Mapping[str] = None,
  timeout: typing.Union[int, float] = None
) -> None
```

###### `template_uuid`<sup>Required</sup> <a name="template_uuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone.parameter.templateUuid"></a>

- *Type:* str

The UUID of the source virtual machine or template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#template_uuid VirtualMachine#template_uuid}

---

###### `customization_spec`<sup>Optional</sup> <a name="customization_spec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone.parameter.customizationSpec"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

customization_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#customization_spec VirtualMachine#customization_spec}

---

###### `customize`<sup>Optional</sup> <a name="customize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone.parameter.customize"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

customize block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#customize VirtualMachine#customize}

---

###### `linked_clone`<sup>Optional</sup> <a name="linked_clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone.parameter.linkedClone"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to create a linked clone when cloning.

When this option is used, the source VM must have a single snapshot associated with it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#linked_clone VirtualMachine#linked_clone}

---

###### `ovf_network_map`<sup>Optional</sup> <a name="ovf_network_map" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone.parameter.ovfNetworkMap"></a>

- *Type:* typing.Mapping[str]

Mapping of ovf networks to the networks to use in vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ovf_network_map VirtualMachine#ovf_network_map}

---

###### `ovf_storage_map`<sup>Optional</sup> <a name="ovf_storage_map" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone.parameter.ovfStorageMap"></a>

- *Type:* typing.Mapping[str]

Mapping of ovf storage to the datastores to use in vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ovf_storage_map VirtualMachine#ovf_storage_map}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

The timeout, in minutes, to wait for the virtual machine clone to complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

##### `put_disk` <a name="put_disk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putDisk"></a>

```python
def put_disk(
  value: typing.Union[IResolvable, typing.List[VirtualMachineDisk]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putDisk.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>]]

---

##### `put_network_interface` <a name="put_network_interface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putNetworkInterface"></a>

```python
def put_network_interface(
  value: typing.Union[IResolvable, typing.List[VirtualMachineNetworkInterface]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putNetworkInterface.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>]]

---

##### `put_ovf_deploy` <a name="put_ovf_deploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy"></a>

```python
def put_ovf_deploy(
  allow_unverified_ssl_cert: typing.Union[bool, IResolvable] = None,
  deployment_option: str = None,
  disk_provisioning: str = None,
  enable_hidden_properties: typing.Union[bool, IResolvable] = None,
  ip_allocation_policy: str = None,
  ip_protocol: str = None,
  local_ovf_path: str = None,
  ovf_network_map: typing.Mapping[str] = None,
  remote_ovf_url: str = None
) -> None
```

###### `allow_unverified_ssl_cert`<sup>Optional</sup> <a name="allow_unverified_ssl_cert" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy.parameter.allowUnverifiedSslCert"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow unverified ssl certificates while deploying ovf/ova from url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#allow_unverified_ssl_cert VirtualMachine#allow_unverified_ssl_cert}

---

###### `deployment_option`<sup>Optional</sup> <a name="deployment_option" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy.parameter.deploymentOption"></a>

- *Type:* str

The Deployment option to be chosen. If empty, the default option is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#deployment_option VirtualMachine#deployment_option}

---

###### `disk_provisioning`<sup>Optional</sup> <a name="disk_provisioning" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy.parameter.diskProvisioning"></a>

- *Type:* str

An optional disk provisioning.

If set, all the disks in the deployed ovf will have the same specified disk type (e.g., thin provisioned).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#disk_provisioning VirtualMachine#disk_provisioning}

---

###### `enable_hidden_properties`<sup>Optional</sup> <a name="enable_hidden_properties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy.parameter.enableHiddenProperties"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow properties with ovf:userConfigurable=false to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#enable_hidden_properties VirtualMachine#enable_hidden_properties}

---

###### `ip_allocation_policy`<sup>Optional</sup> <a name="ip_allocation_policy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy.parameter.ipAllocationPolicy"></a>

- *Type:* str

The IP allocation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ip_allocation_policy VirtualMachine#ip_allocation_policy}

---

###### `ip_protocol`<sup>Optional</sup> <a name="ip_protocol" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy.parameter.ipProtocol"></a>

- *Type:* str

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ip_protocol VirtualMachine#ip_protocol}

---

###### `local_ovf_path`<sup>Optional</sup> <a name="local_ovf_path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy.parameter.localOvfPath"></a>

- *Type:* str

The absolute path to the ovf/ova file in the local system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#local_ovf_path VirtualMachine#local_ovf_path}

---

###### `ovf_network_map`<sup>Optional</sup> <a name="ovf_network_map" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy.parameter.ovfNetworkMap"></a>

- *Type:* typing.Mapping[str]

The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ovf_network_map VirtualMachine#ovf_network_map}

---

###### `remote_ovf_url`<sup>Optional</sup> <a name="remote_ovf_url" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy.parameter.remoteOvfUrl"></a>

- *Type:* str

URL to the remote ovf/ova file to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#remote_ovf_url VirtualMachine#remote_ovf_url}

---

##### `put_vapp` <a name="put_vapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putVapp"></a>

```python
def put_vapp(
  properties: typing.Mapping[str] = None
) -> None
```

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putVapp.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A map of customizable vApp properties and their values.

Allows customization of VMs cloned from OVF templates which have customizable vApp properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#properties VirtualMachine#properties}

---

##### `reset_alternate_guest_name` <a name="reset_alternate_guest_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAlternateGuestName"></a>

```python
def reset_alternate_guest_name() -> None
```

##### `reset_annotation` <a name="reset_annotation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAnnotation"></a>

```python
def reset_annotation() -> None
```

##### `reset_boot_delay` <a name="reset_boot_delay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootDelay"></a>

```python
def reset_boot_delay() -> None
```

##### `reset_boot_retry_delay` <a name="reset_boot_retry_delay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryDelay"></a>

```python
def reset_boot_retry_delay() -> None
```

##### `reset_boot_retry_enabled` <a name="reset_boot_retry_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryEnabled"></a>

```python
def reset_boot_retry_enabled() -> None
```

##### `reset_cdrom` <a name="reset_cdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCdrom"></a>

```python
def reset_cdrom() -> None
```

##### `reset_clone` <a name="reset_clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetClone"></a>

```python
def reset_clone() -> None
```

##### `reset_cpu_hot_add_enabled` <a name="reset_cpu_hot_add_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotAddEnabled"></a>

```python
def reset_cpu_hot_add_enabled() -> None
```

##### `reset_cpu_hot_remove_enabled` <a name="reset_cpu_hot_remove_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotRemoveEnabled"></a>

```python
def reset_cpu_hot_remove_enabled() -> None
```

##### `reset_cpu_limit` <a name="reset_cpu_limit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuLimit"></a>

```python
def reset_cpu_limit() -> None
```

##### `reset_cpu_performance_counters_enabled` <a name="reset_cpu_performance_counters_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuPerformanceCountersEnabled"></a>

```python
def reset_cpu_performance_counters_enabled() -> None
```

##### `reset_cpu_reservation` <a name="reset_cpu_reservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuReservation"></a>

```python
def reset_cpu_reservation() -> None
```

##### `reset_cpu_share_count` <a name="reset_cpu_share_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareCount"></a>

```python
def reset_cpu_share_count() -> None
```

##### `reset_cpu_share_level` <a name="reset_cpu_share_level" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareLevel"></a>

```python
def reset_cpu_share_level() -> None
```

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_datacenter_id` <a name="reset_datacenter_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatacenterId"></a>

```python
def reset_datacenter_id() -> None
```

##### `reset_datastore_cluster_id` <a name="reset_datastore_cluster_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreClusterId"></a>

```python
def reset_datastore_cluster_id() -> None
```

##### `reset_datastore_id` <a name="reset_datastore_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreId"></a>

```python
def reset_datastore_id() -> None
```

##### `reset_disk` <a name="reset_disk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDisk"></a>

```python
def reset_disk() -> None
```

##### `reset_efi_secure_boot_enabled` <a name="reset_efi_secure_boot_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEfiSecureBootEnabled"></a>

```python
def reset_efi_secure_boot_enabled() -> None
```

##### `reset_enable_disk_uuid` <a name="reset_enable_disk_uuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableDiskUuid"></a>

```python
def reset_enable_disk_uuid() -> None
```

##### `reset_enable_logging` <a name="reset_enable_logging" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableLogging"></a>

```python
def reset_enable_logging() -> None
```

##### `reset_ept_rvi_mode` <a name="reset_ept_rvi_mode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEptRviMode"></a>

```python
def reset_ept_rvi_mode() -> None
```

##### `reset_extra_config` <a name="reset_extra_config" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfig"></a>

```python
def reset_extra_config() -> None
```

##### `reset_extra_config_reboot_required` <a name="reset_extra_config_reboot_required" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfigRebootRequired"></a>

```python
def reset_extra_config_reboot_required() -> None
```

##### `reset_firmware` <a name="reset_firmware" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFirmware"></a>

```python
def reset_firmware() -> None
```

##### `reset_folder` <a name="reset_folder" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFolder"></a>

```python
def reset_folder() -> None
```

##### `reset_force_power_off` <a name="reset_force_power_off" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetForcePowerOff"></a>

```python
def reset_force_power_off() -> None
```

##### `reset_guest_id` <a name="reset_guest_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetGuestId"></a>

```python
def reset_guest_id() -> None
```

##### `reset_hardware_version` <a name="reset_hardware_version" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHardwareVersion"></a>

```python
def reset_hardware_version() -> None
```

##### `reset_host_system_id` <a name="reset_host_system_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHostSystemId"></a>

```python
def reset_host_system_id() -> None
```

##### `reset_hv_mode` <a name="reset_hv_mode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHvMode"></a>

```python
def reset_hv_mode() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ide_controller_count` <a name="reset_ide_controller_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIdeControllerCount"></a>

```python
def reset_ide_controller_count() -> None
```

##### `reset_ignored_guest_ips` <a name="reset_ignored_guest_ips" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIgnoredGuestIps"></a>

```python
def reset_ignored_guest_ips() -> None
```

##### `reset_latency_sensitivity` <a name="reset_latency_sensitivity" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetLatencySensitivity"></a>

```python
def reset_latency_sensitivity() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemory"></a>

```python
def reset_memory() -> None
```

##### `reset_memory_hot_add_enabled` <a name="reset_memory_hot_add_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryHotAddEnabled"></a>

```python
def reset_memory_hot_add_enabled() -> None
```

##### `reset_memory_limit` <a name="reset_memory_limit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryLimit"></a>

```python
def reset_memory_limit() -> None
```

##### `reset_memory_reservation` <a name="reset_memory_reservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryReservation"></a>

```python
def reset_memory_reservation() -> None
```

##### `reset_memory_reservation_locked_to_max` <a name="reset_memory_reservation_locked_to_max" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryReservationLockedToMax"></a>

```python
def reset_memory_reservation_locked_to_max() -> None
```

##### `reset_memory_share_count` <a name="reset_memory_share_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareCount"></a>

```python
def reset_memory_share_count() -> None
```

##### `reset_memory_share_level` <a name="reset_memory_share_level" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareLevel"></a>

```python
def reset_memory_share_level() -> None
```

##### `reset_migrate_wait_timeout` <a name="reset_migrate_wait_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMigrateWaitTimeout"></a>

```python
def reset_migrate_wait_timeout() -> None
```

##### `reset_nested_hv_enabled` <a name="reset_nested_hv_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNestedHvEnabled"></a>

```python
def reset_nested_hv_enabled() -> None
```

##### `reset_network_interface` <a name="reset_network_interface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNetworkInterface"></a>

```python
def reset_network_interface() -> None
```

##### `reset_num_cores_per_socket` <a name="reset_num_cores_per_socket" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCoresPerSocket"></a>

```python
def reset_num_cores_per_socket() -> None
```

##### `reset_num_cpus` <a name="reset_num_cpus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCpus"></a>

```python
def reset_num_cpus() -> None
```

##### `reset_ovf_deploy` <a name="reset_ovf_deploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOvfDeploy"></a>

```python
def reset_ovf_deploy() -> None
```

##### `reset_pci_device_id` <a name="reset_pci_device_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPciDeviceId"></a>

```python
def reset_pci_device_id() -> None
```

##### `reset_poweron_timeout` <a name="reset_poweron_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPoweronTimeout"></a>

```python
def reset_poweron_timeout() -> None
```

##### `reset_replace_trigger` <a name="reset_replace_trigger" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetReplaceTrigger"></a>

```python
def reset_replace_trigger() -> None
```

##### `reset_run_tools_scripts_after_power_on` <a name="reset_run_tools_scripts_after_power_on" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterPowerOn"></a>

```python
def reset_run_tools_scripts_after_power_on() -> None
```

##### `reset_run_tools_scripts_after_resume` <a name="reset_run_tools_scripts_after_resume" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterResume"></a>

```python
def reset_run_tools_scripts_after_resume() -> None
```

##### `reset_run_tools_scripts_before_guest_reboot` <a name="reset_run_tools_scripts_before_guest_reboot" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestReboot"></a>

```python
def reset_run_tools_scripts_before_guest_reboot() -> None
```

##### `reset_run_tools_scripts_before_guest_shutdown` <a name="reset_run_tools_scripts_before_guest_shutdown" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestShutdown"></a>

```python
def reset_run_tools_scripts_before_guest_shutdown() -> None
```

##### `reset_run_tools_scripts_before_guest_standby` <a name="reset_run_tools_scripts_before_guest_standby" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestStandby"></a>

```python
def reset_run_tools_scripts_before_guest_standby() -> None
```

##### `reset_sata_controller_count` <a name="reset_sata_controller_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSataControllerCount"></a>

```python
def reset_sata_controller_count() -> None
```

##### `reset_scsi_bus_sharing` <a name="reset_scsi_bus_sharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiBusSharing"></a>

```python
def reset_scsi_bus_sharing() -> None
```

##### `reset_scsi_controller_count` <a name="reset_scsi_controller_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiControllerCount"></a>

```python
def reset_scsi_controller_count() -> None
```

##### `reset_scsi_type` <a name="reset_scsi_type" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiType"></a>

```python
def reset_scsi_type() -> None
```

##### `reset_shutdown_wait_timeout` <a name="reset_shutdown_wait_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetShutdownWaitTimeout"></a>

```python
def reset_shutdown_wait_timeout() -> None
```

##### `reset_storage_policy_id` <a name="reset_storage_policy_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetStoragePolicyId"></a>

```python
def reset_storage_policy_id() -> None
```

##### `reset_swap_placement_policy` <a name="reset_swap_placement_policy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSwapPlacementPolicy"></a>

```python
def reset_swap_placement_policy() -> None
```

##### `reset_sync_time_with_host` <a name="reset_sync_time_with_host" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHost"></a>

```python
def reset_sync_time_with_host() -> None
```

##### `reset_sync_time_with_host_periodically` <a name="reset_sync_time_with_host_periodically" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHostPeriodically"></a>

```python
def reset_sync_time_with_host_periodically() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tools_upgrade_policy` <a name="reset_tools_upgrade_policy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetToolsUpgradePolicy"></a>

```python
def reset_tools_upgrade_policy() -> None
```

##### `reset_vapp` <a name="reset_vapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVapp"></a>

```python
def reset_vapp() -> None
```

##### `reset_vbs_enabled` <a name="reset_vbs_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVbsEnabled"></a>

```python
def reset_vbs_enabled() -> None
```

##### `reset_vvtd_enabled` <a name="reset_vvtd_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVvtdEnabled"></a>

```python
def reset_vvtd_enabled() -> None
```

##### `reset_wait_for_guest_ip_timeout` <a name="reset_wait_for_guest_ip_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestIpTimeout"></a>

```python
def reset_wait_for_guest_ip_timeout() -> None
```

##### `reset_wait_for_guest_net_routable` <a name="reset_wait_for_guest_net_routable" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetRoutable"></a>

```python
def reset_wait_for_guest_net_routable() -> None
```

##### `reset_wait_for_guest_net_timeout` <a name="reset_wait_for_guest_net_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetTimeout"></a>

```python
def reset_wait_for_guest_net_timeout() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VirtualMachine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdrom">cdrom</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList">VirtualMachineCdromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.changeVersion">change_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.clone">clone</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference">VirtualMachineCloneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.defaultIpAddress">default_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList">VirtualMachineDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIpAddresses">guest_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.imported">imported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.moid">moid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList">VirtualMachineNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeploy">ovf_deploy</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference">VirtualMachineOvfDeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.powerState">power_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.rebootRequired">reboot_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vapp">vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference">VirtualMachineVappOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappTransport">vapp_transport</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmwareToolsStatus">vmware_tools_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmxPath">vmx_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestNameInput">alternate_guest_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotationInput">annotation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelayInput">boot_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelayInput">boot_retry_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabledInput">boot_retry_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdromInput">cdrom_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cloneInput">clone_input</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabledInput">cpu_hot_add_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabledInput">cpu_hot_remove_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimitInput">cpu_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabledInput">cpu_performance_counters_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservationInput">cpu_reservation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCountInput">cpu_share_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevelInput">cpu_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributesInput">custom_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterIdInput">datastore_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreIdInput">datastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.diskInput">disk_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabledInput">efi_secure_boot_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuidInput">enable_disk_uuid_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLoggingInput">enable_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviModeInput">ept_rvi_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigInput">extra_config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequiredInput">extra_config_reboot_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmwareInput">firmware_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOffInput">force_power_off_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIdInput">guest_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersionInput">hardware_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemIdInput">host_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvModeInput">hv_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCountInput">ide_controller_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIpsInput">ignored_guest_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivityInput">latency_sensitivity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabledInput">memory_hot_add_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryInput">memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimitInput">memory_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationInput">memory_reservation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationLockedToMaxInput">memory_reservation_locked_to_max_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCountInput">memory_share_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevelInput">memory_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeoutInput">migrate_wait_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabledInput">nested_hv_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterfaceInput">network_interface_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocketInput">num_cores_per_socket_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpusInput">num_cpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeployInput">ovf_deploy_input</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceIdInput">pci_device_id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeoutInput">poweron_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTriggerInput">replace_trigger_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolIdInput">resource_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOnInput">run_tools_scripts_after_power_on_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResumeInput">run_tools_scripts_after_resume_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestRebootInput">run_tools_scripts_before_guest_reboot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput">run_tools_scripts_before_guest_shutdown_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput">run_tools_scripts_before_guest_standby_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCountInput">sata_controller_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharingInput">scsi_bus_sharing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCountInput">scsi_controller_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiTypeInput">scsi_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeoutInput">shutdown_wait_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyIdInput">storage_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicyInput">swap_placement_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostInput">sync_time_with_host_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodicallyInput">sync_time_with_host_periodically_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicyInput">tools_upgrade_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappInput">vapp_input</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabledInput">vbs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabledInput">vvtd_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeoutInput">wait_for_guest_ip_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutableInput">wait_for_guest_net_routable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeoutInput">wait_for_guest_net_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestName">alternate_guest_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotation">annotation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelay">boot_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelay">boot_retry_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabled">boot_retry_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabled">cpu_hot_add_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabled">cpu_hot_remove_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimit">cpu_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabled">cpu_performance_counters_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservation">cpu_reservation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCount">cpu_share_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevel">cpu_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterId">datastore_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreId">datastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabled">efi_secure_boot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuid">enable_disk_uuid</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviMode">ept_rvi_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfig">extra_config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequired">extra_config_reboot_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmware">firmware</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOff">force_power_off</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestId">guest_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersion">hardware_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemId">host_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvMode">hv_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCount">ide_controller_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIps">ignored_guest_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivity">latency_sensitivity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabled">memory_hot_add_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimit">memory_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservation">memory_reservation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationLockedToMax">memory_reservation_locked_to_max</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCount">memory_share_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevel">memory_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeout">migrate_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabled">nested_hv_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocket">num_cores_per_socket</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpus">num_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceId">pci_device_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeout">poweron_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTrigger">replace_trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolId">resource_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOn">run_tools_scripts_after_power_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResume">run_tools_scripts_after_resume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestReboot">run_tools_scripts_before_guest_reboot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdown">run_tools_scripts_before_guest_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandby">run_tools_scripts_before_guest_standby</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCount">sata_controller_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharing">scsi_bus_sharing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCount">scsi_controller_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiType">scsi_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeout">shutdown_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyId">storage_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicy">swap_placement_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHost">sync_time_with_host</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodically">sync_time_with_host_periodically</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicy">tools_upgrade_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabled">vbs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabled">vvtd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeout">wait_for_guest_ip_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutable">wait_for_guest_net_routable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeout">wait_for_guest_net_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cdrom`<sup>Required</sup> <a name="cdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdrom"></a>

```python
cdrom: VirtualMachineCdromList
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList">VirtualMachineCdromList</a>

---

##### `change_version`<sup>Required</sup> <a name="change_version" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.changeVersion"></a>

```python
change_version: str
```

- *Type:* str

---

##### `clone`<sup>Required</sup> <a name="clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.clone"></a>

```python
clone: VirtualMachineCloneOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference">VirtualMachineCloneOutputReference</a>

---

##### `default_ip_address`<sup>Required</sup> <a name="default_ip_address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.defaultIpAddress"></a>

```python
default_ip_address: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.disk"></a>

```python
disk: VirtualMachineDiskList
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList">VirtualMachineDiskList</a>

---

##### `guest_ip_addresses`<sup>Required</sup> <a name="guest_ip_addresses" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIpAddresses"></a>

```python
guest_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `imported`<sup>Required</sup> <a name="imported" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.imported"></a>

```python
imported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `moid`<sup>Required</sup> <a name="moid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.moid"></a>

```python
moid: str
```

- *Type:* str

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterface"></a>

```python
network_interface: VirtualMachineNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList">VirtualMachineNetworkInterfaceList</a>

---

##### `ovf_deploy`<sup>Required</sup> <a name="ovf_deploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeploy"></a>

```python
ovf_deploy: VirtualMachineOvfDeployOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference">VirtualMachineOvfDeployOutputReference</a>

---

##### `power_state`<sup>Required</sup> <a name="power_state" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.powerState"></a>

```python
power_state: str
```

- *Type:* str

---

##### `reboot_required`<sup>Required</sup> <a name="reboot_required" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.rebootRequired"></a>

```python
reboot_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `vapp`<sup>Required</sup> <a name="vapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vapp"></a>

```python
vapp: VirtualMachineVappOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference">VirtualMachineVappOutputReference</a>

---

##### `vapp_transport`<sup>Required</sup> <a name="vapp_transport" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappTransport"></a>

```python
vapp_transport: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vmware_tools_status`<sup>Required</sup> <a name="vmware_tools_status" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmwareToolsStatus"></a>

```python
vmware_tools_status: str
```

- *Type:* str

---

##### `vmx_path`<sup>Required</sup> <a name="vmx_path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmxPath"></a>

```python
vmx_path: str
```

- *Type:* str

---

##### `alternate_guest_name_input`<sup>Optional</sup> <a name="alternate_guest_name_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestNameInput"></a>

```python
alternate_guest_name_input: str
```

- *Type:* str

---

##### `annotation_input`<sup>Optional</sup> <a name="annotation_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotationInput"></a>

```python
annotation_input: str
```

- *Type:* str

---

##### `boot_delay_input`<sup>Optional</sup> <a name="boot_delay_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelayInput"></a>

```python
boot_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_retry_delay_input`<sup>Optional</sup> <a name="boot_retry_delay_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelayInput"></a>

```python
boot_retry_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_retry_enabled_input`<sup>Optional</sup> <a name="boot_retry_enabled_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabledInput"></a>

```python
boot_retry_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cdrom_input`<sup>Optional</sup> <a name="cdrom_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdromInput"></a>

```python
cdrom_input: typing.Union[IResolvable, typing.List[VirtualMachineCdrom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>]]

---

##### `clone_input`<sup>Optional</sup> <a name="clone_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cloneInput"></a>

```python
clone_input: VirtualMachineClone
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

---

##### `cpu_hot_add_enabled_input`<sup>Optional</sup> <a name="cpu_hot_add_enabled_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabledInput"></a>

```python
cpu_hot_add_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_hot_remove_enabled_input`<sup>Optional</sup> <a name="cpu_hot_remove_enabled_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabledInput"></a>

```python
cpu_hot_remove_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_limit_input`<sup>Optional</sup> <a name="cpu_limit_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimitInput"></a>

```python
cpu_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_performance_counters_enabled_input`<sup>Optional</sup> <a name="cpu_performance_counters_enabled_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabledInput"></a>

```python
cpu_performance_counters_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_reservation_input`<sup>Optional</sup> <a name="cpu_reservation_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservationInput"></a>

```python
cpu_reservation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_share_count_input`<sup>Optional</sup> <a name="cpu_share_count_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCountInput"></a>

```python
cpu_share_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_share_level_input`<sup>Optional</sup> <a name="cpu_share_level_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevelInput"></a>

```python
cpu_share_level_input: str
```

- *Type:* str

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributesInput"></a>

```python
custom_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `datastore_cluster_id_input`<sup>Optional</sup> <a name="datastore_cluster_id_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterIdInput"></a>

```python
datastore_cluster_id_input: str
```

- *Type:* str

---

##### `datastore_id_input`<sup>Optional</sup> <a name="datastore_id_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreIdInput"></a>

```python
datastore_id_input: str
```

- *Type:* str

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.diskInput"></a>

```python
disk_input: typing.Union[IResolvable, typing.List[VirtualMachineDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>]]

---

##### `efi_secure_boot_enabled_input`<sup>Optional</sup> <a name="efi_secure_boot_enabled_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabledInput"></a>

```python
efi_secure_boot_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_disk_uuid_input`<sup>Optional</sup> <a name="enable_disk_uuid_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuidInput"></a>

```python
enable_disk_uuid_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging_input`<sup>Optional</sup> <a name="enable_logging_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLoggingInput"></a>

```python
enable_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ept_rvi_mode_input`<sup>Optional</sup> <a name="ept_rvi_mode_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviModeInput"></a>

```python
ept_rvi_mode_input: str
```

- *Type:* str

---

##### `extra_config_input`<sup>Optional</sup> <a name="extra_config_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigInput"></a>

```python
extra_config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `extra_config_reboot_required_input`<sup>Optional</sup> <a name="extra_config_reboot_required_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequiredInput"></a>

```python
extra_config_reboot_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firmware_input`<sup>Optional</sup> <a name="firmware_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmwareInput"></a>

```python
firmware_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `force_power_off_input`<sup>Optional</sup> <a name="force_power_off_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOffInput"></a>

```python
force_power_off_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `guest_id_input`<sup>Optional</sup> <a name="guest_id_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIdInput"></a>

```python
guest_id_input: str
```

- *Type:* str

---

##### `hardware_version_input`<sup>Optional</sup> <a name="hardware_version_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersionInput"></a>

```python
hardware_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_system_id_input`<sup>Optional</sup> <a name="host_system_id_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemIdInput"></a>

```python
host_system_id_input: str
```

- *Type:* str

---

##### `hv_mode_input`<sup>Optional</sup> <a name="hv_mode_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvModeInput"></a>

```python
hv_mode_input: str
```

- *Type:* str

---

##### `ide_controller_count_input`<sup>Optional</sup> <a name="ide_controller_count_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCountInput"></a>

```python
ide_controller_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignored_guest_ips_input`<sup>Optional</sup> <a name="ignored_guest_ips_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIpsInput"></a>

```python
ignored_guest_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `latency_sensitivity_input`<sup>Optional</sup> <a name="latency_sensitivity_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivityInput"></a>

```python
latency_sensitivity_input: str
```

- *Type:* str

---

##### `memory_hot_add_enabled_input`<sup>Optional</sup> <a name="memory_hot_add_enabled_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabledInput"></a>

```python
memory_hot_add_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryInput"></a>

```python
memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_limit_input`<sup>Optional</sup> <a name="memory_limit_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimitInput"></a>

```python
memory_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_reservation_input`<sup>Optional</sup> <a name="memory_reservation_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationInput"></a>

```python
memory_reservation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_reservation_locked_to_max_input`<sup>Optional</sup> <a name="memory_reservation_locked_to_max_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationLockedToMaxInput"></a>

```python
memory_reservation_locked_to_max_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `memory_share_count_input`<sup>Optional</sup> <a name="memory_share_count_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCountInput"></a>

```python
memory_share_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_share_level_input`<sup>Optional</sup> <a name="memory_share_level_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevelInput"></a>

```python
memory_share_level_input: str
```

- *Type:* str

---

##### `migrate_wait_timeout_input`<sup>Optional</sup> <a name="migrate_wait_timeout_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeoutInput"></a>

```python
migrate_wait_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nested_hv_enabled_input`<sup>Optional</sup> <a name="nested_hv_enabled_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabledInput"></a>

```python
nested_hv_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_interface_input`<sup>Optional</sup> <a name="network_interface_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterfaceInput"></a>

```python
network_interface_input: typing.Union[IResolvable, typing.List[VirtualMachineNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>]]

---

##### `num_cores_per_socket_input`<sup>Optional</sup> <a name="num_cores_per_socket_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocketInput"></a>

```python
num_cores_per_socket_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_cpus_input`<sup>Optional</sup> <a name="num_cpus_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpusInput"></a>

```python
num_cpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ovf_deploy_input`<sup>Optional</sup> <a name="ovf_deploy_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeployInput"></a>

```python
ovf_deploy_input: VirtualMachineOvfDeploy
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

---

##### `pci_device_id_input`<sup>Optional</sup> <a name="pci_device_id_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceIdInput"></a>

```python
pci_device_id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `poweron_timeout_input`<sup>Optional</sup> <a name="poweron_timeout_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeoutInput"></a>

```python
poweron_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replace_trigger_input`<sup>Optional</sup> <a name="replace_trigger_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTriggerInput"></a>

```python
replace_trigger_input: str
```

- *Type:* str

---

##### `resource_pool_id_input`<sup>Optional</sup> <a name="resource_pool_id_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolIdInput"></a>

```python
resource_pool_id_input: str
```

- *Type:* str

---

##### `run_tools_scripts_after_power_on_input`<sup>Optional</sup> <a name="run_tools_scripts_after_power_on_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOnInput"></a>

```python
run_tools_scripts_after_power_on_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_tools_scripts_after_resume_input`<sup>Optional</sup> <a name="run_tools_scripts_after_resume_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResumeInput"></a>

```python
run_tools_scripts_after_resume_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_tools_scripts_before_guest_reboot_input`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_reboot_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestRebootInput"></a>

```python
run_tools_scripts_before_guest_reboot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_tools_scripts_before_guest_shutdown_input`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_shutdown_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput"></a>

```python
run_tools_scripts_before_guest_shutdown_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_tools_scripts_before_guest_standby_input`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_standby_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput"></a>

```python
run_tools_scripts_before_guest_standby_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sata_controller_count_input`<sup>Optional</sup> <a name="sata_controller_count_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCountInput"></a>

```python
sata_controller_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scsi_bus_sharing_input`<sup>Optional</sup> <a name="scsi_bus_sharing_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharingInput"></a>

```python
scsi_bus_sharing_input: str
```

- *Type:* str

---

##### `scsi_controller_count_input`<sup>Optional</sup> <a name="scsi_controller_count_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCountInput"></a>

```python
scsi_controller_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scsi_type_input`<sup>Optional</sup> <a name="scsi_type_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiTypeInput"></a>

```python
scsi_type_input: str
```

- *Type:* str

---

##### `shutdown_wait_timeout_input`<sup>Optional</sup> <a name="shutdown_wait_timeout_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeoutInput"></a>

```python
shutdown_wait_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_policy_id_input`<sup>Optional</sup> <a name="storage_policy_id_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyIdInput"></a>

```python
storage_policy_id_input: str
```

- *Type:* str

---

##### `swap_placement_policy_input`<sup>Optional</sup> <a name="swap_placement_policy_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicyInput"></a>

```python
swap_placement_policy_input: str
```

- *Type:* str

---

##### `sync_time_with_host_input`<sup>Optional</sup> <a name="sync_time_with_host_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostInput"></a>

```python
sync_time_with_host_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sync_time_with_host_periodically_input`<sup>Optional</sup> <a name="sync_time_with_host_periodically_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodicallyInput"></a>

```python
sync_time_with_host_periodically_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tools_upgrade_policy_input`<sup>Optional</sup> <a name="tools_upgrade_policy_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicyInput"></a>

```python
tools_upgrade_policy_input: str
```

- *Type:* str

---

##### `vapp_input`<sup>Optional</sup> <a name="vapp_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappInput"></a>

```python
vapp_input: VirtualMachineVapp
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

---

##### `vbs_enabled_input`<sup>Optional</sup> <a name="vbs_enabled_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabledInput"></a>

```python
vbs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vvtd_enabled_input`<sup>Optional</sup> <a name="vvtd_enabled_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabledInput"></a>

```python
vvtd_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `wait_for_guest_ip_timeout_input`<sup>Optional</sup> <a name="wait_for_guest_ip_timeout_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeoutInput"></a>

```python
wait_for_guest_ip_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_for_guest_net_routable_input`<sup>Optional</sup> <a name="wait_for_guest_net_routable_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutableInput"></a>

```python
wait_for_guest_net_routable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `wait_for_guest_net_timeout_input`<sup>Optional</sup> <a name="wait_for_guest_net_timeout_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeoutInput"></a>

```python
wait_for_guest_net_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alternate_guest_name`<sup>Required</sup> <a name="alternate_guest_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestName"></a>

```python
alternate_guest_name: str
```

- *Type:* str

---

##### `annotation`<sup>Required</sup> <a name="annotation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotation"></a>

```python
annotation: str
```

- *Type:* str

---

##### `boot_delay`<sup>Required</sup> <a name="boot_delay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelay"></a>

```python
boot_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_retry_delay`<sup>Required</sup> <a name="boot_retry_delay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelay"></a>

```python
boot_retry_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_retry_enabled`<sup>Required</sup> <a name="boot_retry_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabled"></a>

```python
boot_retry_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_hot_add_enabled`<sup>Required</sup> <a name="cpu_hot_add_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabled"></a>

```python
cpu_hot_add_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_hot_remove_enabled`<sup>Required</sup> <a name="cpu_hot_remove_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabled"></a>

```python
cpu_hot_remove_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_limit`<sup>Required</sup> <a name="cpu_limit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimit"></a>

```python
cpu_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_performance_counters_enabled`<sup>Required</sup> <a name="cpu_performance_counters_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabled"></a>

```python
cpu_performance_counters_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_reservation`<sup>Required</sup> <a name="cpu_reservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservation"></a>

```python
cpu_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_share_count`<sup>Required</sup> <a name="cpu_share_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCount"></a>

```python
cpu_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_share_level`<sup>Required</sup> <a name="cpu_share_level" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevel"></a>

```python
cpu_share_level: str
```

- *Type:* str

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `datastore_cluster_id`<sup>Required</sup> <a name="datastore_cluster_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterId"></a>

```python
datastore_cluster_id: str
```

- *Type:* str

---

##### `datastore_id`<sup>Required</sup> <a name="datastore_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreId"></a>

```python
datastore_id: str
```

- *Type:* str

---

##### `efi_secure_boot_enabled`<sup>Required</sup> <a name="efi_secure_boot_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabled"></a>

```python
efi_secure_boot_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_disk_uuid`<sup>Required</sup> <a name="enable_disk_uuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuid"></a>

```python
enable_disk_uuid: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ept_rvi_mode`<sup>Required</sup> <a name="ept_rvi_mode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviMode"></a>

```python
ept_rvi_mode: str
```

- *Type:* str

---

##### `extra_config`<sup>Required</sup> <a name="extra_config" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfig"></a>

```python
extra_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `extra_config_reboot_required`<sup>Required</sup> <a name="extra_config_reboot_required" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequired"></a>

```python
extra_config_reboot_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmware"></a>

```python
firmware: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `force_power_off`<sup>Required</sup> <a name="force_power_off" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOff"></a>

```python
force_power_off: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `guest_id`<sup>Required</sup> <a name="guest_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestId"></a>

```python
guest_id: str
```

- *Type:* str

---

##### `hardware_version`<sup>Required</sup> <a name="hardware_version" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersion"></a>

```python
hardware_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_system_id`<sup>Required</sup> <a name="host_system_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemId"></a>

```python
host_system_id: str
```

- *Type:* str

---

##### `hv_mode`<sup>Required</sup> <a name="hv_mode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvMode"></a>

```python
hv_mode: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ide_controller_count`<sup>Required</sup> <a name="ide_controller_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCount"></a>

```python
ide_controller_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignored_guest_ips`<sup>Required</sup> <a name="ignored_guest_ips" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIps"></a>

```python
ignored_guest_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `latency_sensitivity`<sup>Required</sup> <a name="latency_sensitivity" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivity"></a>

```python
latency_sensitivity: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_hot_add_enabled`<sup>Required</sup> <a name="memory_hot_add_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabled"></a>

```python
memory_hot_add_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `memory_limit`<sup>Required</sup> <a name="memory_limit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimit"></a>

```python
memory_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_reservation`<sup>Required</sup> <a name="memory_reservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservation"></a>

```python
memory_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_reservation_locked_to_max`<sup>Required</sup> <a name="memory_reservation_locked_to_max" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationLockedToMax"></a>

```python
memory_reservation_locked_to_max: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `memory_share_count`<sup>Required</sup> <a name="memory_share_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCount"></a>

```python
memory_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_share_level`<sup>Required</sup> <a name="memory_share_level" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevel"></a>

```python
memory_share_level: str
```

- *Type:* str

---

##### `migrate_wait_timeout`<sup>Required</sup> <a name="migrate_wait_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeout"></a>

```python
migrate_wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nested_hv_enabled`<sup>Required</sup> <a name="nested_hv_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabled"></a>

```python
nested_hv_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `num_cores_per_socket`<sup>Required</sup> <a name="num_cores_per_socket" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocket"></a>

```python
num_cores_per_socket: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_cpus`<sup>Required</sup> <a name="num_cpus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpus"></a>

```python
num_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pci_device_id`<sup>Required</sup> <a name="pci_device_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceId"></a>

```python
pci_device_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `poweron_timeout`<sup>Required</sup> <a name="poweron_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeout"></a>

```python
poweron_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replace_trigger`<sup>Required</sup> <a name="replace_trigger" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTrigger"></a>

```python
replace_trigger: str
```

- *Type:* str

---

##### `resource_pool_id`<sup>Required</sup> <a name="resource_pool_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolId"></a>

```python
resource_pool_id: str
```

- *Type:* str

---

##### `run_tools_scripts_after_power_on`<sup>Required</sup> <a name="run_tools_scripts_after_power_on" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOn"></a>

```python
run_tools_scripts_after_power_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_tools_scripts_after_resume`<sup>Required</sup> <a name="run_tools_scripts_after_resume" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResume"></a>

```python
run_tools_scripts_after_resume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_tools_scripts_before_guest_reboot`<sup>Required</sup> <a name="run_tools_scripts_before_guest_reboot" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestReboot"></a>

```python
run_tools_scripts_before_guest_reboot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_tools_scripts_before_guest_shutdown`<sup>Required</sup> <a name="run_tools_scripts_before_guest_shutdown" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdown"></a>

```python
run_tools_scripts_before_guest_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_tools_scripts_before_guest_standby`<sup>Required</sup> <a name="run_tools_scripts_before_guest_standby" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandby"></a>

```python
run_tools_scripts_before_guest_standby: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sata_controller_count`<sup>Required</sup> <a name="sata_controller_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCount"></a>

```python
sata_controller_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scsi_bus_sharing`<sup>Required</sup> <a name="scsi_bus_sharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharing"></a>

```python
scsi_bus_sharing: str
```

- *Type:* str

---

##### `scsi_controller_count`<sup>Required</sup> <a name="scsi_controller_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCount"></a>

```python
scsi_controller_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scsi_type`<sup>Required</sup> <a name="scsi_type" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiType"></a>

```python
scsi_type: str
```

- *Type:* str

---

##### `shutdown_wait_timeout`<sup>Required</sup> <a name="shutdown_wait_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeout"></a>

```python
shutdown_wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_policy_id`<sup>Required</sup> <a name="storage_policy_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyId"></a>

```python
storage_policy_id: str
```

- *Type:* str

---

##### `swap_placement_policy`<sup>Required</sup> <a name="swap_placement_policy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicy"></a>

```python
swap_placement_policy: str
```

- *Type:* str

---

##### `sync_time_with_host`<sup>Required</sup> <a name="sync_time_with_host" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHost"></a>

```python
sync_time_with_host: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sync_time_with_host_periodically`<sup>Required</sup> <a name="sync_time_with_host_periodically" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodically"></a>

```python
sync_time_with_host_periodically: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tools_upgrade_policy`<sup>Required</sup> <a name="tools_upgrade_policy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicy"></a>

```python
tools_upgrade_policy: str
```

- *Type:* str

---

##### `vbs_enabled`<sup>Required</sup> <a name="vbs_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabled"></a>

```python
vbs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vvtd_enabled`<sup>Required</sup> <a name="vvtd_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabled"></a>

```python
vvtd_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `wait_for_guest_ip_timeout`<sup>Required</sup> <a name="wait_for_guest_ip_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeout"></a>

```python
wait_for_guest_ip_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_for_guest_net_routable`<sup>Required</sup> <a name="wait_for_guest_net_routable" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutable"></a>

```python
wait_for_guest_net_routable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `wait_for_guest_net_timeout`<sup>Required</sup> <a name="wait_for_guest_net_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeout"></a>

```python
wait_for_guest_net_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineCdrom <a name="VirtualMachineCdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineCdrom(
  client_device: typing.Union[bool, IResolvable] = None,
  datastore_id: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.clientDevice">client_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the device should be mapped to a remote client device. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.datastoreId">datastore_id</a></code> | <code>str</code> | The datastore ID the ISO is located on. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.path">path</a></code> | <code>str</code> | The path to the ISO file on the datastore. |

---

##### `client_device`<sup>Optional</sup> <a name="client_device" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.clientDevice"></a>

```python
client_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the device should be mapped to a remote client device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#client_device VirtualMachine#client_device}

---

##### `datastore_id`<sup>Optional</sup> <a name="datastore_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.datastoreId"></a>

```python
datastore_id: str
```

- *Type:* str

The datastore ID the ISO is located on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.path"></a>

```python
path: str
```

- *Type:* str

The path to the ISO file on the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#path VirtualMachine#path}

---

### VirtualMachineClone <a name="VirtualMachineClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineClone(
  template_uuid: str,
  customization_spec: VirtualMachineCloneCustomizationSpec = None,
  customize: VirtualMachineCloneCustomize = None,
  linked_clone: typing.Union[bool, IResolvable] = None,
  ovf_network_map: typing.Mapping[str] = None,
  ovf_storage_map: typing.Mapping[str] = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.templateUuid">template_uuid</a></code> | <code>str</code> | The UUID of the source virtual machine or template. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customizationSpec">customization_spec</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a></code> | customization_spec block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customize">customize</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a></code> | customize block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.linkedClone">linked_clone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to create a linked clone when cloning. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfNetworkMap">ovf_network_map</a></code> | <code>typing.Mapping[str]</code> | Mapping of ovf networks to the networks to use in vSphere. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfStorageMap">ovf_storage_map</a></code> | <code>typing.Mapping[str]</code> | Mapping of ovf storage to the datastores to use in vSphere. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout, in minutes, to wait for the virtual machine clone to complete. |

---

##### `template_uuid`<sup>Required</sup> <a name="template_uuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.templateUuid"></a>

```python
template_uuid: str
```

- *Type:* str

The UUID of the source virtual machine or template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#template_uuid VirtualMachine#template_uuid}

---

##### `customization_spec`<sup>Optional</sup> <a name="customization_spec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customizationSpec"></a>

```python
customization_spec: VirtualMachineCloneCustomizationSpec
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

customization_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#customization_spec VirtualMachine#customization_spec}

---

##### `customize`<sup>Optional</sup> <a name="customize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customize"></a>

```python
customize: VirtualMachineCloneCustomize
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

customize block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#customize VirtualMachine#customize}

---

##### `linked_clone`<sup>Optional</sup> <a name="linked_clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.linkedClone"></a>

```python
linked_clone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to create a linked clone when cloning.

When this option is used, the source VM must have a single snapshot associated with it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#linked_clone VirtualMachine#linked_clone}

---

##### `ovf_network_map`<sup>Optional</sup> <a name="ovf_network_map" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfNetworkMap"></a>

```python
ovf_network_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping of ovf networks to the networks to use in vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ovf_network_map VirtualMachine#ovf_network_map}

---

##### `ovf_storage_map`<sup>Optional</sup> <a name="ovf_storage_map" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfStorageMap"></a>

```python
ovf_storage_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping of ovf storage to the datastores to use in vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ovf_storage_map VirtualMachine#ovf_storage_map}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The timeout, in minutes, to wait for the virtual machine clone to complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

### VirtualMachineCloneCustomizationSpec <a name="VirtualMachineCloneCustomizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineCloneCustomizationSpec(
  id: str,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.id">id</a></code> | <code>str</code> | The unique identifier of the customization specification is its name and is unique per vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.id"></a>

```python
id: str
```

- *Type:* str

The unique identifier of the customization specification is its name and is unique per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#id VirtualMachine#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error.

Setting this value to 0 or a negative value skips the waiter. Default: 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

### VirtualMachineCloneCustomize <a name="VirtualMachineCloneCustomize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineCloneCustomize(
  dns_server_list: typing.List[str] = None,
  dns_suffix_list: typing.List[str] = None,
  ipv4_gateway: str = None,
  ipv6_gateway: str = None,
  linux_options: VirtualMachineCloneCustomizeLinuxOptions = None,
  network_interface: typing.Union[IResolvable, typing.List[VirtualMachineCloneCustomizeNetworkInterface]] = None,
  timeout: typing.Union[int, float] = None,
  windows_options: VirtualMachineCloneCustomizeWindowsOptions = None,
  windows_sysprep_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsServerList">dns_server_list</a></code> | <code>typing.List[str]</code> | The list of DNS servers for a virtual network adapter with a static IP address. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsSuffixList">dns_suffix_list</a></code> | <code>typing.List[str]</code> | A list of DNS search domains to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv4Gateway">ipv4_gateway</a></code> | <code>str</code> | The IPv4 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv6Gateway">ipv6_gateway</a></code> | <code>str</code> | The IPv6 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.linuxOptions">linux_options</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a></code> | linux_options block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsOptions">windows_options</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a></code> | windows_options block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsSysprepText">windows_sysprep_text</a></code> | <code>str</code> | Use this option to specify a windows sysprep file directly. |

---

##### `dns_server_list`<sup>Optional</sup> <a name="dns_server_list" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsServerList"></a>

```python
dns_server_list: typing.List[str]
```

- *Type:* typing.List[str]

The list of DNS servers for a virtual network adapter with a static IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#dns_server_list VirtualMachine#dns_server_list}

---

##### `dns_suffix_list`<sup>Optional</sup> <a name="dns_suffix_list" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsSuffixList"></a>

```python
dns_suffix_list: typing.List[str]
```

- *Type:* typing.List[str]

A list of DNS search domains to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#dns_suffix_list VirtualMachine#dns_suffix_list}

---

##### `ipv4_gateway`<sup>Optional</sup> <a name="ipv4_gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv4Gateway"></a>

```python
ipv4_gateway: str
```

- *Type:* str

The IPv4 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ipv4_gateway VirtualMachine#ipv4_gateway}

---

##### `ipv6_gateway`<sup>Optional</sup> <a name="ipv6_gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv6Gateway"></a>

```python
ipv6_gateway: str
```

- *Type:* str

The IPv6 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ipv6_gateway VirtualMachine#ipv6_gateway}

---

##### `linux_options`<sup>Optional</sup> <a name="linux_options" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.linuxOptions"></a>

```python
linux_options: VirtualMachineCloneCustomizeLinuxOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

linux_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#linux_options VirtualMachine#linux_options}

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.networkInterface"></a>

```python
network_interface: typing.Union[IResolvable, typing.List[VirtualMachineCloneCustomizeNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#network_interface VirtualMachine#network_interface}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error.

Setting this value to 0 or a negative value skips the waiter. Default: 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

##### `windows_options`<sup>Optional</sup> <a name="windows_options" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsOptions"></a>

```python
windows_options: VirtualMachineCloneCustomizeWindowsOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

windows_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#windows_options VirtualMachine#windows_options}

---

##### `windows_sysprep_text`<sup>Optional</sup> <a name="windows_sysprep_text" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsSysprepText"></a>

```python
windows_sysprep_text: str
```

- *Type:* str

Use this option to specify a windows sysprep file directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#windows_sysprep_text VirtualMachine#windows_sysprep_text}

---

### VirtualMachineCloneCustomizeLinuxOptions <a name="VirtualMachineCloneCustomizeLinuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineCloneCustomizeLinuxOptions(
  domain: str,
  host_name: str,
  hw_clock_utc: typing.Union[bool, IResolvable] = None,
  script_text: str = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.domain">domain</a></code> | <code>str</code> | The domain name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hostName">host_name</a></code> | <code>str</code> | The hostname for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hwClockUtc">hw_clock_utc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether or not the hardware clock should be in UTC or not. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.scriptText">script_text</a></code> | <code>str</code> | The customization script to run before and or after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.timeZone">time_zone</a></code> | <code>str</code> | Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.domain"></a>

```python
domain: str
```

- *Type:* str

The domain name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#domain VirtualMachine#domain}

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

The hostname for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#host_name VirtualMachine#host_name}

---

##### `hw_clock_utc`<sup>Optional</sup> <a name="hw_clock_utc" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hwClockUtc"></a>

```python
hw_clock_utc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether or not the hardware clock should be in UTC or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#hw_clock_utc VirtualMachine#hw_clock_utc}

---

##### `script_text`<sup>Optional</sup> <a name="script_text" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.scriptText"></a>

```python
script_text: str
```

- *Type:* str

The customization script to run before and or after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#script_text VirtualMachine#script_text}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#time_zone VirtualMachine#time_zone}

---

### VirtualMachineCloneCustomizeNetworkInterface <a name="VirtualMachineCloneCustomizeNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineCloneCustomizeNetworkInterface(
  dns_domain: str = None,
  dns_server_list: typing.List[str] = None,
  ipv4_address: str = None,
  ipv4_netmask: typing.Union[int, float] = None,
  ipv6_address: str = None,
  ipv6_netmask: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsDomain">dns_domain</a></code> | <code>str</code> | A DNS search domain to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsServerList">dns_server_list</a></code> | <code>typing.List[str]</code> | Network-interface specific DNS settings for Windows operating systems. Ignored on Linux. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | The IPv4 address assigned to this network adapter. If left blank, DHCP is used. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Netmask">ipv4_netmask</a></code> | <code>typing.Union[int, float]</code> | The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Netmask">ipv6_netmask</a></code> | <code>typing.Union[int, float]</code> | The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected. |

---

##### `dns_domain`<sup>Optional</sup> <a name="dns_domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsDomain"></a>

```python
dns_domain: str
```

- *Type:* str

A DNS search domain to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#dns_domain VirtualMachine#dns_domain}

---

##### `dns_server_list`<sup>Optional</sup> <a name="dns_server_list" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsServerList"></a>

```python
dns_server_list: typing.List[str]
```

- *Type:* typing.List[str]

Network-interface specific DNS settings for Windows operating systems. Ignored on Linux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#dns_server_list VirtualMachine#dns_server_list}

---

##### `ipv4_address`<sup>Optional</sup> <a name="ipv4_address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

The IPv4 address assigned to this network adapter. If left blank, DHCP is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ipv4_address VirtualMachine#ipv4_address}

---

##### `ipv4_netmask`<sup>Optional</sup> <a name="ipv4_netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Netmask"></a>

```python
ipv4_netmask: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ipv4_netmask VirtualMachine#ipv4_netmask}

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ipv6_address VirtualMachine#ipv6_address}

---

##### `ipv6_netmask`<sup>Optional</sup> <a name="ipv6_netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Netmask"></a>

```python
ipv6_netmask: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ipv6_netmask VirtualMachine#ipv6_netmask}

---

### VirtualMachineCloneCustomizeWindowsOptions <a name="VirtualMachineCloneCustomizeWindowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineCloneCustomizeWindowsOptions(
  computer_name: str,
  admin_password: str = None,
  auto_logon: typing.Union[bool, IResolvable] = None,
  auto_logon_count: typing.Union[int, float] = None,
  domain_admin_password: str = None,
  domain_admin_user: str = None,
  full_name: str = None,
  join_domain: str = None,
  organization_name: str = None,
  product_key: str = None,
  run_once_command_list: typing.List[str] = None,
  time_zone: typing.Union[int, float] = None,
  workgroup: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.computerName">computer_name</a></code> | <code>str</code> | The host name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.adminPassword">admin_password</a></code> | <code>str</code> | The new administrator password for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogon">auto_logon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether or not the VM automatically logs on as Administrator. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogonCount">auto_logon_count</a></code> | <code>typing.Union[int, float]</code> | Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminPassword">domain_admin_password</a></code> | <code>str</code> | The password of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminUser">domain_admin_user</a></code> | <code>str</code> | The user account of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.fullName">full_name</a></code> | <code>str</code> | The full name of the user of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.joinDomain">join_domain</a></code> | <code>str</code> | The domain that the virtual machine should join. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.organizationName">organization_name</a></code> | <code>str</code> | The organization name this virtual machine is being installed for. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.productKey">product_key</a></code> | <code>str</code> | The product key for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.runOnceCommandList">run_once_command_list</a></code> | <code>typing.List[str]</code> | A list of commands to run at first user logon, after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.timeZone">time_zone</a></code> | <code>typing.Union[int, float]</code> | The new time zone for the virtual machine. This is a sysprep-dictated timezone code. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.workgroup">workgroup</a></code> | <code>str</code> | The workgroup for this virtual machine if not joining a domain. |

---

##### `computer_name`<sup>Required</sup> <a name="computer_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.computerName"></a>

```python
computer_name: str
```

- *Type:* str

The host name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#computer_name VirtualMachine#computer_name}

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

The new administrator password for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#admin_password VirtualMachine#admin_password}

---

##### `auto_logon`<sup>Optional</sup> <a name="auto_logon" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogon"></a>

```python
auto_logon: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether or not the VM automatically logs on as Administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#auto_logon VirtualMachine#auto_logon}

---

##### `auto_logon_count`<sup>Optional</sup> <a name="auto_logon_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogonCount"></a>

```python
auto_logon_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#auto_logon_count VirtualMachine#auto_logon_count}

---

##### `domain_admin_password`<sup>Optional</sup> <a name="domain_admin_password" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminPassword"></a>

```python
domain_admin_password: str
```

- *Type:* str

The password of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#domain_admin_password VirtualMachine#domain_admin_password}

---

##### `domain_admin_user`<sup>Optional</sup> <a name="domain_admin_user" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminUser"></a>

```python
domain_admin_user: str
```

- *Type:* str

The user account of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#domain_admin_user VirtualMachine#domain_admin_user}

---

##### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

The full name of the user of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#full_name VirtualMachine#full_name}

---

##### `join_domain`<sup>Optional</sup> <a name="join_domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.joinDomain"></a>

```python
join_domain: str
```

- *Type:* str

The domain that the virtual machine should join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#join_domain VirtualMachine#join_domain}

---

##### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

The organization name this virtual machine is being installed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#organization_name VirtualMachine#organization_name}

---

##### `product_key`<sup>Optional</sup> <a name="product_key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.productKey"></a>

```python
product_key: str
```

- *Type:* str

The product key for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#product_key VirtualMachine#product_key}

---

##### `run_once_command_list`<sup>Optional</sup> <a name="run_once_command_list" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.runOnceCommandList"></a>

```python
run_once_command_list: typing.List[str]
```

- *Type:* typing.List[str]

A list of commands to run at first user logon, after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#run_once_command_list VirtualMachine#run_once_command_list}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.timeZone"></a>

```python
time_zone: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The new time zone for the virtual machine. This is a sysprep-dictated timezone code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#time_zone VirtualMachine#time_zone}

---

##### `workgroup`<sup>Optional</sup> <a name="workgroup" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.workgroup"></a>

```python
workgroup: str
```

- *Type:* str

The workgroup for this virtual machine if not joining a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#workgroup VirtualMachine#workgroup}

---

### VirtualMachineConfig <a name="VirtualMachineConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_pool_id: str,
  alternate_guest_name: str = None,
  annotation: str = None,
  boot_delay: typing.Union[int, float] = None,
  boot_retry_delay: typing.Union[int, float] = None,
  boot_retry_enabled: typing.Union[bool, IResolvable] = None,
  cdrom: typing.Union[IResolvable, typing.List[VirtualMachineCdrom]] = None,
  clone: VirtualMachineClone = None,
  cpu_hot_add_enabled: typing.Union[bool, IResolvable] = None,
  cpu_hot_remove_enabled: typing.Union[bool, IResolvable] = None,
  cpu_limit: typing.Union[int, float] = None,
  cpu_performance_counters_enabled: typing.Union[bool, IResolvable] = None,
  cpu_reservation: typing.Union[int, float] = None,
  cpu_share_count: typing.Union[int, float] = None,
  cpu_share_level: str = None,
  custom_attributes: typing.Mapping[str] = None,
  datacenter_id: str = None,
  datastore_cluster_id: str = None,
  datastore_id: str = None,
  disk: typing.Union[IResolvable, typing.List[VirtualMachineDisk]] = None,
  efi_secure_boot_enabled: typing.Union[bool, IResolvable] = None,
  enable_disk_uuid: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  ept_rvi_mode: str = None,
  extra_config: typing.Mapping[str] = None,
  extra_config_reboot_required: typing.Union[bool, IResolvable] = None,
  firmware: str = None,
  folder: str = None,
  force_power_off: typing.Union[bool, IResolvable] = None,
  guest_id: str = None,
  hardware_version: typing.Union[int, float] = None,
  host_system_id: str = None,
  hv_mode: str = None,
  id: str = None,
  ide_controller_count: typing.Union[int, float] = None,
  ignored_guest_ips: typing.List[str] = None,
  latency_sensitivity: str = None,
  memory: typing.Union[int, float] = None,
  memory_hot_add_enabled: typing.Union[bool, IResolvable] = None,
  memory_limit: typing.Union[int, float] = None,
  memory_reservation: typing.Union[int, float] = None,
  memory_reservation_locked_to_max: typing.Union[bool, IResolvable] = None,
  memory_share_count: typing.Union[int, float] = None,
  memory_share_level: str = None,
  migrate_wait_timeout: typing.Union[int, float] = None,
  nested_hv_enabled: typing.Union[bool, IResolvable] = None,
  network_interface: typing.Union[IResolvable, typing.List[VirtualMachineNetworkInterface]] = None,
  num_cores_per_socket: typing.Union[int, float] = None,
  num_cpus: typing.Union[int, float] = None,
  ovf_deploy: VirtualMachineOvfDeploy = None,
  pci_device_id: typing.List[str] = None,
  poweron_timeout: typing.Union[int, float] = None,
  replace_trigger: str = None,
  run_tools_scripts_after_power_on: typing.Union[bool, IResolvable] = None,
  run_tools_scripts_after_resume: typing.Union[bool, IResolvable] = None,
  run_tools_scripts_before_guest_reboot: typing.Union[bool, IResolvable] = None,
  run_tools_scripts_before_guest_shutdown: typing.Union[bool, IResolvable] = None,
  run_tools_scripts_before_guest_standby: typing.Union[bool, IResolvable] = None,
  sata_controller_count: typing.Union[int, float] = None,
  scsi_bus_sharing: str = None,
  scsi_controller_count: typing.Union[int, float] = None,
  scsi_type: str = None,
  shutdown_wait_timeout: typing.Union[int, float] = None,
  storage_policy_id: str = None,
  swap_placement_policy: str = None,
  sync_time_with_host: typing.Union[bool, IResolvable] = None,
  sync_time_with_host_periodically: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  tools_upgrade_policy: str = None,
  vapp: VirtualMachineVapp = None,
  vbs_enabled: typing.Union[bool, IResolvable] = None,
  vvtd_enabled: typing.Union[bool, IResolvable] = None,
  wait_for_guest_ip_timeout: typing.Union[int, float] = None,
  wait_for_guest_net_routable: typing.Union[bool, IResolvable] = None,
  wait_for_guest_net_timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.name">name</a></code> | <code>str</code> | The name of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.resourcePoolId">resource_pool_id</a></code> | <code>str</code> | The ID of a resource pool to put the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.alternateGuestName">alternate_guest_name</a></code> | <code>str</code> | The guest name for the operating system when guest_id is otherGuest or otherGuest64. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.annotation">annotation</a></code> | <code>str</code> | User-provided description of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootDelay">boot_delay</a></code> | <code>typing.Union[int, float]</code> | The number of milliseconds to wait before starting the boot sequence. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryDelay">boot_retry_delay</a></code> | <code>typing.Union[int, float]</code> | The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryEnabled">boot_retry_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cdrom">cdrom</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>]]</code> | cdrom block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.clone">clone</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotAddEnabled">cpu_hot_add_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotRemoveEnabled">cpu_hot_remove_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuLimit">cpu_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuPerformanceCountersEnabled">cpu_performance_counters_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable CPU performance counters on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuReservation">cpu_reservation</a></code> | <code>typing.Union[int, float]</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareCount">cpu_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to cpu for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareLevel">cpu_share_level</a></code> | <code>str</code> | The allocation level for cpu resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | The ID of the datacenter where the VM is to be created. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreClusterId">datastore_cluster_id</a></code> | <code>str</code> | The ID of a datastore cluster to put the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreId">datastore_id</a></code> | <code>str</code> | The ID of the virtual machine's datastore. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.disk">disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>]]</code> | disk block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.efiSecureBootEnabled">efi_secure_boot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When the boot type set in firmware is efi, this enables EFI secure boot. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableDiskUuid">enable_disk_uuid</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable logging on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.eptRviMode">ept_rvi_mode</a></code> | <code>str</code> | The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfig">extra_config</a></code> | <code>typing.Mapping[str]</code> | Extra configuration data for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfigRebootRequired">extra_config_reboot_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the virtual machine to be rebooted when a change to `extra_config` occurs. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.firmware">firmware</a></code> | <code>str</code> | The firmware interface to use on the virtual machine. Can be one of bios or efi. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.folder">folder</a></code> | <code>str</code> | The name of the folder to locate the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forcePowerOff">force_power_off</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true to force power-off a virtual machine if a graceful guest shutdown failed for a necessary operation. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.guestId">guest_id</a></code> | <code>str</code> | The guest ID for the operating system. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hardwareVersion">hardware_version</a></code> | <code>typing.Union[int, float]</code> | The hardware version for the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hostSystemId">host_system_id</a></code> | <code>str</code> | The ID of an optional host system to pin the virtual machine to. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hvMode">hv_mode</a></code> | <code>str</code> | The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#id VirtualMachine#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ideControllerCount">ide_controller_count</a></code> | <code>typing.Union[int, float]</code> | The number of IDE controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ignoredGuestIps">ignored_guest_ips</a></code> | <code>typing.List[str]</code> | List of IP addresses and CIDR networks to ignore while waiting for an IP. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.latencySensitivity">latency_sensitivity</a></code> | <code>str</code> | Controls the scheduling delay of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | The size of the virtual machine's memory, in MB. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryHotAddEnabled">memory_hot_add_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow memory to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryLimit">memory_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservation">memory_reservation</a></code> | <code>typing.Union[int, float]</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservationLockedToMax">memory_reservation_locked_to_max</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareCount">memory_share_count</a></code> | <code>typing.Union[int, float]</code> | The amount of shares to allocate to memory for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareLevel">memory_share_level</a></code> | <code>str</code> | The allocation level for memory resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.migrateWaitTimeout">migrate_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in minutes, to wait for a vMotion operation to complete before failing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.nestedHvEnabled">nested_hv_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCoresPerSocket">num_cores_per_socket</a></code> | <code>typing.Union[int, float]</code> | The number of cores to distribute amongst the CPUs in this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCpus">num_cpus</a></code> | <code>typing.Union[int, float]</code> | The number of virtual processors to assign to this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ovfDeploy">ovf_deploy</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a></code> | ovf_deploy block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.pciDeviceId">pci_device_id</a></code> | <code>typing.List[str]</code> | A list of PCI passthrough devices. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.poweronTimeout">poweron_timeout</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in seconds, that we will be trying to power on a VM. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.replaceTrigger">replace_trigger</a></code> | <code>str</code> | Triggers replacement of resource whenever it changes. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterPowerOn">run_tools_scripts_after_power_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts after virtual machine power-on when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterResume">run_tools_scripts_after_resume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts after virtual machine resume when when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot">run_tools_scripts_before_guest_reboot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts before guest operating system reboot when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown">run_tools_scripts_before_guest_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts before guest operating system shutdown when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby">run_tools_scripts_before_guest_standby</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the run of scripts before guest operating system standby when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.sataControllerCount">sata_controller_count</a></code> | <code>typing.Union[int, float]</code> | The number of SATA controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiBusSharing">scsi_bus_sharing</a></code> | <code>str</code> | Mode for sharing the SCSI bus. The modes are physicalSharing, virtualSharing, and noSharing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiControllerCount">scsi_controller_count</a></code> | <code>typing.Union[int, float]</code> | The number of SCSI controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiType">scsi_type</a></code> | <code>str</code> | The type of SCSI bus this virtual machine will have. Can be one of lsilogic, lsilogic-sas or pvscsi. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.shutdownWaitTimeout">shutdown_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in minutes, to wait for shutdown when making necessary updates to the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.storagePolicyId">storage_policy_id</a></code> | <code>str</code> | The ID of the storage policy to assign to the virtual machine home directory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.swapPlacementPolicy">swap_placement_policy</a></code> | <code>str</code> | The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHost">sync_time_with_host</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable guest clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHostPeriodically">sync_time_with_host_periodically</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable periodic clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.toolsUpgradePolicy">tools_upgrade_policy</a></code> | <code>str</code> | Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vapp">vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a></code> | vapp block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vbsEnabled">vbs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to specify if Virtualization-based security is enabled for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vvtdEnabled">vvtd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestIpTimeout">wait_for_guest_ip_timeout</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in minutes, to wait for an available IP address on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetRoutable">wait_for_guest_net_routable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not the guest network waiter waits for a routable address. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetTimeout">wait_for_guest_net_timeout</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in minutes, to wait for an available IP address on this virtual machine. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#name VirtualMachine#name}

---

##### `resource_pool_id`<sup>Required</sup> <a name="resource_pool_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.resourcePoolId"></a>

```python
resource_pool_id: str
```

- *Type:* str

The ID of a resource pool to put the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#resource_pool_id VirtualMachine#resource_pool_id}

---

##### `alternate_guest_name`<sup>Optional</sup> <a name="alternate_guest_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.alternateGuestName"></a>

```python
alternate_guest_name: str
```

- *Type:* str

The guest name for the operating system when guest_id is otherGuest or otherGuest64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#alternate_guest_name VirtualMachine#alternate_guest_name}

---

##### `annotation`<sup>Optional</sup> <a name="annotation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.annotation"></a>

```python
annotation: str
```

- *Type:* str

User-provided description of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#annotation VirtualMachine#annotation}

---

##### `boot_delay`<sup>Optional</sup> <a name="boot_delay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootDelay"></a>

```python
boot_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of milliseconds to wait before starting the boot sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#boot_delay VirtualMachine#boot_delay}

---

##### `boot_retry_delay`<sup>Optional</sup> <a name="boot_retry_delay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryDelay"></a>

```python
boot_retry_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#boot_retry_delay VirtualMachine#boot_retry_delay}

---

##### `boot_retry_enabled`<sup>Optional</sup> <a name="boot_retry_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryEnabled"></a>

```python
boot_retry_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#boot_retry_enabled VirtualMachine#boot_retry_enabled}

---

##### `cdrom`<sup>Optional</sup> <a name="cdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cdrom"></a>

```python
cdrom: typing.Union[IResolvable, typing.List[VirtualMachineCdrom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>]]

cdrom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#cdrom VirtualMachine#cdrom}

---

##### `clone`<sup>Optional</sup> <a name="clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.clone"></a>

```python
clone: VirtualMachineClone
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#clone VirtualMachine#clone}

---

##### `cpu_hot_add_enabled`<sup>Optional</sup> <a name="cpu_hot_add_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotAddEnabled"></a>

```python
cpu_hot_add_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#cpu_hot_add_enabled VirtualMachine#cpu_hot_add_enabled}

---

##### `cpu_hot_remove_enabled`<sup>Optional</sup> <a name="cpu_hot_remove_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotRemoveEnabled"></a>

```python
cpu_hot_remove_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#cpu_hot_remove_enabled VirtualMachine#cpu_hot_remove_enabled}

---

##### `cpu_limit`<sup>Optional</sup> <a name="cpu_limit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuLimit"></a>

```python
cpu_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#cpu_limit VirtualMachine#cpu_limit}

---

##### `cpu_performance_counters_enabled`<sup>Optional</sup> <a name="cpu_performance_counters_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuPerformanceCountersEnabled"></a>

```python
cpu_performance_counters_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable CPU performance counters on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#cpu_performance_counters_enabled VirtualMachine#cpu_performance_counters_enabled}

---

##### `cpu_reservation`<sup>Optional</sup> <a name="cpu_reservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuReservation"></a>

```python
cpu_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#cpu_reservation VirtualMachine#cpu_reservation}

---

##### `cpu_share_count`<sup>Optional</sup> <a name="cpu_share_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareCount"></a>

```python
cpu_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of shares to allocate to cpu for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#cpu_share_count VirtualMachine#cpu_share_count}

---

##### `cpu_share_level`<sup>Optional</sup> <a name="cpu_share_level" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareLevel"></a>

```python
cpu_share_level: str
```

- *Type:* str

The allocation level for cpu resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#cpu_share_level VirtualMachine#cpu_share_level}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#custom_attributes VirtualMachine#custom_attributes}

---

##### `datacenter_id`<sup>Optional</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

The ID of the datacenter where the VM is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#datacenter_id VirtualMachine#datacenter_id}

---

##### `datastore_cluster_id`<sup>Optional</sup> <a name="datastore_cluster_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreClusterId"></a>

```python
datastore_cluster_id: str
```

- *Type:* str

The ID of a datastore cluster to put the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#datastore_cluster_id VirtualMachine#datastore_cluster_id}

---

##### `datastore_id`<sup>Optional</sup> <a name="datastore_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreId"></a>

```python
datastore_id: str
```

- *Type:* str

The ID of the virtual machine's datastore.

The virtual machine configuration is placed here, along with any virtual disks that are created without datastores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.disk"></a>

```python
disk: typing.Union[IResolvable, typing.List[VirtualMachineDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>]]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#disk VirtualMachine#disk}

---

##### `efi_secure_boot_enabled`<sup>Optional</sup> <a name="efi_secure_boot_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.efiSecureBootEnabled"></a>

```python
efi_secure_boot_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When the boot type set in firmware is efi, this enables EFI secure boot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#efi_secure_boot_enabled VirtualMachine#efi_secure_boot_enabled}

---

##### `enable_disk_uuid`<sup>Optional</sup> <a name="enable_disk_uuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableDiskUuid"></a>

```python
enable_disk_uuid: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#enable_disk_uuid VirtualMachine#enable_disk_uuid}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable logging on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#enable_logging VirtualMachine#enable_logging}

---

##### `ept_rvi_mode`<sup>Optional</sup> <a name="ept_rvi_mode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.eptRviMode"></a>

```python
ept_rvi_mode: str
```

- *Type:* str

The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ept_rvi_mode VirtualMachine#ept_rvi_mode}

---

##### `extra_config`<sup>Optional</sup> <a name="extra_config" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfig"></a>

```python
extra_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Extra configuration data for this virtual machine.

Can be used to supply advanced parameters not normally in configuration, such as instance metadata, or configuration data for OVF images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#extra_config VirtualMachine#extra_config}

---

##### `extra_config_reboot_required`<sup>Optional</sup> <a name="extra_config_reboot_required" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfigRebootRequired"></a>

```python
extra_config_reboot_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the virtual machine to be rebooted when a change to `extra_config` occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#extra_config_reboot_required VirtualMachine#extra_config_reboot_required}

---

##### `firmware`<sup>Optional</sup> <a name="firmware" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.firmware"></a>

```python
firmware: str
```

- *Type:* str

The firmware interface to use on the virtual machine. Can be one of bios or efi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#firmware VirtualMachine#firmware}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

The name of the folder to locate the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#folder VirtualMachine#folder}

---

##### `force_power_off`<sup>Optional</sup> <a name="force_power_off" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forcePowerOff"></a>

```python
force_power_off: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true to force power-off a virtual machine if a graceful guest shutdown failed for a necessary operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#force_power_off VirtualMachine#force_power_off}

---

##### `guest_id`<sup>Optional</sup> <a name="guest_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.guestId"></a>

```python
guest_id: str
```

- *Type:* str

The guest ID for the operating system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#guest_id VirtualMachine#guest_id}

---

##### `hardware_version`<sup>Optional</sup> <a name="hardware_version" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hardwareVersion"></a>

```python
hardware_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The hardware version for the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#hardware_version VirtualMachine#hardware_version}

---

##### `host_system_id`<sup>Optional</sup> <a name="host_system_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hostSystemId"></a>

```python
host_system_id: str
```

- *Type:* str

The ID of an optional host system to pin the virtual machine to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#host_system_id VirtualMachine#host_system_id}

---

##### `hv_mode`<sup>Optional</sup> <a name="hv_mode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hvMode"></a>

```python
hv_mode: str
```

- *Type:* str

The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#hv_mode VirtualMachine#hv_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#id VirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ide_controller_count`<sup>Optional</sup> <a name="ide_controller_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ideControllerCount"></a>

```python
ide_controller_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of IDE controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ide_controller_count VirtualMachine#ide_controller_count}

---

##### `ignored_guest_ips`<sup>Optional</sup> <a name="ignored_guest_ips" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ignoredGuestIps"></a>

```python
ignored_guest_ips: typing.List[str]
```

- *Type:* typing.List[str]

List of IP addresses and CIDR networks to ignore while waiting for an IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ignored_guest_ips VirtualMachine#ignored_guest_ips}

---

##### `latency_sensitivity`<sup>Optional</sup> <a name="latency_sensitivity" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.latencySensitivity"></a>

```python
latency_sensitivity: str
```

- *Type:* str

Controls the scheduling delay of the virtual machine.

Use a higher sensitivity for applications that require lower latency, such as VOIP, media player applications, or applications that require frequent access to mouse or keyboard devices. Can be one of low, normal, medium, or high.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#latency_sensitivity VirtualMachine#latency_sensitivity}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the virtual machine's memory, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#memory VirtualMachine#memory}

---

##### `memory_hot_add_enabled`<sup>Optional</sup> <a name="memory_hot_add_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryHotAddEnabled"></a>

```python
memory_hot_add_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow memory to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#memory_hot_add_enabled VirtualMachine#memory_hot_add_enabled}

---

##### `memory_limit`<sup>Optional</sup> <a name="memory_limit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryLimit"></a>

```python
memory_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#memory_limit VirtualMachine#memory_limit}

---

##### `memory_reservation`<sup>Optional</sup> <a name="memory_reservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservation"></a>

```python
memory_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#memory_reservation VirtualMachine#memory_reservation}

---

##### `memory_reservation_locked_to_max`<sup>Optional</sup> <a name="memory_reservation_locked_to_max" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservationLockedToMax"></a>

```python
memory_reservation_locked_to_max: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#memory_reservation_locked_to_max VirtualMachine#memory_reservation_locked_to_max}

---

##### `memory_share_count`<sup>Optional</sup> <a name="memory_share_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareCount"></a>

```python
memory_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of shares to allocate to memory for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#memory_share_count VirtualMachine#memory_share_count}

---

##### `memory_share_level`<sup>Optional</sup> <a name="memory_share_level" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareLevel"></a>

```python
memory_share_level: str
```

- *Type:* str

The allocation level for memory resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#memory_share_level VirtualMachine#memory_share_level}

---

##### `migrate_wait_timeout`<sup>Optional</sup> <a name="migrate_wait_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.migrateWaitTimeout"></a>

```python
migrate_wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time, in minutes, to wait for a vMotion operation to complete before failing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#migrate_wait_timeout VirtualMachine#migrate_wait_timeout}

---

##### `nested_hv_enabled`<sup>Optional</sup> <a name="nested_hv_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.nestedHvEnabled"></a>

```python
nested_hv_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#nested_hv_enabled VirtualMachine#nested_hv_enabled}

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.networkInterface"></a>

```python
network_interface: typing.Union[IResolvable, typing.List[VirtualMachineNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#network_interface VirtualMachine#network_interface}

---

##### `num_cores_per_socket`<sup>Optional</sup> <a name="num_cores_per_socket" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCoresPerSocket"></a>

```python
num_cores_per_socket: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of cores to distribute amongst the CPUs in this virtual machine.

If specified, the value supplied to num_cpus must be evenly divisible by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#num_cores_per_socket VirtualMachine#num_cores_per_socket}

---

##### `num_cpus`<sup>Optional</sup> <a name="num_cpus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCpus"></a>

```python
num_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of virtual processors to assign to this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#num_cpus VirtualMachine#num_cpus}

---

##### `ovf_deploy`<sup>Optional</sup> <a name="ovf_deploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ovfDeploy"></a>

```python
ovf_deploy: VirtualMachineOvfDeploy
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

ovf_deploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ovf_deploy VirtualMachine#ovf_deploy}

---

##### `pci_device_id`<sup>Optional</sup> <a name="pci_device_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.pciDeviceId"></a>

```python
pci_device_id: typing.List[str]
```

- *Type:* typing.List[str]

A list of PCI passthrough devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#pci_device_id VirtualMachine#pci_device_id}

---

##### `poweron_timeout`<sup>Optional</sup> <a name="poweron_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.poweronTimeout"></a>

```python
poweron_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time, in seconds, that we will be trying to power on a VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#poweron_timeout VirtualMachine#poweron_timeout}

---

##### `replace_trigger`<sup>Optional</sup> <a name="replace_trigger" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.replaceTrigger"></a>

```python
replace_trigger: str
```

- *Type:* str

Triggers replacement of resource whenever it changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#replace_trigger VirtualMachine#replace_trigger}

---

##### `run_tools_scripts_after_power_on`<sup>Optional</sup> <a name="run_tools_scripts_after_power_on" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterPowerOn"></a>

```python
run_tools_scripts_after_power_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts after virtual machine power-on when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#run_tools_scripts_after_power_on VirtualMachine#run_tools_scripts_after_power_on}

---

##### `run_tools_scripts_after_resume`<sup>Optional</sup> <a name="run_tools_scripts_after_resume" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterResume"></a>

```python
run_tools_scripts_after_resume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts after virtual machine resume when when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#run_tools_scripts_after_resume VirtualMachine#run_tools_scripts_after_resume}

---

##### `run_tools_scripts_before_guest_reboot`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_reboot" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot"></a>

```python
run_tools_scripts_before_guest_reboot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts before guest operating system reboot when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#run_tools_scripts_before_guest_reboot VirtualMachine#run_tools_scripts_before_guest_reboot}

---

##### `run_tools_scripts_before_guest_shutdown`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_shutdown" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown"></a>

```python
run_tools_scripts_before_guest_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts before guest operating system shutdown when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#run_tools_scripts_before_guest_shutdown VirtualMachine#run_tools_scripts_before_guest_shutdown}

---

##### `run_tools_scripts_before_guest_standby`<sup>Optional</sup> <a name="run_tools_scripts_before_guest_standby" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby"></a>

```python
run_tools_scripts_before_guest_standby: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the run of scripts before guest operating system standby when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#run_tools_scripts_before_guest_standby VirtualMachine#run_tools_scripts_before_guest_standby}

---

##### `sata_controller_count`<sup>Optional</sup> <a name="sata_controller_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.sataControllerCount"></a>

```python
sata_controller_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of SATA controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#sata_controller_count VirtualMachine#sata_controller_count}

---

##### `scsi_bus_sharing`<sup>Optional</sup> <a name="scsi_bus_sharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiBusSharing"></a>

```python
scsi_bus_sharing: str
```

- *Type:* str

Mode for sharing the SCSI bus. The modes are physicalSharing, virtualSharing, and noSharing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#scsi_bus_sharing VirtualMachine#scsi_bus_sharing}

---

##### `scsi_controller_count`<sup>Optional</sup> <a name="scsi_controller_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiControllerCount"></a>

```python
scsi_controller_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of SCSI controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#scsi_controller_count VirtualMachine#scsi_controller_count}

---

##### `scsi_type`<sup>Optional</sup> <a name="scsi_type" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiType"></a>

```python
scsi_type: str
```

- *Type:* str

The type of SCSI bus this virtual machine will have. Can be one of lsilogic, lsilogic-sas or pvscsi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#scsi_type VirtualMachine#scsi_type}

---

##### `shutdown_wait_timeout`<sup>Optional</sup> <a name="shutdown_wait_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.shutdownWaitTimeout"></a>

```python
shutdown_wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time, in minutes, to wait for shutdown when making necessary updates to the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#shutdown_wait_timeout VirtualMachine#shutdown_wait_timeout}

---

##### `storage_policy_id`<sup>Optional</sup> <a name="storage_policy_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.storagePolicyId"></a>

```python
storage_policy_id: str
```

- *Type:* str

The ID of the storage policy to assign to the virtual machine home directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#storage_policy_id VirtualMachine#storage_policy_id}

---

##### `swap_placement_policy`<sup>Optional</sup> <a name="swap_placement_policy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.swapPlacementPolicy"></a>

```python
swap_placement_policy: str
```

- *Type:* str

The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#swap_placement_policy VirtualMachine#swap_placement_policy}

---

##### `sync_time_with_host`<sup>Optional</sup> <a name="sync_time_with_host" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHost"></a>

```python
sync_time_with_host: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable guest clock synchronization with the host.

On vSphere 7.0 U1 and above, with only this setting the clock is synchronized on startup and resume. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#sync_time_with_host VirtualMachine#sync_time_with_host}

---

##### `sync_time_with_host_periodically`<sup>Optional</sup> <a name="sync_time_with_host_periodically" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHostPeriodically"></a>

```python
sync_time_with_host_periodically: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable periodic clock synchronization with the host.

Supported only on vSphere 7.0 U1 and above. On prior versions setting `sync_time_with_host` is enough for periodic synchronization. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#sync_time_with_host_periodically VirtualMachine#sync_time_with_host_periodically}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#tags VirtualMachine#tags}

---

##### `tools_upgrade_policy`<sup>Optional</sup> <a name="tools_upgrade_policy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.toolsUpgradePolicy"></a>

```python
tools_upgrade_policy: str
```

- *Type:* str

Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#tools_upgrade_policy VirtualMachine#tools_upgrade_policy}

---

##### `vapp`<sup>Optional</sup> <a name="vapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vapp"></a>

```python
vapp: VirtualMachineVapp
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

vapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#vapp VirtualMachine#vapp}

---

##### `vbs_enabled`<sup>Optional</sup> <a name="vbs_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vbsEnabled"></a>

```python
vbs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to specify if Virtualization-based security is enabled for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#vbs_enabled VirtualMachine#vbs_enabled}

---

##### `vvtd_enabled`<sup>Optional</sup> <a name="vvtd_enabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vvtdEnabled"></a>

```python
vvtd_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#vvtd_enabled VirtualMachine#vvtd_enabled}

---

##### `wait_for_guest_ip_timeout`<sup>Optional</sup> <a name="wait_for_guest_ip_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestIpTimeout"></a>

```python
wait_for_guest_ip_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time, in minutes, to wait for an available IP address on this virtual machine.

A value less than 1 disables the waiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#wait_for_guest_ip_timeout VirtualMachine#wait_for_guest_ip_timeout}

---

##### `wait_for_guest_net_routable`<sup>Optional</sup> <a name="wait_for_guest_net_routable" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetRoutable"></a>

```python
wait_for_guest_net_routable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not the guest network waiter waits for a routable address.

When false, the waiter does not wait for a default gateway, nor are IP addresses checked against any discovered default gateways as part of its success criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#wait_for_guest_net_routable VirtualMachine#wait_for_guest_net_routable}

---

##### `wait_for_guest_net_timeout`<sup>Optional</sup> <a name="wait_for_guest_net_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetTimeout"></a>

```python
wait_for_guest_net_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time, in minutes, to wait for an available IP address on this virtual machine.

A value less than 1 disables the waiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#wait_for_guest_net_timeout VirtualMachine#wait_for_guest_net_timeout}

---

### VirtualMachineDisk <a name="VirtualMachineDisk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineDisk(
  label: str,
  attach: typing.Union[bool, IResolvable] = None,
  controller_type: str = None,
  datastore_id: str = None,
  disk_mode: str = None,
  disk_sharing: str = None,
  eagerly_scrub: typing.Union[bool, IResolvable] = None,
  io_limit: typing.Union[int, float] = None,
  io_reservation: typing.Union[int, float] = None,
  io_share_count: typing.Union[int, float] = None,
  io_share_level: str = None,
  keep_on_remove: typing.Union[bool, IResolvable] = None,
  path: str = None,
  size: typing.Union[int, float] = None,
  storage_policy_id: str = None,
  thin_provisioned: typing.Union[bool, IResolvable] = None,
  unit_number: typing.Union[int, float] = None,
  write_through: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.label">label</a></code> | <code>str</code> | A unique label for this disk. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.attach">attach</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this is true, the disk is attached instead of created. Implies keep_on_remove. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.controllerType">controller_type</a></code> | <code>str</code> | The type of controller the disk should be connected to. Must be 'scsi', 'sata', or 'ide'. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.datastoreId">datastore_id</a></code> | <code>str</code> | The datastore ID for this virtual disk, if different than the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskMode">disk_mode</a></code> | <code>str</code> | The mode of this this virtual disk for purposes of writes and snapshotting. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskSharing">disk_sharing</a></code> | <code>str</code> | The sharing mode of this virtual disk. Can be one of sharingMultiWriter or sharingNone. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.eagerlyScrub">eagerly_scrub</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The virtual disk file zeroing policy when thin_provision is not true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioLimit">io_limit</a></code> | <code>typing.Union[int, float]</code> | The upper limit of IOPS that this disk can use. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioReservation">io_reservation</a></code> | <code>typing.Union[int, float]</code> | The I/O guarantee that this disk has, in IOPS. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareCount">io_share_count</a></code> | <code>typing.Union[int, float]</code> | The share count for this disk when the share level is custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareLevel">io_share_level</a></code> | <code>str</code> | The share allocation level for this disk. Can be one of low, normal, high, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.keepOnRemove">keep_on_remove</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true to keep the underlying VMDK file when removing this virtual disk from configuration. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.path">path</a></code> | <code>str</code> | The full path of the virtual disk. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.size">size</a></code> | <code>typing.Union[int, float]</code> | The size of the disk, in GB. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.storagePolicyId">storage_policy_id</a></code> | <code>str</code> | The ID of the storage policy to assign to the virtual disk in VM. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.thinProvisioned">thin_provisioned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, this disk is thin provisioned, with space for the file being allocated on an as-needed basis. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.unitNumber">unit_number</a></code> | <code>typing.Union[int, float]</code> | The unique device number for this disk. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.writeThrough">write_through</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, writes for this disk are sent directly to the filesystem immediately instead of being buffered. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.label"></a>

```python
label: str
```

- *Type:* str

A unique label for this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#label VirtualMachine#label}

---

##### `attach`<sup>Optional</sup> <a name="attach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.attach"></a>

```python
attach: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this is true, the disk is attached instead of created. Implies keep_on_remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#attach VirtualMachine#attach}

---

##### `controller_type`<sup>Optional</sup> <a name="controller_type" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.controllerType"></a>

```python
controller_type: str
```

- *Type:* str

The type of controller the disk should be connected to. Must be 'scsi', 'sata', or 'ide'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#controller_type VirtualMachine#controller_type}

---

##### `datastore_id`<sup>Optional</sup> <a name="datastore_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.datastoreId"></a>

```python
datastore_id: str
```

- *Type:* str

The datastore ID for this virtual disk, if different than the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}

---

##### `disk_mode`<sup>Optional</sup> <a name="disk_mode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskMode"></a>

```python
disk_mode: str
```

- *Type:* str

The mode of this this virtual disk for purposes of writes and snapshotting.

Can be one of append, independent_nonpersistent, independent_persistent, nonpersistent, persistent, or undoable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#disk_mode VirtualMachine#disk_mode}

---

##### `disk_sharing`<sup>Optional</sup> <a name="disk_sharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskSharing"></a>

```python
disk_sharing: str
```

- *Type:* str

The sharing mode of this virtual disk. Can be one of sharingMultiWriter or sharingNone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#disk_sharing VirtualMachine#disk_sharing}

---

##### `eagerly_scrub`<sup>Optional</sup> <a name="eagerly_scrub" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.eagerlyScrub"></a>

```python
eagerly_scrub: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The virtual disk file zeroing policy when thin_provision is not true.

The default is false, which lazily-zeros the disk, speeding up thick-provisioned disk creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#eagerly_scrub VirtualMachine#eagerly_scrub}

---

##### `io_limit`<sup>Optional</sup> <a name="io_limit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioLimit"></a>

```python
io_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The upper limit of IOPS that this disk can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#io_limit VirtualMachine#io_limit}

---

##### `io_reservation`<sup>Optional</sup> <a name="io_reservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioReservation"></a>

```python
io_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The I/O guarantee that this disk has, in IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#io_reservation VirtualMachine#io_reservation}

---

##### `io_share_count`<sup>Optional</sup> <a name="io_share_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareCount"></a>

```python
io_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The share count for this disk when the share level is custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#io_share_count VirtualMachine#io_share_count}

---

##### `io_share_level`<sup>Optional</sup> <a name="io_share_level" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareLevel"></a>

```python
io_share_level: str
```

- *Type:* str

The share allocation level for this disk. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#io_share_level VirtualMachine#io_share_level}

---

##### `keep_on_remove`<sup>Optional</sup> <a name="keep_on_remove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.keepOnRemove"></a>

```python
keep_on_remove: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true to keep the underlying VMDK file when removing this virtual disk from configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#keep_on_remove VirtualMachine#keep_on_remove}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.path"></a>

```python
path: str
```

- *Type:* str

The full path of the virtual disk.

This can only be provided if attach is set to true, otherwise it is a read-only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#path VirtualMachine#path}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the disk, in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#size VirtualMachine#size}

---

##### `storage_policy_id`<sup>Optional</sup> <a name="storage_policy_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.storagePolicyId"></a>

```python
storage_policy_id: str
```

- *Type:* str

The ID of the storage policy to assign to the virtual disk in VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#storage_policy_id VirtualMachine#storage_policy_id}

---

##### `thin_provisioned`<sup>Optional</sup> <a name="thin_provisioned" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.thinProvisioned"></a>

```python
thin_provisioned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, this disk is thin provisioned, with space for the file being allocated on an as-needed basis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#thin_provisioned VirtualMachine#thin_provisioned}

---

##### `unit_number`<sup>Optional</sup> <a name="unit_number" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.unitNumber"></a>

```python
unit_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The unique device number for this disk.

This number determines where on the SCSI bus this device will be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#unit_number VirtualMachine#unit_number}

---

##### `write_through`<sup>Optional</sup> <a name="write_through" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.writeThrough"></a>

```python
write_through: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, writes for this disk are sent directly to the filesystem immediately instead of being buffered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#write_through VirtualMachine#write_through}

---

### VirtualMachineNetworkInterface <a name="VirtualMachineNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineNetworkInterface(
  network_id: str,
  adapter_type: str = None,
  bandwidth_limit: typing.Union[int, float] = None,
  bandwidth_reservation: typing.Union[int, float] = None,
  bandwidth_share_count: typing.Union[int, float] = None,
  bandwidth_share_level: str = None,
  mac_address: str = None,
  ovf_mapping: str = None,
  physical_function: str = None,
  use_static_mac: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.networkId">network_id</a></code> | <code>str</code> | The ID of the network to connect this network interface to. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.adapterType">adapter_type</a></code> | <code>str</code> | The controller type. Can be one of e1000, e1000e, sriov, vmxnet3, or vrdma. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthLimit">bandwidth_limit</a></code> | <code>typing.Union[int, float]</code> | The upper bandwidth limit of this network interface, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthReservation">bandwidth_reservation</a></code> | <code>typing.Union[int, float]</code> | The bandwidth reservation of this network interface, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareCount">bandwidth_share_count</a></code> | <code>typing.Union[int, float]</code> | The share count for this network interface when the share level is custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareLevel">bandwidth_share_level</a></code> | <code>str</code> | The bandwidth share allocation level for this interface. Can be one of low, normal, high, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.macAddress">mac_address</a></code> | <code>str</code> | The MAC address of this network interface. Can only be manually set if use_static_mac is true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.ovfMapping">ovf_mapping</a></code> | <code>str</code> | Mapping of network interface to OVF network. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.physicalFunction">physical_function</a></code> | <code>str</code> | The ID of the Physical SR-IOV NIC to attach to, e.g. '0000:d8:00.0'. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.useStaticMac">use_static_mac</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the mac_address field is treated as a static MAC address and set accordingly. |

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

The ID of the network to connect this network interface to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#network_id VirtualMachine#network_id}

---

##### `adapter_type`<sup>Optional</sup> <a name="adapter_type" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.adapterType"></a>

```python
adapter_type: str
```

- *Type:* str

The controller type. Can be one of e1000, e1000e, sriov, vmxnet3, or vrdma.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#adapter_type VirtualMachine#adapter_type}

---

##### `bandwidth_limit`<sup>Optional</sup> <a name="bandwidth_limit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthLimit"></a>

```python
bandwidth_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The upper bandwidth limit of this network interface, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#bandwidth_limit VirtualMachine#bandwidth_limit}

---

##### `bandwidth_reservation`<sup>Optional</sup> <a name="bandwidth_reservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthReservation"></a>

```python
bandwidth_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The bandwidth reservation of this network interface, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#bandwidth_reservation VirtualMachine#bandwidth_reservation}

---

##### `bandwidth_share_count`<sup>Optional</sup> <a name="bandwidth_share_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareCount"></a>

```python
bandwidth_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The share count for this network interface when the share level is custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#bandwidth_share_count VirtualMachine#bandwidth_share_count}

---

##### `bandwidth_share_level`<sup>Optional</sup> <a name="bandwidth_share_level" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareLevel"></a>

```python
bandwidth_share_level: str
```

- *Type:* str

The bandwidth share allocation level for this interface. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#bandwidth_share_level VirtualMachine#bandwidth_share_level}

---

##### `mac_address`<sup>Optional</sup> <a name="mac_address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

The MAC address of this network interface. Can only be manually set if use_static_mac is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#mac_address VirtualMachine#mac_address}

---

##### `ovf_mapping`<sup>Optional</sup> <a name="ovf_mapping" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.ovfMapping"></a>

```python
ovf_mapping: str
```

- *Type:* str

Mapping of network interface to OVF network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ovf_mapping VirtualMachine#ovf_mapping}

---

##### `physical_function`<sup>Optional</sup> <a name="physical_function" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.physicalFunction"></a>

```python
physical_function: str
```

- *Type:* str

The ID of the Physical SR-IOV NIC to attach to, e.g. '0000:d8:00.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#physical_function VirtualMachine#physical_function}

---

##### `use_static_mac`<sup>Optional</sup> <a name="use_static_mac" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.useStaticMac"></a>

```python
use_static_mac: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the mac_address field is treated as a static MAC address and set accordingly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#use_static_mac VirtualMachine#use_static_mac}

---

### VirtualMachineOvfDeploy <a name="VirtualMachineOvfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineOvfDeploy(
  allow_unverified_ssl_cert: typing.Union[bool, IResolvable] = None,
  deployment_option: str = None,
  disk_provisioning: str = None,
  enable_hidden_properties: typing.Union[bool, IResolvable] = None,
  ip_allocation_policy: str = None,
  ip_protocol: str = None,
  local_ovf_path: str = None,
  ovf_network_map: typing.Mapping[str] = None,
  remote_ovf_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.allowUnverifiedSslCert">allow_unverified_ssl_cert</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow unverified ssl certificates while deploying ovf/ova from url. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.deploymentOption">deployment_option</a></code> | <code>str</code> | The Deployment option to be chosen. If empty, the default option is used. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.diskProvisioning">disk_provisioning</a></code> | <code>str</code> | An optional disk provisioning. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.enableHiddenProperties">enable_hidden_properties</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow properties with ovf:userConfigurable=false to be set. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipAllocationPolicy">ip_allocation_policy</a></code> | <code>str</code> | The IP allocation policy. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The IP protocol. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.localOvfPath">local_ovf_path</a></code> | <code>str</code> | The absolute path to the ovf/ova file in the local system. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ovfNetworkMap">ovf_network_map</a></code> | <code>typing.Mapping[str]</code> | The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.remoteOvfUrl">remote_ovf_url</a></code> | <code>str</code> | URL to the remote ovf/ova file to be deployed. |

---

##### `allow_unverified_ssl_cert`<sup>Optional</sup> <a name="allow_unverified_ssl_cert" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.allowUnverifiedSslCert"></a>

```python
allow_unverified_ssl_cert: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow unverified ssl certificates while deploying ovf/ova from url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#allow_unverified_ssl_cert VirtualMachine#allow_unverified_ssl_cert}

---

##### `deployment_option`<sup>Optional</sup> <a name="deployment_option" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.deploymentOption"></a>

```python
deployment_option: str
```

- *Type:* str

The Deployment option to be chosen. If empty, the default option is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#deployment_option VirtualMachine#deployment_option}

---

##### `disk_provisioning`<sup>Optional</sup> <a name="disk_provisioning" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.diskProvisioning"></a>

```python
disk_provisioning: str
```

- *Type:* str

An optional disk provisioning.

If set, all the disks in the deployed ovf will have the same specified disk type (e.g., thin provisioned).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#disk_provisioning VirtualMachine#disk_provisioning}

---

##### `enable_hidden_properties`<sup>Optional</sup> <a name="enable_hidden_properties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.enableHiddenProperties"></a>

```python
enable_hidden_properties: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow properties with ovf:userConfigurable=false to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#enable_hidden_properties VirtualMachine#enable_hidden_properties}

---

##### `ip_allocation_policy`<sup>Optional</sup> <a name="ip_allocation_policy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipAllocationPolicy"></a>

```python
ip_allocation_policy: str
```

- *Type:* str

The IP allocation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ip_allocation_policy VirtualMachine#ip_allocation_policy}

---

##### `ip_protocol`<sup>Optional</sup> <a name="ip_protocol" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ip_protocol VirtualMachine#ip_protocol}

---

##### `local_ovf_path`<sup>Optional</sup> <a name="local_ovf_path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.localOvfPath"></a>

```python
local_ovf_path: str
```

- *Type:* str

The absolute path to the ovf/ova file in the local system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#local_ovf_path VirtualMachine#local_ovf_path}

---

##### `ovf_network_map`<sup>Optional</sup> <a name="ovf_network_map" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ovfNetworkMap"></a>

```python
ovf_network_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ovf_network_map VirtualMachine#ovf_network_map}

---

##### `remote_ovf_url`<sup>Optional</sup> <a name="remote_ovf_url" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.remoteOvfUrl"></a>

```python
remote_ovf_url: str
```

- *Type:* str

URL to the remote ovf/ova file to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#remote_ovf_url VirtualMachine#remote_ovf_url}

---

### VirtualMachineVapp <a name="VirtualMachineVapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineVapp(
  properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A map of customizable vApp properties and their values. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of customizable vApp properties and their values.

Allows customization of VMs cloned from OVF templates which have customizable vApp properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#properties VirtualMachine#properties}

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineCdromList <a name="VirtualMachineCdromList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineCdromList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualMachineCdromOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualMachineCdrom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>]]

---


### VirtualMachineCdromOutputReference <a name="VirtualMachineCdromOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineCdromOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetClientDevice">reset_client_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetDatastoreId">reset_datastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_device` <a name="reset_client_device" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetClientDevice"></a>

```python
def reset_client_device() -> None
```

##### `reset_datastore_id` <a name="reset_datastore_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetDatastoreId"></a>

```python
def reset_datastore_id() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.deviceAddress">device_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.key">key</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDeviceInput">client_device_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreIdInput">datastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDevice">client_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreId">datastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_address`<sup>Required</sup> <a name="device_address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.deviceAddress"></a>

```python
device_address: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.key"></a>

```python
key: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_device_input`<sup>Optional</sup> <a name="client_device_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDeviceInput"></a>

```python
client_device_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `datastore_id_input`<sup>Optional</sup> <a name="datastore_id_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreIdInput"></a>

```python
datastore_id_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `client_device`<sup>Required</sup> <a name="client_device" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDevice"></a>

```python
client_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `datastore_id`<sup>Required</sup> <a name="datastore_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreId"></a>

```python
datastore_id: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineCdrom]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>]

---


### VirtualMachineCloneCustomizationSpecOutputReference <a name="VirtualMachineCloneCustomizationSpecOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineCloneCustomizationSpec
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

---


### VirtualMachineCloneCustomizeLinuxOptionsOutputReference <a name="VirtualMachineCloneCustomizeLinuxOptionsOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetHwClockUtc">reset_hw_clock_utc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetScriptText">reset_script_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hw_clock_utc` <a name="reset_hw_clock_utc" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetHwClockUtc"></a>

```python
def reset_hw_clock_utc() -> None
```

##### `reset_script_text` <a name="reset_script_text" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetScriptText"></a>

```python
def reset_script_text() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtcInput">hw_clock_utc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptTextInput">script_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtc">hw_clock_utc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptText">script_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `hw_clock_utc_input`<sup>Optional</sup> <a name="hw_clock_utc_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtcInput"></a>

```python
hw_clock_utc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `script_text_input`<sup>Optional</sup> <a name="script_text_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptTextInput"></a>

```python
script_text_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `hw_clock_utc`<sup>Required</sup> <a name="hw_clock_utc" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtc"></a>

```python
hw_clock_utc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `script_text`<sup>Required</sup> <a name="script_text" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptText"></a>

```python
script_text: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineCloneCustomizeLinuxOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

---


### VirtualMachineCloneCustomizeNetworkInterfaceList <a name="VirtualMachineCloneCustomizeNetworkInterfaceList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualMachineCloneCustomizeNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualMachineCloneCustomizeNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>]]

---


### VirtualMachineCloneCustomizeNetworkInterfaceOutputReference <a name="VirtualMachineCloneCustomizeNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsDomain">reset_dns_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsServerList">reset_dns_server_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Address">reset_ipv4_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Netmask">reset_ipv4_netmask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Address">reset_ipv6_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Netmask">reset_ipv6_netmask</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dns_domain` <a name="reset_dns_domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsDomain"></a>

```python
def reset_dns_domain() -> None
```

##### `reset_dns_server_list` <a name="reset_dns_server_list" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsServerList"></a>

```python
def reset_dns_server_list() -> None
```

##### `reset_ipv4_address` <a name="reset_ipv4_address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Address"></a>

```python
def reset_ipv4_address() -> None
```

##### `reset_ipv4_netmask` <a name="reset_ipv4_netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Netmask"></a>

```python
def reset_ipv4_netmask() -> None
```

##### `reset_ipv6_address` <a name="reset_ipv6_address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Address"></a>

```python
def reset_ipv6_address() -> None
```

##### `reset_ipv6_netmask` <a name="reset_ipv6_netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Netmask"></a>

```python
def reset_ipv6_netmask() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomainInput">dns_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerListInput">dns_server_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4AddressInput">ipv4_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4NetmaskInput">ipv4_netmask_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6AddressInput">ipv6_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6NetmaskInput">ipv6_netmask_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomain">dns_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerList">dns_server_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Netmask">ipv4_netmask</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Netmask">ipv6_netmask</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_domain_input`<sup>Optional</sup> <a name="dns_domain_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomainInput"></a>

```python
dns_domain_input: str
```

- *Type:* str

---

##### `dns_server_list_input`<sup>Optional</sup> <a name="dns_server_list_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerListInput"></a>

```python
dns_server_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv4_address_input`<sup>Optional</sup> <a name="ipv4_address_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4AddressInput"></a>

```python
ipv4_address_input: str
```

- *Type:* str

---

##### `ipv4_netmask_input`<sup>Optional</sup> <a name="ipv4_netmask_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4NetmaskInput"></a>

```python
ipv4_netmask_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_address_input`<sup>Optional</sup> <a name="ipv6_address_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```python
ipv6_address_input: str
```

- *Type:* str

---

##### `ipv6_netmask_input`<sup>Optional</sup> <a name="ipv6_netmask_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6NetmaskInput"></a>

```python
ipv6_netmask_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dns_domain`<sup>Required</sup> <a name="dns_domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomain"></a>

```python
dns_domain: str
```

- *Type:* str

---

##### `dns_server_list`<sup>Required</sup> <a name="dns_server_list" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerList"></a>

```python
dns_server_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

---

##### `ipv4_netmask`<sup>Required</sup> <a name="ipv4_netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Netmask"></a>

```python
ipv4_netmask: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `ipv6_netmask`<sup>Required</sup> <a name="ipv6_netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Netmask"></a>

```python
ipv6_netmask: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineCloneCustomizeNetworkInterface]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>]

---


### VirtualMachineCloneCustomizeOutputReference <a name="VirtualMachineCloneCustomizeOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineCloneCustomizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions">put_linux_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putNetworkInterface">put_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions">put_windows_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsServerList">reset_dns_server_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsSuffixList">reset_dns_suffix_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv4Gateway">reset_ipv4_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv6Gateway">reset_ipv6_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetLinuxOptions">reset_linux_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetNetworkInterface">reset_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsOptions">reset_windows_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsSysprepText">reset_windows_sysprep_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_linux_options` <a name="put_linux_options" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions"></a>

```python
def put_linux_options(
  domain: str,
  host_name: str,
  hw_clock_utc: typing.Union[bool, IResolvable] = None,
  script_text: str = None,
  time_zone: str = None
) -> None
```

###### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions.parameter.domain"></a>

- *Type:* str

The domain name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#domain VirtualMachine#domain}

---

###### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions.parameter.hostName"></a>

- *Type:* str

The hostname for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#host_name VirtualMachine#host_name}

---

###### `hw_clock_utc`<sup>Optional</sup> <a name="hw_clock_utc" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions.parameter.hwClockUtc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether or not the hardware clock should be in UTC or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#hw_clock_utc VirtualMachine#hw_clock_utc}

---

###### `script_text`<sup>Optional</sup> <a name="script_text" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions.parameter.scriptText"></a>

- *Type:* str

The customization script to run before and or after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#script_text VirtualMachine#script_text}

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions.parameter.timeZone"></a>

- *Type:* str

Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#time_zone VirtualMachine#time_zone}

---

##### `put_network_interface` <a name="put_network_interface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putNetworkInterface"></a>

```python
def put_network_interface(
  value: typing.Union[IResolvable, typing.List[VirtualMachineCloneCustomizeNetworkInterface]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putNetworkInterface.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>]]

---

##### `put_windows_options` <a name="put_windows_options" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions"></a>

```python
def put_windows_options(
  computer_name: str,
  admin_password: str = None,
  auto_logon: typing.Union[bool, IResolvable] = None,
  auto_logon_count: typing.Union[int, float] = None,
  domain_admin_password: str = None,
  domain_admin_user: str = None,
  full_name: str = None,
  join_domain: str = None,
  organization_name: str = None,
  product_key: str = None,
  run_once_command_list: typing.List[str] = None,
  time_zone: typing.Union[int, float] = None,
  workgroup: str = None
) -> None
```

###### `computer_name`<sup>Required</sup> <a name="computer_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions.parameter.computerName"></a>

- *Type:* str

The host name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#computer_name VirtualMachine#computer_name}

---

###### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions.parameter.adminPassword"></a>

- *Type:* str

The new administrator password for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#admin_password VirtualMachine#admin_password}

---

###### `auto_logon`<sup>Optional</sup> <a name="auto_logon" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions.parameter.autoLogon"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether or not the VM automatically logs on as Administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#auto_logon VirtualMachine#auto_logon}

---

###### `auto_logon_count`<sup>Optional</sup> <a name="auto_logon_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions.parameter.autoLogonCount"></a>

- *Type:* typing.Union[int, float]

Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#auto_logon_count VirtualMachine#auto_logon_count}

---

###### `domain_admin_password`<sup>Optional</sup> <a name="domain_admin_password" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions.parameter.domainAdminPassword"></a>

- *Type:* str

The password of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#domain_admin_password VirtualMachine#domain_admin_password}

---

###### `domain_admin_user`<sup>Optional</sup> <a name="domain_admin_user" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions.parameter.domainAdminUser"></a>

- *Type:* str

The user account of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#domain_admin_user VirtualMachine#domain_admin_user}

---

###### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions.parameter.fullName"></a>

- *Type:* str

The full name of the user of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#full_name VirtualMachine#full_name}

---

###### `join_domain`<sup>Optional</sup> <a name="join_domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions.parameter.joinDomain"></a>

- *Type:* str

The domain that the virtual machine should join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#join_domain VirtualMachine#join_domain}

---

###### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions.parameter.organizationName"></a>

- *Type:* str

The organization name this virtual machine is being installed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#organization_name VirtualMachine#organization_name}

---

###### `product_key`<sup>Optional</sup> <a name="product_key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions.parameter.productKey"></a>

- *Type:* str

The product key for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#product_key VirtualMachine#product_key}

---

###### `run_once_command_list`<sup>Optional</sup> <a name="run_once_command_list" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions.parameter.runOnceCommandList"></a>

- *Type:* typing.List[str]

A list of commands to run at first user logon, after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#run_once_command_list VirtualMachine#run_once_command_list}

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions.parameter.timeZone"></a>

- *Type:* typing.Union[int, float]

The new time zone for the virtual machine. This is a sysprep-dictated timezone code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#time_zone VirtualMachine#time_zone}

---

###### `workgroup`<sup>Optional</sup> <a name="workgroup" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions.parameter.workgroup"></a>

- *Type:* str

The workgroup for this virtual machine if not joining a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#workgroup VirtualMachine#workgroup}

---

##### `reset_dns_server_list` <a name="reset_dns_server_list" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsServerList"></a>

```python
def reset_dns_server_list() -> None
```

##### `reset_dns_suffix_list` <a name="reset_dns_suffix_list" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsSuffixList"></a>

```python
def reset_dns_suffix_list() -> None
```

##### `reset_ipv4_gateway` <a name="reset_ipv4_gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv4Gateway"></a>

```python
def reset_ipv4_gateway() -> None
```

##### `reset_ipv6_gateway` <a name="reset_ipv6_gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv6Gateway"></a>

```python
def reset_ipv6_gateway() -> None
```

##### `reset_linux_options` <a name="reset_linux_options" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetLinuxOptions"></a>

```python
def reset_linux_options() -> None
```

##### `reset_network_interface` <a name="reset_network_interface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetNetworkInterface"></a>

```python
def reset_network_interface() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_windows_options` <a name="reset_windows_options" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsOptions"></a>

```python
def reset_windows_options() -> None
```

##### `reset_windows_sysprep_text` <a name="reset_windows_sysprep_text" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsSysprepText"></a>

```python
def reset_windows_sysprep_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptions">linux_options</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference">VirtualMachineCloneCustomizeLinuxOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList">VirtualMachineCloneCustomizeNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptions">windows_options</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference">VirtualMachineCloneCustomizeWindowsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerListInput">dns_server_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixListInput">dns_suffix_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4GatewayInput">ipv4_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6GatewayInput">ipv6_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptionsInput">linux_options_input</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterfaceInput">network_interface_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptionsInput">windows_options_input</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepTextInput">windows_sysprep_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerList">dns_server_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixList">dns_suffix_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4Gateway">ipv4_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6Gateway">ipv6_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepText">windows_sysprep_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linux_options`<sup>Required</sup> <a name="linux_options" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptions"></a>

```python
linux_options: VirtualMachineCloneCustomizeLinuxOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference">VirtualMachineCloneCustomizeLinuxOptionsOutputReference</a>

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterface"></a>

```python
network_interface: VirtualMachineCloneCustomizeNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList">VirtualMachineCloneCustomizeNetworkInterfaceList</a>

---

##### `windows_options`<sup>Required</sup> <a name="windows_options" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptions"></a>

```python
windows_options: VirtualMachineCloneCustomizeWindowsOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference">VirtualMachineCloneCustomizeWindowsOptionsOutputReference</a>

---

##### `dns_server_list_input`<sup>Optional</sup> <a name="dns_server_list_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerListInput"></a>

```python
dns_server_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_suffix_list_input`<sup>Optional</sup> <a name="dns_suffix_list_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixListInput"></a>

```python
dns_suffix_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv4_gateway_input`<sup>Optional</sup> <a name="ipv4_gateway_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4GatewayInput"></a>

```python
ipv4_gateway_input: str
```

- *Type:* str

---

##### `ipv6_gateway_input`<sup>Optional</sup> <a name="ipv6_gateway_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6GatewayInput"></a>

```python
ipv6_gateway_input: str
```

- *Type:* str

---

##### `linux_options_input`<sup>Optional</sup> <a name="linux_options_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptionsInput"></a>

```python
linux_options_input: VirtualMachineCloneCustomizeLinuxOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

---

##### `network_interface_input`<sup>Optional</sup> <a name="network_interface_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterfaceInput"></a>

```python
network_interface_input: typing.Union[IResolvable, typing.List[VirtualMachineCloneCustomizeNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>]]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `windows_options_input`<sup>Optional</sup> <a name="windows_options_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptionsInput"></a>

```python
windows_options_input: VirtualMachineCloneCustomizeWindowsOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

---

##### `windows_sysprep_text_input`<sup>Optional</sup> <a name="windows_sysprep_text_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepTextInput"></a>

```python
windows_sysprep_text_input: str
```

- *Type:* str

---

##### `dns_server_list`<sup>Required</sup> <a name="dns_server_list" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerList"></a>

```python
dns_server_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_suffix_list`<sup>Required</sup> <a name="dns_suffix_list" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixList"></a>

```python
dns_suffix_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv4_gateway`<sup>Required</sup> <a name="ipv4_gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4Gateway"></a>

```python
ipv4_gateway: str
```

- *Type:* str

---

##### `ipv6_gateway`<sup>Required</sup> <a name="ipv6_gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6Gateway"></a>

```python
ipv6_gateway: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `windows_sysprep_text`<sup>Required</sup> <a name="windows_sysprep_text" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepText"></a>

```python
windows_sysprep_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineCloneCustomize
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

---


### VirtualMachineCloneCustomizeWindowsOptionsOutputReference <a name="VirtualMachineCloneCustomizeWindowsOptionsOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAdminPassword">reset_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogon">reset_auto_logon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogonCount">reset_auto_logon_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminPassword">reset_domain_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminUser">reset_domain_admin_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetFullName">reset_full_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetJoinDomain">reset_join_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetOrganizationName">reset_organization_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetProductKey">reset_product_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetRunOnceCommandList">reset_run_once_command_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetWorkgroup">reset_workgroup</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_admin_password` <a name="reset_admin_password" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAdminPassword"></a>

```python
def reset_admin_password() -> None
```

##### `reset_auto_logon` <a name="reset_auto_logon" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogon"></a>

```python
def reset_auto_logon() -> None
```

##### `reset_auto_logon_count` <a name="reset_auto_logon_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogonCount"></a>

```python
def reset_auto_logon_count() -> None
```

##### `reset_domain_admin_password` <a name="reset_domain_admin_password" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminPassword"></a>

```python
def reset_domain_admin_password() -> None
```

##### `reset_domain_admin_user` <a name="reset_domain_admin_user" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminUser"></a>

```python
def reset_domain_admin_user() -> None
```

##### `reset_full_name` <a name="reset_full_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetFullName"></a>

```python
def reset_full_name() -> None
```

##### `reset_join_domain` <a name="reset_join_domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetJoinDomain"></a>

```python
def reset_join_domain() -> None
```

##### `reset_organization_name` <a name="reset_organization_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetOrganizationName"></a>

```python
def reset_organization_name() -> None
```

##### `reset_product_key` <a name="reset_product_key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetProductKey"></a>

```python
def reset_product_key() -> None
```

##### `reset_run_once_command_list` <a name="reset_run_once_command_list" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetRunOnceCommandList"></a>

```python
def reset_run_once_command_list() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

##### `reset_workgroup` <a name="reset_workgroup" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetWorkgroup"></a>

```python
def reset_workgroup() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCountInput">auto_logon_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonInput">auto_logon_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerNameInput">computer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPasswordInput">domain_admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUserInput">domain_admin_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomainInput">join_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationNameInput">organization_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKeyInput">product_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandListInput">run_once_command_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroupInput">workgroup_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogon">auto_logon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCount">auto_logon_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerName">computer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPassword">domain_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUser">domain_admin_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomain">join_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKey">product_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandList">run_once_command_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZone">time_zone</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroup">workgroup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `auto_logon_count_input`<sup>Optional</sup> <a name="auto_logon_count_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCountInput"></a>

```python
auto_logon_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_logon_input`<sup>Optional</sup> <a name="auto_logon_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonInput"></a>

```python
auto_logon_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `computer_name_input`<sup>Optional</sup> <a name="computer_name_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerNameInput"></a>

```python
computer_name_input: str
```

- *Type:* str

---

##### `domain_admin_password_input`<sup>Optional</sup> <a name="domain_admin_password_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPasswordInput"></a>

```python
domain_admin_password_input: str
```

- *Type:* str

---

##### `domain_admin_user_input`<sup>Optional</sup> <a name="domain_admin_user_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUserInput"></a>

```python
domain_admin_user_input: str
```

- *Type:* str

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `join_domain_input`<sup>Optional</sup> <a name="join_domain_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomainInput"></a>

```python
join_domain_input: str
```

- *Type:* str

---

##### `organization_name_input`<sup>Optional</sup> <a name="organization_name_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationNameInput"></a>

```python
organization_name_input: str
```

- *Type:* str

---

##### `product_key_input`<sup>Optional</sup> <a name="product_key_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKeyInput"></a>

```python
product_key_input: str
```

- *Type:* str

---

##### `run_once_command_list_input`<sup>Optional</sup> <a name="run_once_command_list_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandListInput"></a>

```python
run_once_command_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `workgroup_input`<sup>Optional</sup> <a name="workgroup_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroupInput"></a>

```python
workgroup_input: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `auto_logon`<sup>Required</sup> <a name="auto_logon" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogon"></a>

```python
auto_logon: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_logon_count`<sup>Required</sup> <a name="auto_logon_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCount"></a>

```python
auto_logon_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `computer_name`<sup>Required</sup> <a name="computer_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerName"></a>

```python
computer_name: str
```

- *Type:* str

---

##### `domain_admin_password`<sup>Required</sup> <a name="domain_admin_password" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPassword"></a>

```python
domain_admin_password: str
```

- *Type:* str

---

##### `domain_admin_user`<sup>Required</sup> <a name="domain_admin_user" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUser"></a>

```python
domain_admin_user: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `join_domain`<sup>Required</sup> <a name="join_domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomain"></a>

```python
join_domain: str
```

- *Type:* str

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `product_key`<sup>Required</sup> <a name="product_key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKey"></a>

```python
product_key: str
```

- *Type:* str

---

##### `run_once_command_list`<sup>Required</sup> <a name="run_once_command_list" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandList"></a>

```python
run_once_command_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZone"></a>

```python
time_zone: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `workgroup`<sup>Required</sup> <a name="workgroup" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroup"></a>

```python
workgroup: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineCloneCustomizeWindowsOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

---


### VirtualMachineCloneOutputReference <a name="VirtualMachineCloneOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineCloneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomizationSpec">put_customization_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize">put_customize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomizationSpec">reset_customization_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomize">reset_customize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetLinkedClone">reset_linked_clone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfNetworkMap">reset_ovf_network_map</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfStorageMap">reset_ovf_storage_map</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_customization_spec` <a name="put_customization_spec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomizationSpec"></a>

```python
def put_customization_spec(
  id: str,
  timeout: typing.Union[int, float] = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomizationSpec.parameter.id"></a>

- *Type:* str

The unique identifier of the customization specification is its name and is unique per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#id VirtualMachine#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomizationSpec.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error.

Setting this value to 0 or a negative value skips the waiter. Default: 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

##### `put_customize` <a name="put_customize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize"></a>

```python
def put_customize(
  dns_server_list: typing.List[str] = None,
  dns_suffix_list: typing.List[str] = None,
  ipv4_gateway: str = None,
  ipv6_gateway: str = None,
  linux_options: VirtualMachineCloneCustomizeLinuxOptions = None,
  network_interface: typing.Union[IResolvable, typing.List[VirtualMachineCloneCustomizeNetworkInterface]] = None,
  timeout: typing.Union[int, float] = None,
  windows_options: VirtualMachineCloneCustomizeWindowsOptions = None,
  windows_sysprep_text: str = None
) -> None
```

###### `dns_server_list`<sup>Optional</sup> <a name="dns_server_list" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize.parameter.dnsServerList"></a>

- *Type:* typing.List[str]

The list of DNS servers for a virtual network adapter with a static IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#dns_server_list VirtualMachine#dns_server_list}

---

###### `dns_suffix_list`<sup>Optional</sup> <a name="dns_suffix_list" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize.parameter.dnsSuffixList"></a>

- *Type:* typing.List[str]

A list of DNS search domains to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#dns_suffix_list VirtualMachine#dns_suffix_list}

---

###### `ipv4_gateway`<sup>Optional</sup> <a name="ipv4_gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize.parameter.ipv4Gateway"></a>

- *Type:* str

The IPv4 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ipv4_gateway VirtualMachine#ipv4_gateway}

---

###### `ipv6_gateway`<sup>Optional</sup> <a name="ipv6_gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize.parameter.ipv6Gateway"></a>

- *Type:* str

The IPv6 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#ipv6_gateway VirtualMachine#ipv6_gateway}

---

###### `linux_options`<sup>Optional</sup> <a name="linux_options" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize.parameter.linuxOptions"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

linux_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#linux_options VirtualMachine#linux_options}

---

###### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize.parameter.networkInterface"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#network_interface VirtualMachine#network_interface}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error.

Setting this value to 0 or a negative value skips the waiter. Default: 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

###### `windows_options`<sup>Optional</sup> <a name="windows_options" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize.parameter.windowsOptions"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

windows_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#windows_options VirtualMachine#windows_options}

---

###### `windows_sysprep_text`<sup>Optional</sup> <a name="windows_sysprep_text" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize.parameter.windowsSysprepText"></a>

- *Type:* str

Use this option to specify a windows sysprep file directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/virtual_machine#windows_sysprep_text VirtualMachine#windows_sysprep_text}

---

##### `reset_customization_spec` <a name="reset_customization_spec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomizationSpec"></a>

```python
def reset_customization_spec() -> None
```

##### `reset_customize` <a name="reset_customize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomize"></a>

```python
def reset_customize() -> None
```

##### `reset_linked_clone` <a name="reset_linked_clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetLinkedClone"></a>

```python
def reset_linked_clone() -> None
```

##### `reset_ovf_network_map` <a name="reset_ovf_network_map" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfNetworkMap"></a>

```python
def reset_ovf_network_map() -> None
```

##### `reset_ovf_storage_map` <a name="reset_ovf_storage_map" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfStorageMap"></a>

```python
def reset_ovf_storage_map() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpec">customization_spec</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference">VirtualMachineCloneCustomizationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customize">customize</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference">VirtualMachineCloneCustomizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpecInput">customization_spec_input</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizeInput">customize_input</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedCloneInput">linked_clone_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMapInput">ovf_network_map_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMapInput">ovf_storage_map_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuidInput">template_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedClone">linked_clone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMap">ovf_network_map</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMap">ovf_storage_map</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuid">template_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customization_spec`<sup>Required</sup> <a name="customization_spec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpec"></a>

```python
customization_spec: VirtualMachineCloneCustomizationSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference">VirtualMachineCloneCustomizationSpecOutputReference</a>

---

##### `customize`<sup>Required</sup> <a name="customize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customize"></a>

```python
customize: VirtualMachineCloneCustomizeOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference">VirtualMachineCloneCustomizeOutputReference</a>

---

##### `customization_spec_input`<sup>Optional</sup> <a name="customization_spec_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpecInput"></a>

```python
customization_spec_input: VirtualMachineCloneCustomizationSpec
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

---

##### `customize_input`<sup>Optional</sup> <a name="customize_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizeInput"></a>

```python
customize_input: VirtualMachineCloneCustomize
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

---

##### `linked_clone_input`<sup>Optional</sup> <a name="linked_clone_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedCloneInput"></a>

```python
linked_clone_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ovf_network_map_input`<sup>Optional</sup> <a name="ovf_network_map_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMapInput"></a>

```python
ovf_network_map_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ovf_storage_map_input`<sup>Optional</sup> <a name="ovf_storage_map_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMapInput"></a>

```python
ovf_storage_map_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_uuid_input`<sup>Optional</sup> <a name="template_uuid_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuidInput"></a>

```python
template_uuid_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `linked_clone`<sup>Required</sup> <a name="linked_clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedClone"></a>

```python
linked_clone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ovf_network_map`<sup>Required</sup> <a name="ovf_network_map" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMap"></a>

```python
ovf_network_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ovf_storage_map`<sup>Required</sup> <a name="ovf_storage_map" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMap"></a>

```python
ovf_storage_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_uuid`<sup>Required</sup> <a name="template_uuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuid"></a>

```python
template_uuid: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineClone
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

---


### VirtualMachineDiskList <a name="VirtualMachineDiskList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualMachineDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualMachineDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>]]

---


### VirtualMachineDiskOutputReference <a name="VirtualMachineDiskOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetAttach">reset_attach</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetControllerType">reset_controller_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDatastoreId">reset_datastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskMode">reset_disk_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskSharing">reset_disk_sharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetEagerlyScrub">reset_eagerly_scrub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoLimit">reset_io_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoReservation">reset_io_reservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareCount">reset_io_share_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareLevel">reset_io_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetKeepOnRemove">reset_keep_on_remove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetStoragePolicyId">reset_storage_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetThinProvisioned">reset_thin_provisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetUnitNumber">reset_unit_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetWriteThrough">reset_write_through</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attach` <a name="reset_attach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetAttach"></a>

```python
def reset_attach() -> None
```

##### `reset_controller_type` <a name="reset_controller_type" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetControllerType"></a>

```python
def reset_controller_type() -> None
```

##### `reset_datastore_id` <a name="reset_datastore_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDatastoreId"></a>

```python
def reset_datastore_id() -> None
```

##### `reset_disk_mode` <a name="reset_disk_mode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskMode"></a>

```python
def reset_disk_mode() -> None
```

##### `reset_disk_sharing` <a name="reset_disk_sharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskSharing"></a>

```python
def reset_disk_sharing() -> None
```

##### `reset_eagerly_scrub` <a name="reset_eagerly_scrub" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetEagerlyScrub"></a>

```python
def reset_eagerly_scrub() -> None
```

##### `reset_io_limit` <a name="reset_io_limit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoLimit"></a>

```python
def reset_io_limit() -> None
```

##### `reset_io_reservation` <a name="reset_io_reservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoReservation"></a>

```python
def reset_io_reservation() -> None
```

##### `reset_io_share_count` <a name="reset_io_share_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareCount"></a>

```python
def reset_io_share_count() -> None
```

##### `reset_io_share_level` <a name="reset_io_share_level" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareLevel"></a>

```python
def reset_io_share_level() -> None
```

##### `reset_keep_on_remove` <a name="reset_keep_on_remove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetKeepOnRemove"></a>

```python
def reset_keep_on_remove() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_storage_policy_id` <a name="reset_storage_policy_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetStoragePolicyId"></a>

```python
def reset_storage_policy_id() -> None
```

##### `reset_thin_provisioned` <a name="reset_thin_provisioned" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetThinProvisioned"></a>

```python
def reset_thin_provisioned() -> None
```

##### `reset_unit_number` <a name="reset_unit_number" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetUnitNumber"></a>

```python
def reset_unit_number() -> None
```

##### `reset_write_through` <a name="reset_write_through" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetWriteThrough"></a>

```python
def reset_write_through() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.deviceAddress">device_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.key">key</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attachInput">attach_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerTypeInput">controller_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreIdInput">datastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskModeInput">disk_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharingInput">disk_sharing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrubInput">eagerly_scrub_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimitInput">io_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservationInput">io_reservation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCountInput">io_share_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevelInput">io_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemoveInput">keep_on_remove_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyIdInput">storage_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisionedInput">thin_provisioned_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumberInput">unit_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThroughInput">write_through_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attach">attach</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerType">controller_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreId">datastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskMode">disk_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharing">disk_sharing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrub">eagerly_scrub</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimit">io_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservation">io_reservation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCount">io_share_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevel">io_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemove">keep_on_remove</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyId">storage_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisioned">thin_provisioned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumber">unit_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThrough">write_through</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_address`<sup>Required</sup> <a name="device_address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.deviceAddress"></a>

```python
device_address: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.key"></a>

```python
key: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `attach_input`<sup>Optional</sup> <a name="attach_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attachInput"></a>

```python
attach_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `controller_type_input`<sup>Optional</sup> <a name="controller_type_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerTypeInput"></a>

```python
controller_type_input: str
```

- *Type:* str

---

##### `datastore_id_input`<sup>Optional</sup> <a name="datastore_id_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreIdInput"></a>

```python
datastore_id_input: str
```

- *Type:* str

---

##### `disk_mode_input`<sup>Optional</sup> <a name="disk_mode_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskModeInput"></a>

```python
disk_mode_input: str
```

- *Type:* str

---

##### `disk_sharing_input`<sup>Optional</sup> <a name="disk_sharing_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharingInput"></a>

```python
disk_sharing_input: str
```

- *Type:* str

---

##### `eagerly_scrub_input`<sup>Optional</sup> <a name="eagerly_scrub_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrubInput"></a>

```python
eagerly_scrub_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `io_limit_input`<sup>Optional</sup> <a name="io_limit_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimitInput"></a>

```python
io_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `io_reservation_input`<sup>Optional</sup> <a name="io_reservation_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservationInput"></a>

```python
io_reservation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `io_share_count_input`<sup>Optional</sup> <a name="io_share_count_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCountInput"></a>

```python
io_share_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `io_share_level_input`<sup>Optional</sup> <a name="io_share_level_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevelInput"></a>

```python
io_share_level_input: str
```

- *Type:* str

---

##### `keep_on_remove_input`<sup>Optional</sup> <a name="keep_on_remove_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemoveInput"></a>

```python
keep_on_remove_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_policy_id_input`<sup>Optional</sup> <a name="storage_policy_id_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyIdInput"></a>

```python
storage_policy_id_input: str
```

- *Type:* str

---

##### `thin_provisioned_input`<sup>Optional</sup> <a name="thin_provisioned_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisionedInput"></a>

```python
thin_provisioned_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unit_number_input`<sup>Optional</sup> <a name="unit_number_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumberInput"></a>

```python
unit_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_through_input`<sup>Optional</sup> <a name="write_through_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThroughInput"></a>

```python
write_through_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `attach`<sup>Required</sup> <a name="attach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attach"></a>

```python
attach: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `controller_type`<sup>Required</sup> <a name="controller_type" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerType"></a>

```python
controller_type: str
```

- *Type:* str

---

##### `datastore_id`<sup>Required</sup> <a name="datastore_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreId"></a>

```python
datastore_id: str
```

- *Type:* str

---

##### `disk_mode`<sup>Required</sup> <a name="disk_mode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskMode"></a>

```python
disk_mode: str
```

- *Type:* str

---

##### `disk_sharing`<sup>Required</sup> <a name="disk_sharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharing"></a>

```python
disk_sharing: str
```

- *Type:* str

---

##### `eagerly_scrub`<sup>Required</sup> <a name="eagerly_scrub" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrub"></a>

```python
eagerly_scrub: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `io_limit`<sup>Required</sup> <a name="io_limit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimit"></a>

```python
io_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `io_reservation`<sup>Required</sup> <a name="io_reservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservation"></a>

```python
io_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `io_share_count`<sup>Required</sup> <a name="io_share_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCount"></a>

```python
io_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `io_share_level`<sup>Required</sup> <a name="io_share_level" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevel"></a>

```python
io_share_level: str
```

- *Type:* str

---

##### `keep_on_remove`<sup>Required</sup> <a name="keep_on_remove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemove"></a>

```python
keep_on_remove: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_policy_id`<sup>Required</sup> <a name="storage_policy_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyId"></a>

```python
storage_policy_id: str
```

- *Type:* str

---

##### `thin_provisioned`<sup>Required</sup> <a name="thin_provisioned" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisioned"></a>

```python
thin_provisioned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unit_number`<sup>Required</sup> <a name="unit_number" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumber"></a>

```python
unit_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_through`<sup>Required</sup> <a name="write_through" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThrough"></a>

```python
write_through: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineDisk]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>]

---


### VirtualMachineNetworkInterfaceList <a name="VirtualMachineNetworkInterfaceList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualMachineNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualMachineNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>]]

---


### VirtualMachineNetworkInterfaceOutputReference <a name="VirtualMachineNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetAdapterType">reset_adapter_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthLimit">reset_bandwidth_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthReservation">reset_bandwidth_reservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareCount">reset_bandwidth_share_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareLevel">reset_bandwidth_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetMacAddress">reset_mac_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetOvfMapping">reset_ovf_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetPhysicalFunction">reset_physical_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetUseStaticMac">reset_use_static_mac</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_adapter_type` <a name="reset_adapter_type" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetAdapterType"></a>

```python
def reset_adapter_type() -> None
```

##### `reset_bandwidth_limit` <a name="reset_bandwidth_limit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthLimit"></a>

```python
def reset_bandwidth_limit() -> None
```

##### `reset_bandwidth_reservation` <a name="reset_bandwidth_reservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthReservation"></a>

```python
def reset_bandwidth_reservation() -> None
```

##### `reset_bandwidth_share_count` <a name="reset_bandwidth_share_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareCount"></a>

```python
def reset_bandwidth_share_count() -> None
```

##### `reset_bandwidth_share_level` <a name="reset_bandwidth_share_level" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareLevel"></a>

```python
def reset_bandwidth_share_level() -> None
```

##### `reset_mac_address` <a name="reset_mac_address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetMacAddress"></a>

```python
def reset_mac_address() -> None
```

##### `reset_ovf_mapping` <a name="reset_ovf_mapping" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetOvfMapping"></a>

```python
def reset_ovf_mapping() -> None
```

##### `reset_physical_function` <a name="reset_physical_function" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetPhysicalFunction"></a>

```python
def reset_physical_function() -> None
```

##### `reset_use_static_mac` <a name="reset_use_static_mac" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetUseStaticMac"></a>

```python
def reset_use_static_mac() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.deviceAddress">device_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.key">key</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterTypeInput">adapter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimitInput">bandwidth_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservationInput">bandwidth_reservation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCountInput">bandwidth_share_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevelInput">bandwidth_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddressInput">mac_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkIdInput">network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMappingInput">ovf_mapping_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunctionInput">physical_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMacInput">use_static_mac_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterType">adapter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimit">bandwidth_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservation">bandwidth_reservation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCount">bandwidth_share_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevel">bandwidth_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddress">mac_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkId">network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMapping">ovf_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunction">physical_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMac">use_static_mac</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_address`<sup>Required</sup> <a name="device_address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.deviceAddress"></a>

```python
device_address: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.key"></a>

```python
key: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `adapter_type_input`<sup>Optional</sup> <a name="adapter_type_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterTypeInput"></a>

```python
adapter_type_input: str
```

- *Type:* str

---

##### `bandwidth_limit_input`<sup>Optional</sup> <a name="bandwidth_limit_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimitInput"></a>

```python
bandwidth_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth_reservation_input`<sup>Optional</sup> <a name="bandwidth_reservation_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservationInput"></a>

```python
bandwidth_reservation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth_share_count_input`<sup>Optional</sup> <a name="bandwidth_share_count_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCountInput"></a>

```python
bandwidth_share_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth_share_level_input`<sup>Optional</sup> <a name="bandwidth_share_level_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevelInput"></a>

```python
bandwidth_share_level_input: str
```

- *Type:* str

---

##### `mac_address_input`<sup>Optional</sup> <a name="mac_address_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddressInput"></a>

```python
mac_address_input: str
```

- *Type:* str

---

##### `network_id_input`<sup>Optional</sup> <a name="network_id_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkIdInput"></a>

```python
network_id_input: str
```

- *Type:* str

---

##### `ovf_mapping_input`<sup>Optional</sup> <a name="ovf_mapping_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMappingInput"></a>

```python
ovf_mapping_input: str
```

- *Type:* str

---

##### `physical_function_input`<sup>Optional</sup> <a name="physical_function_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunctionInput"></a>

```python
physical_function_input: str
```

- *Type:* str

---

##### `use_static_mac_input`<sup>Optional</sup> <a name="use_static_mac_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMacInput"></a>

```python
use_static_mac_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `adapter_type`<sup>Required</sup> <a name="adapter_type" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterType"></a>

```python
adapter_type: str
```

- *Type:* str

---

##### `bandwidth_limit`<sup>Required</sup> <a name="bandwidth_limit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimit"></a>

```python
bandwidth_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth_reservation`<sup>Required</sup> <a name="bandwidth_reservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservation"></a>

```python
bandwidth_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth_share_count`<sup>Required</sup> <a name="bandwidth_share_count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCount"></a>

```python
bandwidth_share_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth_share_level`<sup>Required</sup> <a name="bandwidth_share_level" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevel"></a>

```python
bandwidth_share_level: str
```

- *Type:* str

---

##### `mac_address`<sup>Required</sup> <a name="mac_address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

---

##### `ovf_mapping`<sup>Required</sup> <a name="ovf_mapping" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMapping"></a>

```python
ovf_mapping: str
```

- *Type:* str

---

##### `physical_function`<sup>Required</sup> <a name="physical_function" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunction"></a>

```python
physical_function: str
```

- *Type:* str

---

##### `use_static_mac`<sup>Required</sup> <a name="use_static_mac" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMac"></a>

```python
use_static_mac: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineNetworkInterface]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>]

---


### VirtualMachineOvfDeployOutputReference <a name="VirtualMachineOvfDeployOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineOvfDeployOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetAllowUnverifiedSslCert">reset_allow_unverified_ssl_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDeploymentOption">reset_deployment_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDiskProvisioning">reset_disk_provisioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetEnableHiddenProperties">reset_enable_hidden_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpAllocationPolicy">reset_ip_allocation_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpProtocol">reset_ip_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetLocalOvfPath">reset_local_ovf_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetOvfNetworkMap">reset_ovf_network_map</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetRemoteOvfUrl">reset_remote_ovf_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_unverified_ssl_cert` <a name="reset_allow_unverified_ssl_cert" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetAllowUnverifiedSslCert"></a>

```python
def reset_allow_unverified_ssl_cert() -> None
```

##### `reset_deployment_option` <a name="reset_deployment_option" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDeploymentOption"></a>

```python
def reset_deployment_option() -> None
```

##### `reset_disk_provisioning` <a name="reset_disk_provisioning" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDiskProvisioning"></a>

```python
def reset_disk_provisioning() -> None
```

##### `reset_enable_hidden_properties` <a name="reset_enable_hidden_properties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetEnableHiddenProperties"></a>

```python
def reset_enable_hidden_properties() -> None
```

##### `reset_ip_allocation_policy` <a name="reset_ip_allocation_policy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpAllocationPolicy"></a>

```python
def reset_ip_allocation_policy() -> None
```

##### `reset_ip_protocol` <a name="reset_ip_protocol" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpProtocol"></a>

```python
def reset_ip_protocol() -> None
```

##### `reset_local_ovf_path` <a name="reset_local_ovf_path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetLocalOvfPath"></a>

```python
def reset_local_ovf_path() -> None
```

##### `reset_ovf_network_map` <a name="reset_ovf_network_map" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetOvfNetworkMap"></a>

```python
def reset_ovf_network_map() -> None
```

##### `reset_remote_ovf_url` <a name="reset_remote_ovf_url" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetRemoteOvfUrl"></a>

```python
def reset_remote_ovf_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCertInput">allow_unverified_ssl_cert_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOptionInput">deployment_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioningInput">disk_provisioning_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenPropertiesInput">enable_hidden_properties_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicyInput">ip_allocation_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPathInput">local_ovf_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMapInput">ovf_network_map_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrlInput">remote_ovf_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCert">allow_unverified_ssl_cert</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOption">deployment_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioning">disk_provisioning</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenProperties">enable_hidden_properties</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicy">ip_allocation_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPath">local_ovf_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMap">ovf_network_map</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrl">remote_ovf_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_unverified_ssl_cert_input`<sup>Optional</sup> <a name="allow_unverified_ssl_cert_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCertInput"></a>

```python
allow_unverified_ssl_cert_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deployment_option_input`<sup>Optional</sup> <a name="deployment_option_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOptionInput"></a>

```python
deployment_option_input: str
```

- *Type:* str

---

##### `disk_provisioning_input`<sup>Optional</sup> <a name="disk_provisioning_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioningInput"></a>

```python
disk_provisioning_input: str
```

- *Type:* str

---

##### `enable_hidden_properties_input`<sup>Optional</sup> <a name="enable_hidden_properties_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenPropertiesInput"></a>

```python
enable_hidden_properties_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_allocation_policy_input`<sup>Optional</sup> <a name="ip_allocation_policy_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicyInput"></a>

```python
ip_allocation_policy_input: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `local_ovf_path_input`<sup>Optional</sup> <a name="local_ovf_path_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPathInput"></a>

```python
local_ovf_path_input: str
```

- *Type:* str

---

##### `ovf_network_map_input`<sup>Optional</sup> <a name="ovf_network_map_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMapInput"></a>

```python
ovf_network_map_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `remote_ovf_url_input`<sup>Optional</sup> <a name="remote_ovf_url_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrlInput"></a>

```python
remote_ovf_url_input: str
```

- *Type:* str

---

##### `allow_unverified_ssl_cert`<sup>Required</sup> <a name="allow_unverified_ssl_cert" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCert"></a>

```python
allow_unverified_ssl_cert: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deployment_option`<sup>Required</sup> <a name="deployment_option" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOption"></a>

```python
deployment_option: str
```

- *Type:* str

---

##### `disk_provisioning`<sup>Required</sup> <a name="disk_provisioning" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioning"></a>

```python
disk_provisioning: str
```

- *Type:* str

---

##### `enable_hidden_properties`<sup>Required</sup> <a name="enable_hidden_properties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenProperties"></a>

```python
enable_hidden_properties: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_allocation_policy`<sup>Required</sup> <a name="ip_allocation_policy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicy"></a>

```python
ip_allocation_policy: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `local_ovf_path`<sup>Required</sup> <a name="local_ovf_path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPath"></a>

```python
local_ovf_path: str
```

- *Type:* str

---

##### `ovf_network_map`<sup>Required</sup> <a name="ovf_network_map" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMap"></a>

```python
ovf_network_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `remote_ovf_url`<sup>Required</sup> <a name="remote_ovf_url" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrl"></a>

```python
remote_ovf_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineOvfDeploy
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

---


### VirtualMachineVappOutputReference <a name="VirtualMachineVappOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine

virtualMachine.VirtualMachineVappOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineVapp
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

---



