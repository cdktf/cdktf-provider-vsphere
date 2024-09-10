# `dataVsphereVirtualMachine` Submodule <a name="`dataVsphereVirtualMachine` Submodule" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereVirtualMachine <a name="DataVsphereVirtualMachine" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine vsphere_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_virtual_machine.DataVsphereVirtualMachine;

DataVsphereVirtualMachine.Builder.create(Construct scope, java.lang.String id)
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
//  .alternateGuestName(java.lang.String)
//  .annotation(java.lang.String)
//  .bootDelay(java.lang.Number)
//  .bootRetryDelay(java.lang.Number)
//  .bootRetryEnabled(java.lang.Boolean)
//  .bootRetryEnabled(IResolvable)
//  .cpuHotAddEnabled(java.lang.Boolean)
//  .cpuHotAddEnabled(IResolvable)
//  .cpuHotRemoveEnabled(java.lang.Boolean)
//  .cpuHotRemoveEnabled(IResolvable)
//  .cpuLimit(java.lang.Number)
//  .cpuPerformanceCountersEnabled(java.lang.Boolean)
//  .cpuPerformanceCountersEnabled(IResolvable)
//  .cpuReservation(java.lang.Number)
//  .cpuShareCount(java.lang.Number)
//  .cpuShareLevel(java.lang.String)
//  .datacenterId(java.lang.String)
//  .efiSecureBootEnabled(java.lang.Boolean)
//  .efiSecureBootEnabled(IResolvable)
//  .enableDiskUuid(java.lang.Boolean)
//  .enableDiskUuid(IResolvable)
//  .enableLogging(java.lang.Boolean)
//  .enableLogging(IResolvable)
//  .eptRviMode(java.lang.String)
//  .extraConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .extraConfigRebootRequired(java.lang.Boolean)
//  .extraConfigRebootRequired(IResolvable)
//  .firmware(java.lang.String)
//  .folder(java.lang.String)
//  .guestId(java.lang.String)
//  .hardwareVersion(java.lang.Number)
//  .hvMode(java.lang.String)
//  .id(java.lang.String)
//  .ideControllerScanCount(java.lang.Number)
//  .latencySensitivity(java.lang.String)
//  .memory(java.lang.Number)
//  .memoryHotAddEnabled(java.lang.Boolean)
//  .memoryHotAddEnabled(IResolvable)
//  .memoryLimit(java.lang.Number)
//  .memoryReservation(java.lang.Number)
//  .memoryReservationLockedToMax(java.lang.Boolean)
//  .memoryReservationLockedToMax(IResolvable)
//  .memoryShareCount(java.lang.Number)
//  .memoryShareLevel(java.lang.String)
//  .moid(java.lang.String)
//  .name(java.lang.String)
//  .nestedHvEnabled(java.lang.Boolean)
//  .nestedHvEnabled(IResolvable)
//  .numCoresPerSocket(java.lang.Number)
//  .numCpus(java.lang.Number)
//  .replaceTrigger(java.lang.String)
//  .runToolsScriptsAfterPowerOn(java.lang.Boolean)
//  .runToolsScriptsAfterPowerOn(IResolvable)
//  .runToolsScriptsAfterResume(java.lang.Boolean)
//  .runToolsScriptsAfterResume(IResolvable)
//  .runToolsScriptsBeforeGuestReboot(java.lang.Boolean)
//  .runToolsScriptsBeforeGuestReboot(IResolvable)
//  .runToolsScriptsBeforeGuestShutdown(java.lang.Boolean)
//  .runToolsScriptsBeforeGuestShutdown(IResolvable)
//  .runToolsScriptsBeforeGuestStandby(java.lang.Boolean)
//  .runToolsScriptsBeforeGuestStandby(IResolvable)
//  .sataControllerScanCount(java.lang.Number)
//  .scsiControllerScanCount(java.lang.Number)
//  .storagePolicyId(java.lang.String)
//  .swapPlacementPolicy(java.lang.String)
//  .syncTimeWithHost(java.lang.Boolean)
//  .syncTimeWithHost(IResolvable)
//  .syncTimeWithHostPeriodically(java.lang.Boolean)
//  .syncTimeWithHostPeriodically(IResolvable)
//  .toolsUpgradePolicy(java.lang.String)
//  .uuid(java.lang.String)
//  .vapp(DataVsphereVirtualMachineVapp)
//  .vbsEnabled(java.lang.Boolean)
//  .vbsEnabled(IResolvable)
//  .vvtdEnabled(java.lang.Boolean)
//  .vvtdEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.alternateGuestName">alternateGuestName</a></code> | <code>java.lang.String</code> | The guest name for the operating system when guest_id is otherGuest or otherGuest64. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.annotation">annotation</a></code> | <code>java.lang.String</code> | User-provided description of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.bootDelay">bootDelay</a></code> | <code>java.lang.Number</code> | The number of milliseconds to wait before starting the boot sequence. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.bootRetryDelay">bootRetryDelay</a></code> | <code>java.lang.Number</code> | The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.bootRetryEnabled">bootRetryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuHotAddEnabled">cpuHotAddEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuHotRemoveEnabled">cpuHotRemoveEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuLimit">cpuLimit</a></code> | <code>java.lang.Number</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuPerformanceCountersEnabled">cpuPerformanceCountersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable CPU performance counters on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuReservation">cpuReservation</a></code> | <code>java.lang.Number</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuShareCount">cpuShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to cpu for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuShareLevel">cpuShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for cpu resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | The managed object ID of the datacenter the virtual machine is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.efiSecureBootEnabled">efiSecureBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When the boot type set in firmware is efi, this enables EFI secure boot. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.enableDiskUuid">enableDiskUuid</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable logging on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.eptRviMode">eptRviMode</a></code> | <code>java.lang.String</code> | The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.extraConfig">extraConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Extra configuration data for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.extraConfigRebootRequired">extraConfigRebootRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow the virtual machine to be rebooted when a change to `extra_config` occurs. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.firmware">firmware</a></code> | <code>java.lang.String</code> | The firmware interface to use on the virtual machine. Can be one of bios or efi. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | The name of the folder the virtual machine is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.guestId">guestId</a></code> | <code>java.lang.String</code> | The guest ID for the operating system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.hardwareVersion">hardwareVersion</a></code> | <code>java.lang.Number</code> | The hardware version for the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.hvMode">hvMode</a></code> | <code>java.lang.String</code> | The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#id DataVsphereVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.ideControllerScanCount">ideControllerScanCount</a></code> | <code>java.lang.Number</code> | The number of IDE controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.latencySensitivity">latencySensitivity</a></code> | <code>java.lang.String</code> | Controls the scheduling delay of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memory">memory</a></code> | <code>java.lang.Number</code> | The size of the virtual machine's memory, in MB. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryHotAddEnabled">memoryHotAddEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow memory to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryLimit">memoryLimit</a></code> | <code>java.lang.Number</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryReservation">memoryReservation</a></code> | <code>java.lang.Number</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryReservationLockedToMax">memoryReservationLockedToMax</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryShareCount">memoryShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to memory for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryShareLevel">memoryShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for memory resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.moid">moid</a></code> | <code>java.lang.String</code> | The machine object ID from VMware vSphere. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.nestedHvEnabled">nestedHvEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.numCoresPerSocket">numCoresPerSocket</a></code> | <code>java.lang.Number</code> | The number of cores to distribute amongst the CPUs in this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.numCpus">numCpus</a></code> | <code>java.lang.Number</code> | The number of virtual processors to assign to this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.replaceTrigger">replaceTrigger</a></code> | <code>java.lang.String</code> | Triggers replacement of resource whenever it changes. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsAfterPowerOn">runToolsScriptsAfterPowerOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts after virtual machine power-on when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsAfterResume">runToolsScriptsAfterResume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts after virtual machine resume when when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestReboot">runToolsScriptsBeforeGuestReboot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts before guest operating system reboot when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestShutdown">runToolsScriptsBeforeGuestShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts before guest operating system shutdown when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestStandby">runToolsScriptsBeforeGuestStandby</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts before guest operating system standby when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.sataControllerScanCount">sataControllerScanCount</a></code> | <code>java.lang.Number</code> | The number of SATA controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.scsiControllerScanCount">scsiControllerScanCount</a></code> | <code>java.lang.Number</code> | The number of SCSI controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.storagePolicyId">storagePolicyId</a></code> | <code>java.lang.String</code> | The ID of the storage policy to assign to the virtual machine home directory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.swapPlacementPolicy">swapPlacementPolicy</a></code> | <code>java.lang.String</code> | The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.syncTimeWithHost">syncTimeWithHost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable guest clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.syncTimeWithHostPeriodically">syncTimeWithHostPeriodically</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable periodic clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.toolsUpgradePolicy">toolsUpgradePolicy</a></code> | <code>java.lang.String</code> | Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.uuid">uuid</a></code> | <code>java.lang.String</code> | The UUID of the virtual machine. Also exposed as the ID of the resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.vapp">vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a></code> | vapp block. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.vbsEnabled">vbsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to specify if Virtualization-based security is enabled for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.vvtdEnabled">vvtdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alternateGuestName`<sup>Optional</sup> <a name="alternateGuestName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.alternateGuestName"></a>

- *Type:* java.lang.String

The guest name for the operating system when guest_id is otherGuest or otherGuest64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#alternate_guest_name DataVsphereVirtualMachine#alternate_guest_name}

---

##### `annotation`<sup>Optional</sup> <a name="annotation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.annotation"></a>

- *Type:* java.lang.String

User-provided description of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#annotation DataVsphereVirtualMachine#annotation}

---

##### `bootDelay`<sup>Optional</sup> <a name="bootDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.bootDelay"></a>

- *Type:* java.lang.Number

The number of milliseconds to wait before starting the boot sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#boot_delay DataVsphereVirtualMachine#boot_delay}

---

##### `bootRetryDelay`<sup>Optional</sup> <a name="bootRetryDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.bootRetryDelay"></a>

- *Type:* java.lang.Number

The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#boot_retry_delay DataVsphereVirtualMachine#boot_retry_delay}

---

##### `bootRetryEnabled`<sup>Optional</sup> <a name="bootRetryEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.bootRetryEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#boot_retry_enabled DataVsphereVirtualMachine#boot_retry_enabled}

---

##### `cpuHotAddEnabled`<sup>Optional</sup> <a name="cpuHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuHotAddEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#cpu_hot_add_enabled DataVsphereVirtualMachine#cpu_hot_add_enabled}

---

##### `cpuHotRemoveEnabled`<sup>Optional</sup> <a name="cpuHotRemoveEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuHotRemoveEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#cpu_hot_remove_enabled DataVsphereVirtualMachine#cpu_hot_remove_enabled}

---

##### `cpuLimit`<sup>Optional</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuLimit"></a>

- *Type:* java.lang.Number

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#cpu_limit DataVsphereVirtualMachine#cpu_limit}

---

##### `cpuPerformanceCountersEnabled`<sup>Optional</sup> <a name="cpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuPerformanceCountersEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable CPU performance counters on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#cpu_performance_counters_enabled DataVsphereVirtualMachine#cpu_performance_counters_enabled}

---

##### `cpuReservation`<sup>Optional</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuReservation"></a>

- *Type:* java.lang.Number

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#cpu_reservation DataVsphereVirtualMachine#cpu_reservation}

---

##### `cpuShareCount`<sup>Optional</sup> <a name="cpuShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuShareCount"></a>

- *Type:* java.lang.Number

The amount of shares to allocate to cpu for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#cpu_share_count DataVsphereVirtualMachine#cpu_share_count}

---

##### `cpuShareLevel`<sup>Optional</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.cpuShareLevel"></a>

- *Type:* java.lang.String

The allocation level for cpu resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#cpu_share_level DataVsphereVirtualMachine#cpu_share_level}

---

##### `datacenterId`<sup>Optional</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.datacenterId"></a>

- *Type:* java.lang.String

The managed object ID of the datacenter the virtual machine is in.

This is not required when using ESXi directly, or if there is only one datacenter in your infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#datacenter_id DataVsphereVirtualMachine#datacenter_id}

---

##### `efiSecureBootEnabled`<sup>Optional</sup> <a name="efiSecureBootEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.efiSecureBootEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When the boot type set in firmware is efi, this enables EFI secure boot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#efi_secure_boot_enabled DataVsphereVirtualMachine#efi_secure_boot_enabled}

---

##### `enableDiskUuid`<sup>Optional</sup> <a name="enableDiskUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.enableDiskUuid"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#enable_disk_uuid DataVsphereVirtualMachine#enable_disk_uuid}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.enableLogging"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable logging on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#enable_logging DataVsphereVirtualMachine#enable_logging}

---

##### `eptRviMode`<sup>Optional</sup> <a name="eptRviMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.eptRviMode"></a>

- *Type:* java.lang.String

The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#ept_rvi_mode DataVsphereVirtualMachine#ept_rvi_mode}

---

##### `extraConfig`<sup>Optional</sup> <a name="extraConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.extraConfig"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Extra configuration data for this virtual machine.

Can be used to supply advanced parameters not normally in configuration, such as instance metadata, or configuration data for OVF images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#extra_config DataVsphereVirtualMachine#extra_config}

---

##### `extraConfigRebootRequired`<sup>Optional</sup> <a name="extraConfigRebootRequired" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.extraConfigRebootRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow the virtual machine to be rebooted when a change to `extra_config` occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#extra_config_reboot_required DataVsphereVirtualMachine#extra_config_reboot_required}

---

##### `firmware`<sup>Optional</sup> <a name="firmware" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.firmware"></a>

- *Type:* java.lang.String

The firmware interface to use on the virtual machine. Can be one of bios or efi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#firmware DataVsphereVirtualMachine#firmware}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

The name of the folder the virtual machine is in.

Allows distinguishing virtual machines with the same name in different folder paths

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#folder DataVsphereVirtualMachine#folder}

---

##### `guestId`<sup>Optional</sup> <a name="guestId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.guestId"></a>

- *Type:* java.lang.String

The guest ID for the operating system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#guest_id DataVsphereVirtualMachine#guest_id}

---

##### `hardwareVersion`<sup>Optional</sup> <a name="hardwareVersion" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.hardwareVersion"></a>

- *Type:* java.lang.Number

The hardware version for the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#hardware_version DataVsphereVirtualMachine#hardware_version}

---

##### `hvMode`<sup>Optional</sup> <a name="hvMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.hvMode"></a>

- *Type:* java.lang.String

The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#hv_mode DataVsphereVirtualMachine#hv_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#id DataVsphereVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ideControllerScanCount`<sup>Optional</sup> <a name="ideControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.ideControllerScanCount"></a>

- *Type:* java.lang.Number

The number of IDE controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#ide_controller_scan_count DataVsphereVirtualMachine#ide_controller_scan_count}

---

##### `latencySensitivity`<sup>Optional</sup> <a name="latencySensitivity" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.latencySensitivity"></a>

- *Type:* java.lang.String

Controls the scheduling delay of the virtual machine.

Use a higher sensitivity for applications that require lower latency, such as VOIP, media player applications, or applications that require frequent access to mouse or keyboard devices. Can be one of low, normal, medium, or high.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#latency_sensitivity DataVsphereVirtualMachine#latency_sensitivity}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memory"></a>

- *Type:* java.lang.Number

The size of the virtual machine's memory, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#memory DataVsphereVirtualMachine#memory}

---

##### `memoryHotAddEnabled`<sup>Optional</sup> <a name="memoryHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryHotAddEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow memory to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#memory_hot_add_enabled DataVsphereVirtualMachine#memory_hot_add_enabled}

---

##### `memoryLimit`<sup>Optional</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryLimit"></a>

- *Type:* java.lang.Number

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#memory_limit DataVsphereVirtualMachine#memory_limit}

---

##### `memoryReservation`<sup>Optional</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryReservation"></a>

- *Type:* java.lang.Number

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#memory_reservation DataVsphereVirtualMachine#memory_reservation}

---

##### `memoryReservationLockedToMax`<sup>Optional</sup> <a name="memoryReservationLockedToMax" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryReservationLockedToMax"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#memory_reservation_locked_to_max DataVsphereVirtualMachine#memory_reservation_locked_to_max}

---

##### `memoryShareCount`<sup>Optional</sup> <a name="memoryShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryShareCount"></a>

- *Type:* java.lang.Number

The amount of shares to allocate to memory for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#memory_share_count DataVsphereVirtualMachine#memory_share_count}

---

##### `memoryShareLevel`<sup>Optional</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.memoryShareLevel"></a>

- *Type:* java.lang.String

The allocation level for memory resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#memory_share_level DataVsphereVirtualMachine#memory_share_level}

---

##### `moid`<sup>Optional</sup> <a name="moid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.moid"></a>

- *Type:* java.lang.String

The machine object ID from VMware vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#moid DataVsphereVirtualMachine#moid}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#name DataVsphereVirtualMachine#name}

---

##### `nestedHvEnabled`<sup>Optional</sup> <a name="nestedHvEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.nestedHvEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#nested_hv_enabled DataVsphereVirtualMachine#nested_hv_enabled}

---

##### `numCoresPerSocket`<sup>Optional</sup> <a name="numCoresPerSocket" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.numCoresPerSocket"></a>

- *Type:* java.lang.Number

The number of cores to distribute amongst the CPUs in this virtual machine.

If specified, the value supplied to num_cpus must be evenly divisible by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#num_cores_per_socket DataVsphereVirtualMachine#num_cores_per_socket}

---

##### `numCpus`<sup>Optional</sup> <a name="numCpus" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.numCpus"></a>

- *Type:* java.lang.Number

The number of virtual processors to assign to this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#num_cpus DataVsphereVirtualMachine#num_cpus}

---

##### `replaceTrigger`<sup>Optional</sup> <a name="replaceTrigger" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.replaceTrigger"></a>

- *Type:* java.lang.String

Triggers replacement of resource whenever it changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#replace_trigger DataVsphereVirtualMachine#replace_trigger}

---

##### `runToolsScriptsAfterPowerOn`<sup>Optional</sup> <a name="runToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsAfterPowerOn"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts after virtual machine power-on when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#run_tools_scripts_after_power_on DataVsphereVirtualMachine#run_tools_scripts_after_power_on}

---

##### `runToolsScriptsAfterResume`<sup>Optional</sup> <a name="runToolsScriptsAfterResume" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsAfterResume"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts after virtual machine resume when when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#run_tools_scripts_after_resume DataVsphereVirtualMachine#run_tools_scripts_after_resume}

---

##### `runToolsScriptsBeforeGuestReboot`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestReboot"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts before guest operating system reboot when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_reboot DataVsphereVirtualMachine#run_tools_scripts_before_guest_reboot}

---

##### `runToolsScriptsBeforeGuestShutdown`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestShutdown"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts before guest operating system shutdown when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_shutdown DataVsphereVirtualMachine#run_tools_scripts_before_guest_shutdown}

---

##### `runToolsScriptsBeforeGuestStandby`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestStandby"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts before guest operating system standby when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_standby DataVsphereVirtualMachine#run_tools_scripts_before_guest_standby}

---

##### `sataControllerScanCount`<sup>Optional</sup> <a name="sataControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.sataControllerScanCount"></a>

- *Type:* java.lang.Number

The number of SATA controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#sata_controller_scan_count DataVsphereVirtualMachine#sata_controller_scan_count}

---

##### `scsiControllerScanCount`<sup>Optional</sup> <a name="scsiControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.scsiControllerScanCount"></a>

- *Type:* java.lang.Number

The number of SCSI controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#scsi_controller_scan_count DataVsphereVirtualMachine#scsi_controller_scan_count}

---

##### `storagePolicyId`<sup>Optional</sup> <a name="storagePolicyId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.storagePolicyId"></a>

- *Type:* java.lang.String

The ID of the storage policy to assign to the virtual machine home directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#storage_policy_id DataVsphereVirtualMachine#storage_policy_id}

---

##### `swapPlacementPolicy`<sup>Optional</sup> <a name="swapPlacementPolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.swapPlacementPolicy"></a>

- *Type:* java.lang.String

The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#swap_placement_policy DataVsphereVirtualMachine#swap_placement_policy}

---

##### `syncTimeWithHost`<sup>Optional</sup> <a name="syncTimeWithHost" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.syncTimeWithHost"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable guest clock synchronization with the host.

On vSphere 7.0 U1 and above, with only this setting the clock is synchronized on startup and resume. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#sync_time_with_host DataVsphereVirtualMachine#sync_time_with_host}

---

##### `syncTimeWithHostPeriodically`<sup>Optional</sup> <a name="syncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.syncTimeWithHostPeriodically"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable periodic clock synchronization with the host.

Supported only on vSphere 7.0 U1 and above. On prior versions setting `sync_time_with_host` is enough for periodic synchronization. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#sync_time_with_host_periodically DataVsphereVirtualMachine#sync_time_with_host_periodically}

---

##### `toolsUpgradePolicy`<sup>Optional</sup> <a name="toolsUpgradePolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.toolsUpgradePolicy"></a>

- *Type:* java.lang.String

Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#tools_upgrade_policy DataVsphereVirtualMachine#tools_upgrade_policy}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.uuid"></a>

- *Type:* java.lang.String

The UUID of the virtual machine. Also exposed as the ID of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#uuid DataVsphereVirtualMachine#uuid}

---

##### `vapp`<sup>Optional</sup> <a name="vapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.vapp"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

vapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#vapp DataVsphereVirtualMachine#vapp}

---

##### `vbsEnabled`<sup>Optional</sup> <a name="vbsEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.vbsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to specify if Virtualization-based security is enabled for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#vbs_enabled DataVsphereVirtualMachine#vbs_enabled}

---

##### `vvtdEnabled`<sup>Optional</sup> <a name="vvtdEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.vvtdEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#vvtd_enabled DataVsphereVirtualMachine#vvtd_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.putVapp">putVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAlternateGuestName">resetAlternateGuestName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAnnotation">resetAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootDelay">resetBootDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryDelay">resetBootRetryDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryEnabled">resetBootRetryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotAddEnabled">resetCpuHotAddEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotRemoveEnabled">resetCpuHotRemoveEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuLimit">resetCpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuPerformanceCountersEnabled">resetCpuPerformanceCountersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuReservation">resetCpuReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareCount">resetCpuShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareLevel">resetCpuShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetDatacenterId">resetDatacenterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEfiSecureBootEnabled">resetEfiSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableDiskUuid">resetEnableDiskUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEptRviMode">resetEptRviMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfig">resetExtraConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfigRebootRequired">resetExtraConfigRebootRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetFirmware">resetFirmware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetGuestId">resetGuestId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHardwareVersion">resetHardwareVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHvMode">resetHvMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetIdeControllerScanCount">resetIdeControllerScanCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetLatencySensitivity">resetLatencySensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryHotAddEnabled">resetMemoryHotAddEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryLimit">resetMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryReservation">resetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryReservationLockedToMax">resetMemoryReservationLockedToMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareCount">resetMemoryShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareLevel">resetMemoryShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMoid">resetMoid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNestedHvEnabled">resetNestedHvEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCoresPerSocket">resetNumCoresPerSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCpus">resetNumCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetReplaceTrigger">resetReplaceTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterPowerOn">resetRunToolsScriptsAfterPowerOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterResume">resetRunToolsScriptsAfterResume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestReboot">resetRunToolsScriptsBeforeGuestReboot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestShutdown">resetRunToolsScriptsBeforeGuestShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestStandby">resetRunToolsScriptsBeforeGuestStandby</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSataControllerScanCount">resetSataControllerScanCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetScsiControllerScanCount">resetScsiControllerScanCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetStoragePolicyId">resetStoragePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSwapPlacementPolicy">resetSwapPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHost">resetSyncTimeWithHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHostPeriodically">resetSyncTimeWithHostPeriodically</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetToolsUpgradePolicy">resetToolsUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetUuid">resetUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVapp">resetVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVbsEnabled">resetVbsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVvtdEnabled">resetVvtdEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putVapp` <a name="putVapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.putVapp"></a>

```java
public void putVapp(DataVsphereVirtualMachineVapp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.putVapp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

---

##### `resetAlternateGuestName` <a name="resetAlternateGuestName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAlternateGuestName"></a>

```java
public void resetAlternateGuestName()
```

##### `resetAnnotation` <a name="resetAnnotation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAnnotation"></a>

```java
public void resetAnnotation()
```

##### `resetBootDelay` <a name="resetBootDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootDelay"></a>

```java
public void resetBootDelay()
```

##### `resetBootRetryDelay` <a name="resetBootRetryDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryDelay"></a>

```java
public void resetBootRetryDelay()
```

##### `resetBootRetryEnabled` <a name="resetBootRetryEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryEnabled"></a>

```java
public void resetBootRetryEnabled()
```

##### `resetCpuHotAddEnabled` <a name="resetCpuHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotAddEnabled"></a>

```java
public void resetCpuHotAddEnabled()
```

##### `resetCpuHotRemoveEnabled` <a name="resetCpuHotRemoveEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotRemoveEnabled"></a>

```java
public void resetCpuHotRemoveEnabled()
```

##### `resetCpuLimit` <a name="resetCpuLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuLimit"></a>

```java
public void resetCpuLimit()
```

##### `resetCpuPerformanceCountersEnabled` <a name="resetCpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuPerformanceCountersEnabled"></a>

```java
public void resetCpuPerformanceCountersEnabled()
```

##### `resetCpuReservation` <a name="resetCpuReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuReservation"></a>

```java
public void resetCpuReservation()
```

##### `resetCpuShareCount` <a name="resetCpuShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareCount"></a>

```java
public void resetCpuShareCount()
```

##### `resetCpuShareLevel` <a name="resetCpuShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareLevel"></a>

```java
public void resetCpuShareLevel()
```

##### `resetDatacenterId` <a name="resetDatacenterId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetDatacenterId"></a>

```java
public void resetDatacenterId()
```

##### `resetEfiSecureBootEnabled` <a name="resetEfiSecureBootEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEfiSecureBootEnabled"></a>

```java
public void resetEfiSecureBootEnabled()
```

##### `resetEnableDiskUuid` <a name="resetEnableDiskUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableDiskUuid"></a>

```java
public void resetEnableDiskUuid()
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableLogging"></a>

```java
public void resetEnableLogging()
```

##### `resetEptRviMode` <a name="resetEptRviMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEptRviMode"></a>

```java
public void resetEptRviMode()
```

##### `resetExtraConfig` <a name="resetExtraConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfig"></a>

```java
public void resetExtraConfig()
```

##### `resetExtraConfigRebootRequired` <a name="resetExtraConfigRebootRequired" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfigRebootRequired"></a>

```java
public void resetExtraConfigRebootRequired()
```

##### `resetFirmware` <a name="resetFirmware" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetFirmware"></a>

```java
public void resetFirmware()
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetFolder"></a>

```java
public void resetFolder()
```

##### `resetGuestId` <a name="resetGuestId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetGuestId"></a>

```java
public void resetGuestId()
```

##### `resetHardwareVersion` <a name="resetHardwareVersion" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHardwareVersion"></a>

```java
public void resetHardwareVersion()
```

##### `resetHvMode` <a name="resetHvMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHvMode"></a>

```java
public void resetHvMode()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetId"></a>

```java
public void resetId()
```

##### `resetIdeControllerScanCount` <a name="resetIdeControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetIdeControllerScanCount"></a>

```java
public void resetIdeControllerScanCount()
```

##### `resetLatencySensitivity` <a name="resetLatencySensitivity" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetLatencySensitivity"></a>

```java
public void resetLatencySensitivity()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemory"></a>

```java
public void resetMemory()
```

##### `resetMemoryHotAddEnabled` <a name="resetMemoryHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryHotAddEnabled"></a>

```java
public void resetMemoryHotAddEnabled()
```

##### `resetMemoryLimit` <a name="resetMemoryLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryLimit"></a>

```java
public void resetMemoryLimit()
```

##### `resetMemoryReservation` <a name="resetMemoryReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryReservation"></a>

```java
public void resetMemoryReservation()
```

##### `resetMemoryReservationLockedToMax` <a name="resetMemoryReservationLockedToMax" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryReservationLockedToMax"></a>

```java
public void resetMemoryReservationLockedToMax()
```

##### `resetMemoryShareCount` <a name="resetMemoryShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareCount"></a>

```java
public void resetMemoryShareCount()
```

##### `resetMemoryShareLevel` <a name="resetMemoryShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareLevel"></a>

```java
public void resetMemoryShareLevel()
```

##### `resetMoid` <a name="resetMoid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMoid"></a>

```java
public void resetMoid()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetName"></a>

```java
public void resetName()
```

##### `resetNestedHvEnabled` <a name="resetNestedHvEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNestedHvEnabled"></a>

```java
public void resetNestedHvEnabled()
```

##### `resetNumCoresPerSocket` <a name="resetNumCoresPerSocket" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCoresPerSocket"></a>

```java
public void resetNumCoresPerSocket()
```

##### `resetNumCpus` <a name="resetNumCpus" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCpus"></a>

```java
public void resetNumCpus()
```

##### `resetReplaceTrigger` <a name="resetReplaceTrigger" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetReplaceTrigger"></a>

```java
public void resetReplaceTrigger()
```

##### `resetRunToolsScriptsAfterPowerOn` <a name="resetRunToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterPowerOn"></a>

```java
public void resetRunToolsScriptsAfterPowerOn()
```

##### `resetRunToolsScriptsAfterResume` <a name="resetRunToolsScriptsAfterResume" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterResume"></a>

```java
public void resetRunToolsScriptsAfterResume()
```

##### `resetRunToolsScriptsBeforeGuestReboot` <a name="resetRunToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestReboot"></a>

```java
public void resetRunToolsScriptsBeforeGuestReboot()
```

##### `resetRunToolsScriptsBeforeGuestShutdown` <a name="resetRunToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestShutdown"></a>

```java
public void resetRunToolsScriptsBeforeGuestShutdown()
```

##### `resetRunToolsScriptsBeforeGuestStandby` <a name="resetRunToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestStandby"></a>

```java
public void resetRunToolsScriptsBeforeGuestStandby()
```

##### `resetSataControllerScanCount` <a name="resetSataControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSataControllerScanCount"></a>

```java
public void resetSataControllerScanCount()
```

##### `resetScsiControllerScanCount` <a name="resetScsiControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetScsiControllerScanCount"></a>

```java
public void resetScsiControllerScanCount()
```

##### `resetStoragePolicyId` <a name="resetStoragePolicyId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetStoragePolicyId"></a>

```java
public void resetStoragePolicyId()
```

##### `resetSwapPlacementPolicy` <a name="resetSwapPlacementPolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSwapPlacementPolicy"></a>

```java
public void resetSwapPlacementPolicy()
```

##### `resetSyncTimeWithHost` <a name="resetSyncTimeWithHost" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHost"></a>

```java
public void resetSyncTimeWithHost()
```

##### `resetSyncTimeWithHostPeriodically` <a name="resetSyncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHostPeriodically"></a>

```java
public void resetSyncTimeWithHostPeriodically()
```

##### `resetToolsUpgradePolicy` <a name="resetToolsUpgradePolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetToolsUpgradePolicy"></a>

```java
public void resetToolsUpgradePolicy()
```

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetUuid"></a>

```java
public void resetUuid()
```

##### `resetVapp` <a name="resetVapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVapp"></a>

```java
public void resetVapp()
```

##### `resetVbsEnabled` <a name="resetVbsEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVbsEnabled"></a>

```java
public void resetVbsEnabled()
```

##### `resetVvtdEnabled` <a name="resetVvtdEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVvtdEnabled"></a>

```java
public void resetVvtdEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVsphereVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_virtual_machine.DataVsphereVirtualMachine;

DataVsphereVirtualMachine.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_virtual_machine.DataVsphereVirtualMachine;

DataVsphereVirtualMachine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_virtual_machine.DataVsphereVirtualMachine;

DataVsphereVirtualMachine.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_virtual_machine.DataVsphereVirtualMachine;

DataVsphereVirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVsphereVirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVsphereVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVsphereVirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVsphereVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.changeVersion">changeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.defaultIpAddress">defaultIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.disks">disks</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList">DataVsphereVirtualMachineDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIpAddresses">guestIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.instanceUuid">instanceUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList">DataVsphereVirtualMachineNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaceTypes">networkInterfaceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiBusSharing">scsiBusSharing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiType">scsiType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vapp">vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference">DataVsphereVirtualMachineVappOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappTransport">vappTransport</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestNameInput">alternateGuestNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotationInput">annotationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelayInput">bootDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelayInput">bootRetryDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabledInput">bootRetryEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabledInput">cpuHotAddEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabledInput">cpuHotRemoveEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimitInput">cpuLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabledInput">cpuPerformanceCountersEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservationInput">cpuReservationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCountInput">cpuShareCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevelInput">cpuShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabledInput">efiSecureBootEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuidInput">enableDiskUuidInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLoggingInput">enableLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviModeInput">eptRviModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigInput">extraConfigInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequiredInput">extraConfigRebootRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmwareInput">firmwareInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIdInput">guestIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersionInput">hardwareVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvModeInput">hvModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCountInput">ideControllerScanCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivityInput">latencySensitivityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabledInput">memoryHotAddEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryInput">memoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimitInput">memoryLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationInput">memoryReservationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationLockedToMaxInput">memoryReservationLockedToMaxInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCountInput">memoryShareCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevelInput">memoryShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moidInput">moidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabledInput">nestedHvEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocketInput">numCoresPerSocketInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpusInput">numCpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTriggerInput">replaceTriggerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOnInput">runToolsScriptsAfterPowerOnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResumeInput">runToolsScriptsAfterResumeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestRebootInput">runToolsScriptsBeforeGuestRebootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput">runToolsScriptsBeforeGuestShutdownInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput">runToolsScriptsBeforeGuestStandbyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCountInput">sataControllerScanCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCountInput">scsiControllerScanCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyIdInput">storagePolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicyInput">swapPlacementPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostInput">syncTimeWithHostInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodicallyInput">syncTimeWithHostPeriodicallyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicyInput">toolsUpgradePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuidInput">uuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappInput">vappInput</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabledInput">vbsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabledInput">vvtdEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestName">alternateGuestName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotation">annotation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelay">bootDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelay">bootRetryDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabled">bootRetryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabled">cpuHotAddEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabled">cpuHotRemoveEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimit">cpuLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabled">cpuPerformanceCountersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservation">cpuReservation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCount">cpuShareCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevel">cpuShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabled">efiSecureBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuid">enableDiskUuid</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviMode">eptRviMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfig">extraConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequired">extraConfigRebootRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmware">firmware</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestId">guestId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersion">hardwareVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvMode">hvMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCount">ideControllerScanCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivity">latencySensitivity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memory">memory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabled">memoryHotAddEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimit">memoryLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservation">memoryReservation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationLockedToMax">memoryReservationLockedToMax</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCount">memoryShareCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevel">memoryShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moid">moid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabled">nestedHvEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocket">numCoresPerSocket</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpus">numCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTrigger">replaceTrigger</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOn">runToolsScriptsAfterPowerOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResume">runToolsScriptsAfterResume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestReboot">runToolsScriptsBeforeGuestReboot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdown">runToolsScriptsBeforeGuestShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandby">runToolsScriptsBeforeGuestStandby</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCount">sataControllerScanCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCount">scsiControllerScanCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyId">storagePolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicy">swapPlacementPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHost">syncTimeWithHost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodically">syncTimeWithHostPeriodically</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicy">toolsUpgradePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabled">vbsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabled">vvtdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `changeVersion`<sup>Required</sup> <a name="changeVersion" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.changeVersion"></a>

```java
public java.lang.String getChangeVersion();
```

- *Type:* java.lang.String

---

##### `defaultIpAddress`<sup>Required</sup> <a name="defaultIpAddress" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.defaultIpAddress"></a>

```java
public java.lang.String getDefaultIpAddress();
```

- *Type:* java.lang.String

---

##### `disks`<sup>Required</sup> <a name="disks" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.disks"></a>

```java
public DataVsphereVirtualMachineDisksList getDisks();
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList">DataVsphereVirtualMachineDisksList</a>

---

##### `guestIpAddresses`<sup>Required</sup> <a name="guestIpAddresses" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIpAddresses"></a>

```java
public java.util.List<java.lang.String> getGuestIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `instanceUuid`<sup>Required</sup> <a name="instanceUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.instanceUuid"></a>

```java
public java.lang.String getInstanceUuid();
```

- *Type:* java.lang.String

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaces"></a>

```java
public DataVsphereVirtualMachineNetworkInterfacesList getNetworkInterfaces();
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList">DataVsphereVirtualMachineNetworkInterfacesList</a>

---

##### `networkInterfaceTypes`<sup>Required</sup> <a name="networkInterfaceTypes" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaceTypes"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scsiBusSharing`<sup>Required</sup> <a name="scsiBusSharing" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiBusSharing"></a>

```java
public java.lang.String getScsiBusSharing();
```

- *Type:* java.lang.String

---

##### `scsiType`<sup>Required</sup> <a name="scsiType" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiType"></a>

```java
public java.lang.String getScsiType();
```

- *Type:* java.lang.String

---

##### `vapp`<sup>Required</sup> <a name="vapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vapp"></a>

```java
public DataVsphereVirtualMachineVappOutputReference getVapp();
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference">DataVsphereVirtualMachineVappOutputReference</a>

---

##### `vappTransport`<sup>Required</sup> <a name="vappTransport" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappTransport"></a>

```java
public java.util.List<java.lang.String> getVappTransport();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alternateGuestNameInput`<sup>Optional</sup> <a name="alternateGuestNameInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestNameInput"></a>

```java
public java.lang.String getAlternateGuestNameInput();
```

- *Type:* java.lang.String

---

##### `annotationInput`<sup>Optional</sup> <a name="annotationInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotationInput"></a>

```java
public java.lang.String getAnnotationInput();
```

- *Type:* java.lang.String

---

##### `bootDelayInput`<sup>Optional</sup> <a name="bootDelayInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelayInput"></a>

```java
public java.lang.Number getBootDelayInput();
```

- *Type:* java.lang.Number

---

##### `bootRetryDelayInput`<sup>Optional</sup> <a name="bootRetryDelayInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelayInput"></a>

```java
public java.lang.Number getBootRetryDelayInput();
```

- *Type:* java.lang.Number

---

##### `bootRetryEnabledInput`<sup>Optional</sup> <a name="bootRetryEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabledInput"></a>

```java
public java.lang.Object getBootRetryEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuHotAddEnabledInput`<sup>Optional</sup> <a name="cpuHotAddEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabledInput"></a>

```java
public java.lang.Object getCpuHotAddEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuHotRemoveEnabledInput`<sup>Optional</sup> <a name="cpuHotRemoveEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabledInput"></a>

```java
public java.lang.Object getCpuHotRemoveEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuLimitInput`<sup>Optional</sup> <a name="cpuLimitInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimitInput"></a>

```java
public java.lang.Number getCpuLimitInput();
```

- *Type:* java.lang.Number

---

##### `cpuPerformanceCountersEnabledInput`<sup>Optional</sup> <a name="cpuPerformanceCountersEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabledInput"></a>

```java
public java.lang.Object getCpuPerformanceCountersEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuReservationInput`<sup>Optional</sup> <a name="cpuReservationInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservationInput"></a>

```java
public java.lang.Number getCpuReservationInput();
```

- *Type:* java.lang.Number

---

##### `cpuShareCountInput`<sup>Optional</sup> <a name="cpuShareCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCountInput"></a>

```java
public java.lang.Number getCpuShareCountInput();
```

- *Type:* java.lang.Number

---

##### `cpuShareLevelInput`<sup>Optional</sup> <a name="cpuShareLevelInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevelInput"></a>

```java
public java.lang.String getCpuShareLevelInput();
```

- *Type:* java.lang.String

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `efiSecureBootEnabledInput`<sup>Optional</sup> <a name="efiSecureBootEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabledInput"></a>

```java
public java.lang.Object getEfiSecureBootEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDiskUuidInput`<sup>Optional</sup> <a name="enableDiskUuidInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuidInput"></a>

```java
public java.lang.Object getEnableDiskUuidInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLoggingInput"></a>

```java
public java.lang.Object getEnableLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eptRviModeInput`<sup>Optional</sup> <a name="eptRviModeInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviModeInput"></a>

```java
public java.lang.String getEptRviModeInput();
```

- *Type:* java.lang.String

---

##### `extraConfigInput`<sup>Optional</sup> <a name="extraConfigInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `extraConfigRebootRequiredInput`<sup>Optional</sup> <a name="extraConfigRebootRequiredInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequiredInput"></a>

```java
public java.lang.Object getExtraConfigRebootRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firmwareInput`<sup>Optional</sup> <a name="firmwareInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmwareInput"></a>

```java
public java.lang.String getFirmwareInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `guestIdInput`<sup>Optional</sup> <a name="guestIdInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIdInput"></a>

```java
public java.lang.String getGuestIdInput();
```

- *Type:* java.lang.String

---

##### `hardwareVersionInput`<sup>Optional</sup> <a name="hardwareVersionInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersionInput"></a>

```java
public java.lang.Number getHardwareVersionInput();
```

- *Type:* java.lang.Number

---

##### `hvModeInput`<sup>Optional</sup> <a name="hvModeInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvModeInput"></a>

```java
public java.lang.String getHvModeInput();
```

- *Type:* java.lang.String

---

##### `ideControllerScanCountInput`<sup>Optional</sup> <a name="ideControllerScanCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCountInput"></a>

```java
public java.lang.Number getIdeControllerScanCountInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `latencySensitivityInput`<sup>Optional</sup> <a name="latencySensitivityInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivityInput"></a>

```java
public java.lang.String getLatencySensitivityInput();
```

- *Type:* java.lang.String

---

##### `memoryHotAddEnabledInput`<sup>Optional</sup> <a name="memoryHotAddEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabledInput"></a>

```java
public java.lang.Object getMemoryHotAddEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryInput"></a>

```java
public java.lang.Number getMemoryInput();
```

- *Type:* java.lang.Number

---

##### `memoryLimitInput`<sup>Optional</sup> <a name="memoryLimitInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimitInput"></a>

```java
public java.lang.Number getMemoryLimitInput();
```

- *Type:* java.lang.Number

---

##### `memoryReservationInput`<sup>Optional</sup> <a name="memoryReservationInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationInput"></a>

```java
public java.lang.Number getMemoryReservationInput();
```

- *Type:* java.lang.Number

---

##### `memoryReservationLockedToMaxInput`<sup>Optional</sup> <a name="memoryReservationLockedToMaxInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationLockedToMaxInput"></a>

```java
public java.lang.Object getMemoryReservationLockedToMaxInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `memoryShareCountInput`<sup>Optional</sup> <a name="memoryShareCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCountInput"></a>

```java
public java.lang.Number getMemoryShareCountInput();
```

- *Type:* java.lang.Number

---

##### `memoryShareLevelInput`<sup>Optional</sup> <a name="memoryShareLevelInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevelInput"></a>

```java
public java.lang.String getMemoryShareLevelInput();
```

- *Type:* java.lang.String

---

##### `moidInput`<sup>Optional</sup> <a name="moidInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moidInput"></a>

```java
public java.lang.String getMoidInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nestedHvEnabledInput`<sup>Optional</sup> <a name="nestedHvEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabledInput"></a>

```java
public java.lang.Object getNestedHvEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `numCoresPerSocketInput`<sup>Optional</sup> <a name="numCoresPerSocketInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocketInput"></a>

```java
public java.lang.Number getNumCoresPerSocketInput();
```

- *Type:* java.lang.Number

---

##### `numCpusInput`<sup>Optional</sup> <a name="numCpusInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpusInput"></a>

```java
public java.lang.Number getNumCpusInput();
```

- *Type:* java.lang.Number

---

##### `replaceTriggerInput`<sup>Optional</sup> <a name="replaceTriggerInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTriggerInput"></a>

```java
public java.lang.String getReplaceTriggerInput();
```

- *Type:* java.lang.String

---

##### `runToolsScriptsAfterPowerOnInput`<sup>Optional</sup> <a name="runToolsScriptsAfterPowerOnInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOnInput"></a>

```java
public java.lang.Object getRunToolsScriptsAfterPowerOnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runToolsScriptsAfterResumeInput`<sup>Optional</sup> <a name="runToolsScriptsAfterResumeInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResumeInput"></a>

```java
public java.lang.Object getRunToolsScriptsAfterResumeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestRebootInput`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestRebootInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestRebootInput"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestRebootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestShutdownInput`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestShutdownInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestShutdownInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestStandbyInput`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestStandbyInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestStandbyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sataControllerScanCountInput`<sup>Optional</sup> <a name="sataControllerScanCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCountInput"></a>

```java
public java.lang.Number getSataControllerScanCountInput();
```

- *Type:* java.lang.Number

---

##### `scsiControllerScanCountInput`<sup>Optional</sup> <a name="scsiControllerScanCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCountInput"></a>

```java
public java.lang.Number getScsiControllerScanCountInput();
```

- *Type:* java.lang.Number

---

##### `storagePolicyIdInput`<sup>Optional</sup> <a name="storagePolicyIdInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyIdInput"></a>

```java
public java.lang.String getStoragePolicyIdInput();
```

- *Type:* java.lang.String

---

##### `swapPlacementPolicyInput`<sup>Optional</sup> <a name="swapPlacementPolicyInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicyInput"></a>

```java
public java.lang.String getSwapPlacementPolicyInput();
```

- *Type:* java.lang.String

---

##### `syncTimeWithHostInput`<sup>Optional</sup> <a name="syncTimeWithHostInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostInput"></a>

```java
public java.lang.Object getSyncTimeWithHostInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `syncTimeWithHostPeriodicallyInput`<sup>Optional</sup> <a name="syncTimeWithHostPeriodicallyInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodicallyInput"></a>

```java
public java.lang.Object getSyncTimeWithHostPeriodicallyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `toolsUpgradePolicyInput`<sup>Optional</sup> <a name="toolsUpgradePolicyInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicyInput"></a>

```java
public java.lang.String getToolsUpgradePolicyInput();
```

- *Type:* java.lang.String

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuidInput"></a>

```java
public java.lang.String getUuidInput();
```

- *Type:* java.lang.String

---

##### `vappInput`<sup>Optional</sup> <a name="vappInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappInput"></a>

```java
public DataVsphereVirtualMachineVapp getVappInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

---

##### `vbsEnabledInput`<sup>Optional</sup> <a name="vbsEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabledInput"></a>

```java
public java.lang.Object getVbsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vvtdEnabledInput`<sup>Optional</sup> <a name="vvtdEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabledInput"></a>

```java
public java.lang.Object getVvtdEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alternateGuestName`<sup>Required</sup> <a name="alternateGuestName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestName"></a>

```java
public java.lang.String getAlternateGuestName();
```

- *Type:* java.lang.String

---

##### `annotation`<sup>Required</sup> <a name="annotation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotation"></a>

```java
public java.lang.String getAnnotation();
```

- *Type:* java.lang.String

---

##### `bootDelay`<sup>Required</sup> <a name="bootDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelay"></a>

```java
public java.lang.Number getBootDelay();
```

- *Type:* java.lang.Number

---

##### `bootRetryDelay`<sup>Required</sup> <a name="bootRetryDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelay"></a>

```java
public java.lang.Number getBootRetryDelay();
```

- *Type:* java.lang.Number

---

##### `bootRetryEnabled`<sup>Required</sup> <a name="bootRetryEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabled"></a>

```java
public java.lang.Object getBootRetryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuHotAddEnabled`<sup>Required</sup> <a name="cpuHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabled"></a>

```java
public java.lang.Object getCpuHotAddEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuHotRemoveEnabled`<sup>Required</sup> <a name="cpuHotRemoveEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabled"></a>

```java
public java.lang.Object getCpuHotRemoveEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuLimit`<sup>Required</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimit"></a>

```java
public java.lang.Number getCpuLimit();
```

- *Type:* java.lang.Number

---

##### `cpuPerformanceCountersEnabled`<sup>Required</sup> <a name="cpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabled"></a>

```java
public java.lang.Object getCpuPerformanceCountersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuReservation`<sup>Required</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservation"></a>

```java
public java.lang.Number getCpuReservation();
```

- *Type:* java.lang.Number

---

##### `cpuShareCount`<sup>Required</sup> <a name="cpuShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCount"></a>

```java
public java.lang.Number getCpuShareCount();
```

- *Type:* java.lang.Number

---

##### `cpuShareLevel`<sup>Required</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevel"></a>

```java
public java.lang.String getCpuShareLevel();
```

- *Type:* java.lang.String

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `efiSecureBootEnabled`<sup>Required</sup> <a name="efiSecureBootEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabled"></a>

```java
public java.lang.Object getEfiSecureBootEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDiskUuid`<sup>Required</sup> <a name="enableDiskUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuid"></a>

```java
public java.lang.Object getEnableDiskUuid();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eptRviMode`<sup>Required</sup> <a name="eptRviMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviMode"></a>

```java
public java.lang.String getEptRviMode();
```

- *Type:* java.lang.String

---

##### `extraConfig`<sup>Required</sup> <a name="extraConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `extraConfigRebootRequired`<sup>Required</sup> <a name="extraConfigRebootRequired" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequired"></a>

```java
public java.lang.Object getExtraConfigRebootRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmware"></a>

```java
public java.lang.String getFirmware();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `guestId`<sup>Required</sup> <a name="guestId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestId"></a>

```java
public java.lang.String getGuestId();
```

- *Type:* java.lang.String

---

##### `hardwareVersion`<sup>Required</sup> <a name="hardwareVersion" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersion"></a>

```java
public java.lang.Number getHardwareVersion();
```

- *Type:* java.lang.Number

---

##### `hvMode`<sup>Required</sup> <a name="hvMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvMode"></a>

```java
public java.lang.String getHvMode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ideControllerScanCount`<sup>Required</sup> <a name="ideControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCount"></a>

```java
public java.lang.Number getIdeControllerScanCount();
```

- *Type:* java.lang.Number

---

##### `latencySensitivity`<sup>Required</sup> <a name="latencySensitivity" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivity"></a>

```java
public java.lang.String getLatencySensitivity();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

---

##### `memoryHotAddEnabled`<sup>Required</sup> <a name="memoryHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabled"></a>

```java
public java.lang.Object getMemoryHotAddEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `memoryLimit`<sup>Required</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimit"></a>

```java
public java.lang.Number getMemoryLimit();
```

- *Type:* java.lang.Number

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservation"></a>

```java
public java.lang.Number getMemoryReservation();
```

- *Type:* java.lang.Number

---

##### `memoryReservationLockedToMax`<sup>Required</sup> <a name="memoryReservationLockedToMax" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationLockedToMax"></a>

```java
public java.lang.Object getMemoryReservationLockedToMax();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `memoryShareCount`<sup>Required</sup> <a name="memoryShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCount"></a>

```java
public java.lang.Number getMemoryShareCount();
```

- *Type:* java.lang.Number

---

##### `memoryShareLevel`<sup>Required</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevel"></a>

```java
public java.lang.String getMemoryShareLevel();
```

- *Type:* java.lang.String

---

##### `moid`<sup>Required</sup> <a name="moid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moid"></a>

```java
public java.lang.String getMoid();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nestedHvEnabled`<sup>Required</sup> <a name="nestedHvEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabled"></a>

```java
public java.lang.Object getNestedHvEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `numCoresPerSocket`<sup>Required</sup> <a name="numCoresPerSocket" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocket"></a>

```java
public java.lang.Number getNumCoresPerSocket();
```

- *Type:* java.lang.Number

---

##### `numCpus`<sup>Required</sup> <a name="numCpus" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpus"></a>

```java
public java.lang.Number getNumCpus();
```

- *Type:* java.lang.Number

---

##### `replaceTrigger`<sup>Required</sup> <a name="replaceTrigger" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTrigger"></a>

```java
public java.lang.String getReplaceTrigger();
```

- *Type:* java.lang.String

---

##### `runToolsScriptsAfterPowerOn`<sup>Required</sup> <a name="runToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOn"></a>

```java
public java.lang.Object getRunToolsScriptsAfterPowerOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runToolsScriptsAfterResume`<sup>Required</sup> <a name="runToolsScriptsAfterResume" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResume"></a>

```java
public java.lang.Object getRunToolsScriptsAfterResume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestReboot`<sup>Required</sup> <a name="runToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestReboot"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestReboot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestShutdown`<sup>Required</sup> <a name="runToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdown"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestShutdown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestStandby`<sup>Required</sup> <a name="runToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandby"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestStandby();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sataControllerScanCount`<sup>Required</sup> <a name="sataControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCount"></a>

```java
public java.lang.Number getSataControllerScanCount();
```

- *Type:* java.lang.Number

---

##### `scsiControllerScanCount`<sup>Required</sup> <a name="scsiControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCount"></a>

```java
public java.lang.Number getScsiControllerScanCount();
```

- *Type:* java.lang.Number

---

##### `storagePolicyId`<sup>Required</sup> <a name="storagePolicyId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyId"></a>

```java
public java.lang.String getStoragePolicyId();
```

- *Type:* java.lang.String

---

##### `swapPlacementPolicy`<sup>Required</sup> <a name="swapPlacementPolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicy"></a>

```java
public java.lang.String getSwapPlacementPolicy();
```

- *Type:* java.lang.String

---

##### `syncTimeWithHost`<sup>Required</sup> <a name="syncTimeWithHost" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHost"></a>

```java
public java.lang.Object getSyncTimeWithHost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `syncTimeWithHostPeriodically`<sup>Required</sup> <a name="syncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodically"></a>

```java
public java.lang.Object getSyncTimeWithHostPeriodically();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `toolsUpgradePolicy`<sup>Required</sup> <a name="toolsUpgradePolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicy"></a>

```java
public java.lang.String getToolsUpgradePolicy();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `vbsEnabled`<sup>Required</sup> <a name="vbsEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabled"></a>

```java
public java.lang.Object getVbsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vvtdEnabled`<sup>Required</sup> <a name="vvtdEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabled"></a>

```java
public java.lang.Object getVvtdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereVirtualMachineConfig <a name="DataVsphereVirtualMachineConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_virtual_machine.DataVsphereVirtualMachineConfig;

DataVsphereVirtualMachineConfig.builder()
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
//  .alternateGuestName(java.lang.String)
//  .annotation(java.lang.String)
//  .bootDelay(java.lang.Number)
//  .bootRetryDelay(java.lang.Number)
//  .bootRetryEnabled(java.lang.Boolean)
//  .bootRetryEnabled(IResolvable)
//  .cpuHotAddEnabled(java.lang.Boolean)
//  .cpuHotAddEnabled(IResolvable)
//  .cpuHotRemoveEnabled(java.lang.Boolean)
//  .cpuHotRemoveEnabled(IResolvable)
//  .cpuLimit(java.lang.Number)
//  .cpuPerformanceCountersEnabled(java.lang.Boolean)
//  .cpuPerformanceCountersEnabled(IResolvable)
//  .cpuReservation(java.lang.Number)
//  .cpuShareCount(java.lang.Number)
//  .cpuShareLevel(java.lang.String)
//  .datacenterId(java.lang.String)
//  .efiSecureBootEnabled(java.lang.Boolean)
//  .efiSecureBootEnabled(IResolvable)
//  .enableDiskUuid(java.lang.Boolean)
//  .enableDiskUuid(IResolvable)
//  .enableLogging(java.lang.Boolean)
//  .enableLogging(IResolvable)
//  .eptRviMode(java.lang.String)
//  .extraConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .extraConfigRebootRequired(java.lang.Boolean)
//  .extraConfigRebootRequired(IResolvable)
//  .firmware(java.lang.String)
//  .folder(java.lang.String)
//  .guestId(java.lang.String)
//  .hardwareVersion(java.lang.Number)
//  .hvMode(java.lang.String)
//  .id(java.lang.String)
//  .ideControllerScanCount(java.lang.Number)
//  .latencySensitivity(java.lang.String)
//  .memory(java.lang.Number)
//  .memoryHotAddEnabled(java.lang.Boolean)
//  .memoryHotAddEnabled(IResolvable)
//  .memoryLimit(java.lang.Number)
//  .memoryReservation(java.lang.Number)
//  .memoryReservationLockedToMax(java.lang.Boolean)
//  .memoryReservationLockedToMax(IResolvable)
//  .memoryShareCount(java.lang.Number)
//  .memoryShareLevel(java.lang.String)
//  .moid(java.lang.String)
//  .name(java.lang.String)
//  .nestedHvEnabled(java.lang.Boolean)
//  .nestedHvEnabled(IResolvable)
//  .numCoresPerSocket(java.lang.Number)
//  .numCpus(java.lang.Number)
//  .replaceTrigger(java.lang.String)
//  .runToolsScriptsAfterPowerOn(java.lang.Boolean)
//  .runToolsScriptsAfterPowerOn(IResolvable)
//  .runToolsScriptsAfterResume(java.lang.Boolean)
//  .runToolsScriptsAfterResume(IResolvable)
//  .runToolsScriptsBeforeGuestReboot(java.lang.Boolean)
//  .runToolsScriptsBeforeGuestReboot(IResolvable)
//  .runToolsScriptsBeforeGuestShutdown(java.lang.Boolean)
//  .runToolsScriptsBeforeGuestShutdown(IResolvable)
//  .runToolsScriptsBeforeGuestStandby(java.lang.Boolean)
//  .runToolsScriptsBeforeGuestStandby(IResolvable)
//  .sataControllerScanCount(java.lang.Number)
//  .scsiControllerScanCount(java.lang.Number)
//  .storagePolicyId(java.lang.String)
//  .swapPlacementPolicy(java.lang.String)
//  .syncTimeWithHost(java.lang.Boolean)
//  .syncTimeWithHost(IResolvable)
//  .syncTimeWithHostPeriodically(java.lang.Boolean)
//  .syncTimeWithHostPeriodically(IResolvable)
//  .toolsUpgradePolicy(java.lang.String)
//  .uuid(java.lang.String)
//  .vapp(DataVsphereVirtualMachineVapp)
//  .vbsEnabled(java.lang.Boolean)
//  .vbsEnabled(IResolvable)
//  .vvtdEnabled(java.lang.Boolean)
//  .vvtdEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.alternateGuestName">alternateGuestName</a></code> | <code>java.lang.String</code> | The guest name for the operating system when guest_id is otherGuest or otherGuest64. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.annotation">annotation</a></code> | <code>java.lang.String</code> | User-provided description of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootDelay">bootDelay</a></code> | <code>java.lang.Number</code> | The number of milliseconds to wait before starting the boot sequence. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryDelay">bootRetryDelay</a></code> | <code>java.lang.Number</code> | The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryEnabled">bootRetryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotAddEnabled">cpuHotAddEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotRemoveEnabled">cpuHotRemoveEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuLimit">cpuLimit</a></code> | <code>java.lang.Number</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuPerformanceCountersEnabled">cpuPerformanceCountersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable CPU performance counters on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuReservation">cpuReservation</a></code> | <code>java.lang.Number</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareCount">cpuShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to cpu for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareLevel">cpuShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for cpu resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | The managed object ID of the datacenter the virtual machine is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.efiSecureBootEnabled">efiSecureBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When the boot type set in firmware is efi, this enables EFI secure boot. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableDiskUuid">enableDiskUuid</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable logging on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.eptRviMode">eptRviMode</a></code> | <code>java.lang.String</code> | The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfig">extraConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Extra configuration data for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfigRebootRequired">extraConfigRebootRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow the virtual machine to be rebooted when a change to `extra_config` occurs. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.firmware">firmware</a></code> | <code>java.lang.String</code> | The firmware interface to use on the virtual machine. Can be one of bios or efi. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | The name of the folder the virtual machine is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.guestId">guestId</a></code> | <code>java.lang.String</code> | The guest ID for the operating system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hardwareVersion">hardwareVersion</a></code> | <code>java.lang.Number</code> | The hardware version for the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hvMode">hvMode</a></code> | <code>java.lang.String</code> | The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#id DataVsphereVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.ideControllerScanCount">ideControllerScanCount</a></code> | <code>java.lang.Number</code> | The number of IDE controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.latencySensitivity">latencySensitivity</a></code> | <code>java.lang.String</code> | Controls the scheduling delay of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memory">memory</a></code> | <code>java.lang.Number</code> | The size of the virtual machine's memory, in MB. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryHotAddEnabled">memoryHotAddEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow memory to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryLimit">memoryLimit</a></code> | <code>java.lang.Number</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryReservation">memoryReservation</a></code> | <code>java.lang.Number</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryReservationLockedToMax">memoryReservationLockedToMax</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareCount">memoryShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to memory for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareLevel">memoryShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for memory resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.moid">moid</a></code> | <code>java.lang.String</code> | The machine object ID from VMware vSphere. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.nestedHvEnabled">nestedHvEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCoresPerSocket">numCoresPerSocket</a></code> | <code>java.lang.Number</code> | The number of cores to distribute amongst the CPUs in this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCpus">numCpus</a></code> | <code>java.lang.Number</code> | The number of virtual processors to assign to this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.replaceTrigger">replaceTrigger</a></code> | <code>java.lang.String</code> | Triggers replacement of resource whenever it changes. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterPowerOn">runToolsScriptsAfterPowerOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts after virtual machine power-on when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterResume">runToolsScriptsAfterResume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts after virtual machine resume when when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot">runToolsScriptsBeforeGuestReboot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts before guest operating system reboot when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown">runToolsScriptsBeforeGuestShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts before guest operating system shutdown when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby">runToolsScriptsBeforeGuestStandby</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts before guest operating system standby when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.sataControllerScanCount">sataControllerScanCount</a></code> | <code>java.lang.Number</code> | The number of SATA controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.scsiControllerScanCount">scsiControllerScanCount</a></code> | <code>java.lang.Number</code> | The number of SCSI controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.storagePolicyId">storagePolicyId</a></code> | <code>java.lang.String</code> | The ID of the storage policy to assign to the virtual machine home directory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.swapPlacementPolicy">swapPlacementPolicy</a></code> | <code>java.lang.String</code> | The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHost">syncTimeWithHost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable guest clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHostPeriodically">syncTimeWithHostPeriodically</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable periodic clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.toolsUpgradePolicy">toolsUpgradePolicy</a></code> | <code>java.lang.String</code> | Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.uuid">uuid</a></code> | <code>java.lang.String</code> | The UUID of the virtual machine. Also exposed as the ID of the resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vapp">vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a></code> | vapp block. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vbsEnabled">vbsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to specify if Virtualization-based security is enabled for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vvtdEnabled">vvtdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alternateGuestName`<sup>Optional</sup> <a name="alternateGuestName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.alternateGuestName"></a>

```java
public java.lang.String getAlternateGuestName();
```

- *Type:* java.lang.String

The guest name for the operating system when guest_id is otherGuest or otherGuest64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#alternate_guest_name DataVsphereVirtualMachine#alternate_guest_name}

---

##### `annotation`<sup>Optional</sup> <a name="annotation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.annotation"></a>

```java
public java.lang.String getAnnotation();
```

- *Type:* java.lang.String

User-provided description of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#annotation DataVsphereVirtualMachine#annotation}

---

##### `bootDelay`<sup>Optional</sup> <a name="bootDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootDelay"></a>

```java
public java.lang.Number getBootDelay();
```

- *Type:* java.lang.Number

The number of milliseconds to wait before starting the boot sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#boot_delay DataVsphereVirtualMachine#boot_delay}

---

##### `bootRetryDelay`<sup>Optional</sup> <a name="bootRetryDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryDelay"></a>

```java
public java.lang.Number getBootRetryDelay();
```

- *Type:* java.lang.Number

The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#boot_retry_delay DataVsphereVirtualMachine#boot_retry_delay}

---

##### `bootRetryEnabled`<sup>Optional</sup> <a name="bootRetryEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryEnabled"></a>

```java
public java.lang.Object getBootRetryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#boot_retry_enabled DataVsphereVirtualMachine#boot_retry_enabled}

---

##### `cpuHotAddEnabled`<sup>Optional</sup> <a name="cpuHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotAddEnabled"></a>

```java
public java.lang.Object getCpuHotAddEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#cpu_hot_add_enabled DataVsphereVirtualMachine#cpu_hot_add_enabled}

---

##### `cpuHotRemoveEnabled`<sup>Optional</sup> <a name="cpuHotRemoveEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotRemoveEnabled"></a>

```java
public java.lang.Object getCpuHotRemoveEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#cpu_hot_remove_enabled DataVsphereVirtualMachine#cpu_hot_remove_enabled}

---

##### `cpuLimit`<sup>Optional</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuLimit"></a>

```java
public java.lang.Number getCpuLimit();
```

- *Type:* java.lang.Number

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#cpu_limit DataVsphereVirtualMachine#cpu_limit}

---

##### `cpuPerformanceCountersEnabled`<sup>Optional</sup> <a name="cpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuPerformanceCountersEnabled"></a>

```java
public java.lang.Object getCpuPerformanceCountersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable CPU performance counters on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#cpu_performance_counters_enabled DataVsphereVirtualMachine#cpu_performance_counters_enabled}

---

##### `cpuReservation`<sup>Optional</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuReservation"></a>

```java
public java.lang.Number getCpuReservation();
```

- *Type:* java.lang.Number

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#cpu_reservation DataVsphereVirtualMachine#cpu_reservation}

---

##### `cpuShareCount`<sup>Optional</sup> <a name="cpuShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareCount"></a>

```java
public java.lang.Number getCpuShareCount();
```

- *Type:* java.lang.Number

The amount of shares to allocate to cpu for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#cpu_share_count DataVsphereVirtualMachine#cpu_share_count}

---

##### `cpuShareLevel`<sup>Optional</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareLevel"></a>

```java
public java.lang.String getCpuShareLevel();
```

- *Type:* java.lang.String

The allocation level for cpu resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#cpu_share_level DataVsphereVirtualMachine#cpu_share_level}

---

##### `datacenterId`<sup>Optional</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

The managed object ID of the datacenter the virtual machine is in.

This is not required when using ESXi directly, or if there is only one datacenter in your infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#datacenter_id DataVsphereVirtualMachine#datacenter_id}

---

##### `efiSecureBootEnabled`<sup>Optional</sup> <a name="efiSecureBootEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.efiSecureBootEnabled"></a>

```java
public java.lang.Object getEfiSecureBootEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When the boot type set in firmware is efi, this enables EFI secure boot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#efi_secure_boot_enabled DataVsphereVirtualMachine#efi_secure_boot_enabled}

---

##### `enableDiskUuid`<sup>Optional</sup> <a name="enableDiskUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableDiskUuid"></a>

```java
public java.lang.Object getEnableDiskUuid();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#enable_disk_uuid DataVsphereVirtualMachine#enable_disk_uuid}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable logging on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#enable_logging DataVsphereVirtualMachine#enable_logging}

---

##### `eptRviMode`<sup>Optional</sup> <a name="eptRviMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.eptRviMode"></a>

```java
public java.lang.String getEptRviMode();
```

- *Type:* java.lang.String

The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#ept_rvi_mode DataVsphereVirtualMachine#ept_rvi_mode}

---

##### `extraConfig`<sup>Optional</sup> <a name="extraConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Extra configuration data for this virtual machine.

Can be used to supply advanced parameters not normally in configuration, such as instance metadata, or configuration data for OVF images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#extra_config DataVsphereVirtualMachine#extra_config}

---

##### `extraConfigRebootRequired`<sup>Optional</sup> <a name="extraConfigRebootRequired" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfigRebootRequired"></a>

```java
public java.lang.Object getExtraConfigRebootRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow the virtual machine to be rebooted when a change to `extra_config` occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#extra_config_reboot_required DataVsphereVirtualMachine#extra_config_reboot_required}

---

##### `firmware`<sup>Optional</sup> <a name="firmware" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.firmware"></a>

```java
public java.lang.String getFirmware();
```

- *Type:* java.lang.String

The firmware interface to use on the virtual machine. Can be one of bios or efi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#firmware DataVsphereVirtualMachine#firmware}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

The name of the folder the virtual machine is in.

Allows distinguishing virtual machines with the same name in different folder paths

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#folder DataVsphereVirtualMachine#folder}

---

##### `guestId`<sup>Optional</sup> <a name="guestId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.guestId"></a>

```java
public java.lang.String getGuestId();
```

- *Type:* java.lang.String

The guest ID for the operating system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#guest_id DataVsphereVirtualMachine#guest_id}

---

##### `hardwareVersion`<sup>Optional</sup> <a name="hardwareVersion" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hardwareVersion"></a>

```java
public java.lang.Number getHardwareVersion();
```

- *Type:* java.lang.Number

The hardware version for the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#hardware_version DataVsphereVirtualMachine#hardware_version}

---

##### `hvMode`<sup>Optional</sup> <a name="hvMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hvMode"></a>

```java
public java.lang.String getHvMode();
```

- *Type:* java.lang.String

The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#hv_mode DataVsphereVirtualMachine#hv_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#id DataVsphereVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ideControllerScanCount`<sup>Optional</sup> <a name="ideControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.ideControllerScanCount"></a>

```java
public java.lang.Number getIdeControllerScanCount();
```

- *Type:* java.lang.Number

The number of IDE controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#ide_controller_scan_count DataVsphereVirtualMachine#ide_controller_scan_count}

---

##### `latencySensitivity`<sup>Optional</sup> <a name="latencySensitivity" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.latencySensitivity"></a>

```java
public java.lang.String getLatencySensitivity();
```

- *Type:* java.lang.String

Controls the scheduling delay of the virtual machine.

Use a higher sensitivity for applications that require lower latency, such as VOIP, media player applications, or applications that require frequent access to mouse or keyboard devices. Can be one of low, normal, medium, or high.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#latency_sensitivity DataVsphereVirtualMachine#latency_sensitivity}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

The size of the virtual machine's memory, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#memory DataVsphereVirtualMachine#memory}

---

##### `memoryHotAddEnabled`<sup>Optional</sup> <a name="memoryHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryHotAddEnabled"></a>

```java
public java.lang.Object getMemoryHotAddEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow memory to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#memory_hot_add_enabled DataVsphereVirtualMachine#memory_hot_add_enabled}

---

##### `memoryLimit`<sup>Optional</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryLimit"></a>

```java
public java.lang.Number getMemoryLimit();
```

- *Type:* java.lang.Number

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#memory_limit DataVsphereVirtualMachine#memory_limit}

---

##### `memoryReservation`<sup>Optional</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryReservation"></a>

```java
public java.lang.Number getMemoryReservation();
```

- *Type:* java.lang.Number

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#memory_reservation DataVsphereVirtualMachine#memory_reservation}

---

##### `memoryReservationLockedToMax`<sup>Optional</sup> <a name="memoryReservationLockedToMax" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryReservationLockedToMax"></a>

```java
public java.lang.Object getMemoryReservationLockedToMax();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#memory_reservation_locked_to_max DataVsphereVirtualMachine#memory_reservation_locked_to_max}

---

##### `memoryShareCount`<sup>Optional</sup> <a name="memoryShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareCount"></a>

```java
public java.lang.Number getMemoryShareCount();
```

- *Type:* java.lang.Number

The amount of shares to allocate to memory for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#memory_share_count DataVsphereVirtualMachine#memory_share_count}

---

##### `memoryShareLevel`<sup>Optional</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareLevel"></a>

```java
public java.lang.String getMemoryShareLevel();
```

- *Type:* java.lang.String

The allocation level for memory resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#memory_share_level DataVsphereVirtualMachine#memory_share_level}

---

##### `moid`<sup>Optional</sup> <a name="moid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.moid"></a>

```java
public java.lang.String getMoid();
```

- *Type:* java.lang.String

The machine object ID from VMware vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#moid DataVsphereVirtualMachine#moid}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#name DataVsphereVirtualMachine#name}

---

##### `nestedHvEnabled`<sup>Optional</sup> <a name="nestedHvEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.nestedHvEnabled"></a>

```java
public java.lang.Object getNestedHvEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#nested_hv_enabled DataVsphereVirtualMachine#nested_hv_enabled}

---

##### `numCoresPerSocket`<sup>Optional</sup> <a name="numCoresPerSocket" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCoresPerSocket"></a>

```java
public java.lang.Number getNumCoresPerSocket();
```

- *Type:* java.lang.Number

The number of cores to distribute amongst the CPUs in this virtual machine.

If specified, the value supplied to num_cpus must be evenly divisible by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#num_cores_per_socket DataVsphereVirtualMachine#num_cores_per_socket}

---

##### `numCpus`<sup>Optional</sup> <a name="numCpus" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCpus"></a>

```java
public java.lang.Number getNumCpus();
```

- *Type:* java.lang.Number

The number of virtual processors to assign to this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#num_cpus DataVsphereVirtualMachine#num_cpus}

---

##### `replaceTrigger`<sup>Optional</sup> <a name="replaceTrigger" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.replaceTrigger"></a>

```java
public java.lang.String getReplaceTrigger();
```

- *Type:* java.lang.String

Triggers replacement of resource whenever it changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#replace_trigger DataVsphereVirtualMachine#replace_trigger}

---

##### `runToolsScriptsAfterPowerOn`<sup>Optional</sup> <a name="runToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterPowerOn"></a>

```java
public java.lang.Object getRunToolsScriptsAfterPowerOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts after virtual machine power-on when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#run_tools_scripts_after_power_on DataVsphereVirtualMachine#run_tools_scripts_after_power_on}

---

##### `runToolsScriptsAfterResume`<sup>Optional</sup> <a name="runToolsScriptsAfterResume" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterResume"></a>

```java
public java.lang.Object getRunToolsScriptsAfterResume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts after virtual machine resume when when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#run_tools_scripts_after_resume DataVsphereVirtualMachine#run_tools_scripts_after_resume}

---

##### `runToolsScriptsBeforeGuestReboot`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestReboot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts before guest operating system reboot when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_reboot DataVsphereVirtualMachine#run_tools_scripts_before_guest_reboot}

---

##### `runToolsScriptsBeforeGuestShutdown`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestShutdown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts before guest operating system shutdown when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_shutdown DataVsphereVirtualMachine#run_tools_scripts_before_guest_shutdown}

---

##### `runToolsScriptsBeforeGuestStandby`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestStandby();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts before guest operating system standby when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_standby DataVsphereVirtualMachine#run_tools_scripts_before_guest_standby}

---

##### `sataControllerScanCount`<sup>Optional</sup> <a name="sataControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.sataControllerScanCount"></a>

```java
public java.lang.Number getSataControllerScanCount();
```

- *Type:* java.lang.Number

The number of SATA controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#sata_controller_scan_count DataVsphereVirtualMachine#sata_controller_scan_count}

---

##### `scsiControllerScanCount`<sup>Optional</sup> <a name="scsiControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.scsiControllerScanCount"></a>

```java
public java.lang.Number getScsiControllerScanCount();
```

- *Type:* java.lang.Number

The number of SCSI controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#scsi_controller_scan_count DataVsphereVirtualMachine#scsi_controller_scan_count}

---

##### `storagePolicyId`<sup>Optional</sup> <a name="storagePolicyId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.storagePolicyId"></a>

```java
public java.lang.String getStoragePolicyId();
```

- *Type:* java.lang.String

The ID of the storage policy to assign to the virtual machine home directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#storage_policy_id DataVsphereVirtualMachine#storage_policy_id}

---

##### `swapPlacementPolicy`<sup>Optional</sup> <a name="swapPlacementPolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.swapPlacementPolicy"></a>

```java
public java.lang.String getSwapPlacementPolicy();
```

- *Type:* java.lang.String

The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#swap_placement_policy DataVsphereVirtualMachine#swap_placement_policy}

---

##### `syncTimeWithHost`<sup>Optional</sup> <a name="syncTimeWithHost" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHost"></a>

```java
public java.lang.Object getSyncTimeWithHost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable guest clock synchronization with the host.

On vSphere 7.0 U1 and above, with only this setting the clock is synchronized on startup and resume. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#sync_time_with_host DataVsphereVirtualMachine#sync_time_with_host}

---

##### `syncTimeWithHostPeriodically`<sup>Optional</sup> <a name="syncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHostPeriodically"></a>

```java
public java.lang.Object getSyncTimeWithHostPeriodically();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable periodic clock synchronization with the host.

Supported only on vSphere 7.0 U1 and above. On prior versions setting `sync_time_with_host` is enough for periodic synchronization. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#sync_time_with_host_periodically DataVsphereVirtualMachine#sync_time_with_host_periodically}

---

##### `toolsUpgradePolicy`<sup>Optional</sup> <a name="toolsUpgradePolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.toolsUpgradePolicy"></a>

```java
public java.lang.String getToolsUpgradePolicy();
```

- *Type:* java.lang.String

Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#tools_upgrade_policy DataVsphereVirtualMachine#tools_upgrade_policy}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

The UUID of the virtual machine. Also exposed as the ID of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#uuid DataVsphereVirtualMachine#uuid}

---

##### `vapp`<sup>Optional</sup> <a name="vapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vapp"></a>

```java
public DataVsphereVirtualMachineVapp getVapp();
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

vapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#vapp DataVsphereVirtualMachine#vapp}

---

##### `vbsEnabled`<sup>Optional</sup> <a name="vbsEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vbsEnabled"></a>

```java
public java.lang.Object getVbsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to specify if Virtualization-based security is enabled for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#vbs_enabled DataVsphereVirtualMachine#vbs_enabled}

---

##### `vvtdEnabled`<sup>Optional</sup> <a name="vvtdEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vvtdEnabled"></a>

```java
public java.lang.Object getVvtdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#vvtd_enabled DataVsphereVirtualMachine#vvtd_enabled}

---

### DataVsphereVirtualMachineDisks <a name="DataVsphereVirtualMachineDisks" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_virtual_machine.DataVsphereVirtualMachineDisks;

DataVsphereVirtualMachineDisks.builder()
    .build();
```


### DataVsphereVirtualMachineNetworkInterfaces <a name="DataVsphereVirtualMachineNetworkInterfaces" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_virtual_machine.DataVsphereVirtualMachineNetworkInterfaces;

DataVsphereVirtualMachineNetworkInterfaces.builder()
    .build();
```


### DataVsphereVirtualMachineVapp <a name="DataVsphereVirtualMachineVapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_virtual_machine.DataVsphereVirtualMachineVapp;

DataVsphereVirtualMachineVapp.builder()
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of customizable vApp properties and their values. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of customizable vApp properties and their values.

Allows customization of VMs cloned from OVF templates which have customizable vApp properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/virtual_machine#properties DataVsphereVirtualMachine#properties}

---

## Classes <a name="Classes" id="Classes"></a>

### DataVsphereVirtualMachineDisksList <a name="DataVsphereVirtualMachineDisksList" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_virtual_machine.DataVsphereVirtualMachineDisksList;

new DataVsphereVirtualMachineDisksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.get"></a>

```java
public DataVsphereVirtualMachineDisksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataVsphereVirtualMachineDisksOutputReference <a name="DataVsphereVirtualMachineDisksOutputReference" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_virtual_machine.DataVsphereVirtualMachineDisksOutputReference;

new DataVsphereVirtualMachineDisksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.eagerlyScrub">eagerlyScrub</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.thinProvisioned">thinProvisioned</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.unitNumber">unitNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks">DataVsphereVirtualMachineDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eagerlyScrub`<sup>Required</sup> <a name="eagerlyScrub" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.eagerlyScrub"></a>

```java
public IResolvable getEagerlyScrub();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `thinProvisioned`<sup>Required</sup> <a name="thinProvisioned" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.thinProvisioned"></a>

```java
public IResolvable getThinProvisioned();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `unitNumber`<sup>Required</sup> <a name="unitNumber" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.unitNumber"></a>

```java
public java.lang.Number getUnitNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.internalValue"></a>

```java
public DataVsphereVirtualMachineDisks getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks">DataVsphereVirtualMachineDisks</a>

---


### DataVsphereVirtualMachineNetworkInterfacesList <a name="DataVsphereVirtualMachineNetworkInterfacesList" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_virtual_machine.DataVsphereVirtualMachineNetworkInterfacesList;

new DataVsphereVirtualMachineNetworkInterfacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.get"></a>

```java
public DataVsphereVirtualMachineNetworkInterfacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataVsphereVirtualMachineNetworkInterfacesOutputReference <a name="DataVsphereVirtualMachineNetworkInterfacesOutputReference" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_virtual_machine.DataVsphereVirtualMachineNetworkInterfacesOutputReference;

new DataVsphereVirtualMachineNetworkInterfacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.adapterType">adapterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthLimit">bandwidthLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthReservation">bandwidthReservation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareCount">bandwidthShareCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareLevel">bandwidthShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.networkId">networkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.physicalFunction">physicalFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces">DataVsphereVirtualMachineNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adapterType`<sup>Required</sup> <a name="adapterType" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.adapterType"></a>

```java
public java.lang.String getAdapterType();
```

- *Type:* java.lang.String

---

##### `bandwidthLimit`<sup>Required</sup> <a name="bandwidthLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthLimit"></a>

```java
public java.lang.Number getBandwidthLimit();
```

- *Type:* java.lang.Number

---

##### `bandwidthReservation`<sup>Required</sup> <a name="bandwidthReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthReservation"></a>

```java
public java.lang.Number getBandwidthReservation();
```

- *Type:* java.lang.Number

---

##### `bandwidthShareCount`<sup>Required</sup> <a name="bandwidthShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareCount"></a>

```java
public java.lang.Number getBandwidthShareCount();
```

- *Type:* java.lang.Number

---

##### `bandwidthShareLevel`<sup>Required</sup> <a name="bandwidthShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareLevel"></a>

```java
public java.lang.String getBandwidthShareLevel();
```

- *Type:* java.lang.String

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

---

##### `physicalFunction`<sup>Required</sup> <a name="physicalFunction" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.physicalFunction"></a>

```java
public java.lang.String getPhysicalFunction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.internalValue"></a>

```java
public DataVsphereVirtualMachineNetworkInterfaces getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces">DataVsphereVirtualMachineNetworkInterfaces</a>

---


### DataVsphereVirtualMachineVappOutputReference <a name="DataVsphereVirtualMachineVappOutputReference" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.data_vsphere_virtual_machine.DataVsphereVirtualMachineVappOutputReference;

new DataVsphereVirtualMachineVappOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.internalValue"></a>

```java
public DataVsphereVirtualMachineVapp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

---



