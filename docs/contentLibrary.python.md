# `vsphere_content_library`

Refer to the Terraform Registory for docs: [`vsphere_content_library`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library).

# `contentLibrary` Submodule <a name="`contentLibrary` Submodule" id="@cdktf/provider-vsphere.contentLibrary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContentLibrary <a name="ContentLibrary" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library vsphere_content_library}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import content_library

contentLibrary.ContentLibrary(
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
  storage_backing: typing.List[str],
  description: str = None,
  id: str = None,
  publication: ContentLibraryPublication = None,
  subscription: ContentLibrarySubscription = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.storageBacking">storage_backing</a></code> | <code>typing.List[str]</code> | The name of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional description of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#id ContentLibrary#id}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.publication">publication</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a></code> | publication block. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.subscription">subscription</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a></code> | subscription block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.name"></a>

- *Type:* str

The name of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#name ContentLibrary#name}

---

##### `storage_backing`<sup>Required</sup> <a name="storage_backing" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.storageBacking"></a>

- *Type:* typing.List[str]

The name of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#storage_backing ContentLibrary#storage_backing}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.description"></a>

- *Type:* str

Optional description of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#description ContentLibrary#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#id ContentLibrary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publication`<sup>Optional</sup> <a name="publication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.publication"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

publication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#publication ContentLibrary#publication}

---

##### `subscription`<sup>Optional</sup> <a name="subscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.subscription"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#subscription ContentLibrary#subscription}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication">put_publication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription">put_subscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetPublication">reset_publication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetSubscription">reset_subscription</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_publication` <a name="put_publication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication"></a>

```python
def put_publication(
  authentication_method: str = None,
  password: str = None,
  published: typing.Union[bool, IResolvable] = None,
  username: str = None
) -> None
```

###### `authentication_method`<sup>Optional</sup> <a name="authentication_method" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication.parameter.authenticationMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#password ContentLibrary#password}.

---

###### `published`<sup>Optional</sup> <a name="published" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication.parameter.published"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#published ContentLibrary#published}.

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#username ContentLibrary#username}.

---

##### `put_subscription` <a name="put_subscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription"></a>

```python
def put_subscription(
  authentication_method: str = None,
  automatic_sync: typing.Union[bool, IResolvable] = None,
  on_demand: typing.Union[bool, IResolvable] = None,
  password: str = None,
  subscription_url: str = None,
  username: str = None
) -> None
```

###### `authentication_method`<sup>Optional</sup> <a name="authentication_method" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription.parameter.authenticationMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}.

---

###### `automatic_sync`<sup>Optional</sup> <a name="automatic_sync" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription.parameter.automaticSync"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#automatic_sync ContentLibrary#automatic_sync}.

---

###### `on_demand`<sup>Optional</sup> <a name="on_demand" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription.parameter.onDemand"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#on_demand ContentLibrary#on_demand}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#password ContentLibrary#password}.

---

###### `subscription_url`<sup>Optional</sup> <a name="subscription_url" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription.parameter.subscriptionUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#subscription_url ContentLibrary#subscription_url}.

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#username ContentLibrary#username}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_publication` <a name="reset_publication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetPublication"></a>

```python
def reset_publication() -> None
```

##### `reset_subscription` <a name="reset_subscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetSubscription"></a>

```python
def reset_subscription() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import content_library

contentLibrary.ContentLibrary.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import content_library

contentLibrary.ContentLibrary.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import content_library

contentLibrary.ContentLibrary.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publication">publication</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference">ContentLibraryPublicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscription">subscription</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference">ContentLibrarySubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publicationInput">publication_input</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBackingInput">storage_backing_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscriptionInput">subscription_input</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBacking">storage_backing</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `publication`<sup>Required</sup> <a name="publication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publication"></a>

```python
publication: ContentLibraryPublicationOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference">ContentLibraryPublicationOutputReference</a>

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscription"></a>

```python
subscription: ContentLibrarySubscriptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference">ContentLibrarySubscriptionOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `publication_input`<sup>Optional</sup> <a name="publication_input" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publicationInput"></a>

```python
publication_input: ContentLibraryPublication
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

---

##### `storage_backing_input`<sup>Optional</sup> <a name="storage_backing_input" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBackingInput"></a>

```python
storage_backing_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subscription_input`<sup>Optional</sup> <a name="subscription_input" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscriptionInput"></a>

```python
subscription_input: ContentLibrarySubscription
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_backing`<sup>Required</sup> <a name="storage_backing" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBacking"></a>

```python
storage_backing: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContentLibraryConfig <a name="ContentLibraryConfig" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import content_library

contentLibrary.ContentLibraryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  storage_backing: typing.List[str],
  description: str = None,
  id: str = None,
  publication: ContentLibraryPublication = None,
  subscription: ContentLibrarySubscription = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.name">name</a></code> | <code>str</code> | The name of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.storageBacking">storage_backing</a></code> | <code>typing.List[str]</code> | The name of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.description">description</a></code> | <code>str</code> | Optional description of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#id ContentLibrary#id}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.publication">publication</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a></code> | publication block. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.subscription">subscription</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a></code> | subscription block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#name ContentLibrary#name}

---

##### `storage_backing`<sup>Required</sup> <a name="storage_backing" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.storageBacking"></a>

```python
storage_backing: typing.List[str]
```

- *Type:* typing.List[str]

The name of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#storage_backing ContentLibrary#storage_backing}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional description of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#description ContentLibrary#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#id ContentLibrary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publication`<sup>Optional</sup> <a name="publication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.publication"></a>

```python
publication: ContentLibraryPublication
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

publication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#publication ContentLibrary#publication}

---

##### `subscription`<sup>Optional</sup> <a name="subscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.subscription"></a>

```python
subscription: ContentLibrarySubscription
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#subscription ContentLibrary#subscription}

---

### ContentLibraryPublication <a name="ContentLibraryPublication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import content_library

contentLibrary.ContentLibraryPublication(
  authentication_method: str = None,
  password: str = None,
  published: typing.Union[bool, IResolvable] = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.authenticationMethod">authentication_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#password ContentLibrary#password}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.published">published</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#published ContentLibrary#published}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#username ContentLibrary#username}. |

---

##### `authentication_method`<sup>Optional</sup> <a name="authentication_method" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.authenticationMethod"></a>

```python
authentication_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#password ContentLibrary#password}.

---

##### `published`<sup>Optional</sup> <a name="published" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.published"></a>

```python
published: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#published ContentLibrary#published}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#username ContentLibrary#username}.

---

### ContentLibrarySubscription <a name="ContentLibrarySubscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import content_library

contentLibrary.ContentLibrarySubscription(
  authentication_method: str = None,
  automatic_sync: typing.Union[bool, IResolvable] = None,
  on_demand: typing.Union[bool, IResolvable] = None,
  password: str = None,
  subscription_url: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.authenticationMethod">authentication_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.automaticSync">automatic_sync</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#automatic_sync ContentLibrary#automatic_sync}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.onDemand">on_demand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#on_demand ContentLibrary#on_demand}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#password ContentLibrary#password}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.subscriptionUrl">subscription_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#subscription_url ContentLibrary#subscription_url}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#username ContentLibrary#username}. |

---

##### `authentication_method`<sup>Optional</sup> <a name="authentication_method" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.authenticationMethod"></a>

```python
authentication_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}.

---

##### `automatic_sync`<sup>Optional</sup> <a name="automatic_sync" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.automaticSync"></a>

```python
automatic_sync: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#automatic_sync ContentLibrary#automatic_sync}.

---

##### `on_demand`<sup>Optional</sup> <a name="on_demand" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.onDemand"></a>

```python
on_demand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#on_demand ContentLibrary#on_demand}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#password ContentLibrary#password}.

---

##### `subscription_url`<sup>Optional</sup> <a name="subscription_url" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.subscriptionUrl"></a>

```python
subscription_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#subscription_url ContentLibrary#subscription_url}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/content_library#username ContentLibrary#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContentLibraryPublicationOutputReference <a name="ContentLibraryPublicationOutputReference" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import content_library

contentLibrary.ContentLibraryPublicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetAuthenticationMethod">reset_authentication_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPublished">reset_published</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_method` <a name="reset_authentication_method" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetAuthenticationMethod"></a>

```python
def reset_authentication_method() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_published` <a name="reset_published" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPublished"></a>

```python
def reset_published() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishUrl">publish_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethodInput">authentication_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishedInput">published_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethod">authentication_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.published">published</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `publish_url`<sup>Required</sup> <a name="publish_url" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishUrl"></a>

```python
publish_url: str
```

- *Type:* str

---

##### `authentication_method_input`<sup>Optional</sup> <a name="authentication_method_input" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethodInput"></a>

```python
authentication_method_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `published_input`<sup>Optional</sup> <a name="published_input" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishedInput"></a>

```python
published_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `authentication_method`<sup>Required</sup> <a name="authentication_method" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethod"></a>

```python
authentication_method: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.published"></a>

```python
published: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.internalValue"></a>

```python
internal_value: ContentLibraryPublication
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

---


### ContentLibrarySubscriptionOutputReference <a name="ContentLibrarySubscriptionOutputReference" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import content_library

contentLibrary.ContentLibrarySubscriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAuthenticationMethod">reset_authentication_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAutomaticSync">reset_automatic_sync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetOnDemand">reset_on_demand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetSubscriptionUrl">reset_subscription_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_method` <a name="reset_authentication_method" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAuthenticationMethod"></a>

```python
def reset_authentication_method() -> None
```

##### `reset_automatic_sync` <a name="reset_automatic_sync" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAutomaticSync"></a>

```python
def reset_automatic_sync() -> None
```

##### `reset_on_demand` <a name="reset_on_demand" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetOnDemand"></a>

```python
def reset_on_demand() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_subscription_url` <a name="reset_subscription_url" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetSubscriptionUrl"></a>

```python
def reset_subscription_url() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethodInput">authentication_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSyncInput">automatic_sync_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemandInput">on_demand_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrlInput">subscription_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethod">authentication_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSync">automatic_sync</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemand">on_demand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrl">subscription_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_method_input`<sup>Optional</sup> <a name="authentication_method_input" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethodInput"></a>

```python
authentication_method_input: str
```

- *Type:* str

---

##### `automatic_sync_input`<sup>Optional</sup> <a name="automatic_sync_input" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSyncInput"></a>

```python
automatic_sync_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `on_demand_input`<sup>Optional</sup> <a name="on_demand_input" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemandInput"></a>

```python
on_demand_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `subscription_url_input`<sup>Optional</sup> <a name="subscription_url_input" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrlInput"></a>

```python
subscription_url_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `authentication_method`<sup>Required</sup> <a name="authentication_method" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethod"></a>

```python
authentication_method: str
```

- *Type:* str

---

##### `automatic_sync`<sup>Required</sup> <a name="automatic_sync" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSync"></a>

```python
automatic_sync: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `on_demand`<sup>Required</sup> <a name="on_demand" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemand"></a>

```python
on_demand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `subscription_url`<sup>Required</sup> <a name="subscription_url" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrl"></a>

```python
subscription_url: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.internalValue"></a>

```python
internal_value: ContentLibrarySubscription
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

---



