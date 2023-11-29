# `computeClusterVmDependencyRule` Submodule <a name="`computeClusterVmDependencyRule` Submodule" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeClusterVmDependencyRule <a name="ComputeClusterVmDependencyRule" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_dependency_rule vsphere_compute_cluster_vm_dependency_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computeclustervmdependencyrule"

computeclustervmdependencyrule.NewComputeClusterVmDependencyRule(scope Construct, id *string, config ComputeClusterVmDependencyRuleConfig) ComputeClusterVmDependencyRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig">ComputeClusterVmDependencyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig">ComputeClusterVmDependencyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetMandatory">ResetMandatory</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetId"></a>

```go
func ResetId()
```

##### `ResetMandatory` <a name="ResetMandatory" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetMandatory"></a>

```go
func ResetMandatory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeClusterVmDependencyRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computeclustervmdependencyrule"

computeclustervmdependencyrule.ComputeClusterVmDependencyRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computeclustervmdependencyrule"

computeclustervmdependencyrule.ComputeClusterVmDependencyRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computeclustervmdependencyrule"

computeclustervmdependencyrule.ComputeClusterVmDependencyRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computeclustervmdependencyrule"

computeclustervmdependencyrule.ComputeClusterVmDependencyRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeClusterVmDependencyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeClusterVmDependencyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeClusterVmDependencyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_dependency_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeClusterVmDependencyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.computeClusterIdInput">ComputeClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependencyVmGroupNameInput">DependencyVmGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.mandatoryInput">MandatoryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.vmGroupNameInput">VmGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.computeClusterId">ComputeClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependencyVmGroupName">DependencyVmGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.mandatory">Mandatory</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.vmGroupName">VmGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComputeClusterIdInput`<sup>Optional</sup> <a name="ComputeClusterIdInput" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.computeClusterIdInput"></a>

```go
func ComputeClusterIdInput() *string
```

- *Type:* *string

---

##### `DependencyVmGroupNameInput`<sup>Optional</sup> <a name="DependencyVmGroupNameInput" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependencyVmGroupNameInput"></a>

```go
func DependencyVmGroupNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MandatoryInput`<sup>Optional</sup> <a name="MandatoryInput" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.mandatoryInput"></a>

```go
func MandatoryInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VmGroupNameInput`<sup>Optional</sup> <a name="VmGroupNameInput" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.vmGroupNameInput"></a>

```go
func VmGroupNameInput() *string
```

- *Type:* *string

---

##### `ComputeClusterId`<sup>Required</sup> <a name="ComputeClusterId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.computeClusterId"></a>

```go
func ComputeClusterId() *string
```

- *Type:* *string

---

##### `DependencyVmGroupName`<sup>Required</sup> <a name="DependencyVmGroupName" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependencyVmGroupName"></a>

```go
func DependencyVmGroupName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mandatory`<sup>Required</sup> <a name="Mandatory" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.mandatory"></a>

```go
func Mandatory() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `VmGroupName`<sup>Required</sup> <a name="VmGroupName" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.vmGroupName"></a>

```go
func VmGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeClusterVmDependencyRuleConfig <a name="ComputeClusterVmDependencyRuleConfig" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/computeclustervmdependencyrule"

&computeclustervmdependencyrule.ComputeClusterVmDependencyRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ComputeClusterId: *string,
	DependencyVmGroupName: *string,
	Name: *string,
	VmGroupName: *string,
	Enabled: interface{},
	Id: *string,
	Mandatory: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.computeClusterId">ComputeClusterId</a></code> | <code>*string</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.dependencyVmGroupName">DependencyVmGroupName</a></code> | <code>*string</code> | The name of the VM group that this rule depends on. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.name">Name</a></code> | <code>*string</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.vmGroupName">VmGroupName</a></code> | <code>*string</code> | The name of the VM group that is the subject of this rule. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enable this rule in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_dependency_rule#id ComputeClusterVmDependencyRule#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.mandatory">Mandatory</a></code> | <code>interface{}</code> | When true, prevents any virtual machine operations that may violate this rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComputeClusterId`<sup>Required</sup> <a name="ComputeClusterId" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.computeClusterId"></a>

```go
ComputeClusterId *string
```

- *Type:* *string

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_dependency_rule#compute_cluster_id ComputeClusterVmDependencyRule#compute_cluster_id}

---

##### `DependencyVmGroupName`<sup>Required</sup> <a name="DependencyVmGroupName" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.dependencyVmGroupName"></a>

```go
DependencyVmGroupName *string
```

- *Type:* *string

The name of the VM group that this rule depends on.

The VMs defined in the group specified by vm_group_name will not be started until the VMs in this group are started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_dependency_rule#dependency_vm_group_name ComputeClusterVmDependencyRule#dependency_vm_group_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_dependency_rule#name ComputeClusterVmDependencyRule#name}

---

##### `VmGroupName`<sup>Required</sup> <a name="VmGroupName" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.vmGroupName"></a>

```go
VmGroupName *string
```

- *Type:* *string

The name of the VM group that is the subject of this rule.

The VMs defined in this group will not be started until the VMs in the group specified by dependency_vm_group_name are started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_dependency_rule#vm_group_name ComputeClusterVmDependencyRule#vm_group_name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enable this rule in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_dependency_rule#enabled ComputeClusterVmDependencyRule#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_dependency_rule#id ComputeClusterVmDependencyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mandatory`<sup>Optional</sup> <a name="Mandatory" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.mandatory"></a>

```go
Mandatory interface{}
```

- *Type:* interface{}

When true, prevents any virtual machine operations that may violate this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_dependency_rule#mandatory ComputeClusterVmDependencyRule#mandatory}

---



