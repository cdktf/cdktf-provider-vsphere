# `dataVsphereGuestOsCustomization` Submodule <a name="`dataVsphereGuestOsCustomization` Submodule" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereGuestOsCustomization <a name="DataVsphereGuestOsCustomization" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/guest_os_customization vsphere_guest_os_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

datavsphereguestoscustomization.NewDataVsphereGuestOsCustomization(scope Construct, id *string, config DataVsphereGuestOsCustomizationConfig) DataVsphereGuestOsCustomization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig">DataVsphereGuestOsCustomizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig">DataVsphereGuestOsCustomizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVsphereGuestOsCustomization resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

datavsphereguestoscustomization.DataVsphereGuestOsCustomization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

datavsphereguestoscustomization.DataVsphereGuestOsCustomization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

datavsphereguestoscustomization.DataVsphereGuestOsCustomization_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

datavsphereguestoscustomization.DataVsphereGuestOsCustomization_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataVsphereGuestOsCustomization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVsphereGuestOsCustomization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVsphereGuestOsCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/guest_os_customization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereGuestOsCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.changeVersion">ChangeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.lastUpdateTime">LastUpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList">DataVsphereGuestOsCustomizationSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ChangeVersion`<sup>Required</sup> <a name="ChangeVersion" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.changeVersion"></a>

```go
func ChangeVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.lastUpdateTime"></a>

```go
func LastUpdateTime() *string
```

- *Type:* *string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.spec"></a>

```go
func Spec() DataVsphereGuestOsCustomizationSpecList
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList">DataVsphereGuestOsCustomizationSpecList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereGuestOsCustomizationConfig <a name="DataVsphereGuestOsCustomizationConfig" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

&datavsphereguestoscustomization.DataVsphereGuestOsCustomizationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the customization specification is the unique identifier per vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/guest_os_customization#id DataVsphereGuestOsCustomization#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the customization specification is the unique identifier per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/guest_os_customization#name DataVsphereGuestOsCustomization#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/guest_os_customization#id DataVsphereGuestOsCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataVsphereGuestOsCustomizationSpec <a name="DataVsphereGuestOsCustomizationSpec" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

&datavsphereguestoscustomization.DataVsphereGuestOsCustomizationSpec {

}
```


### DataVsphereGuestOsCustomizationSpecLinuxOptions <a name="DataVsphereGuestOsCustomizationSpecLinuxOptions" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

&datavsphereguestoscustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions {

}
```


### DataVsphereGuestOsCustomizationSpecNetworkInterface <a name="DataVsphereGuestOsCustomizationSpecNetworkInterface" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

&datavsphereguestoscustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface {

}
```


### DataVsphereGuestOsCustomizationSpecWindowsOptions <a name="DataVsphereGuestOsCustomizationSpecWindowsOptions" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

&datavsphereguestoscustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataVsphereGuestOsCustomizationSpecLinuxOptionsList <a name="DataVsphereGuestOsCustomizationSpecLinuxOptionsList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

datavsphereguestoscustomization.NewDataVsphereGuestOsCustomizationSpecLinuxOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataVsphereGuestOsCustomizationSpecLinuxOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.get"></a>

```go
func Get(index *f64) DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference <a name="DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

datavsphereguestoscustomization.NewDataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtc">HwClockUtc</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptText">ScriptText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions">DataVsphereGuestOsCustomizationSpecLinuxOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `HwClockUtc`<sup>Required</sup> <a name="HwClockUtc" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtc"></a>

```go
func HwClockUtc() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ScriptText`<sup>Required</sup> <a name="ScriptText" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptText"></a>

```go
func ScriptText() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataVsphereGuestOsCustomizationSpecLinuxOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions">DataVsphereGuestOsCustomizationSpecLinuxOptions</a>

---


### DataVsphereGuestOsCustomizationSpecList <a name="DataVsphereGuestOsCustomizationSpecList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

datavsphereguestoscustomization.NewDataVsphereGuestOsCustomizationSpecList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataVsphereGuestOsCustomizationSpecList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.get"></a>

```go
func Get(index *f64) DataVsphereGuestOsCustomizationSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataVsphereGuestOsCustomizationSpecNetworkInterfaceList <a name="DataVsphereGuestOsCustomizationSpecNetworkInterfaceList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

datavsphereguestoscustomization.NewDataVsphereGuestOsCustomizationSpecNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataVsphereGuestOsCustomizationSpecNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.get"></a>

```go
func Get(index *f64) DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference <a name="DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

datavsphereguestoscustomization.NewDataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomain">DnsDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerList">DnsServerList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Netmask">Ipv4Netmask</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Netmask">Ipv6Netmask</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface">DataVsphereGuestOsCustomizationSpecNetworkInterface</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsDomain`<sup>Required</sup> <a name="DnsDomain" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomain"></a>

```go
func DnsDomain() *string
```

- *Type:* *string

---

##### `DnsServerList`<sup>Required</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerList"></a>

```go
func DnsServerList() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Address"></a>

```go
func Ipv4Address() *string
```

- *Type:* *string

---

##### `Ipv4Netmask`<sup>Required</sup> <a name="Ipv4Netmask" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Netmask"></a>

```go
func Ipv4Netmask() *f64
```

- *Type:* *f64

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `Ipv6Netmask`<sup>Required</sup> <a name="Ipv6Netmask" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Netmask"></a>

```go
func Ipv6Netmask() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataVsphereGuestOsCustomizationSpecNetworkInterface
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface">DataVsphereGuestOsCustomizationSpecNetworkInterface</a>

---


### DataVsphereGuestOsCustomizationSpecOutputReference <a name="DataVsphereGuestOsCustomizationSpecOutputReference" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

datavsphereguestoscustomization.NewDataVsphereGuestOsCustomizationSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataVsphereGuestOsCustomizationSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.dnsServerList">DnsServerList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.dnsSuffixList">DnsSuffixList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.linuxOptions">LinuxOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList">DataVsphereGuestOsCustomizationSpecLinuxOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList">DataVsphereGuestOsCustomizationSpecNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.windowsOptions">WindowsOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList">DataVsphereGuestOsCustomizationSpecWindowsOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.windowsSysprepText">WindowsSysprepText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpec">DataVsphereGuestOsCustomizationSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsServerList`<sup>Required</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.dnsServerList"></a>

```go
func DnsServerList() *[]*string
```

- *Type:* *[]*string

---

##### `DnsSuffixList`<sup>Required</sup> <a name="DnsSuffixList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.dnsSuffixList"></a>

```go
func DnsSuffixList() *[]*string
```

- *Type:* *[]*string

---

##### `LinuxOptions`<sup>Required</sup> <a name="LinuxOptions" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.linuxOptions"></a>

```go
func LinuxOptions() DataVsphereGuestOsCustomizationSpecLinuxOptionsList
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList">DataVsphereGuestOsCustomizationSpecLinuxOptionsList</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.networkInterface"></a>

```go
func NetworkInterface() DataVsphereGuestOsCustomizationSpecNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList">DataVsphereGuestOsCustomizationSpecNetworkInterfaceList</a>

---

##### `WindowsOptions`<sup>Required</sup> <a name="WindowsOptions" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.windowsOptions"></a>

```go
func WindowsOptions() DataVsphereGuestOsCustomizationSpecWindowsOptionsList
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList">DataVsphereGuestOsCustomizationSpecWindowsOptionsList</a>

---

##### `WindowsSysprepText`<sup>Required</sup> <a name="WindowsSysprepText" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.windowsSysprepText"></a>

```go
func WindowsSysprepText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataVsphereGuestOsCustomizationSpec
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpec">DataVsphereGuestOsCustomizationSpec</a>

---


### DataVsphereGuestOsCustomizationSpecWindowsOptionsList <a name="DataVsphereGuestOsCustomizationSpecWindowsOptionsList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

datavsphereguestoscustomization.NewDataVsphereGuestOsCustomizationSpecWindowsOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataVsphereGuestOsCustomizationSpecWindowsOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.get"></a>

```go
func Get(index *f64) DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference <a name="DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavsphereguestoscustomization"

datavsphereguestoscustomization.NewDataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogon">AutoLogon</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCount">AutoLogonCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerName">ComputerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPassword">DomainAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUser">DomainAdminUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomain">JoinDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandList">RunOnceCommandList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZone">TimeZone</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroup">Workgroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions">DataVsphereGuestOsCustomizationSpecWindowsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `AutoLogon`<sup>Required</sup> <a name="AutoLogon" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogon"></a>

```go
func AutoLogon() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutoLogonCount`<sup>Required</sup> <a name="AutoLogonCount" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCount"></a>

```go
func AutoLogonCount() *f64
```

- *Type:* *f64

---

##### `ComputerName`<sup>Required</sup> <a name="ComputerName" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerName"></a>

```go
func ComputerName() *string
```

- *Type:* *string

---

##### `DomainAdminPassword`<sup>Required</sup> <a name="DomainAdminPassword" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPassword"></a>

```go
func DomainAdminPassword() *string
```

- *Type:* *string

---

##### `DomainAdminUser`<sup>Required</sup> <a name="DomainAdminUser" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUser"></a>

```go
func DomainAdminUser() *string
```

- *Type:* *string

---

##### `JoinDomain`<sup>Required</sup> <a name="JoinDomain" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomain"></a>

```go
func JoinDomain() *string
```

- *Type:* *string

---

##### `RunOnceCommandList`<sup>Required</sup> <a name="RunOnceCommandList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandList"></a>

```go
func RunOnceCommandList() *[]*string
```

- *Type:* *[]*string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZone"></a>

```go
func TimeZone() *f64
```

- *Type:* *f64

---

##### `Workgroup`<sup>Required</sup> <a name="Workgroup" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroup"></a>

```go
func Workgroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataVsphereGuestOsCustomizationSpecWindowsOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions">DataVsphereGuestOsCustomizationSpecWindowsOptions</a>

---



