// https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The guest name for the operating system when guest_id is otherGuest or otherGuest64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#alternate_guest_name VirtualMachine#alternate_guest_name}
  */
  readonly alternateGuestName?: string;
  /**
  * User-provided description of the virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#annotation VirtualMachine#annotation}
  */
  readonly annotation?: string;
  /**
  * The number of milliseconds to wait before starting the boot sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#boot_delay VirtualMachine#boot_delay}
  */
  readonly bootDelay?: number;
  /**
  * The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#boot_retry_delay VirtualMachine#boot_retry_delay}
  */
  readonly bootRetryDelay?: number;
  /**
  * If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#boot_retry_enabled VirtualMachine#boot_retry_enabled}
  */
  readonly bootRetryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Allow CPUs to be added to this virtual machine while it is running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#cpu_hot_add_enabled VirtualMachine#cpu_hot_add_enabled}
  */
  readonly cpuHotAddEnabled?: boolean | cdktf.IResolvable;
  /**
  * Allow CPUs to be added to this virtual machine while it is running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#cpu_hot_remove_enabled VirtualMachine#cpu_hot_remove_enabled}
  */
  readonly cpuHotRemoveEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#cpu_limit VirtualMachine#cpu_limit}
  */
  readonly cpuLimit?: number;
  /**
  * Enable CPU performance counters on this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#cpu_performance_counters_enabled VirtualMachine#cpu_performance_counters_enabled}
  */
  readonly cpuPerformanceCountersEnabled?: boolean | cdktf.IResolvable;
  /**
  * The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#cpu_reservation VirtualMachine#cpu_reservation}
  */
  readonly cpuReservation?: number;
  /**
  * The amount of shares to allocate to cpu for a custom share level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#cpu_share_count VirtualMachine#cpu_share_count}
  */
  readonly cpuShareCount?: number;
  /**
  * The allocation level for cpu resources. Can be one of high, low, normal, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#cpu_share_level VirtualMachine#cpu_share_level}
  */
  readonly cpuShareLevel?: string;
  /**
  * A list of custom attributes to set on this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#custom_attributes VirtualMachine#custom_attributes}
  */
  readonly customAttributes?: { [key: string]: string };
  /**
  * The ID of the datacenter where the VM is to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#datacenter_id VirtualMachine#datacenter_id}
  */
  readonly datacenterId?: string;
  /**
  * The ID of a datastore cluster to put the virtual machine in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#datastore_cluster_id VirtualMachine#datastore_cluster_id}
  */
  readonly datastoreClusterId?: string;
  /**
  * The ID of the virtual machine's datastore. The virtual machine configuration is placed here, along with any virtual disks that are created without datastores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}
  */
  readonly datastoreId?: string;
  /**
  * When the boot type set in firmware is efi, this enables EFI secure boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#efi_secure_boot_enabled VirtualMachine#efi_secure_boot_enabled}
  */
  readonly efiSecureBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#enable_disk_uuid VirtualMachine#enable_disk_uuid}
  */
  readonly enableDiskUuid?: boolean | cdktf.IResolvable;
  /**
  * Enable logging on this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#enable_logging VirtualMachine#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#ept_rvi_mode VirtualMachine#ept_rvi_mode}
  */
  readonly eptRviMode?: string;
  /**
  * Extra configuration data for this virtual machine. Can be used to supply advanced parameters not normally in configuration, such as instance metadata, or configuration data for OVF images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#extra_config VirtualMachine#extra_config}
  */
  readonly extraConfig?: { [key: string]: string };
  /**
  * Allow the virtual machine to be rebooted when a change to `extra_config` occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#extra_config_reboot_required VirtualMachine#extra_config_reboot_required}
  */
  readonly extraConfigRebootRequired?: boolean | cdktf.IResolvable;
  /**
  * The firmware interface to use on the virtual machine. Can be one of bios or efi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#firmware VirtualMachine#firmware}
  */
  readonly firmware?: string;
  /**
  * The name of the folder to locate the virtual machine in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#folder VirtualMachine#folder}
  */
  readonly folder?: string;
  /**
  * Set to true to force power-off a virtual machine if a graceful guest shutdown failed for a necessary operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#force_power_off VirtualMachine#force_power_off}
  */
  readonly forcePowerOff?: boolean | cdktf.IResolvable;
  /**
  * The guest ID for the operating system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#guest_id VirtualMachine#guest_id}
  */
  readonly guestId?: string;
  /**
  * The hardware version for the virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#hardware_version VirtualMachine#hardware_version}
  */
  readonly hardwareVersion?: number;
  /**
  * The ID of an optional host system to pin the virtual machine to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#host_system_id VirtualMachine#host_system_id}
  */
  readonly hostSystemId?: string;
  /**
  * The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#hv_mode VirtualMachine#hv_mode}
  */
  readonly hvMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#id VirtualMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The number of IDE controllers that Terraform manages on this virtual machine. This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#ide_controller_count VirtualMachine#ide_controller_count}
  */
  readonly ideControllerCount?: number;
  /**
  * List of IP addresses and CIDR networks to ignore while waiting for an IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#ignored_guest_ips VirtualMachine#ignored_guest_ips}
  */
  readonly ignoredGuestIps?: string[];
  /**
  * Controls the scheduling delay of the virtual machine. Use a higher sensitivity for applications that require lower latency, such as VOIP, media player applications, or applications that require frequent access to mouse or keyboard devices. Can be one of low, normal, medium, or high.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#latency_sensitivity VirtualMachine#latency_sensitivity}
  */
  readonly latencySensitivity?: string;
  /**
  * The size of the virtual machine's memory, in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#memory VirtualMachine#memory}
  */
  readonly memory?: number;
  /**
  * Allow memory to be added to this virtual machine while it is running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#memory_hot_add_enabled VirtualMachine#memory_hot_add_enabled}
  */
  readonly memoryHotAddEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#memory_limit VirtualMachine#memory_limit}
  */
  readonly memoryLimit?: number;
  /**
  * The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#memory_reservation VirtualMachine#memory_reservation}
  */
  readonly memoryReservation?: number;
  /**
  * If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#memory_reservation_locked_to_max VirtualMachine#memory_reservation_locked_to_max}
  */
  readonly memoryReservationLockedToMax?: boolean | cdktf.IResolvable;
  /**
  * The amount of shares to allocate to memory for a custom share level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#memory_share_count VirtualMachine#memory_share_count}
  */
  readonly memoryShareCount?: number;
  /**
  * The allocation level for memory resources. Can be one of high, low, normal, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#memory_share_level VirtualMachine#memory_share_level}
  */
  readonly memoryShareLevel?: string;
  /**
  * The amount of time, in minutes, to wait for a vMotion operation to complete before failing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#migrate_wait_timeout VirtualMachine#migrate_wait_timeout}
  */
  readonly migrateWaitTimeout?: number;
  /**
  * The name of this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#name VirtualMachine#name}
  */
  readonly name: string;
  /**
  * Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#nested_hv_enabled VirtualMachine#nested_hv_enabled}
  */
  readonly nestedHvEnabled?: boolean | cdktf.IResolvable;
  /**
  * The number of cores to distribute amongst the CPUs in this virtual machine. If specified, the value supplied to num_cpus must be evenly divisible by this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#num_cores_per_socket VirtualMachine#num_cores_per_socket}
  */
  readonly numCoresPerSocket?: number;
  /**
  * The number of virtual processors to assign to this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#num_cpus VirtualMachine#num_cpus}
  */
  readonly numCpus?: number;
  /**
  * A list of PCI passthrough devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#pci_device_id VirtualMachine#pci_device_id}
  */
  readonly pciDeviceId?: string[];
  /**
  * The amount of time, in seconds, that we will be trying to power on a VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#poweron_timeout VirtualMachine#poweron_timeout}
  */
  readonly poweronTimeout?: number;
  /**
  * Triggers replacement of resource whenever it changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#replace_trigger VirtualMachine#replace_trigger}
  */
  readonly replaceTrigger?: string;
  /**
  * The ID of a resource pool to put the virtual machine in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#resource_pool_id VirtualMachine#resource_pool_id}
  */
  readonly resourcePoolId: string;
  /**
  * Enable the run of scripts after virtual machine power-on when VMware Tools is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#run_tools_scripts_after_power_on VirtualMachine#run_tools_scripts_after_power_on}
  */
  readonly runToolsScriptsAfterPowerOn?: boolean | cdktf.IResolvable;
  /**
  * Enable the run of scripts after virtual machine resume when when VMware Tools is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#run_tools_scripts_after_resume VirtualMachine#run_tools_scripts_after_resume}
  */
  readonly runToolsScriptsAfterResume?: boolean | cdktf.IResolvable;
  /**
  * Enable the run of scripts before guest operating system reboot when VMware Tools is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#run_tools_scripts_before_guest_reboot VirtualMachine#run_tools_scripts_before_guest_reboot}
  */
  readonly runToolsScriptsBeforeGuestReboot?: boolean | cdktf.IResolvable;
  /**
  * Enable the run of scripts before guest operating system shutdown when VMware Tools is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#run_tools_scripts_before_guest_shutdown VirtualMachine#run_tools_scripts_before_guest_shutdown}
  */
  readonly runToolsScriptsBeforeGuestShutdown?: boolean | cdktf.IResolvable;
  /**
  * Enable the run of scripts before guest operating system standby when VMware Tools is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#run_tools_scripts_before_guest_standby VirtualMachine#run_tools_scripts_before_guest_standby}
  */
  readonly runToolsScriptsBeforeGuestStandby?: boolean | cdktf.IResolvable;
  /**
  * The number of SATA controllers that Terraform manages on this virtual machine. This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#sata_controller_count VirtualMachine#sata_controller_count}
  */
  readonly sataControllerCount?: number;
  /**
  * Mode for sharing the SCSI bus. The modes are physicalSharing, virtualSharing, and noSharing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#scsi_bus_sharing VirtualMachine#scsi_bus_sharing}
  */
  readonly scsiBusSharing?: string;
  /**
  * The number of SCSI controllers that Terraform manages on this virtual machine. This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#scsi_controller_count VirtualMachine#scsi_controller_count}
  */
  readonly scsiControllerCount?: number;
  /**
  * The type of SCSI bus this virtual machine will have. Can be one of lsilogic, lsilogic-sas or pvscsi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#scsi_type VirtualMachine#scsi_type}
  */
  readonly scsiType?: string;
  /**
  * The amount of time, in minutes, to wait for shutdown when making necessary updates to the virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#shutdown_wait_timeout VirtualMachine#shutdown_wait_timeout}
  */
  readonly shutdownWaitTimeout?: number;
  /**
  * The ID of the storage policy to assign to the virtual machine home directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#storage_policy_id VirtualMachine#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#swap_placement_policy VirtualMachine#swap_placement_policy}
  */
  readonly swapPlacementPolicy?: string;
  /**
  * Enable guest clock synchronization with the host. On vSphere 7.0 U1 and above, with only this setting the clock is synchronized on startup and resume. Requires VMware Tools to be installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#sync_time_with_host VirtualMachine#sync_time_with_host}
  */
  readonly syncTimeWithHost?: boolean | cdktf.IResolvable;
  /**
  * Enable periodic clock synchronization with the host. Supported only on vSphere 7.0 U1 and above. On prior versions setting `sync_time_with_host` is enough for periodic synchronization. Requires VMware Tools to be installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#sync_time_with_host_periodically VirtualMachine#sync_time_with_host_periodically}
  */
  readonly syncTimeWithHostPeriodically?: boolean | cdktf.IResolvable;
  /**
  * A list of tag IDs to apply to this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#tags VirtualMachine#tags}
  */
  readonly tags?: string[];
  /**
  * Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#tools_upgrade_policy VirtualMachine#tools_upgrade_policy}
  */
  readonly toolsUpgradePolicy?: string;
  /**
  * Flag to specify if Virtualization-based security is enabled for this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#vbs_enabled VirtualMachine#vbs_enabled}
  */
  readonly vbsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#vvtd_enabled VirtualMachine#vvtd_enabled}
  */
  readonly vvtdEnabled?: boolean | cdktf.IResolvable;
  /**
  * The amount of time, in minutes, to wait for an available IP address on this virtual machine. A value less than 1 disables the waiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#wait_for_guest_ip_timeout VirtualMachine#wait_for_guest_ip_timeout}
  */
  readonly waitForGuestIpTimeout?: number;
  /**
  * Controls whether or not the guest network waiter waits for a routable address. When false, the waiter does not wait for a default gateway, nor are IP addresses checked against any discovered default gateways as part of its success criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#wait_for_guest_net_routable VirtualMachine#wait_for_guest_net_routable}
  */
  readonly waitForGuestNetRoutable?: boolean | cdktf.IResolvable;
  /**
  * The amount of time, in minutes, to wait for an available IP address on this virtual machine. A value less than 1 disables the waiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#wait_for_guest_net_timeout VirtualMachine#wait_for_guest_net_timeout}
  */
  readonly waitForGuestNetTimeout?: number;
  /**
  * cdrom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#cdrom VirtualMachine#cdrom}
  */
  readonly cdrom?: VirtualMachineCdrom[] | cdktf.IResolvable;
  /**
  * clone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#clone VirtualMachine#clone}
  */
  readonly clone?: VirtualMachineClone;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#disk VirtualMachine#disk}
  */
  readonly disk?: VirtualMachineDisk[] | cdktf.IResolvable;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#network_interface VirtualMachine#network_interface}
  */
  readonly networkInterface?: VirtualMachineNetworkInterface[] | cdktf.IResolvable;
  /**
  * ovf_deploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#ovf_deploy VirtualMachine#ovf_deploy}
  */
  readonly ovfDeploy?: VirtualMachineOvfDeploy;
  /**
  * vapp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#vapp VirtualMachine#vapp}
  */
  readonly vapp?: VirtualMachineVapp;
}
export interface VirtualMachineCdrom {
  /**
  * Indicates whether the device should be mapped to a remote client device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#client_device VirtualMachine#client_device}
  */
  readonly clientDevice?: boolean | cdktf.IResolvable;
  /**
  * The datastore ID the ISO is located on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}
  */
  readonly datastoreId?: string;
  /**
  * The path to the ISO file on the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#path VirtualMachine#path}
  */
  readonly path?: string;
}

export function virtualMachineCdromToTerraform(struct?: VirtualMachineCdrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_device: cdktf.booleanToTerraform(struct!.clientDevice),
    datastore_id: cdktf.stringToTerraform(struct!.datastoreId),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function virtualMachineCdromToHclTerraform(struct?: VirtualMachineCdrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_device: {
      value: cdktf.booleanToHclTerraform(struct!.clientDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    datastore_id: {
      value: cdktf.stringToHclTerraform(struct!.datastoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineCdromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualMachineCdrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientDevice = this._clientDevice;
    }
    if (this._datastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreId = this._datastoreId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineCdrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientDevice = undefined;
      this._datastoreId = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientDevice = value.clientDevice;
      this._datastoreId = value.datastoreId;
      this._path = value.path;
    }
  }

  // client_device - computed: false, optional: true, required: false
  private _clientDevice?: boolean | cdktf.IResolvable; 
  public get clientDevice() {
    return this.getBooleanAttribute('client_device');
  }
  public set clientDevice(value: boolean | cdktf.IResolvable) {
    this._clientDevice = value;
  }
  public resetClientDevice() {
    this._clientDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDeviceInput() {
    return this._clientDevice;
  }

  // datastore_id - computed: false, optional: true, required: false
  private _datastoreId?: string; 
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }
  public set datastoreId(value: string) {
    this._datastoreId = value;
  }
  public resetDatastoreId() {
    this._datastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreIdInput() {
    return this._datastoreId;
  }

  // device_address - computed: true, optional: false, required: false
  public get deviceAddress() {
    return this.getStringAttribute('device_address');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class VirtualMachineCdromList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineCdrom[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualMachineCdromOutputReference {
    return new VirtualMachineCdromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineCloneCustomizationSpec {
  /**
  * The unique identifier of the customization specification is its name and is unique per vCenter Server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#id VirtualMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error. Setting this value to 0 or a negative value skips the waiter. Default: 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#timeout VirtualMachine#timeout}
  */
  readonly timeout?: number;
}

export function virtualMachineCloneCustomizationSpecToTerraform(struct?: VirtualMachineCloneCustomizationSpecOutputReference | VirtualMachineCloneCustomizationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function virtualMachineCloneCustomizationSpecToHclTerraform(struct?: VirtualMachineCloneCustomizationSpecOutputReference | VirtualMachineCloneCustomizationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineCloneCustomizationSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineCloneCustomizationSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineCloneCustomizationSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._timeout = value.timeout;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface VirtualMachineCloneCustomizeLinuxOptions {
  /**
  * The domain name for this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#domain VirtualMachine#domain}
  */
  readonly domain: string;
  /**
  * The hostname for this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#host_name VirtualMachine#host_name}
  */
  readonly hostName: string;
  /**
  * Specifies whether or not the hardware clock should be in UTC or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#hw_clock_utc VirtualMachine#hw_clock_utc}
  */
  readonly hwClockUtc?: boolean | cdktf.IResolvable;
  /**
  * The customization script to run before and or after guest customization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#script_text VirtualMachine#script_text}
  */
  readonly scriptText?: string;
  /**
  * Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#time_zone VirtualMachine#time_zone}
  */
  readonly timeZone?: string;
}

export function virtualMachineCloneCustomizeLinuxOptionsToTerraform(struct?: VirtualMachineCloneCustomizeLinuxOptionsOutputReference | VirtualMachineCloneCustomizeLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    hw_clock_utc: cdktf.booleanToTerraform(struct!.hwClockUtc),
    script_text: cdktf.stringToTerraform(struct!.scriptText),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function virtualMachineCloneCustomizeLinuxOptionsToHclTerraform(struct?: VirtualMachineCloneCustomizeLinuxOptionsOutputReference | VirtualMachineCloneCustomizeLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hw_clock_utc: {
      value: cdktf.booleanToHclTerraform(struct!.hwClockUtc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    script_text: {
      value: cdktf.stringToHclTerraform(struct!.scriptText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineCloneCustomizeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineCloneCustomizeLinuxOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._hwClockUtc !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwClockUtc = this._hwClockUtc;
    }
    if (this._scriptText !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptText = this._scriptText;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineCloneCustomizeLinuxOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._hostName = undefined;
      this._hwClockUtc = undefined;
      this._scriptText = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._hostName = value.hostName;
      this._hwClockUtc = value.hwClockUtc;
      this._scriptText = value.scriptText;
      this._timeZone = value.timeZone;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // hw_clock_utc - computed: false, optional: true, required: false
  private _hwClockUtc?: boolean | cdktf.IResolvable; 
  public get hwClockUtc() {
    return this.getBooleanAttribute('hw_clock_utc');
  }
  public set hwClockUtc(value: boolean | cdktf.IResolvable) {
    this._hwClockUtc = value;
  }
  public resetHwClockUtc() {
    this._hwClockUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwClockUtcInput() {
    return this._hwClockUtc;
  }

  // script_text - computed: false, optional: true, required: false
  private _scriptText?: string; 
  public get scriptText() {
    return this.getStringAttribute('script_text');
  }
  public set scriptText(value: string) {
    this._scriptText = value;
  }
  public resetScriptText() {
    this._scriptText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptTextInput() {
    return this._scriptText;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface VirtualMachineCloneCustomizeNetworkInterface {
  /**
  * A DNS search domain to add to the DNS configuration on the virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#dns_domain VirtualMachine#dns_domain}
  */
  readonly dnsDomain?: string;
  /**
  * Network-interface specific DNS settings for Windows operating systems. Ignored on Linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#dns_server_list VirtualMachine#dns_server_list}
  */
  readonly dnsServerList?: string[];
  /**
  * The IPv4 address assigned to this network adapter. If left blank, DHCP is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#ipv4_address VirtualMachine#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#ipv4_netmask VirtualMachine#ipv4_netmask}
  */
  readonly ipv4Netmask?: number;
  /**
  * The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#ipv6_address VirtualMachine#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#ipv6_netmask VirtualMachine#ipv6_netmask}
  */
  readonly ipv6Netmask?: number;
}

export function virtualMachineCloneCustomizeNetworkInterfaceToTerraform(struct?: VirtualMachineCloneCustomizeNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_domain: cdktf.stringToTerraform(struct!.dnsDomain),
    dns_server_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServerList),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.numberToTerraform(struct!.ipv4Netmask),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_netmask: cdktf.numberToTerraform(struct!.ipv6Netmask),
  }
}


export function virtualMachineCloneCustomizeNetworkInterfaceToHclTerraform(struct?: VirtualMachineCloneCustomizeNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_domain: {
      value: cdktf.stringToHclTerraform(struct!.dnsDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServerList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_netmask: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_netmask: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineCloneCustomizeNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualMachineCloneCustomizeNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomain = this._dnsDomain;
    }
    if (this._dnsServerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerList = this._dnsServerList;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Netmask = this._ipv4Netmask;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Netmask = this._ipv6Netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineCloneCustomizeNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsDomain = undefined;
      this._dnsServerList = undefined;
      this._ipv4Address = undefined;
      this._ipv4Netmask = undefined;
      this._ipv6Address = undefined;
      this._ipv6Netmask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsDomain = value.dnsDomain;
      this._dnsServerList = value.dnsServerList;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Netmask = value.ipv4Netmask;
      this._ipv6Address = value.ipv6Address;
      this._ipv6Netmask = value.ipv6Netmask;
    }
  }

  // dns_domain - computed: false, optional: true, required: false
  private _dnsDomain?: string; 
  public get dnsDomain() {
    return this.getStringAttribute('dns_domain');
  }
  public set dnsDomain(value: string) {
    this._dnsDomain = value;
  }
  public resetDnsDomain() {
    this._dnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainInput() {
    return this._dnsDomain;
  }

  // dns_server_list - computed: false, optional: true, required: false
  private _dnsServerList?: string[]; 
  public get dnsServerList() {
    return this.getListAttribute('dns_server_list');
  }
  public set dnsServerList(value: string[]) {
    this._dnsServerList = value;
  }
  public resetDnsServerList() {
    this._dnsServerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerListInput() {
    return this._dnsServerList;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_netmask - computed: false, optional: true, required: false
  private _ipv4Netmask?: number; 
  public get ipv4Netmask() {
    return this.getNumberAttribute('ipv4_netmask');
  }
  public set ipv4Netmask(value: number) {
    this._ipv4Netmask = value;
  }
  public resetIpv4Netmask() {
    this._ipv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskInput() {
    return this._ipv4Netmask;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_netmask - computed: false, optional: true, required: false
  private _ipv6Netmask?: number; 
  public get ipv6Netmask() {
    return this.getNumberAttribute('ipv6_netmask');
  }
  public set ipv6Netmask(value: number) {
    this._ipv6Netmask = value;
  }
  public resetIpv6Netmask() {
    this._ipv6Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NetmaskInput() {
    return this._ipv6Netmask;
  }
}

export class VirtualMachineCloneCustomizeNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineCloneCustomizeNetworkInterface[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualMachineCloneCustomizeNetworkInterfaceOutputReference {
    return new VirtualMachineCloneCustomizeNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineCloneCustomizeWindowsOptions {
  /**
  * The new administrator password for this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#admin_password VirtualMachine#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Specifies whether or not the VM automatically logs on as Administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#auto_logon VirtualMachine#auto_logon}
  */
  readonly autoLogon?: boolean | cdktf.IResolvable;
  /**
  * Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#auto_logon_count VirtualMachine#auto_logon_count}
  */
  readonly autoLogonCount?: number;
  /**
  * The host name for this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#computer_name VirtualMachine#computer_name}
  */
  readonly computerName: string;
  /**
  * The password of the domain administrator used to join this virtual machine to the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#domain_admin_password VirtualMachine#domain_admin_password}
  */
  readonly domainAdminPassword?: string;
  /**
  * The user account of the domain administrator used to join this virtual machine to the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#domain_admin_user VirtualMachine#domain_admin_user}
  */
  readonly domainAdminUser?: string;
  /**
  * The MachineObjectOU which specifies the full LDAP path name of the OU to which the virtual machine belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#domain_ou VirtualMachine#domain_ou}
  */
  readonly domainOu?: string;
  /**
  * The full name of the user of this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#full_name VirtualMachine#full_name}
  */
  readonly fullName?: string;
  /**
  * The domain that the virtual machine should join.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#join_domain VirtualMachine#join_domain}
  */
  readonly joinDomain?: string;
  /**
  * The organization name this virtual machine is being installed for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#organization_name VirtualMachine#organization_name}
  */
  readonly organizationName?: string;
  /**
  * The product key for this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#product_key VirtualMachine#product_key}
  */
  readonly productKey?: string;
  /**
  * A list of commands to run at first user logon, after guest customization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#run_once_command_list VirtualMachine#run_once_command_list}
  */
  readonly runOnceCommandList?: string[];
  /**
  * The new time zone for the virtual machine. This is a sysprep-dictated timezone code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#time_zone VirtualMachine#time_zone}
  */
  readonly timeZone?: number;
  /**
  * The workgroup for this virtual machine if not joining a domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#workgroup VirtualMachine#workgroup}
  */
  readonly workgroup?: string;
}

export function virtualMachineCloneCustomizeWindowsOptionsToTerraform(struct?: VirtualMachineCloneCustomizeWindowsOptionsOutputReference | VirtualMachineCloneCustomizeWindowsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    auto_logon: cdktf.booleanToTerraform(struct!.autoLogon),
    auto_logon_count: cdktf.numberToTerraform(struct!.autoLogonCount),
    computer_name: cdktf.stringToTerraform(struct!.computerName),
    domain_admin_password: cdktf.stringToTerraform(struct!.domainAdminPassword),
    domain_admin_user: cdktf.stringToTerraform(struct!.domainAdminUser),
    domain_ou: cdktf.stringToTerraform(struct!.domainOu),
    full_name: cdktf.stringToTerraform(struct!.fullName),
    join_domain: cdktf.stringToTerraform(struct!.joinDomain),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
    product_key: cdktf.stringToTerraform(struct!.productKey),
    run_once_command_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.runOnceCommandList),
    time_zone: cdktf.numberToTerraform(struct!.timeZone),
    workgroup: cdktf.stringToTerraform(struct!.workgroup),
  }
}


export function virtualMachineCloneCustomizeWindowsOptionsToHclTerraform(struct?: VirtualMachineCloneCustomizeWindowsOptionsOutputReference | VirtualMachineCloneCustomizeWindowsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_logon: {
      value: cdktf.booleanToHclTerraform(struct!.autoLogon),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_logon_count: {
      value: cdktf.numberToHclTerraform(struct!.autoLogonCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    computer_name: {
      value: cdktf.stringToHclTerraform(struct!.computerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_admin_password: {
      value: cdktf.stringToHclTerraform(struct!.domainAdminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_admin_user: {
      value: cdktf.stringToHclTerraform(struct!.domainAdminUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_ou: {
      value: cdktf.stringToHclTerraform(struct!.domainOu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_name: {
      value: cdktf.stringToHclTerraform(struct!.fullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    join_domain: {
      value: cdktf.stringToHclTerraform(struct!.joinDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_name: {
      value: cdktf.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_key: {
      value: cdktf.stringToHclTerraform(struct!.productKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_once_command_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.runOnceCommandList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    time_zone: {
      value: cdktf.numberToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    workgroup: {
      value: cdktf.stringToHclTerraform(struct!.workgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineCloneCustomizeWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineCloneCustomizeWindowsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._autoLogon !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoLogon = this._autoLogon;
    }
    if (this._autoLogonCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoLogonCount = this._autoLogonCount;
    }
    if (this._computerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.computerName = this._computerName;
    }
    if (this._domainAdminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainAdminPassword = this._domainAdminPassword;
    }
    if (this._domainAdminUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainAdminUser = this._domainAdminUser;
    }
    if (this._domainOu !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainOu = this._domainOu;
    }
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    if (this._joinDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinDomain = this._joinDomain;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._productKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.productKey = this._productKey;
    }
    if (this._runOnceCommandList !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOnceCommandList = this._runOnceCommandList;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._workgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.workgroup = this._workgroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineCloneCustomizeWindowsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._autoLogon = undefined;
      this._autoLogonCount = undefined;
      this._computerName = undefined;
      this._domainAdminPassword = undefined;
      this._domainAdminUser = undefined;
      this._domainOu = undefined;
      this._fullName = undefined;
      this._joinDomain = undefined;
      this._organizationName = undefined;
      this._productKey = undefined;
      this._runOnceCommandList = undefined;
      this._timeZone = undefined;
      this._workgroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._autoLogon = value.autoLogon;
      this._autoLogonCount = value.autoLogonCount;
      this._computerName = value.computerName;
      this._domainAdminPassword = value.domainAdminPassword;
      this._domainAdminUser = value.domainAdminUser;
      this._domainOu = value.domainOu;
      this._fullName = value.fullName;
      this._joinDomain = value.joinDomain;
      this._organizationName = value.organizationName;
      this._productKey = value.productKey;
      this._runOnceCommandList = value.runOnceCommandList;
      this._timeZone = value.timeZone;
      this._workgroup = value.workgroup;
    }
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // auto_logon - computed: false, optional: true, required: false
  private _autoLogon?: boolean | cdktf.IResolvable; 
  public get autoLogon() {
    return this.getBooleanAttribute('auto_logon');
  }
  public set autoLogon(value: boolean | cdktf.IResolvable) {
    this._autoLogon = value;
  }
  public resetAutoLogon() {
    this._autoLogon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLogonInput() {
    return this._autoLogon;
  }

  // auto_logon_count - computed: false, optional: true, required: false
  private _autoLogonCount?: number; 
  public get autoLogonCount() {
    return this.getNumberAttribute('auto_logon_count');
  }
  public set autoLogonCount(value: number) {
    this._autoLogonCount = value;
  }
  public resetAutoLogonCount() {
    this._autoLogonCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLogonCountInput() {
    return this._autoLogonCount;
  }

  // computer_name - computed: false, optional: false, required: true
  private _computerName?: string; 
  public get computerName() {
    return this.getStringAttribute('computer_name');
  }
  public set computerName(value: string) {
    this._computerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNameInput() {
    return this._computerName;
  }

  // domain_admin_password - computed: false, optional: true, required: false
  private _domainAdminPassword?: string; 
  public get domainAdminPassword() {
    return this.getStringAttribute('domain_admin_password');
  }
  public set domainAdminPassword(value: string) {
    this._domainAdminPassword = value;
  }
  public resetDomainAdminPassword() {
    this._domainAdminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAdminPasswordInput() {
    return this._domainAdminPassword;
  }

  // domain_admin_user - computed: false, optional: true, required: false
  private _domainAdminUser?: string; 
  public get domainAdminUser() {
    return this.getStringAttribute('domain_admin_user');
  }
  public set domainAdminUser(value: string) {
    this._domainAdminUser = value;
  }
  public resetDomainAdminUser() {
    this._domainAdminUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAdminUserInput() {
    return this._domainAdminUser;
  }

  // domain_ou - computed: false, optional: true, required: false
  private _domainOu?: string; 
  public get domainOu() {
    return this.getStringAttribute('domain_ou');
  }
  public set domainOu(value: string) {
    this._domainOu = value;
  }
  public resetDomainOu() {
    this._domainOu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainOuInput() {
    return this._domainOu;
  }

  // full_name - computed: false, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // join_domain - computed: false, optional: true, required: false
  private _joinDomain?: string; 
  public get joinDomain() {
    return this.getStringAttribute('join_domain');
  }
  public set joinDomain(value: string) {
    this._joinDomain = value;
  }
  public resetJoinDomain() {
    this._joinDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinDomainInput() {
    return this._joinDomain;
  }

  // organization_name - computed: false, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // product_key - computed: false, optional: true, required: false
  private _productKey?: string; 
  public get productKey() {
    return this.getStringAttribute('product_key');
  }
  public set productKey(value: string) {
    this._productKey = value;
  }
  public resetProductKey() {
    this._productKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productKeyInput() {
    return this._productKey;
  }

  // run_once_command_list - computed: false, optional: true, required: false
  private _runOnceCommandList?: string[]; 
  public get runOnceCommandList() {
    return this.getListAttribute('run_once_command_list');
  }
  public set runOnceCommandList(value: string[]) {
    this._runOnceCommandList = value;
  }
  public resetRunOnceCommandList() {
    this._runOnceCommandList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnceCommandListInput() {
    return this._runOnceCommandList;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: number; 
  public get timeZone() {
    return this.getNumberAttribute('time_zone');
  }
  public set timeZone(value: number) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // workgroup - computed: false, optional: true, required: false
  private _workgroup?: string; 
  public get workgroup() {
    return this.getStringAttribute('workgroup');
  }
  public set workgroup(value: string) {
    this._workgroup = value;
  }
  public resetWorkgroup() {
    this._workgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workgroupInput() {
    return this._workgroup;
  }
}
export interface VirtualMachineCloneCustomize {
  /**
  * The list of DNS servers for a virtual network adapter with a static IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#dns_server_list VirtualMachine#dns_server_list}
  */
  readonly dnsServerList?: string[];
  /**
  * A list of DNS search domains to add to the DNS configuration on the virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#dns_suffix_list VirtualMachine#dns_suffix_list}
  */
  readonly dnsSuffixList?: string[];
  /**
  * The IPv4 default gateway when using network_interface customization on the virtual machine. This address must be local to a static IPv4 address configured in an interface sub-resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#ipv4_gateway VirtualMachine#ipv4_gateway}
  */
  readonly ipv4Gateway?: string;
  /**
  * The IPv6 default gateway when using network_interface customization on the virtual machine. This address must be local to a static IPv4 address configured in an interface sub-resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#ipv6_gateway VirtualMachine#ipv6_gateway}
  */
  readonly ipv6Gateway?: string;
  /**
  * The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error. Setting this value to 0 or a negative value skips the waiter. Default: 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#timeout VirtualMachine#timeout}
  */
  readonly timeout?: number;
  /**
  * Use this option to specify a windows sysprep file directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#windows_sysprep_text VirtualMachine#windows_sysprep_text}
  */
  readonly windowsSysprepText?: string;
  /**
  * linux_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#linux_options VirtualMachine#linux_options}
  */
  readonly linuxOptions?: VirtualMachineCloneCustomizeLinuxOptions;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#network_interface VirtualMachine#network_interface}
  */
  readonly networkInterface?: VirtualMachineCloneCustomizeNetworkInterface[] | cdktf.IResolvable;
  /**
  * windows_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#windows_options VirtualMachine#windows_options}
  */
  readonly windowsOptions?: VirtualMachineCloneCustomizeWindowsOptions;
}

export function virtualMachineCloneCustomizeToTerraform(struct?: VirtualMachineCloneCustomizeOutputReference | VirtualMachineCloneCustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_server_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServerList),
    dns_suffix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsSuffixList),
    ipv4_gateway: cdktf.stringToTerraform(struct!.ipv4Gateway),
    ipv6_gateway: cdktf.stringToTerraform(struct!.ipv6Gateway),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    windows_sysprep_text: cdktf.stringToTerraform(struct!.windowsSysprepText),
    linux_options: virtualMachineCloneCustomizeLinuxOptionsToTerraform(struct!.linuxOptions),
    network_interface: cdktf.listMapper(virtualMachineCloneCustomizeNetworkInterfaceToTerraform, true)(struct!.networkInterface),
    windows_options: virtualMachineCloneCustomizeWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function virtualMachineCloneCustomizeToHclTerraform(struct?: VirtualMachineCloneCustomizeOutputReference | VirtualMachineCloneCustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_server_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServerList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_suffix_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsSuffixList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv4_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    windows_sysprep_text: {
      value: cdktf.stringToHclTerraform(struct!.windowsSysprepText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linux_options: {
      value: virtualMachineCloneCustomizeLinuxOptionsToHclTerraform(struct!.linuxOptions),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineCloneCustomizeLinuxOptionsList",
    },
    network_interface: {
      value: cdktf.listMapperHcl(virtualMachineCloneCustomizeNetworkInterfaceToHclTerraform, true)(struct!.networkInterface),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineCloneCustomizeNetworkInterfaceList",
    },
    windows_options: {
      value: virtualMachineCloneCustomizeWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineCloneCustomizeWindowsOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineCloneCustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineCloneCustomize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerList = this._dnsServerList;
    }
    if (this._dnsSuffixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSuffixList = this._dnsSuffixList;
    }
    if (this._ipv4Gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Gateway = this._ipv4Gateway;
    }
    if (this._ipv6Gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Gateway = this._ipv6Gateway;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._windowsSysprepText !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsSysprepText = this._windowsSysprepText;
    }
    if (this._linuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxOptions = this._linuxOptions?.internalValue;
    }
    if (this._networkInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterface = this._networkInterface?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineCloneCustomize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsServerList = undefined;
      this._dnsSuffixList = undefined;
      this._ipv4Gateway = undefined;
      this._ipv6Gateway = undefined;
      this._timeout = undefined;
      this._windowsSysprepText = undefined;
      this._linuxOptions.internalValue = undefined;
      this._networkInterface.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsServerList = value.dnsServerList;
      this._dnsSuffixList = value.dnsSuffixList;
      this._ipv4Gateway = value.ipv4Gateway;
      this._ipv6Gateway = value.ipv6Gateway;
      this._timeout = value.timeout;
      this._windowsSysprepText = value.windowsSysprepText;
      this._linuxOptions.internalValue = value.linuxOptions;
      this._networkInterface.internalValue = value.networkInterface;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // dns_server_list - computed: false, optional: true, required: false
  private _dnsServerList?: string[]; 
  public get dnsServerList() {
    return this.getListAttribute('dns_server_list');
  }
  public set dnsServerList(value: string[]) {
    this._dnsServerList = value;
  }
  public resetDnsServerList() {
    this._dnsServerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerListInput() {
    return this._dnsServerList;
  }

  // dns_suffix_list - computed: false, optional: true, required: false
  private _dnsSuffixList?: string[]; 
  public get dnsSuffixList() {
    return this.getListAttribute('dns_suffix_list');
  }
  public set dnsSuffixList(value: string[]) {
    this._dnsSuffixList = value;
  }
  public resetDnsSuffixList() {
    this._dnsSuffixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixListInput() {
    return this._dnsSuffixList;
  }

  // ipv4_gateway - computed: false, optional: true, required: false
  private _ipv4Gateway?: string; 
  public get ipv4Gateway() {
    return this.getStringAttribute('ipv4_gateway');
  }
  public set ipv4Gateway(value: string) {
    this._ipv4Gateway = value;
  }
  public resetIpv4Gateway() {
    this._ipv4Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4GatewayInput() {
    return this._ipv4Gateway;
  }

  // ipv6_gateway - computed: false, optional: true, required: false
  private _ipv6Gateway?: string; 
  public get ipv6Gateway() {
    return this.getStringAttribute('ipv6_gateway');
  }
  public set ipv6Gateway(value: string) {
    this._ipv6Gateway = value;
  }
  public resetIpv6Gateway() {
    this._ipv6Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GatewayInput() {
    return this._ipv6Gateway;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // windows_sysprep_text - computed: false, optional: true, required: false
  private _windowsSysprepText?: string; 
  public get windowsSysprepText() {
    return this.getStringAttribute('windows_sysprep_text');
  }
  public set windowsSysprepText(value: string) {
    this._windowsSysprepText = value;
  }
  public resetWindowsSysprepText() {
    this._windowsSysprepText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsSysprepTextInput() {
    return this._windowsSysprepText;
  }

  // linux_options - computed: false, optional: true, required: false
  private _linuxOptions = new VirtualMachineCloneCustomizeLinuxOptionsOutputReference(this, "linux_options");
  public get linuxOptions() {
    return this._linuxOptions;
  }
  public putLinuxOptions(value: VirtualMachineCloneCustomizeLinuxOptions) {
    this._linuxOptions.internalValue = value;
  }
  public resetLinuxOptions() {
    this._linuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxOptionsInput() {
    return this._linuxOptions.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new VirtualMachineCloneCustomizeNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: VirtualMachineCloneCustomizeNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new VirtualMachineCloneCustomizeWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: VirtualMachineCloneCustomizeWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface VirtualMachineClone {
  /**
  * Whether or not to create a linked clone when cloning. When this option is used, the source VM must have a single snapshot associated with it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#linked_clone VirtualMachine#linked_clone}
  */
  readonly linkedClone?: boolean | cdktf.IResolvable;
  /**
  * Mapping of ovf networks to the networks to use in vSphere.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#ovf_network_map VirtualMachine#ovf_network_map}
  */
  readonly ovfNetworkMap?: { [key: string]: string };
  /**
  * Mapping of ovf storage to the datastores to use in vSphere.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#ovf_storage_map VirtualMachine#ovf_storage_map}
  */
  readonly ovfStorageMap?: { [key: string]: string };
  /**
  * The UUID of the source virtual machine or template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#template_uuid VirtualMachine#template_uuid}
  */
  readonly templateUuid: string;
  /**
  * The timeout, in minutes, to wait for the virtual machine clone to complete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#timeout VirtualMachine#timeout}
  */
  readonly timeout?: number;
  /**
  * customization_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#customization_spec VirtualMachine#customization_spec}
  */
  readonly customizationSpec?: VirtualMachineCloneCustomizationSpec;
  /**
  * customize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#customize VirtualMachine#customize}
  */
  readonly customize?: VirtualMachineCloneCustomize;
}

export function virtualMachineCloneToTerraform(struct?: VirtualMachineCloneOutputReference | VirtualMachineClone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_clone: cdktf.booleanToTerraform(struct!.linkedClone),
    ovf_network_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ovfNetworkMap),
    ovf_storage_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ovfStorageMap),
    template_uuid: cdktf.stringToTerraform(struct!.templateUuid),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    customization_spec: virtualMachineCloneCustomizationSpecToTerraform(struct!.customizationSpec),
    customize: virtualMachineCloneCustomizeToTerraform(struct!.customize),
  }
}


export function virtualMachineCloneToHclTerraform(struct?: VirtualMachineCloneOutputReference | VirtualMachineClone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    linked_clone: {
      value: cdktf.booleanToHclTerraform(struct!.linkedClone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ovf_network_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ovfNetworkMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ovf_storage_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ovfStorageMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    template_uuid: {
      value: cdktf.stringToHclTerraform(struct!.templateUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    customization_spec: {
      value: virtualMachineCloneCustomizationSpecToHclTerraform(struct!.customizationSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineCloneCustomizationSpecList",
    },
    customize: {
      value: virtualMachineCloneCustomizeToHclTerraform(struct!.customize),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineCloneCustomizeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineCloneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineClone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkedClone !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedClone = this._linkedClone;
    }
    if (this._ovfNetworkMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovfNetworkMap = this._ovfNetworkMap;
    }
    if (this._ovfStorageMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovfStorageMap = this._ovfStorageMap;
    }
    if (this._templateUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateUuid = this._templateUuid;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._customizationSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizationSpec = this._customizationSpec?.internalValue;
    }
    if (this._customize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customize = this._customize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineClone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkedClone = undefined;
      this._ovfNetworkMap = undefined;
      this._ovfStorageMap = undefined;
      this._templateUuid = undefined;
      this._timeout = undefined;
      this._customizationSpec.internalValue = undefined;
      this._customize.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkedClone = value.linkedClone;
      this._ovfNetworkMap = value.ovfNetworkMap;
      this._ovfStorageMap = value.ovfStorageMap;
      this._templateUuid = value.templateUuid;
      this._timeout = value.timeout;
      this._customizationSpec.internalValue = value.customizationSpec;
      this._customize.internalValue = value.customize;
    }
  }

  // linked_clone - computed: false, optional: true, required: false
  private _linkedClone?: boolean | cdktf.IResolvable; 
  public get linkedClone() {
    return this.getBooleanAttribute('linked_clone');
  }
  public set linkedClone(value: boolean | cdktf.IResolvable) {
    this._linkedClone = value;
  }
  public resetLinkedClone() {
    this._linkedClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedCloneInput() {
    return this._linkedClone;
  }

  // ovf_network_map - computed: false, optional: true, required: false
  private _ovfNetworkMap?: { [key: string]: string }; 
  public get ovfNetworkMap() {
    return this.getStringMapAttribute('ovf_network_map');
  }
  public set ovfNetworkMap(value: { [key: string]: string }) {
    this._ovfNetworkMap = value;
  }
  public resetOvfNetworkMap() {
    this._ovfNetworkMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovfNetworkMapInput() {
    return this._ovfNetworkMap;
  }

  // ovf_storage_map - computed: false, optional: true, required: false
  private _ovfStorageMap?: { [key: string]: string }; 
  public get ovfStorageMap() {
    return this.getStringMapAttribute('ovf_storage_map');
  }
  public set ovfStorageMap(value: { [key: string]: string }) {
    this._ovfStorageMap = value;
  }
  public resetOvfStorageMap() {
    this._ovfStorageMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovfStorageMapInput() {
    return this._ovfStorageMap;
  }

  // template_uuid - computed: false, optional: false, required: true
  private _templateUuid?: string; 
  public get templateUuid() {
    return this.getStringAttribute('template_uuid');
  }
  public set templateUuid(value: string) {
    this._templateUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUuidInput() {
    return this._templateUuid;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // customization_spec - computed: false, optional: true, required: false
  private _customizationSpec = new VirtualMachineCloneCustomizationSpecOutputReference(this, "customization_spec");
  public get customizationSpec() {
    return this._customizationSpec;
  }
  public putCustomizationSpec(value: VirtualMachineCloneCustomizationSpec) {
    this._customizationSpec.internalValue = value;
  }
  public resetCustomizationSpec() {
    this._customizationSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationSpecInput() {
    return this._customizationSpec.internalValue;
  }

  // customize - computed: false, optional: true, required: false
  private _customize = new VirtualMachineCloneCustomizeOutputReference(this, "customize");
  public get customize() {
    return this._customize;
  }
  public putCustomize(value: VirtualMachineCloneCustomize) {
    this._customize.internalValue = value;
  }
  public resetCustomize() {
    this._customize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizeInput() {
    return this._customize.internalValue;
  }
}
export interface VirtualMachineDisk {
  /**
  * If this is true, the disk is attached instead of created. Implies keep_on_remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#attach VirtualMachine#attach}
  */
  readonly attach?: boolean | cdktf.IResolvable;
  /**
  * The type of controller the disk should be connected to. Must be 'scsi', 'sata', or 'ide'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#controller_type VirtualMachine#controller_type}
  */
  readonly controllerType?: string;
  /**
  * The datastore ID for this virtual disk, if different than the virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}
  */
  readonly datastoreId?: string;
  /**
  * The mode of this this virtual disk for purposes of writes and snapshotting. Can be one of append, independent_nonpersistent, independent_persistent, nonpersistent, persistent, or undoable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#disk_mode VirtualMachine#disk_mode}
  */
  readonly diskMode?: string;
  /**
  * The sharing mode of this virtual disk. Can be one of sharingMultiWriter or sharingNone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#disk_sharing VirtualMachine#disk_sharing}
  */
  readonly diskSharing?: string;
  /**
  * The virtual disk file zeroing policy when thin_provision is not true. The default is false, which lazily-zeros the disk, speeding up thick-provisioned disk creation time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#eagerly_scrub VirtualMachine#eagerly_scrub}
  */
  readonly eagerlyScrub?: boolean | cdktf.IResolvable;
  /**
  * The upper limit of IOPS that this disk can use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#io_limit VirtualMachine#io_limit}
  */
  readonly ioLimit?: number;
  /**
  * The I/O guarantee that this disk has, in IOPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#io_reservation VirtualMachine#io_reservation}
  */
  readonly ioReservation?: number;
  /**
  * The share count for this disk when the share level is custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#io_share_count VirtualMachine#io_share_count}
  */
  readonly ioShareCount?: number;
  /**
  * The share allocation level for this disk. Can be one of low, normal, high, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#io_share_level VirtualMachine#io_share_level}
  */
  readonly ioShareLevel?: string;
  /**
  * Set to true to keep the underlying VMDK file when removing this virtual disk from configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#keep_on_remove VirtualMachine#keep_on_remove}
  */
  readonly keepOnRemove?: boolean | cdktf.IResolvable;
  /**
  * A unique label for this disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#label VirtualMachine#label}
  */
  readonly label: string;
  /**
  * The full path of the virtual disk. This can only be provided if attach is set to true, otherwise it is a read-only value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#path VirtualMachine#path}
  */
  readonly path?: string;
  /**
  * The size of the disk, in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#size VirtualMachine#size}
  */
  readonly size?: number;
  /**
  * The ID of the storage policy to assign to the virtual disk in VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#storage_policy_id VirtualMachine#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * If true, this disk is thin provisioned, with space for the file being allocated on an as-needed basis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#thin_provisioned VirtualMachine#thin_provisioned}
  */
  readonly thinProvisioned?: boolean | cdktf.IResolvable;
  /**
  * The unique device number for this disk. This number determines where on the SCSI bus this device will be attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#unit_number VirtualMachine#unit_number}
  */
  readonly unitNumber?: number;
  /**
  * If true, writes for this disk are sent directly to the filesystem immediately instead of being buffered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#write_through VirtualMachine#write_through}
  */
  readonly writeThrough?: boolean | cdktf.IResolvable;
}

export function virtualMachineDiskToTerraform(struct?: VirtualMachineDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attach: cdktf.booleanToTerraform(struct!.attach),
    controller_type: cdktf.stringToTerraform(struct!.controllerType),
    datastore_id: cdktf.stringToTerraform(struct!.datastoreId),
    disk_mode: cdktf.stringToTerraform(struct!.diskMode),
    disk_sharing: cdktf.stringToTerraform(struct!.diskSharing),
    eagerly_scrub: cdktf.booleanToTerraform(struct!.eagerlyScrub),
    io_limit: cdktf.numberToTerraform(struct!.ioLimit),
    io_reservation: cdktf.numberToTerraform(struct!.ioReservation),
    io_share_count: cdktf.numberToTerraform(struct!.ioShareCount),
    io_share_level: cdktf.stringToTerraform(struct!.ioShareLevel),
    keep_on_remove: cdktf.booleanToTerraform(struct!.keepOnRemove),
    label: cdktf.stringToTerraform(struct!.label),
    path: cdktf.stringToTerraform(struct!.path),
    size: cdktf.numberToTerraform(struct!.size),
    storage_policy_id: cdktf.stringToTerraform(struct!.storagePolicyId),
    thin_provisioned: cdktf.booleanToTerraform(struct!.thinProvisioned),
    unit_number: cdktf.numberToTerraform(struct!.unitNumber),
    write_through: cdktf.booleanToTerraform(struct!.writeThrough),
  }
}


export function virtualMachineDiskToHclTerraform(struct?: VirtualMachineDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attach: {
      value: cdktf.booleanToHclTerraform(struct!.attach),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    controller_type: {
      value: cdktf.stringToHclTerraform(struct!.controllerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastore_id: {
      value: cdktf.stringToHclTerraform(struct!.datastoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_mode: {
      value: cdktf.stringToHclTerraform(struct!.diskMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_sharing: {
      value: cdktf.stringToHclTerraform(struct!.diskSharing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eagerly_scrub: {
      value: cdktf.booleanToHclTerraform(struct!.eagerlyScrub),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    io_limit: {
      value: cdktf.numberToHclTerraform(struct!.ioLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    io_reservation: {
      value: cdktf.numberToHclTerraform(struct!.ioReservation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    io_share_count: {
      value: cdktf.numberToHclTerraform(struct!.ioShareCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    io_share_level: {
      value: cdktf.stringToHclTerraform(struct!.ioShareLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_on_remove: {
      value: cdktf.booleanToHclTerraform(struct!.keepOnRemove),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thin_provisioned: {
      value: cdktf.booleanToHclTerraform(struct!.thinProvisioned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unit_number: {
      value: cdktf.numberToHclTerraform(struct!.unitNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_through: {
      value: cdktf.booleanToHclTerraform(struct!.writeThrough),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualMachineDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attach !== undefined) {
      hasAnyValues = true;
      internalValueResult.attach = this._attach;
    }
    if (this._controllerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerType = this._controllerType;
    }
    if (this._datastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreId = this._datastoreId;
    }
    if (this._diskMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskMode = this._diskMode;
    }
    if (this._diskSharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSharing = this._diskSharing;
    }
    if (this._eagerlyScrub !== undefined) {
      hasAnyValues = true;
      internalValueResult.eagerlyScrub = this._eagerlyScrub;
    }
    if (this._ioLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioLimit = this._ioLimit;
    }
    if (this._ioReservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioReservation = this._ioReservation;
    }
    if (this._ioShareCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioShareCount = this._ioShareCount;
    }
    if (this._ioShareLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioShareLevel = this._ioShareLevel;
    }
    if (this._keepOnRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepOnRemove = this._keepOnRemove;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._storagePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyId = this._storagePolicyId;
    }
    if (this._thinProvisioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.thinProvisioned = this._thinProvisioned;
    }
    if (this._unitNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitNumber = this._unitNumber;
    }
    if (this._writeThrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeThrough = this._writeThrough;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attach = undefined;
      this._controllerType = undefined;
      this._datastoreId = undefined;
      this._diskMode = undefined;
      this._diskSharing = undefined;
      this._eagerlyScrub = undefined;
      this._ioLimit = undefined;
      this._ioReservation = undefined;
      this._ioShareCount = undefined;
      this._ioShareLevel = undefined;
      this._keepOnRemove = undefined;
      this._label = undefined;
      this._path = undefined;
      this._size = undefined;
      this._storagePolicyId = undefined;
      this._thinProvisioned = undefined;
      this._unitNumber = undefined;
      this._writeThrough = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attach = value.attach;
      this._controllerType = value.controllerType;
      this._datastoreId = value.datastoreId;
      this._diskMode = value.diskMode;
      this._diskSharing = value.diskSharing;
      this._eagerlyScrub = value.eagerlyScrub;
      this._ioLimit = value.ioLimit;
      this._ioReservation = value.ioReservation;
      this._ioShareCount = value.ioShareCount;
      this._ioShareLevel = value.ioShareLevel;
      this._keepOnRemove = value.keepOnRemove;
      this._label = value.label;
      this._path = value.path;
      this._size = value.size;
      this._storagePolicyId = value.storagePolicyId;
      this._thinProvisioned = value.thinProvisioned;
      this._unitNumber = value.unitNumber;
      this._writeThrough = value.writeThrough;
    }
  }

  // attach - computed: false, optional: true, required: false
  private _attach?: boolean | cdktf.IResolvable; 
  public get attach() {
    return this.getBooleanAttribute('attach');
  }
  public set attach(value: boolean | cdktf.IResolvable) {
    this._attach = value;
  }
  public resetAttach() {
    this._attach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachInput() {
    return this._attach;
  }

  // controller_type - computed: false, optional: true, required: false
  private _controllerType?: string; 
  public get controllerType() {
    return this.getStringAttribute('controller_type');
  }
  public set controllerType(value: string) {
    this._controllerType = value;
  }
  public resetControllerType() {
    this._controllerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerTypeInput() {
    return this._controllerType;
  }

  // datastore_id - computed: true, optional: true, required: false
  private _datastoreId?: string; 
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }
  public set datastoreId(value: string) {
    this._datastoreId = value;
  }
  public resetDatastoreId() {
    this._datastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreIdInput() {
    return this._datastoreId;
  }

  // device_address - computed: true, optional: false, required: false
  public get deviceAddress() {
    return this.getStringAttribute('device_address');
  }

  // disk_mode - computed: false, optional: true, required: false
  private _diskMode?: string; 
  public get diskMode() {
    return this.getStringAttribute('disk_mode');
  }
  public set diskMode(value: string) {
    this._diskMode = value;
  }
  public resetDiskMode() {
    this._diskMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskModeInput() {
    return this._diskMode;
  }

  // disk_sharing - computed: false, optional: true, required: false
  private _diskSharing?: string; 
  public get diskSharing() {
    return this.getStringAttribute('disk_sharing');
  }
  public set diskSharing(value: string) {
    this._diskSharing = value;
  }
  public resetDiskSharing() {
    this._diskSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSharingInput() {
    return this._diskSharing;
  }

  // eagerly_scrub - computed: false, optional: true, required: false
  private _eagerlyScrub?: boolean | cdktf.IResolvable; 
  public get eagerlyScrub() {
    return this.getBooleanAttribute('eagerly_scrub');
  }
  public set eagerlyScrub(value: boolean | cdktf.IResolvable) {
    this._eagerlyScrub = value;
  }
  public resetEagerlyScrub() {
    this._eagerlyScrub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eagerlyScrubInput() {
    return this._eagerlyScrub;
  }

  // io_limit - computed: false, optional: true, required: false
  private _ioLimit?: number; 
  public get ioLimit() {
    return this.getNumberAttribute('io_limit');
  }
  public set ioLimit(value: number) {
    this._ioLimit = value;
  }
  public resetIoLimit() {
    this._ioLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioLimitInput() {
    return this._ioLimit;
  }

  // io_reservation - computed: false, optional: true, required: false
  private _ioReservation?: number; 
  public get ioReservation() {
    return this.getNumberAttribute('io_reservation');
  }
  public set ioReservation(value: number) {
    this._ioReservation = value;
  }
  public resetIoReservation() {
    this._ioReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioReservationInput() {
    return this._ioReservation;
  }

  // io_share_count - computed: false, optional: true, required: false
  private _ioShareCount?: number; 
  public get ioShareCount() {
    return this.getNumberAttribute('io_share_count');
  }
  public set ioShareCount(value: number) {
    this._ioShareCount = value;
  }
  public resetIoShareCount() {
    this._ioShareCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioShareCountInput() {
    return this._ioShareCount;
  }

  // io_share_level - computed: false, optional: true, required: false
  private _ioShareLevel?: string; 
  public get ioShareLevel() {
    return this.getStringAttribute('io_share_level');
  }
  public set ioShareLevel(value: string) {
    this._ioShareLevel = value;
  }
  public resetIoShareLevel() {
    this._ioShareLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioShareLevelInput() {
    return this._ioShareLevel;
  }

  // keep_on_remove - computed: false, optional: true, required: false
  private _keepOnRemove?: boolean | cdktf.IResolvable; 
  public get keepOnRemove() {
    return this.getBooleanAttribute('keep_on_remove');
  }
  public set keepOnRemove(value: boolean | cdktf.IResolvable) {
    this._keepOnRemove = value;
  }
  public resetKeepOnRemove() {
    this._keepOnRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepOnRemoveInput() {
    return this._keepOnRemove;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // storage_policy_id - computed: true, optional: true, required: false
  private _storagePolicyId?: string; 
  public get storagePolicyId() {
    return this.getStringAttribute('storage_policy_id');
  }
  public set storagePolicyId(value: string) {
    this._storagePolicyId = value;
  }
  public resetStoragePolicyId() {
    this._storagePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyIdInput() {
    return this._storagePolicyId;
  }

  // thin_provisioned - computed: false, optional: true, required: false
  private _thinProvisioned?: boolean | cdktf.IResolvable; 
  public get thinProvisioned() {
    return this.getBooleanAttribute('thin_provisioned');
  }
  public set thinProvisioned(value: boolean | cdktf.IResolvable) {
    this._thinProvisioned = value;
  }
  public resetThinProvisioned() {
    this._thinProvisioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thinProvisionedInput() {
    return this._thinProvisioned;
  }

  // unit_number - computed: false, optional: true, required: false
  private _unitNumber?: number; 
  public get unitNumber() {
    return this.getNumberAttribute('unit_number');
  }
  public set unitNumber(value: number) {
    this._unitNumber = value;
  }
  public resetUnitNumber() {
    this._unitNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitNumberInput() {
    return this._unitNumber;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // write_through - computed: false, optional: true, required: false
  private _writeThrough?: boolean | cdktf.IResolvable; 
  public get writeThrough() {
    return this.getBooleanAttribute('write_through');
  }
  public set writeThrough(value: boolean | cdktf.IResolvable) {
    this._writeThrough = value;
  }
  public resetWriteThrough() {
    this._writeThrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeThroughInput() {
    return this._writeThrough;
  }
}

export class VirtualMachineDiskList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineDisk[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualMachineDiskOutputReference {
    return new VirtualMachineDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineNetworkInterface {
  /**
  * The controller type. Can be one of e1000, e1000e, sriov, vmxnet3, or vrdma.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#adapter_type VirtualMachine#adapter_type}
  */
  readonly adapterType?: string;
  /**
  * The upper bandwidth limit of this network interface, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#bandwidth_limit VirtualMachine#bandwidth_limit}
  */
  readonly bandwidthLimit?: number;
  /**
  * The bandwidth reservation of this network interface, in Mbits/sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#bandwidth_reservation VirtualMachine#bandwidth_reservation}
  */
  readonly bandwidthReservation?: number;
  /**
  * The share count for this network interface when the share level is custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#bandwidth_share_count VirtualMachine#bandwidth_share_count}
  */
  readonly bandwidthShareCount?: number;
  /**
  * The bandwidth share allocation level for this interface. Can be one of low, normal, high, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#bandwidth_share_level VirtualMachine#bandwidth_share_level}
  */
  readonly bandwidthShareLevel?: string;
  /**
  * The MAC address of this network interface. Can only be manually set if use_static_mac is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#mac_address VirtualMachine#mac_address}
  */
  readonly macAddress?: string;
  /**
  * The ID of the network to connect this network interface to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#network_id VirtualMachine#network_id}
  */
  readonly networkId: string;
  /**
  * Mapping of network interface to OVF network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#ovf_mapping VirtualMachine#ovf_mapping}
  */
  readonly ovfMapping?: string;
  /**
  * The ID of the Physical SR-IOV NIC to attach to, e.g. '0000:d8:00.0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#physical_function VirtualMachine#physical_function}
  */
  readonly physicalFunction?: string;
  /**
  * If true, the mac_address field is treated as a static MAC address and set accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#use_static_mac VirtualMachine#use_static_mac}
  */
  readonly useStaticMac?: boolean | cdktf.IResolvable;
}

export function virtualMachineNetworkInterfaceToTerraform(struct?: VirtualMachineNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adapter_type: cdktf.stringToTerraform(struct!.adapterType),
    bandwidth_limit: cdktf.numberToTerraform(struct!.bandwidthLimit),
    bandwidth_reservation: cdktf.numberToTerraform(struct!.bandwidthReservation),
    bandwidth_share_count: cdktf.numberToTerraform(struct!.bandwidthShareCount),
    bandwidth_share_level: cdktf.stringToTerraform(struct!.bandwidthShareLevel),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    ovf_mapping: cdktf.stringToTerraform(struct!.ovfMapping),
    physical_function: cdktf.stringToTerraform(struct!.physicalFunction),
    use_static_mac: cdktf.booleanToTerraform(struct!.useStaticMac),
  }
}


export function virtualMachineNetworkInterfaceToHclTerraform(struct?: VirtualMachineNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adapter_type: {
      value: cdktf.stringToHclTerraform(struct!.adapterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_limit: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bandwidth_reservation: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthReservation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bandwidth_share_count: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthShareCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bandwidth_share_level: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthShareLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ovf_mapping: {
      value: cdktf.stringToHclTerraform(struct!.ovfMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    physical_function: {
      value: cdktf.stringToHclTerraform(struct!.physicalFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_static_mac: {
      value: cdktf.booleanToHclTerraform(struct!.useStaticMac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualMachineNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adapterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.adapterType = this._adapterType;
    }
    if (this._bandwidthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthLimit = this._bandwidthLimit;
    }
    if (this._bandwidthReservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthReservation = this._bandwidthReservation;
    }
    if (this._bandwidthShareCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthShareCount = this._bandwidthShareCount;
    }
    if (this._bandwidthShareLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthShareLevel = this._bandwidthShareLevel;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._ovfMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovfMapping = this._ovfMapping;
    }
    if (this._physicalFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalFunction = this._physicalFunction;
    }
    if (this._useStaticMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.useStaticMac = this._useStaticMac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adapterType = undefined;
      this._bandwidthLimit = undefined;
      this._bandwidthReservation = undefined;
      this._bandwidthShareCount = undefined;
      this._bandwidthShareLevel = undefined;
      this._macAddress = undefined;
      this._networkId = undefined;
      this._ovfMapping = undefined;
      this._physicalFunction = undefined;
      this._useStaticMac = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adapterType = value.adapterType;
      this._bandwidthLimit = value.bandwidthLimit;
      this._bandwidthReservation = value.bandwidthReservation;
      this._bandwidthShareCount = value.bandwidthShareCount;
      this._bandwidthShareLevel = value.bandwidthShareLevel;
      this._macAddress = value.macAddress;
      this._networkId = value.networkId;
      this._ovfMapping = value.ovfMapping;
      this._physicalFunction = value.physicalFunction;
      this._useStaticMac = value.useStaticMac;
    }
  }

  // adapter_type - computed: false, optional: true, required: false
  private _adapterType?: string; 
  public get adapterType() {
    return this.getStringAttribute('adapter_type');
  }
  public set adapterType(value: string) {
    this._adapterType = value;
  }
  public resetAdapterType() {
    this._adapterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterTypeInput() {
    return this._adapterType;
  }

  // bandwidth_limit - computed: false, optional: true, required: false
  private _bandwidthLimit?: number; 
  public get bandwidthLimit() {
    return this.getNumberAttribute('bandwidth_limit');
  }
  public set bandwidthLimit(value: number) {
    this._bandwidthLimit = value;
  }
  public resetBandwidthLimit() {
    this._bandwidthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitInput() {
    return this._bandwidthLimit;
  }

  // bandwidth_reservation - computed: false, optional: true, required: false
  private _bandwidthReservation?: number; 
  public get bandwidthReservation() {
    return this.getNumberAttribute('bandwidth_reservation');
  }
  public set bandwidthReservation(value: number) {
    this._bandwidthReservation = value;
  }
  public resetBandwidthReservation() {
    this._bandwidthReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthReservationInput() {
    return this._bandwidthReservation;
  }

  // bandwidth_share_count - computed: true, optional: true, required: false
  private _bandwidthShareCount?: number; 
  public get bandwidthShareCount() {
    return this.getNumberAttribute('bandwidth_share_count');
  }
  public set bandwidthShareCount(value: number) {
    this._bandwidthShareCount = value;
  }
  public resetBandwidthShareCount() {
    this._bandwidthShareCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthShareCountInput() {
    return this._bandwidthShareCount;
  }

  // bandwidth_share_level - computed: false, optional: true, required: false
  private _bandwidthShareLevel?: string; 
  public get bandwidthShareLevel() {
    return this.getStringAttribute('bandwidth_share_level');
  }
  public set bandwidthShareLevel(value: string) {
    this._bandwidthShareLevel = value;
  }
  public resetBandwidthShareLevel() {
    this._bandwidthShareLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthShareLevelInput() {
    return this._bandwidthShareLevel;
  }

  // device_address - computed: true, optional: false, required: false
  public get deviceAddress() {
    return this.getStringAttribute('device_address');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // ovf_mapping - computed: false, optional: true, required: false
  private _ovfMapping?: string; 
  public get ovfMapping() {
    return this.getStringAttribute('ovf_mapping');
  }
  public set ovfMapping(value: string) {
    this._ovfMapping = value;
  }
  public resetOvfMapping() {
    this._ovfMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovfMappingInput() {
    return this._ovfMapping;
  }

  // physical_function - computed: false, optional: true, required: false
  private _physicalFunction?: string; 
  public get physicalFunction() {
    return this.getStringAttribute('physical_function');
  }
  public set physicalFunction(value: string) {
    this._physicalFunction = value;
  }
  public resetPhysicalFunction() {
    this._physicalFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalFunctionInput() {
    return this._physicalFunction;
  }

  // use_static_mac - computed: false, optional: true, required: false
  private _useStaticMac?: boolean | cdktf.IResolvable; 
  public get useStaticMac() {
    return this.getBooleanAttribute('use_static_mac');
  }
  public set useStaticMac(value: boolean | cdktf.IResolvable) {
    this._useStaticMac = value;
  }
  public resetUseStaticMac() {
    this._useStaticMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStaticMacInput() {
    return this._useStaticMac;
  }
}

export class VirtualMachineNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineNetworkInterface[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualMachineNetworkInterfaceOutputReference {
    return new VirtualMachineNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineOvfDeploy {
  /**
  * Allow unverified ssl certificates while deploying ovf/ova from url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#allow_unverified_ssl_cert VirtualMachine#allow_unverified_ssl_cert}
  */
  readonly allowUnverifiedSslCert?: boolean | cdktf.IResolvable;
  /**
  * The Deployment option to be chosen. If empty, the default option is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#deployment_option VirtualMachine#deployment_option}
  */
  readonly deploymentOption?: string;
  /**
  * An optional disk provisioning. If set, all the disks in the deployed ovf will have the same specified disk type (e.g., thin provisioned).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#disk_provisioning VirtualMachine#disk_provisioning}
  */
  readonly diskProvisioning?: string;
  /**
  * Allow properties with ovf:userConfigurable=false to be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#enable_hidden_properties VirtualMachine#enable_hidden_properties}
  */
  readonly enableHiddenProperties?: boolean | cdktf.IResolvable;
  /**
  * The IP allocation policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#ip_allocation_policy VirtualMachine#ip_allocation_policy}
  */
  readonly ipAllocationPolicy?: string;
  /**
  * The IP protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#ip_protocol VirtualMachine#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * The absolute path to the ovf/ova file in the local system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#local_ovf_path VirtualMachine#local_ovf_path}
  */
  readonly localOvfPath?: string;
  /**
  * The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#ovf_network_map VirtualMachine#ovf_network_map}
  */
  readonly ovfNetworkMap?: { [key: string]: string };
  /**
  * URL to the remote ovf/ova file to be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#remote_ovf_url VirtualMachine#remote_ovf_url}
  */
  readonly remoteOvfUrl?: string;
}

export function virtualMachineOvfDeployToTerraform(struct?: VirtualMachineOvfDeployOutputReference | VirtualMachineOvfDeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_unverified_ssl_cert: cdktf.booleanToTerraform(struct!.allowUnverifiedSslCert),
    deployment_option: cdktf.stringToTerraform(struct!.deploymentOption),
    disk_provisioning: cdktf.stringToTerraform(struct!.diskProvisioning),
    enable_hidden_properties: cdktf.booleanToTerraform(struct!.enableHiddenProperties),
    ip_allocation_policy: cdktf.stringToTerraform(struct!.ipAllocationPolicy),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    local_ovf_path: cdktf.stringToTerraform(struct!.localOvfPath),
    ovf_network_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ovfNetworkMap),
    remote_ovf_url: cdktf.stringToTerraform(struct!.remoteOvfUrl),
  }
}


export function virtualMachineOvfDeployToHclTerraform(struct?: VirtualMachineOvfDeployOutputReference | VirtualMachineOvfDeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_unverified_ssl_cert: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnverifiedSslCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deployment_option: {
      value: cdktf.stringToHclTerraform(struct!.deploymentOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_provisioning: {
      value: cdktf.stringToHclTerraform(struct!.diskProvisioning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_hidden_properties: {
      value: cdktf.booleanToHclTerraform(struct!.enableHiddenProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_allocation_policy: {
      value: cdktf.stringToHclTerraform(struct!.ipAllocationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ovf_path: {
      value: cdktf.stringToHclTerraform(struct!.localOvfPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ovf_network_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ovfNetworkMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    remote_ovf_url: {
      value: cdktf.stringToHclTerraform(struct!.remoteOvfUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineOvfDeployOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineOvfDeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowUnverifiedSslCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnverifiedSslCert = this._allowUnverifiedSslCert;
    }
    if (this._deploymentOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentOption = this._deploymentOption;
    }
    if (this._diskProvisioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskProvisioning = this._diskProvisioning;
    }
    if (this._enableHiddenProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHiddenProperties = this._enableHiddenProperties;
    }
    if (this._ipAllocationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllocationPolicy = this._ipAllocationPolicy;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._localOvfPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localOvfPath = this._localOvfPath;
    }
    if (this._ovfNetworkMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovfNetworkMap = this._ovfNetworkMap;
    }
    if (this._remoteOvfUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteOvfUrl = this._remoteOvfUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineOvfDeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowUnverifiedSslCert = undefined;
      this._deploymentOption = undefined;
      this._diskProvisioning = undefined;
      this._enableHiddenProperties = undefined;
      this._ipAllocationPolicy = undefined;
      this._ipProtocol = undefined;
      this._localOvfPath = undefined;
      this._ovfNetworkMap = undefined;
      this._remoteOvfUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowUnverifiedSslCert = value.allowUnverifiedSslCert;
      this._deploymentOption = value.deploymentOption;
      this._diskProvisioning = value.diskProvisioning;
      this._enableHiddenProperties = value.enableHiddenProperties;
      this._ipAllocationPolicy = value.ipAllocationPolicy;
      this._ipProtocol = value.ipProtocol;
      this._localOvfPath = value.localOvfPath;
      this._ovfNetworkMap = value.ovfNetworkMap;
      this._remoteOvfUrl = value.remoteOvfUrl;
    }
  }

  // allow_unverified_ssl_cert - computed: false, optional: true, required: false
  private _allowUnverifiedSslCert?: boolean | cdktf.IResolvable; 
  public get allowUnverifiedSslCert() {
    return this.getBooleanAttribute('allow_unverified_ssl_cert');
  }
  public set allowUnverifiedSslCert(value: boolean | cdktf.IResolvable) {
    this._allowUnverifiedSslCert = value;
  }
  public resetAllowUnverifiedSslCert() {
    this._allowUnverifiedSslCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnverifiedSslCertInput() {
    return this._allowUnverifiedSslCert;
  }

  // deployment_option - computed: false, optional: true, required: false
  private _deploymentOption?: string; 
  public get deploymentOption() {
    return this.getStringAttribute('deployment_option');
  }
  public set deploymentOption(value: string) {
    this._deploymentOption = value;
  }
  public resetDeploymentOption() {
    this._deploymentOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentOptionInput() {
    return this._deploymentOption;
  }

  // disk_provisioning - computed: false, optional: true, required: false
  private _diskProvisioning?: string; 
  public get diskProvisioning() {
    return this.getStringAttribute('disk_provisioning');
  }
  public set diskProvisioning(value: string) {
    this._diskProvisioning = value;
  }
  public resetDiskProvisioning() {
    this._diskProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskProvisioningInput() {
    return this._diskProvisioning;
  }

  // enable_hidden_properties - computed: false, optional: true, required: false
  private _enableHiddenProperties?: boolean | cdktf.IResolvable; 
  public get enableHiddenProperties() {
    return this.getBooleanAttribute('enable_hidden_properties');
  }
  public set enableHiddenProperties(value: boolean | cdktf.IResolvable) {
    this._enableHiddenProperties = value;
  }
  public resetEnableHiddenProperties() {
    this._enableHiddenProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHiddenPropertiesInput() {
    return this._enableHiddenProperties;
  }

  // ip_allocation_policy - computed: false, optional: true, required: false
  private _ipAllocationPolicy?: string; 
  public get ipAllocationPolicy() {
    return this.getStringAttribute('ip_allocation_policy');
  }
  public set ipAllocationPolicy(value: string) {
    this._ipAllocationPolicy = value;
  }
  public resetIpAllocationPolicy() {
    this._ipAllocationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllocationPolicyInput() {
    return this._ipAllocationPolicy;
  }

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // local_ovf_path - computed: false, optional: true, required: false
  private _localOvfPath?: string; 
  public get localOvfPath() {
    return this.getStringAttribute('local_ovf_path');
  }
  public set localOvfPath(value: string) {
    this._localOvfPath = value;
  }
  public resetLocalOvfPath() {
    this._localOvfPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOvfPathInput() {
    return this._localOvfPath;
  }

  // ovf_network_map - computed: false, optional: true, required: false
  private _ovfNetworkMap?: { [key: string]: string }; 
  public get ovfNetworkMap() {
    return this.getStringMapAttribute('ovf_network_map');
  }
  public set ovfNetworkMap(value: { [key: string]: string }) {
    this._ovfNetworkMap = value;
  }
  public resetOvfNetworkMap() {
    this._ovfNetworkMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovfNetworkMapInput() {
    return this._ovfNetworkMap;
  }

  // remote_ovf_url - computed: false, optional: true, required: false
  private _remoteOvfUrl?: string; 
  public get remoteOvfUrl() {
    return this.getStringAttribute('remote_ovf_url');
  }
  public set remoteOvfUrl(value: string) {
    this._remoteOvfUrl = value;
  }
  public resetRemoteOvfUrl() {
    this._remoteOvfUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteOvfUrlInput() {
    return this._remoteOvfUrl;
  }
}
export interface VirtualMachineVapp {
  /**
  * A map of customizable vApp properties and their values. Allows customization of VMs cloned from OVF templates which have customizable vApp properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#properties VirtualMachine#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function virtualMachineVappToTerraform(struct?: VirtualMachineVappOutputReference | VirtualMachineVapp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function virtualMachineVappToHclTerraform(struct?: VirtualMachineVappOutputReference | VirtualMachineVapp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineVappOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineVapp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineVapp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._properties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._properties = value.properties;
    }
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine vsphere_virtual_machine}
*/
export class VirtualMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_virtual_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualMachine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualMachine to import
  * @param importFromId The id of the existing VirtualMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_virtual_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/virtual_machine vsphere_virtual_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_virtual_machine',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.8.2',
        providerVersionConstraint: '~> 2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alternateGuestName = config.alternateGuestName;
    this._annotation = config.annotation;
    this._bootDelay = config.bootDelay;
    this._bootRetryDelay = config.bootRetryDelay;
    this._bootRetryEnabled = config.bootRetryEnabled;
    this._cpuHotAddEnabled = config.cpuHotAddEnabled;
    this._cpuHotRemoveEnabled = config.cpuHotRemoveEnabled;
    this._cpuLimit = config.cpuLimit;
    this._cpuPerformanceCountersEnabled = config.cpuPerformanceCountersEnabled;
    this._cpuReservation = config.cpuReservation;
    this._cpuShareCount = config.cpuShareCount;
    this._cpuShareLevel = config.cpuShareLevel;
    this._customAttributes = config.customAttributes;
    this._datacenterId = config.datacenterId;
    this._datastoreClusterId = config.datastoreClusterId;
    this._datastoreId = config.datastoreId;
    this._efiSecureBootEnabled = config.efiSecureBootEnabled;
    this._enableDiskUuid = config.enableDiskUuid;
    this._enableLogging = config.enableLogging;
    this._eptRviMode = config.eptRviMode;
    this._extraConfig = config.extraConfig;
    this._extraConfigRebootRequired = config.extraConfigRebootRequired;
    this._firmware = config.firmware;
    this._folder = config.folder;
    this._forcePowerOff = config.forcePowerOff;
    this._guestId = config.guestId;
    this._hardwareVersion = config.hardwareVersion;
    this._hostSystemId = config.hostSystemId;
    this._hvMode = config.hvMode;
    this._id = config.id;
    this._ideControllerCount = config.ideControllerCount;
    this._ignoredGuestIps = config.ignoredGuestIps;
    this._latencySensitivity = config.latencySensitivity;
    this._memory = config.memory;
    this._memoryHotAddEnabled = config.memoryHotAddEnabled;
    this._memoryLimit = config.memoryLimit;
    this._memoryReservation = config.memoryReservation;
    this._memoryReservationLockedToMax = config.memoryReservationLockedToMax;
    this._memoryShareCount = config.memoryShareCount;
    this._memoryShareLevel = config.memoryShareLevel;
    this._migrateWaitTimeout = config.migrateWaitTimeout;
    this._name = config.name;
    this._nestedHvEnabled = config.nestedHvEnabled;
    this._numCoresPerSocket = config.numCoresPerSocket;
    this._numCpus = config.numCpus;
    this._pciDeviceId = config.pciDeviceId;
    this._poweronTimeout = config.poweronTimeout;
    this._replaceTrigger = config.replaceTrigger;
    this._resourcePoolId = config.resourcePoolId;
    this._runToolsScriptsAfterPowerOn = config.runToolsScriptsAfterPowerOn;
    this._runToolsScriptsAfterResume = config.runToolsScriptsAfterResume;
    this._runToolsScriptsBeforeGuestReboot = config.runToolsScriptsBeforeGuestReboot;
    this._runToolsScriptsBeforeGuestShutdown = config.runToolsScriptsBeforeGuestShutdown;
    this._runToolsScriptsBeforeGuestStandby = config.runToolsScriptsBeforeGuestStandby;
    this._sataControllerCount = config.sataControllerCount;
    this._scsiBusSharing = config.scsiBusSharing;
    this._scsiControllerCount = config.scsiControllerCount;
    this._scsiType = config.scsiType;
    this._shutdownWaitTimeout = config.shutdownWaitTimeout;
    this._storagePolicyId = config.storagePolicyId;
    this._swapPlacementPolicy = config.swapPlacementPolicy;
    this._syncTimeWithHost = config.syncTimeWithHost;
    this._syncTimeWithHostPeriodically = config.syncTimeWithHostPeriodically;
    this._tags = config.tags;
    this._toolsUpgradePolicy = config.toolsUpgradePolicy;
    this._vbsEnabled = config.vbsEnabled;
    this._vvtdEnabled = config.vvtdEnabled;
    this._waitForGuestIpTimeout = config.waitForGuestIpTimeout;
    this._waitForGuestNetRoutable = config.waitForGuestNetRoutable;
    this._waitForGuestNetTimeout = config.waitForGuestNetTimeout;
    this._cdrom.internalValue = config.cdrom;
    this._clone.internalValue = config.clone;
    this._disk.internalValue = config.disk;
    this._networkInterface.internalValue = config.networkInterface;
    this._ovfDeploy.internalValue = config.ovfDeploy;
    this._vapp.internalValue = config.vapp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate_guest_name - computed: false, optional: true, required: false
  private _alternateGuestName?: string; 
  public get alternateGuestName() {
    return this.getStringAttribute('alternate_guest_name');
  }
  public set alternateGuestName(value: string) {
    this._alternateGuestName = value;
  }
  public resetAlternateGuestName() {
    this._alternateGuestName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateGuestNameInput() {
    return this._alternateGuestName;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // boot_delay - computed: false, optional: true, required: false
  private _bootDelay?: number; 
  public get bootDelay() {
    return this.getNumberAttribute('boot_delay');
  }
  public set bootDelay(value: number) {
    this._bootDelay = value;
  }
  public resetBootDelay() {
    this._bootDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDelayInput() {
    return this._bootDelay;
  }

  // boot_retry_delay - computed: false, optional: true, required: false
  private _bootRetryDelay?: number; 
  public get bootRetryDelay() {
    return this.getNumberAttribute('boot_retry_delay');
  }
  public set bootRetryDelay(value: number) {
    this._bootRetryDelay = value;
  }
  public resetBootRetryDelay() {
    this._bootRetryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootRetryDelayInput() {
    return this._bootRetryDelay;
  }

  // boot_retry_enabled - computed: false, optional: true, required: false
  private _bootRetryEnabled?: boolean | cdktf.IResolvable; 
  public get bootRetryEnabled() {
    return this.getBooleanAttribute('boot_retry_enabled');
  }
  public set bootRetryEnabled(value: boolean | cdktf.IResolvable) {
    this._bootRetryEnabled = value;
  }
  public resetBootRetryEnabled() {
    this._bootRetryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootRetryEnabledInput() {
    return this._bootRetryEnabled;
  }

  // change_version - computed: true, optional: false, required: false
  public get changeVersion() {
    return this.getStringAttribute('change_version');
  }

  // cpu_hot_add_enabled - computed: false, optional: true, required: false
  private _cpuHotAddEnabled?: boolean | cdktf.IResolvable; 
  public get cpuHotAddEnabled() {
    return this.getBooleanAttribute('cpu_hot_add_enabled');
  }
  public set cpuHotAddEnabled(value: boolean | cdktf.IResolvable) {
    this._cpuHotAddEnabled = value;
  }
  public resetCpuHotAddEnabled() {
    this._cpuHotAddEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuHotAddEnabledInput() {
    return this._cpuHotAddEnabled;
  }

  // cpu_hot_remove_enabled - computed: false, optional: true, required: false
  private _cpuHotRemoveEnabled?: boolean | cdktf.IResolvable; 
  public get cpuHotRemoveEnabled() {
    return this.getBooleanAttribute('cpu_hot_remove_enabled');
  }
  public set cpuHotRemoveEnabled(value: boolean | cdktf.IResolvable) {
    this._cpuHotRemoveEnabled = value;
  }
  public resetCpuHotRemoveEnabled() {
    this._cpuHotRemoveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuHotRemoveEnabledInput() {
    return this._cpuHotRemoveEnabled;
  }

  // cpu_limit - computed: false, optional: true, required: false
  private _cpuLimit?: number; 
  public get cpuLimit() {
    return this.getNumberAttribute('cpu_limit');
  }
  public set cpuLimit(value: number) {
    this._cpuLimit = value;
  }
  public resetCpuLimit() {
    this._cpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitInput() {
    return this._cpuLimit;
  }

  // cpu_performance_counters_enabled - computed: false, optional: true, required: false
  private _cpuPerformanceCountersEnabled?: boolean | cdktf.IResolvable; 
  public get cpuPerformanceCountersEnabled() {
    return this.getBooleanAttribute('cpu_performance_counters_enabled');
  }
  public set cpuPerformanceCountersEnabled(value: boolean | cdktf.IResolvable) {
    this._cpuPerformanceCountersEnabled = value;
  }
  public resetCpuPerformanceCountersEnabled() {
    this._cpuPerformanceCountersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPerformanceCountersEnabledInput() {
    return this._cpuPerformanceCountersEnabled;
  }

  // cpu_reservation - computed: false, optional: true, required: false
  private _cpuReservation?: number; 
  public get cpuReservation() {
    return this.getNumberAttribute('cpu_reservation');
  }
  public set cpuReservation(value: number) {
    this._cpuReservation = value;
  }
  public resetCpuReservation() {
    this._cpuReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuReservationInput() {
    return this._cpuReservation;
  }

  // cpu_share_count - computed: true, optional: true, required: false
  private _cpuShareCount?: number; 
  public get cpuShareCount() {
    return this.getNumberAttribute('cpu_share_count');
  }
  public set cpuShareCount(value: number) {
    this._cpuShareCount = value;
  }
  public resetCpuShareCount() {
    this._cpuShareCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuShareCountInput() {
    return this._cpuShareCount;
  }

  // cpu_share_level - computed: false, optional: true, required: false
  private _cpuShareLevel?: string; 
  public get cpuShareLevel() {
    return this.getStringAttribute('cpu_share_level');
  }
  public set cpuShareLevel(value: string) {
    this._cpuShareLevel = value;
  }
  public resetCpuShareLevel() {
    this._cpuShareLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuShareLevelInput() {
    return this._cpuShareLevel;
  }

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes?: { [key: string]: string }; 
  public get customAttributes() {
    return this.getStringMapAttribute('custom_attributes');
  }
  public set customAttributes(value: { [key: string]: string }) {
    this._customAttributes = value;
  }
  public resetCustomAttributes() {
    this._customAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes;
  }

  // datacenter_id - computed: false, optional: true, required: false
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  public resetDatacenterId() {
    this._datacenterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // datastore_cluster_id - computed: false, optional: true, required: false
  private _datastoreClusterId?: string; 
  public get datastoreClusterId() {
    return this.getStringAttribute('datastore_cluster_id');
  }
  public set datastoreClusterId(value: string) {
    this._datastoreClusterId = value;
  }
  public resetDatastoreClusterId() {
    this._datastoreClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreClusterIdInput() {
    return this._datastoreClusterId;
  }

  // datastore_id - computed: true, optional: true, required: false
  private _datastoreId?: string; 
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }
  public set datastoreId(value: string) {
    this._datastoreId = value;
  }
  public resetDatastoreId() {
    this._datastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreIdInput() {
    return this._datastoreId;
  }

  // default_ip_address - computed: true, optional: false, required: false
  public get defaultIpAddress() {
    return this.getStringAttribute('default_ip_address');
  }

  // efi_secure_boot_enabled - computed: false, optional: true, required: false
  private _efiSecureBootEnabled?: boolean | cdktf.IResolvable; 
  public get efiSecureBootEnabled() {
    return this.getBooleanAttribute('efi_secure_boot_enabled');
  }
  public set efiSecureBootEnabled(value: boolean | cdktf.IResolvable) {
    this._efiSecureBootEnabled = value;
  }
  public resetEfiSecureBootEnabled() {
    this._efiSecureBootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efiSecureBootEnabledInput() {
    return this._efiSecureBootEnabled;
  }

  // enable_disk_uuid - computed: false, optional: true, required: false
  private _enableDiskUuid?: boolean | cdktf.IResolvable; 
  public get enableDiskUuid() {
    return this.getBooleanAttribute('enable_disk_uuid');
  }
  public set enableDiskUuid(value: boolean | cdktf.IResolvable) {
    this._enableDiskUuid = value;
  }
  public resetEnableDiskUuid() {
    this._enableDiskUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDiskUuidInput() {
    return this._enableDiskUuid;
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // ept_rvi_mode - computed: true, optional: true, required: false
  private _eptRviMode?: string; 
  public get eptRviMode() {
    return this.getStringAttribute('ept_rvi_mode');
  }
  public set eptRviMode(value: string) {
    this._eptRviMode = value;
  }
  public resetEptRviMode() {
    this._eptRviMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eptRviModeInput() {
    return this._eptRviMode;
  }

  // extra_config - computed: false, optional: true, required: false
  private _extraConfig?: { [key: string]: string }; 
  public get extraConfig() {
    return this.getStringMapAttribute('extra_config');
  }
  public set extraConfig(value: { [key: string]: string }) {
    this._extraConfig = value;
  }
  public resetExtraConfig() {
    this._extraConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigInput() {
    return this._extraConfig;
  }

  // extra_config_reboot_required - computed: false, optional: true, required: false
  private _extraConfigRebootRequired?: boolean | cdktf.IResolvable; 
  public get extraConfigRebootRequired() {
    return this.getBooleanAttribute('extra_config_reboot_required');
  }
  public set extraConfigRebootRequired(value: boolean | cdktf.IResolvable) {
    this._extraConfigRebootRequired = value;
  }
  public resetExtraConfigRebootRequired() {
    this._extraConfigRebootRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigRebootRequiredInput() {
    return this._extraConfigRebootRequired;
  }

  // firmware - computed: false, optional: true, required: false
  private _firmware?: string; 
  public get firmware() {
    return this.getStringAttribute('firmware');
  }
  public set firmware(value: string) {
    this._firmware = value;
  }
  public resetFirmware() {
    this._firmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareInput() {
    return this._firmware;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // force_power_off - computed: false, optional: true, required: false
  private _forcePowerOff?: boolean | cdktf.IResolvable; 
  public get forcePowerOff() {
    return this.getBooleanAttribute('force_power_off');
  }
  public set forcePowerOff(value: boolean | cdktf.IResolvable) {
    this._forcePowerOff = value;
  }
  public resetForcePowerOff() {
    this._forcePowerOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePowerOffInput() {
    return this._forcePowerOff;
  }

  // guest_id - computed: true, optional: true, required: false
  private _guestId?: string; 
  public get guestId() {
    return this.getStringAttribute('guest_id');
  }
  public set guestId(value: string) {
    this._guestId = value;
  }
  public resetGuestId() {
    this._guestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestIdInput() {
    return this._guestId;
  }

  // guest_ip_addresses - computed: true, optional: false, required: false
  public get guestIpAddresses() {
    return this.getListAttribute('guest_ip_addresses');
  }

  // hardware_version - computed: true, optional: true, required: false
  private _hardwareVersion?: number; 
  public get hardwareVersion() {
    return this.getNumberAttribute('hardware_version');
  }
  public set hardwareVersion(value: number) {
    this._hardwareVersion = value;
  }
  public resetHardwareVersion() {
    this._hardwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareVersionInput() {
    return this._hardwareVersion;
  }

  // host_system_id - computed: true, optional: true, required: false
  private _hostSystemId?: string; 
  public get hostSystemId() {
    return this.getStringAttribute('host_system_id');
  }
  public set hostSystemId(value: string) {
    this._hostSystemId = value;
  }
  public resetHostSystemId() {
    this._hostSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSystemIdInput() {
    return this._hostSystemId;
  }

  // hv_mode - computed: true, optional: true, required: false
  private _hvMode?: string; 
  public get hvMode() {
    return this.getStringAttribute('hv_mode');
  }
  public set hvMode(value: string) {
    this._hvMode = value;
  }
  public resetHvMode() {
    this._hvMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hvModeInput() {
    return this._hvMode;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ide_controller_count - computed: false, optional: true, required: false
  private _ideControllerCount?: number; 
  public get ideControllerCount() {
    return this.getNumberAttribute('ide_controller_count');
  }
  public set ideControllerCount(value: number) {
    this._ideControllerCount = value;
  }
  public resetIdeControllerCount() {
    this._ideControllerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ideControllerCountInput() {
    return this._ideControllerCount;
  }

  // ignored_guest_ips - computed: false, optional: true, required: false
  private _ignoredGuestIps?: string[]; 
  public get ignoredGuestIps() {
    return this.getListAttribute('ignored_guest_ips');
  }
  public set ignoredGuestIps(value: string[]) {
    this._ignoredGuestIps = value;
  }
  public resetIgnoredGuestIps() {
    this._ignoredGuestIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredGuestIpsInput() {
    return this._ignoredGuestIps;
  }

  // imported - computed: true, optional: false, required: false
  public get imported() {
    return this.getBooleanAttribute('imported');
  }

  // latency_sensitivity - computed: false, optional: true, required: false
  private _latencySensitivity?: string; 
  public get latencySensitivity() {
    return this.getStringAttribute('latency_sensitivity');
  }
  public set latencySensitivity(value: string) {
    this._latencySensitivity = value;
  }
  public resetLatencySensitivity() {
    this._latencySensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencySensitivityInput() {
    return this._latencySensitivity;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // memory_hot_add_enabled - computed: false, optional: true, required: false
  private _memoryHotAddEnabled?: boolean | cdktf.IResolvable; 
  public get memoryHotAddEnabled() {
    return this.getBooleanAttribute('memory_hot_add_enabled');
  }
  public set memoryHotAddEnabled(value: boolean | cdktf.IResolvable) {
    this._memoryHotAddEnabled = value;
  }
  public resetMemoryHotAddEnabled() {
    this._memoryHotAddEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryHotAddEnabledInput() {
    return this._memoryHotAddEnabled;
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: number; 
  public get memoryLimit() {
    return this.getNumberAttribute('memory_limit');
  }
  public set memoryLimit(value: number) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // memory_reservation - computed: false, optional: true, required: false
  private _memoryReservation?: number; 
  public get memoryReservation() {
    return this.getNumberAttribute('memory_reservation');
  }
  public set memoryReservation(value: number) {
    this._memoryReservation = value;
  }
  public resetMemoryReservation() {
    this._memoryReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryReservationInput() {
    return this._memoryReservation;
  }

  // memory_reservation_locked_to_max - computed: false, optional: true, required: false
  private _memoryReservationLockedToMax?: boolean | cdktf.IResolvable; 
  public get memoryReservationLockedToMax() {
    return this.getBooleanAttribute('memory_reservation_locked_to_max');
  }
  public set memoryReservationLockedToMax(value: boolean | cdktf.IResolvable) {
    this._memoryReservationLockedToMax = value;
  }
  public resetMemoryReservationLockedToMax() {
    this._memoryReservationLockedToMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryReservationLockedToMaxInput() {
    return this._memoryReservationLockedToMax;
  }

  // memory_share_count - computed: true, optional: true, required: false
  private _memoryShareCount?: number; 
  public get memoryShareCount() {
    return this.getNumberAttribute('memory_share_count');
  }
  public set memoryShareCount(value: number) {
    this._memoryShareCount = value;
  }
  public resetMemoryShareCount() {
    this._memoryShareCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryShareCountInput() {
    return this._memoryShareCount;
  }

  // memory_share_level - computed: false, optional: true, required: false
  private _memoryShareLevel?: string; 
  public get memoryShareLevel() {
    return this.getStringAttribute('memory_share_level');
  }
  public set memoryShareLevel(value: string) {
    this._memoryShareLevel = value;
  }
  public resetMemoryShareLevel() {
    this._memoryShareLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryShareLevelInput() {
    return this._memoryShareLevel;
  }

  // migrate_wait_timeout - computed: false, optional: true, required: false
  private _migrateWaitTimeout?: number; 
  public get migrateWaitTimeout() {
    return this.getNumberAttribute('migrate_wait_timeout');
  }
  public set migrateWaitTimeout(value: number) {
    this._migrateWaitTimeout = value;
  }
  public resetMigrateWaitTimeout() {
    this._migrateWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateWaitTimeoutInput() {
    return this._migrateWaitTimeout;
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nested_hv_enabled - computed: false, optional: true, required: false
  private _nestedHvEnabled?: boolean | cdktf.IResolvable; 
  public get nestedHvEnabled() {
    return this.getBooleanAttribute('nested_hv_enabled');
  }
  public set nestedHvEnabled(value: boolean | cdktf.IResolvable) {
    this._nestedHvEnabled = value;
  }
  public resetNestedHvEnabled() {
    this._nestedHvEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedHvEnabledInput() {
    return this._nestedHvEnabled;
  }

  // num_cores_per_socket - computed: false, optional: true, required: false
  private _numCoresPerSocket?: number; 
  public get numCoresPerSocket() {
    return this.getNumberAttribute('num_cores_per_socket');
  }
  public set numCoresPerSocket(value: number) {
    this._numCoresPerSocket = value;
  }
  public resetNumCoresPerSocket() {
    this._numCoresPerSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCoresPerSocketInput() {
    return this._numCoresPerSocket;
  }

  // num_cpus - computed: false, optional: true, required: false
  private _numCpus?: number; 
  public get numCpus() {
    return this.getNumberAttribute('num_cpus');
  }
  public set numCpus(value: number) {
    this._numCpus = value;
  }
  public resetNumCpus() {
    this._numCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCpusInput() {
    return this._numCpus;
  }

  // pci_device_id - computed: false, optional: true, required: false
  private _pciDeviceId?: string[]; 
  public get pciDeviceId() {
    return cdktf.Fn.tolist(this.getListAttribute('pci_device_id'));
  }
  public set pciDeviceId(value: string[]) {
    this._pciDeviceId = value;
  }
  public resetPciDeviceId() {
    this._pciDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciDeviceIdInput() {
    return this._pciDeviceId;
  }

  // power_state - computed: true, optional: false, required: false
  public get powerState() {
    return this.getStringAttribute('power_state');
  }

  // poweron_timeout - computed: false, optional: true, required: false
  private _poweronTimeout?: number; 
  public get poweronTimeout() {
    return this.getNumberAttribute('poweron_timeout');
  }
  public set poweronTimeout(value: number) {
    this._poweronTimeout = value;
  }
  public resetPoweronTimeout() {
    this._poweronTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poweronTimeoutInput() {
    return this._poweronTimeout;
  }

  // reboot_required - computed: true, optional: false, required: false
  public get rebootRequired() {
    return this.getBooleanAttribute('reboot_required');
  }

  // replace_trigger - computed: false, optional: true, required: false
  private _replaceTrigger?: string; 
  public get replaceTrigger() {
    return this.getStringAttribute('replace_trigger');
  }
  public set replaceTrigger(value: string) {
    this._replaceTrigger = value;
  }
  public resetReplaceTrigger() {
    this._replaceTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceTriggerInput() {
    return this._replaceTrigger;
  }

  // resource_pool_id - computed: false, optional: false, required: true
  private _resourcePoolId?: string; 
  public get resourcePoolId() {
    return this.getStringAttribute('resource_pool_id');
  }
  public set resourcePoolId(value: string) {
    this._resourcePoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolIdInput() {
    return this._resourcePoolId;
  }

  // run_tools_scripts_after_power_on - computed: false, optional: true, required: false
  private _runToolsScriptsAfterPowerOn?: boolean | cdktf.IResolvable; 
  public get runToolsScriptsAfterPowerOn() {
    return this.getBooleanAttribute('run_tools_scripts_after_power_on');
  }
  public set runToolsScriptsAfterPowerOn(value: boolean | cdktf.IResolvable) {
    this._runToolsScriptsAfterPowerOn = value;
  }
  public resetRunToolsScriptsAfterPowerOn() {
    this._runToolsScriptsAfterPowerOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runToolsScriptsAfterPowerOnInput() {
    return this._runToolsScriptsAfterPowerOn;
  }

  // run_tools_scripts_after_resume - computed: false, optional: true, required: false
  private _runToolsScriptsAfterResume?: boolean | cdktf.IResolvable; 
  public get runToolsScriptsAfterResume() {
    return this.getBooleanAttribute('run_tools_scripts_after_resume');
  }
  public set runToolsScriptsAfterResume(value: boolean | cdktf.IResolvable) {
    this._runToolsScriptsAfterResume = value;
  }
  public resetRunToolsScriptsAfterResume() {
    this._runToolsScriptsAfterResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runToolsScriptsAfterResumeInput() {
    return this._runToolsScriptsAfterResume;
  }

  // run_tools_scripts_before_guest_reboot - computed: false, optional: true, required: false
  private _runToolsScriptsBeforeGuestReboot?: boolean | cdktf.IResolvable; 
  public get runToolsScriptsBeforeGuestReboot() {
    return this.getBooleanAttribute('run_tools_scripts_before_guest_reboot');
  }
  public set runToolsScriptsBeforeGuestReboot(value: boolean | cdktf.IResolvable) {
    this._runToolsScriptsBeforeGuestReboot = value;
  }
  public resetRunToolsScriptsBeforeGuestReboot() {
    this._runToolsScriptsBeforeGuestReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runToolsScriptsBeforeGuestRebootInput() {
    return this._runToolsScriptsBeforeGuestReboot;
  }

  // run_tools_scripts_before_guest_shutdown - computed: false, optional: true, required: false
  private _runToolsScriptsBeforeGuestShutdown?: boolean | cdktf.IResolvable; 
  public get runToolsScriptsBeforeGuestShutdown() {
    return this.getBooleanAttribute('run_tools_scripts_before_guest_shutdown');
  }
  public set runToolsScriptsBeforeGuestShutdown(value: boolean | cdktf.IResolvable) {
    this._runToolsScriptsBeforeGuestShutdown = value;
  }
  public resetRunToolsScriptsBeforeGuestShutdown() {
    this._runToolsScriptsBeforeGuestShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runToolsScriptsBeforeGuestShutdownInput() {
    return this._runToolsScriptsBeforeGuestShutdown;
  }

  // run_tools_scripts_before_guest_standby - computed: false, optional: true, required: false
  private _runToolsScriptsBeforeGuestStandby?: boolean | cdktf.IResolvable; 
  public get runToolsScriptsBeforeGuestStandby() {
    return this.getBooleanAttribute('run_tools_scripts_before_guest_standby');
  }
  public set runToolsScriptsBeforeGuestStandby(value: boolean | cdktf.IResolvable) {
    this._runToolsScriptsBeforeGuestStandby = value;
  }
  public resetRunToolsScriptsBeforeGuestStandby() {
    this._runToolsScriptsBeforeGuestStandby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runToolsScriptsBeforeGuestStandbyInput() {
    return this._runToolsScriptsBeforeGuestStandby;
  }

  // sata_controller_count - computed: false, optional: true, required: false
  private _sataControllerCount?: number; 
  public get sataControllerCount() {
    return this.getNumberAttribute('sata_controller_count');
  }
  public set sataControllerCount(value: number) {
    this._sataControllerCount = value;
  }
  public resetSataControllerCount() {
    this._sataControllerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sataControllerCountInput() {
    return this._sataControllerCount;
  }

  // scsi_bus_sharing - computed: false, optional: true, required: false
  private _scsiBusSharing?: string; 
  public get scsiBusSharing() {
    return this.getStringAttribute('scsi_bus_sharing');
  }
  public set scsiBusSharing(value: string) {
    this._scsiBusSharing = value;
  }
  public resetScsiBusSharing() {
    this._scsiBusSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsiBusSharingInput() {
    return this._scsiBusSharing;
  }

  // scsi_controller_count - computed: false, optional: true, required: false
  private _scsiControllerCount?: number; 
  public get scsiControllerCount() {
    return this.getNumberAttribute('scsi_controller_count');
  }
  public set scsiControllerCount(value: number) {
    this._scsiControllerCount = value;
  }
  public resetScsiControllerCount() {
    this._scsiControllerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsiControllerCountInput() {
    return this._scsiControllerCount;
  }

  // scsi_type - computed: false, optional: true, required: false
  private _scsiType?: string; 
  public get scsiType() {
    return this.getStringAttribute('scsi_type');
  }
  public set scsiType(value: string) {
    this._scsiType = value;
  }
  public resetScsiType() {
    this._scsiType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsiTypeInput() {
    return this._scsiType;
  }

  // shutdown_wait_timeout - computed: false, optional: true, required: false
  private _shutdownWaitTimeout?: number; 
  public get shutdownWaitTimeout() {
    return this.getNumberAttribute('shutdown_wait_timeout');
  }
  public set shutdownWaitTimeout(value: number) {
    this._shutdownWaitTimeout = value;
  }
  public resetShutdownWaitTimeout() {
    this._shutdownWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownWaitTimeoutInput() {
    return this._shutdownWaitTimeout;
  }

  // storage_policy_id - computed: true, optional: true, required: false
  private _storagePolicyId?: string; 
  public get storagePolicyId() {
    return this.getStringAttribute('storage_policy_id');
  }
  public set storagePolicyId(value: string) {
    this._storagePolicyId = value;
  }
  public resetStoragePolicyId() {
    this._storagePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyIdInput() {
    return this._storagePolicyId;
  }

  // swap_placement_policy - computed: false, optional: true, required: false
  private _swapPlacementPolicy?: string; 
  public get swapPlacementPolicy() {
    return this.getStringAttribute('swap_placement_policy');
  }
  public set swapPlacementPolicy(value: string) {
    this._swapPlacementPolicy = value;
  }
  public resetSwapPlacementPolicy() {
    this._swapPlacementPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapPlacementPolicyInput() {
    return this._swapPlacementPolicy;
  }

  // sync_time_with_host - computed: false, optional: true, required: false
  private _syncTimeWithHost?: boolean | cdktf.IResolvable; 
  public get syncTimeWithHost() {
    return this.getBooleanAttribute('sync_time_with_host');
  }
  public set syncTimeWithHost(value: boolean | cdktf.IResolvable) {
    this._syncTimeWithHost = value;
  }
  public resetSyncTimeWithHost() {
    this._syncTimeWithHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTimeWithHostInput() {
    return this._syncTimeWithHost;
  }

  // sync_time_with_host_periodically - computed: false, optional: true, required: false
  private _syncTimeWithHostPeriodically?: boolean | cdktf.IResolvable; 
  public get syncTimeWithHostPeriodically() {
    return this.getBooleanAttribute('sync_time_with_host_periodically');
  }
  public set syncTimeWithHostPeriodically(value: boolean | cdktf.IResolvable) {
    this._syncTimeWithHostPeriodically = value;
  }
  public resetSyncTimeWithHostPeriodically() {
    this._syncTimeWithHostPeriodically = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTimeWithHostPeriodicallyInput() {
    return this._syncTimeWithHostPeriodically;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tools_upgrade_policy - computed: false, optional: true, required: false
  private _toolsUpgradePolicy?: string; 
  public get toolsUpgradePolicy() {
    return this.getStringAttribute('tools_upgrade_policy');
  }
  public set toolsUpgradePolicy(value: string) {
    this._toolsUpgradePolicy = value;
  }
  public resetToolsUpgradePolicy() {
    this._toolsUpgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsUpgradePolicyInput() {
    return this._toolsUpgradePolicy;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vapp_transport - computed: true, optional: false, required: false
  public get vappTransport() {
    return this.getListAttribute('vapp_transport');
  }

  // vbs_enabled - computed: false, optional: true, required: false
  private _vbsEnabled?: boolean | cdktf.IResolvable; 
  public get vbsEnabled() {
    return this.getBooleanAttribute('vbs_enabled');
  }
  public set vbsEnabled(value: boolean | cdktf.IResolvable) {
    this._vbsEnabled = value;
  }
  public resetVbsEnabled() {
    this._vbsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vbsEnabledInput() {
    return this._vbsEnabled;
  }

  // vmware_tools_status - computed: true, optional: false, required: false
  public get vmwareToolsStatus() {
    return this.getStringAttribute('vmware_tools_status');
  }

  // vmx_path - computed: true, optional: false, required: false
  public get vmxPath() {
    return this.getStringAttribute('vmx_path');
  }

  // vvtd_enabled - computed: false, optional: true, required: false
  private _vvtdEnabled?: boolean | cdktf.IResolvable; 
  public get vvtdEnabled() {
    return this.getBooleanAttribute('vvtd_enabled');
  }
  public set vvtdEnabled(value: boolean | cdktf.IResolvable) {
    this._vvtdEnabled = value;
  }
  public resetVvtdEnabled() {
    this._vvtdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vvtdEnabledInput() {
    return this._vvtdEnabled;
  }

  // wait_for_guest_ip_timeout - computed: false, optional: true, required: false
  private _waitForGuestIpTimeout?: number; 
  public get waitForGuestIpTimeout() {
    return this.getNumberAttribute('wait_for_guest_ip_timeout');
  }
  public set waitForGuestIpTimeout(value: number) {
    this._waitForGuestIpTimeout = value;
  }
  public resetWaitForGuestIpTimeout() {
    this._waitForGuestIpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForGuestIpTimeoutInput() {
    return this._waitForGuestIpTimeout;
  }

  // wait_for_guest_net_routable - computed: false, optional: true, required: false
  private _waitForGuestNetRoutable?: boolean | cdktf.IResolvable; 
  public get waitForGuestNetRoutable() {
    return this.getBooleanAttribute('wait_for_guest_net_routable');
  }
  public set waitForGuestNetRoutable(value: boolean | cdktf.IResolvable) {
    this._waitForGuestNetRoutable = value;
  }
  public resetWaitForGuestNetRoutable() {
    this._waitForGuestNetRoutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForGuestNetRoutableInput() {
    return this._waitForGuestNetRoutable;
  }

  // wait_for_guest_net_timeout - computed: false, optional: true, required: false
  private _waitForGuestNetTimeout?: number; 
  public get waitForGuestNetTimeout() {
    return this.getNumberAttribute('wait_for_guest_net_timeout');
  }
  public set waitForGuestNetTimeout(value: number) {
    this._waitForGuestNetTimeout = value;
  }
  public resetWaitForGuestNetTimeout() {
    this._waitForGuestNetTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForGuestNetTimeoutInput() {
    return this._waitForGuestNetTimeout;
  }

  // cdrom - computed: false, optional: true, required: false
  private _cdrom = new VirtualMachineCdromList(this, "cdrom", false);
  public get cdrom() {
    return this._cdrom;
  }
  public putCdrom(value: VirtualMachineCdrom[] | cdktf.IResolvable) {
    this._cdrom.internalValue = value;
  }
  public resetCdrom() {
    this._cdrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdromInput() {
    return this._cdrom.internalValue;
  }

  // clone - computed: false, optional: true, required: false
  private _clone = new VirtualMachineCloneOutputReference(this, "clone");
  public get clone() {
    return this._clone;
  }
  public putClone(value: VirtualMachineClone) {
    this._clone.internalValue = value;
  }
  public resetClone() {
    this._clone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneInput() {
    return this._clone.internalValue;
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new VirtualMachineDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: VirtualMachineDisk[] | cdktf.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new VirtualMachineNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: VirtualMachineNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // ovf_deploy - computed: false, optional: true, required: false
  private _ovfDeploy = new VirtualMachineOvfDeployOutputReference(this, "ovf_deploy");
  public get ovfDeploy() {
    return this._ovfDeploy;
  }
  public putOvfDeploy(value: VirtualMachineOvfDeploy) {
    this._ovfDeploy.internalValue = value;
  }
  public resetOvfDeploy() {
    this._ovfDeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovfDeployInput() {
    return this._ovfDeploy.internalValue;
  }

  // vapp - computed: false, optional: true, required: false
  private _vapp = new VirtualMachineVappOutputReference(this, "vapp");
  public get vapp() {
    return this._vapp;
  }
  public putVapp(value: VirtualMachineVapp) {
    this._vapp.internalValue = value;
  }
  public resetVapp() {
    this._vapp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vappInput() {
    return this._vapp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alternate_guest_name: cdktf.stringToTerraform(this._alternateGuestName),
      annotation: cdktf.stringToTerraform(this._annotation),
      boot_delay: cdktf.numberToTerraform(this._bootDelay),
      boot_retry_delay: cdktf.numberToTerraform(this._bootRetryDelay),
      boot_retry_enabled: cdktf.booleanToTerraform(this._bootRetryEnabled),
      cpu_hot_add_enabled: cdktf.booleanToTerraform(this._cpuHotAddEnabled),
      cpu_hot_remove_enabled: cdktf.booleanToTerraform(this._cpuHotRemoveEnabled),
      cpu_limit: cdktf.numberToTerraform(this._cpuLimit),
      cpu_performance_counters_enabled: cdktf.booleanToTerraform(this._cpuPerformanceCountersEnabled),
      cpu_reservation: cdktf.numberToTerraform(this._cpuReservation),
      cpu_share_count: cdktf.numberToTerraform(this._cpuShareCount),
      cpu_share_level: cdktf.stringToTerraform(this._cpuShareLevel),
      custom_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._customAttributes),
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      datastore_cluster_id: cdktf.stringToTerraform(this._datastoreClusterId),
      datastore_id: cdktf.stringToTerraform(this._datastoreId),
      efi_secure_boot_enabled: cdktf.booleanToTerraform(this._efiSecureBootEnabled),
      enable_disk_uuid: cdktf.booleanToTerraform(this._enableDiskUuid),
      enable_logging: cdktf.booleanToTerraform(this._enableLogging),
      ept_rvi_mode: cdktf.stringToTerraform(this._eptRviMode),
      extra_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraConfig),
      extra_config_reboot_required: cdktf.booleanToTerraform(this._extraConfigRebootRequired),
      firmware: cdktf.stringToTerraform(this._firmware),
      folder: cdktf.stringToTerraform(this._folder),
      force_power_off: cdktf.booleanToTerraform(this._forcePowerOff),
      guest_id: cdktf.stringToTerraform(this._guestId),
      hardware_version: cdktf.numberToTerraform(this._hardwareVersion),
      host_system_id: cdktf.stringToTerraform(this._hostSystemId),
      hv_mode: cdktf.stringToTerraform(this._hvMode),
      id: cdktf.stringToTerraform(this._id),
      ide_controller_count: cdktf.numberToTerraform(this._ideControllerCount),
      ignored_guest_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoredGuestIps),
      latency_sensitivity: cdktf.stringToTerraform(this._latencySensitivity),
      memory: cdktf.numberToTerraform(this._memory),
      memory_hot_add_enabled: cdktf.booleanToTerraform(this._memoryHotAddEnabled),
      memory_limit: cdktf.numberToTerraform(this._memoryLimit),
      memory_reservation: cdktf.numberToTerraform(this._memoryReservation),
      memory_reservation_locked_to_max: cdktf.booleanToTerraform(this._memoryReservationLockedToMax),
      memory_share_count: cdktf.numberToTerraform(this._memoryShareCount),
      memory_share_level: cdktf.stringToTerraform(this._memoryShareLevel),
      migrate_wait_timeout: cdktf.numberToTerraform(this._migrateWaitTimeout),
      name: cdktf.stringToTerraform(this._name),
      nested_hv_enabled: cdktf.booleanToTerraform(this._nestedHvEnabled),
      num_cores_per_socket: cdktf.numberToTerraform(this._numCoresPerSocket),
      num_cpus: cdktf.numberToTerraform(this._numCpus),
      pci_device_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pciDeviceId),
      poweron_timeout: cdktf.numberToTerraform(this._poweronTimeout),
      replace_trigger: cdktf.stringToTerraform(this._replaceTrigger),
      resource_pool_id: cdktf.stringToTerraform(this._resourcePoolId),
      run_tools_scripts_after_power_on: cdktf.booleanToTerraform(this._runToolsScriptsAfterPowerOn),
      run_tools_scripts_after_resume: cdktf.booleanToTerraform(this._runToolsScriptsAfterResume),
      run_tools_scripts_before_guest_reboot: cdktf.booleanToTerraform(this._runToolsScriptsBeforeGuestReboot),
      run_tools_scripts_before_guest_shutdown: cdktf.booleanToTerraform(this._runToolsScriptsBeforeGuestShutdown),
      run_tools_scripts_before_guest_standby: cdktf.booleanToTerraform(this._runToolsScriptsBeforeGuestStandby),
      sata_controller_count: cdktf.numberToTerraform(this._sataControllerCount),
      scsi_bus_sharing: cdktf.stringToTerraform(this._scsiBusSharing),
      scsi_controller_count: cdktf.numberToTerraform(this._scsiControllerCount),
      scsi_type: cdktf.stringToTerraform(this._scsiType),
      shutdown_wait_timeout: cdktf.numberToTerraform(this._shutdownWaitTimeout),
      storage_policy_id: cdktf.stringToTerraform(this._storagePolicyId),
      swap_placement_policy: cdktf.stringToTerraform(this._swapPlacementPolicy),
      sync_time_with_host: cdktf.booleanToTerraform(this._syncTimeWithHost),
      sync_time_with_host_periodically: cdktf.booleanToTerraform(this._syncTimeWithHostPeriodically),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tools_upgrade_policy: cdktf.stringToTerraform(this._toolsUpgradePolicy),
      vbs_enabled: cdktf.booleanToTerraform(this._vbsEnabled),
      vvtd_enabled: cdktf.booleanToTerraform(this._vvtdEnabled),
      wait_for_guest_ip_timeout: cdktf.numberToTerraform(this._waitForGuestIpTimeout),
      wait_for_guest_net_routable: cdktf.booleanToTerraform(this._waitForGuestNetRoutable),
      wait_for_guest_net_timeout: cdktf.numberToTerraform(this._waitForGuestNetTimeout),
      cdrom: cdktf.listMapper(virtualMachineCdromToTerraform, true)(this._cdrom.internalValue),
      clone: virtualMachineCloneToTerraform(this._clone.internalValue),
      disk: cdktf.listMapper(virtualMachineDiskToTerraform, true)(this._disk.internalValue),
      network_interface: cdktf.listMapper(virtualMachineNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      ovf_deploy: virtualMachineOvfDeployToTerraform(this._ovfDeploy.internalValue),
      vapp: virtualMachineVappToTerraform(this._vapp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alternate_guest_name: {
        value: cdktf.stringToHclTerraform(this._alternateGuestName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_delay: {
        value: cdktf.numberToHclTerraform(this._bootDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      boot_retry_delay: {
        value: cdktf.numberToHclTerraform(this._bootRetryDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      boot_retry_enabled: {
        value: cdktf.booleanToHclTerraform(this._bootRetryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cpu_hot_add_enabled: {
        value: cdktf.booleanToHclTerraform(this._cpuHotAddEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cpu_hot_remove_enabled: {
        value: cdktf.booleanToHclTerraform(this._cpuHotRemoveEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cpu_limit: {
        value: cdktf.numberToHclTerraform(this._cpuLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_performance_counters_enabled: {
        value: cdktf.booleanToHclTerraform(this._cpuPerformanceCountersEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cpu_reservation: {
        value: cdktf.numberToHclTerraform(this._cpuReservation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_share_count: {
        value: cdktf.numberToHclTerraform(this._cpuShareCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_share_level: {
        value: cdktf.stringToHclTerraform(this._cpuShareLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      datacenter_id: {
        value: cdktf.stringToHclTerraform(this._datacenterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datastore_cluster_id: {
        value: cdktf.stringToHclTerraform(this._datastoreClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datastore_id: {
        value: cdktf.stringToHclTerraform(this._datastoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      efi_secure_boot_enabled: {
        value: cdktf.booleanToHclTerraform(this._efiSecureBootEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_disk_uuid: {
        value: cdktf.booleanToHclTerraform(this._enableDiskUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_logging: {
        value: cdktf.booleanToHclTerraform(this._enableLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ept_rvi_mode: {
        value: cdktf.stringToHclTerraform(this._eptRviMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      extra_config_reboot_required: {
        value: cdktf.booleanToHclTerraform(this._extraConfigRebootRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firmware: {
        value: cdktf.stringToHclTerraform(this._firmware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_power_off: {
        value: cdktf.booleanToHclTerraform(this._forcePowerOff),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guest_id: {
        value: cdktf.stringToHclTerraform(this._guestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hardware_version: {
        value: cdktf.numberToHclTerraform(this._hardwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_system_id: {
        value: cdktf.stringToHclTerraform(this._hostSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hv_mode: {
        value: cdktf.stringToHclTerraform(this._hvMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ide_controller_count: {
        value: cdktf.numberToHclTerraform(this._ideControllerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ignored_guest_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoredGuestIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      latency_sensitivity: {
        value: cdktf.stringToHclTerraform(this._latencySensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_hot_add_enabled: {
        value: cdktf.booleanToHclTerraform(this._memoryHotAddEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      memory_limit: {
        value: cdktf.numberToHclTerraform(this._memoryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_reservation: {
        value: cdktf.numberToHclTerraform(this._memoryReservation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_reservation_locked_to_max: {
        value: cdktf.booleanToHclTerraform(this._memoryReservationLockedToMax),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      memory_share_count: {
        value: cdktf.numberToHclTerraform(this._memoryShareCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_share_level: {
        value: cdktf.stringToHclTerraform(this._memoryShareLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migrate_wait_timeout: {
        value: cdktf.numberToHclTerraform(this._migrateWaitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nested_hv_enabled: {
        value: cdktf.booleanToHclTerraform(this._nestedHvEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      num_cores_per_socket: {
        value: cdktf.numberToHclTerraform(this._numCoresPerSocket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_cpus: {
        value: cdktf.numberToHclTerraform(this._numCpus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pci_device_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pciDeviceId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      poweron_timeout: {
        value: cdktf.numberToHclTerraform(this._poweronTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replace_trigger: {
        value: cdktf.stringToHclTerraform(this._replaceTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_pool_id: {
        value: cdktf.stringToHclTerraform(this._resourcePoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_tools_scripts_after_power_on: {
        value: cdktf.booleanToHclTerraform(this._runToolsScriptsAfterPowerOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_tools_scripts_after_resume: {
        value: cdktf.booleanToHclTerraform(this._runToolsScriptsAfterResume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_tools_scripts_before_guest_reboot: {
        value: cdktf.booleanToHclTerraform(this._runToolsScriptsBeforeGuestReboot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_tools_scripts_before_guest_shutdown: {
        value: cdktf.booleanToHclTerraform(this._runToolsScriptsBeforeGuestShutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_tools_scripts_before_guest_standby: {
        value: cdktf.booleanToHclTerraform(this._runToolsScriptsBeforeGuestStandby),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sata_controller_count: {
        value: cdktf.numberToHclTerraform(this._sataControllerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scsi_bus_sharing: {
        value: cdktf.stringToHclTerraform(this._scsiBusSharing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scsi_controller_count: {
        value: cdktf.numberToHclTerraform(this._scsiControllerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scsi_type: {
        value: cdktf.stringToHclTerraform(this._scsiType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown_wait_timeout: {
        value: cdktf.numberToHclTerraform(this._shutdownWaitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_policy_id: {
        value: cdktf.stringToHclTerraform(this._storagePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      swap_placement_policy: {
        value: cdktf.stringToHclTerraform(this._swapPlacementPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_time_with_host: {
        value: cdktf.booleanToHclTerraform(this._syncTimeWithHost),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_time_with_host_periodically: {
        value: cdktf.booleanToHclTerraform(this._syncTimeWithHostPeriodically),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tools_upgrade_policy: {
        value: cdktf.stringToHclTerraform(this._toolsUpgradePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vbs_enabled: {
        value: cdktf.booleanToHclTerraform(this._vbsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vvtd_enabled: {
        value: cdktf.booleanToHclTerraform(this._vvtdEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_guest_ip_timeout: {
        value: cdktf.numberToHclTerraform(this._waitForGuestIpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wait_for_guest_net_routable: {
        value: cdktf.booleanToHclTerraform(this._waitForGuestNetRoutable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_guest_net_timeout: {
        value: cdktf.numberToHclTerraform(this._waitForGuestNetTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cdrom: {
        value: cdktf.listMapperHcl(virtualMachineCdromToHclTerraform, true)(this._cdrom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineCdromList",
      },
      clone: {
        value: virtualMachineCloneToHclTerraform(this._clone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineCloneList",
      },
      disk: {
        value: cdktf.listMapperHcl(virtualMachineDiskToHclTerraform, true)(this._disk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineDiskList",
      },
      network_interface: {
        value: cdktf.listMapperHcl(virtualMachineNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineNetworkInterfaceList",
      },
      ovf_deploy: {
        value: virtualMachineOvfDeployToHclTerraform(this._ovfDeploy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineOvfDeployList",
      },
      vapp: {
        value: virtualMachineVappToHclTerraform(this._vapp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineVappList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
