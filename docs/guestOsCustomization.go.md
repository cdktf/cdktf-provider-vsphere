# `guestOsCustomization` Submodule <a name="`guestOsCustomization` Submodule" id="@cdktf/provider-vsphere.guestOsCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuestOsCustomization <a name="GuestOsCustomization" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization vsphere_guest_os_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/guestoscustomization"

guestoscustomization.NewGuestOsCustomization(scope Construct, id *string, config GuestOsCustomizationConfig) GuestOsCustomization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig">GuestOsCustomizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig">GuestOsCustomizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec"></a>

```go
func PutSpec(value GuestOsCustomizationSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GuestOsCustomization resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/guestoscustomization"

guestoscustomization.GuestOsCustomization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/guestoscustomization"

guestoscustomization.GuestOsCustomization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/guestoscustomization"

guestoscustomization.GuestOsCustomization_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/guestoscustomization"

guestoscustomization.GuestOsCustomization_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GuestOsCustomization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GuestOsCustomization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GuestOsCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GuestOsCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.changeVersion">ChangeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.lastUpdateTime">LastUpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference">GuestOsCustomizationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChangeVersion`<sup>Required</sup> <a name="ChangeVersion" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.changeVersion"></a>

```go
func ChangeVersion() *string
```

- *Type:* *string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.lastUpdateTime"></a>

```go
func LastUpdateTime() *string
```

- *Type:* *string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.spec"></a>

```go
func Spec() GuestOsCustomizationSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference">GuestOsCustomizationSpecOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.specInput"></a>

```go
func SpecInput() GuestOsCustomizationSpec
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GuestOsCustomizationConfig <a name="GuestOsCustomizationConfig" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/guestoscustomization"

&guestoscustomization.GuestOsCustomizationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Spec: github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9.guestOsCustomization.GuestOsCustomizationSpec,
	Type: *string,
	Description: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the customization specification is the unique identifier per vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.type">Type</a></code> | <code>*string</code> | The type of customization specification: One among: Windows, Linux. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.description">Description</a></code> | <code>*string</code> | The description for the customization specification. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#id GuestOsCustomization#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the customization specification is the unique identifier per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#name GuestOsCustomization#name}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.spec"></a>

```go
Spec GuestOsCustomizationSpec
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#spec GuestOsCustomization#spec}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of customization specification: One among: Windows, Linux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#type GuestOsCustomization#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description for the customization specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#description GuestOsCustomization#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#id GuestOsCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GuestOsCustomizationSpec <a name="GuestOsCustomizationSpec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/guestoscustomization"

&guestoscustomization.GuestOsCustomizationSpec {
	DnsServerList: *[]*string,
	DnsSuffixList: *[]*string,
	Ipv4Gateway: *string,
	Ipv6Gateway: *string,
	LinuxOptions: github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions,
	NetworkInterface: interface{},
	WindowsOptions: github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions,
	WindowsSysprepText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.dnsServerList">DnsServerList</a></code> | <code>*[]*string</code> | The list of DNS servers for a virtual network adapter with a static IP address. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.dnsSuffixList">DnsSuffixList</a></code> | <code>*[]*string</code> | A list of DNS search domains to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.ipv4Gateway">Ipv4Gateway</a></code> | <code>*string</code> | The IPv4 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.ipv6Gateway">Ipv6Gateway</a></code> | <code>*string</code> | The IPv6 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.linuxOptions">LinuxOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a></code> | linux_options block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.networkInterface">NetworkInterface</a></code> | <code>interface{}</code> | network_interface block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.windowsOptions">WindowsOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a></code> | windows_options block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.windowsSysprepText">WindowsSysprepText</a></code> | <code>*string</code> | Use this option to specify a windows sysprep file directly. |

---

##### `DnsServerList`<sup>Optional</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.dnsServerList"></a>

```go
DnsServerList *[]*string
```

- *Type:* *[]*string

The list of DNS servers for a virtual network adapter with a static IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#dns_server_list GuestOsCustomization#dns_server_list}

---

##### `DnsSuffixList`<sup>Optional</sup> <a name="DnsSuffixList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.dnsSuffixList"></a>

```go
DnsSuffixList *[]*string
```

- *Type:* *[]*string

A list of DNS search domains to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#dns_suffix_list GuestOsCustomization#dns_suffix_list}

---

##### `Ipv4Gateway`<sup>Optional</sup> <a name="Ipv4Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.ipv4Gateway"></a>

```go
Ipv4Gateway *string
```

- *Type:* *string

The IPv4 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#ipv4_gateway GuestOsCustomization#ipv4_gateway}

---

##### `Ipv6Gateway`<sup>Optional</sup> <a name="Ipv6Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.ipv6Gateway"></a>

```go
Ipv6Gateway *string
```

- *Type:* *string

The IPv6 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#ipv6_gateway GuestOsCustomization#ipv6_gateway}

---

##### `LinuxOptions`<sup>Optional</sup> <a name="LinuxOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.linuxOptions"></a>

```go
LinuxOptions GuestOsCustomizationSpecLinuxOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a>

linux_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#linux_options GuestOsCustomization#linux_options}

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.networkInterface"></a>

```go
NetworkInterface interface{}
```

- *Type:* interface{}

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#network_interface GuestOsCustomization#network_interface}

---

##### `WindowsOptions`<sup>Optional</sup> <a name="WindowsOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.windowsOptions"></a>

```go
WindowsOptions GuestOsCustomizationSpecWindowsOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a>

windows_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#windows_options GuestOsCustomization#windows_options}

---

##### `WindowsSysprepText`<sup>Optional</sup> <a name="WindowsSysprepText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.windowsSysprepText"></a>

```go
WindowsSysprepText *string
```

- *Type:* *string

Use this option to specify a windows sysprep file directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#windows_sysprep_text GuestOsCustomization#windows_sysprep_text}

---

### GuestOsCustomizationSpecLinuxOptions <a name="GuestOsCustomizationSpecLinuxOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/guestoscustomization"

&guestoscustomization.GuestOsCustomizationSpecLinuxOptions {
	Domain: *string,
	HostName: *string,
	HwClockUtc: interface{},
	ScriptText: *string,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.domain">Domain</a></code> | <code>*string</code> | The domain name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.hostName">HostName</a></code> | <code>*string</code> | The hostname for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.hwClockUtc">HwClockUtc</a></code> | <code>interface{}</code> | Specifies whether or not the hardware clock should be in UTC or not. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.scriptText">ScriptText</a></code> | <code>*string</code> | The customization script to run before and or after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.timeZone">TimeZone</a></code> | <code>*string</code> | Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The domain name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#domain GuestOsCustomization#domain}

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

The hostname for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#host_name GuestOsCustomization#host_name}

---

##### `HwClockUtc`<sup>Optional</sup> <a name="HwClockUtc" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.hwClockUtc"></a>

```go
HwClockUtc interface{}
```

- *Type:* interface{}

Specifies whether or not the hardware clock should be in UTC or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#hw_clock_utc GuestOsCustomization#hw_clock_utc}

---

##### `ScriptText`<sup>Optional</sup> <a name="ScriptText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.scriptText"></a>

```go
ScriptText *string
```

- *Type:* *string

The customization script to run before and or after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#script_text GuestOsCustomization#script_text}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#time_zone GuestOsCustomization#time_zone}

---

### GuestOsCustomizationSpecNetworkInterface <a name="GuestOsCustomizationSpecNetworkInterface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/guestoscustomization"

&guestoscustomization.GuestOsCustomizationSpecNetworkInterface {
	DnsDomain: *string,
	DnsServerList: *[]*string,
	Ipv4Address: *string,
	Ipv4Netmask: *f64,
	Ipv6Address: *string,
	Ipv6Netmask: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.dnsDomain">DnsDomain</a></code> | <code>*string</code> | A DNS search domain to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.dnsServerList">DnsServerList</a></code> | <code>*[]*string</code> | Network-interface specific DNS settings for Windows operating systems. Ignored on Linux. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | The IPv4 address assigned to this network adapter. If left blank, DHCP is used. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv4Netmask">Ipv4Netmask</a></code> | <code>*f64</code> | The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv6Netmask">Ipv6Netmask</a></code> | <code>*f64</code> | The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected. |

---

##### `DnsDomain`<sup>Optional</sup> <a name="DnsDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.dnsDomain"></a>

```go
DnsDomain *string
```

- *Type:* *string

A DNS search domain to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#dns_domain GuestOsCustomization#dns_domain}

---

##### `DnsServerList`<sup>Optional</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.dnsServerList"></a>

```go
DnsServerList *[]*string
```

- *Type:* *[]*string

Network-interface specific DNS settings for Windows operating systems. Ignored on Linux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#dns_server_list GuestOsCustomization#dns_server_list}

---

##### `Ipv4Address`<sup>Optional</sup> <a name="Ipv4Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv4Address"></a>

```go
Ipv4Address *string
```

- *Type:* *string

The IPv4 address assigned to this network adapter. If left blank, DHCP is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#ipv4_address GuestOsCustomization#ipv4_address}

---

##### `Ipv4Netmask`<sup>Optional</sup> <a name="Ipv4Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv4Netmask"></a>

```go
Ipv4Netmask *f64
```

- *Type:* *f64

The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#ipv4_netmask GuestOsCustomization#ipv4_netmask}

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv6Address"></a>

```go
Ipv6Address *string
```

- *Type:* *string

The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#ipv6_address GuestOsCustomization#ipv6_address}

---

##### `Ipv6Netmask`<sup>Optional</sup> <a name="Ipv6Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv6Netmask"></a>

```go
Ipv6Netmask *f64
```

- *Type:* *f64

The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#ipv6_netmask GuestOsCustomization#ipv6_netmask}

---

### GuestOsCustomizationSpecWindowsOptions <a name="GuestOsCustomizationSpecWindowsOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/guestoscustomization"

&guestoscustomization.GuestOsCustomizationSpecWindowsOptions {
	ComputerName: *string,
	AdminPassword: *string,
	AutoLogon: interface{},
	AutoLogonCount: *f64,
	DomainAdminPassword: *string,
	DomainAdminUser: *string,
	DomainOu: *string,
	FullName: *string,
	JoinDomain: *string,
	OrganizationName: *string,
	ProductKey: *string,
	RunOnceCommandList: *[]*string,
	TimeZone: *f64,
	Workgroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.computerName">ComputerName</a></code> | <code>*string</code> | The host name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | The new administrator password for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.autoLogon">AutoLogon</a></code> | <code>interface{}</code> | Specifies whether or not the VM automatically logs on as Administrator. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.autoLogonCount">AutoLogonCount</a></code> | <code>*f64</code> | Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainAdminPassword">DomainAdminPassword</a></code> | <code>*string</code> | The password of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainAdminUser">DomainAdminUser</a></code> | <code>*string</code> | The user account of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainOu">DomainOu</a></code> | <code>*string</code> | The MachineObjectOU which specifies the full LDAP path name of the OU to which the virtual machine belongs. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.fullName">FullName</a></code> | <code>*string</code> | The full name of the user of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.joinDomain">JoinDomain</a></code> | <code>*string</code> | The domain that the virtual machine should join. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.organizationName">OrganizationName</a></code> | <code>*string</code> | The organization name this virtual machine is being installed for. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.productKey">ProductKey</a></code> | <code>*string</code> | The product key for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.runOnceCommandList">RunOnceCommandList</a></code> | <code>*[]*string</code> | A list of commands to run at first user logon, after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.timeZone">TimeZone</a></code> | <code>*f64</code> | The new time zone for the virtual machine. This is a sysprep-dictated timezone code. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.workgroup">Workgroup</a></code> | <code>*string</code> | The workgroup for this virtual machine if not joining a domain. |

---

##### `ComputerName`<sup>Required</sup> <a name="ComputerName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.computerName"></a>

```go
ComputerName *string
```

- *Type:* *string

The host name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#computer_name GuestOsCustomization#computer_name}

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.adminPassword"></a>

```go
AdminPassword *string
```

- *Type:* *string

The new administrator password for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#admin_password GuestOsCustomization#admin_password}

---

##### `AutoLogon`<sup>Optional</sup> <a name="AutoLogon" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.autoLogon"></a>

```go
AutoLogon interface{}
```

- *Type:* interface{}

Specifies whether or not the VM automatically logs on as Administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#auto_logon GuestOsCustomization#auto_logon}

---

##### `AutoLogonCount`<sup>Optional</sup> <a name="AutoLogonCount" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.autoLogonCount"></a>

```go
AutoLogonCount *f64
```

- *Type:* *f64

Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#auto_logon_count GuestOsCustomization#auto_logon_count}

---

##### `DomainAdminPassword`<sup>Optional</sup> <a name="DomainAdminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainAdminPassword"></a>

```go
DomainAdminPassword *string
```

- *Type:* *string

The password of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#domain_admin_password GuestOsCustomization#domain_admin_password}

---

##### `DomainAdminUser`<sup>Optional</sup> <a name="DomainAdminUser" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainAdminUser"></a>

```go
DomainAdminUser *string
```

- *Type:* *string

The user account of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#domain_admin_user GuestOsCustomization#domain_admin_user}

---

##### `DomainOu`<sup>Optional</sup> <a name="DomainOu" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainOu"></a>

```go
DomainOu *string
```

- *Type:* *string

The MachineObjectOU which specifies the full LDAP path name of the OU to which the virtual machine belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#domain_ou GuestOsCustomization#domain_ou}

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.fullName"></a>

```go
FullName *string
```

- *Type:* *string

The full name of the user of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#full_name GuestOsCustomization#full_name}

---

##### `JoinDomain`<sup>Optional</sup> <a name="JoinDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.joinDomain"></a>

```go
JoinDomain *string
```

- *Type:* *string

The domain that the virtual machine should join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#join_domain GuestOsCustomization#join_domain}

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.organizationName"></a>

```go
OrganizationName *string
```

- *Type:* *string

The organization name this virtual machine is being installed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#organization_name GuestOsCustomization#organization_name}

---

##### `ProductKey`<sup>Optional</sup> <a name="ProductKey" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.productKey"></a>

```go
ProductKey *string
```

- *Type:* *string

The product key for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#product_key GuestOsCustomization#product_key}

---

##### `RunOnceCommandList`<sup>Optional</sup> <a name="RunOnceCommandList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.runOnceCommandList"></a>

```go
RunOnceCommandList *[]*string
```

- *Type:* *[]*string

A list of commands to run at first user logon, after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#run_once_command_list GuestOsCustomization#run_once_command_list}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.timeZone"></a>

```go
TimeZone *f64
```

- *Type:* *f64

The new time zone for the virtual machine. This is a sysprep-dictated timezone code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#time_zone GuestOsCustomization#time_zone}

---

##### `Workgroup`<sup>Optional</sup> <a name="Workgroup" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.workgroup"></a>

```go
Workgroup *string
```

- *Type:* *string

The workgroup for this virtual machine if not joining a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/guest_os_customization#workgroup GuestOsCustomization#workgroup}

---

## Classes <a name="Classes" id="Classes"></a>

### GuestOsCustomizationSpecLinuxOptionsOutputReference <a name="GuestOsCustomizationSpecLinuxOptionsOutputReference" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/guestoscustomization"

guestoscustomization.NewGuestOsCustomizationSpecLinuxOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuestOsCustomizationSpecLinuxOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetHwClockUtc">ResetHwClockUtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetScriptText">ResetScriptText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHwClockUtc` <a name="ResetHwClockUtc" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetHwClockUtc"></a>

```go
func ResetHwClockUtc()
```

##### `ResetScriptText` <a name="ResetScriptText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetScriptText"></a>

```go
func ResetScriptText()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtcInput">HwClockUtcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptTextInput">ScriptTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtc">HwClockUtc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptText">ScriptText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `HwClockUtcInput`<sup>Optional</sup> <a name="HwClockUtcInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtcInput"></a>

```go
func HwClockUtcInput() interface{}
```

- *Type:* interface{}

---

##### `ScriptTextInput`<sup>Optional</sup> <a name="ScriptTextInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptTextInput"></a>

```go
func ScriptTextInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `HwClockUtc`<sup>Required</sup> <a name="HwClockUtc" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtc"></a>

```go
func HwClockUtc() interface{}
```

- *Type:* interface{}

---

##### `ScriptText`<sup>Required</sup> <a name="ScriptText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptText"></a>

```go
func ScriptText() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GuestOsCustomizationSpecLinuxOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a>

---


### GuestOsCustomizationSpecNetworkInterfaceList <a name="GuestOsCustomizationSpecNetworkInterfaceList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/guestoscustomization"

guestoscustomization.NewGuestOsCustomizationSpecNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GuestOsCustomizationSpecNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.get"></a>

```go
func Get(index *f64) GuestOsCustomizationSpecNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GuestOsCustomizationSpecNetworkInterfaceOutputReference <a name="GuestOsCustomizationSpecNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/guestoscustomization"

guestoscustomization.NewGuestOsCustomizationSpecNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GuestOsCustomizationSpecNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetDnsDomain">ResetDnsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetDnsServerList">ResetDnsServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv4Address">ResetIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv4Netmask">ResetIpv4Netmask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv6Netmask">ResetIpv6Netmask</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsDomain` <a name="ResetDnsDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetDnsDomain"></a>

```go
func ResetDnsDomain()
```

##### `ResetDnsServerList` <a name="ResetDnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetDnsServerList"></a>

```go
func ResetDnsServerList()
```

##### `ResetIpv4Address` <a name="ResetIpv4Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv4Address"></a>

```go
func ResetIpv4Address()
```

##### `ResetIpv4Netmask` <a name="ResetIpv4Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv4Netmask"></a>

```go
func ResetIpv4Netmask()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv6Address"></a>

```go
func ResetIpv6Address()
```

##### `ResetIpv6Netmask` <a name="ResetIpv6Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv6Netmask"></a>

```go
func ResetIpv6Netmask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomainInput">DnsDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerListInput">DnsServerListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4AddressInput">Ipv4AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4NetmaskInput">Ipv4NetmaskInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6NetmaskInput">Ipv6NetmaskInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomain">DnsDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerList">DnsServerList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Netmask">Ipv4Netmask</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Netmask">Ipv6Netmask</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsDomainInput`<sup>Optional</sup> <a name="DnsDomainInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomainInput"></a>

```go
func DnsDomainInput() *string
```

- *Type:* *string

---

##### `DnsServerListInput`<sup>Optional</sup> <a name="DnsServerListInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerListInput"></a>

```go
func DnsServerListInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv4AddressInput`<sup>Optional</sup> <a name="Ipv4AddressInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4AddressInput"></a>

```go
func Ipv4AddressInput() *string
```

- *Type:* *string

---

##### `Ipv4NetmaskInput`<sup>Optional</sup> <a name="Ipv4NetmaskInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4NetmaskInput"></a>

```go
func Ipv4NetmaskInput() *f64
```

- *Type:* *f64

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```go
func Ipv6AddressInput() *string
```

- *Type:* *string

---

##### `Ipv6NetmaskInput`<sup>Optional</sup> <a name="Ipv6NetmaskInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6NetmaskInput"></a>

```go
func Ipv6NetmaskInput() *f64
```

- *Type:* *f64

---

##### `DnsDomain`<sup>Required</sup> <a name="DnsDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomain"></a>

```go
func DnsDomain() *string
```

- *Type:* *string

---

##### `DnsServerList`<sup>Required</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerList"></a>

```go
func DnsServerList() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Address"></a>

```go
func Ipv4Address() *string
```

- *Type:* *string

---

##### `Ipv4Netmask`<sup>Required</sup> <a name="Ipv4Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Netmask"></a>

```go
func Ipv4Netmask() *f64
```

- *Type:* *f64

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `Ipv6Netmask`<sup>Required</sup> <a name="Ipv6Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Netmask"></a>

```go
func Ipv6Netmask() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GuestOsCustomizationSpecOutputReference <a name="GuestOsCustomizationSpecOutputReference" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/guestoscustomization"

guestoscustomization.NewGuestOsCustomizationSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuestOsCustomizationSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putLinuxOptions">PutLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions">PutWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetDnsServerList">ResetDnsServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetDnsSuffixList">ResetDnsSuffixList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetIpv4Gateway">ResetIpv4Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetIpv6Gateway">ResetIpv6Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetLinuxOptions">ResetLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetWindowsOptions">ResetWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetWindowsSysprepText">ResetWindowsSysprepText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinuxOptions` <a name="PutLinuxOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putLinuxOptions"></a>

```go
func PutLinuxOptions(value GuestOsCustomizationSpecLinuxOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putLinuxOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a>

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putNetworkInterface"></a>

```go
func PutNetworkInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putNetworkInterface.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWindowsOptions` <a name="PutWindowsOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions"></a>

```go
func PutWindowsOptions(value GuestOsCustomizationSpecWindowsOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a>

---

##### `ResetDnsServerList` <a name="ResetDnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetDnsServerList"></a>

```go
func ResetDnsServerList()
```

##### `ResetDnsSuffixList` <a name="ResetDnsSuffixList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetDnsSuffixList"></a>

```go
func ResetDnsSuffixList()
```

##### `ResetIpv4Gateway` <a name="ResetIpv4Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetIpv4Gateway"></a>

```go
func ResetIpv4Gateway()
```

##### `ResetIpv6Gateway` <a name="ResetIpv6Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetIpv6Gateway"></a>

```go
func ResetIpv6Gateway()
```

##### `ResetLinuxOptions` <a name="ResetLinuxOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetLinuxOptions"></a>

```go
func ResetLinuxOptions()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetNetworkInterface"></a>

```go
func ResetNetworkInterface()
```

##### `ResetWindowsOptions` <a name="ResetWindowsOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetWindowsOptions"></a>

```go
func ResetWindowsOptions()
```

##### `ResetWindowsSysprepText` <a name="ResetWindowsSysprepText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetWindowsSysprepText"></a>

```go
func ResetWindowsSysprepText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.linuxOptions">LinuxOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference">GuestOsCustomizationSpecLinuxOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList">GuestOsCustomizationSpecNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsOptions">WindowsOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference">GuestOsCustomizationSpecWindowsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsServerListInput">DnsServerListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsSuffixListInput">DnsSuffixListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv4GatewayInput">Ipv4GatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv6GatewayInput">Ipv6GatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.linuxOptionsInput">LinuxOptionsInput</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsOptionsInput">WindowsOptionsInput</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsSysprepTextInput">WindowsSysprepTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsServerList">DnsServerList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsSuffixList">DnsSuffixList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv4Gateway">Ipv4Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv6Gateway">Ipv6Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsSysprepText">WindowsSysprepText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinuxOptions`<sup>Required</sup> <a name="LinuxOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.linuxOptions"></a>

```go
func LinuxOptions() GuestOsCustomizationSpecLinuxOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference">GuestOsCustomizationSpecLinuxOptionsOutputReference</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.networkInterface"></a>

```go
func NetworkInterface() GuestOsCustomizationSpecNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList">GuestOsCustomizationSpecNetworkInterfaceList</a>

---

##### `WindowsOptions`<sup>Required</sup> <a name="WindowsOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsOptions"></a>

```go
func WindowsOptions() GuestOsCustomizationSpecWindowsOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference">GuestOsCustomizationSpecWindowsOptionsOutputReference</a>

---

##### `DnsServerListInput`<sup>Optional</sup> <a name="DnsServerListInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsServerListInput"></a>

```go
func DnsServerListInput() *[]*string
```

- *Type:* *[]*string

---

##### `DnsSuffixListInput`<sup>Optional</sup> <a name="DnsSuffixListInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsSuffixListInput"></a>

```go
func DnsSuffixListInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv4GatewayInput`<sup>Optional</sup> <a name="Ipv4GatewayInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv4GatewayInput"></a>

```go
func Ipv4GatewayInput() *string
```

- *Type:* *string

---

##### `Ipv6GatewayInput`<sup>Optional</sup> <a name="Ipv6GatewayInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv6GatewayInput"></a>

```go
func Ipv6GatewayInput() *string
```

- *Type:* *string

---

##### `LinuxOptionsInput`<sup>Optional</sup> <a name="LinuxOptionsInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.linuxOptionsInput"></a>

```go
func LinuxOptionsInput() GuestOsCustomizationSpecLinuxOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a>

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.networkInterfaceInput"></a>

```go
func NetworkInterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `WindowsOptionsInput`<sup>Optional</sup> <a name="WindowsOptionsInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsOptionsInput"></a>

```go
func WindowsOptionsInput() GuestOsCustomizationSpecWindowsOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a>

---

##### `WindowsSysprepTextInput`<sup>Optional</sup> <a name="WindowsSysprepTextInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsSysprepTextInput"></a>

```go
func WindowsSysprepTextInput() *string
```

- *Type:* *string

---

##### `DnsServerList`<sup>Required</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsServerList"></a>

```go
func DnsServerList() *[]*string
```

- *Type:* *[]*string

---

##### `DnsSuffixList`<sup>Required</sup> <a name="DnsSuffixList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsSuffixList"></a>

```go
func DnsSuffixList() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv4Gateway`<sup>Required</sup> <a name="Ipv4Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv4Gateway"></a>

```go
func Ipv4Gateway() *string
```

- *Type:* *string

---

##### `Ipv6Gateway`<sup>Required</sup> <a name="Ipv6Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv6Gateway"></a>

```go
func Ipv6Gateway() *string
```

- *Type:* *string

---

##### `WindowsSysprepText`<sup>Required</sup> <a name="WindowsSysprepText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsSysprepText"></a>

```go
func WindowsSysprepText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GuestOsCustomizationSpec
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a>

---


### GuestOsCustomizationSpecWindowsOptionsOutputReference <a name="GuestOsCustomizationSpecWindowsOptionsOutputReference" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/guestoscustomization"

guestoscustomization.NewGuestOsCustomizationSpecWindowsOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuestOsCustomizationSpecWindowsOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAdminPassword">ResetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAutoLogon">ResetAutoLogon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAutoLogonCount">ResetAutoLogonCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainAdminPassword">ResetDomainAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainAdminUser">ResetDomainAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainOu">ResetDomainOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetJoinDomain">ResetJoinDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetProductKey">ResetProductKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetRunOnceCommandList">ResetRunOnceCommandList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetWorkgroup">ResetWorkgroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAdminPassword"></a>

```go
func ResetAdminPassword()
```

##### `ResetAutoLogon` <a name="ResetAutoLogon" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAutoLogon"></a>

```go
func ResetAutoLogon()
```

##### `ResetAutoLogonCount` <a name="ResetAutoLogonCount" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAutoLogonCount"></a>

```go
func ResetAutoLogonCount()
```

##### `ResetDomainAdminPassword` <a name="ResetDomainAdminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainAdminPassword"></a>

```go
func ResetDomainAdminPassword()
```

##### `ResetDomainAdminUser` <a name="ResetDomainAdminUser" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainAdminUser"></a>

```go
func ResetDomainAdminUser()
```

##### `ResetDomainOu` <a name="ResetDomainOu" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainOu"></a>

```go
func ResetDomainOu()
```

##### `ResetFullName` <a name="ResetFullName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetFullName"></a>

```go
func ResetFullName()
```

##### `ResetJoinDomain` <a name="ResetJoinDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetJoinDomain"></a>

```go
func ResetJoinDomain()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetOrganizationName"></a>

```go
func ResetOrganizationName()
```

##### `ResetProductKey` <a name="ResetProductKey" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetProductKey"></a>

```go
func ResetProductKey()
```

##### `ResetRunOnceCommandList` <a name="ResetRunOnceCommandList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetRunOnceCommandList"></a>

```go
func ResetRunOnceCommandList()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```

##### `ResetWorkgroup` <a name="ResetWorkgroup" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetWorkgroup"></a>

```go
func ResetWorkgroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCountInput">AutoLogonCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonInput">AutoLogonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerNameInput">ComputerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPasswordInput">DomainAdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUserInput">DomainAdminUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOuInput">DomainOuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomainInput">JoinDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKeyInput">ProductKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandListInput">RunOnceCommandListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroupInput">WorkgroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogon">AutoLogon</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCount">AutoLogonCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerName">ComputerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPassword">DomainAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUser">DomainAdminUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOu">DomainOu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomain">JoinDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKey">ProductKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandList">RunOnceCommandList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZone">TimeZone</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroup">Workgroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPasswordInput"></a>

```go
func AdminPasswordInput() *string
```

- *Type:* *string

---

##### `AutoLogonCountInput`<sup>Optional</sup> <a name="AutoLogonCountInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCountInput"></a>

```go
func AutoLogonCountInput() *f64
```

- *Type:* *f64

---

##### `AutoLogonInput`<sup>Optional</sup> <a name="AutoLogonInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonInput"></a>

```go
func AutoLogonInput() interface{}
```

- *Type:* interface{}

---

##### `ComputerNameInput`<sup>Optional</sup> <a name="ComputerNameInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerNameInput"></a>

```go
func ComputerNameInput() *string
```

- *Type:* *string

---

##### `DomainAdminPasswordInput`<sup>Optional</sup> <a name="DomainAdminPasswordInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPasswordInput"></a>

```go
func DomainAdminPasswordInput() *string
```

- *Type:* *string

---

##### `DomainAdminUserInput`<sup>Optional</sup> <a name="DomainAdminUserInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUserInput"></a>

```go
func DomainAdminUserInput() *string
```

- *Type:* *string

---

##### `DomainOuInput`<sup>Optional</sup> <a name="DomainOuInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOuInput"></a>

```go
func DomainOuInput() *string
```

- *Type:* *string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullNameInput"></a>

```go
func FullNameInput() *string
```

- *Type:* *string

---

##### `JoinDomainInput`<sup>Optional</sup> <a name="JoinDomainInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomainInput"></a>

```go
func JoinDomainInput() *string
```

- *Type:* *string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationNameInput"></a>

```go
func OrganizationNameInput() *string
```

- *Type:* *string

---

##### `ProductKeyInput`<sup>Optional</sup> <a name="ProductKeyInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKeyInput"></a>

```go
func ProductKeyInput() *string
```

- *Type:* *string

---

##### `RunOnceCommandListInput`<sup>Optional</sup> <a name="RunOnceCommandListInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandListInput"></a>

```go
func RunOnceCommandListInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *f64
```

- *Type:* *f64

---

##### `WorkgroupInput`<sup>Optional</sup> <a name="WorkgroupInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroupInput"></a>

```go
func WorkgroupInput() *string
```

- *Type:* *string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `AutoLogon`<sup>Required</sup> <a name="AutoLogon" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogon"></a>

```go
func AutoLogon() interface{}
```

- *Type:* interface{}

---

##### `AutoLogonCount`<sup>Required</sup> <a name="AutoLogonCount" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCount"></a>

```go
func AutoLogonCount() *f64
```

- *Type:* *f64

---

##### `ComputerName`<sup>Required</sup> <a name="ComputerName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerName"></a>

```go
func ComputerName() *string
```

- *Type:* *string

---

##### `DomainAdminPassword`<sup>Required</sup> <a name="DomainAdminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPassword"></a>

```go
func DomainAdminPassword() *string
```

- *Type:* *string

---

##### `DomainAdminUser`<sup>Required</sup> <a name="DomainAdminUser" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUser"></a>

```go
func DomainAdminUser() *string
```

- *Type:* *string

---

##### `DomainOu`<sup>Required</sup> <a name="DomainOu" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOu"></a>

```go
func DomainOu() *string
```

- *Type:* *string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `JoinDomain`<sup>Required</sup> <a name="JoinDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomain"></a>

```go
func JoinDomain() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `ProductKey`<sup>Required</sup> <a name="ProductKey" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKey"></a>

```go
func ProductKey() *string
```

- *Type:* *string

---

##### `RunOnceCommandList`<sup>Required</sup> <a name="RunOnceCommandList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandList"></a>

```go
func RunOnceCommandList() *[]*string
```

- *Type:* *[]*string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZone"></a>

```go
func TimeZone() *f64
```

- *Type:* *f64

---

##### `Workgroup`<sup>Required</sup> <a name="Workgroup" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroup"></a>

```go
func Workgroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GuestOsCustomizationSpecWindowsOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a>

---



