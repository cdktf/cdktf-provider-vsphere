# `vsphere_vmfs_datastore`

Refer to the Terraform Registory for docs: [`vsphere_vmfs_datastore`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vmfs_datastore).

# `vmfsDatastore` Submodule <a name="`vmfsDatastore` Submodule" id="@cdktf/provider-vsphere.vmfsDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmfsDatastore <a name="VmfsDatastore" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vmfs_datastore vsphere_vmfs_datastore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v7/vmfsdatastore"

vmfsdatastore.NewVmfsDatastore(scope Construct, id *string, config VmfsDatastoreConfig) VmfsDatastore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig">VmfsDatastoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig">VmfsDatastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetDatastoreClusterId">ResetDatastoreClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetCustomAttributes"></a>

```go
func ResetCustomAttributes()
```

##### `ResetDatastoreClusterId` <a name="ResetDatastoreClusterId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetDatastoreClusterId"></a>

```go
func ResetDatastoreClusterId()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetFolder"></a>

```go
func ResetFolder()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v7/vmfsdatastore"

vmfsdatastore.VmfsDatastore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v7/vmfsdatastore"

vmfsdatastore.VmfsDatastore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v7/vmfsdatastore"

vmfsdatastore.VmfsDatastore_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.accessible">Accessible</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.freeSpace">FreeSpace</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.maintenanceMode">MaintenanceMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.multipleHostAccess">MultipleHostAccess</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.uncommittedSpace">UncommittedSpace</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.customAttributesInput">CustomAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.datastoreClusterIdInput">DatastoreClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.disksInput">DisksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.hostSystemIdInput">HostSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.datastoreClusterId">DatastoreClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.disks">Disks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.hostSystemId">HostSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Accessible`<sup>Required</sup> <a name="Accessible" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.accessible"></a>

```go
func Accessible() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `FreeSpace`<sup>Required</sup> <a name="FreeSpace" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.freeSpace"></a>

```go
func FreeSpace() *f64
```

- *Type:* *f64

---

##### `MaintenanceMode`<sup>Required</sup> <a name="MaintenanceMode" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.maintenanceMode"></a>

```go
func MaintenanceMode() *string
```

- *Type:* *string

---

##### `MultipleHostAccess`<sup>Required</sup> <a name="MultipleHostAccess" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.multipleHostAccess"></a>

```go
func MultipleHostAccess() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UncommittedSpace`<sup>Required</sup> <a name="UncommittedSpace" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.uncommittedSpace"></a>

```go
func UncommittedSpace() *f64
```

- *Type:* *f64

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.customAttributesInput"></a>

```go
func CustomAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatastoreClusterIdInput`<sup>Optional</sup> <a name="DatastoreClusterIdInput" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.datastoreClusterIdInput"></a>

```go
func DatastoreClusterIdInput() *string
```

- *Type:* *string

---

##### `DisksInput`<sup>Optional</sup> <a name="DisksInput" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.disksInput"></a>

```go
func DisksInput() *[]*string
```

- *Type:* *[]*string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `HostSystemIdInput`<sup>Optional</sup> <a name="HostSystemIdInput" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.hostSystemIdInput"></a>

```go
func HostSystemIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.customAttributes"></a>

```go
func CustomAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatastoreClusterId`<sup>Required</sup> <a name="DatastoreClusterId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.datastoreClusterId"></a>

```go
func DatastoreClusterId() *string
```

- *Type:* *string

---

##### `Disks`<sup>Required</sup> <a name="Disks" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.disks"></a>

```go
func Disks() *[]*string
```

- *Type:* *[]*string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.hostSystemId"></a>

```go
func HostSystemId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VmfsDatastoreConfig <a name="VmfsDatastoreConfig" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v7/vmfsdatastore"

&vmfsdatastore.VmfsDatastoreConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Disks: *[]*string,
	HostSystemId: *string,
	Name: *string,
	CustomAttributes: *map[string]*string,
	DatastoreClusterId: *string,
	Folder: *string,
	Id: *string,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.disks">Disks</a></code> | <code>*[]*string</code> | The disks to add to the datastore. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.hostSystemId">HostSystemId</a></code> | <code>*string</code> | The managed object ID of the host to set up the datastore on. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.name">Name</a></code> | <code>*string</code> | The name of the datastore. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.datastoreClusterId">DatastoreClusterId</a></code> | <code>*string</code> | The managed object ID of the datastore cluster to place the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.folder">Folder</a></code> | <code>*string</code> | The path to the datastore folder to put the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vmfs_datastore#id VmfsDatastore#id}. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of tag IDs to apply to this object. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Disks`<sup>Required</sup> <a name="Disks" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.disks"></a>

```go
Disks *[]*string
```

- *Type:* *[]*string

The disks to add to the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vmfs_datastore#disks VmfsDatastore#disks}

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.hostSystemId"></a>

```go
HostSystemId *string
```

- *Type:* *string

The managed object ID of the host to set up the datastore on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vmfs_datastore#host_system_id VmfsDatastore#host_system_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vmfs_datastore#name VmfsDatastore#name}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.customAttributes"></a>

```go
CustomAttributes *map[string]*string
```

- *Type:* *map[string]*string

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vmfs_datastore#custom_attributes VmfsDatastore#custom_attributes}

---

##### `DatastoreClusterId`<sup>Optional</sup> <a name="DatastoreClusterId" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.datastoreClusterId"></a>

```go
DatastoreClusterId *string
```

- *Type:* *string

The managed object ID of the datastore cluster to place the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vmfs_datastore#datastore_cluster_id VmfsDatastore#datastore_cluster_id}

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

The path to the datastore folder to put the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vmfs_datastore#folder VmfsDatastore#folder}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vmfs_datastore#id VmfsDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.3/docs/resources/vmfs_datastore#tags VmfsDatastore#tags}

---



