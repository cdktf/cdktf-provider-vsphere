# `storageDrsVmOverride` Submodule <a name="`storageDrsVmOverride` Submodule" id="@cdktf/provider-vsphere.storageDrsVmOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageDrsVmOverride <a name="StorageDrsVmOverride" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/storage_drs_vm_override vsphere_storage_drs_vm_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/storagedrsvmoverride"

storagedrsvmoverride.NewStorageDrsVmOverride(scope Construct, id *string, config StorageDrsVmOverrideConfig) StorageDrsVmOverride
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig">StorageDrsVmOverrideConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig">StorageDrsVmOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsAutomationLevel">ResetSdrsAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsEnabled">ResetSdrsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsIntraVmAffinity">ResetSdrsIntraVmAffinity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetId"></a>

```go
func ResetId()
```

##### `ResetSdrsAutomationLevel` <a name="ResetSdrsAutomationLevel" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsAutomationLevel"></a>

```go
func ResetSdrsAutomationLevel()
```

##### `ResetSdrsEnabled` <a name="ResetSdrsEnabled" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsEnabled"></a>

```go
func ResetSdrsEnabled()
```

##### `ResetSdrsIntraVmAffinity` <a name="ResetSdrsIntraVmAffinity" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsIntraVmAffinity"></a>

```go
func ResetSdrsIntraVmAffinity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageDrsVmOverride resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/storagedrsvmoverride"

storagedrsvmoverride.StorageDrsVmOverride_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/storagedrsvmoverride"

storagedrsvmoverride.StorageDrsVmOverride_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/storagedrsvmoverride"

storagedrsvmoverride.StorageDrsVmOverride_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/storagedrsvmoverride"

storagedrsvmoverride.StorageDrsVmOverride_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StorageDrsVmOverride resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StorageDrsVmOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StorageDrsVmOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/storage_drs_vm_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StorageDrsVmOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.datastoreClusterIdInput">DatastoreClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsAutomationLevelInput">SdrsAutomationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsEnabledInput">SdrsEnabledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsIntraVmAffinityInput">SdrsIntraVmAffinityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.virtualMachineIdInput">VirtualMachineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.datastoreClusterId">DatastoreClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsAutomationLevel">SdrsAutomationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsEnabled">SdrsEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsIntraVmAffinity">SdrsIntraVmAffinity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.virtualMachineId">VirtualMachineId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatastoreClusterIdInput`<sup>Optional</sup> <a name="DatastoreClusterIdInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.datastoreClusterIdInput"></a>

```go
func DatastoreClusterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SdrsAutomationLevelInput`<sup>Optional</sup> <a name="SdrsAutomationLevelInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsAutomationLevelInput"></a>

```go
func SdrsAutomationLevelInput() *string
```

- *Type:* *string

---

##### `SdrsEnabledInput`<sup>Optional</sup> <a name="SdrsEnabledInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsEnabledInput"></a>

```go
func SdrsEnabledInput() *string
```

- *Type:* *string

---

##### `SdrsIntraVmAffinityInput`<sup>Optional</sup> <a name="SdrsIntraVmAffinityInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsIntraVmAffinityInput"></a>

```go
func SdrsIntraVmAffinityInput() *string
```

- *Type:* *string

---

##### `VirtualMachineIdInput`<sup>Optional</sup> <a name="VirtualMachineIdInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.virtualMachineIdInput"></a>

```go
func VirtualMachineIdInput() *string
```

- *Type:* *string

---

##### `DatastoreClusterId`<sup>Required</sup> <a name="DatastoreClusterId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.datastoreClusterId"></a>

```go
func DatastoreClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SdrsAutomationLevel`<sup>Required</sup> <a name="SdrsAutomationLevel" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsAutomationLevel"></a>

```go
func SdrsAutomationLevel() *string
```

- *Type:* *string

---

##### `SdrsEnabled`<sup>Required</sup> <a name="SdrsEnabled" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsEnabled"></a>

```go
func SdrsEnabled() *string
```

- *Type:* *string

---

##### `SdrsIntraVmAffinity`<sup>Required</sup> <a name="SdrsIntraVmAffinity" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsIntraVmAffinity"></a>

```go
func SdrsIntraVmAffinity() *string
```

- *Type:* *string

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.virtualMachineId"></a>

```go
func VirtualMachineId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageDrsVmOverrideConfig <a name="StorageDrsVmOverrideConfig" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/storagedrsvmoverride"

&storagedrsvmoverride.StorageDrsVmOverrideConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatastoreClusterId: *string,
	VirtualMachineId: *string,
	Id: *string,
	SdrsAutomationLevel: *string,
	SdrsEnabled: *string,
	SdrsIntraVmAffinity: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.datastoreClusterId">DatastoreClusterId</a></code> | <code>*string</code> | The managed object ID of the datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.virtualMachineId">VirtualMachineId</a></code> | <code>*string</code> | The managed object ID of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/storage_drs_vm_override#id StorageDrsVmOverride#id}. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsAutomationLevel">SdrsAutomationLevel</a></code> | <code>*string</code> | Overrides any Storage DRS automation levels for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsEnabled">SdrsEnabled</a></code> | <code>*string</code> | Overrides the default Storage DRS setting for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsIntraVmAffinity">SdrsIntraVmAffinity</a></code> | <code>*string</code> | Overrides the intra-VM affinity setting for this virtual machine. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatastoreClusterId`<sup>Required</sup> <a name="DatastoreClusterId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.datastoreClusterId"></a>

```go
DatastoreClusterId *string
```

- *Type:* *string

The managed object ID of the datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/storage_drs_vm_override#datastore_cluster_id StorageDrsVmOverride#datastore_cluster_id}

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.virtualMachineId"></a>

```go
VirtualMachineId *string
```

- *Type:* *string

The managed object ID of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/storage_drs_vm_override#virtual_machine_id StorageDrsVmOverride#virtual_machine_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/storage_drs_vm_override#id StorageDrsVmOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SdrsAutomationLevel`<sup>Optional</sup> <a name="SdrsAutomationLevel" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsAutomationLevel"></a>

```go
SdrsAutomationLevel *string
```

- *Type:* *string

Overrides any Storage DRS automation levels for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/storage_drs_vm_override#sdrs_automation_level StorageDrsVmOverride#sdrs_automation_level}

---

##### `SdrsEnabled`<sup>Optional</sup> <a name="SdrsEnabled" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsEnabled"></a>

```go
SdrsEnabled *string
```

- *Type:* *string

Overrides the default Storage DRS setting for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/storage_drs_vm_override#sdrs_enabled StorageDrsVmOverride#sdrs_enabled}

---

##### `SdrsIntraVmAffinity`<sup>Optional</sup> <a name="SdrsIntraVmAffinity" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsIntraVmAffinity"></a>

```go
SdrsIntraVmAffinity *string
```

- *Type:* *string

Overrides the intra-VM affinity setting for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/resources/storage_drs_vm_override#sdrs_intra_vm_affinity StorageDrsVmOverride#sdrs_intra_vm_affinity}

---



