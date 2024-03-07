# `dataVsphereHostVgpuProfile` Submodule <a name="`dataVsphereHostVgpuProfile` Submodule" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereHostVgpuProfile <a name="DataVsphereHostVgpuProfile" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/data-sources/host_vgpu_profile vsphere_host_vgpu_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherehostvgpuprofile"

datavspherehostvgpuprofile.NewDataVsphereHostVgpuProfile(scope Construct, id *string, config DataVsphereHostVgpuProfileConfig) DataVsphereHostVgpuProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig">DataVsphereHostVgpuProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig">DataVsphereHostVgpuProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetNameRegex">ResetNameRegex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetId"></a>

```go
func ResetId()
```

##### `ResetNameRegex` <a name="ResetNameRegex" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetNameRegex"></a>

```go
func ResetNameRegex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVsphereHostVgpuProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherehostvgpuprofile"

datavspherehostvgpuprofile.DataVsphereHostVgpuProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherehostvgpuprofile"

datavspherehostvgpuprofile.DataVsphereHostVgpuProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherehostvgpuprofile"

datavspherehostvgpuprofile.DataVsphereHostVgpuProfile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherehostvgpuprofile"

datavspherehostvgpuprofile.DataVsphereHostVgpuProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataVsphereHostVgpuProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVsphereHostVgpuProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVsphereHostVgpuProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/data-sources/host_vgpu_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereHostVgpuProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.vgpuProfiles">VgpuProfiles</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList">DataVsphereHostVgpuProfileVgpuProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.hostIdInput">HostIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.nameRegexInput">NameRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.hostId">HostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.nameRegex">NameRegex</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `VgpuProfiles`<sup>Required</sup> <a name="VgpuProfiles" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.vgpuProfiles"></a>

```go
func VgpuProfiles() DataVsphereHostVgpuProfileVgpuProfilesList
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList">DataVsphereHostVgpuProfileVgpuProfilesList</a>

---

##### `HostIdInput`<sup>Optional</sup> <a name="HostIdInput" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.hostIdInput"></a>

```go
func HostIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameRegexInput`<sup>Optional</sup> <a name="NameRegexInput" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.nameRegexInput"></a>

```go
func NameRegexInput() *string
```

- *Type:* *string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.hostId"></a>

```go
func HostId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NameRegex`<sup>Required</sup> <a name="NameRegex" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.nameRegex"></a>

```go
func NameRegex() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereHostVgpuProfileConfig <a name="DataVsphereHostVgpuProfileConfig" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherehostvgpuprofile"

&datavspherehostvgpuprofile.DataVsphereHostVgpuProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	HostId: *string,
	Id: *string,
	NameRegex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.hostId">HostId</a></code> | <code>*string</code> | The Managed Object ID of the host system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/data-sources/host_vgpu_profile#id DataVsphereHostVgpuProfile#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.nameRegex">NameRegex</a></code> | <code>*string</code> | A regular expression used to match the vGPU Profile on the host. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.hostId"></a>

```go
HostId *string
```

- *Type:* *string

The Managed Object ID of the host system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/data-sources/host_vgpu_profile#host_id DataVsphereHostVgpuProfile#host_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/data-sources/host_vgpu_profile#id DataVsphereHostVgpuProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NameRegex`<sup>Optional</sup> <a name="NameRegex" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.nameRegex"></a>

```go
NameRegex *string
```

- *Type:* *string

A regular expression used to match the vGPU Profile on the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/data-sources/host_vgpu_profile#name_regex DataVsphereHostVgpuProfile#name_regex}

---

### DataVsphereHostVgpuProfileVgpuProfiles <a name="DataVsphereHostVgpuProfileVgpuProfiles" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfiles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherehostvgpuprofile"

&datavspherehostvgpuprofile.DataVsphereHostVgpuProfileVgpuProfiles {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataVsphereHostVgpuProfileVgpuProfilesList <a name="DataVsphereHostVgpuProfileVgpuProfilesList" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherehostvgpuprofile"

datavspherehostvgpuprofile.NewDataVsphereHostVgpuProfileVgpuProfilesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataVsphereHostVgpuProfileVgpuProfilesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.get"></a>

```go
func Get(index *f64) DataVsphereHostVgpuProfileVgpuProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataVsphereHostVgpuProfileVgpuProfilesOutputReference <a name="DataVsphereHostVgpuProfileVgpuProfilesOutputReference" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/datavspherehostvgpuprofile"

datavspherehostvgpuprofile.NewDataVsphereHostVgpuProfileVgpuProfilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataVsphereHostVgpuProfileVgpuProfilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.diskSnapshotSupported">DiskSnapshotSupported</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.memorySnapshotSupported">MemorySnapshotSupported</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.migrateSupported">MigrateSupported</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.suspendSupported">SuspendSupported</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.vgpu">Vgpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfiles">DataVsphereHostVgpuProfileVgpuProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskSnapshotSupported`<sup>Required</sup> <a name="DiskSnapshotSupported" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.diskSnapshotSupported"></a>

```go
func DiskSnapshotSupported() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MemorySnapshotSupported`<sup>Required</sup> <a name="MemorySnapshotSupported" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.memorySnapshotSupported"></a>

```go
func MemorySnapshotSupported() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MigrateSupported`<sup>Required</sup> <a name="MigrateSupported" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.migrateSupported"></a>

```go
func MigrateSupported() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SuspendSupported`<sup>Required</sup> <a name="SuspendSupported" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.suspendSupported"></a>

```go
func SuspendSupported() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Vgpu`<sup>Required</sup> <a name="Vgpu" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.vgpu"></a>

```go
func Vgpu() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataVsphereHostVgpuProfileVgpuProfiles
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfiles">DataVsphereHostVgpuProfileVgpuProfiles</a>

---



