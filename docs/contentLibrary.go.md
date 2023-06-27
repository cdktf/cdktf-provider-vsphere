# `vsphere_content_library`

Refer to the Terraform Registory for docs: [`vsphere_content_library`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library).

# `contentLibrary` Submodule <a name="`contentLibrary` Submodule" id="@cdktf/provider-vsphere.contentLibrary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContentLibrary <a name="ContentLibrary" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library vsphere_content_library}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/contentlibrary"

contentlibrary.NewContentLibrary(scope Construct, id *string, config ContentLibraryConfig) ContentLibrary
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig">ContentLibraryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig">ContentLibraryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication">PutPublication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription">PutSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetPublication">ResetPublication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetSubscription">ResetSubscription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPublication` <a name="PutPublication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication"></a>

```go
func PutPublication(value ContentLibraryPublication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putPublication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

---

##### `PutSubscription` <a name="PutSubscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription"></a>

```go
func PutSubscription(value ContentLibrarySubscription)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.putSubscription.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetId"></a>

```go
func ResetId()
```

##### `ResetPublication` <a name="ResetPublication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetPublication"></a>

```go
func ResetPublication()
```

##### `ResetSubscription` <a name="ResetSubscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.resetSubscription"></a>

```go
func ResetSubscription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/contentlibrary"

contentlibrary.ContentLibrary_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/contentlibrary"

contentlibrary.ContentLibrary_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/contentlibrary"

contentlibrary.ContentLibrary_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publication">Publication</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference">ContentLibraryPublicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscription">Subscription</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference">ContentLibrarySubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publicationInput">PublicationInput</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBackingInput">StorageBackingInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscriptionInput">SubscriptionInput</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBacking">StorageBacking</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Publication`<sup>Required</sup> <a name="Publication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publication"></a>

```go
func Publication() ContentLibraryPublicationOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference">ContentLibraryPublicationOutputReference</a>

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscription"></a>

```go
func Subscription() ContentLibrarySubscriptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference">ContentLibrarySubscriptionOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicationInput`<sup>Optional</sup> <a name="PublicationInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.publicationInput"></a>

```go
func PublicationInput() ContentLibraryPublication
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

---

##### `StorageBackingInput`<sup>Optional</sup> <a name="StorageBackingInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBackingInput"></a>

```go
func StorageBackingInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubscriptionInput`<sup>Optional</sup> <a name="SubscriptionInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.subscriptionInput"></a>

```go
func SubscriptionInput() ContentLibrarySubscription
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StorageBacking`<sup>Required</sup> <a name="StorageBacking" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.storageBacking"></a>

```go
func StorageBacking() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrary.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContentLibraryConfig <a name="ContentLibraryConfig" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/contentlibrary"

&contentlibrary.ContentLibraryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	StorageBacking: *[]*string,
	Description: *string,
	Id: *string,
	Publication: github.com/cdktf/cdktf-provider-vsphere-go/vsphere.contentLibrary.ContentLibraryPublication,
	Subscription: github.com/cdktf/cdktf-provider-vsphere-go/vsphere.contentLibrary.ContentLibrarySubscription,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.name">Name</a></code> | <code>*string</code> | The name of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.storageBacking">StorageBacking</a></code> | <code>*[]*string</code> | The name of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.description">Description</a></code> | <code>*string</code> | Optional description of the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#id ContentLibrary#id}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.publication">Publication</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a></code> | publication block. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.subscription">Subscription</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a></code> | subscription block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#name ContentLibrary#name}

---

##### `StorageBacking`<sup>Required</sup> <a name="StorageBacking" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.storageBacking"></a>

```go
StorageBacking *[]*string
```

- *Type:* *[]*string

The name of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#storage_backing ContentLibrary#storage_backing}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional description of the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#description ContentLibrary#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#id ContentLibrary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Publication`<sup>Optional</sup> <a name="Publication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.publication"></a>

```go
Publication ContentLibraryPublication
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

publication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#publication ContentLibrary#publication}

---

##### `Subscription`<sup>Optional</sup> <a name="Subscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryConfig.property.subscription"></a>

```go
Subscription ContentLibrarySubscription
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#subscription ContentLibrary#subscription}

---

### ContentLibraryPublication <a name="ContentLibraryPublication" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/contentlibrary"

&contentlibrary.ContentLibraryPublication {
	AuthenticationMethod: *string,
	Password: *string,
	Published: interface{},
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.authenticationMethod">AuthenticationMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#password ContentLibrary#password}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.published">Published</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#published ContentLibrary#published}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#username ContentLibrary#username}. |

---

##### `AuthenticationMethod`<sup>Optional</sup> <a name="AuthenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.authenticationMethod"></a>

```go
AuthenticationMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#password ContentLibrary#password}.

---

##### `Published`<sup>Optional</sup> <a name="Published" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.published"></a>

```go
Published interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#published ContentLibrary#published}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#username ContentLibrary#username}.

---

### ContentLibrarySubscription <a name="ContentLibrarySubscription" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/contentlibrary"

&contentlibrary.ContentLibrarySubscription {
	AuthenticationMethod: *string,
	AutomaticSync: interface{},
	OnDemand: interface{},
	Password: *string,
	SubscriptionUrl: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.authenticationMethod">AuthenticationMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.automaticSync">AutomaticSync</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#automatic_sync ContentLibrary#automatic_sync}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.onDemand">OnDemand</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#on_demand ContentLibrary#on_demand}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#password ContentLibrary#password}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.subscriptionUrl">SubscriptionUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#subscription_url ContentLibrary#subscription_url}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#username ContentLibrary#username}. |

---

##### `AuthenticationMethod`<sup>Optional</sup> <a name="AuthenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.authenticationMethod"></a>

```go
AuthenticationMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#authentication_method ContentLibrary#authentication_method}.

---

##### `AutomaticSync`<sup>Optional</sup> <a name="AutomaticSync" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.automaticSync"></a>

```go
AutomaticSync interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#automatic_sync ContentLibrary#automatic_sync}.

---

##### `OnDemand`<sup>Optional</sup> <a name="OnDemand" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.onDemand"></a>

```go
OnDemand interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#on_demand ContentLibrary#on_demand}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#password ContentLibrary#password}.

---

##### `SubscriptionUrl`<sup>Optional</sup> <a name="SubscriptionUrl" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.subscriptionUrl"></a>

```go
SubscriptionUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#subscription_url ContentLibrary#subscription_url}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/content_library#username ContentLibrary#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContentLibraryPublicationOutputReference <a name="ContentLibraryPublicationOutputReference" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/contentlibrary"

contentlibrary.NewContentLibraryPublicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContentLibraryPublicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetAuthenticationMethod">ResetAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPublished">ResetPublished</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationMethod` <a name="ResetAuthenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetAuthenticationMethod"></a>

```go
func ResetAuthenticationMethod()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPublished` <a name="ResetPublished" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetPublished"></a>

```go
func ResetPublished()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishUrl">PublishUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethodInput">AuthenticationMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishedInput">PublishedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethod">AuthenticationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.published">Published</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublishUrl`<sup>Required</sup> <a name="PublishUrl" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishUrl"></a>

```go
func PublishUrl() *string
```

- *Type:* *string

---

##### `AuthenticationMethodInput`<sup>Optional</sup> <a name="AuthenticationMethodInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethodInput"></a>

```go
func AuthenticationMethodInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PublishedInput`<sup>Optional</sup> <a name="PublishedInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.publishedInput"></a>

```go
func PublishedInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `AuthenticationMethod`<sup>Required</sup> <a name="AuthenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.authenticationMethod"></a>

```go
func AuthenticationMethod() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Published`<sup>Required</sup> <a name="Published" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.published"></a>

```go
func Published() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublicationOutputReference.property.internalValue"></a>

```go
func InternalValue() ContentLibraryPublication
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibraryPublication">ContentLibraryPublication</a>

---


### ContentLibrarySubscriptionOutputReference <a name="ContentLibrarySubscriptionOutputReference" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/contentlibrary"

contentlibrary.NewContentLibrarySubscriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContentLibrarySubscriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAuthenticationMethod">ResetAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAutomaticSync">ResetAutomaticSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetOnDemand">ResetOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetSubscriptionUrl">ResetSubscriptionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationMethod` <a name="ResetAuthenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAuthenticationMethod"></a>

```go
func ResetAuthenticationMethod()
```

##### `ResetAutomaticSync` <a name="ResetAutomaticSync" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetAutomaticSync"></a>

```go
func ResetAutomaticSync()
```

##### `ResetOnDemand` <a name="ResetOnDemand" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetOnDemand"></a>

```go
func ResetOnDemand()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetSubscriptionUrl` <a name="ResetSubscriptionUrl" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetSubscriptionUrl"></a>

```go
func ResetSubscriptionUrl()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethodInput">AuthenticationMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSyncInput">AutomaticSyncInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemandInput">OnDemandInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrlInput">SubscriptionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethod">AuthenticationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSync">AutomaticSync</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemand">OnDemand</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrl">SubscriptionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationMethodInput`<sup>Optional</sup> <a name="AuthenticationMethodInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethodInput"></a>

```go
func AuthenticationMethodInput() *string
```

- *Type:* *string

---

##### `AutomaticSyncInput`<sup>Optional</sup> <a name="AutomaticSyncInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSyncInput"></a>

```go
func AutomaticSyncInput() interface{}
```

- *Type:* interface{}

---

##### `OnDemandInput`<sup>Optional</sup> <a name="OnDemandInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemandInput"></a>

```go
func OnDemandInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `SubscriptionUrlInput`<sup>Optional</sup> <a name="SubscriptionUrlInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrlInput"></a>

```go
func SubscriptionUrlInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `AuthenticationMethod`<sup>Required</sup> <a name="AuthenticationMethod" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.authenticationMethod"></a>

```go
func AuthenticationMethod() *string
```

- *Type:* *string

---

##### `AutomaticSync`<sup>Required</sup> <a name="AutomaticSync" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.automaticSync"></a>

```go
func AutomaticSync() interface{}
```

- *Type:* interface{}

---

##### `OnDemand`<sup>Required</sup> <a name="OnDemand" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.onDemand"></a>

```go
func OnDemand() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `SubscriptionUrl`<sup>Required</sup> <a name="SubscriptionUrl" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.subscriptionUrl"></a>

```go
func SubscriptionUrl() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() ContentLibrarySubscription
```

- *Type:* <a href="#@cdktf/provider-vsphere.contentLibrary.ContentLibrarySubscription">ContentLibrarySubscription</a>

---



