# `vappContainer` Submodule <a name="`vappContainer` Submodule" id="@cdktf/provider-vsphere.vappContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VappContainer <a name="VappContainer" id="@cdktf/provider-vsphere.vappContainer.VappContainer"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container vsphere_vapp_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/vappcontainer"

vappcontainer.NewVappContainer(scope Construct, id *string, config VappContainerConfig) VappContainer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig">VappContainerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig">VappContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuExpandable">ResetCpuExpandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuLimit">ResetCpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuReservation">ResetCpuReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShareLevel">ResetCpuShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShares">ResetCpuShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryExpandable">ResetMemoryExpandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryLimit">ResetMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryReservation">ResetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShareLevel">ResetMemoryShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShares">ResetMemoryShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetParentFolderId">ResetParentFolderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.vappContainer.VappContainer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.vappContainer.VappContainer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.vappContainer.VappContainer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.vappContainer.VappContainer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.vappContainer.VappContainer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.vappContainer.VappContainer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappContainer.VappContainer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.vappContainer.VappContainer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.vappContainer.VappContainer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.vappContainer.VappContainer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCpuExpandable` <a name="ResetCpuExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuExpandable"></a>

```go
func ResetCpuExpandable()
```

##### `ResetCpuLimit` <a name="ResetCpuLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuLimit"></a>

```go
func ResetCpuLimit()
```

##### `ResetCpuReservation` <a name="ResetCpuReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuReservation"></a>

```go
func ResetCpuReservation()
```

##### `ResetCpuShareLevel` <a name="ResetCpuShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShareLevel"></a>

```go
func ResetCpuShareLevel()
```

##### `ResetCpuShares` <a name="ResetCpuShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShares"></a>

```go
func ResetCpuShares()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCustomAttributes"></a>

```go
func ResetCustomAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetId"></a>

```go
func ResetId()
```

##### `ResetMemoryExpandable` <a name="ResetMemoryExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryExpandable"></a>

```go
func ResetMemoryExpandable()
```

##### `ResetMemoryLimit` <a name="ResetMemoryLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryLimit"></a>

```go
func ResetMemoryLimit()
```

##### `ResetMemoryReservation` <a name="ResetMemoryReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryReservation"></a>

```go
func ResetMemoryReservation()
```

##### `ResetMemoryShareLevel` <a name="ResetMemoryShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShareLevel"></a>

```go
func ResetMemoryShareLevel()
```

##### `ResetMemoryShares` <a name="ResetMemoryShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShares"></a>

```go
func ResetMemoryShares()
```

##### `ResetParentFolderId` <a name="ResetParentFolderId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetParentFolderId"></a>

```go
func ResetParentFolderId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VappContainer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/vappcontainer"

vappcontainer.VappContainer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/vappcontainer"

vappcontainer.VappContainer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/vappcontainer"

vappcontainer.VappContainer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/vappcontainer"

vappcontainer.VappContainer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VappContainer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VappContainer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VappContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VappContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandableInput">CpuExpandableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimitInput">CpuLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservationInput">CpuReservationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevelInput">CpuShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuSharesInput">CpuSharesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributesInput">CustomAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandableInput">MemoryExpandableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimitInput">MemoryLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservationInput">MemoryReservationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevelInput">MemoryShareLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memorySharesInput">MemorySharesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderIdInput">ParentFolderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolIdInput">ParentResourcePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandable">CpuExpandable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimit">CpuLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservation">CpuReservation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevel">CpuShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShares">CpuShares</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandable">MemoryExpandable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimit">MemoryLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservation">MemoryReservation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevel">MemoryShareLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShares">MemoryShares</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderId">ParentFolderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolId">ParentResourcePoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CpuExpandableInput`<sup>Optional</sup> <a name="CpuExpandableInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandableInput"></a>

```go
func CpuExpandableInput() interface{}
```

- *Type:* interface{}

---

##### `CpuLimitInput`<sup>Optional</sup> <a name="CpuLimitInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimitInput"></a>

```go
func CpuLimitInput() *f64
```

- *Type:* *f64

---

##### `CpuReservationInput`<sup>Optional</sup> <a name="CpuReservationInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservationInput"></a>

```go
func CpuReservationInput() *f64
```

- *Type:* *f64

---

##### `CpuShareLevelInput`<sup>Optional</sup> <a name="CpuShareLevelInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevelInput"></a>

```go
func CpuShareLevelInput() *string
```

- *Type:* *string

---

##### `CpuSharesInput`<sup>Optional</sup> <a name="CpuSharesInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuSharesInput"></a>

```go
func CpuSharesInput() *f64
```

- *Type:* *f64

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributesInput"></a>

```go
func CustomAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemoryExpandableInput`<sup>Optional</sup> <a name="MemoryExpandableInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandableInput"></a>

```go
func MemoryExpandableInput() interface{}
```

- *Type:* interface{}

---

##### `MemoryLimitInput`<sup>Optional</sup> <a name="MemoryLimitInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimitInput"></a>

```go
func MemoryLimitInput() *f64
```

- *Type:* *f64

---

##### `MemoryReservationInput`<sup>Optional</sup> <a name="MemoryReservationInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservationInput"></a>

```go
func MemoryReservationInput() *f64
```

- *Type:* *f64

---

##### `MemoryShareLevelInput`<sup>Optional</sup> <a name="MemoryShareLevelInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevelInput"></a>

```go
func MemoryShareLevelInput() *string
```

- *Type:* *string

---

##### `MemorySharesInput`<sup>Optional</sup> <a name="MemorySharesInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memorySharesInput"></a>

```go
func MemorySharesInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentFolderIdInput`<sup>Optional</sup> <a name="ParentFolderIdInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderIdInput"></a>

```go
func ParentFolderIdInput() *string
```

- *Type:* *string

---

##### `ParentResourcePoolIdInput`<sup>Optional</sup> <a name="ParentResourcePoolIdInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolIdInput"></a>

```go
func ParentResourcePoolIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CpuExpandable`<sup>Required</sup> <a name="CpuExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandable"></a>

```go
func CpuExpandable() interface{}
```

- *Type:* interface{}

---

##### `CpuLimit`<sup>Required</sup> <a name="CpuLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimit"></a>

```go
func CpuLimit() *f64
```

- *Type:* *f64

---

##### `CpuReservation`<sup>Required</sup> <a name="CpuReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservation"></a>

```go
func CpuReservation() *f64
```

- *Type:* *f64

---

##### `CpuShareLevel`<sup>Required</sup> <a name="CpuShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevel"></a>

```go
func CpuShareLevel() *string
```

- *Type:* *string

---

##### `CpuShares`<sup>Required</sup> <a name="CpuShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShares"></a>

```go
func CpuShares() *f64
```

- *Type:* *f64

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributes"></a>

```go
func CustomAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MemoryExpandable`<sup>Required</sup> <a name="MemoryExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandable"></a>

```go
func MemoryExpandable() interface{}
```

- *Type:* interface{}

---

##### `MemoryLimit`<sup>Required</sup> <a name="MemoryLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimit"></a>

```go
func MemoryLimit() *f64
```

- *Type:* *f64

---

##### `MemoryReservation`<sup>Required</sup> <a name="MemoryReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservation"></a>

```go
func MemoryReservation() *f64
```

- *Type:* *f64

---

##### `MemoryShareLevel`<sup>Required</sup> <a name="MemoryShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevel"></a>

```go
func MemoryShareLevel() *string
```

- *Type:* *string

---

##### `MemoryShares`<sup>Required</sup> <a name="MemoryShares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShares"></a>

```go
func MemoryShares() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentFolderId`<sup>Required</sup> <a name="ParentFolderId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderId"></a>

```go
func ParentFolderId() *string
```

- *Type:* *string

---

##### `ParentResourcePoolId`<sup>Required</sup> <a name="ParentResourcePoolId" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolId"></a>

```go
func ParentResourcePoolId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VappContainerConfig <a name="VappContainerConfig" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/vappcontainer"

&vappcontainer.VappContainerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ParentResourcePoolId: *string,
	CpuExpandable: interface{},
	CpuLimit: *f64,
	CpuReservation: *f64,
	CpuShareLevel: *string,
	CpuShares: *f64,
	CustomAttributes: *map[string]*string,
	Id: *string,
	MemoryExpandable: interface{},
	MemoryLimit: *f64,
	MemoryReservation: *f64,
	MemoryShareLevel: *string,
	MemoryShares: *f64,
	ParentFolderId: *string,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.name">Name</a></code> | <code>*string</code> | The name of the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentResourcePoolId">ParentResourcePoolId</a></code> | <code>*string</code> | The managed object ID of the parent resource pool or the compute resource the vApp container is in. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuExpandable">CpuExpandable</a></code> | <code>interface{}</code> | Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuLimit">CpuLimit</a></code> | <code>*f64</code> | The utilization of a vApp container will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuReservation">CpuReservation</a></code> | <code>*f64</code> | Amount of CPU (MHz) that is guaranteed available to the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShareLevel">CpuShareLevel</a></code> | <code>*string</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShares">CpuShares</a></code> | <code>*f64</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#id VappContainer#id}. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryExpandable">MemoryExpandable</a></code> | <code>interface{}</code> | Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryLimit">MemoryLimit</a></code> | <code>*f64</code> | The utilization of a vApp container will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryReservation">MemoryReservation</a></code> | <code>*f64</code> | Amount of memory (MB) that is guaranteed available to the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShareLevel">MemoryShareLevel</a></code> | <code>*string</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShares">MemoryShares</a></code> | <code>*f64</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentFolderId">ParentFolderId</a></code> | <code>*string</code> | The ID of the parent VM folder. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of tag IDs to apply to this object. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#name VappContainer#name}

---

##### `ParentResourcePoolId`<sup>Required</sup> <a name="ParentResourcePoolId" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentResourcePoolId"></a>

```go
ParentResourcePoolId *string
```

- *Type:* *string

The managed object ID of the parent resource pool or the compute resource the vApp container is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#parent_resource_pool_id VappContainer#parent_resource_pool_id}

---

##### `CpuExpandable`<sup>Optional</sup> <a name="CpuExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuExpandable"></a>

```go
CpuExpandable interface{}
```

- *Type:* interface{}

Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#cpu_expandable VappContainer#cpu_expandable}

---

##### `CpuLimit`<sup>Optional</sup> <a name="CpuLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuLimit"></a>

```go
CpuLimit *f64
```

- *Type:* *f64

The utilization of a vApp container will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#cpu_limit VappContainer#cpu_limit}

---

##### `CpuReservation`<sup>Optional</sup> <a name="CpuReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuReservation"></a>

```go
CpuReservation *f64
```

- *Type:* *f64

Amount of CPU (MHz) that is guaranteed available to the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#cpu_reservation VappContainer#cpu_reservation}

---

##### `CpuShareLevel`<sup>Optional</sup> <a name="CpuShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShareLevel"></a>

```go
CpuShareLevel *string
```

- *Type:* *string

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#cpu_share_level VappContainer#cpu_share_level}

---

##### `CpuShares`<sup>Optional</sup> <a name="CpuShares" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShares"></a>

```go
CpuShares *f64
```

- *Type:* *f64

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, cpu_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#cpu_shares VappContainer#cpu_shares}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.customAttributes"></a>

```go
CustomAttributes *map[string]*string
```

- *Type:* *map[string]*string

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#custom_attributes VappContainer#custom_attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#id VappContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MemoryExpandable`<sup>Optional</sup> <a name="MemoryExpandable" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryExpandable"></a>

```go
MemoryExpandable interface{}
```

- *Type:* interface{}

Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#memory_expandable VappContainer#memory_expandable}

---

##### `MemoryLimit`<sup>Optional</sup> <a name="MemoryLimit" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryLimit"></a>

```go
MemoryLimit *f64
```

- *Type:* *f64

The utilization of a vApp container will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#memory_limit VappContainer#memory_limit}

---

##### `MemoryReservation`<sup>Optional</sup> <a name="MemoryReservation" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryReservation"></a>

```go
MemoryReservation *f64
```

- *Type:* *f64

Amount of memory (MB) that is guaranteed available to the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#memory_reservation VappContainer#memory_reservation}

---

##### `MemoryShareLevel`<sup>Optional</sup> <a name="MemoryShareLevel" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShareLevel"></a>

```go
MemoryShareLevel *string
```

- *Type:* *string

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#memory_share_level VappContainer#memory_share_level}

---

##### `MemoryShares`<sup>Optional</sup> <a name="MemoryShares" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShares"></a>

```go
MemoryShares *f64
```

- *Type:* *f64

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, memory_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#memory_shares VappContainer#memory_shares}

---

##### `ParentFolderId`<sup>Optional</sup> <a name="ParentFolderId" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentFolderId"></a>

```go
ParentFolderId *string
```

- *Type:* *string

The ID of the parent VM folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#parent_folder_id VappContainer#parent_folder_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_container#tags VappContainer#tags}

---



