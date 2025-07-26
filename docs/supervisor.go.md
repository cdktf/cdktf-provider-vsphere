# `supervisor` Submodule <a name="`supervisor` Submodule" id="@cdktf/provider-vsphere.supervisor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Supervisor <a name="Supervisor" id="@cdktf/provider-vsphere.supervisor.Supervisor"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor vsphere_supervisor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

supervisor.NewSupervisor(scope Construct, id *string, config SupervisorConfig) Supervisor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig">SupervisorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig">SupervisorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putEgressCidr">PutEgressCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putIngressCidr">PutIngressCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork">PutManagementNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putNamespace">PutNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putPodCidr">PutPodCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putServiceCidr">PutServiceCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.Supervisor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.supervisor.Supervisor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.supervisor.Supervisor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.supervisor.Supervisor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.supervisor.Supervisor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.supervisor.Supervisor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.supervisor.Supervisor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.supervisor.Supervisor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.supervisor.Supervisor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.supervisor.Supervisor.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.supervisor.Supervisor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.supervisor.Supervisor.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.supervisor.Supervisor.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.supervisor.Supervisor.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEgressCidr` <a name="PutEgressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putEgressCidr"></a>

```go
func PutEgressCidr(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putEgressCidr.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIngressCidr` <a name="PutIngressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putIngressCidr"></a>

```go
func PutIngressCidr(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putIngressCidr.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManagementNetwork` <a name="PutManagementNetwork" id="@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork"></a>

```go
func PutManagementNetwork(value SupervisorManagementNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

---

##### `PutNamespace` <a name="PutNamespace" id="@cdktf/provider-vsphere.supervisor.Supervisor.putNamespace"></a>

```go
func PutNamespace(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putNamespace.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPodCidr` <a name="PutPodCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putPodCidr"></a>

```go
func PutPodCidr(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putPodCidr.parameter.value"></a>

- *Type:* interface{}

---

##### `PutServiceCidr` <a name="PutServiceCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putServiceCidr"></a>

```go
func PutServiceCidr(value SupervisorServiceCidr)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putServiceCidr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.supervisor.Supervisor.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vsphere.supervisor.Supervisor.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Supervisor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.supervisor.Supervisor.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

supervisor.Supervisor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.supervisor.Supervisor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

supervisor.Supervisor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

supervisor.Supervisor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

supervisor.Supervisor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Supervisor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Supervisor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Supervisor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Supervisor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidr">EgressCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList">SupervisorEgressCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidr">IngressCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList">SupervisorIngressCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetwork">ManagementNetwork</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference">SupervisorManagementNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.namespace">Namespace</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList">SupervisorNamespaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidr">PodCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList">SupervisorPodCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidr">ServiceCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference">SupervisorServiceCidrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibraryInput">ContentLibraryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuidInput">DvsUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeClusterInput">EdgeClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidrInput">EgressCidrInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidrInput">IngressCidrInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDnsInput">MainDnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.mainNtpInput">MainNtpInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetworkInput">ManagementNetworkInput</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.namespaceInput">NamespaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidrInput">PodCidrInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomainsInput">SearchDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidrInput">ServiceCidrInput</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHintInput">SizingHintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicyInput">StoragePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDnsInput">WorkerDnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.workerNtpInput">WorkerNtpInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibrary">ContentLibrary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuid">DvsUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeCluster">EdgeCluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDns">MainDns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.mainNtp">MainNtp</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomains">SearchDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHint">SizingHint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicy">StoragePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDns">WorkerDns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.workerNtp">WorkerNtp</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EgressCidr`<sup>Required</sup> <a name="EgressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidr"></a>

```go
func EgressCidr() SupervisorEgressCidrList
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList">SupervisorEgressCidrList</a>

---

##### `IngressCidr`<sup>Required</sup> <a name="IngressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidr"></a>

```go
func IngressCidr() SupervisorIngressCidrList
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList">SupervisorIngressCidrList</a>

---

##### `ManagementNetwork`<sup>Required</sup> <a name="ManagementNetwork" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetwork"></a>

```go
func ManagementNetwork() SupervisorManagementNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference">SupervisorManagementNetworkOutputReference</a>

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.namespace"></a>

```go
func Namespace() SupervisorNamespaceList
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList">SupervisorNamespaceList</a>

---

##### `PodCidr`<sup>Required</sup> <a name="PodCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidr"></a>

```go
func PodCidr() SupervisorPodCidrList
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList">SupervisorPodCidrList</a>

---

##### `ServiceCidr`<sup>Required</sup> <a name="ServiceCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidr"></a>

```go
func ServiceCidr() SupervisorServiceCidrOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference">SupervisorServiceCidrOutputReference</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `ContentLibraryInput`<sup>Optional</sup> <a name="ContentLibraryInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibraryInput"></a>

```go
func ContentLibraryInput() *string
```

- *Type:* *string

---

##### `DvsUuidInput`<sup>Optional</sup> <a name="DvsUuidInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuidInput"></a>

```go
func DvsUuidInput() *string
```

- *Type:* *string

---

##### `EdgeClusterInput`<sup>Optional</sup> <a name="EdgeClusterInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeClusterInput"></a>

```go
func EdgeClusterInput() *string
```

- *Type:* *string

---

##### `EgressCidrInput`<sup>Optional</sup> <a name="EgressCidrInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidrInput"></a>

```go
func EgressCidrInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngressCidrInput`<sup>Optional</sup> <a name="IngressCidrInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidrInput"></a>

```go
func IngressCidrInput() interface{}
```

- *Type:* interface{}

---

##### `MainDnsInput`<sup>Optional</sup> <a name="MainDnsInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDnsInput"></a>

```go
func MainDnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MainNtpInput`<sup>Optional</sup> <a name="MainNtpInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.mainNtpInput"></a>

```go
func MainNtpInput() *[]*string
```

- *Type:* *[]*string

---

##### `ManagementNetworkInput`<sup>Optional</sup> <a name="ManagementNetworkInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetworkInput"></a>

```go
func ManagementNetworkInput() SupervisorManagementNetwork
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.namespaceInput"></a>

```go
func NamespaceInput() interface{}
```

- *Type:* interface{}

---

##### `PodCidrInput`<sup>Optional</sup> <a name="PodCidrInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidrInput"></a>

```go
func PodCidrInput() interface{}
```

- *Type:* interface{}

---

##### `SearchDomainsInput`<sup>Optional</sup> <a name="SearchDomainsInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomainsInput"></a>

```go
func SearchDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceCidrInput`<sup>Optional</sup> <a name="ServiceCidrInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidrInput"></a>

```go
func ServiceCidrInput() SupervisorServiceCidr
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

---

##### `SizingHintInput`<sup>Optional</sup> <a name="SizingHintInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHintInput"></a>

```go
func SizingHintInput() *string
```

- *Type:* *string

---

##### `StoragePolicyInput`<sup>Optional</sup> <a name="StoragePolicyInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicyInput"></a>

```go
func StoragePolicyInput() *string
```

- *Type:* *string

---

##### `WorkerDnsInput`<sup>Optional</sup> <a name="WorkerDnsInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDnsInput"></a>

```go
func WorkerDnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `WorkerNtpInput`<sup>Optional</sup> <a name="WorkerNtpInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.workerNtpInput"></a>

```go
func WorkerNtpInput() *[]*string
```

- *Type:* *[]*string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `ContentLibrary`<sup>Required</sup> <a name="ContentLibrary" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibrary"></a>

```go
func ContentLibrary() *string
```

- *Type:* *string

---

##### `DvsUuid`<sup>Required</sup> <a name="DvsUuid" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuid"></a>

```go
func DvsUuid() *string
```

- *Type:* *string

---

##### `EdgeCluster`<sup>Required</sup> <a name="EdgeCluster" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeCluster"></a>

```go
func EdgeCluster() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MainDns`<sup>Required</sup> <a name="MainDns" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDns"></a>

```go
func MainDns() *[]*string
```

- *Type:* *[]*string

---

##### `MainNtp`<sup>Required</sup> <a name="MainNtp" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.mainNtp"></a>

```go
func MainNtp() *[]*string
```

- *Type:* *[]*string

---

##### `SearchDomains`<sup>Required</sup> <a name="SearchDomains" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomains"></a>

```go
func SearchDomains() *[]*string
```

- *Type:* *[]*string

---

##### `SizingHint`<sup>Required</sup> <a name="SizingHint" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHint"></a>

```go
func SizingHint() *string
```

- *Type:* *string

---

##### `StoragePolicy`<sup>Required</sup> <a name="StoragePolicy" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicy"></a>

```go
func StoragePolicy() *string
```

- *Type:* *string

---

##### `WorkerDns`<sup>Required</sup> <a name="WorkerDns" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDns"></a>

```go
func WorkerDns() *[]*string
```

- *Type:* *[]*string

---

##### `WorkerNtp`<sup>Required</sup> <a name="WorkerNtp" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.workerNtp"></a>

```go
func WorkerNtp() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SupervisorConfig <a name="SupervisorConfig" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

&supervisor.SupervisorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Cluster: *string,
	ContentLibrary: *string,
	DvsUuid: *string,
	EdgeCluster: *string,
	EgressCidr: interface{},
	IngressCidr: interface{},
	MainDns: *[]*string,
	MainNtp: *[]*string,
	ManagementNetwork: github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11.supervisor.SupervisorManagementNetwork,
	PodCidr: interface{},
	SearchDomains: *[]*string,
	ServiceCidr: github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11.supervisor.SupervisorServiceCidr,
	SizingHint: *string,
	StoragePolicy: *string,
	WorkerDns: *[]*string,
	WorkerNtp: *[]*string,
	Id: *string,
	Namespace: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.cluster">Cluster</a></code> | <code>*string</code> | ID of the vSphere cluster on which workload management will be enabled. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.contentLibrary">ContentLibrary</a></code> | <code>*string</code> | ID of the subscribed content library. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dvsUuid">DvsUuid</a></code> | <code>*string</code> | The UUID (not ID) of the distributed switch. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.edgeCluster">EdgeCluster</a></code> | <code>*string</code> | ID of the NSX Edge Cluster. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.egressCidr">EgressCidr</a></code> | <code>interface{}</code> | egress_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.ingressCidr">IngressCidr</a></code> | <code>interface{}</code> | ingress_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.mainDns">MainDns</a></code> | <code>*[]*string</code> | List of DNS servers to use on the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.mainNtp">MainNtp</a></code> | <code>*[]*string</code> | List of NTP servers to use on the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.managementNetwork">ManagementNetwork</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a></code> | management_network block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.podCidr">PodCidr</a></code> | <code>interface{}</code> | pod_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.searchDomains">SearchDomains</a></code> | <code>*[]*string</code> | List of DNS search domains. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.serviceCidr">ServiceCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a></code> | service_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.sizingHint">SizingHint</a></code> | <code>*string</code> | Size of the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.storagePolicy">StoragePolicy</a></code> | <code>*string</code> | The name of a storage policy associated with the datastore where the container images will be stored. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.workerDns">WorkerDns</a></code> | <code>*[]*string</code> | List of DNS servers to use on the worker nodes. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.workerNtp">WorkerNtp</a></code> | <code>*[]*string</code> | List of NTP servers to use on the worker nodes. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#id Supervisor#id}. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.namespace">Namespace</a></code> | <code>interface{}</code> | namespace block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

ID of the vSphere cluster on which workload management will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#cluster Supervisor#cluster}

---

##### `ContentLibrary`<sup>Required</sup> <a name="ContentLibrary" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.contentLibrary"></a>

```go
ContentLibrary *string
```

- *Type:* *string

ID of the subscribed content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#content_library Supervisor#content_library}

---

##### `DvsUuid`<sup>Required</sup> <a name="DvsUuid" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dvsUuid"></a>

```go
DvsUuid *string
```

- *Type:* *string

The UUID (not ID) of the distributed switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#dvs_uuid Supervisor#dvs_uuid}

---

##### `EdgeCluster`<sup>Required</sup> <a name="EdgeCluster" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.edgeCluster"></a>

```go
EdgeCluster *string
```

- *Type:* *string

ID of the NSX Edge Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#edge_cluster Supervisor#edge_cluster}

---

##### `EgressCidr`<sup>Required</sup> <a name="EgressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.egressCidr"></a>

```go
EgressCidr interface{}
```

- *Type:* interface{}

egress_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#egress_cidr Supervisor#egress_cidr}

---

##### `IngressCidr`<sup>Required</sup> <a name="IngressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.ingressCidr"></a>

```go
IngressCidr interface{}
```

- *Type:* interface{}

ingress_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#ingress_cidr Supervisor#ingress_cidr}

---

##### `MainDns`<sup>Required</sup> <a name="MainDns" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.mainDns"></a>

```go
MainDns *[]*string
```

- *Type:* *[]*string

List of DNS servers to use on the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#main_dns Supervisor#main_dns}

---

##### `MainNtp`<sup>Required</sup> <a name="MainNtp" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.mainNtp"></a>

```go
MainNtp *[]*string
```

- *Type:* *[]*string

List of NTP servers to use on the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#main_ntp Supervisor#main_ntp}

---

##### `ManagementNetwork`<sup>Required</sup> <a name="ManagementNetwork" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.managementNetwork"></a>

```go
ManagementNetwork SupervisorManagementNetwork
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

management_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#management_network Supervisor#management_network}

---

##### `PodCidr`<sup>Required</sup> <a name="PodCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.podCidr"></a>

```go
PodCidr interface{}
```

- *Type:* interface{}

pod_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#pod_cidr Supervisor#pod_cidr}

---

##### `SearchDomains`<sup>Required</sup> <a name="SearchDomains" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.searchDomains"></a>

```go
SearchDomains *[]*string
```

- *Type:* *[]*string

List of DNS search domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#search_domains Supervisor#search_domains}

---

##### `ServiceCidr`<sup>Required</sup> <a name="ServiceCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.serviceCidr"></a>

```go
ServiceCidr SupervisorServiceCidr
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

service_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#service_cidr Supervisor#service_cidr}

---

##### `SizingHint`<sup>Required</sup> <a name="SizingHint" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.sizingHint"></a>

```go
SizingHint *string
```

- *Type:* *string

Size of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#sizing_hint Supervisor#sizing_hint}

---

##### `StoragePolicy`<sup>Required</sup> <a name="StoragePolicy" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.storagePolicy"></a>

```go
StoragePolicy *string
```

- *Type:* *string

The name of a storage policy associated with the datastore where the container images will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#storage_policy Supervisor#storage_policy}

---

##### `WorkerDns`<sup>Required</sup> <a name="WorkerDns" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.workerDns"></a>

```go
WorkerDns *[]*string
```

- *Type:* *[]*string

List of DNS servers to use on the worker nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#worker_dns Supervisor#worker_dns}

---

##### `WorkerNtp`<sup>Required</sup> <a name="WorkerNtp" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.workerNtp"></a>

```go
WorkerNtp *[]*string
```

- *Type:* *[]*string

List of NTP servers to use on the worker nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#worker_ntp Supervisor#worker_ntp}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#id Supervisor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.namespace"></a>

```go
Namespace interface{}
```

- *Type:* interface{}

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#namespace Supervisor#namespace}

---

### SupervisorEgressCidr <a name="SupervisorEgressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

&supervisor.SupervisorEgressCidr {
	Address: *string,
	Prefix: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.address">Address</a></code> | <code>*string</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.prefix">Prefix</a></code> | <code>*f64</code> | Subnet prefix. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.address"></a>

```go
Address *string
```

- *Type:* *string

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#address Supervisor#address}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.prefix"></a>

```go
Prefix *f64
```

- *Type:* *f64

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#prefix Supervisor#prefix}

---

### SupervisorIngressCidr <a name="SupervisorIngressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

&supervisor.SupervisorIngressCidr {
	Address: *string,
	Prefix: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.address">Address</a></code> | <code>*string</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.prefix">Prefix</a></code> | <code>*f64</code> | Subnet prefix. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.address"></a>

```go
Address *string
```

- *Type:* *string

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#address Supervisor#address}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.prefix"></a>

```go
Prefix *f64
```

- *Type:* *f64

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#prefix Supervisor#prefix}

---

### SupervisorManagementNetwork <a name="SupervisorManagementNetwork" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

&supervisor.SupervisorManagementNetwork {
	AddressCount: *f64,
	Gateway: *string,
	Network: *string,
	StartingAddress: *string,
	SubnetMask: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.addressCount">AddressCount</a></code> | <code>*f64</code> | Number of addresses to allocate. Starts from 'starting_address'. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.gateway">Gateway</a></code> | <code>*string</code> | Gateway IP address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.network">Network</a></code> | <code>*string</code> | ID of the network. (e.g. a distributed port group). |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.startingAddress">StartingAddress</a></code> | <code>*string</code> | Starting address of the management network range. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.subnetMask">SubnetMask</a></code> | <code>*string</code> | Subnet mask. |

---

##### `AddressCount`<sup>Required</sup> <a name="AddressCount" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.addressCount"></a>

```go
AddressCount *f64
```

- *Type:* *f64

Number of addresses to allocate. Starts from 'starting_address'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#address_count Supervisor#address_count}

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.gateway"></a>

```go
Gateway *string
```

- *Type:* *string

Gateway IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#gateway Supervisor#gateway}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.network"></a>

```go
Network *string
```

- *Type:* *string

ID of the network. (e.g. a distributed port group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#network Supervisor#network}

---

##### `StartingAddress`<sup>Required</sup> <a name="StartingAddress" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.startingAddress"></a>

```go
StartingAddress *string
```

- *Type:* *string

Starting address of the management network range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#starting_address Supervisor#starting_address}

---

##### `SubnetMask`<sup>Required</sup> <a name="SubnetMask" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.subnetMask"></a>

```go
SubnetMask *string
```

- *Type:* *string

Subnet mask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#subnet_mask Supervisor#subnet_mask}

---

### SupervisorNamespace <a name="SupervisorNamespace" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

&supervisor.SupervisorNamespace {
	Name: *string,
	ContentLibraries: *[]*string,
	VmClasses: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.name">Name</a></code> | <code>*string</code> | The name of the namespace. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.contentLibraries">ContentLibraries</a></code> | <code>*[]*string</code> | A list of content libraries. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.vmClasses">VmClasses</a></code> | <code>*[]*string</code> | A list of virtual machine classes. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#name Supervisor#name}

---

##### `ContentLibraries`<sup>Optional</sup> <a name="ContentLibraries" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.contentLibraries"></a>

```go
ContentLibraries *[]*string
```

- *Type:* *[]*string

A list of content libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#content_libraries Supervisor#content_libraries}

---

##### `VmClasses`<sup>Optional</sup> <a name="VmClasses" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.vmClasses"></a>

```go
VmClasses *[]*string
```

- *Type:* *[]*string

A list of virtual machine classes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#vm_classes Supervisor#vm_classes}

---

### SupervisorPodCidr <a name="SupervisorPodCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

&supervisor.SupervisorPodCidr {
	Address: *string,
	Prefix: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.address">Address</a></code> | <code>*string</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.prefix">Prefix</a></code> | <code>*f64</code> | Subnet prefix. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.address"></a>

```go
Address *string
```

- *Type:* *string

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#address Supervisor#address}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.prefix"></a>

```go
Prefix *f64
```

- *Type:* *f64

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#prefix Supervisor#prefix}

---

### SupervisorServiceCidr <a name="SupervisorServiceCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

&supervisor.SupervisorServiceCidr {
	Address: *string,
	Prefix: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.address">Address</a></code> | <code>*string</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.prefix">Prefix</a></code> | <code>*f64</code> | Subnet prefix. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.address"></a>

```go
Address *string
```

- *Type:* *string

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#address Supervisor#address}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.prefix"></a>

```go
Prefix *f64
```

- *Type:* *f64

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/supervisor#prefix Supervisor#prefix}

---

## Classes <a name="Classes" id="Classes"></a>

### SupervisorEgressCidrList <a name="SupervisorEgressCidrList" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

supervisor.NewSupervisorEgressCidrList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SupervisorEgressCidrList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.get"></a>

```go
func Get(index *f64) SupervisorEgressCidrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SupervisorEgressCidrOutputReference <a name="SupervisorEgressCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

supervisor.NewSupervisorEgressCidrOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SupervisorEgressCidrOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefix">Prefix</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *f64
```

- *Type:* *f64

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefix"></a>

```go
func Prefix() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SupervisorIngressCidrList <a name="SupervisorIngressCidrList" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

supervisor.NewSupervisorIngressCidrList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SupervisorIngressCidrList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.get"></a>

```go
func Get(index *f64) SupervisorIngressCidrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SupervisorIngressCidrOutputReference <a name="SupervisorIngressCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

supervisor.NewSupervisorIngressCidrOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SupervisorIngressCidrOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefix">Prefix</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *f64
```

- *Type:* *f64

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefix"></a>

```go
func Prefix() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SupervisorManagementNetworkOutputReference <a name="SupervisorManagementNetworkOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

supervisor.NewSupervisorManagementNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SupervisorManagementNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCountInput">AddressCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gatewayInput">GatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddressInput">StartingAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMaskInput">SubnetMaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCount">AddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddress">StartingAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMask">SubnetMask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressCountInput`<sup>Optional</sup> <a name="AddressCountInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCountInput"></a>

```go
func AddressCountInput() *f64
```

- *Type:* *f64

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gatewayInput"></a>

```go
func GatewayInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `StartingAddressInput`<sup>Optional</sup> <a name="StartingAddressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddressInput"></a>

```go
func StartingAddressInput() *string
```

- *Type:* *string

---

##### `SubnetMaskInput`<sup>Optional</sup> <a name="SubnetMaskInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMaskInput"></a>

```go
func SubnetMaskInput() *string
```

- *Type:* *string

---

##### `AddressCount`<sup>Required</sup> <a name="AddressCount" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCount"></a>

```go
func AddressCount() *f64
```

- *Type:* *f64

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `StartingAddress`<sup>Required</sup> <a name="StartingAddress" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddress"></a>

```go
func StartingAddress() *string
```

- *Type:* *string

---

##### `SubnetMask`<sup>Required</sup> <a name="SubnetMask" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMask"></a>

```go
func SubnetMask() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() SupervisorManagementNetwork
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

---


### SupervisorNamespaceList <a name="SupervisorNamespaceList" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

supervisor.NewSupervisorNamespaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SupervisorNamespaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.get"></a>

```go
func Get(index *f64) SupervisorNamespaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SupervisorNamespaceOutputReference <a name="SupervisorNamespaceOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

supervisor.NewSupervisorNamespaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SupervisorNamespaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetContentLibraries">ResetContentLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetVmClasses">ResetVmClasses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentLibraries` <a name="ResetContentLibraries" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetContentLibraries"></a>

```go
func ResetContentLibraries()
```

##### `ResetVmClasses` <a name="ResetVmClasses" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetVmClasses"></a>

```go
func ResetVmClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibrariesInput">ContentLibrariesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClassesInput">VmClassesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibraries">ContentLibraries</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClasses">VmClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentLibrariesInput`<sup>Optional</sup> <a name="ContentLibrariesInput" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibrariesInput"></a>

```go
func ContentLibrariesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VmClassesInput`<sup>Optional</sup> <a name="VmClassesInput" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClassesInput"></a>

```go
func VmClassesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContentLibraries`<sup>Required</sup> <a name="ContentLibraries" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibraries"></a>

```go
func ContentLibraries() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `VmClasses`<sup>Required</sup> <a name="VmClasses" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClasses"></a>

```go
func VmClasses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SupervisorPodCidrList <a name="SupervisorPodCidrList" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

supervisor.NewSupervisorPodCidrList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SupervisorPodCidrList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.get"></a>

```go
func Get(index *f64) SupervisorPodCidrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SupervisorPodCidrOutputReference <a name="SupervisorPodCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

supervisor.NewSupervisorPodCidrOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SupervisorPodCidrOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefix">Prefix</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *f64
```

- *Type:* *f64

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefix"></a>

```go
func Prefix() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SupervisorServiceCidrOutputReference <a name="SupervisorServiceCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v11/supervisor"

supervisor.NewSupervisorServiceCidrOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SupervisorServiceCidrOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefix">Prefix</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *f64
```

- *Type:* *f64

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefix"></a>

```go
func Prefix() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.internalValue"></a>

```go
func InternalValue() SupervisorServiceCidr
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

---



