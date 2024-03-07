# `dataVsphereDatastoreStats` Submodule <a name="`dataVsphereDatastoreStats` Submodule" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereDatastoreStats <a name="DataVsphereDatastoreStats" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/data-sources/datastore_stats vsphere_datastore_stats}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/datavspheredatastorestats"

datavspheredatastorestats.NewDataVsphereDatastoreStats(scope Construct, id *string, config DataVsphereDatastoreStatsConfig) DataVsphereDatastoreStats
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig">DataVsphereDatastoreStatsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig">DataVsphereDatastoreStatsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.resetFreeSpace">ResetFreeSpace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.resetCapacity"></a>

```go
func ResetCapacity()
```

##### `ResetFreeSpace` <a name="ResetFreeSpace" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.resetFreeSpace"></a>

```go
func ResetFreeSpace()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVsphereDatastoreStats resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/datavspheredatastorestats"

datavspheredatastorestats.DataVsphereDatastoreStats_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/datavspheredatastorestats"

datavspheredatastorestats.DataVsphereDatastoreStats_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/datavspheredatastorestats"

datavspheredatastorestats.DataVsphereDatastoreStats_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/datavspheredatastorestats"

datavspheredatastorestats.DataVsphereDatastoreStats_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataVsphereDatastoreStats resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVsphereDatastoreStats to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVsphereDatastoreStats that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/data-sources/datastore_stats#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereDatastoreStats to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.capacityInput">CapacityInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.freeSpaceInput">FreeSpaceInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.capacity">Capacity</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.freeSpace">FreeSpace</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.capacityInput"></a>

```go
func CapacityInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `FreeSpaceInput`<sup>Optional</sup> <a name="FreeSpaceInput" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.freeSpaceInput"></a>

```go
func FreeSpaceInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.capacity"></a>

```go
func Capacity() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `FreeSpace`<sup>Required</sup> <a name="FreeSpace" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.freeSpace"></a>

```go
func FreeSpace() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereDatastoreStatsConfig <a name="DataVsphereDatastoreStatsConfig" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/datavspheredatastorestats"

&datavspheredatastorestats.DataVsphereDatastoreStatsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatacenterId: *string,
	Capacity: *map[string]*string,
	FreeSpace: *map[string]*string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | The managed object ID of the datacenter to get datastores from. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.capacity">Capacity</a></code> | <code>*map[string]*string</code> | The capacity of the datastores. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.freeSpace">FreeSpace</a></code> | <code>*map[string]*string</code> | The free space of the datastores. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/data-sources/datastore_stats#id DataVsphereDatastoreStats#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

The managed object ID of the datacenter to get datastores from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/data-sources/datastore_stats#datacenter_id DataVsphereDatastoreStats#datacenter_id}

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.capacity"></a>

```go
Capacity *map[string]*string
```

- *Type:* *map[string]*string

The capacity of the datastores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/data-sources/datastore_stats#capacity DataVsphereDatastoreStats#capacity}

---

##### `FreeSpace`<sup>Optional</sup> <a name="FreeSpace" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.freeSpace"></a>

```go
FreeSpace *map[string]*string
```

- *Type:* *map[string]*string

The free space of the datastores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/data-sources/datastore_stats#free_space DataVsphereDatastoreStats#free_space}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/data-sources/datastore_stats#id DataVsphereDatastoreStats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



