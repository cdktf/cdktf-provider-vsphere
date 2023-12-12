# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-vsphere.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VsphereProvider <a name="VsphereProvider" id="@cdktf/provider-vsphere.provider.VsphereProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs vsphere}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import provider

provider.VsphereProvider(
  scope: Construct,
  id: str,
  password: str,
  user: str,
  alias: str = None,
  allow_unverified_ssl: typing.Union[bool, IResolvable] = None,
  api_timeout: typing.Union[int, float] = None,
  client_debug: typing.Union[bool, IResolvable] = None,
  client_debug_path: str = None,
  client_debug_path_run: str = None,
  persist_session: typing.Union[bool, IResolvable] = None,
  rest_session_path: str = None,
  vcenter_server: str = None,
  vim_keep_alive: typing.Union[int, float] = None,
  vim_session_path: str = None,
  vsphere_server: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.password">password</a></code> | <code>str</code> | The user password for vSphere API operations. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.user">user</a></code> | <code>str</code> | The user name for vSphere API operations. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.allowUnverifiedSsl">allow_unverified_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, VMware vSphere client will permit unverifiable SSL certificates. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.apiTimeout">api_timeout</a></code> | <code>typing.Union[int, float]</code> | API timeout in minutes (Default: 5). |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.clientDebug">client_debug</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | govmomi debug. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.clientDebugPath">client_debug_path</a></code> | <code>str</code> | govmomi debug path for debug. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.clientDebugPathRun">client_debug_path_run</a></code> | <code>str</code> | govmomi debug path for a single run. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.persistSession">persist_session</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Persist vSphere client sessions to disk. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.restSessionPath">rest_session_path</a></code> | <code>str</code> | The directory to save vSphere REST API sessions to. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.vcenterServer">vcenter_server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#vcenter_server VsphereProvider#vcenter_server}. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.vimKeepAlive">vim_keep_alive</a></code> | <code>typing.Union[int, float]</code> | Keep alive interval for the VIM session in minutes. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.vimSessionPath">vim_session_path</a></code> | <code>str</code> | The directory to save vSphere SOAP API sessions to. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.vsphereServer">vsphere_server</a></code> | <code>str</code> | The vSphere Server name for vSphere API operations. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.password"></a>

- *Type:* str

The user password for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#password VsphereProvider#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.user"></a>

- *Type:* str

The user name for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#user VsphereProvider#user}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#alias VsphereProvider#alias}

---

##### `allow_unverified_ssl`<sup>Optional</sup> <a name="allow_unverified_ssl" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.allowUnverifiedSsl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, VMware vSphere client will permit unverifiable SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#allow_unverified_ssl VsphereProvider#allow_unverified_ssl}

---

##### `api_timeout`<sup>Optional</sup> <a name="api_timeout" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.apiTimeout"></a>

- *Type:* typing.Union[int, float]

API timeout in minutes (Default: 5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#api_timeout VsphereProvider#api_timeout}

---

##### `client_debug`<sup>Optional</sup> <a name="client_debug" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.clientDebug"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

govmomi debug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#client_debug VsphereProvider#client_debug}

---

##### `client_debug_path`<sup>Optional</sup> <a name="client_debug_path" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.clientDebugPath"></a>

- *Type:* str

govmomi debug path for debug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#client_debug_path VsphereProvider#client_debug_path}

---

##### `client_debug_path_run`<sup>Optional</sup> <a name="client_debug_path_run" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.clientDebugPathRun"></a>

- *Type:* str

govmomi debug path for a single run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#client_debug_path_run VsphereProvider#client_debug_path_run}

---

##### `persist_session`<sup>Optional</sup> <a name="persist_session" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.persistSession"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Persist vSphere client sessions to disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#persist_session VsphereProvider#persist_session}

---

##### `rest_session_path`<sup>Optional</sup> <a name="rest_session_path" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.restSessionPath"></a>

- *Type:* str

The directory to save vSphere REST API sessions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#rest_session_path VsphereProvider#rest_session_path}

---

##### `vcenter_server`<sup>Optional</sup> <a name="vcenter_server" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.vcenterServer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#vcenter_server VsphereProvider#vcenter_server}.

---

##### `vim_keep_alive`<sup>Optional</sup> <a name="vim_keep_alive" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.vimKeepAlive"></a>

- *Type:* typing.Union[int, float]

Keep alive interval for the VIM session in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#vim_keep_alive VsphereProvider#vim_keep_alive}

---

##### `vim_session_path`<sup>Optional</sup> <a name="vim_session_path" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.vimSessionPath"></a>

- *Type:* str

The directory to save vSphere SOAP API sessions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#vim_session_path VsphereProvider#vim_session_path}

---

##### `vsphere_server`<sup>Optional</sup> <a name="vsphere_server" id="@cdktf/provider-vsphere.provider.VsphereProvider.Initializer.parameter.vsphereServer"></a>

- *Type:* str

The vSphere Server name for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#vsphere_server VsphereProvider#vsphere_server}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetAllowUnverifiedSsl">reset_allow_unverified_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetApiTimeout">reset_api_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebug">reset_client_debug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebugPath">reset_client_debug_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebugPathRun">reset_client_debug_path_run</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetPersistSession">reset_persist_session</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetRestSessionPath">reset_rest_session_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetVcenterServer">reset_vcenter_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetVimKeepAlive">reset_vim_keep_alive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetVimSessionPath">reset_vim_session_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.resetVsphereServer">reset_vsphere_server</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.provider.VsphereProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.provider.VsphereProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.provider.VsphereProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.provider.VsphereProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.provider.VsphereProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.provider.VsphereProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.provider.VsphereProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.provider.VsphereProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_allow_unverified_ssl` <a name="reset_allow_unverified_ssl" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetAllowUnverifiedSsl"></a>

```python
def reset_allow_unverified_ssl() -> None
```

##### `reset_api_timeout` <a name="reset_api_timeout" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetApiTimeout"></a>

```python
def reset_api_timeout() -> None
```

##### `reset_client_debug` <a name="reset_client_debug" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebug"></a>

```python
def reset_client_debug() -> None
```

##### `reset_client_debug_path` <a name="reset_client_debug_path" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebugPath"></a>

```python
def reset_client_debug_path() -> None
```

##### `reset_client_debug_path_run` <a name="reset_client_debug_path_run" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetClientDebugPathRun"></a>

```python
def reset_client_debug_path_run() -> None
```

##### `reset_persist_session` <a name="reset_persist_session" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetPersistSession"></a>

```python
def reset_persist_session() -> None
```

##### `reset_rest_session_path` <a name="reset_rest_session_path" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetRestSessionPath"></a>

```python
def reset_rest_session_path() -> None
```

##### `reset_vcenter_server` <a name="reset_vcenter_server" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVcenterServer"></a>

```python
def reset_vcenter_server() -> None
```

##### `reset_vim_keep_alive` <a name="reset_vim_keep_alive" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVimKeepAlive"></a>

```python
def reset_vim_keep_alive() -> None
```

##### `reset_vim_session_path` <a name="reset_vim_session_path" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVimSessionPath"></a>

```python
def reset_vim_session_path() -> None
```

##### `reset_vsphere_server` <a name="reset_vsphere_server" id="@cdktf/provider-vsphere.provider.VsphereProvider.resetVsphereServer"></a>

```python
def reset_vsphere_server() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VsphereProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.provider.VsphereProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import provider

provider.VsphereProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.provider.VsphereProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import provider

provider.VsphereProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_vsphere import provider

provider.VsphereProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.provider.VsphereProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import provider

provider.VsphereProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VsphereProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VsphereProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VsphereProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.provider.VsphereProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VsphereProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSslInput">allow_unverified_ssl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeoutInput">api_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugInput">client_debug_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathInput">client_debug_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRunInput">client_debug_path_run_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSessionInput">persist_session_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPathInput">rest_session_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServerInput">vcenter_server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAliveInput">vim_keep_alive_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPathInput">vim_session_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServerInput">vsphere_server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSsl">allow_unverified_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeout">api_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebug">client_debug</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPath">client_debug_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRun">client_debug_path_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSession">persist_session</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPath">rest_session_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServer">vcenter_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAlive">vim_keep_alive</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPath">vim_session_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServer">vsphere_server</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `allow_unverified_ssl_input`<sup>Optional</sup> <a name="allow_unverified_ssl_input" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSslInput"></a>

```python
allow_unverified_ssl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `api_timeout_input`<sup>Optional</sup> <a name="api_timeout_input" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeoutInput"></a>

```python
api_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_debug_input`<sup>Optional</sup> <a name="client_debug_input" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugInput"></a>

```python
client_debug_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_debug_path_input`<sup>Optional</sup> <a name="client_debug_path_input" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathInput"></a>

```python
client_debug_path_input: str
```

- *Type:* str

---

##### `client_debug_path_run_input`<sup>Optional</sup> <a name="client_debug_path_run_input" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRunInput"></a>

```python
client_debug_path_run_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `persist_session_input`<sup>Optional</sup> <a name="persist_session_input" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSessionInput"></a>

```python
persist_session_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rest_session_path_input`<sup>Optional</sup> <a name="rest_session_path_input" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPathInput"></a>

```python
rest_session_path_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `vcenter_server_input`<sup>Optional</sup> <a name="vcenter_server_input" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServerInput"></a>

```python
vcenter_server_input: str
```

- *Type:* str

---

##### `vim_keep_alive_input`<sup>Optional</sup> <a name="vim_keep_alive_input" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAliveInput"></a>

```python
vim_keep_alive_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vim_session_path_input`<sup>Optional</sup> <a name="vim_session_path_input" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPathInput"></a>

```python
vim_session_path_input: str
```

- *Type:* str

---

##### `vsphere_server_input`<sup>Optional</sup> <a name="vsphere_server_input" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServerInput"></a>

```python
vsphere_server_input: str
```

- *Type:* str

---

##### `allow_unverified_ssl`<sup>Optional</sup> <a name="allow_unverified_ssl" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.allowUnverifiedSsl"></a>

```python
allow_unverified_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `api_timeout`<sup>Optional</sup> <a name="api_timeout" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.apiTimeout"></a>

```python
api_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_debug`<sup>Optional</sup> <a name="client_debug" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebug"></a>

```python
client_debug: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_debug_path`<sup>Optional</sup> <a name="client_debug_path" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPath"></a>

```python
client_debug_path: str
```

- *Type:* str

---

##### `client_debug_path_run`<sup>Optional</sup> <a name="client_debug_path_run" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.clientDebugPathRun"></a>

```python
client_debug_path_run: str
```

- *Type:* str

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `persist_session`<sup>Optional</sup> <a name="persist_session" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.persistSession"></a>

```python
persist_session: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rest_session_path`<sup>Optional</sup> <a name="rest_session_path" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.restSessionPath"></a>

```python
rest_session_path: str
```

- *Type:* str

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `vcenter_server`<sup>Optional</sup> <a name="vcenter_server" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vcenterServer"></a>

```python
vcenter_server: str
```

- *Type:* str

---

##### `vim_keep_alive`<sup>Optional</sup> <a name="vim_keep_alive" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimKeepAlive"></a>

```python
vim_keep_alive: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vim_session_path`<sup>Optional</sup> <a name="vim_session_path" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vimSessionPath"></a>

```python
vim_session_path: str
```

- *Type:* str

---

##### `vsphere_server`<sup>Optional</sup> <a name="vsphere_server" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.vsphereServer"></a>

```python
vsphere_server: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.provider.VsphereProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VsphereProviderConfig <a name="VsphereProviderConfig" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import provider

provider.VsphereProviderConfig(
  password: str,
  user: str,
  alias: str = None,
  allow_unverified_ssl: typing.Union[bool, IResolvable] = None,
  api_timeout: typing.Union[int, float] = None,
  client_debug: typing.Union[bool, IResolvable] = None,
  client_debug_path: str = None,
  client_debug_path_run: str = None,
  persist_session: typing.Union[bool, IResolvable] = None,
  rest_session_path: str = None,
  vcenter_server: str = None,
  vim_keep_alive: typing.Union[int, float] = None,
  vim_session_path: str = None,
  vsphere_server: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.password">password</a></code> | <code>str</code> | The user password for vSphere API operations. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.user">user</a></code> | <code>str</code> | The user name for vSphere API operations. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.allowUnverifiedSsl">allow_unverified_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, VMware vSphere client will permit unverifiable SSL certificates. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.apiTimeout">api_timeout</a></code> | <code>typing.Union[int, float]</code> | API timeout in minutes (Default: 5). |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebug">client_debug</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | govmomi debug. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPath">client_debug_path</a></code> | <code>str</code> | govmomi debug path for debug. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPathRun">client_debug_path_run</a></code> | <code>str</code> | govmomi debug path for a single run. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.persistSession">persist_session</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Persist vSphere client sessions to disk. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.restSessionPath">rest_session_path</a></code> | <code>str</code> | The directory to save vSphere REST API sessions to. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vcenterServer">vcenter_server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#vcenter_server VsphereProvider#vcenter_server}. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimKeepAlive">vim_keep_alive</a></code> | <code>typing.Union[int, float]</code> | Keep alive interval for the VIM session in minutes. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimSessionPath">vim_session_path</a></code> | <code>str</code> | The directory to save vSphere SOAP API sessions to. |
| <code><a href="#@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vsphereServer">vsphere_server</a></code> | <code>str</code> | The vSphere Server name for vSphere API operations. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The user password for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#password VsphereProvider#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.user"></a>

```python
user: str
```

- *Type:* str

The user name for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#user VsphereProvider#user}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#alias VsphereProvider#alias}

---

##### `allow_unverified_ssl`<sup>Optional</sup> <a name="allow_unverified_ssl" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.allowUnverifiedSsl"></a>

```python
allow_unverified_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, VMware vSphere client will permit unverifiable SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#allow_unverified_ssl VsphereProvider#allow_unverified_ssl}

---

##### `api_timeout`<sup>Optional</sup> <a name="api_timeout" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.apiTimeout"></a>

```python
api_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

API timeout in minutes (Default: 5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#api_timeout VsphereProvider#api_timeout}

---

##### `client_debug`<sup>Optional</sup> <a name="client_debug" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebug"></a>

```python
client_debug: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

govmomi debug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#client_debug VsphereProvider#client_debug}

---

##### `client_debug_path`<sup>Optional</sup> <a name="client_debug_path" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPath"></a>

```python
client_debug_path: str
```

- *Type:* str

govmomi debug path for debug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#client_debug_path VsphereProvider#client_debug_path}

---

##### `client_debug_path_run`<sup>Optional</sup> <a name="client_debug_path_run" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.clientDebugPathRun"></a>

```python
client_debug_path_run: str
```

- *Type:* str

govmomi debug path for a single run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#client_debug_path_run VsphereProvider#client_debug_path_run}

---

##### `persist_session`<sup>Optional</sup> <a name="persist_session" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.persistSession"></a>

```python
persist_session: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Persist vSphere client sessions to disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#persist_session VsphereProvider#persist_session}

---

##### `rest_session_path`<sup>Optional</sup> <a name="rest_session_path" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.restSessionPath"></a>

```python
rest_session_path: str
```

- *Type:* str

The directory to save vSphere REST API sessions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#rest_session_path VsphereProvider#rest_session_path}

---

##### `vcenter_server`<sup>Optional</sup> <a name="vcenter_server" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vcenterServer"></a>

```python
vcenter_server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#vcenter_server VsphereProvider#vcenter_server}.

---

##### `vim_keep_alive`<sup>Optional</sup> <a name="vim_keep_alive" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimKeepAlive"></a>

```python
vim_keep_alive: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Keep alive interval for the VIM session in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#vim_keep_alive VsphereProvider#vim_keep_alive}

---

##### `vim_session_path`<sup>Optional</sup> <a name="vim_session_path" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vimSessionPath"></a>

```python
vim_session_path: str
```

- *Type:* str

The directory to save vSphere SOAP API sessions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#vim_session_path VsphereProvider#vim_session_path}

---

##### `vsphere_server`<sup>Optional</sup> <a name="vsphere_server" id="@cdktf/provider-vsphere.provider.VsphereProviderConfig.property.vsphereServer"></a>

```python
vsphere_server: str
```

- *Type:* str

The vSphere Server name for vSphere API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs#vsphere_server VsphereProvider#vsphere_server}

---



