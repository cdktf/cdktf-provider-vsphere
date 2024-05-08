/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVsphereVirtualMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The guest name for the operating system when guest_id is otherGuest or otherGuest64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#alternate_guest_name DataVsphereVirtualMachine#alternate_guest_name}
  */
  readonly alternateGuestName?: string;
  /**
  * User-provided description of the virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#annotation DataVsphereVirtualMachine#annotation}
  */
  readonly annotation?: string;
  /**
  * The number of milliseconds to wait before starting the boot sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#boot_delay DataVsphereVirtualMachine#boot_delay}
  */
  readonly bootDelay?: number;
  /**
  * The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#boot_retry_delay DataVsphereVirtualMachine#boot_retry_delay}
  */
  readonly bootRetryDelay?: number;
  /**
  * If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#boot_retry_enabled DataVsphereVirtualMachine#boot_retry_enabled}
  */
  readonly bootRetryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Allow CPUs to be added to this virtual machine while it is running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#cpu_hot_add_enabled DataVsphereVirtualMachine#cpu_hot_add_enabled}
  */
  readonly cpuHotAddEnabled?: boolean | cdktf.IResolvable;
  /**
  * Allow CPUs to be added to this virtual machine while it is running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#cpu_hot_remove_enabled DataVsphereVirtualMachine#cpu_hot_remove_enabled}
  */
  readonly cpuHotRemoveEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#cpu_limit DataVsphereVirtualMachine#cpu_limit}
  */
  readonly cpuLimit?: number;
  /**
  * Enable CPU performance counters on this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#cpu_performance_counters_enabled DataVsphereVirtualMachine#cpu_performance_counters_enabled}
  */
  readonly cpuPerformanceCountersEnabled?: boolean | cdktf.IResolvable;
  /**
  * The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#cpu_reservation DataVsphereVirtualMachine#cpu_reservation}
  */
  readonly cpuReservation?: number;
  /**
  * The amount of shares to allocate to cpu for a custom share level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#cpu_share_count DataVsphereVirtualMachine#cpu_share_count}
  */
  readonly cpuShareCount?: number;
  /**
  * The allocation level for cpu resources. Can be one of high, low, normal, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#cpu_share_level DataVsphereVirtualMachine#cpu_share_level}
  */
  readonly cpuShareLevel?: string;
  /**
  * The managed object ID of the datacenter the virtual machine is in. This is not required when using ESXi directly, or if there is only one datacenter in your infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#datacenter_id DataVsphereVirtualMachine#datacenter_id}
  */
  readonly datacenterId?: string;
  /**
  * When the boot type set in firmware is efi, this enables EFI secure boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#efi_secure_boot_enabled DataVsphereVirtualMachine#efi_secure_boot_enabled}
  */
  readonly efiSecureBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#enable_disk_uuid DataVsphereVirtualMachine#enable_disk_uuid}
  */
  readonly enableDiskUuid?: boolean | cdktf.IResolvable;
  /**
  * Enable logging on this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#enable_logging DataVsphereVirtualMachine#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#ept_rvi_mode DataVsphereVirtualMachine#ept_rvi_mode}
  */
  readonly eptRviMode?: string;
  /**
  * Extra configuration data for this virtual machine. Can be used to supply advanced parameters not normally in configuration, such as instance metadata, or configuration data for OVF images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#extra_config DataVsphereVirtualMachine#extra_config}
  */
  readonly extraConfig?: { [key: string]: string };
  /**
  * Allow the virtual machine to be rebooted when a change to `extra_config` occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#extra_config_reboot_required DataVsphereVirtualMachine#extra_config_reboot_required}
  */
  readonly extraConfigRebootRequired?: boolean | cdktf.IResolvable;
  /**
  * The firmware interface to use on the virtual machine. Can be one of bios or efi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#firmware DataVsphereVirtualMachine#firmware}
  */
  readonly firmware?: string;
  /**
  * The name of the folder the virtual machine is in. Allows distinguishing virtual machines with the same name in different folder paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#folder DataVsphereVirtualMachine#folder}
  */
  readonly folder?: string;
  /**
  * The guest ID for the operating system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#guest_id DataVsphereVirtualMachine#guest_id}
  */
  readonly guestId?: string;
  /**
  * The hardware version for the virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#hardware_version DataVsphereVirtualMachine#hardware_version}
  */
  readonly hardwareVersion?: number;
  /**
  * The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#hv_mode DataVsphereVirtualMachine#hv_mode}
  */
  readonly hvMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#id DataVsphereVirtualMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The number of IDE controllers to scan for disk sizes and controller types on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#ide_controller_scan_count DataVsphereVirtualMachine#ide_controller_scan_count}
  */
  readonly ideControllerScanCount?: number;
  /**
  * Controls the scheduling delay of the virtual machine. Use a higher sensitivity for applications that require lower latency, such as VOIP, media player applications, or applications that require frequent access to mouse or keyboard devices. Can be one of low, normal, medium, or high.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#latency_sensitivity DataVsphereVirtualMachine#latency_sensitivity}
  */
  readonly latencySensitivity?: string;
  /**
  * The size of the virtual machine's memory, in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#memory DataVsphereVirtualMachine#memory}
  */
  readonly memory?: number;
  /**
  * Allow memory to be added to this virtual machine while it is running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#memory_hot_add_enabled DataVsphereVirtualMachine#memory_hot_add_enabled}
  */
  readonly memoryHotAddEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#memory_limit DataVsphereVirtualMachine#memory_limit}
  */
  readonly memoryLimit?: number;
  /**
  * The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#memory_reservation DataVsphereVirtualMachine#memory_reservation}
  */
  readonly memoryReservation?: number;
  /**
  * If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#memory_reservation_locked_to_max DataVsphereVirtualMachine#memory_reservation_locked_to_max}
  */
  readonly memoryReservationLockedToMax?: boolean | cdktf.IResolvable;
  /**
  * The amount of shares to allocate to memory for a custom share level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#memory_share_count DataVsphereVirtualMachine#memory_share_count}
  */
  readonly memoryShareCount?: number;
  /**
  * The allocation level for memory resources. Can be one of high, low, normal, or custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#memory_share_level DataVsphereVirtualMachine#memory_share_level}
  */
  readonly memoryShareLevel?: string;
  /**
  * The machine object ID from VMware vSphere.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#moid DataVsphereVirtualMachine#moid}
  */
  readonly moid?: string;
  /**
  * The name of this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#name DataVsphereVirtualMachine#name}
  */
  readonly name?: string;
  /**
  * Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#nested_hv_enabled DataVsphereVirtualMachine#nested_hv_enabled}
  */
  readonly nestedHvEnabled?: boolean | cdktf.IResolvable;
  /**
  * The number of cores to distribute amongst the CPUs in this virtual machine. If specified, the value supplied to num_cpus must be evenly divisible by this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#num_cores_per_socket DataVsphereVirtualMachine#num_cores_per_socket}
  */
  readonly numCoresPerSocket?: number;
  /**
  * The number of virtual processors to assign to this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#num_cpus DataVsphereVirtualMachine#num_cpus}
  */
  readonly numCpus?: number;
  /**
  * Triggers replacement of resource whenever it changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#replace_trigger DataVsphereVirtualMachine#replace_trigger}
  */
  readonly replaceTrigger?: string;
  /**
  * Enable the run of scripts after virtual machine power-on when VMware Tools is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#run_tools_scripts_after_power_on DataVsphereVirtualMachine#run_tools_scripts_after_power_on}
  */
  readonly runToolsScriptsAfterPowerOn?: boolean | cdktf.IResolvable;
  /**
  * Enable the run of scripts after virtual machine resume when when VMware Tools is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#run_tools_scripts_after_resume DataVsphereVirtualMachine#run_tools_scripts_after_resume}
  */
  readonly runToolsScriptsAfterResume?: boolean | cdktf.IResolvable;
  /**
  * Enable the run of scripts before guest operating system reboot when VMware Tools is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_reboot DataVsphereVirtualMachine#run_tools_scripts_before_guest_reboot}
  */
  readonly runToolsScriptsBeforeGuestReboot?: boolean | cdktf.IResolvable;
  /**
  * Enable the run of scripts before guest operating system shutdown when VMware Tools is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_shutdown DataVsphereVirtualMachine#run_tools_scripts_before_guest_shutdown}
  */
  readonly runToolsScriptsBeforeGuestShutdown?: boolean | cdktf.IResolvable;
  /**
  * Enable the run of scripts before guest operating system standby when VMware Tools is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_standby DataVsphereVirtualMachine#run_tools_scripts_before_guest_standby}
  */
  readonly runToolsScriptsBeforeGuestStandby?: boolean | cdktf.IResolvable;
  /**
  * The number of SATA controllers to scan for disk sizes and controller types on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#sata_controller_scan_count DataVsphereVirtualMachine#sata_controller_scan_count}
  */
  readonly sataControllerScanCount?: number;
  /**
  * The number of SCSI controllers to scan for disk sizes and controller types on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#scsi_controller_scan_count DataVsphereVirtualMachine#scsi_controller_scan_count}
  */
  readonly scsiControllerScanCount?: number;
  /**
  * The ID of the storage policy to assign to the virtual machine home directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#storage_policy_id DataVsphereVirtualMachine#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#swap_placement_policy DataVsphereVirtualMachine#swap_placement_policy}
  */
  readonly swapPlacementPolicy?: string;
  /**
  * Enable guest clock synchronization with the host. On vSphere 7.0 U1 and above, with only this setting the clock is synchronized on startup and resume. Requires VMware Tools to be installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#sync_time_with_host DataVsphereVirtualMachine#sync_time_with_host}
  */
  readonly syncTimeWithHost?: boolean | cdktf.IResolvable;
  /**
  * Enable periodic clock synchronization with the host. Supported only on vSphere 7.0 U1 and above. On prior versions setting `sync_time_with_host` is enough for periodic synchronization. Requires VMware Tools to be installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#sync_time_with_host_periodically DataVsphereVirtualMachine#sync_time_with_host_periodically}
  */
  readonly syncTimeWithHostPeriodically?: boolean | cdktf.IResolvable;
  /**
  * Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#tools_upgrade_policy DataVsphereVirtualMachine#tools_upgrade_policy}
  */
  readonly toolsUpgradePolicy?: string;
  /**
  * The UUID of the virtual machine. Also exposed as the ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#uuid DataVsphereVirtualMachine#uuid}
  */
  readonly uuid?: string;
  /**
  * Flag to specify if Virtualization-based security is enabled for this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#vbs_enabled DataVsphereVirtualMachine#vbs_enabled}
  */
  readonly vbsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#vvtd_enabled DataVsphereVirtualMachine#vvtd_enabled}
  */
  readonly vvtdEnabled?: boolean | cdktf.IResolvable;
  /**
  * vapp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#vapp DataVsphereVirtualMachine#vapp}
  */
  readonly vapp?: DataVsphereVirtualMachineVapp;
}
export interface DataVsphereVirtualMachineDisks {
}

export function dataVsphereVirtualMachineDisksToTerraform(struct?: DataVsphereVirtualMachineDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVsphereVirtualMachineDisksToHclTerraform(struct?: DataVsphereVirtualMachineDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVsphereVirtualMachineDisksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataVsphereVirtualMachineDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVsphereVirtualMachineDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eagerly_scrub - computed: true, optional: false, required: false
  public get eagerlyScrub() {
    return this.getBooleanAttribute('eagerly_scrub');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // thin_provisioned - computed: true, optional: false, required: false
  public get thinProvisioned() {
    return this.getBooleanAttribute('thin_provisioned');
  }

  // unit_number - computed: true, optional: false, required: false
  public get unitNumber() {
    return this.getNumberAttribute('unit_number');
  }
}

export class DataVsphereVirtualMachineDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataVsphereVirtualMachineDisksOutputReference {
    return new DataVsphereVirtualMachineDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVsphereVirtualMachineNetworkInterfaces {
}

export function dataVsphereVirtualMachineNetworkInterfacesToTerraform(struct?: DataVsphereVirtualMachineNetworkInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVsphereVirtualMachineNetworkInterfacesToHclTerraform(struct?: DataVsphereVirtualMachineNetworkInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVsphereVirtualMachineNetworkInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataVsphereVirtualMachineNetworkInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVsphereVirtualMachineNetworkInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adapter_type - computed: true, optional: false, required: false
  public get adapterType() {
    return this.getStringAttribute('adapter_type');
  }

  // bandwidth_limit - computed: true, optional: false, required: false
  public get bandwidthLimit() {
    return this.getNumberAttribute('bandwidth_limit');
  }

  // bandwidth_reservation - computed: true, optional: false, required: false
  public get bandwidthReservation() {
    return this.getNumberAttribute('bandwidth_reservation');
  }

  // bandwidth_share_count - computed: true, optional: false, required: false
  public get bandwidthShareCount() {
    return this.getNumberAttribute('bandwidth_share_count');
  }

  // bandwidth_share_level - computed: true, optional: false, required: false
  public get bandwidthShareLevel() {
    return this.getStringAttribute('bandwidth_share_level');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // physical_function - computed: true, optional: false, required: false
  public get physicalFunction() {
    return this.getStringAttribute('physical_function');
  }
}

export class DataVsphereVirtualMachineNetworkInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataVsphereVirtualMachineNetworkInterfacesOutputReference {
    return new DataVsphereVirtualMachineNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVsphereVirtualMachineVapp {
  /**
  * A map of customizable vApp properties and their values. Allows customization of VMs cloned from OVF templates which have customizable vApp properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#properties DataVsphereVirtualMachine#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function dataVsphereVirtualMachineVappToTerraform(struct?: DataVsphereVirtualMachineVappOutputReference | DataVsphereVirtualMachineVapp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function dataVsphereVirtualMachineVappToHclTerraform(struct?: DataVsphereVirtualMachineVappOutputReference | DataVsphereVirtualMachineVapp): any {
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

export class DataVsphereVirtualMachineVappOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataVsphereVirtualMachineVapp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVsphereVirtualMachineVapp | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine vsphere_virtual_machine}
*/
export class DataVsphereVirtualMachine extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_virtual_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVsphereVirtualMachine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVsphereVirtualMachine to import
  * @param importFromId The id of the existing DataVsphereVirtualMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVsphereVirtualMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_virtual_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/virtual_machine vsphere_virtual_machine} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVsphereVirtualMachineConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVsphereVirtualMachineConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vsphere_virtual_machine',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.8.0',
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
    this._datacenterId = config.datacenterId;
    this._efiSecureBootEnabled = config.efiSecureBootEnabled;
    this._enableDiskUuid = config.enableDiskUuid;
    this._enableLogging = config.enableLogging;
    this._eptRviMode = config.eptRviMode;
    this._extraConfig = config.extraConfig;
    this._extraConfigRebootRequired = config.extraConfigRebootRequired;
    this._firmware = config.firmware;
    this._folder = config.folder;
    this._guestId = config.guestId;
    this._hardwareVersion = config.hardwareVersion;
    this._hvMode = config.hvMode;
    this._id = config.id;
    this._ideControllerScanCount = config.ideControllerScanCount;
    this._latencySensitivity = config.latencySensitivity;
    this._memory = config.memory;
    this._memoryHotAddEnabled = config.memoryHotAddEnabled;
    this._memoryLimit = config.memoryLimit;
    this._memoryReservation = config.memoryReservation;
    this._memoryReservationLockedToMax = config.memoryReservationLockedToMax;
    this._memoryShareCount = config.memoryShareCount;
    this._memoryShareLevel = config.memoryShareLevel;
    this._moid = config.moid;
    this._name = config.name;
    this._nestedHvEnabled = config.nestedHvEnabled;
    this._numCoresPerSocket = config.numCoresPerSocket;
    this._numCpus = config.numCpus;
    this._replaceTrigger = config.replaceTrigger;
    this._runToolsScriptsAfterPowerOn = config.runToolsScriptsAfterPowerOn;
    this._runToolsScriptsAfterResume = config.runToolsScriptsAfterResume;
    this._runToolsScriptsBeforeGuestReboot = config.runToolsScriptsBeforeGuestReboot;
    this._runToolsScriptsBeforeGuestShutdown = config.runToolsScriptsBeforeGuestShutdown;
    this._runToolsScriptsBeforeGuestStandby = config.runToolsScriptsBeforeGuestStandby;
    this._sataControllerScanCount = config.sataControllerScanCount;
    this._scsiControllerScanCount = config.scsiControllerScanCount;
    this._storagePolicyId = config.storagePolicyId;
    this._swapPlacementPolicy = config.swapPlacementPolicy;
    this._syncTimeWithHost = config.syncTimeWithHost;
    this._syncTimeWithHostPeriodically = config.syncTimeWithHostPeriodically;
    this._toolsUpgradePolicy = config.toolsUpgradePolicy;
    this._uuid = config.uuid;
    this._vbsEnabled = config.vbsEnabled;
    this._vvtdEnabled = config.vvtdEnabled;
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

  // default_ip_address - computed: true, optional: false, required: false
  public get defaultIpAddress() {
    return this.getStringAttribute('default_ip_address');
  }

  // disks - computed: true, optional: false, required: false
  private _disks = new DataVsphereVirtualMachineDisksList(this, "disks", false);
  public get disks() {
    return this._disks;
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

  // ept_rvi_mode - computed: false, optional: true, required: false
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

  // hv_mode - computed: false, optional: true, required: false
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

  // ide_controller_scan_count - computed: false, optional: true, required: false
  private _ideControllerScanCount?: number; 
  public get ideControllerScanCount() {
    return this.getNumberAttribute('ide_controller_scan_count');
  }
  public set ideControllerScanCount(value: number) {
    this._ideControllerScanCount = value;
  }
  public resetIdeControllerScanCount() {
    this._ideControllerScanCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ideControllerScanCountInput() {
    return this._ideControllerScanCount;
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

  // moid - computed: true, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // network_interface_types - computed: true, optional: false, required: false
  public get networkInterfaceTypes() {
    return this.getListAttribute('network_interface_types');
  }

  // network_interfaces - computed: true, optional: false, required: false
  private _networkInterfaces = new DataVsphereVirtualMachineNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
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

  // sata_controller_scan_count - computed: false, optional: true, required: false
  private _sataControllerScanCount?: number; 
  public get sataControllerScanCount() {
    return this.getNumberAttribute('sata_controller_scan_count');
  }
  public set sataControllerScanCount(value: number) {
    this._sataControllerScanCount = value;
  }
  public resetSataControllerScanCount() {
    this._sataControllerScanCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sataControllerScanCountInput() {
    return this._sataControllerScanCount;
  }

  // scsi_bus_sharing - computed: true, optional: false, required: false
  public get scsiBusSharing() {
    return this.getStringAttribute('scsi_bus_sharing');
  }

  // scsi_controller_scan_count - computed: false, optional: true, required: false
  private _scsiControllerScanCount?: number; 
  public get scsiControllerScanCount() {
    return this.getNumberAttribute('scsi_controller_scan_count');
  }
  public set scsiControllerScanCount(value: number) {
    this._scsiControllerScanCount = value;
  }
  public resetScsiControllerScanCount() {
    this._scsiControllerScanCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsiControllerScanCountInput() {
    return this._scsiControllerScanCount;
  }

  // scsi_type - computed: true, optional: false, required: false
  public get scsiType() {
    return this.getStringAttribute('scsi_type');
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
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

  // vapp - computed: false, optional: true, required: false
  private _vapp = new DataVsphereVirtualMachineVappOutputReference(this, "vapp");
  public get vapp() {
    return this._vapp;
  }
  public putVapp(value: DataVsphereVirtualMachineVapp) {
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
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      efi_secure_boot_enabled: cdktf.booleanToTerraform(this._efiSecureBootEnabled),
      enable_disk_uuid: cdktf.booleanToTerraform(this._enableDiskUuid),
      enable_logging: cdktf.booleanToTerraform(this._enableLogging),
      ept_rvi_mode: cdktf.stringToTerraform(this._eptRviMode),
      extra_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraConfig),
      extra_config_reboot_required: cdktf.booleanToTerraform(this._extraConfigRebootRequired),
      firmware: cdktf.stringToTerraform(this._firmware),
      folder: cdktf.stringToTerraform(this._folder),
      guest_id: cdktf.stringToTerraform(this._guestId),
      hardware_version: cdktf.numberToTerraform(this._hardwareVersion),
      hv_mode: cdktf.stringToTerraform(this._hvMode),
      id: cdktf.stringToTerraform(this._id),
      ide_controller_scan_count: cdktf.numberToTerraform(this._ideControllerScanCount),
      latency_sensitivity: cdktf.stringToTerraform(this._latencySensitivity),
      memory: cdktf.numberToTerraform(this._memory),
      memory_hot_add_enabled: cdktf.booleanToTerraform(this._memoryHotAddEnabled),
      memory_limit: cdktf.numberToTerraform(this._memoryLimit),
      memory_reservation: cdktf.numberToTerraform(this._memoryReservation),
      memory_reservation_locked_to_max: cdktf.booleanToTerraform(this._memoryReservationLockedToMax),
      memory_share_count: cdktf.numberToTerraform(this._memoryShareCount),
      memory_share_level: cdktf.stringToTerraform(this._memoryShareLevel),
      moid: cdktf.stringToTerraform(this._moid),
      name: cdktf.stringToTerraform(this._name),
      nested_hv_enabled: cdktf.booleanToTerraform(this._nestedHvEnabled),
      num_cores_per_socket: cdktf.numberToTerraform(this._numCoresPerSocket),
      num_cpus: cdktf.numberToTerraform(this._numCpus),
      replace_trigger: cdktf.stringToTerraform(this._replaceTrigger),
      run_tools_scripts_after_power_on: cdktf.booleanToTerraform(this._runToolsScriptsAfterPowerOn),
      run_tools_scripts_after_resume: cdktf.booleanToTerraform(this._runToolsScriptsAfterResume),
      run_tools_scripts_before_guest_reboot: cdktf.booleanToTerraform(this._runToolsScriptsBeforeGuestReboot),
      run_tools_scripts_before_guest_shutdown: cdktf.booleanToTerraform(this._runToolsScriptsBeforeGuestShutdown),
      run_tools_scripts_before_guest_standby: cdktf.booleanToTerraform(this._runToolsScriptsBeforeGuestStandby),
      sata_controller_scan_count: cdktf.numberToTerraform(this._sataControllerScanCount),
      scsi_controller_scan_count: cdktf.numberToTerraform(this._scsiControllerScanCount),
      storage_policy_id: cdktf.stringToTerraform(this._storagePolicyId),
      swap_placement_policy: cdktf.stringToTerraform(this._swapPlacementPolicy),
      sync_time_with_host: cdktf.booleanToTerraform(this._syncTimeWithHost),
      sync_time_with_host_periodically: cdktf.booleanToTerraform(this._syncTimeWithHostPeriodically),
      tools_upgrade_policy: cdktf.stringToTerraform(this._toolsUpgradePolicy),
      uuid: cdktf.stringToTerraform(this._uuid),
      vbs_enabled: cdktf.booleanToTerraform(this._vbsEnabled),
      vvtd_enabled: cdktf.booleanToTerraform(this._vvtdEnabled),
      vapp: dataVsphereVirtualMachineVappToTerraform(this._vapp.internalValue),
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
      datacenter_id: {
        value: cdktf.stringToHclTerraform(this._datacenterId),
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
      ide_controller_scan_count: {
        value: cdktf.numberToHclTerraform(this._ideControllerScanCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      moid: {
        value: cdktf.stringToHclTerraform(this._moid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      replace_trigger: {
        value: cdktf.stringToHclTerraform(this._replaceTrigger),
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
      sata_controller_scan_count: {
        value: cdktf.numberToHclTerraform(this._sataControllerScanCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scsi_controller_scan_count: {
        value: cdktf.numberToHclTerraform(this._scsiControllerScanCount),
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
      tools_upgrade_policy: {
        value: cdktf.stringToHclTerraform(this._toolsUpgradePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
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
      vapp: {
        value: dataVsphereVirtualMachineVappToHclTerraform(this._vapp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataVsphereVirtualMachineVappList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
