/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/virtual_machine_class
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineClassConfig extends cdktf.TerraformMetaArguments {
  /**
  * The percentage of the available CPU capacity which will be reserved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/virtual_machine_class#cpu_reservation VirtualMachineClass#cpu_reservation}
  */
  readonly cpuReservation?: number;
  /**
  * The number of CPUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/virtual_machine_class#cpus VirtualMachineClass#cpus}
  */
  readonly cpus: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/virtual_machine_class#id VirtualMachineClass#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The amount of memory (in MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/virtual_machine_class#memory VirtualMachineClass#memory}
  */
  readonly memory: number;
  /**
  * The percentage of the available memory capacity which will be reserved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/virtual_machine_class#memory_reservation VirtualMachineClass#memory_reservation}
  */
  readonly memoryReservation?: number;
  /**
  * The name of the virtual machine class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/virtual_machine_class#name VirtualMachineClass#name}
  */
  readonly name: string;
  /**
  * A comma-separated list of GPU devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/virtual_machine_class#vgpu_devices VirtualMachineClass#vgpu_devices}
  */
  readonly vgpuDevices?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/virtual_machine_class vsphere_virtual_machine_class}
*/
export class VirtualMachineClass extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere_virtual_machine_class";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualMachineClass resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualMachineClass to import
  * @param importFromId The id of the existing VirtualMachineClass that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/virtual_machine_class#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualMachineClass to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere_virtual_machine_class", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/virtual_machine_class vsphere_virtual_machine_class} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineClassConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineClassConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere_virtual_machine_class',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.11.0',
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
    this._cpuReservation = config.cpuReservation;
    this._cpus = config.cpus;
    this._id = config.id;
    this._memory = config.memory;
    this._memoryReservation = config.memoryReservation;
    this._name = config.name;
    this._vgpuDevices = config.vgpuDevices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cpus - computed: false, optional: false, required: true
  private _cpus?: number; 
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }
  public set cpus(value: number) {
    this._cpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
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

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // vgpu_devices - computed: false, optional: true, required: false
  private _vgpuDevices?: string[]; 
  public get vgpuDevices() {
    return this.getListAttribute('vgpu_devices');
  }
  public set vgpuDevices(value: string[]) {
    this._vgpuDevices = value;
  }
  public resetVgpuDevices() {
    this._vgpuDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vgpuDevicesInput() {
    return this._vgpuDevices;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu_reservation: cdktf.numberToTerraform(this._cpuReservation),
      cpus: cdktf.numberToTerraform(this._cpus),
      id: cdktf.stringToTerraform(this._id),
      memory: cdktf.numberToTerraform(this._memory),
      memory_reservation: cdktf.numberToTerraform(this._memoryReservation),
      name: cdktf.stringToTerraform(this._name),
      vgpu_devices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vgpuDevices),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu_reservation: {
        value: cdktf.numberToHclTerraform(this._cpuReservation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpus: {
        value: cdktf.numberToHclTerraform(this._cpus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      memory_reservation: {
        value: cdktf.numberToHclTerraform(this._memoryReservation),
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
      vgpu_devices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vgpuDevices),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
