# `haVmOverride` Submodule <a name="`haVmOverride` Submodule" id="@cdktf/provider-vsphere.haVmOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HaVmOverride <a name="HaVmOverride" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override vsphere_ha_vm_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/havmoverride"

havmoverride.NewHaVmOverride(scope Construct, id *string, config HaVmOverrideConfig) HaVmOverride
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig">HaVmOverrideConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig">HaVmOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdRecoveryAction">ResetHaDatastoreApdRecoveryAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponse">ResetHaDatastoreApdResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponseDelay">ResetHaDatastoreApdResponseDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastorePdlResponse">ResetHaDatastorePdlResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaHostIsolationResponse">ResetHaHostIsolationResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmFailureInterval">ResetHaVmFailureInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumFailureWindow">ResetHaVmMaximumFailureWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumResets">ResetHaVmMaximumResets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMinimumUptime">ResetHaVmMinimumUptime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoring">ResetHaVmMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoringUseClusterDefaults">ResetHaVmMonitoringUseClusterDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartPriority">ResetHaVmRestartPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartTimeout">ResetHaVmRestartTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetHaDatastoreApdRecoveryAction` <a name="ResetHaDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdRecoveryAction"></a>

```go
func ResetHaDatastoreApdRecoveryAction()
```

##### `ResetHaDatastoreApdResponse` <a name="ResetHaDatastoreApdResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponse"></a>

```go
func ResetHaDatastoreApdResponse()
```

##### `ResetHaDatastoreApdResponseDelay` <a name="ResetHaDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastoreApdResponseDelay"></a>

```go
func ResetHaDatastoreApdResponseDelay()
```

##### `ResetHaDatastorePdlResponse` <a name="ResetHaDatastorePdlResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaDatastorePdlResponse"></a>

```go
func ResetHaDatastorePdlResponse()
```

##### `ResetHaHostIsolationResponse` <a name="ResetHaHostIsolationResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaHostIsolationResponse"></a>

```go
func ResetHaHostIsolationResponse()
```

##### `ResetHaVmFailureInterval` <a name="ResetHaVmFailureInterval" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmFailureInterval"></a>

```go
func ResetHaVmFailureInterval()
```

##### `ResetHaVmMaximumFailureWindow` <a name="ResetHaVmMaximumFailureWindow" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumFailureWindow"></a>

```go
func ResetHaVmMaximumFailureWindow()
```

##### `ResetHaVmMaximumResets` <a name="ResetHaVmMaximumResets" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMaximumResets"></a>

```go
func ResetHaVmMaximumResets()
```

##### `ResetHaVmMinimumUptime` <a name="ResetHaVmMinimumUptime" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMinimumUptime"></a>

```go
func ResetHaVmMinimumUptime()
```

##### `ResetHaVmMonitoring` <a name="ResetHaVmMonitoring" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoring"></a>

```go
func ResetHaVmMonitoring()
```

##### `ResetHaVmMonitoringUseClusterDefaults` <a name="ResetHaVmMonitoringUseClusterDefaults" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmMonitoringUseClusterDefaults"></a>

```go
func ResetHaVmMonitoringUseClusterDefaults()
```

##### `ResetHaVmRestartPriority` <a name="ResetHaVmRestartPriority" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartPriority"></a>

```go
func ResetHaVmRestartPriority()
```

##### `ResetHaVmRestartTimeout` <a name="ResetHaVmRestartTimeout" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetHaVmRestartTimeout"></a>

```go
func ResetHaVmRestartTimeout()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HaVmOverride resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/havmoverride"

havmoverride.HaVmOverride_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/havmoverride"

havmoverride.HaVmOverride_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/havmoverride"

havmoverride.HaVmOverride_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/havmoverride"

havmoverride.HaVmOverride_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a HaVmOverride resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the HaVmOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing HaVmOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the HaVmOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterIdInput">ComputeClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryActionInput">HaDatastoreApdRecoveryActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelayInput">HaDatastoreApdResponseDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseInput">HaDatastoreApdResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponseInput">HaDatastorePdlResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponseInput">HaHostIsolationResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureIntervalInput">HaVmFailureIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindowInput">HaVmMaximumFailureWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResetsInput">HaVmMaximumResetsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptimeInput">HaVmMinimumUptimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringInput">HaVmMonitoringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaultsInput">HaVmMonitoringUseClusterDefaultsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriorityInput">HaVmRestartPriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeoutInput">HaVmRestartTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineIdInput">VirtualMachineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterId">ComputeClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryAction">HaDatastoreApdRecoveryAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponse">HaDatastoreApdResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelay">HaDatastoreApdResponseDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponse">HaDatastorePdlResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponse">HaHostIsolationResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureInterval">HaVmFailureInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindow">HaVmMaximumFailureWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResets">HaVmMaximumResets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptime">HaVmMinimumUptime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoring">HaVmMonitoring</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaults">HaVmMonitoringUseClusterDefaults</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriority">HaVmRestartPriority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeout">HaVmRestartTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineId">VirtualMachineId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComputeClusterIdInput`<sup>Optional</sup> <a name="ComputeClusterIdInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterIdInput"></a>

```go
func ComputeClusterIdInput() *string
```

- *Type:* *string

---

##### `HaDatastoreApdRecoveryActionInput`<sup>Optional</sup> <a name="HaDatastoreApdRecoveryActionInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryActionInput"></a>

```go
func HaDatastoreApdRecoveryActionInput() *string
```

- *Type:* *string

---

##### `HaDatastoreApdResponseDelayInput`<sup>Optional</sup> <a name="HaDatastoreApdResponseDelayInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelayInput"></a>

```go
func HaDatastoreApdResponseDelayInput() *f64
```

- *Type:* *f64

---

##### `HaDatastoreApdResponseInput`<sup>Optional</sup> <a name="HaDatastoreApdResponseInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseInput"></a>

```go
func HaDatastoreApdResponseInput() *string
```

- *Type:* *string

---

##### `HaDatastorePdlResponseInput`<sup>Optional</sup> <a name="HaDatastorePdlResponseInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponseInput"></a>

```go
func HaDatastorePdlResponseInput() *string
```

- *Type:* *string

---

##### `HaHostIsolationResponseInput`<sup>Optional</sup> <a name="HaHostIsolationResponseInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponseInput"></a>

```go
func HaHostIsolationResponseInput() *string
```

- *Type:* *string

---

##### `HaVmFailureIntervalInput`<sup>Optional</sup> <a name="HaVmFailureIntervalInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureIntervalInput"></a>

```go
func HaVmFailureIntervalInput() *f64
```

- *Type:* *f64

---

##### `HaVmMaximumFailureWindowInput`<sup>Optional</sup> <a name="HaVmMaximumFailureWindowInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindowInput"></a>

```go
func HaVmMaximumFailureWindowInput() *f64
```

- *Type:* *f64

---

##### `HaVmMaximumResetsInput`<sup>Optional</sup> <a name="HaVmMaximumResetsInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResetsInput"></a>

```go
func HaVmMaximumResetsInput() *f64
```

- *Type:* *f64

---

##### `HaVmMinimumUptimeInput`<sup>Optional</sup> <a name="HaVmMinimumUptimeInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptimeInput"></a>

```go
func HaVmMinimumUptimeInput() *f64
```

- *Type:* *f64

---

##### `HaVmMonitoringInput`<sup>Optional</sup> <a name="HaVmMonitoringInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringInput"></a>

```go
func HaVmMonitoringInput() *string
```

- *Type:* *string

---

##### `HaVmMonitoringUseClusterDefaultsInput`<sup>Optional</sup> <a name="HaVmMonitoringUseClusterDefaultsInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaultsInput"></a>

```go
func HaVmMonitoringUseClusterDefaultsInput() interface{}
```

- *Type:* interface{}

---

##### `HaVmRestartPriorityInput`<sup>Optional</sup> <a name="HaVmRestartPriorityInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriorityInput"></a>

```go
func HaVmRestartPriorityInput() *string
```

- *Type:* *string

---

##### `HaVmRestartTimeoutInput`<sup>Optional</sup> <a name="HaVmRestartTimeoutInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeoutInput"></a>

```go
func HaVmRestartTimeoutInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `VirtualMachineIdInput`<sup>Optional</sup> <a name="VirtualMachineIdInput" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineIdInput"></a>

```go
func VirtualMachineIdInput() *string
```

- *Type:* *string

---

##### `ComputeClusterId`<sup>Required</sup> <a name="ComputeClusterId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.computeClusterId"></a>

```go
func ComputeClusterId() *string
```

- *Type:* *string

---

##### `HaDatastoreApdRecoveryAction`<sup>Required</sup> <a name="HaDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdRecoveryAction"></a>

```go
func HaDatastoreApdRecoveryAction() *string
```

- *Type:* *string

---

##### `HaDatastoreApdResponse`<sup>Required</sup> <a name="HaDatastoreApdResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponse"></a>

```go
func HaDatastoreApdResponse() *string
```

- *Type:* *string

---

##### `HaDatastoreApdResponseDelay`<sup>Required</sup> <a name="HaDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastoreApdResponseDelay"></a>

```go
func HaDatastoreApdResponseDelay() *f64
```

- *Type:* *f64

---

##### `HaDatastorePdlResponse`<sup>Required</sup> <a name="HaDatastorePdlResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haDatastorePdlResponse"></a>

```go
func HaDatastorePdlResponse() *string
```

- *Type:* *string

---

##### `HaHostIsolationResponse`<sup>Required</sup> <a name="HaHostIsolationResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haHostIsolationResponse"></a>

```go
func HaHostIsolationResponse() *string
```

- *Type:* *string

---

##### `HaVmFailureInterval`<sup>Required</sup> <a name="HaVmFailureInterval" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmFailureInterval"></a>

```go
func HaVmFailureInterval() *f64
```

- *Type:* *f64

---

##### `HaVmMaximumFailureWindow`<sup>Required</sup> <a name="HaVmMaximumFailureWindow" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumFailureWindow"></a>

```go
func HaVmMaximumFailureWindow() *f64
```

- *Type:* *f64

---

##### `HaVmMaximumResets`<sup>Required</sup> <a name="HaVmMaximumResets" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMaximumResets"></a>

```go
func HaVmMaximumResets() *f64
```

- *Type:* *f64

---

##### `HaVmMinimumUptime`<sup>Required</sup> <a name="HaVmMinimumUptime" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMinimumUptime"></a>

```go
func HaVmMinimumUptime() *f64
```

- *Type:* *f64

---

##### `HaVmMonitoring`<sup>Required</sup> <a name="HaVmMonitoring" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoring"></a>

```go
func HaVmMonitoring() *string
```

- *Type:* *string

---

##### `HaVmMonitoringUseClusterDefaults`<sup>Required</sup> <a name="HaVmMonitoringUseClusterDefaults" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmMonitoringUseClusterDefaults"></a>

```go
func HaVmMonitoringUseClusterDefaults() interface{}
```

- *Type:* interface{}

---

##### `HaVmRestartPriority`<sup>Required</sup> <a name="HaVmRestartPriority" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartPriority"></a>

```go
func HaVmRestartPriority() *string
```

- *Type:* *string

---

##### `HaVmRestartTimeout`<sup>Required</sup> <a name="HaVmRestartTimeout" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.haVmRestartTimeout"></a>

```go
func HaVmRestartTimeout() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.virtualMachineId"></a>

```go
func VirtualMachineId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverride.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HaVmOverrideConfig <a name="HaVmOverrideConfig" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v9/havmoverride"

&havmoverride.HaVmOverrideConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ComputeClusterId: *string,
	VirtualMachineId: *string,
	HaDatastoreApdRecoveryAction: *string,
	HaDatastoreApdResponse: *string,
	HaDatastoreApdResponseDelay: *f64,
	HaDatastorePdlResponse: *string,
	HaHostIsolationResponse: *string,
	HaVmFailureInterval: *f64,
	HaVmMaximumFailureWindow: *f64,
	HaVmMaximumResets: *f64,
	HaVmMinimumUptime: *f64,
	HaVmMonitoring: *string,
	HaVmMonitoringUseClusterDefaults: interface{},
	HaVmRestartPriority: *string,
	HaVmRestartTimeout: *f64,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.computeClusterId">ComputeClusterId</a></code> | <code>*string</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.virtualMachineId">VirtualMachineId</a></code> | <code>*string</code> | The managed object ID of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdRecoveryAction">HaDatastoreApdRecoveryAction</a></code> | <code>*string</code> | Controls the action to take on this virtual machine if an APD status on an affected datastore clears in the middle of an APD event. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponse">HaDatastoreApdResponse</a></code> | <code>*string</code> | Controls the action to take on this virtual machine when the cluster has detected loss to all paths to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponseDelay">HaDatastoreApdResponseDelay</a></code> | <code>*f64</code> | Controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastorePdlResponse">HaDatastorePdlResponse</a></code> | <code>*string</code> | Controls the action to take on this virtual machine when the cluster has detected a permanent device loss to a relevant datastore. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haHostIsolationResponse">HaHostIsolationResponse</a></code> | <code>*string</code> | The action to take on this virtual machine when a host is isolated from the rest of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmFailureInterval">HaVmFailureInterval</a></code> | <code>*f64</code> | If a heartbeat from this virtual machine is not received within this configured interval, the virtual machine is marked as failed. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumFailureWindow">HaVmMaximumFailureWindow</a></code> | <code>*f64</code> | The length of the reset window in which ha_vm_maximum_resets can operate. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumResets">HaVmMaximumResets</a></code> | <code>*f64</code> | The maximum number of resets that HA will perform to this virtual machine when responding to a failure event. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMinimumUptime">HaVmMinimumUptime</a></code> | <code>*f64</code> | The time, in seconds, that HA waits after powering on this virtual machine before monitoring for heartbeats. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoring">HaVmMonitoring</a></code> | <code>*string</code> | The type of virtual machine monitoring to use for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoringUseClusterDefaults">HaVmMonitoringUseClusterDefaults</a></code> | <code>interface{}</code> | Determines whether or not the cluster's default settings or the VM override settings specified in this resource are used for virtual machine monitoring. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartPriority">HaVmRestartPriority</a></code> | <code>*string</code> | The restart priority for this virtual machine when vSphere detects a host failure. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartTimeout">HaVmRestartTimeout</a></code> | <code>*f64</code> | The maximum time, in seconds, that vSphere HA will wait for the virtual machine to be ready. |
| <code><a href="#@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#id HaVmOverride#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComputeClusterId`<sup>Required</sup> <a name="ComputeClusterId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.computeClusterId"></a>

```go
ComputeClusterId *string
```

- *Type:* *string

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#compute_cluster_id HaVmOverride#compute_cluster_id}

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.virtualMachineId"></a>

```go
VirtualMachineId *string
```

- *Type:* *string

The managed object ID of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#virtual_machine_id HaVmOverride#virtual_machine_id}

---

##### `HaDatastoreApdRecoveryAction`<sup>Optional</sup> <a name="HaDatastoreApdRecoveryAction" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdRecoveryAction"></a>

```go
HaDatastoreApdRecoveryAction *string
```

- *Type:* *string

Controls the action to take on this virtual machine if an APD status on an affected datastore clears in the middle of an APD event.

Can be one of useClusterDefault, none or reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#ha_datastore_apd_recovery_action HaVmOverride#ha_datastore_apd_recovery_action}

---

##### `HaDatastoreApdResponse`<sup>Optional</sup> <a name="HaDatastoreApdResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponse"></a>

```go
HaDatastoreApdResponse *string
```

- *Type:* *string

Controls the action to take on this virtual machine when the cluster has detected loss to all paths to a relevant datastore.

Can be one of clusterDefault, disabled, warning, restartConservative, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#ha_datastore_apd_response HaVmOverride#ha_datastore_apd_response}

---

##### `HaDatastoreApdResponseDelay`<sup>Optional</sup> <a name="HaDatastoreApdResponseDelay" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastoreApdResponseDelay"></a>

```go
HaDatastoreApdResponseDelay *f64
```

- *Type:* *f64

Controls the delay in seconds to wait after an APD timeout event to execute the response action defined in ha_datastore_apd_response.

Specify -1 to use the cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#ha_datastore_apd_response_delay HaVmOverride#ha_datastore_apd_response_delay}

---

##### `HaDatastorePdlResponse`<sup>Optional</sup> <a name="HaDatastorePdlResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haDatastorePdlResponse"></a>

```go
HaDatastorePdlResponse *string
```

- *Type:* *string

Controls the action to take on this virtual machine when the cluster has detected a permanent device loss to a relevant datastore.

Can be one of clusterDefault, disabled, warning, or restartAggressive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#ha_datastore_pdl_response HaVmOverride#ha_datastore_pdl_response}

---

##### `HaHostIsolationResponse`<sup>Optional</sup> <a name="HaHostIsolationResponse" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haHostIsolationResponse"></a>

```go
HaHostIsolationResponse *string
```

- *Type:* *string

The action to take on this virtual machine when a host is isolated from the rest of the cluster.

Can be one of clusterIsolationResponse, none, powerOff, or shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#ha_host_isolation_response HaVmOverride#ha_host_isolation_response}

---

##### `HaVmFailureInterval`<sup>Optional</sup> <a name="HaVmFailureInterval" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmFailureInterval"></a>

```go
HaVmFailureInterval *f64
```

- *Type:* *f64

If a heartbeat from this virtual machine is not received within this configured interval, the virtual machine is marked as failed.

The value is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#ha_vm_failure_interval HaVmOverride#ha_vm_failure_interval}

---

##### `HaVmMaximumFailureWindow`<sup>Optional</sup> <a name="HaVmMaximumFailureWindow" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumFailureWindow"></a>

```go
HaVmMaximumFailureWindow *f64
```

- *Type:* *f64

The length of the reset window in which ha_vm_maximum_resets can operate.

When this window expires, no more resets are attempted regardless of the setting configured in ha_vm_maximum_resets. -1 means no window, meaning an unlimited reset time is allotted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#ha_vm_maximum_failure_window HaVmOverride#ha_vm_maximum_failure_window}

---

##### `HaVmMaximumResets`<sup>Optional</sup> <a name="HaVmMaximumResets" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMaximumResets"></a>

```go
HaVmMaximumResets *f64
```

- *Type:* *f64

The maximum number of resets that HA will perform to this virtual machine when responding to a failure event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#ha_vm_maximum_resets HaVmOverride#ha_vm_maximum_resets}

---

##### `HaVmMinimumUptime`<sup>Optional</sup> <a name="HaVmMinimumUptime" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMinimumUptime"></a>

```go
HaVmMinimumUptime *f64
```

- *Type:* *f64

The time, in seconds, that HA waits after powering on this virtual machine before monitoring for heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#ha_vm_minimum_uptime HaVmOverride#ha_vm_minimum_uptime}

---

##### `HaVmMonitoring`<sup>Optional</sup> <a name="HaVmMonitoring" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoring"></a>

```go
HaVmMonitoring *string
```

- *Type:* *string

The type of virtual machine monitoring to use for this virtual machine.

Can be one of vmMonitoringDisabled, vmMonitoringOnly, or vmAndAppMonitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#ha_vm_monitoring HaVmOverride#ha_vm_monitoring}

---

##### `HaVmMonitoringUseClusterDefaults`<sup>Optional</sup> <a name="HaVmMonitoringUseClusterDefaults" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmMonitoringUseClusterDefaults"></a>

```go
HaVmMonitoringUseClusterDefaults interface{}
```

- *Type:* interface{}

Determines whether or not the cluster's default settings or the VM override settings specified in this resource are used for virtual machine monitoring.

The default is true (use cluster defaults) - set to false to have overrides take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#ha_vm_monitoring_use_cluster_defaults HaVmOverride#ha_vm_monitoring_use_cluster_defaults}

---

##### `HaVmRestartPriority`<sup>Optional</sup> <a name="HaVmRestartPriority" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartPriority"></a>

```go
HaVmRestartPriority *string
```

- *Type:* *string

The restart priority for this virtual machine when vSphere detects a host failure.

Can be one of clusterRestartPriority, lowest, low, medium, high, or highest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#ha_vm_restart_priority HaVmOverride#ha_vm_restart_priority}

---

##### `HaVmRestartTimeout`<sup>Optional</sup> <a name="HaVmRestartTimeout" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.haVmRestartTimeout"></a>

```go
HaVmRestartTimeout *f64
```

- *Type:* *f64

The maximum time, in seconds, that vSphere HA will wait for the virtual machine to be ready.

Use -1 to use the cluster default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#ha_vm_restart_timeout HaVmOverride#ha_vm_restart_timeout}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.haVmOverride.HaVmOverrideConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/ha_vm_override#id HaVmOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



