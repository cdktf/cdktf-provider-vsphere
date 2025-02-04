# `distributedVirtualSwitchPvlanMapping` Submodule <a name="`distributedVirtualSwitchPvlanMapping` Submodule" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DistributedVirtualSwitchPvlanMappingA <a name="DistributedVirtualSwitchPvlanMappingA" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping vsphere_distributed_virtual_switch_pvlan_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitchpvlanmapping"

distributedvirtualswitchpvlanmapping.NewDistributedVirtualSwitchPvlanMappingA(scope Construct, id *string, config DistributedVirtualSwitchPvlanMappingAConfig) DistributedVirtualSwitchPvlanMappingA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig">DistributedVirtualSwitchPvlanMappingAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig">DistributedVirtualSwitchPvlanMappingAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DistributedVirtualSwitchPvlanMappingA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitchpvlanmapping"

distributedvirtualswitchpvlanmapping.DistributedVirtualSwitchPvlanMappingA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitchpvlanmapping"

distributedvirtualswitchpvlanmapping.DistributedVirtualSwitchPvlanMappingA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitchpvlanmapping"

distributedvirtualswitchpvlanmapping.DistributedVirtualSwitchPvlanMappingA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitchpvlanmapping"

distributedvirtualswitchpvlanmapping.DistributedVirtualSwitchPvlanMappingA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DistributedVirtualSwitchPvlanMappingA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DistributedVirtualSwitchPvlanMappingA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DistributedVirtualSwitchPvlanMappingA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DistributedVirtualSwitchPvlanMappingA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.distributedVirtualSwitchIdInput">DistributedVirtualSwitchIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.primaryVlanIdInput">PrimaryVlanIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.pvlanTypeInput">PvlanTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.secondaryVlanIdInput">SecondaryVlanIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.distributedVirtualSwitchId">DistributedVirtualSwitchId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.primaryVlanId">PrimaryVlanId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.pvlanType">PvlanType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.secondaryVlanId">SecondaryVlanId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DistributedVirtualSwitchIdInput`<sup>Optional</sup> <a name="DistributedVirtualSwitchIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.distributedVirtualSwitchIdInput"></a>

```go
func DistributedVirtualSwitchIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrimaryVlanIdInput`<sup>Optional</sup> <a name="PrimaryVlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.primaryVlanIdInput"></a>

```go
func PrimaryVlanIdInput() *f64
```

- *Type:* *f64

---

##### `PvlanTypeInput`<sup>Optional</sup> <a name="PvlanTypeInput" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.pvlanTypeInput"></a>

```go
func PvlanTypeInput() *string
```

- *Type:* *string

---

##### `SecondaryVlanIdInput`<sup>Optional</sup> <a name="SecondaryVlanIdInput" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.secondaryVlanIdInput"></a>

```go
func SecondaryVlanIdInput() *f64
```

- *Type:* *f64

---

##### `DistributedVirtualSwitchId`<sup>Required</sup> <a name="DistributedVirtualSwitchId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.distributedVirtualSwitchId"></a>

```go
func DistributedVirtualSwitchId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrimaryVlanId`<sup>Required</sup> <a name="PrimaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.primaryVlanId"></a>

```go
func PrimaryVlanId() *f64
```

- *Type:* *f64

---

##### `PvlanType`<sup>Required</sup> <a name="PvlanType" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.pvlanType"></a>

```go
func PvlanType() *string
```

- *Type:* *string

---

##### `SecondaryVlanId`<sup>Required</sup> <a name="SecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.secondaryVlanId"></a>

```go
func SecondaryVlanId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DistributedVirtualSwitchPvlanMappingAConfig <a name="DistributedVirtualSwitchPvlanMappingAConfig" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/distributedvirtualswitchpvlanmapping"

&distributedvirtualswitchpvlanmapping.DistributedVirtualSwitchPvlanMappingAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DistributedVirtualSwitchId: *string,
	PrimaryVlanId: *f64,
	PvlanType: *string,
	SecondaryVlanId: *f64,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.distributedVirtualSwitchId">DistributedVirtualSwitchId</a></code> | <code>*string</code> | The ID of the distributed virtual switch to attach this mapping to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.primaryVlanId">PrimaryVlanId</a></code> | <code>*f64</code> | The primary VLAN ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.pvlanType">PvlanType</a></code> | <code>*string</code> | The private VLAN type. Valid values are promiscuous, community and isolated. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.secondaryVlanId">SecondaryVlanId</a></code> | <code>*f64</code> | The secondary VLAN ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#id DistributedVirtualSwitchPvlanMappingA#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DistributedVirtualSwitchId`<sup>Required</sup> <a name="DistributedVirtualSwitchId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.distributedVirtualSwitchId"></a>

```go
DistributedVirtualSwitchId *string
```

- *Type:* *string

The ID of the distributed virtual switch to attach this mapping to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#distributed_virtual_switch_id DistributedVirtualSwitchPvlanMappingA#distributed_virtual_switch_id}

---

##### `PrimaryVlanId`<sup>Required</sup> <a name="PrimaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.primaryVlanId"></a>

```go
PrimaryVlanId *f64
```

- *Type:* *f64

The primary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#primary_vlan_id DistributedVirtualSwitchPvlanMappingA#primary_vlan_id}

---

##### `PvlanType`<sup>Required</sup> <a name="PvlanType" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.pvlanType"></a>

```go
PvlanType *string
```

- *Type:* *string

The private VLAN type. Valid values are promiscuous, community and isolated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#pvlan_type DistributedVirtualSwitchPvlanMappingA#pvlan_type}

---

##### `SecondaryVlanId`<sup>Required</sup> <a name="SecondaryVlanId" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.secondaryVlanId"></a>

```go
SecondaryVlanId *f64
```

- *Type:* *f64

The secondary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#secondary_vlan_id DistributedVirtualSwitchPvlanMappingA#secondary_vlan_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/resources/distributed_virtual_switch_pvlan_mapping#id DistributedVirtualSwitchPvlanMappingA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



