# `data_vsphere_content_library_item`

Refer to the Terraform Registory for docs: [`data_vsphere_content_library_item`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/content_library_item).

# `dataVsphereContentLibraryItem` Submodule <a name="`dataVsphereContentLibraryItem` Submodule" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereContentLibraryItem <a name="DataVsphereContentLibraryItem" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/content_library_item vsphere_content_library_item}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/datavspherecontentlibraryitem"

datavspherecontentlibraryitem.NewDataVsphereContentLibraryItem(scope Construct, id *string, config DataVsphereContentLibraryItemConfig) DataVsphereContentLibraryItem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig">DataVsphereContentLibraryItemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig">DataVsphereContentLibraryItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/datavspherecontentlibraryitem"

datavspherecontentlibraryitem.DataVsphereContentLibraryItem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/datavspherecontentlibraryitem"

datavspherecontentlibraryitem.DataVsphereContentLibraryItem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/datavspherecontentlibraryitem"

datavspherecontentlibraryitem.DataVsphereContentLibraryItem_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.libraryIdInput">LibraryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.libraryId">LibraryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LibraryIdInput`<sup>Optional</sup> <a name="LibraryIdInput" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.libraryIdInput"></a>

```go
func LibraryIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LibraryId`<sup>Required</sup> <a name="LibraryId" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.libraryId"></a>

```go
func LibraryId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereContentLibraryItemConfig <a name="DataVsphereContentLibraryItemConfig" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v5/datavspherecontentlibraryitem"

&datavspherecontentlibraryitem.DataVsphereContentLibraryItemConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LibraryId: *string,
	Name: *string,
	Type: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.libraryId">LibraryId</a></code> | <code>*string</code> | ID of the content library to contain item. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.name">Name</a></code> | <code>*string</code> | The name of the content library item. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.type">Type</a></code> | <code>*string</code> | Type of content library item. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/content_library_item#id DataVsphereContentLibraryItem#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LibraryId`<sup>Required</sup> <a name="LibraryId" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.libraryId"></a>

```go
LibraryId *string
```

- *Type:* *string

ID of the content library to contain item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/content_library_item#library_id DataVsphereContentLibraryItem#library_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/content_library_item#name DataVsphereContentLibraryItem#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/content_library_item#type DataVsphereContentLibraryItem#type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereContentLibraryItem.DataVsphereContentLibraryItemConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/content_library_item#id DataVsphereContentLibraryItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



