# `vsphere_nas_datastore`

Refer to the Terraform Registory for docs: [`vsphere_nas_datastore`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore).

# `nasDatastore` Submodule <a name="`nasDatastore` Submodule" id="@cdktf/provider-vsphere.nasDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NasDatastore <a name="NasDatastore" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore vsphere_nas_datastore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import nas_datastore

nasDatastore.NasDatastore(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host_system_ids: typing.List[str],
  name: str,
  remote_hosts: typing.List[str],
  remote_path: str,
  access_mode: str = None,
  custom_attributes: typing.Mapping[str] = None,
  datastore_cluster_id: str = None,
  folder: str = None,
  id: str = None,
  security_type: str = None,
  tags: typing.List[str] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.hostSystemIds">host_system_ids</a></code> | <code>typing.List[str]</code> | The managed object IDs of the hosts to mount the datastore on. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the datastore. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.remoteHosts">remote_hosts</a></code> | <code>typing.List[str]</code> | The hostnames or IP addresses of the remote server or servers. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.remotePath">remote_path</a></code> | <code>str</code> | The remote path of the mount point. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.accessMode">access_mode</a></code> | <code>str</code> | Access mode for the mount point. Can be one of readOnly or readWrite. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.datastoreClusterId">datastore_cluster_id</a></code> | <code>str</code> | The managed object ID of the datastore cluster to place the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.folder">folder</a></code> | <code>str</code> | The path to the datastore folder to put the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#id NasDatastore#id}. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.securityType">security_type</a></code> | <code>str</code> | The security type to use. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of NAS volume. Can be one of NFS (to denote v3) or NFS41 (to denote NFS v4.1). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_system_ids`<sup>Required</sup> <a name="host_system_ids" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.hostSystemIds"></a>

- *Type:* typing.List[str]

The managed object IDs of the hosts to mount the datastore on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#host_system_ids NasDatastore#host_system_ids}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.name"></a>

- *Type:* str

The name of the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#name NasDatastore#name}

---

##### `remote_hosts`<sup>Required</sup> <a name="remote_hosts" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.remoteHosts"></a>

- *Type:* typing.List[str]

The hostnames or IP addresses of the remote server or servers.

Only one element should be present for NFS v3 but multiple can be present for NFS v4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#remote_hosts NasDatastore#remote_hosts}

---

##### `remote_path`<sup>Required</sup> <a name="remote_path" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.remotePath"></a>

- *Type:* str

The remote path of the mount point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#remote_path NasDatastore#remote_path}

---

##### `access_mode`<sup>Optional</sup> <a name="access_mode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.accessMode"></a>

- *Type:* str

Access mode for the mount point. Can be one of readOnly or readWrite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#access_mode NasDatastore#access_mode}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.customAttributes"></a>

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#custom_attributes NasDatastore#custom_attributes}

---

##### `datastore_cluster_id`<sup>Optional</sup> <a name="datastore_cluster_id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.datastoreClusterId"></a>

- *Type:* str

The managed object ID of the datastore cluster to place the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#datastore_cluster_id NasDatastore#datastore_cluster_id}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.folder"></a>

- *Type:* str

The path to the datastore folder to put the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#folder NasDatastore#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#id NasDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_type`<sup>Optional</sup> <a name="security_type" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.securityType"></a>

- *Type:* str

The security type to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#security_type NasDatastore#security_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#tags NasDatastore#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.Initializer.parameter.type"></a>

- *Type:* str

The type of NAS volume. Can be one of NFS (to denote v3) or NFS41 (to denote NFS v4.1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#type NasDatastore#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetAccessMode">reset_access_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetDatastoreClusterId">reset_datastore_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetFolder">reset_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetSecurityType">reset_security_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_access_mode` <a name="reset_access_mode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetAccessMode"></a>

```python
def reset_access_mode() -> None
```

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_datastore_cluster_id` <a name="reset_datastore_cluster_id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetDatastoreClusterId"></a>

```python
def reset_datastore_cluster_id() -> None
```

##### `reset_folder` <a name="reset_folder" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetFolder"></a>

```python
def reset_folder() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_security_type` <a name="reset_security_type" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetSecurityType"></a>

```python
def reset_security_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import nas_datastore

nasDatastore.NasDatastore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import nas_datastore

nasDatastore.NasDatastore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import nas_datastore

nasDatastore.NasDatastore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessible">accessible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.freeSpace">free_space</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.maintenanceMode">maintenance_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.multipleHostAccess">multiple_host_access</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.protocolEndpoint">protocol_endpoint</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.uncommittedSpace">uncommitted_space</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessModeInput">access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.customAttributesInput">custom_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.datastoreClusterIdInput">datastore_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.hostSystemIdsInput">host_system_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remoteHostsInput">remote_hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remotePathInput">remote_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.securityTypeInput">security_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessMode">access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.datastoreClusterId">datastore_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.hostSystemIds">host_system_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remoteHosts">remote_hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remotePath">remote_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.securityType">security_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accessible`<sup>Required</sup> <a name="accessible" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessible"></a>

```python
accessible: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `free_space`<sup>Required</sup> <a name="free_space" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.freeSpace"></a>

```python
free_space: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maintenance_mode`<sup>Required</sup> <a name="maintenance_mode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.maintenanceMode"></a>

```python
maintenance_mode: str
```

- *Type:* str

---

##### `multiple_host_access`<sup>Required</sup> <a name="multiple_host_access" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.multipleHostAccess"></a>

```python
multiple_host_access: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `protocol_endpoint`<sup>Required</sup> <a name="protocol_endpoint" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.protocolEndpoint"></a>

```python
protocol_endpoint: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `uncommitted_space`<sup>Required</sup> <a name="uncommitted_space" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.uncommittedSpace"></a>

```python
uncommitted_space: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `access_mode_input`<sup>Optional</sup> <a name="access_mode_input" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessModeInput"></a>

```python
access_mode_input: str
```

- *Type:* str

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.customAttributesInput"></a>

```python
custom_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `datastore_cluster_id_input`<sup>Optional</sup> <a name="datastore_cluster_id_input" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.datastoreClusterIdInput"></a>

```python
datastore_cluster_id_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `host_system_ids_input`<sup>Optional</sup> <a name="host_system_ids_input" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.hostSystemIdsInput"></a>

```python
host_system_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `remote_hosts_input`<sup>Optional</sup> <a name="remote_hosts_input" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remoteHostsInput"></a>

```python
remote_hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `remote_path_input`<sup>Optional</sup> <a name="remote_path_input" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remotePathInput"></a>

```python
remote_path_input: str
```

- *Type:* str

---

##### `security_type_input`<sup>Optional</sup> <a name="security_type_input" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.securityTypeInput"></a>

```python
security_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `datastore_cluster_id`<sup>Required</sup> <a name="datastore_cluster_id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.datastoreClusterId"></a>

```python
datastore_cluster_id: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `host_system_ids`<sup>Required</sup> <a name="host_system_ids" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.hostSystemIds"></a>

```python
host_system_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remote_hosts`<sup>Required</sup> <a name="remote_hosts" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remoteHosts"></a>

```python
remote_hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `remote_path`<sup>Required</sup> <a name="remote_path" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.remotePath"></a>

```python
remote_path: str
```

- *Type:* str

---

##### `security_type`<sup>Required</sup> <a name="security_type" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.securityType"></a>

```python
security_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.nasDatastore.NasDatastore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NasDatastoreConfig <a name="NasDatastoreConfig" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import nas_datastore

nasDatastore.NasDatastoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host_system_ids: typing.List[str],
  name: str,
  remote_hosts: typing.List[str],
  remote_path: str,
  access_mode: str = None,
  custom_attributes: typing.Mapping[str] = None,
  datastore_cluster_id: str = None,
  folder: str = None,
  id: str = None,
  security_type: str = None,
  tags: typing.List[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.hostSystemIds">host_system_ids</a></code> | <code>typing.List[str]</code> | The managed object IDs of the hosts to mount the datastore on. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.name">name</a></code> | <code>str</code> | The name of the datastore. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.remoteHosts">remote_hosts</a></code> | <code>typing.List[str]</code> | The hostnames or IP addresses of the remote server or servers. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.remotePath">remote_path</a></code> | <code>str</code> | The remote path of the mount point. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.accessMode">access_mode</a></code> | <code>str</code> | Access mode for the mount point. Can be one of readOnly or readWrite. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.datastoreClusterId">datastore_cluster_id</a></code> | <code>str</code> | The managed object ID of the datastore cluster to place the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.folder">folder</a></code> | <code>str</code> | The path to the datastore folder to put the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#id NasDatastore#id}. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.securityType">security_type</a></code> | <code>str</code> | The security type to use. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.type">type</a></code> | <code>str</code> | The type of NAS volume. Can be one of NFS (to denote v3) or NFS41 (to denote NFS v4.1). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_system_ids`<sup>Required</sup> <a name="host_system_ids" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.hostSystemIds"></a>

```python
host_system_ids: typing.List[str]
```

- *Type:* typing.List[str]

The managed object IDs of the hosts to mount the datastore on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#host_system_ids NasDatastore#host_system_ids}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#name NasDatastore#name}

---

##### `remote_hosts`<sup>Required</sup> <a name="remote_hosts" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.remoteHosts"></a>

```python
remote_hosts: typing.List[str]
```

- *Type:* typing.List[str]

The hostnames or IP addresses of the remote server or servers.

Only one element should be present for NFS v3 but multiple can be present for NFS v4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#remote_hosts NasDatastore#remote_hosts}

---

##### `remote_path`<sup>Required</sup> <a name="remote_path" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.remotePath"></a>

```python
remote_path: str
```

- *Type:* str

The remote path of the mount point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#remote_path NasDatastore#remote_path}

---

##### `access_mode`<sup>Optional</sup> <a name="access_mode" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

Access mode for the mount point. Can be one of readOnly or readWrite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#access_mode NasDatastore#access_mode}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#custom_attributes NasDatastore#custom_attributes}

---

##### `datastore_cluster_id`<sup>Optional</sup> <a name="datastore_cluster_id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.datastoreClusterId"></a>

```python
datastore_cluster_id: str
```

- *Type:* str

The managed object ID of the datastore cluster to place the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#datastore_cluster_id NasDatastore#datastore_cluster_id}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

The path to the datastore folder to put the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#folder NasDatastore#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#id NasDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_type`<sup>Optional</sup> <a name="security_type" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.securityType"></a>

```python
security_type: str
```

- *Type:* str

The security type to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#security_type NasDatastore#security_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#tags NasDatastore#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.nasDatastore.NasDatastoreConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of NAS volume. Can be one of NFS (to denote v3) or NFS41 (to denote NFS v4.1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/nas_datastore#type NasDatastore#type}

---



