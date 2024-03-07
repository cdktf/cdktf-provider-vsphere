# `vnic` Submodule <a name="`vnic` Submodule" id="@cdktf/provider-vsphere.vnic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Vnic <a name="Vnic" id="@cdktf/provider-vsphere.vnic.Vnic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic vsphere_vnic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/vnic"

vnic.NewVnic(scope Construct, id *string, config VnicConfig) Vnic
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig">VnicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.vnic.Vnic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicConfig">VnicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.putIpv4">PutIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.putIpv6">PutIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetDistributedPortGroup">ResetDistributedPortGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetDistributedSwitchPort">ResetDistributedSwitchPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetIpv4">ResetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetIpv6">ResetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetMac">ResetMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetNetstack">ResetNetstack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetPortgroup">ResetPortgroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.resetServices">ResetServices</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.vnic.Vnic.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.vnic.Vnic.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.vnic.Vnic.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vnic.Vnic.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.vnic.Vnic.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.vnic.Vnic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.vnic.Vnic.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.vnic.Vnic.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.vnic.Vnic.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.vnic.Vnic.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.vnic.Vnic.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.vnic.Vnic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.vnic.Vnic.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.vnic.Vnic.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vnic.Vnic.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vnic.Vnic.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.Vnic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.vnic.Vnic.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vnic.Vnic.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.vnic.Vnic.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.vnic.Vnic.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.vnic.Vnic.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.vnic.Vnic.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vnic.Vnic.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpv4` <a name="PutIpv4" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv4"></a>

```go
func PutIpv4(value VnicIpv4)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

---

##### `PutIpv6` <a name="PutIpv6" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv6"></a>

```go
func PutIpv6(value VnicIpv6)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vnic.Vnic.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

---

##### `ResetDistributedPortGroup` <a name="ResetDistributedPortGroup" id="@cdktf/provider-vsphere.vnic.Vnic.resetDistributedPortGroup"></a>

```go
func ResetDistributedPortGroup()
```

##### `ResetDistributedSwitchPort` <a name="ResetDistributedSwitchPort" id="@cdktf/provider-vsphere.vnic.Vnic.resetDistributedSwitchPort"></a>

```go
func ResetDistributedSwitchPort()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.vnic.Vnic.resetId"></a>

```go
func ResetId()
```

##### `ResetIpv4` <a name="ResetIpv4" id="@cdktf/provider-vsphere.vnic.Vnic.resetIpv4"></a>

```go
func ResetIpv4()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-vsphere.vnic.Vnic.resetIpv6"></a>

```go
func ResetIpv6()
```

##### `ResetMac` <a name="ResetMac" id="@cdktf/provider-vsphere.vnic.Vnic.resetMac"></a>

```go
func ResetMac()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktf/provider-vsphere.vnic.Vnic.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetNetstack` <a name="ResetNetstack" id="@cdktf/provider-vsphere.vnic.Vnic.resetNetstack"></a>

```go
func ResetNetstack()
```

##### `ResetPortgroup` <a name="ResetPortgroup" id="@cdktf/provider-vsphere.vnic.Vnic.resetPortgroup"></a>

```go
func ResetPortgroup()
```

##### `ResetServices` <a name="ResetServices" id="@cdktf/provider-vsphere.vnic.Vnic.resetServices"></a>

```go
func ResetServices()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Vnic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.vnic.Vnic.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/vnic"

vnic.Vnic_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vnic.Vnic.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/vnic"

vnic.Vnic_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/vnic"

vnic.Vnic_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vnic.Vnic.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.vnic.Vnic.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/vnic"

vnic.Vnic_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Vnic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vnic.Vnic.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.vnic.Vnic.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Vnic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.vnic.Vnic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Vnic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vnic.Vnic.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Vnic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference">VnicIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference">VnicIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroupInput">DistributedPortGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPortInput">DistributedSwitchPortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv4Input">Ipv4Input</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.ipv6Input">Ipv6Input</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.macInput">MacInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.mtuInput">MtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.netstackInput">NetstackInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.portgroupInput">PortgroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.servicesInput">ServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroup">DistributedPortGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPort">DistributedSwitchPort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.mac">Mac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.netstack">Netstack</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.portgroup">Portgroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.services">Services</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.vnic.Vnic.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.vnic.Vnic.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.vnic.Vnic.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.vnic.Vnic.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.vnic.Vnic.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.vnic.Vnic.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.vnic.Vnic.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.vnic.Vnic.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.vnic.Vnic.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.vnic.Vnic.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.vnic.Vnic.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.vnic.Vnic.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.vnic.Vnic.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.vnic.Vnic.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv4"></a>

```go
func Ipv4() VnicIpv4OutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference">VnicIpv4OutputReference</a>

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv6"></a>

```go
func Ipv6() VnicIpv6OutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference">VnicIpv6OutputReference</a>

---

##### `DistributedPortGroupInput`<sup>Optional</sup> <a name="DistributedPortGroupInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroupInput"></a>

```go
func DistributedPortGroupInput() *string
```

- *Type:* *string

---

##### `DistributedSwitchPortInput`<sup>Optional</sup> <a name="DistributedSwitchPortInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPortInput"></a>

```go
func DistributedSwitchPortInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Ipv4Input`<sup>Optional</sup> <a name="Ipv4Input" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv4Input"></a>

```go
func Ipv4Input() VnicIpv4
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-vsphere.vnic.Vnic.property.ipv6Input"></a>

```go
func Ipv6Input() VnicIpv6
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

---

##### `MacInput`<sup>Optional</sup> <a name="MacInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.macInput"></a>

```go
func MacInput() *string
```

- *Type:* *string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.mtuInput"></a>

```go
func MtuInput() *f64
```

- *Type:* *f64

---

##### `NetstackInput`<sup>Optional</sup> <a name="NetstackInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.netstackInput"></a>

```go
func NetstackInput() *string
```

- *Type:* *string

---

##### `PortgroupInput`<sup>Optional</sup> <a name="PortgroupInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.portgroupInput"></a>

```go
func PortgroupInput() *string
```

- *Type:* *string

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktf/provider-vsphere.vnic.Vnic.property.servicesInput"></a>

```go
func ServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DistributedPortGroup`<sup>Required</sup> <a name="DistributedPortGroup" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedPortGroup"></a>

```go
func DistributedPortGroup() *string
```

- *Type:* *string

---

##### `DistributedSwitchPort`<sup>Required</sup> <a name="DistributedSwitchPort" id="@cdktf/provider-vsphere.vnic.Vnic.property.distributedSwitchPort"></a>

```go
func DistributedSwitchPort() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vsphere.vnic.Vnic.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.vnic.Vnic.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mac`<sup>Required</sup> <a name="Mac" id="@cdktf/provider-vsphere.vnic.Vnic.property.mac"></a>

```go
func Mac() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-vsphere.vnic.Vnic.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `Netstack`<sup>Required</sup> <a name="Netstack" id="@cdktf/provider-vsphere.vnic.Vnic.property.netstack"></a>

```go
func Netstack() *string
```

- *Type:* *string

---

##### `Portgroup`<sup>Required</sup> <a name="Portgroup" id="@cdktf/provider-vsphere.vnic.Vnic.property.portgroup"></a>

```go
func Portgroup() *string
```

- *Type:* *string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-vsphere.vnic.Vnic.property.services"></a>

```go
func Services() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.Vnic.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.vnic.Vnic.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VnicConfig <a name="VnicConfig" id="@cdktf/provider-vsphere.vnic.VnicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vnic.VnicConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/vnic"

&vnic.VnicConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Host: *string,
	DistributedPortGroup: *string,
	DistributedSwitchPort: *string,
	Id: *string,
	Ipv4: github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9.vnic.VnicIpv4,
	Ipv6: github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9.vnic.VnicIpv6,
	Mac: *string,
	Mtu: *f64,
	Netstack: *string,
	Portgroup: *string,
	Services: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.host">Host</a></code> | <code>*string</code> | ESX host the interface belongs to. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedPortGroup">DistributedPortGroup</a></code> | <code>*string</code> | Key of the distributed portgroup the nic will connect to. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedSwitchPort">DistributedSwitchPort</a></code> | <code>*string</code> | UUID of the DVSwitch the nic will be attached to. Do not set if you set portgroup. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#id Vnic#id}. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a></code> | ipv4 block. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a></code> | ipv6 block. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.mac">Mac</a></code> | <code>*string</code> | MAC address of the interface. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.mtu">Mtu</a></code> | <code>*f64</code> | MTU of the interface. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.netstack">Netstack</a></code> | <code>*string</code> | TCP/IP stack setting for this interface. Possible values are 'defaultTcpipStack', 'vmotion', 'provisioning'. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.portgroup">Portgroup</a></code> | <code>*string</code> | portgroup to attach the nic to. Do not set if you set distributed_switch_port. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicConfig.property.services">Services</a></code> | <code>*[]*string</code> | Enabled services setting for this interface. Current possible values are 'vmotion', 'management' and 'vsan'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

ESX host the interface belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#host Vnic#host}

---

##### `DistributedPortGroup`<sup>Optional</sup> <a name="DistributedPortGroup" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedPortGroup"></a>

```go
DistributedPortGroup *string
```

- *Type:* *string

Key of the distributed portgroup the nic will connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#distributed_port_group Vnic#distributed_port_group}

---

##### `DistributedSwitchPort`<sup>Optional</sup> <a name="DistributedSwitchPort" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.distributedSwitchPort"></a>

```go
DistributedSwitchPort *string
```

- *Type:* *string

UUID of the DVSwitch the nic will be attached to. Do not set if you set portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#distributed_switch_port Vnic#distributed_switch_port}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#id Vnic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv4`<sup>Optional</sup> <a name="Ipv4" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv4"></a>

```go
Ipv4 VnicIpv4
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

ipv4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#ipv4 Vnic#ipv4}

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.ipv6"></a>

```go
Ipv6 VnicIpv6
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#ipv6 Vnic#ipv6}

---

##### `Mac`<sup>Optional</sup> <a name="Mac" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.mac"></a>

```go
Mac *string
```

- *Type:* *string

MAC address of the interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#mac Vnic#mac}

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.mtu"></a>

```go
Mtu *f64
```

- *Type:* *f64

MTU of the interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#mtu Vnic#mtu}

---

##### `Netstack`<sup>Optional</sup> <a name="Netstack" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.netstack"></a>

```go
Netstack *string
```

- *Type:* *string

TCP/IP stack setting for this interface. Possible values are 'defaultTcpipStack', 'vmotion', 'provisioning'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#netstack Vnic#netstack}

---

##### `Portgroup`<sup>Optional</sup> <a name="Portgroup" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.portgroup"></a>

```go
Portgroup *string
```

- *Type:* *string

portgroup to attach the nic to. Do not set if you set distributed_switch_port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#portgroup Vnic#portgroup}

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktf/provider-vsphere.vnic.VnicConfig.property.services"></a>

```go
Services *[]*string
```

- *Type:* *[]*string

Enabled services setting for this interface. Current possible values are 'vmotion', 'management' and 'vsan'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#services Vnic#services}

---

### VnicIpv4 <a name="VnicIpv4" id="@cdktf/provider-vsphere.vnic.VnicIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vnic.VnicIpv4.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/vnic"

&vnic.VnicIpv4 {
	Dhcp: interface{},
	Gw: *string,
	Ip: *string,
	Netmask: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.dhcp">Dhcp</a></code> | <code>interface{}</code> | Use DHCP to configure the interface's IPv4 stack. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.gw">Gw</a></code> | <code>*string</code> | IP address of the default gateway, if DHCP is not set. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.ip">Ip</a></code> | <code>*string</code> | address of the interface, if DHCP is not set. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4.property.netmask">Netmask</a></code> | <code>*string</code> | netmask of the interface, if DHCP is not set. |

---

##### `Dhcp`<sup>Optional</sup> <a name="Dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.dhcp"></a>

```go
Dhcp interface{}
```

- *Type:* interface{}

Use DHCP to configure the interface's IPv4 stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#dhcp Vnic#dhcp}

---

##### `Gw`<sup>Optional</sup> <a name="Gw" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.gw"></a>

```go
Gw *string
```

- *Type:* *string

IP address of the default gateway, if DHCP is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#gw Vnic#gw}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

address of the interface, if DHCP is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#ip Vnic#ip}

---

##### `Netmask`<sup>Optional</sup> <a name="Netmask" id="@cdktf/provider-vsphere.vnic.VnicIpv4.property.netmask"></a>

```go
Netmask *string
```

- *Type:* *string

netmask of the interface, if DHCP is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#netmask Vnic#netmask}

---

### VnicIpv6 <a name="VnicIpv6" id="@cdktf/provider-vsphere.vnic.VnicIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vnic.VnicIpv6.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/vnic"

&vnic.VnicIpv6 {
	Addresses: *[]*string,
	Autoconfig: interface{},
	Dhcp: interface{},
	Gw: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.addresses">Addresses</a></code> | <code>*[]*string</code> | List of IPv6 addresses. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.autoconfig">Autoconfig</a></code> | <code>interface{}</code> | Use IPv6 Autoconfiguration (RFC2462). |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.dhcp">Dhcp</a></code> | <code>interface{}</code> | Use DHCP to configure the interface's IPv4 stack. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6.property.gw">Gw</a></code> | <code>*string</code> | IP address of the default gateway, if DHCP or autoconfig is not set. |

---

##### `Addresses`<sup>Optional</sup> <a name="Addresses" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.addresses"></a>

```go
Addresses *[]*string
```

- *Type:* *[]*string

List of IPv6 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#addresses Vnic#addresses}

---

##### `Autoconfig`<sup>Optional</sup> <a name="Autoconfig" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.autoconfig"></a>

```go
Autoconfig interface{}
```

- *Type:* interface{}

Use IPv6 Autoconfiguration (RFC2462).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#autoconfig Vnic#autoconfig}

---

##### `Dhcp`<sup>Optional</sup> <a name="Dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.dhcp"></a>

```go
Dhcp interface{}
```

- *Type:* interface{}

Use DHCP to configure the interface's IPv4 stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#dhcp Vnic#dhcp}

---

##### `Gw`<sup>Optional</sup> <a name="Gw" id="@cdktf/provider-vsphere.vnic.VnicIpv6.property.gw"></a>

```go
Gw *string
```

- *Type:* *string

IP address of the default gateway, if DHCP or autoconfig is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.7.0/docs/resources/vnic#gw Vnic#gw}

---

## Classes <a name="Classes" id="Classes"></a>

### VnicIpv4OutputReference <a name="VnicIpv4OutputReference" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/vnic"

vnic.NewVnicIpv4OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VnicIpv4OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetDhcp">ResetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetGw">ResetGw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetNetmask">ResetNetmask</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDhcp` <a name="ResetDhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetDhcp"></a>

```go
func ResetDhcp()
```

##### `ResetGw` <a name="ResetGw" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetGw"></a>

```go
func ResetGw()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetIp"></a>

```go
func ResetIp()
```

##### `ResetNetmask` <a name="ResetNetmask" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.resetNetmask"></a>

```go
func ResetNetmask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcpInput">DhcpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gwInput">GwInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmaskInput">NetmaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcp">Dhcp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gw">Gw</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmask">Netmask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DhcpInput`<sup>Optional</sup> <a name="DhcpInput" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcpInput"></a>

```go
func DhcpInput() interface{}
```

- *Type:* interface{}

---

##### `GwInput`<sup>Optional</sup> <a name="GwInput" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gwInput"></a>

```go
func GwInput() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `NetmaskInput`<sup>Optional</sup> <a name="NetmaskInput" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmaskInput"></a>

```go
func NetmaskInput() *string
```

- *Type:* *string

---

##### `Dhcp`<sup>Required</sup> <a name="Dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.dhcp"></a>

```go
func Dhcp() interface{}
```

- *Type:* interface{}

---

##### `Gw`<sup>Required</sup> <a name="Gw" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.gw"></a>

```go
func Gw() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.netmask"></a>

```go
func Netmask() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.vnic.VnicIpv4OutputReference.property.internalValue"></a>

```go
func InternalValue() VnicIpv4
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv4">VnicIpv4</a>

---


### VnicIpv6OutputReference <a name="VnicIpv6OutputReference" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/vnic"

vnic.NewVnicIpv6OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VnicIpv6OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAddresses">ResetAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAutoconfig">ResetAutoconfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetDhcp">ResetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetGw">ResetGw</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddresses` <a name="ResetAddresses" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAddresses"></a>

```go
func ResetAddresses()
```

##### `ResetAutoconfig` <a name="ResetAutoconfig" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetAutoconfig"></a>

```go
func ResetAutoconfig()
```

##### `ResetDhcp` <a name="ResetDhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetDhcp"></a>

```go
func ResetDhcp()
```

##### `ResetGw` <a name="ResetGw" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.resetGw"></a>

```go
func ResetGw()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addressesInput">AddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfigInput">AutoconfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcpInput">DhcpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gwInput">GwInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addresses">Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfig">Autoconfig</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcp">Dhcp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gw">Gw</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressesInput`<sup>Optional</sup> <a name="AddressesInput" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addressesInput"></a>

```go
func AddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AutoconfigInput`<sup>Optional</sup> <a name="AutoconfigInput" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfigInput"></a>

```go
func AutoconfigInput() interface{}
```

- *Type:* interface{}

---

##### `DhcpInput`<sup>Optional</sup> <a name="DhcpInput" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcpInput"></a>

```go
func DhcpInput() interface{}
```

- *Type:* interface{}

---

##### `GwInput`<sup>Optional</sup> <a name="GwInput" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gwInput"></a>

```go
func GwInput() *string
```

- *Type:* *string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.addresses"></a>

```go
func Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `Autoconfig`<sup>Required</sup> <a name="Autoconfig" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.autoconfig"></a>

```go
func Autoconfig() interface{}
```

- *Type:* interface{}

---

##### `Dhcp`<sup>Required</sup> <a name="Dhcp" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.dhcp"></a>

```go
func Dhcp() interface{}
```

- *Type:* interface{}

---

##### `Gw`<sup>Required</sup> <a name="Gw" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.gw"></a>

```go
func Gw() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.vnic.VnicIpv6OutputReference.property.internalValue"></a>

```go
func InternalValue() VnicIpv6
```

- *Type:* <a href="#@cdktf/provider-vsphere.vnic.VnicIpv6">VnicIpv6</a>

---



