# `virtualDisk` Submodule <a name="`virtualDisk` Submodule" id="@cdktf/provider-vsphere.virtualDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDisk <a name="VirtualDisk" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk vsphere_virtual_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualdisk"

virtualdisk.NewVirtualDisk(scope Construct, id *string, config VirtualDiskConfig) VirtualDisk
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig">VirtualDiskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig">VirtualDiskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetAdapterType">ResetAdapterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetCreateDirectories">ResetCreateDirectories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAdapterType` <a name="ResetAdapterType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetAdapterType"></a>

```go
func ResetAdapterType()
```

##### `ResetCreateDirectories` <a name="ResetCreateDirectories" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetCreateDirectories"></a>

```go
func ResetCreateDirectories()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetDatacenter"></a>

```go
func ResetDatacenter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetId"></a>

```go
func ResetId()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualDisk resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualdisk"

virtualdisk.VirtualDisk_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualdisk"

virtualdisk.VirtualDisk_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualdisk"

virtualdisk.VirtualDisk_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualdisk"

virtualdisk.VirtualDisk_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VirtualDisk resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VirtualDisk to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VirtualDisk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VirtualDisk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterTypeInput">AdapterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectoriesInput">CreateDirectoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenterInput">DatacenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastoreInput">DatastoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPathInput">VmdkPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterType">AdapterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectories">CreateDirectories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastore">Datastore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPath">VmdkPath</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdapterTypeInput`<sup>Optional</sup> <a name="AdapterTypeInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterTypeInput"></a>

```go
func AdapterTypeInput() *string
```

- *Type:* *string

---

##### `CreateDirectoriesInput`<sup>Optional</sup> <a name="CreateDirectoriesInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectoriesInput"></a>

```go
func CreateDirectoriesInput() interface{}
```

- *Type:* interface{}

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenterInput"></a>

```go
func DatacenterInput() *string
```

- *Type:* *string

---

##### `DatastoreInput`<sup>Optional</sup> <a name="DatastoreInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastoreInput"></a>

```go
func DatastoreInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VmdkPathInput`<sup>Optional</sup> <a name="VmdkPathInput" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPathInput"></a>

```go
func VmdkPathInput() *string
```

- *Type:* *string

---

##### `AdapterType`<sup>Required</sup> <a name="AdapterType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterType"></a>

```go
func AdapterType() *string
```

- *Type:* *string

---

##### `CreateDirectories`<sup>Required</sup> <a name="CreateDirectories" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectories"></a>

```go
func CreateDirectories() interface{}
```

- *Type:* interface{}

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastore"></a>

```go
func Datastore() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VmdkPath`<sup>Required</sup> <a name="VmdkPath" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPath"></a>

```go
func VmdkPath() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDiskConfig <a name="VirtualDiskConfig" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/virtualdisk"

&virtualdisk.VirtualDiskConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Datastore: *string,
	Size: *f64,
	VmdkPath: *string,
	AdapterType: *string,
	CreateDirectories: interface{},
	Datacenter: *string,
	Id: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datastore">Datastore</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk#datastore VirtualDisk#datastore}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk#size VirtualDisk#size}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.vmdkPath">VmdkPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk#vmdk_path VirtualDisk#vmdk_path}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.adapterType">AdapterType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk#adapter_type VirtualDisk#adapter_type}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.createDirectories">CreateDirectories</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk#create_directories VirtualDisk#create_directories}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datacenter">Datacenter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk#datacenter VirtualDisk#datacenter}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk#id VirtualDisk#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk#type VirtualDisk#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datastore"></a>

```go
Datastore *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk#datastore VirtualDisk#datastore}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk#size VirtualDisk#size}.

---

##### `VmdkPath`<sup>Required</sup> <a name="VmdkPath" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.vmdkPath"></a>

```go
VmdkPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk#vmdk_path VirtualDisk#vmdk_path}.

---

##### `AdapterType`<sup>Optional</sup> <a name="AdapterType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.adapterType"></a>

```go
AdapterType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk#adapter_type VirtualDisk#adapter_type}.

---

##### `CreateDirectories`<sup>Optional</sup> <a name="CreateDirectories" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.createDirectories"></a>

```go
CreateDirectories interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk#create_directories VirtualDisk#create_directories}.

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datacenter"></a>

```go
Datacenter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk#datacenter VirtualDisk#datacenter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk#id VirtualDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/virtual_disk#type VirtualDisk#type}.

---



