# `virtualMachine` Submodule <a name="`virtualMachine` Submodule" id="@cdktf/provider-vsphere.virtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachine <a name="VirtualMachine" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine vsphere_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachine;

VirtualMachine.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .resourcePoolId(java.lang.String)
//  .alternateGuestName(java.lang.String)
//  .annotation(java.lang.String)
//  .bootDelay(java.lang.Number)
//  .bootRetryDelay(java.lang.Number)
//  .bootRetryEnabled(java.lang.Boolean)
//  .bootRetryEnabled(IResolvable)
//  .cdrom(IResolvable)
//  .cdrom(java.util.List<VirtualMachineCdrom>)
//  .clone(VirtualMachineClone)
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
//  .customAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .datacenterId(java.lang.String)
//  .datastoreClusterId(java.lang.String)
//  .datastoreId(java.lang.String)
//  .disk(IResolvable)
//  .disk(java.util.List<VirtualMachineDisk>)
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
//  .forcePowerOff(java.lang.Boolean)
//  .forcePowerOff(IResolvable)
//  .guestId(java.lang.String)
//  .hardwareVersion(java.lang.Number)
//  .hostSystemId(java.lang.String)
//  .hvMode(java.lang.String)
//  .id(java.lang.String)
//  .ideControllerCount(java.lang.Number)
//  .ignoredGuestIps(java.util.List<java.lang.String>)
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
//  .migrateWaitTimeout(java.lang.Number)
//  .nestedHvEnabled(java.lang.Boolean)
//  .nestedHvEnabled(IResolvable)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<VirtualMachineNetworkInterface>)
//  .numCoresPerSocket(java.lang.Number)
//  .numCpus(java.lang.Number)
//  .ovfDeploy(VirtualMachineOvfDeploy)
//  .pciDeviceId(java.util.List<java.lang.String>)
//  .poweronTimeout(java.lang.Number)
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
//  .sataControllerCount(java.lang.Number)
//  .scsiBusSharing(java.lang.String)
//  .scsiControllerCount(java.lang.Number)
//  .scsiType(java.lang.String)
//  .shutdownWaitTimeout(java.lang.Number)
//  .storagePolicyId(java.lang.String)
//  .swapPlacementPolicy(java.lang.String)
//  .syncTimeWithHost(java.lang.Boolean)
//  .syncTimeWithHost(IResolvable)
//  .syncTimeWithHostPeriodically(java.lang.Boolean)
//  .syncTimeWithHostPeriodically(IResolvable)
//  .tags(java.util.List<java.lang.String>)
//  .toolsUpgradePolicy(java.lang.String)
//  .vapp(VirtualMachineVapp)
//  .vbsEnabled(java.lang.Boolean)
//  .vbsEnabled(IResolvable)
//  .vvtdEnabled(java.lang.Boolean)
//  .vvtdEnabled(IResolvable)
//  .waitForGuestIpTimeout(java.lang.Number)
//  .waitForGuestNetRoutable(java.lang.Boolean)
//  .waitForGuestNetRoutable(IResolvable)
//  .waitForGuestNetTimeout(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.resourcePoolId">resourcePoolId</a></code> | <code>java.lang.String</code> | The ID of a resource pool to put the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.alternateGuestName">alternateGuestName</a></code> | <code>java.lang.String</code> | The guest name for the operating system when guest_id is otherGuest or otherGuest64. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.annotation">annotation</a></code> | <code>java.lang.String</code> | User-provided description of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.bootDelay">bootDelay</a></code> | <code>java.lang.Number</code> | The number of milliseconds to wait before starting the boot sequence. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.bootRetryDelay">bootRetryDelay</a></code> | <code>java.lang.Number</code> | The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.bootRetryEnabled">bootRetryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cdrom">cdrom</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>></code> | cdrom block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.clone">clone</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuHotAddEnabled">cpuHotAddEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuHotRemoveEnabled">cpuHotRemoveEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuLimit">cpuLimit</a></code> | <code>java.lang.Number</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuPerformanceCountersEnabled">cpuPerformanceCountersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable CPU performance counters on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuReservation">cpuReservation</a></code> | <code>java.lang.Number</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuShareCount">cpuShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to cpu for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuShareLevel">cpuShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for cpu resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | The ID of the datacenter where the VM is to be created. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.datastoreClusterId">datastoreClusterId</a></code> | <code>java.lang.String</code> | The ID of a datastore cluster to put the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.datastoreId">datastoreId</a></code> | <code>java.lang.String</code> | The ID of the virtual machine's datastore. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.disk">disk</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>></code> | disk block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.efiSecureBootEnabled">efiSecureBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When the boot type set in firmware is efi, this enables EFI secure boot. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.enableDiskUuid">enableDiskUuid</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable logging on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.eptRviMode">eptRviMode</a></code> | <code>java.lang.String</code> | The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.extraConfig">extraConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Extra configuration data for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.extraConfigRebootRequired">extraConfigRebootRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow the virtual machine to be rebooted when a change to `extra_config` occurs. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.firmware">firmware</a></code> | <code>java.lang.String</code> | The firmware interface to use on the virtual machine. Can be one of bios or efi. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | The name of the folder to locate the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.forcePowerOff">forcePowerOff</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true to force power-off a virtual machine if a graceful guest shutdown failed for a necessary operation. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.guestId">guestId</a></code> | <code>java.lang.String</code> | The guest ID for the operating system. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.hardwareVersion">hardwareVersion</a></code> | <code>java.lang.Number</code> | The hardware version for the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.hostSystemId">hostSystemId</a></code> | <code>java.lang.String</code> | The ID of an optional host system to pin the virtual machine to. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.hvMode">hvMode</a></code> | <code>java.lang.String</code> | The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#id VirtualMachine#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.ideControllerCount">ideControllerCount</a></code> | <code>java.lang.Number</code> | The number of IDE controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.ignoredGuestIps">ignoredGuestIps</a></code> | <code>java.util.List<java.lang.String></code> | List of IP addresses and CIDR networks to ignore while waiting for an IP. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.latencySensitivity">latencySensitivity</a></code> | <code>java.lang.String</code> | Controls the scheduling delay of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memory">memory</a></code> | <code>java.lang.Number</code> | The size of the virtual machine's memory, in MB. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryHotAddEnabled">memoryHotAddEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow memory to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryLimit">memoryLimit</a></code> | <code>java.lang.Number</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryReservation">memoryReservation</a></code> | <code>java.lang.Number</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryReservationLockedToMax">memoryReservationLockedToMax</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryShareCount">memoryShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to memory for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryShareLevel">memoryShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for memory resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.migrateWaitTimeout">migrateWaitTimeout</a></code> | <code>java.lang.Number</code> | The amount of time, in minutes, to wait for a vMotion operation to complete before failing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.nestedHvEnabled">nestedHvEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.numCoresPerSocket">numCoresPerSocket</a></code> | <code>java.lang.Number</code> | The number of cores to distribute amongst the CPUs in this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.numCpus">numCpus</a></code> | <code>java.lang.Number</code> | The number of virtual processors to assign to this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.ovfDeploy">ovfDeploy</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a></code> | ovf_deploy block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.pciDeviceId">pciDeviceId</a></code> | <code>java.util.List<java.lang.String></code> | A list of PCI passthrough devices. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.poweronTimeout">poweronTimeout</a></code> | <code>java.lang.Number</code> | The amount of time, in seconds, that we will be trying to power on a VM. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.replaceTrigger">replaceTrigger</a></code> | <code>java.lang.String</code> | Triggers replacement of resource whenever it changes. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsAfterPowerOn">runToolsScriptsAfterPowerOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts after virtual machine power-on when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsAfterResume">runToolsScriptsAfterResume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts after virtual machine resume when when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestReboot">runToolsScriptsBeforeGuestReboot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts before guest operating system reboot when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestShutdown">runToolsScriptsBeforeGuestShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts before guest operating system shutdown when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestStandby">runToolsScriptsBeforeGuestStandby</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts before guest operating system standby when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.sataControllerCount">sataControllerCount</a></code> | <code>java.lang.Number</code> | The number of SATA controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scsiBusSharing">scsiBusSharing</a></code> | <code>java.lang.String</code> | Mode for sharing the SCSI bus. The modes are physicalSharing, virtualSharing, and noSharing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scsiControllerCount">scsiControllerCount</a></code> | <code>java.lang.Number</code> | The number of SCSI controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scsiType">scsiType</a></code> | <code>java.lang.String</code> | The type of SCSI bus this virtual machine will have. Can be one of lsilogic, lsilogic-sas or pvscsi. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.shutdownWaitTimeout">shutdownWaitTimeout</a></code> | <code>java.lang.Number</code> | The amount of time, in minutes, to wait for shutdown when making necessary updates to the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.storagePolicyId">storagePolicyId</a></code> | <code>java.lang.String</code> | The ID of the storage policy to assign to the virtual machine home directory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.swapPlacementPolicy">swapPlacementPolicy</a></code> | <code>java.lang.String</code> | The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.syncTimeWithHost">syncTimeWithHost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable guest clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.syncTimeWithHostPeriodically">syncTimeWithHostPeriodically</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable periodic clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.toolsUpgradePolicy">toolsUpgradePolicy</a></code> | <code>java.lang.String</code> | Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.vapp">vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a></code> | vapp block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.vbsEnabled">vbsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to specify if Virtualization-based security is enabled for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.vvtdEnabled">vvtdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.waitForGuestIpTimeout">waitForGuestIpTimeout</a></code> | <code>java.lang.Number</code> | The amount of time, in minutes, to wait for an available IP address on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.waitForGuestNetRoutable">waitForGuestNetRoutable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether or not the guest network waiter waits for a routable address. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.waitForGuestNetTimeout">waitForGuestNetTimeout</a></code> | <code>java.lang.Number</code> | The amount of time, in minutes, to wait for an available IP address on this virtual machine. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#name VirtualMachine#name}

---

##### `resourcePoolId`<sup>Required</sup> <a name="resourcePoolId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.resourcePoolId"></a>

- *Type:* java.lang.String

The ID of a resource pool to put the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#resource_pool_id VirtualMachine#resource_pool_id}

---

##### `alternateGuestName`<sup>Optional</sup> <a name="alternateGuestName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.alternateGuestName"></a>

- *Type:* java.lang.String

The guest name for the operating system when guest_id is otherGuest or otherGuest64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#alternate_guest_name VirtualMachine#alternate_guest_name}

---

##### `annotation`<sup>Optional</sup> <a name="annotation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.annotation"></a>

- *Type:* java.lang.String

User-provided description of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#annotation VirtualMachine#annotation}

---

##### `bootDelay`<sup>Optional</sup> <a name="bootDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.bootDelay"></a>

- *Type:* java.lang.Number

The number of milliseconds to wait before starting the boot sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#boot_delay VirtualMachine#boot_delay}

---

##### `bootRetryDelay`<sup>Optional</sup> <a name="bootRetryDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.bootRetryDelay"></a>

- *Type:* java.lang.Number

The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#boot_retry_delay VirtualMachine#boot_retry_delay}

---

##### `bootRetryEnabled`<sup>Optional</sup> <a name="bootRetryEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.bootRetryEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#boot_retry_enabled VirtualMachine#boot_retry_enabled}

---

##### `cdrom`<sup>Optional</sup> <a name="cdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cdrom"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>>

cdrom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#cdrom VirtualMachine#cdrom}

---

##### `clone`<sup>Optional</sup> <a name="clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.clone"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#clone VirtualMachine#clone}

---

##### `cpuHotAddEnabled`<sup>Optional</sup> <a name="cpuHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuHotAddEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#cpu_hot_add_enabled VirtualMachine#cpu_hot_add_enabled}

---

##### `cpuHotRemoveEnabled`<sup>Optional</sup> <a name="cpuHotRemoveEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuHotRemoveEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#cpu_hot_remove_enabled VirtualMachine#cpu_hot_remove_enabled}

---

##### `cpuLimit`<sup>Optional</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuLimit"></a>

- *Type:* java.lang.Number

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#cpu_limit VirtualMachine#cpu_limit}

---

##### `cpuPerformanceCountersEnabled`<sup>Optional</sup> <a name="cpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuPerformanceCountersEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable CPU performance counters on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#cpu_performance_counters_enabled VirtualMachine#cpu_performance_counters_enabled}

---

##### `cpuReservation`<sup>Optional</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuReservation"></a>

- *Type:* java.lang.Number

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#cpu_reservation VirtualMachine#cpu_reservation}

---

##### `cpuShareCount`<sup>Optional</sup> <a name="cpuShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuShareCount"></a>

- *Type:* java.lang.Number

The amount of shares to allocate to cpu for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#cpu_share_count VirtualMachine#cpu_share_count}

---

##### `cpuShareLevel`<sup>Optional</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.cpuShareLevel"></a>

- *Type:* java.lang.String

The allocation level for cpu resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#cpu_share_level VirtualMachine#cpu_share_level}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.customAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#custom_attributes VirtualMachine#custom_attributes}

---

##### `datacenterId`<sup>Optional</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.datacenterId"></a>

- *Type:* java.lang.String

The ID of the datacenter where the VM is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#datacenter_id VirtualMachine#datacenter_id}

---

##### `datastoreClusterId`<sup>Optional</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.datastoreClusterId"></a>

- *Type:* java.lang.String

The ID of a datastore cluster to put the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#datastore_cluster_id VirtualMachine#datastore_cluster_id}

---

##### `datastoreId`<sup>Optional</sup> <a name="datastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.datastoreId"></a>

- *Type:* java.lang.String

The ID of the virtual machine's datastore.

The virtual machine configuration is placed here, along with any virtual disks that are created without datastores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.disk"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>>

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#disk VirtualMachine#disk}

---

##### `efiSecureBootEnabled`<sup>Optional</sup> <a name="efiSecureBootEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.efiSecureBootEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When the boot type set in firmware is efi, this enables EFI secure boot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#efi_secure_boot_enabled VirtualMachine#efi_secure_boot_enabled}

---

##### `enableDiskUuid`<sup>Optional</sup> <a name="enableDiskUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.enableDiskUuid"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#enable_disk_uuid VirtualMachine#enable_disk_uuid}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.enableLogging"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable logging on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#enable_logging VirtualMachine#enable_logging}

---

##### `eptRviMode`<sup>Optional</sup> <a name="eptRviMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.eptRviMode"></a>

- *Type:* java.lang.String

The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ept_rvi_mode VirtualMachine#ept_rvi_mode}

---

##### `extraConfig`<sup>Optional</sup> <a name="extraConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.extraConfig"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Extra configuration data for this virtual machine.

Can be used to supply advanced parameters not normally in configuration, such as instance metadata, or configuration data for OVF images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#extra_config VirtualMachine#extra_config}

---

##### `extraConfigRebootRequired`<sup>Optional</sup> <a name="extraConfigRebootRequired" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.extraConfigRebootRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow the virtual machine to be rebooted when a change to `extra_config` occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#extra_config_reboot_required VirtualMachine#extra_config_reboot_required}

---

##### `firmware`<sup>Optional</sup> <a name="firmware" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.firmware"></a>

- *Type:* java.lang.String

The firmware interface to use on the virtual machine. Can be one of bios or efi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#firmware VirtualMachine#firmware}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

The name of the folder to locate the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#folder VirtualMachine#folder}

---

##### `forcePowerOff`<sup>Optional</sup> <a name="forcePowerOff" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.forcePowerOff"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true to force power-off a virtual machine if a graceful guest shutdown failed for a necessary operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#force_power_off VirtualMachine#force_power_off}

---

##### `guestId`<sup>Optional</sup> <a name="guestId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.guestId"></a>

- *Type:* java.lang.String

The guest ID for the operating system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#guest_id VirtualMachine#guest_id}

---

##### `hardwareVersion`<sup>Optional</sup> <a name="hardwareVersion" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.hardwareVersion"></a>

- *Type:* java.lang.Number

The hardware version for the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#hardware_version VirtualMachine#hardware_version}

---

##### `hostSystemId`<sup>Optional</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.hostSystemId"></a>

- *Type:* java.lang.String

The ID of an optional host system to pin the virtual machine to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#host_system_id VirtualMachine#host_system_id}

---

##### `hvMode`<sup>Optional</sup> <a name="hvMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.hvMode"></a>

- *Type:* java.lang.String

The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#hv_mode VirtualMachine#hv_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#id VirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ideControllerCount`<sup>Optional</sup> <a name="ideControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.ideControllerCount"></a>

- *Type:* java.lang.Number

The number of IDE controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ide_controller_count VirtualMachine#ide_controller_count}

---

##### `ignoredGuestIps`<sup>Optional</sup> <a name="ignoredGuestIps" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.ignoredGuestIps"></a>

- *Type:* java.util.List<java.lang.String>

List of IP addresses and CIDR networks to ignore while waiting for an IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ignored_guest_ips VirtualMachine#ignored_guest_ips}

---

##### `latencySensitivity`<sup>Optional</sup> <a name="latencySensitivity" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.latencySensitivity"></a>

- *Type:* java.lang.String

Controls the scheduling delay of the virtual machine.

Use a higher sensitivity for applications that require lower latency, such as VOIP, media player applications, or applications that require frequent access to mouse or keyboard devices. Can be one of low, normal, medium, or high.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#latency_sensitivity VirtualMachine#latency_sensitivity}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memory"></a>

- *Type:* java.lang.Number

The size of the virtual machine's memory, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#memory VirtualMachine#memory}

---

##### `memoryHotAddEnabled`<sup>Optional</sup> <a name="memoryHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryHotAddEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow memory to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#memory_hot_add_enabled VirtualMachine#memory_hot_add_enabled}

---

##### `memoryLimit`<sup>Optional</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryLimit"></a>

- *Type:* java.lang.Number

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#memory_limit VirtualMachine#memory_limit}

---

##### `memoryReservation`<sup>Optional</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryReservation"></a>

- *Type:* java.lang.Number

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#memory_reservation VirtualMachine#memory_reservation}

---

##### `memoryReservationLockedToMax`<sup>Optional</sup> <a name="memoryReservationLockedToMax" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryReservationLockedToMax"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#memory_reservation_locked_to_max VirtualMachine#memory_reservation_locked_to_max}

---

##### `memoryShareCount`<sup>Optional</sup> <a name="memoryShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryShareCount"></a>

- *Type:* java.lang.Number

The amount of shares to allocate to memory for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#memory_share_count VirtualMachine#memory_share_count}

---

##### `memoryShareLevel`<sup>Optional</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.memoryShareLevel"></a>

- *Type:* java.lang.String

The allocation level for memory resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#memory_share_level VirtualMachine#memory_share_level}

---

##### `migrateWaitTimeout`<sup>Optional</sup> <a name="migrateWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.migrateWaitTimeout"></a>

- *Type:* java.lang.Number

The amount of time, in minutes, to wait for a vMotion operation to complete before failing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#migrate_wait_timeout VirtualMachine#migrate_wait_timeout}

---

##### `nestedHvEnabled`<sup>Optional</sup> <a name="nestedHvEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.nestedHvEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#nested_hv_enabled VirtualMachine#nested_hv_enabled}

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.networkInterface"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#network_interface VirtualMachine#network_interface}

---

##### `numCoresPerSocket`<sup>Optional</sup> <a name="numCoresPerSocket" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.numCoresPerSocket"></a>

- *Type:* java.lang.Number

The number of cores to distribute amongst the CPUs in this virtual machine.

If specified, the value supplied to num_cpus must be evenly divisible by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#num_cores_per_socket VirtualMachine#num_cores_per_socket}

---

##### `numCpus`<sup>Optional</sup> <a name="numCpus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.numCpus"></a>

- *Type:* java.lang.Number

The number of virtual processors to assign to this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#num_cpus VirtualMachine#num_cpus}

---

##### `ovfDeploy`<sup>Optional</sup> <a name="ovfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.ovfDeploy"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

ovf_deploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ovf_deploy VirtualMachine#ovf_deploy}

---

##### `pciDeviceId`<sup>Optional</sup> <a name="pciDeviceId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.pciDeviceId"></a>

- *Type:* java.util.List<java.lang.String>

A list of PCI passthrough devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#pci_device_id VirtualMachine#pci_device_id}

---

##### `poweronTimeout`<sup>Optional</sup> <a name="poweronTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.poweronTimeout"></a>

- *Type:* java.lang.Number

The amount of time, in seconds, that we will be trying to power on a VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#poweron_timeout VirtualMachine#poweron_timeout}

---

##### `replaceTrigger`<sup>Optional</sup> <a name="replaceTrigger" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.replaceTrigger"></a>

- *Type:* java.lang.String

Triggers replacement of resource whenever it changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#replace_trigger VirtualMachine#replace_trigger}

---

##### `runToolsScriptsAfterPowerOn`<sup>Optional</sup> <a name="runToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsAfterPowerOn"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts after virtual machine power-on when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#run_tools_scripts_after_power_on VirtualMachine#run_tools_scripts_after_power_on}

---

##### `runToolsScriptsAfterResume`<sup>Optional</sup> <a name="runToolsScriptsAfterResume" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsAfterResume"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts after virtual machine resume when when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#run_tools_scripts_after_resume VirtualMachine#run_tools_scripts_after_resume}

---

##### `runToolsScriptsBeforeGuestReboot`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestReboot"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts before guest operating system reboot when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#run_tools_scripts_before_guest_reboot VirtualMachine#run_tools_scripts_before_guest_reboot}

---

##### `runToolsScriptsBeforeGuestShutdown`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestShutdown"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts before guest operating system shutdown when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#run_tools_scripts_before_guest_shutdown VirtualMachine#run_tools_scripts_before_guest_shutdown}

---

##### `runToolsScriptsBeforeGuestStandby`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.runToolsScriptsBeforeGuestStandby"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts before guest operating system standby when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#run_tools_scripts_before_guest_standby VirtualMachine#run_tools_scripts_before_guest_standby}

---

##### `sataControllerCount`<sup>Optional</sup> <a name="sataControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.sataControllerCount"></a>

- *Type:* java.lang.Number

The number of SATA controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#sata_controller_count VirtualMachine#sata_controller_count}

---

##### `scsiBusSharing`<sup>Optional</sup> <a name="scsiBusSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scsiBusSharing"></a>

- *Type:* java.lang.String

Mode for sharing the SCSI bus. The modes are physicalSharing, virtualSharing, and noSharing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#scsi_bus_sharing VirtualMachine#scsi_bus_sharing}

---

##### `scsiControllerCount`<sup>Optional</sup> <a name="scsiControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scsiControllerCount"></a>

- *Type:* java.lang.Number

The number of SCSI controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#scsi_controller_count VirtualMachine#scsi_controller_count}

---

##### `scsiType`<sup>Optional</sup> <a name="scsiType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scsiType"></a>

- *Type:* java.lang.String

The type of SCSI bus this virtual machine will have. Can be one of lsilogic, lsilogic-sas or pvscsi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#scsi_type VirtualMachine#scsi_type}

---

##### `shutdownWaitTimeout`<sup>Optional</sup> <a name="shutdownWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.shutdownWaitTimeout"></a>

- *Type:* java.lang.Number

The amount of time, in minutes, to wait for shutdown when making necessary updates to the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#shutdown_wait_timeout VirtualMachine#shutdown_wait_timeout}

---

##### `storagePolicyId`<sup>Optional</sup> <a name="storagePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.storagePolicyId"></a>

- *Type:* java.lang.String

The ID of the storage policy to assign to the virtual machine home directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#storage_policy_id VirtualMachine#storage_policy_id}

---

##### `swapPlacementPolicy`<sup>Optional</sup> <a name="swapPlacementPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.swapPlacementPolicy"></a>

- *Type:* java.lang.String

The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#swap_placement_policy VirtualMachine#swap_placement_policy}

---

##### `syncTimeWithHost`<sup>Optional</sup> <a name="syncTimeWithHost" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.syncTimeWithHost"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable guest clock synchronization with the host.

On vSphere 7.0 U1 and above, with only this setting the clock is synchronized on startup and resume. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#sync_time_with_host VirtualMachine#sync_time_with_host}

---

##### `syncTimeWithHostPeriodically`<sup>Optional</sup> <a name="syncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.syncTimeWithHostPeriodically"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable periodic clock synchronization with the host.

Supported only on vSphere 7.0 U1 and above. On prior versions setting `sync_time_with_host` is enough for periodic synchronization. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#sync_time_with_host_periodically VirtualMachine#sync_time_with_host_periodically}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#tags VirtualMachine#tags}

---

##### `toolsUpgradePolicy`<sup>Optional</sup> <a name="toolsUpgradePolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.toolsUpgradePolicy"></a>

- *Type:* java.lang.String

Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#tools_upgrade_policy VirtualMachine#tools_upgrade_policy}

---

##### `vapp`<sup>Optional</sup> <a name="vapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.vapp"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

vapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#vapp VirtualMachine#vapp}

---

##### `vbsEnabled`<sup>Optional</sup> <a name="vbsEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.vbsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to specify if Virtualization-based security is enabled for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#vbs_enabled VirtualMachine#vbs_enabled}

---

##### `vvtdEnabled`<sup>Optional</sup> <a name="vvtdEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.vvtdEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#vvtd_enabled VirtualMachine#vvtd_enabled}

---

##### `waitForGuestIpTimeout`<sup>Optional</sup> <a name="waitForGuestIpTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.waitForGuestIpTimeout"></a>

- *Type:* java.lang.Number

The amount of time, in minutes, to wait for an available IP address on this virtual machine.

A value less than 1 disables the waiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#wait_for_guest_ip_timeout VirtualMachine#wait_for_guest_ip_timeout}

---

##### `waitForGuestNetRoutable`<sup>Optional</sup> <a name="waitForGuestNetRoutable" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.waitForGuestNetRoutable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether or not the guest network waiter waits for a routable address.

When false, the waiter does not wait for a default gateway, nor are IP addresses checked against any discovered default gateways as part of its success criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#wait_for_guest_net_routable VirtualMachine#wait_for_guest_net_routable}

---

##### `waitForGuestNetTimeout`<sup>Optional</sup> <a name="waitForGuestNetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.waitForGuestNetTimeout"></a>

- *Type:* java.lang.Number

The amount of time, in minutes, to wait for an available IP address on this virtual machine.

A value less than 1 disables the waiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#wait_for_guest_net_timeout VirtualMachine#wait_for_guest_net_timeout}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putCdrom">putCdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone">putClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putDisk">putDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy">putOvfDeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putVapp">putVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAlternateGuestName">resetAlternateGuestName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAnnotation">resetAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootDelay">resetBootDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryDelay">resetBootRetryDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryEnabled">resetBootRetryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCdrom">resetCdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetClone">resetClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotAddEnabled">resetCpuHotAddEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotRemoveEnabled">resetCpuHotRemoveEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuLimit">resetCpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuPerformanceCountersEnabled">resetCpuPerformanceCountersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuReservation">resetCpuReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareCount">resetCpuShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareLevel">resetCpuShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatacenterId">resetDatacenterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreClusterId">resetDatastoreClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreId">resetDatastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDisk">resetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEfiSecureBootEnabled">resetEfiSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableDiskUuid">resetEnableDiskUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEptRviMode">resetEptRviMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfig">resetExtraConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfigRebootRequired">resetExtraConfigRebootRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFirmware">resetFirmware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetForcePowerOff">resetForcePowerOff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetGuestId">resetGuestId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHardwareVersion">resetHardwareVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHostSystemId">resetHostSystemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHvMode">resetHvMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIdeControllerCount">resetIdeControllerCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIgnoredGuestIps">resetIgnoredGuestIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetLatencySensitivity">resetLatencySensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryHotAddEnabled">resetMemoryHotAddEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryLimit">resetMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryReservation">resetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryReservationLockedToMax">resetMemoryReservationLockedToMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareCount">resetMemoryShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareLevel">resetMemoryShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMigrateWaitTimeout">resetMigrateWaitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNestedHvEnabled">resetNestedHvEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCoresPerSocket">resetNumCoresPerSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCpus">resetNumCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOvfDeploy">resetOvfDeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPciDeviceId">resetPciDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPoweronTimeout">resetPoweronTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetReplaceTrigger">resetReplaceTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterPowerOn">resetRunToolsScriptsAfterPowerOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterResume">resetRunToolsScriptsAfterResume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestReboot">resetRunToolsScriptsBeforeGuestReboot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestShutdown">resetRunToolsScriptsBeforeGuestShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestStandby">resetRunToolsScriptsBeforeGuestStandby</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSataControllerCount">resetSataControllerCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiBusSharing">resetScsiBusSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiControllerCount">resetScsiControllerCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiType">resetScsiType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetShutdownWaitTimeout">resetShutdownWaitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetStoragePolicyId">resetStoragePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSwapPlacementPolicy">resetSwapPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHost">resetSyncTimeWithHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHostPeriodically">resetSyncTimeWithHostPeriodically</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetToolsUpgradePolicy">resetToolsUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVapp">resetVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVbsEnabled">resetVbsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVvtdEnabled">resetVvtdEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestIpTimeout">resetWaitForGuestIpTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetRoutable">resetWaitForGuestNetRoutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetTimeout">resetWaitForGuestNetTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCdrom` <a name="putCdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putCdrom"></a>

```java
public void putCdrom(IResolvable OR java.util.List<VirtualMachineCdrom> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putCdrom.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>>

---

##### `putClone` <a name="putClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone"></a>

```java
public void putClone(VirtualMachineClone value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

---

##### `putDisk` <a name="putDisk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putDisk"></a>

```java
public void putDisk(IResolvable OR java.util.List<VirtualMachineDisk> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putDisk.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>>

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putNetworkInterface"></a>

```java
public void putNetworkInterface(IResolvable OR java.util.List<VirtualMachineNetworkInterface> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putNetworkInterface.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>>

---

##### `putOvfDeploy` <a name="putOvfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy"></a>

```java
public void putOvfDeploy(VirtualMachineOvfDeploy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

---

##### `putVapp` <a name="putVapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putVapp"></a>

```java
public void putVapp(VirtualMachineVapp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putVapp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

---

##### `resetAlternateGuestName` <a name="resetAlternateGuestName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAlternateGuestName"></a>

```java
public void resetAlternateGuestName()
```

##### `resetAnnotation` <a name="resetAnnotation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAnnotation"></a>

```java
public void resetAnnotation()
```

##### `resetBootDelay` <a name="resetBootDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootDelay"></a>

```java
public void resetBootDelay()
```

##### `resetBootRetryDelay` <a name="resetBootRetryDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryDelay"></a>

```java
public void resetBootRetryDelay()
```

##### `resetBootRetryEnabled` <a name="resetBootRetryEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryEnabled"></a>

```java
public void resetBootRetryEnabled()
```

##### `resetCdrom` <a name="resetCdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCdrom"></a>

```java
public void resetCdrom()
```

##### `resetClone` <a name="resetClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetClone"></a>

```java
public void resetClone()
```

##### `resetCpuHotAddEnabled` <a name="resetCpuHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotAddEnabled"></a>

```java
public void resetCpuHotAddEnabled()
```

##### `resetCpuHotRemoveEnabled` <a name="resetCpuHotRemoveEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotRemoveEnabled"></a>

```java
public void resetCpuHotRemoveEnabled()
```

##### `resetCpuLimit` <a name="resetCpuLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuLimit"></a>

```java
public void resetCpuLimit()
```

##### `resetCpuPerformanceCountersEnabled` <a name="resetCpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuPerformanceCountersEnabled"></a>

```java
public void resetCpuPerformanceCountersEnabled()
```

##### `resetCpuReservation` <a name="resetCpuReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuReservation"></a>

```java
public void resetCpuReservation()
```

##### `resetCpuShareCount` <a name="resetCpuShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareCount"></a>

```java
public void resetCpuShareCount()
```

##### `resetCpuShareLevel` <a name="resetCpuShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareLevel"></a>

```java
public void resetCpuShareLevel()
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCustomAttributes"></a>

```java
public void resetCustomAttributes()
```

##### `resetDatacenterId` <a name="resetDatacenterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatacenterId"></a>

```java
public void resetDatacenterId()
```

##### `resetDatastoreClusterId` <a name="resetDatastoreClusterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreClusterId"></a>

```java
public void resetDatastoreClusterId()
```

##### `resetDatastoreId` <a name="resetDatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreId"></a>

```java
public void resetDatastoreId()
```

##### `resetDisk` <a name="resetDisk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDisk"></a>

```java
public void resetDisk()
```

##### `resetEfiSecureBootEnabled` <a name="resetEfiSecureBootEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEfiSecureBootEnabled"></a>

```java
public void resetEfiSecureBootEnabled()
```

##### `resetEnableDiskUuid` <a name="resetEnableDiskUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableDiskUuid"></a>

```java
public void resetEnableDiskUuid()
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableLogging"></a>

```java
public void resetEnableLogging()
```

##### `resetEptRviMode` <a name="resetEptRviMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEptRviMode"></a>

```java
public void resetEptRviMode()
```

##### `resetExtraConfig` <a name="resetExtraConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfig"></a>

```java
public void resetExtraConfig()
```

##### `resetExtraConfigRebootRequired` <a name="resetExtraConfigRebootRequired" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfigRebootRequired"></a>

```java
public void resetExtraConfigRebootRequired()
```

##### `resetFirmware` <a name="resetFirmware" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFirmware"></a>

```java
public void resetFirmware()
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFolder"></a>

```java
public void resetFolder()
```

##### `resetForcePowerOff` <a name="resetForcePowerOff" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetForcePowerOff"></a>

```java
public void resetForcePowerOff()
```

##### `resetGuestId` <a name="resetGuestId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetGuestId"></a>

```java
public void resetGuestId()
```

##### `resetHardwareVersion` <a name="resetHardwareVersion" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHardwareVersion"></a>

```java
public void resetHardwareVersion()
```

##### `resetHostSystemId` <a name="resetHostSystemId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHostSystemId"></a>

```java
public void resetHostSystemId()
```

##### `resetHvMode` <a name="resetHvMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHvMode"></a>

```java
public void resetHvMode()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetId"></a>

```java
public void resetId()
```

##### `resetIdeControllerCount` <a name="resetIdeControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIdeControllerCount"></a>

```java
public void resetIdeControllerCount()
```

##### `resetIgnoredGuestIps` <a name="resetIgnoredGuestIps" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIgnoredGuestIps"></a>

```java
public void resetIgnoredGuestIps()
```

##### `resetLatencySensitivity` <a name="resetLatencySensitivity" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetLatencySensitivity"></a>

```java
public void resetLatencySensitivity()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemory"></a>

```java
public void resetMemory()
```

##### `resetMemoryHotAddEnabled` <a name="resetMemoryHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryHotAddEnabled"></a>

```java
public void resetMemoryHotAddEnabled()
```

##### `resetMemoryLimit` <a name="resetMemoryLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryLimit"></a>

```java
public void resetMemoryLimit()
```

##### `resetMemoryReservation` <a name="resetMemoryReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryReservation"></a>

```java
public void resetMemoryReservation()
```

##### `resetMemoryReservationLockedToMax` <a name="resetMemoryReservationLockedToMax" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryReservationLockedToMax"></a>

```java
public void resetMemoryReservationLockedToMax()
```

##### `resetMemoryShareCount` <a name="resetMemoryShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareCount"></a>

```java
public void resetMemoryShareCount()
```

##### `resetMemoryShareLevel` <a name="resetMemoryShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareLevel"></a>

```java
public void resetMemoryShareLevel()
```

##### `resetMigrateWaitTimeout` <a name="resetMigrateWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMigrateWaitTimeout"></a>

```java
public void resetMigrateWaitTimeout()
```

##### `resetNestedHvEnabled` <a name="resetNestedHvEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNestedHvEnabled"></a>

```java
public void resetNestedHvEnabled()
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNetworkInterface"></a>

```java
public void resetNetworkInterface()
```

##### `resetNumCoresPerSocket` <a name="resetNumCoresPerSocket" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCoresPerSocket"></a>

```java
public void resetNumCoresPerSocket()
```

##### `resetNumCpus` <a name="resetNumCpus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCpus"></a>

```java
public void resetNumCpus()
```

##### `resetOvfDeploy` <a name="resetOvfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOvfDeploy"></a>

```java
public void resetOvfDeploy()
```

##### `resetPciDeviceId` <a name="resetPciDeviceId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPciDeviceId"></a>

```java
public void resetPciDeviceId()
```

##### `resetPoweronTimeout` <a name="resetPoweronTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPoweronTimeout"></a>

```java
public void resetPoweronTimeout()
```

##### `resetReplaceTrigger` <a name="resetReplaceTrigger" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetReplaceTrigger"></a>

```java
public void resetReplaceTrigger()
```

##### `resetRunToolsScriptsAfterPowerOn` <a name="resetRunToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterPowerOn"></a>

```java
public void resetRunToolsScriptsAfterPowerOn()
```

##### `resetRunToolsScriptsAfterResume` <a name="resetRunToolsScriptsAfterResume" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterResume"></a>

```java
public void resetRunToolsScriptsAfterResume()
```

##### `resetRunToolsScriptsBeforeGuestReboot` <a name="resetRunToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestReboot"></a>

```java
public void resetRunToolsScriptsBeforeGuestReboot()
```

##### `resetRunToolsScriptsBeforeGuestShutdown` <a name="resetRunToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestShutdown"></a>

```java
public void resetRunToolsScriptsBeforeGuestShutdown()
```

##### `resetRunToolsScriptsBeforeGuestStandby` <a name="resetRunToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestStandby"></a>

```java
public void resetRunToolsScriptsBeforeGuestStandby()
```

##### `resetSataControllerCount` <a name="resetSataControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSataControllerCount"></a>

```java
public void resetSataControllerCount()
```

##### `resetScsiBusSharing` <a name="resetScsiBusSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiBusSharing"></a>

```java
public void resetScsiBusSharing()
```

##### `resetScsiControllerCount` <a name="resetScsiControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiControllerCount"></a>

```java
public void resetScsiControllerCount()
```

##### `resetScsiType` <a name="resetScsiType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiType"></a>

```java
public void resetScsiType()
```

##### `resetShutdownWaitTimeout` <a name="resetShutdownWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetShutdownWaitTimeout"></a>

```java
public void resetShutdownWaitTimeout()
```

##### `resetStoragePolicyId` <a name="resetStoragePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetStoragePolicyId"></a>

```java
public void resetStoragePolicyId()
```

##### `resetSwapPlacementPolicy` <a name="resetSwapPlacementPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSwapPlacementPolicy"></a>

```java
public void resetSwapPlacementPolicy()
```

##### `resetSyncTimeWithHost` <a name="resetSyncTimeWithHost" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHost"></a>

```java
public void resetSyncTimeWithHost()
```

##### `resetSyncTimeWithHostPeriodically` <a name="resetSyncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHostPeriodically"></a>

```java
public void resetSyncTimeWithHostPeriodically()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetTags"></a>

```java
public void resetTags()
```

##### `resetToolsUpgradePolicy` <a name="resetToolsUpgradePolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetToolsUpgradePolicy"></a>

```java
public void resetToolsUpgradePolicy()
```

##### `resetVapp` <a name="resetVapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVapp"></a>

```java
public void resetVapp()
```

##### `resetVbsEnabled` <a name="resetVbsEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVbsEnabled"></a>

```java
public void resetVbsEnabled()
```

##### `resetVvtdEnabled` <a name="resetVvtdEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVvtdEnabled"></a>

```java
public void resetVvtdEnabled()
```

##### `resetWaitForGuestIpTimeout` <a name="resetWaitForGuestIpTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestIpTimeout"></a>

```java
public void resetWaitForGuestIpTimeout()
```

##### `resetWaitForGuestNetRoutable` <a name="resetWaitForGuestNetRoutable" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetRoutable"></a>

```java
public void resetWaitForGuestNetRoutable()
```

##### `resetWaitForGuestNetTimeout` <a name="resetWaitForGuestNetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetTimeout"></a>

```java
public void resetWaitForGuestNetTimeout()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachine;

VirtualMachine.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachine;

VirtualMachine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachine;

VirtualMachine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachine;

VirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdrom">cdrom</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList">VirtualMachineCdromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.changeVersion">changeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.clone">clone</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference">VirtualMachineCloneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.defaultIpAddress">defaultIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList">VirtualMachineDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIpAddresses">guestIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.imported">imported</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.moid">moid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList">VirtualMachineNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeploy">ovfDeploy</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference">VirtualMachineOvfDeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.powerState">powerState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.rebootRequired">rebootRequired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vapp">vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference">VirtualMachineVappOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappTransport">vappTransport</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmwareToolsStatus">vmwareToolsStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmxPath">vmxPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestNameInput">alternateGuestNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotationInput">annotationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelayInput">bootDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelayInput">bootRetryDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabledInput">bootRetryEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdromInput">cdromInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cloneInput">cloneInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabledInput">cpuHotAddEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabledInput">cpuHotRemoveEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimitInput">cpuLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabledInput">cpuPerformanceCountersEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservationInput">cpuReservationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCountInput">cpuShareCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevelInput">cpuShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributesInput">customAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterIdInput">datastoreClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreIdInput">datastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.diskInput">diskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabledInput">efiSecureBootEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuidInput">enableDiskUuidInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLoggingInput">enableLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviModeInput">eptRviModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigInput">extraConfigInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequiredInput">extraConfigRebootRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmwareInput">firmwareInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOffInput">forcePowerOffInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIdInput">guestIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersionInput">hardwareVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemIdInput">hostSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvModeInput">hvModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCountInput">ideControllerCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIpsInput">ignoredGuestIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivityInput">latencySensitivityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabledInput">memoryHotAddEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryInput">memoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimitInput">memoryLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationInput">memoryReservationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationLockedToMaxInput">memoryReservationLockedToMaxInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCountInput">memoryShareCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevelInput">memoryShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeoutInput">migrateWaitTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabledInput">nestedHvEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocketInput">numCoresPerSocketInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpusInput">numCpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeployInput">ovfDeployInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceIdInput">pciDeviceIdInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeoutInput">poweronTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTriggerInput">replaceTriggerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolIdInput">resourcePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOnInput">runToolsScriptsAfterPowerOnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResumeInput">runToolsScriptsAfterResumeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestRebootInput">runToolsScriptsBeforeGuestRebootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput">runToolsScriptsBeforeGuestShutdownInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput">runToolsScriptsBeforeGuestStandbyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCountInput">sataControllerCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharingInput">scsiBusSharingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCountInput">scsiControllerCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiTypeInput">scsiTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeoutInput">shutdownWaitTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyIdInput">storagePolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicyInput">swapPlacementPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostInput">syncTimeWithHostInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodicallyInput">syncTimeWithHostPeriodicallyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicyInput">toolsUpgradePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappInput">vappInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabledInput">vbsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabledInput">vvtdEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeoutInput">waitForGuestIpTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutableInput">waitForGuestNetRoutableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeoutInput">waitForGuestNetTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestName">alternateGuestName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotation">annotation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelay">bootDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelay">bootRetryDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabled">bootRetryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabled">cpuHotAddEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabled">cpuHotRemoveEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimit">cpuLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabled">cpuPerformanceCountersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservation">cpuReservation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCount">cpuShareCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevel">cpuShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterId">datastoreClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreId">datastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabled">efiSecureBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuid">enableDiskUuid</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviMode">eptRviMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfig">extraConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequired">extraConfigRebootRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmware">firmware</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOff">forcePowerOff</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestId">guestId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersion">hardwareVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemId">hostSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvMode">hvMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCount">ideControllerCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIps">ignoredGuestIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivity">latencySensitivity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memory">memory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabled">memoryHotAddEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimit">memoryLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservation">memoryReservation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationLockedToMax">memoryReservationLockedToMax</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCount">memoryShareCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevel">memoryShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeout">migrateWaitTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabled">nestedHvEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocket">numCoresPerSocket</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpus">numCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceId">pciDeviceId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeout">poweronTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTrigger">replaceTrigger</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolId">resourcePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOn">runToolsScriptsAfterPowerOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResume">runToolsScriptsAfterResume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestReboot">runToolsScriptsBeforeGuestReboot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdown">runToolsScriptsBeforeGuestShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandby">runToolsScriptsBeforeGuestStandby</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCount">sataControllerCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharing">scsiBusSharing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCount">scsiControllerCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiType">scsiType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeout">shutdownWaitTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyId">storagePolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicy">swapPlacementPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHost">syncTimeWithHost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodically">syncTimeWithHostPeriodically</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicy">toolsUpgradePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabled">vbsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabled">vvtdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeout">waitForGuestIpTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutable">waitForGuestNetRoutable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeout">waitForGuestNetTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cdrom`<sup>Required</sup> <a name="cdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdrom"></a>

```java
public VirtualMachineCdromList getCdrom();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList">VirtualMachineCdromList</a>

---

##### `changeVersion`<sup>Required</sup> <a name="changeVersion" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.changeVersion"></a>

```java
public java.lang.String getChangeVersion();
```

- *Type:* java.lang.String

---

##### `clone`<sup>Required</sup> <a name="clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.clone"></a>

```java
public VirtualMachineCloneOutputReference getClone();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference">VirtualMachineCloneOutputReference</a>

---

##### `defaultIpAddress`<sup>Required</sup> <a name="defaultIpAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.defaultIpAddress"></a>

```java
public java.lang.String getDefaultIpAddress();
```

- *Type:* java.lang.String

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.disk"></a>

```java
public VirtualMachineDiskList getDisk();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList">VirtualMachineDiskList</a>

---

##### `guestIpAddresses`<sup>Required</sup> <a name="guestIpAddresses" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIpAddresses"></a>

```java
public java.util.List<java.lang.String> getGuestIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `imported`<sup>Required</sup> <a name="imported" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.imported"></a>

```java
public IResolvable getImported();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `moid`<sup>Required</sup> <a name="moid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.moid"></a>

```java
public java.lang.String getMoid();
```

- *Type:* java.lang.String

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterface"></a>

```java
public VirtualMachineNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList">VirtualMachineNetworkInterfaceList</a>

---

##### `ovfDeploy`<sup>Required</sup> <a name="ovfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeploy"></a>

```java
public VirtualMachineOvfDeployOutputReference getOvfDeploy();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference">VirtualMachineOvfDeployOutputReference</a>

---

##### `powerState`<sup>Required</sup> <a name="powerState" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.powerState"></a>

```java
public java.lang.String getPowerState();
```

- *Type:* java.lang.String

---

##### `rebootRequired`<sup>Required</sup> <a name="rebootRequired" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.rebootRequired"></a>

```java
public IResolvable getRebootRequired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `vapp`<sup>Required</sup> <a name="vapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vapp"></a>

```java
public VirtualMachineVappOutputReference getVapp();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference">VirtualMachineVappOutputReference</a>

---

##### `vappTransport`<sup>Required</sup> <a name="vappTransport" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappTransport"></a>

```java
public java.util.List<java.lang.String> getVappTransport();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vmwareToolsStatus`<sup>Required</sup> <a name="vmwareToolsStatus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmwareToolsStatus"></a>

```java
public java.lang.String getVmwareToolsStatus();
```

- *Type:* java.lang.String

---

##### `vmxPath`<sup>Required</sup> <a name="vmxPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmxPath"></a>

```java
public java.lang.String getVmxPath();
```

- *Type:* java.lang.String

---

##### `alternateGuestNameInput`<sup>Optional</sup> <a name="alternateGuestNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestNameInput"></a>

```java
public java.lang.String getAlternateGuestNameInput();
```

- *Type:* java.lang.String

---

##### `annotationInput`<sup>Optional</sup> <a name="annotationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotationInput"></a>

```java
public java.lang.String getAnnotationInput();
```

- *Type:* java.lang.String

---

##### `bootDelayInput`<sup>Optional</sup> <a name="bootDelayInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelayInput"></a>

```java
public java.lang.Number getBootDelayInput();
```

- *Type:* java.lang.Number

---

##### `bootRetryDelayInput`<sup>Optional</sup> <a name="bootRetryDelayInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelayInput"></a>

```java
public java.lang.Number getBootRetryDelayInput();
```

- *Type:* java.lang.Number

---

##### `bootRetryEnabledInput`<sup>Optional</sup> <a name="bootRetryEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabledInput"></a>

```java
public java.lang.Object getBootRetryEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cdromInput`<sup>Optional</sup> <a name="cdromInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdromInput"></a>

```java
public java.lang.Object getCdromInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>>

---

##### `cloneInput`<sup>Optional</sup> <a name="cloneInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cloneInput"></a>

```java
public VirtualMachineClone getCloneInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

---

##### `cpuHotAddEnabledInput`<sup>Optional</sup> <a name="cpuHotAddEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabledInput"></a>

```java
public java.lang.Object getCpuHotAddEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuHotRemoveEnabledInput`<sup>Optional</sup> <a name="cpuHotRemoveEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabledInput"></a>

```java
public java.lang.Object getCpuHotRemoveEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuLimitInput`<sup>Optional</sup> <a name="cpuLimitInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimitInput"></a>

```java
public java.lang.Number getCpuLimitInput();
```

- *Type:* java.lang.Number

---

##### `cpuPerformanceCountersEnabledInput`<sup>Optional</sup> <a name="cpuPerformanceCountersEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabledInput"></a>

```java
public java.lang.Object getCpuPerformanceCountersEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuReservationInput`<sup>Optional</sup> <a name="cpuReservationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservationInput"></a>

```java
public java.lang.Number getCpuReservationInput();
```

- *Type:* java.lang.Number

---

##### `cpuShareCountInput`<sup>Optional</sup> <a name="cpuShareCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCountInput"></a>

```java
public java.lang.Number getCpuShareCountInput();
```

- *Type:* java.lang.Number

---

##### `cpuShareLevelInput`<sup>Optional</sup> <a name="cpuShareLevelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevelInput"></a>

```java
public java.lang.String getCpuShareLevelInput();
```

- *Type:* java.lang.String

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `datastoreClusterIdInput`<sup>Optional</sup> <a name="datastoreClusterIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterIdInput"></a>

```java
public java.lang.String getDatastoreClusterIdInput();
```

- *Type:* java.lang.String

---

##### `datastoreIdInput`<sup>Optional</sup> <a name="datastoreIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreIdInput"></a>

```java
public java.lang.String getDatastoreIdInput();
```

- *Type:* java.lang.String

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.diskInput"></a>

```java
public java.lang.Object getDiskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>>

---

##### `efiSecureBootEnabledInput`<sup>Optional</sup> <a name="efiSecureBootEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabledInput"></a>

```java
public java.lang.Object getEfiSecureBootEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDiskUuidInput`<sup>Optional</sup> <a name="enableDiskUuidInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuidInput"></a>

```java
public java.lang.Object getEnableDiskUuidInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLoggingInput"></a>

```java
public java.lang.Object getEnableLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eptRviModeInput`<sup>Optional</sup> <a name="eptRviModeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviModeInput"></a>

```java
public java.lang.String getEptRviModeInput();
```

- *Type:* java.lang.String

---

##### `extraConfigInput`<sup>Optional</sup> <a name="extraConfigInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `extraConfigRebootRequiredInput`<sup>Optional</sup> <a name="extraConfigRebootRequiredInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequiredInput"></a>

```java
public java.lang.Object getExtraConfigRebootRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firmwareInput`<sup>Optional</sup> <a name="firmwareInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmwareInput"></a>

```java
public java.lang.String getFirmwareInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `forcePowerOffInput`<sup>Optional</sup> <a name="forcePowerOffInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOffInput"></a>

```java
public java.lang.Object getForcePowerOffInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `guestIdInput`<sup>Optional</sup> <a name="guestIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIdInput"></a>

```java
public java.lang.String getGuestIdInput();
```

- *Type:* java.lang.String

---

##### `hardwareVersionInput`<sup>Optional</sup> <a name="hardwareVersionInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersionInput"></a>

```java
public java.lang.Number getHardwareVersionInput();
```

- *Type:* java.lang.Number

---

##### `hostSystemIdInput`<sup>Optional</sup> <a name="hostSystemIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemIdInput"></a>

```java
public java.lang.String getHostSystemIdInput();
```

- *Type:* java.lang.String

---

##### `hvModeInput`<sup>Optional</sup> <a name="hvModeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvModeInput"></a>

```java
public java.lang.String getHvModeInput();
```

- *Type:* java.lang.String

---

##### `ideControllerCountInput`<sup>Optional</sup> <a name="ideControllerCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCountInput"></a>

```java
public java.lang.Number getIdeControllerCountInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoredGuestIpsInput`<sup>Optional</sup> <a name="ignoredGuestIpsInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIpsInput"></a>

```java
public java.util.List<java.lang.String> getIgnoredGuestIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `latencySensitivityInput`<sup>Optional</sup> <a name="latencySensitivityInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivityInput"></a>

```java
public java.lang.String getLatencySensitivityInput();
```

- *Type:* java.lang.String

---

##### `memoryHotAddEnabledInput`<sup>Optional</sup> <a name="memoryHotAddEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabledInput"></a>

```java
public java.lang.Object getMemoryHotAddEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryInput"></a>

```java
public java.lang.Number getMemoryInput();
```

- *Type:* java.lang.Number

---

##### `memoryLimitInput`<sup>Optional</sup> <a name="memoryLimitInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimitInput"></a>

```java
public java.lang.Number getMemoryLimitInput();
```

- *Type:* java.lang.Number

---

##### `memoryReservationInput`<sup>Optional</sup> <a name="memoryReservationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationInput"></a>

```java
public java.lang.Number getMemoryReservationInput();
```

- *Type:* java.lang.Number

---

##### `memoryReservationLockedToMaxInput`<sup>Optional</sup> <a name="memoryReservationLockedToMaxInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationLockedToMaxInput"></a>

```java
public java.lang.Object getMemoryReservationLockedToMaxInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `memoryShareCountInput`<sup>Optional</sup> <a name="memoryShareCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCountInput"></a>

```java
public java.lang.Number getMemoryShareCountInput();
```

- *Type:* java.lang.Number

---

##### `memoryShareLevelInput`<sup>Optional</sup> <a name="memoryShareLevelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevelInput"></a>

```java
public java.lang.String getMemoryShareLevelInput();
```

- *Type:* java.lang.String

---

##### `migrateWaitTimeoutInput`<sup>Optional</sup> <a name="migrateWaitTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeoutInput"></a>

```java
public java.lang.Number getMigrateWaitTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nestedHvEnabledInput`<sup>Optional</sup> <a name="nestedHvEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabledInput"></a>

```java
public java.lang.Object getNestedHvEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterfaceInput"></a>

```java
public java.lang.Object getNetworkInterfaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>>

---

##### `numCoresPerSocketInput`<sup>Optional</sup> <a name="numCoresPerSocketInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocketInput"></a>

```java
public java.lang.Number getNumCoresPerSocketInput();
```

- *Type:* java.lang.Number

---

##### `numCpusInput`<sup>Optional</sup> <a name="numCpusInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpusInput"></a>

```java
public java.lang.Number getNumCpusInput();
```

- *Type:* java.lang.Number

---

##### `ovfDeployInput`<sup>Optional</sup> <a name="ovfDeployInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeployInput"></a>

```java
public VirtualMachineOvfDeploy getOvfDeployInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

---

##### `pciDeviceIdInput`<sup>Optional</sup> <a name="pciDeviceIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceIdInput"></a>

```java
public java.util.List<java.lang.String> getPciDeviceIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `poweronTimeoutInput`<sup>Optional</sup> <a name="poweronTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeoutInput"></a>

```java
public java.lang.Number getPoweronTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `replaceTriggerInput`<sup>Optional</sup> <a name="replaceTriggerInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTriggerInput"></a>

```java
public java.lang.String getReplaceTriggerInput();
```

- *Type:* java.lang.String

---

##### `resourcePoolIdInput`<sup>Optional</sup> <a name="resourcePoolIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolIdInput"></a>

```java
public java.lang.String getResourcePoolIdInput();
```

- *Type:* java.lang.String

---

##### `runToolsScriptsAfterPowerOnInput`<sup>Optional</sup> <a name="runToolsScriptsAfterPowerOnInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOnInput"></a>

```java
public java.lang.Object getRunToolsScriptsAfterPowerOnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runToolsScriptsAfterResumeInput`<sup>Optional</sup> <a name="runToolsScriptsAfterResumeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResumeInput"></a>

```java
public java.lang.Object getRunToolsScriptsAfterResumeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestRebootInput`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestRebootInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestRebootInput"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestRebootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestShutdownInput`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestShutdownInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestShutdownInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestStandbyInput`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestStandbyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestStandbyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sataControllerCountInput`<sup>Optional</sup> <a name="sataControllerCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCountInput"></a>

```java
public java.lang.Number getSataControllerCountInput();
```

- *Type:* java.lang.Number

---

##### `scsiBusSharingInput`<sup>Optional</sup> <a name="scsiBusSharingInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharingInput"></a>

```java
public java.lang.String getScsiBusSharingInput();
```

- *Type:* java.lang.String

---

##### `scsiControllerCountInput`<sup>Optional</sup> <a name="scsiControllerCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCountInput"></a>

```java
public java.lang.Number getScsiControllerCountInput();
```

- *Type:* java.lang.Number

---

##### `scsiTypeInput`<sup>Optional</sup> <a name="scsiTypeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiTypeInput"></a>

```java
public java.lang.String getScsiTypeInput();
```

- *Type:* java.lang.String

---

##### `shutdownWaitTimeoutInput`<sup>Optional</sup> <a name="shutdownWaitTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeoutInput"></a>

```java
public java.lang.Number getShutdownWaitTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `storagePolicyIdInput`<sup>Optional</sup> <a name="storagePolicyIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyIdInput"></a>

```java
public java.lang.String getStoragePolicyIdInput();
```

- *Type:* java.lang.String

---

##### `swapPlacementPolicyInput`<sup>Optional</sup> <a name="swapPlacementPolicyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicyInput"></a>

```java
public java.lang.String getSwapPlacementPolicyInput();
```

- *Type:* java.lang.String

---

##### `syncTimeWithHostInput`<sup>Optional</sup> <a name="syncTimeWithHostInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostInput"></a>

```java
public java.lang.Object getSyncTimeWithHostInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `syncTimeWithHostPeriodicallyInput`<sup>Optional</sup> <a name="syncTimeWithHostPeriodicallyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodicallyInput"></a>

```java
public java.lang.Object getSyncTimeWithHostPeriodicallyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `toolsUpgradePolicyInput`<sup>Optional</sup> <a name="toolsUpgradePolicyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicyInput"></a>

```java
public java.lang.String getToolsUpgradePolicyInput();
```

- *Type:* java.lang.String

---

##### `vappInput`<sup>Optional</sup> <a name="vappInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappInput"></a>

```java
public VirtualMachineVapp getVappInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

---

##### `vbsEnabledInput`<sup>Optional</sup> <a name="vbsEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabledInput"></a>

```java
public java.lang.Object getVbsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vvtdEnabledInput`<sup>Optional</sup> <a name="vvtdEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabledInput"></a>

```java
public java.lang.Object getVvtdEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `waitForGuestIpTimeoutInput`<sup>Optional</sup> <a name="waitForGuestIpTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeoutInput"></a>

```java
public java.lang.Number getWaitForGuestIpTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `waitForGuestNetRoutableInput`<sup>Optional</sup> <a name="waitForGuestNetRoutableInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutableInput"></a>

```java
public java.lang.Object getWaitForGuestNetRoutableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `waitForGuestNetTimeoutInput`<sup>Optional</sup> <a name="waitForGuestNetTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeoutInput"></a>

```java
public java.lang.Number getWaitForGuestNetTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `alternateGuestName`<sup>Required</sup> <a name="alternateGuestName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestName"></a>

```java
public java.lang.String getAlternateGuestName();
```

- *Type:* java.lang.String

---

##### `annotation`<sup>Required</sup> <a name="annotation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotation"></a>

```java
public java.lang.String getAnnotation();
```

- *Type:* java.lang.String

---

##### `bootDelay`<sup>Required</sup> <a name="bootDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelay"></a>

```java
public java.lang.Number getBootDelay();
```

- *Type:* java.lang.Number

---

##### `bootRetryDelay`<sup>Required</sup> <a name="bootRetryDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelay"></a>

```java
public java.lang.Number getBootRetryDelay();
```

- *Type:* java.lang.Number

---

##### `bootRetryEnabled`<sup>Required</sup> <a name="bootRetryEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabled"></a>

```java
public java.lang.Object getBootRetryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuHotAddEnabled`<sup>Required</sup> <a name="cpuHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabled"></a>

```java
public java.lang.Object getCpuHotAddEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuHotRemoveEnabled`<sup>Required</sup> <a name="cpuHotRemoveEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabled"></a>

```java
public java.lang.Object getCpuHotRemoveEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuLimit`<sup>Required</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimit"></a>

```java
public java.lang.Number getCpuLimit();
```

- *Type:* java.lang.Number

---

##### `cpuPerformanceCountersEnabled`<sup>Required</sup> <a name="cpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabled"></a>

```java
public java.lang.Object getCpuPerformanceCountersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cpuReservation`<sup>Required</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservation"></a>

```java
public java.lang.Number getCpuReservation();
```

- *Type:* java.lang.Number

---

##### `cpuShareCount`<sup>Required</sup> <a name="cpuShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCount"></a>

```java
public java.lang.Number getCpuShareCount();
```

- *Type:* java.lang.Number

---

##### `cpuShareLevel`<sup>Required</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevel"></a>

```java
public java.lang.String getCpuShareLevel();
```

- *Type:* java.lang.String

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `datastoreClusterId`<sup>Required</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterId"></a>

```java
public java.lang.String getDatastoreClusterId();
```

- *Type:* java.lang.String

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreId"></a>

```java
public java.lang.String getDatastoreId();
```

- *Type:* java.lang.String

---

##### `efiSecureBootEnabled`<sup>Required</sup> <a name="efiSecureBootEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabled"></a>

```java
public java.lang.Object getEfiSecureBootEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDiskUuid`<sup>Required</sup> <a name="enableDiskUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuid"></a>

```java
public java.lang.Object getEnableDiskUuid();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eptRviMode`<sup>Required</sup> <a name="eptRviMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviMode"></a>

```java
public java.lang.String getEptRviMode();
```

- *Type:* java.lang.String

---

##### `extraConfig`<sup>Required</sup> <a name="extraConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `extraConfigRebootRequired`<sup>Required</sup> <a name="extraConfigRebootRequired" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequired"></a>

```java
public java.lang.Object getExtraConfigRebootRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmware"></a>

```java
public java.lang.String getFirmware();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `forcePowerOff`<sup>Required</sup> <a name="forcePowerOff" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOff"></a>

```java
public java.lang.Object getForcePowerOff();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `guestId`<sup>Required</sup> <a name="guestId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestId"></a>

```java
public java.lang.String getGuestId();
```

- *Type:* java.lang.String

---

##### `hardwareVersion`<sup>Required</sup> <a name="hardwareVersion" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersion"></a>

```java
public java.lang.Number getHardwareVersion();
```

- *Type:* java.lang.Number

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemId"></a>

```java
public java.lang.String getHostSystemId();
```

- *Type:* java.lang.String

---

##### `hvMode`<sup>Required</sup> <a name="hvMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvMode"></a>

```java
public java.lang.String getHvMode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ideControllerCount`<sup>Required</sup> <a name="ideControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCount"></a>

```java
public java.lang.Number getIdeControllerCount();
```

- *Type:* java.lang.Number

---

##### `ignoredGuestIps`<sup>Required</sup> <a name="ignoredGuestIps" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIps"></a>

```java
public java.util.List<java.lang.String> getIgnoredGuestIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `latencySensitivity`<sup>Required</sup> <a name="latencySensitivity" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivity"></a>

```java
public java.lang.String getLatencySensitivity();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

---

##### `memoryHotAddEnabled`<sup>Required</sup> <a name="memoryHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabled"></a>

```java
public java.lang.Object getMemoryHotAddEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `memoryLimit`<sup>Required</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimit"></a>

```java
public java.lang.Number getMemoryLimit();
```

- *Type:* java.lang.Number

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservation"></a>

```java
public java.lang.Number getMemoryReservation();
```

- *Type:* java.lang.Number

---

##### `memoryReservationLockedToMax`<sup>Required</sup> <a name="memoryReservationLockedToMax" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationLockedToMax"></a>

```java
public java.lang.Object getMemoryReservationLockedToMax();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `memoryShareCount`<sup>Required</sup> <a name="memoryShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCount"></a>

```java
public java.lang.Number getMemoryShareCount();
```

- *Type:* java.lang.Number

---

##### `memoryShareLevel`<sup>Required</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevel"></a>

```java
public java.lang.String getMemoryShareLevel();
```

- *Type:* java.lang.String

---

##### `migrateWaitTimeout`<sup>Required</sup> <a name="migrateWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeout"></a>

```java
public java.lang.Number getMigrateWaitTimeout();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nestedHvEnabled`<sup>Required</sup> <a name="nestedHvEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabled"></a>

```java
public java.lang.Object getNestedHvEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `numCoresPerSocket`<sup>Required</sup> <a name="numCoresPerSocket" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocket"></a>

```java
public java.lang.Number getNumCoresPerSocket();
```

- *Type:* java.lang.Number

---

##### `numCpus`<sup>Required</sup> <a name="numCpus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpus"></a>

```java
public java.lang.Number getNumCpus();
```

- *Type:* java.lang.Number

---

##### `pciDeviceId`<sup>Required</sup> <a name="pciDeviceId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceId"></a>

```java
public java.util.List<java.lang.String> getPciDeviceId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `poweronTimeout`<sup>Required</sup> <a name="poweronTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeout"></a>

```java
public java.lang.Number getPoweronTimeout();
```

- *Type:* java.lang.Number

---

##### `replaceTrigger`<sup>Required</sup> <a name="replaceTrigger" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTrigger"></a>

```java
public java.lang.String getReplaceTrigger();
```

- *Type:* java.lang.String

---

##### `resourcePoolId`<sup>Required</sup> <a name="resourcePoolId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolId"></a>

```java
public java.lang.String getResourcePoolId();
```

- *Type:* java.lang.String

---

##### `runToolsScriptsAfterPowerOn`<sup>Required</sup> <a name="runToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOn"></a>

```java
public java.lang.Object getRunToolsScriptsAfterPowerOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runToolsScriptsAfterResume`<sup>Required</sup> <a name="runToolsScriptsAfterResume" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResume"></a>

```java
public java.lang.Object getRunToolsScriptsAfterResume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestReboot`<sup>Required</sup> <a name="runToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestReboot"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestReboot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestShutdown`<sup>Required</sup> <a name="runToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdown"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestShutdown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestStandby`<sup>Required</sup> <a name="runToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandby"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestStandby();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sataControllerCount`<sup>Required</sup> <a name="sataControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCount"></a>

```java
public java.lang.Number getSataControllerCount();
```

- *Type:* java.lang.Number

---

##### `scsiBusSharing`<sup>Required</sup> <a name="scsiBusSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharing"></a>

```java
public java.lang.String getScsiBusSharing();
```

- *Type:* java.lang.String

---

##### `scsiControllerCount`<sup>Required</sup> <a name="scsiControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCount"></a>

```java
public java.lang.Number getScsiControllerCount();
```

- *Type:* java.lang.Number

---

##### `scsiType`<sup>Required</sup> <a name="scsiType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiType"></a>

```java
public java.lang.String getScsiType();
```

- *Type:* java.lang.String

---

##### `shutdownWaitTimeout`<sup>Required</sup> <a name="shutdownWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeout"></a>

```java
public java.lang.Number getShutdownWaitTimeout();
```

- *Type:* java.lang.Number

---

##### `storagePolicyId`<sup>Required</sup> <a name="storagePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyId"></a>

```java
public java.lang.String getStoragePolicyId();
```

- *Type:* java.lang.String

---

##### `swapPlacementPolicy`<sup>Required</sup> <a name="swapPlacementPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicy"></a>

```java
public java.lang.String getSwapPlacementPolicy();
```

- *Type:* java.lang.String

---

##### `syncTimeWithHost`<sup>Required</sup> <a name="syncTimeWithHost" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHost"></a>

```java
public java.lang.Object getSyncTimeWithHost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `syncTimeWithHostPeriodically`<sup>Required</sup> <a name="syncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodically"></a>

```java
public java.lang.Object getSyncTimeWithHostPeriodically();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `toolsUpgradePolicy`<sup>Required</sup> <a name="toolsUpgradePolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicy"></a>

```java
public java.lang.String getToolsUpgradePolicy();
```

- *Type:* java.lang.String

---

##### `vbsEnabled`<sup>Required</sup> <a name="vbsEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabled"></a>

```java
public java.lang.Object getVbsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vvtdEnabled`<sup>Required</sup> <a name="vvtdEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabled"></a>

```java
public java.lang.Object getVvtdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `waitForGuestIpTimeout`<sup>Required</sup> <a name="waitForGuestIpTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeout"></a>

```java
public java.lang.Number getWaitForGuestIpTimeout();
```

- *Type:* java.lang.Number

---

##### `waitForGuestNetRoutable`<sup>Required</sup> <a name="waitForGuestNetRoutable" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutable"></a>

```java
public java.lang.Object getWaitForGuestNetRoutable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `waitForGuestNetTimeout`<sup>Required</sup> <a name="waitForGuestNetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeout"></a>

```java
public java.lang.Number getWaitForGuestNetTimeout();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineCdrom <a name="VirtualMachineCdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineCdrom;

VirtualMachineCdrom.builder()
//  .clientDevice(java.lang.Boolean)
//  .clientDevice(IResolvable)
//  .datastoreId(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.clientDevice">clientDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the device should be mapped to a remote client device. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.datastoreId">datastoreId</a></code> | <code>java.lang.String</code> | The datastore ID the ISO is located on. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.path">path</a></code> | <code>java.lang.String</code> | The path to the ISO file on the datastore. |

---

##### `clientDevice`<sup>Optional</sup> <a name="clientDevice" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.clientDevice"></a>

```java
public java.lang.Object getClientDevice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the device should be mapped to a remote client device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#client_device VirtualMachine#client_device}

---

##### `datastoreId`<sup>Optional</sup> <a name="datastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.datastoreId"></a>

```java
public java.lang.String getDatastoreId();
```

- *Type:* java.lang.String

The datastore ID the ISO is located on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path to the ISO file on the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#path VirtualMachine#path}

---

### VirtualMachineClone <a name="VirtualMachineClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineClone;

VirtualMachineClone.builder()
    .templateUuid(java.lang.String)
//  .customizationSpec(VirtualMachineCloneCustomizationSpec)
//  .customize(VirtualMachineCloneCustomize)
//  .linkedClone(java.lang.Boolean)
//  .linkedClone(IResolvable)
//  .ovfNetworkMap(java.util.Map<java.lang.String, java.lang.String>)
//  .ovfStorageMap(java.util.Map<java.lang.String, java.lang.String>)
//  .timeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.templateUuid">templateUuid</a></code> | <code>java.lang.String</code> | The UUID of the source virtual machine or template. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customizationSpec">customizationSpec</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a></code> | customization_spec block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customize">customize</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a></code> | customize block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.linkedClone">linkedClone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to create a linked clone when cloning. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfNetworkMap">ovfNetworkMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of ovf networks to the networks to use in vSphere. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfStorageMap">ovfStorageMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of ovf storage to the datastores to use in vSphere. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | The timeout, in minutes, to wait for the virtual machine clone to complete. |

---

##### `templateUuid`<sup>Required</sup> <a name="templateUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.templateUuid"></a>

```java
public java.lang.String getTemplateUuid();
```

- *Type:* java.lang.String

The UUID of the source virtual machine or template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#template_uuid VirtualMachine#template_uuid}

---

##### `customizationSpec`<sup>Optional</sup> <a name="customizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customizationSpec"></a>

```java
public VirtualMachineCloneCustomizationSpec getCustomizationSpec();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

customization_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#customization_spec VirtualMachine#customization_spec}

---

##### `customize`<sup>Optional</sup> <a name="customize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customize"></a>

```java
public VirtualMachineCloneCustomize getCustomize();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

customize block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#customize VirtualMachine#customize}

---

##### `linkedClone`<sup>Optional</sup> <a name="linkedClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.linkedClone"></a>

```java
public java.lang.Object getLinkedClone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to create a linked clone when cloning.

When this option is used, the source VM must have a single snapshot associated with it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#linked_clone VirtualMachine#linked_clone}

---

##### `ovfNetworkMap`<sup>Optional</sup> <a name="ovfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfNetworkMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOvfNetworkMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of ovf networks to the networks to use in vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ovf_network_map VirtualMachine#ovf_network_map}

---

##### `ovfStorageMap`<sup>Optional</sup> <a name="ovfStorageMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfStorageMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOvfStorageMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of ovf storage to the datastores to use in vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ovf_storage_map VirtualMachine#ovf_storage_map}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

The timeout, in minutes, to wait for the virtual machine clone to complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

### VirtualMachineCloneCustomizationSpec <a name="VirtualMachineCloneCustomizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineCloneCustomizationSpec;

VirtualMachineCloneCustomizationSpec.builder()
    .id(java.lang.String)
//  .timeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.id">id</a></code> | <code>java.lang.String</code> | The unique identifier of the customization specification is its name and is unique per vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique identifier of the customization specification is its name and is unique per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#id VirtualMachine#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error.

Setting this value to 0 or a negative value skips the waiter. Default: 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

### VirtualMachineCloneCustomize <a name="VirtualMachineCloneCustomize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineCloneCustomize;

VirtualMachineCloneCustomize.builder()
//  .dnsServerList(java.util.List<java.lang.String>)
//  .dnsSuffixList(java.util.List<java.lang.String>)
//  .ipv4Gateway(java.lang.String)
//  .ipv6Gateway(java.lang.String)
//  .linuxOptions(VirtualMachineCloneCustomizeLinuxOptions)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<VirtualMachineCloneCustomizeNetworkInterface>)
//  .timeout(java.lang.Number)
//  .windowsOptions(VirtualMachineCloneCustomizeWindowsOptions)
//  .windowsSysprepText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsServerList">dnsServerList</a></code> | <code>java.util.List<java.lang.String></code> | The list of DNS servers for a virtual network adapter with a static IP address. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsSuffixList">dnsSuffixList</a></code> | <code>java.util.List<java.lang.String></code> | A list of DNS search domains to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv4Gateway">ipv4Gateway</a></code> | <code>java.lang.String</code> | The IPv4 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv6Gateway">ipv6Gateway</a></code> | <code>java.lang.String</code> | The IPv6 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.linuxOptions">linuxOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a></code> | linux_options block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsOptions">windowsOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a></code> | windows_options block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsSysprepText">windowsSysprepText</a></code> | <code>java.lang.String</code> | Use this option to specify a windows sysprep file directly. |

---

##### `dnsServerList`<sup>Optional</sup> <a name="dnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsServerList"></a>

```java
public java.util.List<java.lang.String> getDnsServerList();
```

- *Type:* java.util.List<java.lang.String>

The list of DNS servers for a virtual network adapter with a static IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#dns_server_list VirtualMachine#dns_server_list}

---

##### `dnsSuffixList`<sup>Optional</sup> <a name="dnsSuffixList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsSuffixList"></a>

```java
public java.util.List<java.lang.String> getDnsSuffixList();
```

- *Type:* java.util.List<java.lang.String>

A list of DNS search domains to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#dns_suffix_list VirtualMachine#dns_suffix_list}

---

##### `ipv4Gateway`<sup>Optional</sup> <a name="ipv4Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv4Gateway"></a>

```java
public java.lang.String getIpv4Gateway();
```

- *Type:* java.lang.String

The IPv4 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ipv4_gateway VirtualMachine#ipv4_gateway}

---

##### `ipv6Gateway`<sup>Optional</sup> <a name="ipv6Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv6Gateway"></a>

```java
public java.lang.String getIpv6Gateway();
```

- *Type:* java.lang.String

The IPv6 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ipv6_gateway VirtualMachine#ipv6_gateway}

---

##### `linuxOptions`<sup>Optional</sup> <a name="linuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.linuxOptions"></a>

```java
public VirtualMachineCloneCustomizeLinuxOptions getLinuxOptions();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

linux_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#linux_options VirtualMachine#linux_options}

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.networkInterface"></a>

```java
public java.lang.Object getNetworkInterface();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#network_interface VirtualMachine#network_interface}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error.

Setting this value to 0 or a negative value skips the waiter. Default: 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

##### `windowsOptions`<sup>Optional</sup> <a name="windowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsOptions"></a>

```java
public VirtualMachineCloneCustomizeWindowsOptions getWindowsOptions();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

windows_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#windows_options VirtualMachine#windows_options}

---

##### `windowsSysprepText`<sup>Optional</sup> <a name="windowsSysprepText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsSysprepText"></a>

```java
public java.lang.String getWindowsSysprepText();
```

- *Type:* java.lang.String

Use this option to specify a windows sysprep file directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#windows_sysprep_text VirtualMachine#windows_sysprep_text}

---

### VirtualMachineCloneCustomizeLinuxOptions <a name="VirtualMachineCloneCustomizeLinuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineCloneCustomizeLinuxOptions;

VirtualMachineCloneCustomizeLinuxOptions.builder()
    .domain(java.lang.String)
    .hostName(java.lang.String)
//  .hwClockUtc(java.lang.Boolean)
//  .hwClockUtc(IResolvable)
//  .scriptText(java.lang.String)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.domain">domain</a></code> | <code>java.lang.String</code> | The domain name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hostName">hostName</a></code> | <code>java.lang.String</code> | The hostname for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hwClockUtc">hwClockUtc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether or not the hardware clock should be in UTC or not. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.scriptText">scriptText</a></code> | <code>java.lang.String</code> | The customization script to run before and or after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The domain name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#domain VirtualMachine#domain}

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

The hostname for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#host_name VirtualMachine#host_name}

---

##### `hwClockUtc`<sup>Optional</sup> <a name="hwClockUtc" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hwClockUtc"></a>

```java
public java.lang.Object getHwClockUtc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether or not the hardware clock should be in UTC or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#hw_clock_utc VirtualMachine#hw_clock_utc}

---

##### `scriptText`<sup>Optional</sup> <a name="scriptText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.scriptText"></a>

```java
public java.lang.String getScriptText();
```

- *Type:* java.lang.String

The customization script to run before and or after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#script_text VirtualMachine#script_text}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#time_zone VirtualMachine#time_zone}

---

### VirtualMachineCloneCustomizeNetworkInterface <a name="VirtualMachineCloneCustomizeNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineCloneCustomizeNetworkInterface;

VirtualMachineCloneCustomizeNetworkInterface.builder()
//  .dnsDomain(java.lang.String)
//  .dnsServerList(java.util.List<java.lang.String>)
//  .ipv4Address(java.lang.String)
//  .ipv4Netmask(java.lang.Number)
//  .ipv6Address(java.lang.String)
//  .ipv6Netmask(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsDomain">dnsDomain</a></code> | <code>java.lang.String</code> | A DNS search domain to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsServerList">dnsServerList</a></code> | <code>java.util.List<java.lang.String></code> | Network-interface specific DNS settings for Windows operating systems. Ignored on Linux. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Address">ipv4Address</a></code> | <code>java.lang.String</code> | The IPv4 address assigned to this network adapter. If left blank, DHCP is used. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Netmask">ipv4Netmask</a></code> | <code>java.lang.Number</code> | The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Netmask">ipv6Netmask</a></code> | <code>java.lang.Number</code> | The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected. |

---

##### `dnsDomain`<sup>Optional</sup> <a name="dnsDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsDomain"></a>

```java
public java.lang.String getDnsDomain();
```

- *Type:* java.lang.String

A DNS search domain to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#dns_domain VirtualMachine#dns_domain}

---

##### `dnsServerList`<sup>Optional</sup> <a name="dnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsServerList"></a>

```java
public java.util.List<java.lang.String> getDnsServerList();
```

- *Type:* java.util.List<java.lang.String>

Network-interface specific DNS settings for Windows operating systems. Ignored on Linux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#dns_server_list VirtualMachine#dns_server_list}

---

##### `ipv4Address`<sup>Optional</sup> <a name="ipv4Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Address"></a>

```java
public java.lang.String getIpv4Address();
```

- *Type:* java.lang.String

The IPv4 address assigned to this network adapter. If left blank, DHCP is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ipv4_address VirtualMachine#ipv4_address}

---

##### `ipv4Netmask`<sup>Optional</sup> <a name="ipv4Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Netmask"></a>

```java
public java.lang.Number getIpv4Netmask();
```

- *Type:* java.lang.Number

The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ipv4_netmask VirtualMachine#ipv4_netmask}

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ipv6_address VirtualMachine#ipv6_address}

---

##### `ipv6Netmask`<sup>Optional</sup> <a name="ipv6Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Netmask"></a>

```java
public java.lang.Number getIpv6Netmask();
```

- *Type:* java.lang.Number

The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ipv6_netmask VirtualMachine#ipv6_netmask}

---

### VirtualMachineCloneCustomizeWindowsOptions <a name="VirtualMachineCloneCustomizeWindowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineCloneCustomizeWindowsOptions;

VirtualMachineCloneCustomizeWindowsOptions.builder()
    .computerName(java.lang.String)
//  .adminPassword(java.lang.String)
//  .autoLogon(java.lang.Boolean)
//  .autoLogon(IResolvable)
//  .autoLogonCount(java.lang.Number)
//  .domainAdminPassword(java.lang.String)
//  .domainAdminUser(java.lang.String)
//  .domainOu(java.lang.String)
//  .fullName(java.lang.String)
//  .joinDomain(java.lang.String)
//  .organizationName(java.lang.String)
//  .productKey(java.lang.String)
//  .runOnceCommandList(java.util.List<java.lang.String>)
//  .timeZone(java.lang.Number)
//  .workgroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.computerName">computerName</a></code> | <code>java.lang.String</code> | The host name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | The new administrator password for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogon">autoLogon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether or not the VM automatically logs on as Administrator. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogonCount">autoLogonCount</a></code> | <code>java.lang.Number</code> | Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminPassword">domainAdminPassword</a></code> | <code>java.lang.String</code> | The password of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminUser">domainAdminUser</a></code> | <code>java.lang.String</code> | The user account of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainOu">domainOu</a></code> | <code>java.lang.String</code> | The MachineObjectOU which specifies the full LDAP path name of the OU to which the virtual machine belongs. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.fullName">fullName</a></code> | <code>java.lang.String</code> | The full name of the user of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.joinDomain">joinDomain</a></code> | <code>java.lang.String</code> | The domain that the virtual machine should join. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | The organization name this virtual machine is being installed for. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.productKey">productKey</a></code> | <code>java.lang.String</code> | The product key for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.runOnceCommandList">runOnceCommandList</a></code> | <code>java.util.List<java.lang.String></code> | A list of commands to run at first user logon, after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.timeZone">timeZone</a></code> | <code>java.lang.Number</code> | The new time zone for the virtual machine. This is a sysprep-dictated timezone code. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.workgroup">workgroup</a></code> | <code>java.lang.String</code> | The workgroup for this virtual machine if not joining a domain. |

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.computerName"></a>

```java
public java.lang.String getComputerName();
```

- *Type:* java.lang.String

The host name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#computer_name VirtualMachine#computer_name}

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

The new administrator password for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#admin_password VirtualMachine#admin_password}

---

##### `autoLogon`<sup>Optional</sup> <a name="autoLogon" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogon"></a>

```java
public java.lang.Object getAutoLogon();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether or not the VM automatically logs on as Administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#auto_logon VirtualMachine#auto_logon}

---

##### `autoLogonCount`<sup>Optional</sup> <a name="autoLogonCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogonCount"></a>

```java
public java.lang.Number getAutoLogonCount();
```

- *Type:* java.lang.Number

Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#auto_logon_count VirtualMachine#auto_logon_count}

---

##### `domainAdminPassword`<sup>Optional</sup> <a name="domainAdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminPassword"></a>

```java
public java.lang.String getDomainAdminPassword();
```

- *Type:* java.lang.String

The password of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#domain_admin_password VirtualMachine#domain_admin_password}

---

##### `domainAdminUser`<sup>Optional</sup> <a name="domainAdminUser" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminUser"></a>

```java
public java.lang.String getDomainAdminUser();
```

- *Type:* java.lang.String

The user account of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#domain_admin_user VirtualMachine#domain_admin_user}

---

##### `domainOu`<sup>Optional</sup> <a name="domainOu" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainOu"></a>

```java
public java.lang.String getDomainOu();
```

- *Type:* java.lang.String

The MachineObjectOU which specifies the full LDAP path name of the OU to which the virtual machine belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#domain_ou VirtualMachine#domain_ou}

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

The full name of the user of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#full_name VirtualMachine#full_name}

---

##### `joinDomain`<sup>Optional</sup> <a name="joinDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.joinDomain"></a>

```java
public java.lang.String getJoinDomain();
```

- *Type:* java.lang.String

The domain that the virtual machine should join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#join_domain VirtualMachine#join_domain}

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

The organization name this virtual machine is being installed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#organization_name VirtualMachine#organization_name}

---

##### `productKey`<sup>Optional</sup> <a name="productKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.productKey"></a>

```java
public java.lang.String getProductKey();
```

- *Type:* java.lang.String

The product key for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#product_key VirtualMachine#product_key}

---

##### `runOnceCommandList`<sup>Optional</sup> <a name="runOnceCommandList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.runOnceCommandList"></a>

```java
public java.util.List<java.lang.String> getRunOnceCommandList();
```

- *Type:* java.util.List<java.lang.String>

A list of commands to run at first user logon, after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#run_once_command_list VirtualMachine#run_once_command_list}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.timeZone"></a>

```java
public java.lang.Number getTimeZone();
```

- *Type:* java.lang.Number

The new time zone for the virtual machine. This is a sysprep-dictated timezone code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#time_zone VirtualMachine#time_zone}

---

##### `workgroup`<sup>Optional</sup> <a name="workgroup" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.workgroup"></a>

```java
public java.lang.String getWorkgroup();
```

- *Type:* java.lang.String

The workgroup for this virtual machine if not joining a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#workgroup VirtualMachine#workgroup}

---

### VirtualMachineConfig <a name="VirtualMachineConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineConfig;

VirtualMachineConfig.builder()
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
    .name(java.lang.String)
    .resourcePoolId(java.lang.String)
//  .alternateGuestName(java.lang.String)
//  .annotation(java.lang.String)
//  .bootDelay(java.lang.Number)
//  .bootRetryDelay(java.lang.Number)
//  .bootRetryEnabled(java.lang.Boolean)
//  .bootRetryEnabled(IResolvable)
//  .cdrom(IResolvable)
//  .cdrom(java.util.List<VirtualMachineCdrom>)
//  .clone(VirtualMachineClone)
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
//  .customAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .datacenterId(java.lang.String)
//  .datastoreClusterId(java.lang.String)
//  .datastoreId(java.lang.String)
//  .disk(IResolvable)
//  .disk(java.util.List<VirtualMachineDisk>)
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
//  .forcePowerOff(java.lang.Boolean)
//  .forcePowerOff(IResolvable)
//  .guestId(java.lang.String)
//  .hardwareVersion(java.lang.Number)
//  .hostSystemId(java.lang.String)
//  .hvMode(java.lang.String)
//  .id(java.lang.String)
//  .ideControllerCount(java.lang.Number)
//  .ignoredGuestIps(java.util.List<java.lang.String>)
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
//  .migrateWaitTimeout(java.lang.Number)
//  .nestedHvEnabled(java.lang.Boolean)
//  .nestedHvEnabled(IResolvable)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<VirtualMachineNetworkInterface>)
//  .numCoresPerSocket(java.lang.Number)
//  .numCpus(java.lang.Number)
//  .ovfDeploy(VirtualMachineOvfDeploy)
//  .pciDeviceId(java.util.List<java.lang.String>)
//  .poweronTimeout(java.lang.Number)
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
//  .sataControllerCount(java.lang.Number)
//  .scsiBusSharing(java.lang.String)
//  .scsiControllerCount(java.lang.Number)
//  .scsiType(java.lang.String)
//  .shutdownWaitTimeout(java.lang.Number)
//  .storagePolicyId(java.lang.String)
//  .swapPlacementPolicy(java.lang.String)
//  .syncTimeWithHost(java.lang.Boolean)
//  .syncTimeWithHost(IResolvable)
//  .syncTimeWithHostPeriodically(java.lang.Boolean)
//  .syncTimeWithHostPeriodically(IResolvable)
//  .tags(java.util.List<java.lang.String>)
//  .toolsUpgradePolicy(java.lang.String)
//  .vapp(VirtualMachineVapp)
//  .vbsEnabled(java.lang.Boolean)
//  .vbsEnabled(IResolvable)
//  .vvtdEnabled(java.lang.Boolean)
//  .vvtdEnabled(IResolvable)
//  .waitForGuestIpTimeout(java.lang.Number)
//  .waitForGuestNetRoutable(java.lang.Boolean)
//  .waitForGuestNetRoutable(IResolvable)
//  .waitForGuestNetTimeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.resourcePoolId">resourcePoolId</a></code> | <code>java.lang.String</code> | The ID of a resource pool to put the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.alternateGuestName">alternateGuestName</a></code> | <code>java.lang.String</code> | The guest name for the operating system when guest_id is otherGuest or otherGuest64. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.annotation">annotation</a></code> | <code>java.lang.String</code> | User-provided description of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootDelay">bootDelay</a></code> | <code>java.lang.Number</code> | The number of milliseconds to wait before starting the boot sequence. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryDelay">bootRetryDelay</a></code> | <code>java.lang.Number</code> | The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryEnabled">bootRetryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cdrom">cdrom</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>></code> | cdrom block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.clone">clone</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotAddEnabled">cpuHotAddEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotRemoveEnabled">cpuHotRemoveEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuLimit">cpuLimit</a></code> | <code>java.lang.Number</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuPerformanceCountersEnabled">cpuPerformanceCountersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable CPU performance counters on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuReservation">cpuReservation</a></code> | <code>java.lang.Number</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareCount">cpuShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to cpu for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareLevel">cpuShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for cpu resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.customAttributes">customAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | The ID of the datacenter where the VM is to be created. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreClusterId">datastoreClusterId</a></code> | <code>java.lang.String</code> | The ID of a datastore cluster to put the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreId">datastoreId</a></code> | <code>java.lang.String</code> | The ID of the virtual machine's datastore. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.disk">disk</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>></code> | disk block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.efiSecureBootEnabled">efiSecureBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When the boot type set in firmware is efi, this enables EFI secure boot. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableDiskUuid">enableDiskUuid</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable logging on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.eptRviMode">eptRviMode</a></code> | <code>java.lang.String</code> | The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfig">extraConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Extra configuration data for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfigRebootRequired">extraConfigRebootRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow the virtual machine to be rebooted when a change to `extra_config` occurs. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.firmware">firmware</a></code> | <code>java.lang.String</code> | The firmware interface to use on the virtual machine. Can be one of bios or efi. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | The name of the folder to locate the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forcePowerOff">forcePowerOff</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true to force power-off a virtual machine if a graceful guest shutdown failed for a necessary operation. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.guestId">guestId</a></code> | <code>java.lang.String</code> | The guest ID for the operating system. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hardwareVersion">hardwareVersion</a></code> | <code>java.lang.Number</code> | The hardware version for the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hostSystemId">hostSystemId</a></code> | <code>java.lang.String</code> | The ID of an optional host system to pin the virtual machine to. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hvMode">hvMode</a></code> | <code>java.lang.String</code> | The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#id VirtualMachine#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ideControllerCount">ideControllerCount</a></code> | <code>java.lang.Number</code> | The number of IDE controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ignoredGuestIps">ignoredGuestIps</a></code> | <code>java.util.List<java.lang.String></code> | List of IP addresses and CIDR networks to ignore while waiting for an IP. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.latencySensitivity">latencySensitivity</a></code> | <code>java.lang.String</code> | Controls the scheduling delay of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memory">memory</a></code> | <code>java.lang.Number</code> | The size of the virtual machine's memory, in MB. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryHotAddEnabled">memoryHotAddEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow memory to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryLimit">memoryLimit</a></code> | <code>java.lang.Number</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservation">memoryReservation</a></code> | <code>java.lang.Number</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservationLockedToMax">memoryReservationLockedToMax</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareCount">memoryShareCount</a></code> | <code>java.lang.Number</code> | The amount of shares to allocate to memory for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareLevel">memoryShareLevel</a></code> | <code>java.lang.String</code> | The allocation level for memory resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.migrateWaitTimeout">migrateWaitTimeout</a></code> | <code>java.lang.Number</code> | The amount of time, in minutes, to wait for a vMotion operation to complete before failing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.nestedHvEnabled">nestedHvEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCoresPerSocket">numCoresPerSocket</a></code> | <code>java.lang.Number</code> | The number of cores to distribute amongst the CPUs in this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCpus">numCpus</a></code> | <code>java.lang.Number</code> | The number of virtual processors to assign to this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ovfDeploy">ovfDeploy</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a></code> | ovf_deploy block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.pciDeviceId">pciDeviceId</a></code> | <code>java.util.List<java.lang.String></code> | A list of PCI passthrough devices. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.poweronTimeout">poweronTimeout</a></code> | <code>java.lang.Number</code> | The amount of time, in seconds, that we will be trying to power on a VM. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.replaceTrigger">replaceTrigger</a></code> | <code>java.lang.String</code> | Triggers replacement of resource whenever it changes. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterPowerOn">runToolsScriptsAfterPowerOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts after virtual machine power-on when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterResume">runToolsScriptsAfterResume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts after virtual machine resume when when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot">runToolsScriptsBeforeGuestReboot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts before guest operating system reboot when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown">runToolsScriptsBeforeGuestShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts before guest operating system shutdown when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby">runToolsScriptsBeforeGuestStandby</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the run of scripts before guest operating system standby when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.sataControllerCount">sataControllerCount</a></code> | <code>java.lang.Number</code> | The number of SATA controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiBusSharing">scsiBusSharing</a></code> | <code>java.lang.String</code> | Mode for sharing the SCSI bus. The modes are physicalSharing, virtualSharing, and noSharing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiControllerCount">scsiControllerCount</a></code> | <code>java.lang.Number</code> | The number of SCSI controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiType">scsiType</a></code> | <code>java.lang.String</code> | The type of SCSI bus this virtual machine will have. Can be one of lsilogic, lsilogic-sas or pvscsi. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.shutdownWaitTimeout">shutdownWaitTimeout</a></code> | <code>java.lang.Number</code> | The amount of time, in minutes, to wait for shutdown when making necessary updates to the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.storagePolicyId">storagePolicyId</a></code> | <code>java.lang.String</code> | The ID of the storage policy to assign to the virtual machine home directory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.swapPlacementPolicy">swapPlacementPolicy</a></code> | <code>java.lang.String</code> | The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHost">syncTimeWithHost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable guest clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHostPeriodically">syncTimeWithHostPeriodically</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable periodic clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.toolsUpgradePolicy">toolsUpgradePolicy</a></code> | <code>java.lang.String</code> | Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vapp">vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a></code> | vapp block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vbsEnabled">vbsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to specify if Virtualization-based security is enabled for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vvtdEnabled">vvtdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestIpTimeout">waitForGuestIpTimeout</a></code> | <code>java.lang.Number</code> | The amount of time, in minutes, to wait for an available IP address on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetRoutable">waitForGuestNetRoutable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether or not the guest network waiter waits for a routable address. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetTimeout">waitForGuestNetTimeout</a></code> | <code>java.lang.Number</code> | The amount of time, in minutes, to wait for an available IP address on this virtual machine. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#name VirtualMachine#name}

---

##### `resourcePoolId`<sup>Required</sup> <a name="resourcePoolId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.resourcePoolId"></a>

```java
public java.lang.String getResourcePoolId();
```

- *Type:* java.lang.String

The ID of a resource pool to put the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#resource_pool_id VirtualMachine#resource_pool_id}

---

##### `alternateGuestName`<sup>Optional</sup> <a name="alternateGuestName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.alternateGuestName"></a>

```java
public java.lang.String getAlternateGuestName();
```

- *Type:* java.lang.String

The guest name for the operating system when guest_id is otherGuest or otherGuest64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#alternate_guest_name VirtualMachine#alternate_guest_name}

---

##### `annotation`<sup>Optional</sup> <a name="annotation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.annotation"></a>

```java
public java.lang.String getAnnotation();
```

- *Type:* java.lang.String

User-provided description of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#annotation VirtualMachine#annotation}

---

##### `bootDelay`<sup>Optional</sup> <a name="bootDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootDelay"></a>

```java
public java.lang.Number getBootDelay();
```

- *Type:* java.lang.Number

The number of milliseconds to wait before starting the boot sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#boot_delay VirtualMachine#boot_delay}

---

##### `bootRetryDelay`<sup>Optional</sup> <a name="bootRetryDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryDelay"></a>

```java
public java.lang.Number getBootRetryDelay();
```

- *Type:* java.lang.Number

The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#boot_retry_delay VirtualMachine#boot_retry_delay}

---

##### `bootRetryEnabled`<sup>Optional</sup> <a name="bootRetryEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryEnabled"></a>

```java
public java.lang.Object getBootRetryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#boot_retry_enabled VirtualMachine#boot_retry_enabled}

---

##### `cdrom`<sup>Optional</sup> <a name="cdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cdrom"></a>

```java
public java.lang.Object getCdrom();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>>

cdrom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#cdrom VirtualMachine#cdrom}

---

##### `clone`<sup>Optional</sup> <a name="clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.clone"></a>

```java
public VirtualMachineClone getClone();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#clone VirtualMachine#clone}

---

##### `cpuHotAddEnabled`<sup>Optional</sup> <a name="cpuHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotAddEnabled"></a>

```java
public java.lang.Object getCpuHotAddEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#cpu_hot_add_enabled VirtualMachine#cpu_hot_add_enabled}

---

##### `cpuHotRemoveEnabled`<sup>Optional</sup> <a name="cpuHotRemoveEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotRemoveEnabled"></a>

```java
public java.lang.Object getCpuHotRemoveEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#cpu_hot_remove_enabled VirtualMachine#cpu_hot_remove_enabled}

---

##### `cpuLimit`<sup>Optional</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuLimit"></a>

```java
public java.lang.Number getCpuLimit();
```

- *Type:* java.lang.Number

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#cpu_limit VirtualMachine#cpu_limit}

---

##### `cpuPerformanceCountersEnabled`<sup>Optional</sup> <a name="cpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuPerformanceCountersEnabled"></a>

```java
public java.lang.Object getCpuPerformanceCountersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable CPU performance counters on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#cpu_performance_counters_enabled VirtualMachine#cpu_performance_counters_enabled}

---

##### `cpuReservation`<sup>Optional</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuReservation"></a>

```java
public java.lang.Number getCpuReservation();
```

- *Type:* java.lang.Number

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#cpu_reservation VirtualMachine#cpu_reservation}

---

##### `cpuShareCount`<sup>Optional</sup> <a name="cpuShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareCount"></a>

```java
public java.lang.Number getCpuShareCount();
```

- *Type:* java.lang.Number

The amount of shares to allocate to cpu for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#cpu_share_count VirtualMachine#cpu_share_count}

---

##### `cpuShareLevel`<sup>Optional</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareLevel"></a>

```java
public java.lang.String getCpuShareLevel();
```

- *Type:* java.lang.String

The allocation level for cpu resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#cpu_share_level VirtualMachine#cpu_share_level}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.customAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#custom_attributes VirtualMachine#custom_attributes}

---

##### `datacenterId`<sup>Optional</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

The ID of the datacenter where the VM is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#datacenter_id VirtualMachine#datacenter_id}

---

##### `datastoreClusterId`<sup>Optional</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreClusterId"></a>

```java
public java.lang.String getDatastoreClusterId();
```

- *Type:* java.lang.String

The ID of a datastore cluster to put the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#datastore_cluster_id VirtualMachine#datastore_cluster_id}

---

##### `datastoreId`<sup>Optional</sup> <a name="datastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreId"></a>

```java
public java.lang.String getDatastoreId();
```

- *Type:* java.lang.String

The ID of the virtual machine's datastore.

The virtual machine configuration is placed here, along with any virtual disks that are created without datastores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.disk"></a>

```java
public java.lang.Object getDisk();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>>

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#disk VirtualMachine#disk}

---

##### `efiSecureBootEnabled`<sup>Optional</sup> <a name="efiSecureBootEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.efiSecureBootEnabled"></a>

```java
public java.lang.Object getEfiSecureBootEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When the boot type set in firmware is efi, this enables EFI secure boot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#efi_secure_boot_enabled VirtualMachine#efi_secure_boot_enabled}

---

##### `enableDiskUuid`<sup>Optional</sup> <a name="enableDiskUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableDiskUuid"></a>

```java
public java.lang.Object getEnableDiskUuid();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#enable_disk_uuid VirtualMachine#enable_disk_uuid}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable logging on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#enable_logging VirtualMachine#enable_logging}

---

##### `eptRviMode`<sup>Optional</sup> <a name="eptRviMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.eptRviMode"></a>

```java
public java.lang.String getEptRviMode();
```

- *Type:* java.lang.String

The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ept_rvi_mode VirtualMachine#ept_rvi_mode}

---

##### `extraConfig`<sup>Optional</sup> <a name="extraConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Extra configuration data for this virtual machine.

Can be used to supply advanced parameters not normally in configuration, such as instance metadata, or configuration data for OVF images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#extra_config VirtualMachine#extra_config}

---

##### `extraConfigRebootRequired`<sup>Optional</sup> <a name="extraConfigRebootRequired" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfigRebootRequired"></a>

```java
public java.lang.Object getExtraConfigRebootRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow the virtual machine to be rebooted when a change to `extra_config` occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#extra_config_reboot_required VirtualMachine#extra_config_reboot_required}

---

##### `firmware`<sup>Optional</sup> <a name="firmware" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.firmware"></a>

```java
public java.lang.String getFirmware();
```

- *Type:* java.lang.String

The firmware interface to use on the virtual machine. Can be one of bios or efi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#firmware VirtualMachine#firmware}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

The name of the folder to locate the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#folder VirtualMachine#folder}

---

##### `forcePowerOff`<sup>Optional</sup> <a name="forcePowerOff" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forcePowerOff"></a>

```java
public java.lang.Object getForcePowerOff();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true to force power-off a virtual machine if a graceful guest shutdown failed for a necessary operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#force_power_off VirtualMachine#force_power_off}

---

##### `guestId`<sup>Optional</sup> <a name="guestId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.guestId"></a>

```java
public java.lang.String getGuestId();
```

- *Type:* java.lang.String

The guest ID for the operating system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#guest_id VirtualMachine#guest_id}

---

##### `hardwareVersion`<sup>Optional</sup> <a name="hardwareVersion" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hardwareVersion"></a>

```java
public java.lang.Number getHardwareVersion();
```

- *Type:* java.lang.Number

The hardware version for the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#hardware_version VirtualMachine#hardware_version}

---

##### `hostSystemId`<sup>Optional</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hostSystemId"></a>

```java
public java.lang.String getHostSystemId();
```

- *Type:* java.lang.String

The ID of an optional host system to pin the virtual machine to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#host_system_id VirtualMachine#host_system_id}

---

##### `hvMode`<sup>Optional</sup> <a name="hvMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hvMode"></a>

```java
public java.lang.String getHvMode();
```

- *Type:* java.lang.String

The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#hv_mode VirtualMachine#hv_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#id VirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ideControllerCount`<sup>Optional</sup> <a name="ideControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ideControllerCount"></a>

```java
public java.lang.Number getIdeControllerCount();
```

- *Type:* java.lang.Number

The number of IDE controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ide_controller_count VirtualMachine#ide_controller_count}

---

##### `ignoredGuestIps`<sup>Optional</sup> <a name="ignoredGuestIps" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ignoredGuestIps"></a>

```java
public java.util.List<java.lang.String> getIgnoredGuestIps();
```

- *Type:* java.util.List<java.lang.String>

List of IP addresses and CIDR networks to ignore while waiting for an IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ignored_guest_ips VirtualMachine#ignored_guest_ips}

---

##### `latencySensitivity`<sup>Optional</sup> <a name="latencySensitivity" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.latencySensitivity"></a>

```java
public java.lang.String getLatencySensitivity();
```

- *Type:* java.lang.String

Controls the scheduling delay of the virtual machine.

Use a higher sensitivity for applications that require lower latency, such as VOIP, media player applications, or applications that require frequent access to mouse or keyboard devices. Can be one of low, normal, medium, or high.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#latency_sensitivity VirtualMachine#latency_sensitivity}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

The size of the virtual machine's memory, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#memory VirtualMachine#memory}

---

##### `memoryHotAddEnabled`<sup>Optional</sup> <a name="memoryHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryHotAddEnabled"></a>

```java
public java.lang.Object getMemoryHotAddEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow memory to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#memory_hot_add_enabled VirtualMachine#memory_hot_add_enabled}

---

##### `memoryLimit`<sup>Optional</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryLimit"></a>

```java
public java.lang.Number getMemoryLimit();
```

- *Type:* java.lang.Number

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#memory_limit VirtualMachine#memory_limit}

---

##### `memoryReservation`<sup>Optional</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservation"></a>

```java
public java.lang.Number getMemoryReservation();
```

- *Type:* java.lang.Number

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#memory_reservation VirtualMachine#memory_reservation}

---

##### `memoryReservationLockedToMax`<sup>Optional</sup> <a name="memoryReservationLockedToMax" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservationLockedToMax"></a>

```java
public java.lang.Object getMemoryReservationLockedToMax();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#memory_reservation_locked_to_max VirtualMachine#memory_reservation_locked_to_max}

---

##### `memoryShareCount`<sup>Optional</sup> <a name="memoryShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareCount"></a>

```java
public java.lang.Number getMemoryShareCount();
```

- *Type:* java.lang.Number

The amount of shares to allocate to memory for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#memory_share_count VirtualMachine#memory_share_count}

---

##### `memoryShareLevel`<sup>Optional</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareLevel"></a>

```java
public java.lang.String getMemoryShareLevel();
```

- *Type:* java.lang.String

The allocation level for memory resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#memory_share_level VirtualMachine#memory_share_level}

---

##### `migrateWaitTimeout`<sup>Optional</sup> <a name="migrateWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.migrateWaitTimeout"></a>

```java
public java.lang.Number getMigrateWaitTimeout();
```

- *Type:* java.lang.Number

The amount of time, in minutes, to wait for a vMotion operation to complete before failing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#migrate_wait_timeout VirtualMachine#migrate_wait_timeout}

---

##### `nestedHvEnabled`<sup>Optional</sup> <a name="nestedHvEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.nestedHvEnabled"></a>

```java
public java.lang.Object getNestedHvEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#nested_hv_enabled VirtualMachine#nested_hv_enabled}

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.networkInterface"></a>

```java
public java.lang.Object getNetworkInterface();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#network_interface VirtualMachine#network_interface}

---

##### `numCoresPerSocket`<sup>Optional</sup> <a name="numCoresPerSocket" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCoresPerSocket"></a>

```java
public java.lang.Number getNumCoresPerSocket();
```

- *Type:* java.lang.Number

The number of cores to distribute amongst the CPUs in this virtual machine.

If specified, the value supplied to num_cpus must be evenly divisible by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#num_cores_per_socket VirtualMachine#num_cores_per_socket}

---

##### `numCpus`<sup>Optional</sup> <a name="numCpus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCpus"></a>

```java
public java.lang.Number getNumCpus();
```

- *Type:* java.lang.Number

The number of virtual processors to assign to this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#num_cpus VirtualMachine#num_cpus}

---

##### `ovfDeploy`<sup>Optional</sup> <a name="ovfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ovfDeploy"></a>

```java
public VirtualMachineOvfDeploy getOvfDeploy();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

ovf_deploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ovf_deploy VirtualMachine#ovf_deploy}

---

##### `pciDeviceId`<sup>Optional</sup> <a name="pciDeviceId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.pciDeviceId"></a>

```java
public java.util.List<java.lang.String> getPciDeviceId();
```

- *Type:* java.util.List<java.lang.String>

A list of PCI passthrough devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#pci_device_id VirtualMachine#pci_device_id}

---

##### `poweronTimeout`<sup>Optional</sup> <a name="poweronTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.poweronTimeout"></a>

```java
public java.lang.Number getPoweronTimeout();
```

- *Type:* java.lang.Number

The amount of time, in seconds, that we will be trying to power on a VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#poweron_timeout VirtualMachine#poweron_timeout}

---

##### `replaceTrigger`<sup>Optional</sup> <a name="replaceTrigger" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.replaceTrigger"></a>

```java
public java.lang.String getReplaceTrigger();
```

- *Type:* java.lang.String

Triggers replacement of resource whenever it changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#replace_trigger VirtualMachine#replace_trigger}

---

##### `runToolsScriptsAfterPowerOn`<sup>Optional</sup> <a name="runToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterPowerOn"></a>

```java
public java.lang.Object getRunToolsScriptsAfterPowerOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts after virtual machine power-on when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#run_tools_scripts_after_power_on VirtualMachine#run_tools_scripts_after_power_on}

---

##### `runToolsScriptsAfterResume`<sup>Optional</sup> <a name="runToolsScriptsAfterResume" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterResume"></a>

```java
public java.lang.Object getRunToolsScriptsAfterResume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts after virtual machine resume when when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#run_tools_scripts_after_resume VirtualMachine#run_tools_scripts_after_resume}

---

##### `runToolsScriptsBeforeGuestReboot`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestReboot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts before guest operating system reboot when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#run_tools_scripts_before_guest_reboot VirtualMachine#run_tools_scripts_before_guest_reboot}

---

##### `runToolsScriptsBeforeGuestShutdown`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestShutdown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts before guest operating system shutdown when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#run_tools_scripts_before_guest_shutdown VirtualMachine#run_tools_scripts_before_guest_shutdown}

---

##### `runToolsScriptsBeforeGuestStandby`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby"></a>

```java
public java.lang.Object getRunToolsScriptsBeforeGuestStandby();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the run of scripts before guest operating system standby when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#run_tools_scripts_before_guest_standby VirtualMachine#run_tools_scripts_before_guest_standby}

---

##### `sataControllerCount`<sup>Optional</sup> <a name="sataControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.sataControllerCount"></a>

```java
public java.lang.Number getSataControllerCount();
```

- *Type:* java.lang.Number

The number of SATA controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#sata_controller_count VirtualMachine#sata_controller_count}

---

##### `scsiBusSharing`<sup>Optional</sup> <a name="scsiBusSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiBusSharing"></a>

```java
public java.lang.String getScsiBusSharing();
```

- *Type:* java.lang.String

Mode for sharing the SCSI bus. The modes are physicalSharing, virtualSharing, and noSharing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#scsi_bus_sharing VirtualMachine#scsi_bus_sharing}

---

##### `scsiControllerCount`<sup>Optional</sup> <a name="scsiControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiControllerCount"></a>

```java
public java.lang.Number getScsiControllerCount();
```

- *Type:* java.lang.Number

The number of SCSI controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#scsi_controller_count VirtualMachine#scsi_controller_count}

---

##### `scsiType`<sup>Optional</sup> <a name="scsiType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiType"></a>

```java
public java.lang.String getScsiType();
```

- *Type:* java.lang.String

The type of SCSI bus this virtual machine will have. Can be one of lsilogic, lsilogic-sas or pvscsi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#scsi_type VirtualMachine#scsi_type}

---

##### `shutdownWaitTimeout`<sup>Optional</sup> <a name="shutdownWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.shutdownWaitTimeout"></a>

```java
public java.lang.Number getShutdownWaitTimeout();
```

- *Type:* java.lang.Number

The amount of time, in minutes, to wait for shutdown when making necessary updates to the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#shutdown_wait_timeout VirtualMachine#shutdown_wait_timeout}

---

##### `storagePolicyId`<sup>Optional</sup> <a name="storagePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.storagePolicyId"></a>

```java
public java.lang.String getStoragePolicyId();
```

- *Type:* java.lang.String

The ID of the storage policy to assign to the virtual machine home directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#storage_policy_id VirtualMachine#storage_policy_id}

---

##### `swapPlacementPolicy`<sup>Optional</sup> <a name="swapPlacementPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.swapPlacementPolicy"></a>

```java
public java.lang.String getSwapPlacementPolicy();
```

- *Type:* java.lang.String

The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#swap_placement_policy VirtualMachine#swap_placement_policy}

---

##### `syncTimeWithHost`<sup>Optional</sup> <a name="syncTimeWithHost" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHost"></a>

```java
public java.lang.Object getSyncTimeWithHost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable guest clock synchronization with the host.

On vSphere 7.0 U1 and above, with only this setting the clock is synchronized on startup and resume. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#sync_time_with_host VirtualMachine#sync_time_with_host}

---

##### `syncTimeWithHostPeriodically`<sup>Optional</sup> <a name="syncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHostPeriodically"></a>

```java
public java.lang.Object getSyncTimeWithHostPeriodically();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable periodic clock synchronization with the host.

Supported only on vSphere 7.0 U1 and above. On prior versions setting `sync_time_with_host` is enough for periodic synchronization. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#sync_time_with_host_periodically VirtualMachine#sync_time_with_host_periodically}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#tags VirtualMachine#tags}

---

##### `toolsUpgradePolicy`<sup>Optional</sup> <a name="toolsUpgradePolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.toolsUpgradePolicy"></a>

```java
public java.lang.String getToolsUpgradePolicy();
```

- *Type:* java.lang.String

Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#tools_upgrade_policy VirtualMachine#tools_upgrade_policy}

---

##### `vapp`<sup>Optional</sup> <a name="vapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vapp"></a>

```java
public VirtualMachineVapp getVapp();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

vapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#vapp VirtualMachine#vapp}

---

##### `vbsEnabled`<sup>Optional</sup> <a name="vbsEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vbsEnabled"></a>

```java
public java.lang.Object getVbsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to specify if Virtualization-based security is enabled for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#vbs_enabled VirtualMachine#vbs_enabled}

---

##### `vvtdEnabled`<sup>Optional</sup> <a name="vvtdEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vvtdEnabled"></a>

```java
public java.lang.Object getVvtdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#vvtd_enabled VirtualMachine#vvtd_enabled}

---

##### `waitForGuestIpTimeout`<sup>Optional</sup> <a name="waitForGuestIpTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestIpTimeout"></a>

```java
public java.lang.Number getWaitForGuestIpTimeout();
```

- *Type:* java.lang.Number

The amount of time, in minutes, to wait for an available IP address on this virtual machine.

A value less than 1 disables the waiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#wait_for_guest_ip_timeout VirtualMachine#wait_for_guest_ip_timeout}

---

##### `waitForGuestNetRoutable`<sup>Optional</sup> <a name="waitForGuestNetRoutable" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetRoutable"></a>

```java
public java.lang.Object getWaitForGuestNetRoutable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether or not the guest network waiter waits for a routable address.

When false, the waiter does not wait for a default gateway, nor are IP addresses checked against any discovered default gateways as part of its success criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#wait_for_guest_net_routable VirtualMachine#wait_for_guest_net_routable}

---

##### `waitForGuestNetTimeout`<sup>Optional</sup> <a name="waitForGuestNetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetTimeout"></a>

```java
public java.lang.Number getWaitForGuestNetTimeout();
```

- *Type:* java.lang.Number

The amount of time, in minutes, to wait for an available IP address on this virtual machine.

A value less than 1 disables the waiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#wait_for_guest_net_timeout VirtualMachine#wait_for_guest_net_timeout}

---

### VirtualMachineDisk <a name="VirtualMachineDisk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineDisk;

VirtualMachineDisk.builder()
    .label(java.lang.String)
//  .attach(java.lang.Boolean)
//  .attach(IResolvable)
//  .controllerType(java.lang.String)
//  .datastoreId(java.lang.String)
//  .diskMode(java.lang.String)
//  .diskSharing(java.lang.String)
//  .eagerlyScrub(java.lang.Boolean)
//  .eagerlyScrub(IResolvable)
//  .ioLimit(java.lang.Number)
//  .ioReservation(java.lang.Number)
//  .ioShareCount(java.lang.Number)
//  .ioShareLevel(java.lang.String)
//  .keepOnRemove(java.lang.Boolean)
//  .keepOnRemove(IResolvable)
//  .path(java.lang.String)
//  .size(java.lang.Number)
//  .storagePolicyId(java.lang.String)
//  .thinProvisioned(java.lang.Boolean)
//  .thinProvisioned(IResolvable)
//  .unitNumber(java.lang.Number)
//  .writeThrough(java.lang.Boolean)
//  .writeThrough(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.label">label</a></code> | <code>java.lang.String</code> | A unique label for this disk. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.attach">attach</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this is true, the disk is attached instead of created. Implies keep_on_remove. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.controllerType">controllerType</a></code> | <code>java.lang.String</code> | The type of controller the disk should be connected to. Must be 'scsi', 'sata', or 'ide'. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.datastoreId">datastoreId</a></code> | <code>java.lang.String</code> | The datastore ID for this virtual disk, if different than the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskMode">diskMode</a></code> | <code>java.lang.String</code> | The mode of this this virtual disk for purposes of writes and snapshotting. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskSharing">diskSharing</a></code> | <code>java.lang.String</code> | The sharing mode of this virtual disk. Can be one of sharingMultiWriter or sharingNone. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.eagerlyScrub">eagerlyScrub</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The virtual disk file zeroing policy when thin_provision is not true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioLimit">ioLimit</a></code> | <code>java.lang.Number</code> | The upper limit of IOPS that this disk can use. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioReservation">ioReservation</a></code> | <code>java.lang.Number</code> | The I/O guarantee that this disk has, in IOPS. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareCount">ioShareCount</a></code> | <code>java.lang.Number</code> | The share count for this disk when the share level is custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareLevel">ioShareLevel</a></code> | <code>java.lang.String</code> | The share allocation level for this disk. Can be one of low, normal, high, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.keepOnRemove">keepOnRemove</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true to keep the underlying VMDK file when removing this virtual disk from configuration. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.path">path</a></code> | <code>java.lang.String</code> | The full path of the virtual disk. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.size">size</a></code> | <code>java.lang.Number</code> | The size of the disk, in GB. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.storagePolicyId">storagePolicyId</a></code> | <code>java.lang.String</code> | The ID of the storage policy to assign to the virtual disk in VM. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.thinProvisioned">thinProvisioned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, this disk is thin provisioned, with space for the file being allocated on an as-needed basis. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.unitNumber">unitNumber</a></code> | <code>java.lang.Number</code> | The unique device number for this disk. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.writeThrough">writeThrough</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, writes for this disk are sent directly to the filesystem immediately instead of being buffered. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

A unique label for this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#label VirtualMachine#label}

---

##### `attach`<sup>Optional</sup> <a name="attach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.attach"></a>

```java
public java.lang.Object getAttach();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this is true, the disk is attached instead of created. Implies keep_on_remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#attach VirtualMachine#attach}

---

##### `controllerType`<sup>Optional</sup> <a name="controllerType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.controllerType"></a>

```java
public java.lang.String getControllerType();
```

- *Type:* java.lang.String

The type of controller the disk should be connected to. Must be 'scsi', 'sata', or 'ide'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#controller_type VirtualMachine#controller_type}

---

##### `datastoreId`<sup>Optional</sup> <a name="datastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.datastoreId"></a>

```java
public java.lang.String getDatastoreId();
```

- *Type:* java.lang.String

The datastore ID for this virtual disk, if different than the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}

---

##### `diskMode`<sup>Optional</sup> <a name="diskMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskMode"></a>

```java
public java.lang.String getDiskMode();
```

- *Type:* java.lang.String

The mode of this this virtual disk for purposes of writes and snapshotting.

Can be one of append, independent_nonpersistent, independent_persistent, nonpersistent, persistent, or undoable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#disk_mode VirtualMachine#disk_mode}

---

##### `diskSharing`<sup>Optional</sup> <a name="diskSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskSharing"></a>

```java
public java.lang.String getDiskSharing();
```

- *Type:* java.lang.String

The sharing mode of this virtual disk. Can be one of sharingMultiWriter or sharingNone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#disk_sharing VirtualMachine#disk_sharing}

---

##### `eagerlyScrub`<sup>Optional</sup> <a name="eagerlyScrub" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.eagerlyScrub"></a>

```java
public java.lang.Object getEagerlyScrub();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The virtual disk file zeroing policy when thin_provision is not true.

The default is false, which lazily-zeros the disk, speeding up thick-provisioned disk creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#eagerly_scrub VirtualMachine#eagerly_scrub}

---

##### `ioLimit`<sup>Optional</sup> <a name="ioLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioLimit"></a>

```java
public java.lang.Number getIoLimit();
```

- *Type:* java.lang.Number

The upper limit of IOPS that this disk can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#io_limit VirtualMachine#io_limit}

---

##### `ioReservation`<sup>Optional</sup> <a name="ioReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioReservation"></a>

```java
public java.lang.Number getIoReservation();
```

- *Type:* java.lang.Number

The I/O guarantee that this disk has, in IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#io_reservation VirtualMachine#io_reservation}

---

##### `ioShareCount`<sup>Optional</sup> <a name="ioShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareCount"></a>

```java
public java.lang.Number getIoShareCount();
```

- *Type:* java.lang.Number

The share count for this disk when the share level is custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#io_share_count VirtualMachine#io_share_count}

---

##### `ioShareLevel`<sup>Optional</sup> <a name="ioShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareLevel"></a>

```java
public java.lang.String getIoShareLevel();
```

- *Type:* java.lang.String

The share allocation level for this disk. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#io_share_level VirtualMachine#io_share_level}

---

##### `keepOnRemove`<sup>Optional</sup> <a name="keepOnRemove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.keepOnRemove"></a>

```java
public java.lang.Object getKeepOnRemove();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true to keep the underlying VMDK file when removing this virtual disk from configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#keep_on_remove VirtualMachine#keep_on_remove}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The full path of the virtual disk.

This can only be provided if attach is set to true, otherwise it is a read-only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#path VirtualMachine#path}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

The size of the disk, in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#size VirtualMachine#size}

---

##### `storagePolicyId`<sup>Optional</sup> <a name="storagePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.storagePolicyId"></a>

```java
public java.lang.String getStoragePolicyId();
```

- *Type:* java.lang.String

The ID of the storage policy to assign to the virtual disk in VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#storage_policy_id VirtualMachine#storage_policy_id}

---

##### `thinProvisioned`<sup>Optional</sup> <a name="thinProvisioned" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.thinProvisioned"></a>

```java
public java.lang.Object getThinProvisioned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, this disk is thin provisioned, with space for the file being allocated on an as-needed basis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#thin_provisioned VirtualMachine#thin_provisioned}

---

##### `unitNumber`<sup>Optional</sup> <a name="unitNumber" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.unitNumber"></a>

```java
public java.lang.Number getUnitNumber();
```

- *Type:* java.lang.Number

The unique device number for this disk.

This number determines where on the SCSI bus this device will be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#unit_number VirtualMachine#unit_number}

---

##### `writeThrough`<sup>Optional</sup> <a name="writeThrough" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.writeThrough"></a>

```java
public java.lang.Object getWriteThrough();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, writes for this disk are sent directly to the filesystem immediately instead of being buffered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#write_through VirtualMachine#write_through}

---

### VirtualMachineNetworkInterface <a name="VirtualMachineNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineNetworkInterface;

VirtualMachineNetworkInterface.builder()
    .networkId(java.lang.String)
//  .adapterType(java.lang.String)
//  .bandwidthLimit(java.lang.Number)
//  .bandwidthReservation(java.lang.Number)
//  .bandwidthShareCount(java.lang.Number)
//  .bandwidthShareLevel(java.lang.String)
//  .macAddress(java.lang.String)
//  .ovfMapping(java.lang.String)
//  .physicalFunction(java.lang.String)
//  .useStaticMac(java.lang.Boolean)
//  .useStaticMac(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.networkId">networkId</a></code> | <code>java.lang.String</code> | The ID of the network to connect this network interface to. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.adapterType">adapterType</a></code> | <code>java.lang.String</code> | The controller type. Can be one of e1000, e1000e, sriov, vmxnet3, or vrdma. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthLimit">bandwidthLimit</a></code> | <code>java.lang.Number</code> | The upper bandwidth limit of this network interface, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthReservation">bandwidthReservation</a></code> | <code>java.lang.Number</code> | The bandwidth reservation of this network interface, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareCount">bandwidthShareCount</a></code> | <code>java.lang.Number</code> | The share count for this network interface when the share level is custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareLevel">bandwidthShareLevel</a></code> | <code>java.lang.String</code> | The bandwidth share allocation level for this interface. Can be one of low, normal, high, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | The MAC address of this network interface. Can only be manually set if use_static_mac is true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.ovfMapping">ovfMapping</a></code> | <code>java.lang.String</code> | Mapping of network interface to OVF network. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.physicalFunction">physicalFunction</a></code> | <code>java.lang.String</code> | The ID of the Physical SR-IOV NIC to attach to, e.g. '0000:d8:00.0'. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.useStaticMac">useStaticMac</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the mac_address field is treated as a static MAC address and set accordingly. |

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

The ID of the network to connect this network interface to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#network_id VirtualMachine#network_id}

---

##### `adapterType`<sup>Optional</sup> <a name="adapterType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.adapterType"></a>

```java
public java.lang.String getAdapterType();
```

- *Type:* java.lang.String

The controller type. Can be one of e1000, e1000e, sriov, vmxnet3, or vrdma.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#adapter_type VirtualMachine#adapter_type}

---

##### `bandwidthLimit`<sup>Optional</sup> <a name="bandwidthLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthLimit"></a>

```java
public java.lang.Number getBandwidthLimit();
```

- *Type:* java.lang.Number

The upper bandwidth limit of this network interface, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#bandwidth_limit VirtualMachine#bandwidth_limit}

---

##### `bandwidthReservation`<sup>Optional</sup> <a name="bandwidthReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthReservation"></a>

```java
public java.lang.Number getBandwidthReservation();
```

- *Type:* java.lang.Number

The bandwidth reservation of this network interface, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#bandwidth_reservation VirtualMachine#bandwidth_reservation}

---

##### `bandwidthShareCount`<sup>Optional</sup> <a name="bandwidthShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareCount"></a>

```java
public java.lang.Number getBandwidthShareCount();
```

- *Type:* java.lang.Number

The share count for this network interface when the share level is custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#bandwidth_share_count VirtualMachine#bandwidth_share_count}

---

##### `bandwidthShareLevel`<sup>Optional</sup> <a name="bandwidthShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareLevel"></a>

```java
public java.lang.String getBandwidthShareLevel();
```

- *Type:* java.lang.String

The bandwidth share allocation level for this interface. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#bandwidth_share_level VirtualMachine#bandwidth_share_level}

---

##### `macAddress`<sup>Optional</sup> <a name="macAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

The MAC address of this network interface. Can only be manually set if use_static_mac is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#mac_address VirtualMachine#mac_address}

---

##### `ovfMapping`<sup>Optional</sup> <a name="ovfMapping" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.ovfMapping"></a>

```java
public java.lang.String getOvfMapping();
```

- *Type:* java.lang.String

Mapping of network interface to OVF network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ovf_mapping VirtualMachine#ovf_mapping}

---

##### `physicalFunction`<sup>Optional</sup> <a name="physicalFunction" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.physicalFunction"></a>

```java
public java.lang.String getPhysicalFunction();
```

- *Type:* java.lang.String

The ID of the Physical SR-IOV NIC to attach to, e.g. '0000:d8:00.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#physical_function VirtualMachine#physical_function}

---

##### `useStaticMac`<sup>Optional</sup> <a name="useStaticMac" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.useStaticMac"></a>

```java
public java.lang.Object getUseStaticMac();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the mac_address field is treated as a static MAC address and set accordingly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#use_static_mac VirtualMachine#use_static_mac}

---

### VirtualMachineOvfDeploy <a name="VirtualMachineOvfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineOvfDeploy;

VirtualMachineOvfDeploy.builder()
//  .allowUnverifiedSslCert(java.lang.Boolean)
//  .allowUnverifiedSslCert(IResolvable)
//  .deploymentOption(java.lang.String)
//  .diskProvisioning(java.lang.String)
//  .enableHiddenProperties(java.lang.Boolean)
//  .enableHiddenProperties(IResolvable)
//  .ipAllocationPolicy(java.lang.String)
//  .ipProtocol(java.lang.String)
//  .localOvfPath(java.lang.String)
//  .ovfNetworkMap(java.util.Map<java.lang.String, java.lang.String>)
//  .remoteOvfUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.allowUnverifiedSslCert">allowUnverifiedSslCert</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow unverified ssl certificates while deploying ovf/ova from url. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.deploymentOption">deploymentOption</a></code> | <code>java.lang.String</code> | The Deployment option to be chosen. If empty, the default option is used. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.diskProvisioning">diskProvisioning</a></code> | <code>java.lang.String</code> | An optional disk provisioning. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.enableHiddenProperties">enableHiddenProperties</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow properties with ovf:userConfigurable=false to be set. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipAllocationPolicy">ipAllocationPolicy</a></code> | <code>java.lang.String</code> | The IP allocation policy. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | The IP protocol. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.localOvfPath">localOvfPath</a></code> | <code>java.lang.String</code> | The absolute path to the ovf/ova file in the local system. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ovfNetworkMap">ovfNetworkMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.remoteOvfUrl">remoteOvfUrl</a></code> | <code>java.lang.String</code> | URL to the remote ovf/ova file to be deployed. |

---

##### `allowUnverifiedSslCert`<sup>Optional</sup> <a name="allowUnverifiedSslCert" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.allowUnverifiedSslCert"></a>

```java
public java.lang.Object getAllowUnverifiedSslCert();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow unverified ssl certificates while deploying ovf/ova from url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#allow_unverified_ssl_cert VirtualMachine#allow_unverified_ssl_cert}

---

##### `deploymentOption`<sup>Optional</sup> <a name="deploymentOption" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.deploymentOption"></a>

```java
public java.lang.String getDeploymentOption();
```

- *Type:* java.lang.String

The Deployment option to be chosen. If empty, the default option is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#deployment_option VirtualMachine#deployment_option}

---

##### `diskProvisioning`<sup>Optional</sup> <a name="diskProvisioning" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.diskProvisioning"></a>

```java
public java.lang.String getDiskProvisioning();
```

- *Type:* java.lang.String

An optional disk provisioning.

If set, all the disks in the deployed ovf will have the same specified disk type (e.g., thin provisioned).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#disk_provisioning VirtualMachine#disk_provisioning}

---

##### `enableHiddenProperties`<sup>Optional</sup> <a name="enableHiddenProperties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.enableHiddenProperties"></a>

```java
public java.lang.Object getEnableHiddenProperties();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow properties with ovf:userConfigurable=false to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#enable_hidden_properties VirtualMachine#enable_hidden_properties}

---

##### `ipAllocationPolicy`<sup>Optional</sup> <a name="ipAllocationPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipAllocationPolicy"></a>

```java
public java.lang.String getIpAllocationPolicy();
```

- *Type:* java.lang.String

The IP allocation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ip_allocation_policy VirtualMachine#ip_allocation_policy}

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ip_protocol VirtualMachine#ip_protocol}

---

##### `localOvfPath`<sup>Optional</sup> <a name="localOvfPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.localOvfPath"></a>

```java
public java.lang.String getLocalOvfPath();
```

- *Type:* java.lang.String

The absolute path to the ovf/ova file in the local system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#local_ovf_path VirtualMachine#local_ovf_path}

---

##### `ovfNetworkMap`<sup>Optional</sup> <a name="ovfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ovfNetworkMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOvfNetworkMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#ovf_network_map VirtualMachine#ovf_network_map}

---

##### `remoteOvfUrl`<sup>Optional</sup> <a name="remoteOvfUrl" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.remoteOvfUrl"></a>

```java
public java.lang.String getRemoteOvfUrl();
```

- *Type:* java.lang.String

URL to the remote ovf/ova file to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#remote_ovf_url VirtualMachine#remote_ovf_url}

---

### VirtualMachineVapp <a name="VirtualMachineVapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineVapp;

VirtualMachineVapp.builder()
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of customizable vApp properties and their values. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of customizable vApp properties and their values.

Allows customization of VMs cloned from OVF templates which have customizable vApp properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/virtual_machine#properties VirtualMachine#properties}

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineCdromList <a name="VirtualMachineCdromList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineCdromList;

new VirtualMachineCdromList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.get"></a>

```java
public VirtualMachineCdromOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>>

---


### VirtualMachineCdromOutputReference <a name="VirtualMachineCdromOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineCdromOutputReference;

new VirtualMachineCdromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetClientDevice">resetClientDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetDatastoreId">resetDatastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientDevice` <a name="resetClientDevice" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetClientDevice"></a>

```java
public void resetClientDevice()
```

##### `resetDatastoreId` <a name="resetDatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetDatastoreId"></a>

```java
public void resetDatastoreId()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.deviceAddress">deviceAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.key">key</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDeviceInput">clientDeviceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreIdInput">datastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDevice">clientDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreId">datastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceAddress`<sup>Required</sup> <a name="deviceAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.deviceAddress"></a>

```java
public java.lang.String getDeviceAddress();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.key"></a>

```java
public java.lang.Number getKey();
```

- *Type:* java.lang.Number

---

##### `clientDeviceInput`<sup>Optional</sup> <a name="clientDeviceInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDeviceInput"></a>

```java
public java.lang.Object getClientDeviceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datastoreIdInput`<sup>Optional</sup> <a name="datastoreIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreIdInput"></a>

```java
public java.lang.String getDatastoreIdInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `clientDevice`<sup>Required</sup> <a name="clientDevice" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDevice"></a>

```java
public java.lang.Object getClientDevice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreId"></a>

```java
public java.lang.String getDatastoreId();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>

---


### VirtualMachineCloneCustomizationSpecOutputReference <a name="VirtualMachineCloneCustomizationSpecOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineCloneCustomizationSpecOutputReference;

new VirtualMachineCloneCustomizationSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.internalValue"></a>

```java
public VirtualMachineCloneCustomizationSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

---


### VirtualMachineCloneCustomizeLinuxOptionsOutputReference <a name="VirtualMachineCloneCustomizeLinuxOptionsOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference;

new VirtualMachineCloneCustomizeLinuxOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetHwClockUtc">resetHwClockUtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetScriptText">resetScriptText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHwClockUtc` <a name="resetHwClockUtc" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetHwClockUtc"></a>

```java
public void resetHwClockUtc()
```

##### `resetScriptText` <a name="resetScriptText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetScriptText"></a>

```java
public void resetScriptText()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtcInput">hwClockUtcInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptTextInput">scriptTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtc">hwClockUtc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptText">scriptText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `hwClockUtcInput`<sup>Optional</sup> <a name="hwClockUtcInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtcInput"></a>

```java
public java.lang.Object getHwClockUtcInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scriptTextInput`<sup>Optional</sup> <a name="scriptTextInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptTextInput"></a>

```java
public java.lang.String getScriptTextInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `hwClockUtc`<sup>Required</sup> <a name="hwClockUtc" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtc"></a>

```java
public java.lang.Object getHwClockUtc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scriptText`<sup>Required</sup> <a name="scriptText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptText"></a>

```java
public java.lang.String getScriptText();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.internalValue"></a>

```java
public VirtualMachineCloneCustomizeLinuxOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

---


### VirtualMachineCloneCustomizeNetworkInterfaceList <a name="VirtualMachineCloneCustomizeNetworkInterfaceList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineCloneCustomizeNetworkInterfaceList;

new VirtualMachineCloneCustomizeNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.get"></a>

```java
public VirtualMachineCloneCustomizeNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>>

---


### VirtualMachineCloneCustomizeNetworkInterfaceOutputReference <a name="VirtualMachineCloneCustomizeNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference;

new VirtualMachineCloneCustomizeNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsDomain">resetDnsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsServerList">resetDnsServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Address">resetIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Netmask">resetIpv4Netmask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Netmask">resetIpv6Netmask</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsDomain` <a name="resetDnsDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsDomain"></a>

```java
public void resetDnsDomain()
```

##### `resetDnsServerList` <a name="resetDnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsServerList"></a>

```java
public void resetDnsServerList()
```

##### `resetIpv4Address` <a name="resetIpv4Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Address"></a>

```java
public void resetIpv4Address()
```

##### `resetIpv4Netmask` <a name="resetIpv4Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Netmask"></a>

```java
public void resetIpv4Netmask()
```

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Address"></a>

```java
public void resetIpv6Address()
```

##### `resetIpv6Netmask` <a name="resetIpv6Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Netmask"></a>

```java
public void resetIpv6Netmask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomainInput">dnsDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerListInput">dnsServerListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4AddressInput">ipv4AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4NetmaskInput">ipv4NetmaskInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6NetmaskInput">ipv6NetmaskInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomain">dnsDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerList">dnsServerList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Address">ipv4Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Netmask">ipv4Netmask</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Netmask">ipv6Netmask</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsDomainInput`<sup>Optional</sup> <a name="dnsDomainInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomainInput"></a>

```java
public java.lang.String getDnsDomainInput();
```

- *Type:* java.lang.String

---

##### `dnsServerListInput`<sup>Optional</sup> <a name="dnsServerListInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerListInput"></a>

```java
public java.util.List<java.lang.String> getDnsServerListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv4AddressInput`<sup>Optional</sup> <a name="ipv4AddressInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4AddressInput"></a>

```java
public java.lang.String getIpv4AddressInput();
```

- *Type:* java.lang.String

---

##### `ipv4NetmaskInput`<sup>Optional</sup> <a name="ipv4NetmaskInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4NetmaskInput"></a>

```java
public java.lang.Number getIpv4NetmaskInput();
```

- *Type:* java.lang.Number

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```java
public java.lang.String getIpv6AddressInput();
```

- *Type:* java.lang.String

---

##### `ipv6NetmaskInput`<sup>Optional</sup> <a name="ipv6NetmaskInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6NetmaskInput"></a>

```java
public java.lang.Number getIpv6NetmaskInput();
```

- *Type:* java.lang.Number

---

##### `dnsDomain`<sup>Required</sup> <a name="dnsDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomain"></a>

```java
public java.lang.String getDnsDomain();
```

- *Type:* java.lang.String

---

##### `dnsServerList`<sup>Required</sup> <a name="dnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerList"></a>

```java
public java.util.List<java.lang.String> getDnsServerList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Address"></a>

```java
public java.lang.String getIpv4Address();
```

- *Type:* java.lang.String

---

##### `ipv4Netmask`<sup>Required</sup> <a name="ipv4Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Netmask"></a>

```java
public java.lang.Number getIpv4Netmask();
```

- *Type:* java.lang.Number

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

---

##### `ipv6Netmask`<sup>Required</sup> <a name="ipv6Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Netmask"></a>

```java
public java.lang.Number getIpv6Netmask();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>

---


### VirtualMachineCloneCustomizeOutputReference <a name="VirtualMachineCloneCustomizeOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineCloneCustomizeOutputReference;

new VirtualMachineCloneCustomizeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions">putLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions">putWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsServerList">resetDnsServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsSuffixList">resetDnsSuffixList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv4Gateway">resetIpv4Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv6Gateway">resetIpv6Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetLinuxOptions">resetLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsOptions">resetWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsSysprepText">resetWindowsSysprepText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLinuxOptions` <a name="putLinuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions"></a>

```java
public void putLinuxOptions(VirtualMachineCloneCustomizeLinuxOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putNetworkInterface"></a>

```java
public void putNetworkInterface(IResolvable OR java.util.List<VirtualMachineCloneCustomizeNetworkInterface> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putNetworkInterface.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>>

---

##### `putWindowsOptions` <a name="putWindowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions"></a>

```java
public void putWindowsOptions(VirtualMachineCloneCustomizeWindowsOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

---

##### `resetDnsServerList` <a name="resetDnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsServerList"></a>

```java
public void resetDnsServerList()
```

##### `resetDnsSuffixList` <a name="resetDnsSuffixList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsSuffixList"></a>

```java
public void resetDnsSuffixList()
```

##### `resetIpv4Gateway` <a name="resetIpv4Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv4Gateway"></a>

```java
public void resetIpv4Gateway()
```

##### `resetIpv6Gateway` <a name="resetIpv6Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv6Gateway"></a>

```java
public void resetIpv6Gateway()
```

##### `resetLinuxOptions` <a name="resetLinuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetLinuxOptions"></a>

```java
public void resetLinuxOptions()
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetNetworkInterface"></a>

```java
public void resetNetworkInterface()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetWindowsOptions` <a name="resetWindowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsOptions"></a>

```java
public void resetWindowsOptions()
```

##### `resetWindowsSysprepText` <a name="resetWindowsSysprepText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsSysprepText"></a>

```java
public void resetWindowsSysprepText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptions">linuxOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference">VirtualMachineCloneCustomizeLinuxOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList">VirtualMachineCloneCustomizeNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptions">windowsOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference">VirtualMachineCloneCustomizeWindowsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerListInput">dnsServerListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixListInput">dnsSuffixListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4GatewayInput">ipv4GatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6GatewayInput">ipv6GatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptionsInput">linuxOptionsInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptionsInput">windowsOptionsInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepTextInput">windowsSysprepTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerList">dnsServerList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixList">dnsSuffixList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4Gateway">ipv4Gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6Gateway">ipv6Gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepText">windowsSysprepText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `linuxOptions`<sup>Required</sup> <a name="linuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptions"></a>

```java
public VirtualMachineCloneCustomizeLinuxOptionsOutputReference getLinuxOptions();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference">VirtualMachineCloneCustomizeLinuxOptionsOutputReference</a>

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterface"></a>

```java
public VirtualMachineCloneCustomizeNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList">VirtualMachineCloneCustomizeNetworkInterfaceList</a>

---

##### `windowsOptions`<sup>Required</sup> <a name="windowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptions"></a>

```java
public VirtualMachineCloneCustomizeWindowsOptionsOutputReference getWindowsOptions();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference">VirtualMachineCloneCustomizeWindowsOptionsOutputReference</a>

---

##### `dnsServerListInput`<sup>Optional</sup> <a name="dnsServerListInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerListInput"></a>

```java
public java.util.List<java.lang.String> getDnsServerListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsSuffixListInput`<sup>Optional</sup> <a name="dnsSuffixListInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixListInput"></a>

```java
public java.util.List<java.lang.String> getDnsSuffixListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv4GatewayInput`<sup>Optional</sup> <a name="ipv4GatewayInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4GatewayInput"></a>

```java
public java.lang.String getIpv4GatewayInput();
```

- *Type:* java.lang.String

---

##### `ipv6GatewayInput`<sup>Optional</sup> <a name="ipv6GatewayInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6GatewayInput"></a>

```java
public java.lang.String getIpv6GatewayInput();
```

- *Type:* java.lang.String

---

##### `linuxOptionsInput`<sup>Optional</sup> <a name="linuxOptionsInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptionsInput"></a>

```java
public VirtualMachineCloneCustomizeLinuxOptions getLinuxOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterfaceInput"></a>

```java
public java.lang.Object getNetworkInterfaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `windowsOptionsInput`<sup>Optional</sup> <a name="windowsOptionsInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptionsInput"></a>

```java
public VirtualMachineCloneCustomizeWindowsOptions getWindowsOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

---

##### `windowsSysprepTextInput`<sup>Optional</sup> <a name="windowsSysprepTextInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepTextInput"></a>

```java
public java.lang.String getWindowsSysprepTextInput();
```

- *Type:* java.lang.String

---

##### `dnsServerList`<sup>Required</sup> <a name="dnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerList"></a>

```java
public java.util.List<java.lang.String> getDnsServerList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsSuffixList`<sup>Required</sup> <a name="dnsSuffixList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixList"></a>

```java
public java.util.List<java.lang.String> getDnsSuffixList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv4Gateway`<sup>Required</sup> <a name="ipv4Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4Gateway"></a>

```java
public java.lang.String getIpv4Gateway();
```

- *Type:* java.lang.String

---

##### `ipv6Gateway`<sup>Required</sup> <a name="ipv6Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6Gateway"></a>

```java
public java.lang.String getIpv6Gateway();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `windowsSysprepText`<sup>Required</sup> <a name="windowsSysprepText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepText"></a>

```java
public java.lang.String getWindowsSysprepText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.internalValue"></a>

```java
public VirtualMachineCloneCustomize getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

---


### VirtualMachineCloneCustomizeWindowsOptionsOutputReference <a name="VirtualMachineCloneCustomizeWindowsOptionsOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference;

new VirtualMachineCloneCustomizeWindowsOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogon">resetAutoLogon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogonCount">resetAutoLogonCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminPassword">resetDomainAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminUser">resetDomainAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainOu">resetDomainOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetFullName">resetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetJoinDomain">resetJoinDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetProductKey">resetProductKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetRunOnceCommandList">resetRunOnceCommandList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetWorkgroup">resetWorkgroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAdminPassword"></a>

```java
public void resetAdminPassword()
```

##### `resetAutoLogon` <a name="resetAutoLogon" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogon"></a>

```java
public void resetAutoLogon()
```

##### `resetAutoLogonCount` <a name="resetAutoLogonCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogonCount"></a>

```java
public void resetAutoLogonCount()
```

##### `resetDomainAdminPassword` <a name="resetDomainAdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminPassword"></a>

```java
public void resetDomainAdminPassword()
```

##### `resetDomainAdminUser` <a name="resetDomainAdminUser" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminUser"></a>

```java
public void resetDomainAdminUser()
```

##### `resetDomainOu` <a name="resetDomainOu" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainOu"></a>

```java
public void resetDomainOu()
```

##### `resetFullName` <a name="resetFullName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetFullName"></a>

```java
public void resetFullName()
```

##### `resetJoinDomain` <a name="resetJoinDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetJoinDomain"></a>

```java
public void resetJoinDomain()
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetOrganizationName"></a>

```java
public void resetOrganizationName()
```

##### `resetProductKey` <a name="resetProductKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetProductKey"></a>

```java
public void resetProductKey()
```

##### `resetRunOnceCommandList` <a name="resetRunOnceCommandList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetRunOnceCommandList"></a>

```java
public void resetRunOnceCommandList()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```

##### `resetWorkgroup` <a name="resetWorkgroup" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetWorkgroup"></a>

```java
public void resetWorkgroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCountInput">autoLogonCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonInput">autoLogonInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerNameInput">computerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPasswordInput">domainAdminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUserInput">domainAdminUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainOuInput">domainOuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomainInput">joinDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKeyInput">productKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandListInput">runOnceCommandListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroupInput">workgroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogon">autoLogon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCount">autoLogonCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerName">computerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPassword">domainAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUser">domainAdminUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainOu">domainOu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullName">fullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomain">joinDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKey">productKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandList">runOnceCommandList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroup">workgroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `autoLogonCountInput`<sup>Optional</sup> <a name="autoLogonCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCountInput"></a>

```java
public java.lang.Number getAutoLogonCountInput();
```

- *Type:* java.lang.Number

---

##### `autoLogonInput`<sup>Optional</sup> <a name="autoLogonInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonInput"></a>

```java
public java.lang.Object getAutoLogonInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `computerNameInput`<sup>Optional</sup> <a name="computerNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerNameInput"></a>

```java
public java.lang.String getComputerNameInput();
```

- *Type:* java.lang.String

---

##### `domainAdminPasswordInput`<sup>Optional</sup> <a name="domainAdminPasswordInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPasswordInput"></a>

```java
public java.lang.String getDomainAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `domainAdminUserInput`<sup>Optional</sup> <a name="domainAdminUserInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUserInput"></a>

```java
public java.lang.String getDomainAdminUserInput();
```

- *Type:* java.lang.String

---

##### `domainOuInput`<sup>Optional</sup> <a name="domainOuInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainOuInput"></a>

```java
public java.lang.String getDomainOuInput();
```

- *Type:* java.lang.String

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullNameInput"></a>

```java
public java.lang.String getFullNameInput();
```

- *Type:* java.lang.String

---

##### `joinDomainInput`<sup>Optional</sup> <a name="joinDomainInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomainInput"></a>

```java
public java.lang.String getJoinDomainInput();
```

- *Type:* java.lang.String

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationNameInput"></a>

```java
public java.lang.String getOrganizationNameInput();
```

- *Type:* java.lang.String

---

##### `productKeyInput`<sup>Optional</sup> <a name="productKeyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKeyInput"></a>

```java
public java.lang.String getProductKeyInput();
```

- *Type:* java.lang.String

---

##### `runOnceCommandListInput`<sup>Optional</sup> <a name="runOnceCommandListInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandListInput"></a>

```java
public java.util.List<java.lang.String> getRunOnceCommandListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZoneInput"></a>

```java
public java.lang.Number getTimeZoneInput();
```

- *Type:* java.lang.Number

---

##### `workgroupInput`<sup>Optional</sup> <a name="workgroupInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroupInput"></a>

```java
public java.lang.String getWorkgroupInput();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `autoLogon`<sup>Required</sup> <a name="autoLogon" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogon"></a>

```java
public java.lang.Object getAutoLogon();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoLogonCount`<sup>Required</sup> <a name="autoLogonCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCount"></a>

```java
public java.lang.Number getAutoLogonCount();
```

- *Type:* java.lang.Number

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerName"></a>

```java
public java.lang.String getComputerName();
```

- *Type:* java.lang.String

---

##### `domainAdminPassword`<sup>Required</sup> <a name="domainAdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPassword"></a>

```java
public java.lang.String getDomainAdminPassword();
```

- *Type:* java.lang.String

---

##### `domainAdminUser`<sup>Required</sup> <a name="domainAdminUser" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUser"></a>

```java
public java.lang.String getDomainAdminUser();
```

- *Type:* java.lang.String

---

##### `domainOu`<sup>Required</sup> <a name="domainOu" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainOu"></a>

```java
public java.lang.String getDomainOu();
```

- *Type:* java.lang.String

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

---

##### `joinDomain`<sup>Required</sup> <a name="joinDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomain"></a>

```java
public java.lang.String getJoinDomain();
```

- *Type:* java.lang.String

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

---

##### `productKey`<sup>Required</sup> <a name="productKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKey"></a>

```java
public java.lang.String getProductKey();
```

- *Type:* java.lang.String

---

##### `runOnceCommandList`<sup>Required</sup> <a name="runOnceCommandList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandList"></a>

```java
public java.util.List<java.lang.String> getRunOnceCommandList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZone"></a>

```java
public java.lang.Number getTimeZone();
```

- *Type:* java.lang.Number

---

##### `workgroup`<sup>Required</sup> <a name="workgroup" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroup"></a>

```java
public java.lang.String getWorkgroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.internalValue"></a>

```java
public VirtualMachineCloneCustomizeWindowsOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

---


### VirtualMachineCloneOutputReference <a name="VirtualMachineCloneOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineCloneOutputReference;

new VirtualMachineCloneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomizationSpec">putCustomizationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize">putCustomize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomizationSpec">resetCustomizationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomize">resetCustomize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetLinkedClone">resetLinkedClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfNetworkMap">resetOvfNetworkMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfStorageMap">resetOvfStorageMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomizationSpec` <a name="putCustomizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomizationSpec"></a>

```java
public void putCustomizationSpec(VirtualMachineCloneCustomizationSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomizationSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

---

##### `putCustomize` <a name="putCustomize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize"></a>

```java
public void putCustomize(VirtualMachineCloneCustomize value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

---

##### `resetCustomizationSpec` <a name="resetCustomizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomizationSpec"></a>

```java
public void resetCustomizationSpec()
```

##### `resetCustomize` <a name="resetCustomize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomize"></a>

```java
public void resetCustomize()
```

##### `resetLinkedClone` <a name="resetLinkedClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetLinkedClone"></a>

```java
public void resetLinkedClone()
```

##### `resetOvfNetworkMap` <a name="resetOvfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfNetworkMap"></a>

```java
public void resetOvfNetworkMap()
```

##### `resetOvfStorageMap` <a name="resetOvfStorageMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfStorageMap"></a>

```java
public void resetOvfStorageMap()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpec">customizationSpec</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference">VirtualMachineCloneCustomizationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customize">customize</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference">VirtualMachineCloneCustomizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpecInput">customizationSpecInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizeInput">customizeInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedCloneInput">linkedCloneInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMapInput">ovfNetworkMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMapInput">ovfStorageMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuidInput">templateUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedClone">linkedClone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMap">ovfNetworkMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMap">ovfStorageMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuid">templateUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customizationSpec`<sup>Required</sup> <a name="customizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpec"></a>

```java
public VirtualMachineCloneCustomizationSpecOutputReference getCustomizationSpec();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference">VirtualMachineCloneCustomizationSpecOutputReference</a>

---

##### `customize`<sup>Required</sup> <a name="customize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customize"></a>

```java
public VirtualMachineCloneCustomizeOutputReference getCustomize();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference">VirtualMachineCloneCustomizeOutputReference</a>

---

##### `customizationSpecInput`<sup>Optional</sup> <a name="customizationSpecInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpecInput"></a>

```java
public VirtualMachineCloneCustomizationSpec getCustomizationSpecInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

---

##### `customizeInput`<sup>Optional</sup> <a name="customizeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizeInput"></a>

```java
public VirtualMachineCloneCustomize getCustomizeInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

---

##### `linkedCloneInput`<sup>Optional</sup> <a name="linkedCloneInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedCloneInput"></a>

```java
public java.lang.Object getLinkedCloneInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ovfNetworkMapInput`<sup>Optional</sup> <a name="ovfNetworkMapInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOvfNetworkMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ovfStorageMapInput`<sup>Optional</sup> <a name="ovfStorageMapInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOvfStorageMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateUuidInput`<sup>Optional</sup> <a name="templateUuidInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuidInput"></a>

```java
public java.lang.String getTemplateUuidInput();
```

- *Type:* java.lang.String

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `linkedClone`<sup>Required</sup> <a name="linkedClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedClone"></a>

```java
public java.lang.Object getLinkedClone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ovfNetworkMap`<sup>Required</sup> <a name="ovfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOvfNetworkMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ovfStorageMap`<sup>Required</sup> <a name="ovfStorageMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOvfStorageMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateUuid`<sup>Required</sup> <a name="templateUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuid"></a>

```java
public java.lang.String getTemplateUuid();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.internalValue"></a>

```java
public VirtualMachineClone getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

---


### VirtualMachineDiskList <a name="VirtualMachineDiskList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineDiskList;

new VirtualMachineDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.get"></a>

```java
public VirtualMachineDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>>

---


### VirtualMachineDiskOutputReference <a name="VirtualMachineDiskOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineDiskOutputReference;

new VirtualMachineDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetAttach">resetAttach</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetControllerType">resetControllerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDatastoreId">resetDatastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskMode">resetDiskMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskSharing">resetDiskSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetEagerlyScrub">resetEagerlyScrub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoLimit">resetIoLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoReservation">resetIoReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareCount">resetIoShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareLevel">resetIoShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetKeepOnRemove">resetKeepOnRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetStoragePolicyId">resetStoragePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetThinProvisioned">resetThinProvisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetUnitNumber">resetUnitNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetWriteThrough">resetWriteThrough</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttach` <a name="resetAttach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetAttach"></a>

```java
public void resetAttach()
```

##### `resetControllerType` <a name="resetControllerType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetControllerType"></a>

```java
public void resetControllerType()
```

##### `resetDatastoreId` <a name="resetDatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDatastoreId"></a>

```java
public void resetDatastoreId()
```

##### `resetDiskMode` <a name="resetDiskMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskMode"></a>

```java
public void resetDiskMode()
```

##### `resetDiskSharing` <a name="resetDiskSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskSharing"></a>

```java
public void resetDiskSharing()
```

##### `resetEagerlyScrub` <a name="resetEagerlyScrub" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetEagerlyScrub"></a>

```java
public void resetEagerlyScrub()
```

##### `resetIoLimit` <a name="resetIoLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoLimit"></a>

```java
public void resetIoLimit()
```

##### `resetIoReservation` <a name="resetIoReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoReservation"></a>

```java
public void resetIoReservation()
```

##### `resetIoShareCount` <a name="resetIoShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareCount"></a>

```java
public void resetIoShareCount()
```

##### `resetIoShareLevel` <a name="resetIoShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareLevel"></a>

```java
public void resetIoShareLevel()
```

##### `resetKeepOnRemove` <a name="resetKeepOnRemove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetKeepOnRemove"></a>

```java
public void resetKeepOnRemove()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetSize"></a>

```java
public void resetSize()
```

##### `resetStoragePolicyId` <a name="resetStoragePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetStoragePolicyId"></a>

```java
public void resetStoragePolicyId()
```

##### `resetThinProvisioned` <a name="resetThinProvisioned" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetThinProvisioned"></a>

```java
public void resetThinProvisioned()
```

##### `resetUnitNumber` <a name="resetUnitNumber" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetUnitNumber"></a>

```java
public void resetUnitNumber()
```

##### `resetWriteThrough` <a name="resetWriteThrough" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetWriteThrough"></a>

```java
public void resetWriteThrough()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.deviceAddress">deviceAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.key">key</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attachInput">attachInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerTypeInput">controllerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreIdInput">datastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskModeInput">diskModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharingInput">diskSharingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrubInput">eagerlyScrubInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimitInput">ioLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservationInput">ioReservationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCountInput">ioShareCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevelInput">ioShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemoveInput">keepOnRemoveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyIdInput">storagePolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisionedInput">thinProvisionedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumberInput">unitNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThroughInput">writeThroughInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attach">attach</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerType">controllerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreId">datastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskMode">diskMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharing">diskSharing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrub">eagerlyScrub</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimit">ioLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservation">ioReservation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCount">ioShareCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevel">ioShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemove">keepOnRemove</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyId">storagePolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisioned">thinProvisioned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumber">unitNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThrough">writeThrough</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceAddress`<sup>Required</sup> <a name="deviceAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.deviceAddress"></a>

```java
public java.lang.String getDeviceAddress();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.key"></a>

```java
public java.lang.Number getKey();
```

- *Type:* java.lang.Number

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `attachInput`<sup>Optional</sup> <a name="attachInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attachInput"></a>

```java
public java.lang.Object getAttachInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `controllerTypeInput`<sup>Optional</sup> <a name="controllerTypeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerTypeInput"></a>

```java
public java.lang.String getControllerTypeInput();
```

- *Type:* java.lang.String

---

##### `datastoreIdInput`<sup>Optional</sup> <a name="datastoreIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreIdInput"></a>

```java
public java.lang.String getDatastoreIdInput();
```

- *Type:* java.lang.String

---

##### `diskModeInput`<sup>Optional</sup> <a name="diskModeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskModeInput"></a>

```java
public java.lang.String getDiskModeInput();
```

- *Type:* java.lang.String

---

##### `diskSharingInput`<sup>Optional</sup> <a name="diskSharingInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharingInput"></a>

```java
public java.lang.String getDiskSharingInput();
```

- *Type:* java.lang.String

---

##### `eagerlyScrubInput`<sup>Optional</sup> <a name="eagerlyScrubInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrubInput"></a>

```java
public java.lang.Object getEagerlyScrubInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ioLimitInput`<sup>Optional</sup> <a name="ioLimitInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimitInput"></a>

```java
public java.lang.Number getIoLimitInput();
```

- *Type:* java.lang.Number

---

##### `ioReservationInput`<sup>Optional</sup> <a name="ioReservationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservationInput"></a>

```java
public java.lang.Number getIoReservationInput();
```

- *Type:* java.lang.Number

---

##### `ioShareCountInput`<sup>Optional</sup> <a name="ioShareCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCountInput"></a>

```java
public java.lang.Number getIoShareCountInput();
```

- *Type:* java.lang.Number

---

##### `ioShareLevelInput`<sup>Optional</sup> <a name="ioShareLevelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevelInput"></a>

```java
public java.lang.String getIoShareLevelInput();
```

- *Type:* java.lang.String

---

##### `keepOnRemoveInput`<sup>Optional</sup> <a name="keepOnRemoveInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemoveInput"></a>

```java
public java.lang.Object getKeepOnRemoveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `storagePolicyIdInput`<sup>Optional</sup> <a name="storagePolicyIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyIdInput"></a>

```java
public java.lang.String getStoragePolicyIdInput();
```

- *Type:* java.lang.String

---

##### `thinProvisionedInput`<sup>Optional</sup> <a name="thinProvisionedInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisionedInput"></a>

```java
public java.lang.Object getThinProvisionedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unitNumberInput`<sup>Optional</sup> <a name="unitNumberInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumberInput"></a>

```java
public java.lang.Number getUnitNumberInput();
```

- *Type:* java.lang.Number

---

##### `writeThroughInput`<sup>Optional</sup> <a name="writeThroughInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThroughInput"></a>

```java
public java.lang.Object getWriteThroughInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `attach`<sup>Required</sup> <a name="attach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attach"></a>

```java
public java.lang.Object getAttach();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `controllerType`<sup>Required</sup> <a name="controllerType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerType"></a>

```java
public java.lang.String getControllerType();
```

- *Type:* java.lang.String

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreId"></a>

```java
public java.lang.String getDatastoreId();
```

- *Type:* java.lang.String

---

##### `diskMode`<sup>Required</sup> <a name="diskMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskMode"></a>

```java
public java.lang.String getDiskMode();
```

- *Type:* java.lang.String

---

##### `diskSharing`<sup>Required</sup> <a name="diskSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharing"></a>

```java
public java.lang.String getDiskSharing();
```

- *Type:* java.lang.String

---

##### `eagerlyScrub`<sup>Required</sup> <a name="eagerlyScrub" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrub"></a>

```java
public java.lang.Object getEagerlyScrub();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ioLimit`<sup>Required</sup> <a name="ioLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimit"></a>

```java
public java.lang.Number getIoLimit();
```

- *Type:* java.lang.Number

---

##### `ioReservation`<sup>Required</sup> <a name="ioReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservation"></a>

```java
public java.lang.Number getIoReservation();
```

- *Type:* java.lang.Number

---

##### `ioShareCount`<sup>Required</sup> <a name="ioShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCount"></a>

```java
public java.lang.Number getIoShareCount();
```

- *Type:* java.lang.Number

---

##### `ioShareLevel`<sup>Required</sup> <a name="ioShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevel"></a>

```java
public java.lang.String getIoShareLevel();
```

- *Type:* java.lang.String

---

##### `keepOnRemove`<sup>Required</sup> <a name="keepOnRemove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemove"></a>

```java
public java.lang.Object getKeepOnRemove();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `storagePolicyId`<sup>Required</sup> <a name="storagePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyId"></a>

```java
public java.lang.String getStoragePolicyId();
```

- *Type:* java.lang.String

---

##### `thinProvisioned`<sup>Required</sup> <a name="thinProvisioned" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisioned"></a>

```java
public java.lang.Object getThinProvisioned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unitNumber`<sup>Required</sup> <a name="unitNumber" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumber"></a>

```java
public java.lang.Number getUnitNumber();
```

- *Type:* java.lang.Number

---

##### `writeThrough`<sup>Required</sup> <a name="writeThrough" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThrough"></a>

```java
public java.lang.Object getWriteThrough();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>

---


### VirtualMachineNetworkInterfaceList <a name="VirtualMachineNetworkInterfaceList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineNetworkInterfaceList;

new VirtualMachineNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.get"></a>

```java
public VirtualMachineNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>>

---


### VirtualMachineNetworkInterfaceOutputReference <a name="VirtualMachineNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineNetworkInterfaceOutputReference;

new VirtualMachineNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetAdapterType">resetAdapterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthLimit">resetBandwidthLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthReservation">resetBandwidthReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareCount">resetBandwidthShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareLevel">resetBandwidthShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetMacAddress">resetMacAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetOvfMapping">resetOvfMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetPhysicalFunction">resetPhysicalFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetUseStaticMac">resetUseStaticMac</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdapterType` <a name="resetAdapterType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetAdapterType"></a>

```java
public void resetAdapterType()
```

##### `resetBandwidthLimit` <a name="resetBandwidthLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthLimit"></a>

```java
public void resetBandwidthLimit()
```

##### `resetBandwidthReservation` <a name="resetBandwidthReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthReservation"></a>

```java
public void resetBandwidthReservation()
```

##### `resetBandwidthShareCount` <a name="resetBandwidthShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareCount"></a>

```java
public void resetBandwidthShareCount()
```

##### `resetBandwidthShareLevel` <a name="resetBandwidthShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareLevel"></a>

```java
public void resetBandwidthShareLevel()
```

##### `resetMacAddress` <a name="resetMacAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetMacAddress"></a>

```java
public void resetMacAddress()
```

##### `resetOvfMapping` <a name="resetOvfMapping" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetOvfMapping"></a>

```java
public void resetOvfMapping()
```

##### `resetPhysicalFunction` <a name="resetPhysicalFunction" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetPhysicalFunction"></a>

```java
public void resetPhysicalFunction()
```

##### `resetUseStaticMac` <a name="resetUseStaticMac" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetUseStaticMac"></a>

```java
public void resetUseStaticMac()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.deviceAddress">deviceAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.key">key</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterTypeInput">adapterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimitInput">bandwidthLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservationInput">bandwidthReservationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCountInput">bandwidthShareCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevelInput">bandwidthShareLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddressInput">macAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkIdInput">networkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMappingInput">ovfMappingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunctionInput">physicalFunctionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMacInput">useStaticMacInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterType">adapterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimit">bandwidthLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservation">bandwidthReservation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCount">bandwidthShareCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevel">bandwidthShareLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkId">networkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMapping">ovfMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunction">physicalFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMac">useStaticMac</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceAddress`<sup>Required</sup> <a name="deviceAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.deviceAddress"></a>

```java
public java.lang.String getDeviceAddress();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.key"></a>

```java
public java.lang.Number getKey();
```

- *Type:* java.lang.Number

---

##### `adapterTypeInput`<sup>Optional</sup> <a name="adapterTypeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterTypeInput"></a>

```java
public java.lang.String getAdapterTypeInput();
```

- *Type:* java.lang.String

---

##### `bandwidthLimitInput`<sup>Optional</sup> <a name="bandwidthLimitInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimitInput"></a>

```java
public java.lang.Number getBandwidthLimitInput();
```

- *Type:* java.lang.Number

---

##### `bandwidthReservationInput`<sup>Optional</sup> <a name="bandwidthReservationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservationInput"></a>

```java
public java.lang.Number getBandwidthReservationInput();
```

- *Type:* java.lang.Number

---

##### `bandwidthShareCountInput`<sup>Optional</sup> <a name="bandwidthShareCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCountInput"></a>

```java
public java.lang.Number getBandwidthShareCountInput();
```

- *Type:* java.lang.Number

---

##### `bandwidthShareLevelInput`<sup>Optional</sup> <a name="bandwidthShareLevelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevelInput"></a>

```java
public java.lang.String getBandwidthShareLevelInput();
```

- *Type:* java.lang.String

---

##### `macAddressInput`<sup>Optional</sup> <a name="macAddressInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddressInput"></a>

```java
public java.lang.String getMacAddressInput();
```

- *Type:* java.lang.String

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkIdInput"></a>

```java
public java.lang.String getNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `ovfMappingInput`<sup>Optional</sup> <a name="ovfMappingInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMappingInput"></a>

```java
public java.lang.String getOvfMappingInput();
```

- *Type:* java.lang.String

---

##### `physicalFunctionInput`<sup>Optional</sup> <a name="physicalFunctionInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunctionInput"></a>

```java
public java.lang.String getPhysicalFunctionInput();
```

- *Type:* java.lang.String

---

##### `useStaticMacInput`<sup>Optional</sup> <a name="useStaticMacInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMacInput"></a>

```java
public java.lang.Object getUseStaticMacInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adapterType`<sup>Required</sup> <a name="adapterType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterType"></a>

```java
public java.lang.String getAdapterType();
```

- *Type:* java.lang.String

---

##### `bandwidthLimit`<sup>Required</sup> <a name="bandwidthLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimit"></a>

```java
public java.lang.Number getBandwidthLimit();
```

- *Type:* java.lang.Number

---

##### `bandwidthReservation`<sup>Required</sup> <a name="bandwidthReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservation"></a>

```java
public java.lang.Number getBandwidthReservation();
```

- *Type:* java.lang.Number

---

##### `bandwidthShareCount`<sup>Required</sup> <a name="bandwidthShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCount"></a>

```java
public java.lang.Number getBandwidthShareCount();
```

- *Type:* java.lang.Number

---

##### `bandwidthShareLevel`<sup>Required</sup> <a name="bandwidthShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevel"></a>

```java
public java.lang.String getBandwidthShareLevel();
```

- *Type:* java.lang.String

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

---

##### `ovfMapping`<sup>Required</sup> <a name="ovfMapping" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMapping"></a>

```java
public java.lang.String getOvfMapping();
```

- *Type:* java.lang.String

---

##### `physicalFunction`<sup>Required</sup> <a name="physicalFunction" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunction"></a>

```java
public java.lang.String getPhysicalFunction();
```

- *Type:* java.lang.String

---

##### `useStaticMac`<sup>Required</sup> <a name="useStaticMac" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMac"></a>

```java
public java.lang.Object getUseStaticMac();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>

---


### VirtualMachineOvfDeployOutputReference <a name="VirtualMachineOvfDeployOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineOvfDeployOutputReference;

new VirtualMachineOvfDeployOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetAllowUnverifiedSslCert">resetAllowUnverifiedSslCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDeploymentOption">resetDeploymentOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDiskProvisioning">resetDiskProvisioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetEnableHiddenProperties">resetEnableHiddenProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpAllocationPolicy">resetIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpProtocol">resetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetLocalOvfPath">resetLocalOvfPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetOvfNetworkMap">resetOvfNetworkMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetRemoteOvfUrl">resetRemoteOvfUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowUnverifiedSslCert` <a name="resetAllowUnverifiedSslCert" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetAllowUnverifiedSslCert"></a>

```java
public void resetAllowUnverifiedSslCert()
```

##### `resetDeploymentOption` <a name="resetDeploymentOption" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDeploymentOption"></a>

```java
public void resetDeploymentOption()
```

##### `resetDiskProvisioning` <a name="resetDiskProvisioning" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDiskProvisioning"></a>

```java
public void resetDiskProvisioning()
```

##### `resetEnableHiddenProperties` <a name="resetEnableHiddenProperties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetEnableHiddenProperties"></a>

```java
public void resetEnableHiddenProperties()
```

##### `resetIpAllocationPolicy` <a name="resetIpAllocationPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpAllocationPolicy"></a>

```java
public void resetIpAllocationPolicy()
```

##### `resetIpProtocol` <a name="resetIpProtocol" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpProtocol"></a>

```java
public void resetIpProtocol()
```

##### `resetLocalOvfPath` <a name="resetLocalOvfPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetLocalOvfPath"></a>

```java
public void resetLocalOvfPath()
```

##### `resetOvfNetworkMap` <a name="resetOvfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetOvfNetworkMap"></a>

```java
public void resetOvfNetworkMap()
```

##### `resetRemoteOvfUrl` <a name="resetRemoteOvfUrl" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetRemoteOvfUrl"></a>

```java
public void resetRemoteOvfUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCertInput">allowUnverifiedSslCertInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOptionInput">deploymentOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioningInput">diskProvisioningInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenPropertiesInput">enableHiddenPropertiesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicyInput">ipAllocationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPathInput">localOvfPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMapInput">ovfNetworkMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrlInput">remoteOvfUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCert">allowUnverifiedSslCert</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOption">deploymentOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioning">diskProvisioning</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenProperties">enableHiddenProperties</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicy">ipAllocationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPath">localOvfPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMap">ovfNetworkMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrl">remoteOvfUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowUnverifiedSslCertInput`<sup>Optional</sup> <a name="allowUnverifiedSslCertInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCertInput"></a>

```java
public java.lang.Object getAllowUnverifiedSslCertInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deploymentOptionInput`<sup>Optional</sup> <a name="deploymentOptionInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOptionInput"></a>

```java
public java.lang.String getDeploymentOptionInput();
```

- *Type:* java.lang.String

---

##### `diskProvisioningInput`<sup>Optional</sup> <a name="diskProvisioningInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioningInput"></a>

```java
public java.lang.String getDiskProvisioningInput();
```

- *Type:* java.lang.String

---

##### `enableHiddenPropertiesInput`<sup>Optional</sup> <a name="enableHiddenPropertiesInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenPropertiesInput"></a>

```java
public java.lang.Object getEnableHiddenPropertiesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipAllocationPolicyInput`<sup>Optional</sup> <a name="ipAllocationPolicyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicyInput"></a>

```java
public java.lang.String getIpAllocationPolicyInput();
```

- *Type:* java.lang.String

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocolInput"></a>

```java
public java.lang.String getIpProtocolInput();
```

- *Type:* java.lang.String

---

##### `localOvfPathInput`<sup>Optional</sup> <a name="localOvfPathInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPathInput"></a>

```java
public java.lang.String getLocalOvfPathInput();
```

- *Type:* java.lang.String

---

##### `ovfNetworkMapInput`<sup>Optional</sup> <a name="ovfNetworkMapInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOvfNetworkMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `remoteOvfUrlInput`<sup>Optional</sup> <a name="remoteOvfUrlInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrlInput"></a>

```java
public java.lang.String getRemoteOvfUrlInput();
```

- *Type:* java.lang.String

---

##### `allowUnverifiedSslCert`<sup>Required</sup> <a name="allowUnverifiedSslCert" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCert"></a>

```java
public java.lang.Object getAllowUnverifiedSslCert();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deploymentOption`<sup>Required</sup> <a name="deploymentOption" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOption"></a>

```java
public java.lang.String getDeploymentOption();
```

- *Type:* java.lang.String

---

##### `diskProvisioning`<sup>Required</sup> <a name="diskProvisioning" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioning"></a>

```java
public java.lang.String getDiskProvisioning();
```

- *Type:* java.lang.String

---

##### `enableHiddenProperties`<sup>Required</sup> <a name="enableHiddenProperties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenProperties"></a>

```java
public java.lang.Object getEnableHiddenProperties();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipAllocationPolicy`<sup>Required</sup> <a name="ipAllocationPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicy"></a>

```java
public java.lang.String getIpAllocationPolicy();
```

- *Type:* java.lang.String

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

---

##### `localOvfPath`<sup>Required</sup> <a name="localOvfPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPath"></a>

```java
public java.lang.String getLocalOvfPath();
```

- *Type:* java.lang.String

---

##### `ovfNetworkMap`<sup>Required</sup> <a name="ovfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOvfNetworkMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `remoteOvfUrl`<sup>Required</sup> <a name="remoteOvfUrl" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrl"></a>

```java
public java.lang.String getRemoteOvfUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.internalValue"></a>

```java
public VirtualMachineOvfDeploy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

---


### VirtualMachineVappOutputReference <a name="VirtualMachineVappOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.virtual_machine.VirtualMachineVappOutputReference;

new VirtualMachineVappOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.internalValue"></a>

```java
public VirtualMachineVapp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

---



