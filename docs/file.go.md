# `file` Submodule <a name="`file` Submodule" id="@cdktf/provider-vsphere.file"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### File <a name="File" id="@cdktf/provider-vsphere.file.File"></a>

Represents a {@link https://www.terraform.io/docs/providers/vsphere/r/file vsphere_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.file.File.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/file"

file.NewFile(scope Construct, id *string, config FileConfig) File
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.file.File.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.file.File.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.file.File.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.file.FileConfig">FileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.file.File.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.file.File.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.file.File.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.file.FileConfig">FileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.file.File.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.file.File.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.file.File.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.file.File.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.file.File.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.resetCreateDirectories">ResetCreateDirectories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.resetSourceDatacenter">ResetSourceDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.resetSourceDatastore">ResetSourceDatastore</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.file.File.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.file.File.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.file.File.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.file.File.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.file.File.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.file.File.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.file.File.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.file.File.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.file.File.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.file.File.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.file.File.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.file.File.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.file.File.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.file.File.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.file.File.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.file.File.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.file.File.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.file.File.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.file.File.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.file.File.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.file.File.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.file.File.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.file.File.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.file.File.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.file.File.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.file.File.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.file.File.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.file.File.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.file.File.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCreateDirectories` <a name="ResetCreateDirectories" id="@cdktf/provider-vsphere.file.File.resetCreateDirectories"></a>

```go
func ResetCreateDirectories()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-vsphere.file.File.resetDatacenter"></a>

```go
func ResetDatacenter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.file.File.resetId"></a>

```go
func ResetId()
```

##### `ResetSourceDatacenter` <a name="ResetSourceDatacenter" id="@cdktf/provider-vsphere.file.File.resetSourceDatacenter"></a>

```go
func ResetSourceDatacenter()
```

##### `ResetSourceDatastore` <a name="ResetSourceDatastore" id="@cdktf/provider-vsphere.file.File.resetSourceDatastore"></a>

```go
func ResetSourceDatastore()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.file.File.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.file.File.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.file.File.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/file"

file.File_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.file.File.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.file.File.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/file"

file.File_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.file.File.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.file.File.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/file"

file.File_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.file.File.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.createDirectoriesInput">CreateDirectoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.datacenterInput">DatacenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.datastoreInput">DatastoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.destinationFileInput">DestinationFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.sourceDatacenterInput">SourceDatacenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.sourceDatastoreInput">SourceDatastoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.sourceFileInput">SourceFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.createDirectories">CreateDirectories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.datastore">Datastore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.destinationFile">DestinationFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.sourceDatacenter">SourceDatacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.sourceDatastore">SourceDatastore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.sourceFile">SourceFile</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.file.File.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.file.File.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.file.File.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.file.File.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.file.File.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.file.File.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.file.File.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.file.File.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.file.File.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.file.File.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.file.File.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.file.File.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.file.File.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.file.File.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateDirectoriesInput`<sup>Optional</sup> <a name="CreateDirectoriesInput" id="@cdktf/provider-vsphere.file.File.property.createDirectoriesInput"></a>

```go
func CreateDirectoriesInput() interface{}
```

- *Type:* interface{}

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-vsphere.file.File.property.datacenterInput"></a>

```go
func DatacenterInput() *string
```

- *Type:* *string

---

##### `DatastoreInput`<sup>Optional</sup> <a name="DatastoreInput" id="@cdktf/provider-vsphere.file.File.property.datastoreInput"></a>

```go
func DatastoreInput() *string
```

- *Type:* *string

---

##### `DestinationFileInput`<sup>Optional</sup> <a name="DestinationFileInput" id="@cdktf/provider-vsphere.file.File.property.destinationFileInput"></a>

```go
func DestinationFileInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.file.File.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SourceDatacenterInput`<sup>Optional</sup> <a name="SourceDatacenterInput" id="@cdktf/provider-vsphere.file.File.property.sourceDatacenterInput"></a>

```go
func SourceDatacenterInput() *string
```

- *Type:* *string

---

##### `SourceDatastoreInput`<sup>Optional</sup> <a name="SourceDatastoreInput" id="@cdktf/provider-vsphere.file.File.property.sourceDatastoreInput"></a>

```go
func SourceDatastoreInput() *string
```

- *Type:* *string

---

##### `SourceFileInput`<sup>Optional</sup> <a name="SourceFileInput" id="@cdktf/provider-vsphere.file.File.property.sourceFileInput"></a>

```go
func SourceFileInput() *string
```

- *Type:* *string

---

##### `CreateDirectories`<sup>Required</sup> <a name="CreateDirectories" id="@cdktf/provider-vsphere.file.File.property.createDirectories"></a>

```go
func CreateDirectories() interface{}
```

- *Type:* interface{}

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-vsphere.file.File.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-vsphere.file.File.property.datastore"></a>

```go
func Datastore() *string
```

- *Type:* *string

---

##### `DestinationFile`<sup>Required</sup> <a name="DestinationFile" id="@cdktf/provider-vsphere.file.File.property.destinationFile"></a>

```go
func DestinationFile() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.file.File.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SourceDatacenter`<sup>Required</sup> <a name="SourceDatacenter" id="@cdktf/provider-vsphere.file.File.property.sourceDatacenter"></a>

```go
func SourceDatacenter() *string
```

- *Type:* *string

---

##### `SourceDatastore`<sup>Required</sup> <a name="SourceDatastore" id="@cdktf/provider-vsphere.file.File.property.sourceDatastore"></a>

```go
func SourceDatastore() *string
```

- *Type:* *string

---

##### `SourceFile`<sup>Required</sup> <a name="SourceFile" id="@cdktf/provider-vsphere.file.File.property.sourceFile"></a>

```go
func SourceFile() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.file.File.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.file.File.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FileConfig <a name="FileConfig" id="@cdktf/provider-vsphere.file.FileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.file.FileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/file"

&file.FileConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Datastore: *string,
	DestinationFile: *string,
	SourceFile: *string,
	CreateDirectories: interface{},
	Datacenter: *string,
	Id: *string,
	SourceDatacenter: *string,
	SourceDatastore: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.file.FileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.FileConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.FileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.FileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.FileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.FileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.FileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.file.FileConfig.property.datastore">Datastore</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/file#datastore File#datastore}. |
| <code><a href="#@cdktf/provider-vsphere.file.FileConfig.property.destinationFile">DestinationFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/file#destination_file File#destination_file}. |
| <code><a href="#@cdktf/provider-vsphere.file.FileConfig.property.sourceFile">SourceFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/file#source_file File#source_file}. |
| <code><a href="#@cdktf/provider-vsphere.file.FileConfig.property.createDirectories">CreateDirectories</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/file#create_directories File#create_directories}. |
| <code><a href="#@cdktf/provider-vsphere.file.FileConfig.property.datacenter">Datacenter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/file#datacenter File#datacenter}. |
| <code><a href="#@cdktf/provider-vsphere.file.FileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/file#id File#id}. |
| <code><a href="#@cdktf/provider-vsphere.file.FileConfig.property.sourceDatacenter">SourceDatacenter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/file#source_datacenter File#source_datacenter}. |
| <code><a href="#@cdktf/provider-vsphere.file.FileConfig.property.sourceDatastore">SourceDatastore</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/file#source_datastore File#source_datastore}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.file.FileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.file.FileConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.file.FileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.file.FileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.file.FileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.file.FileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.file.FileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-vsphere.file.FileConfig.property.datastore"></a>

```go
Datastore *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/file#datastore File#datastore}.

---

##### `DestinationFile`<sup>Required</sup> <a name="DestinationFile" id="@cdktf/provider-vsphere.file.FileConfig.property.destinationFile"></a>

```go
DestinationFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/file#destination_file File#destination_file}.

---

##### `SourceFile`<sup>Required</sup> <a name="SourceFile" id="@cdktf/provider-vsphere.file.FileConfig.property.sourceFile"></a>

```go
SourceFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/file#source_file File#source_file}.

---

##### `CreateDirectories`<sup>Optional</sup> <a name="CreateDirectories" id="@cdktf/provider-vsphere.file.FileConfig.property.createDirectories"></a>

```go
CreateDirectories interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/file#create_directories File#create_directories}.

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-vsphere.file.FileConfig.property.datacenter"></a>

```go
Datacenter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/file#datacenter File#datacenter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.file.FileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/file#id File#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SourceDatacenter`<sup>Optional</sup> <a name="SourceDatacenter" id="@cdktf/provider-vsphere.file.FileConfig.property.sourceDatacenter"></a>

```go
SourceDatacenter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/file#source_datacenter File#source_datacenter}.

---

##### `SourceDatastore`<sup>Optional</sup> <a name="SourceDatastore" id="@cdktf/provider-vsphere.file.FileConfig.property.sourceDatastore"></a>

```go
SourceDatastore *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vsphere/r/file#source_datastore File#source_datastore}.

---


