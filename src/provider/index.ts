// https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VsphereProviderConfig {
  /**
  * If set, VMware vSphere client will permit unverifiable SSL certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs#allow_unverified_ssl VsphereProvider#allow_unverified_ssl}
  */
  readonly allowUnverifiedSsl?: boolean | cdktf.IResolvable;
  /**
  * API timeout in minutes (Default: 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs#api_timeout VsphereProvider#api_timeout}
  */
  readonly apiTimeout?: number;
  /**
  * govmomi debug
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs#client_debug VsphereProvider#client_debug}
  */
  readonly clientDebug?: boolean | cdktf.IResolvable;
  /**
  * govmomi debug path for debug
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs#client_debug_path VsphereProvider#client_debug_path}
  */
  readonly clientDebugPath?: string;
  /**
  * govmomi debug path for a single run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs#client_debug_path_run VsphereProvider#client_debug_path_run}
  */
  readonly clientDebugPathRun?: string;
  /**
  * The user password for vSphere API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs#password VsphereProvider#password}
  */
  readonly password: string;
  /**
  * Persist vSphere client sessions to disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs#persist_session VsphereProvider#persist_session}
  */
  readonly persistSession?: boolean | cdktf.IResolvable;
  /**
  * The directory to save vSphere REST API sessions to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs#rest_session_path VsphereProvider#rest_session_path}
  */
  readonly restSessionPath?: string;
  /**
  * The user name for vSphere API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs#user VsphereProvider#user}
  */
  readonly user: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs#vcenter_server VsphereProvider#vcenter_server}
  */
  readonly vcenterServer?: string;
  /**
  * Keep alive interval for the VIM session in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs#vim_keep_alive VsphereProvider#vim_keep_alive}
  */
  readonly vimKeepAlive?: number;
  /**
  * The directory to save vSphere SOAP API sessions to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs#vim_session_path VsphereProvider#vim_session_path}
  */
  readonly vimSessionPath?: string;
  /**
  * The vSphere Server name for vSphere API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs#vsphere_server VsphereProvider#vsphere_server}
  */
  readonly vsphereServer?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs#alias VsphereProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs vsphere}
*/
export class VsphereProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vsphere";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VsphereProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VsphereProvider to import
  * @param importFromId The id of the existing VsphereProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VsphereProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vsphere", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs vsphere} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VsphereProviderConfig
  */
  public constructor(scope: Construct, id: string, config: VsphereProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'vsphere',
      terraformGeneratorMetadata: {
        providerName: 'vsphere',
        providerVersion: '2.5.1',
        providerVersionConstraint: '~> 2.2'
      },
      terraformProviderSource: 'vsphere'
    });
    this._allowUnverifiedSsl = config.allowUnverifiedSsl;
    this._apiTimeout = config.apiTimeout;
    this._clientDebug = config.clientDebug;
    this._clientDebugPath = config.clientDebugPath;
    this._clientDebugPathRun = config.clientDebugPathRun;
    this._password = config.password;
    this._persistSession = config.persistSession;
    this._restSessionPath = config.restSessionPath;
    this._user = config.user;
    this._vcenterServer = config.vcenterServer;
    this._vimKeepAlive = config.vimKeepAlive;
    this._vimSessionPath = config.vimSessionPath;
    this._vsphereServer = config.vsphereServer;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unverified_ssl - computed: false, optional: true, required: false
  private _allowUnverifiedSsl?: boolean | cdktf.IResolvable; 
  public get allowUnverifiedSsl() {
    return this._allowUnverifiedSsl;
  }
  public set allowUnverifiedSsl(value: boolean | cdktf.IResolvable | undefined) {
    this._allowUnverifiedSsl = value;
  }
  public resetAllowUnverifiedSsl() {
    this._allowUnverifiedSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnverifiedSslInput() {
    return this._allowUnverifiedSsl;
  }

  // api_timeout - computed: false, optional: true, required: false
  private _apiTimeout?: number; 
  public get apiTimeout() {
    return this._apiTimeout;
  }
  public set apiTimeout(value: number | undefined) {
    this._apiTimeout = value;
  }
  public resetApiTimeout() {
    this._apiTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTimeoutInput() {
    return this._apiTimeout;
  }

  // client_debug - computed: false, optional: true, required: false
  private _clientDebug?: boolean | cdktf.IResolvable; 
  public get clientDebug() {
    return this._clientDebug;
  }
  public set clientDebug(value: boolean | cdktf.IResolvable | undefined) {
    this._clientDebug = value;
  }
  public resetClientDebug() {
    this._clientDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDebugInput() {
    return this._clientDebug;
  }

  // client_debug_path - computed: false, optional: true, required: false
  private _clientDebugPath?: string; 
  public get clientDebugPath() {
    return this._clientDebugPath;
  }
  public set clientDebugPath(value: string | undefined) {
    this._clientDebugPath = value;
  }
  public resetClientDebugPath() {
    this._clientDebugPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDebugPathInput() {
    return this._clientDebugPath;
  }

  // client_debug_path_run - computed: false, optional: true, required: false
  private _clientDebugPathRun?: string; 
  public get clientDebugPathRun() {
    return this._clientDebugPathRun;
  }
  public set clientDebugPathRun(value: string | undefined) {
    this._clientDebugPathRun = value;
  }
  public resetClientDebugPathRun() {
    this._clientDebugPathRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDebugPathRunInput() {
    return this._clientDebugPathRun;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // persist_session - computed: false, optional: true, required: false
  private _persistSession?: boolean | cdktf.IResolvable; 
  public get persistSession() {
    return this._persistSession;
  }
  public set persistSession(value: boolean | cdktf.IResolvable | undefined) {
    this._persistSession = value;
  }
  public resetPersistSession() {
    this._persistSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSessionInput() {
    return this._persistSession;
  }

  // rest_session_path - computed: false, optional: true, required: false
  private _restSessionPath?: string; 
  public get restSessionPath() {
    return this._restSessionPath;
  }
  public set restSessionPath(value: string | undefined) {
    this._restSessionPath = value;
  }
  public resetRestSessionPath() {
    this._restSessionPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restSessionPathInput() {
    return this._restSessionPath;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this._user;
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // vcenter_server - computed: false, optional: true, required: false
  private _vcenterServer?: string; 
  public get vcenterServer() {
    return this._vcenterServer;
  }
  public set vcenterServer(value: string | undefined) {
    this._vcenterServer = value;
  }
  public resetVcenterServer() {
    this._vcenterServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterServerInput() {
    return this._vcenterServer;
  }

  // vim_keep_alive - computed: false, optional: true, required: false
  private _vimKeepAlive?: number; 
  public get vimKeepAlive() {
    return this._vimKeepAlive;
  }
  public set vimKeepAlive(value: number | undefined) {
    this._vimKeepAlive = value;
  }
  public resetVimKeepAlive() {
    this._vimKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vimKeepAliveInput() {
    return this._vimKeepAlive;
  }

  // vim_session_path - computed: false, optional: true, required: false
  private _vimSessionPath?: string; 
  public get vimSessionPath() {
    return this._vimSessionPath;
  }
  public set vimSessionPath(value: string | undefined) {
    this._vimSessionPath = value;
  }
  public resetVimSessionPath() {
    this._vimSessionPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vimSessionPathInput() {
    return this._vimSessionPath;
  }

  // vsphere_server - computed: false, optional: true, required: false
  private _vsphereServer?: string; 
  public get vsphereServer() {
    return this._vsphereServer;
  }
  public set vsphereServer(value: string | undefined) {
    this._vsphereServer = value;
  }
  public resetVsphereServer() {
    this._vsphereServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereServerInput() {
    return this._vsphereServer;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_unverified_ssl: cdktf.booleanToTerraform(this._allowUnverifiedSsl),
      api_timeout: cdktf.numberToTerraform(this._apiTimeout),
      client_debug: cdktf.booleanToTerraform(this._clientDebug),
      client_debug_path: cdktf.stringToTerraform(this._clientDebugPath),
      client_debug_path_run: cdktf.stringToTerraform(this._clientDebugPathRun),
      password: cdktf.stringToTerraform(this._password),
      persist_session: cdktf.booleanToTerraform(this._persistSession),
      rest_session_path: cdktf.stringToTerraform(this._restSessionPath),
      user: cdktf.stringToTerraform(this._user),
      vcenter_server: cdktf.stringToTerraform(this._vcenterServer),
      vim_keep_alive: cdktf.numberToTerraform(this._vimKeepAlive),
      vim_session_path: cdktf.stringToTerraform(this._vimSessionPath),
      vsphere_server: cdktf.stringToTerraform(this._vsphereServer),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
