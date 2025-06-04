# `vappEntity` Submodule <a name="`vappEntity` Submodule" id="@cdktf/provider-vsphere.vappEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VappEntity <a name="VappEntity" id="@cdktf/provider-vsphere.vappEntity.VappEntity"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_entity vsphere_vapp_entity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/vappentity"

vappentity.NewVappEntity(scope Construct, id *string, config VappEntityConfig) VappEntity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig">VappEntityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig">VappEntityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartAction">ResetStartAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartDelay">ResetStartDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartOrder">ResetStartOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopAction">ResetStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopDelay">ResetStopDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetWaitForGuest">ResetWaitForGuest</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.vappEntity.VappEntity.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.vappEntity.VappEntity.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappEntity.VappEntity.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetCustomAttributes"></a>

```go
func ResetCustomAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetId"></a>

```go
func ResetId()
```

##### `ResetStartAction` <a name="ResetStartAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartAction"></a>

```go
func ResetStartAction()
```

##### `ResetStartDelay` <a name="ResetStartDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartDelay"></a>

```go
func ResetStartDelay()
```

##### `ResetStartOrder` <a name="ResetStartOrder" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartOrder"></a>

```go
func ResetStartOrder()
```

##### `ResetStopAction` <a name="ResetStopAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopAction"></a>

```go
func ResetStopAction()
```

##### `ResetStopDelay` <a name="ResetStopDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopDelay"></a>

```go
func ResetStopDelay()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetTags"></a>

```go
func ResetTags()
```

##### `ResetWaitForGuest` <a name="ResetWaitForGuest" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetWaitForGuest"></a>

```go
func ResetWaitForGuest()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VappEntity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/vappentity"

vappentity.VappEntity_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/vappentity"

vappentity.VappEntity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/vappentity"

vappentity.VappEntity_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/vappentity"

vappentity.VappEntity_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VappEntity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VappEntity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VappEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_entity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappEntity.VappEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VappEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerIdInput">ContainerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributesInput">CustomAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startActionInput">StartActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelayInput">StartDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrderInput">StartOrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopActionInput">StopActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelayInput">StopDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuestInput">WaitForGuestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerId">ContainerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startAction">StartAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelay">StartDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrder">StartOrder</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopAction">StopAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelay">StopDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuest">WaitForGuest</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerIdInput`<sup>Optional</sup> <a name="ContainerIdInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerIdInput"></a>

```go
func ContainerIdInput() *string
```

- *Type:* *string

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributesInput"></a>

```go
func CustomAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StartActionInput`<sup>Optional</sup> <a name="StartActionInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startActionInput"></a>

```go
func StartActionInput() *string
```

- *Type:* *string

---

##### `StartDelayInput`<sup>Optional</sup> <a name="StartDelayInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelayInput"></a>

```go
func StartDelayInput() *f64
```

- *Type:* *f64

---

##### `StartOrderInput`<sup>Optional</sup> <a name="StartOrderInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrderInput"></a>

```go
func StartOrderInput() *f64
```

- *Type:* *f64

---

##### `StopActionInput`<sup>Optional</sup> <a name="StopActionInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopActionInput"></a>

```go
func StopActionInput() *string
```

- *Type:* *string

---

##### `StopDelayInput`<sup>Optional</sup> <a name="StopDelayInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelayInput"></a>

```go
func StopDelayInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `WaitForGuestInput`<sup>Optional</sup> <a name="WaitForGuestInput" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuestInput"></a>

```go
func WaitForGuestInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerId"></a>

```go
func ContainerId() *string
```

- *Type:* *string

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributes"></a>

```go
func CustomAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StartAction`<sup>Required</sup> <a name="StartAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startAction"></a>

```go
func StartAction() *string
```

- *Type:* *string

---

##### `StartDelay`<sup>Required</sup> <a name="StartDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelay"></a>

```go
func StartDelay() *f64
```

- *Type:* *f64

---

##### `StartOrder`<sup>Required</sup> <a name="StartOrder" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrder"></a>

```go
func StartOrder() *f64
```

- *Type:* *f64

---

##### `StopAction`<sup>Required</sup> <a name="StopAction" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopAction"></a>

```go
func StopAction() *string
```

- *Type:* *string

---

##### `StopDelay`<sup>Required</sup> <a name="StopDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelay"></a>

```go
func StopDelay() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `WaitForGuest`<sup>Required</sup> <a name="WaitForGuest" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuest"></a>

```go
func WaitForGuest() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VappEntityConfig <a name="VappEntityConfig" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/vappentity"

&vappentity.VappEntityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerId: *string,
	TargetId: *string,
	CustomAttributes: *map[string]*string,
	Id: *string,
	StartAction: *string,
	StartDelay: *f64,
	StartOrder: *f64,
	StopAction: *string,
	StopDelay: *f64,
	Tags: *[]*string,
	WaitForGuest: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.containerId">ContainerId</a></code> | <code>*string</code> | Managed object ID of the vApp container the entity is a member of. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Managed object ID of the entity to power on or power off. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_entity#id VappEntity#id}. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startAction">StartAction</a></code> | <code>*string</code> | How to start the entity. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startDelay">StartDelay</a></code> | <code>*f64</code> | Delay in seconds before continuing with the next entity in the order of entities to be started. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startOrder">StartOrder</a></code> | <code>*f64</code> | Order to start and stop target in vApp. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopAction">StopAction</a></code> | <code>*string</code> | Defines the stop action for the entity. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopDelay">StopDelay</a></code> | <code>*f64</code> | Delay in seconds before continuing with the next entity in the order of entities to be stopped. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.waitForGuest">WaitForGuest</a></code> | <code>interface{}</code> | Determines if the VM should be marked as being started when VMware Tools are ready instead of waiting for start_delay. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.containerId"></a>

```go
ContainerId *string
```

- *Type:* *string

Managed object ID of the vApp container the entity is a member of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_entity#container_id VappEntity#container_id}

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Managed object ID of the entity to power on or power off.

This can be a virtual machine or a vApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_entity#target_id VappEntity#target_id}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.customAttributes"></a>

```go
CustomAttributes *map[string]*string
```

- *Type:* *map[string]*string

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_entity#custom_attributes VappEntity#custom_attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_entity#id VappEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StartAction`<sup>Optional</sup> <a name="StartAction" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startAction"></a>

```go
StartAction *string
```

- *Type:* *string

How to start the entity.

Valid settings are none or powerOn. If set to none, then the entity does not participate in auto-start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_entity#start_action VappEntity#start_action}

---

##### `StartDelay`<sup>Optional</sup> <a name="StartDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startDelay"></a>

```go
StartDelay *f64
```

- *Type:* *f64

Delay in seconds before continuing with the next entity in the order of entities to be started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_entity#start_delay VappEntity#start_delay}

---

##### `StartOrder`<sup>Optional</sup> <a name="StartOrder" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startOrder"></a>

```go
StartOrder *f64
```

- *Type:* *f64

Order to start and stop target in vApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_entity#start_order VappEntity#start_order}

---

##### `StopAction`<sup>Optional</sup> <a name="StopAction" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopAction"></a>

```go
StopAction *string
```

- *Type:* *string

Defines the stop action for the entity.

Can be set to none, powerOff, guestShutdown, or suspend. If set to none, then the entity does not participate in auto-stop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_entity#stop_action VappEntity#stop_action}

---

##### `StopDelay`<sup>Optional</sup> <a name="StopDelay" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopDelay"></a>

```go
StopDelay *f64
```

- *Type:* *f64

Delay in seconds before continuing with the next entity in the order of entities to be stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_entity#stop_delay VappEntity#stop_delay}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_entity#tags VappEntity#tags}

---

##### `WaitForGuest`<sup>Optional</sup> <a name="WaitForGuest" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.waitForGuest"></a>

```go
WaitForGuest interface{}
```

- *Type:* interface{}

Determines if the VM should be marked as being started when VMware Tools are ready instead of waiting for start_delay.

This property has no effect for vApps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/vapp_entity#wait_for_guest VappEntity#wait_for_guest}

---



