# `data_vsphere_ovf_vm_template`

Refer to the Terraform Registory for docs: [`data_vsphere_ovf_vm_template`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template).

# `dataVsphereOvfVmTemplate` Submodule <a name="`dataVsphereOvfVmTemplate` Submodule" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereOvfVmTemplate <a name="DataVsphereOvfVmTemplate" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template vsphere_ovf_vm_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v4/datavsphereovfvmtemplate"

datavsphereovfvmtemplate.NewDataVsphereOvfVmTemplate(scope Construct, id *string, config DataVsphereOvfVmTemplateConfig) DataVsphereOvfVmTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig">DataVsphereOvfVmTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig">DataVsphereOvfVmTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetAllowUnverifiedSslCert">ResetAllowUnverifiedSslCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDatastoreId">ResetDatastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDeploymentOption">ResetDeploymentOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDiskProvisioning">ResetDiskProvisioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetEnableHiddenProperties">ResetEnableHiddenProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetIpAllocationPolicy">ResetIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetIpProtocol">ResetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetLocalOvfPath">ResetLocalOvfPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetOvfNetworkMap">ResetOvfNetworkMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetRemoteOvfUrl">ResetRemoteOvfUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAllowUnverifiedSslCert` <a name="ResetAllowUnverifiedSslCert" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetAllowUnverifiedSslCert"></a>

```go
func ResetAllowUnverifiedSslCert()
```

##### `ResetDatastoreId` <a name="ResetDatastoreId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDatastoreId"></a>

```go
func ResetDatastoreId()
```

##### `ResetDeploymentOption` <a name="ResetDeploymentOption" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDeploymentOption"></a>

```go
func ResetDeploymentOption()
```

##### `ResetDiskProvisioning` <a name="ResetDiskProvisioning" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetDiskProvisioning"></a>

```go
func ResetDiskProvisioning()
```

##### `ResetEnableHiddenProperties` <a name="ResetEnableHiddenProperties" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetEnableHiddenProperties"></a>

```go
func ResetEnableHiddenProperties()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetFolder"></a>

```go
func ResetFolder()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAllocationPolicy` <a name="ResetIpAllocationPolicy" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetIpAllocationPolicy"></a>

```go
func ResetIpAllocationPolicy()
```

##### `ResetIpProtocol` <a name="ResetIpProtocol" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetIpProtocol"></a>

```go
func ResetIpProtocol()
```

##### `ResetLocalOvfPath` <a name="ResetLocalOvfPath" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetLocalOvfPath"></a>

```go
func ResetLocalOvfPath()
```

##### `ResetOvfNetworkMap` <a name="ResetOvfNetworkMap" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetOvfNetworkMap"></a>

```go
func ResetOvfNetworkMap()
```

##### `ResetRemoteOvfUrl` <a name="ResetRemoteOvfUrl" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.resetRemoteOvfUrl"></a>

```go
func ResetRemoteOvfUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v4/datavsphereovfvmtemplate"

datavsphereovfvmtemplate.DataVsphereOvfVmTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v4/datavsphereovfvmtemplate"

datavsphereovfvmtemplate.DataVsphereOvfVmTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v4/datavsphereovfvmtemplate"

datavsphereovfvmtemplate.DataVsphereOvfVmTemplate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.alternateGuestName">AlternateGuestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.annotation">Annotation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuHotAddEnabled">CpuHotAddEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuHotRemoveEnabled">CpuHotRemoveEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuPerformanceCountersEnabled">CpuPerformanceCountersEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.firmware">Firmware</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.guestId">GuestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ideControllerCount">IdeControllerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.memoryHotAddEnabled">MemoryHotAddEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.nestedHvEnabled">NestedHvEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.numCoresPerSocket">NumCoresPerSocket</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.numCpus">NumCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.sataControllerCount">SataControllerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.scsiControllerCount">ScsiControllerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.scsiType">ScsiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.swapPlacementPolicy">SwapPlacementPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.allowUnverifiedSslCertInput">AllowUnverifiedSslCertInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.datastoreIdInput">DatastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.deploymentOptionInput">DeploymentOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.diskProvisioningInput">DiskProvisioningInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.enableHiddenPropertiesInput">EnableHiddenPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.hostSystemIdInput">HostSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipAllocationPolicyInput">IpAllocationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipProtocolInput">IpProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.localOvfPathInput">LocalOvfPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ovfNetworkMapInput">OvfNetworkMapInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.remoteOvfUrlInput">RemoteOvfUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.resourcePoolIdInput">ResourcePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.allowUnverifiedSslCert">AllowUnverifiedSslCert</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.datastoreId">DatastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.deploymentOption">DeploymentOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.diskProvisioning">DiskProvisioning</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.enableHiddenProperties">EnableHiddenProperties</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.hostSystemId">HostSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipAllocationPolicy">IpAllocationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.localOvfPath">LocalOvfPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ovfNetworkMap">OvfNetworkMap</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.remoteOvfUrl">RemoteOvfUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.resourcePoolId">ResourcePoolId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AlternateGuestName`<sup>Required</sup> <a name="AlternateGuestName" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.alternateGuestName"></a>

```go
func AlternateGuestName() *string
```

- *Type:* *string

---

##### `Annotation`<sup>Required</sup> <a name="Annotation" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.annotation"></a>

```go
func Annotation() *string
```

- *Type:* *string

---

##### `CpuHotAddEnabled`<sup>Required</sup> <a name="CpuHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuHotAddEnabled"></a>

```go
func CpuHotAddEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CpuHotRemoveEnabled`<sup>Required</sup> <a name="CpuHotRemoveEnabled" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuHotRemoveEnabled"></a>

```go
func CpuHotRemoveEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CpuPerformanceCountersEnabled`<sup>Required</sup> <a name="CpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.cpuPerformanceCountersEnabled"></a>

```go
func CpuPerformanceCountersEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Firmware`<sup>Required</sup> <a name="Firmware" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.firmware"></a>

```go
func Firmware() *string
```

- *Type:* *string

---

##### `GuestId`<sup>Required</sup> <a name="GuestId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.guestId"></a>

```go
func GuestId() *string
```

- *Type:* *string

---

##### `IdeControllerCount`<sup>Required</sup> <a name="IdeControllerCount" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ideControllerCount"></a>

```go
func IdeControllerCount() *f64
```

- *Type:* *f64

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `MemoryHotAddEnabled`<sup>Required</sup> <a name="MemoryHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.memoryHotAddEnabled"></a>

```go
func MemoryHotAddEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NestedHvEnabled`<sup>Required</sup> <a name="NestedHvEnabled" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.nestedHvEnabled"></a>

```go
func NestedHvEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NumCoresPerSocket`<sup>Required</sup> <a name="NumCoresPerSocket" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.numCoresPerSocket"></a>

```go
func NumCoresPerSocket() *f64
```

- *Type:* *f64

---

##### `NumCpus`<sup>Required</sup> <a name="NumCpus" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.numCpus"></a>

```go
func NumCpus() *f64
```

- *Type:* *f64

---

##### `SataControllerCount`<sup>Required</sup> <a name="SataControllerCount" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.sataControllerCount"></a>

```go
func SataControllerCount() *f64
```

- *Type:* *f64

---

##### `ScsiControllerCount`<sup>Required</sup> <a name="ScsiControllerCount" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.scsiControllerCount"></a>

```go
func ScsiControllerCount() *f64
```

- *Type:* *f64

---

##### `ScsiType`<sup>Required</sup> <a name="ScsiType" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.scsiType"></a>

```go
func ScsiType() *string
```

- *Type:* *string

---

##### `SwapPlacementPolicy`<sup>Required</sup> <a name="SwapPlacementPolicy" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.swapPlacementPolicy"></a>

```go
func SwapPlacementPolicy() *string
```

- *Type:* *string

---

##### `AllowUnverifiedSslCertInput`<sup>Optional</sup> <a name="AllowUnverifiedSslCertInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.allowUnverifiedSslCertInput"></a>

```go
func AllowUnverifiedSslCertInput() interface{}
```

- *Type:* interface{}

---

##### `DatastoreIdInput`<sup>Optional</sup> <a name="DatastoreIdInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.datastoreIdInput"></a>

```go
func DatastoreIdInput() *string
```

- *Type:* *string

---

##### `DeploymentOptionInput`<sup>Optional</sup> <a name="DeploymentOptionInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.deploymentOptionInput"></a>

```go
func DeploymentOptionInput() *string
```

- *Type:* *string

---

##### `DiskProvisioningInput`<sup>Optional</sup> <a name="DiskProvisioningInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.diskProvisioningInput"></a>

```go
func DiskProvisioningInput() *string
```

- *Type:* *string

---

##### `EnableHiddenPropertiesInput`<sup>Optional</sup> <a name="EnableHiddenPropertiesInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.enableHiddenPropertiesInput"></a>

```go
func EnableHiddenPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `HostSystemIdInput`<sup>Optional</sup> <a name="HostSystemIdInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.hostSystemIdInput"></a>

```go
func HostSystemIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAllocationPolicyInput`<sup>Optional</sup> <a name="IpAllocationPolicyInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipAllocationPolicyInput"></a>

```go
func IpAllocationPolicyInput() *string
```

- *Type:* *string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipProtocolInput"></a>

```go
func IpProtocolInput() *string
```

- *Type:* *string

---

##### `LocalOvfPathInput`<sup>Optional</sup> <a name="LocalOvfPathInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.localOvfPathInput"></a>

```go
func LocalOvfPathInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OvfNetworkMapInput`<sup>Optional</sup> <a name="OvfNetworkMapInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ovfNetworkMapInput"></a>

```go
func OvfNetworkMapInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RemoteOvfUrlInput`<sup>Optional</sup> <a name="RemoteOvfUrlInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.remoteOvfUrlInput"></a>

```go
func RemoteOvfUrlInput() *string
```

- *Type:* *string

---

##### `ResourcePoolIdInput`<sup>Optional</sup> <a name="ResourcePoolIdInput" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.resourcePoolIdInput"></a>

```go
func ResourcePoolIdInput() *string
```

- *Type:* *string

---

##### `AllowUnverifiedSslCert`<sup>Required</sup> <a name="AllowUnverifiedSslCert" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.allowUnverifiedSslCert"></a>

```go
func AllowUnverifiedSslCert() interface{}
```

- *Type:* interface{}

---

##### `DatastoreId`<sup>Required</sup> <a name="DatastoreId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.datastoreId"></a>

```go
func DatastoreId() *string
```

- *Type:* *string

---

##### `DeploymentOption`<sup>Required</sup> <a name="DeploymentOption" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.deploymentOption"></a>

```go
func DeploymentOption() *string
```

- *Type:* *string

---

##### `DiskProvisioning`<sup>Required</sup> <a name="DiskProvisioning" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.diskProvisioning"></a>

```go
func DiskProvisioning() *string
```

- *Type:* *string

---

##### `EnableHiddenProperties`<sup>Required</sup> <a name="EnableHiddenProperties" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.enableHiddenProperties"></a>

```go
func EnableHiddenProperties() interface{}
```

- *Type:* interface{}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.hostSystemId"></a>

```go
func HostSystemId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAllocationPolicy`<sup>Required</sup> <a name="IpAllocationPolicy" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipAllocationPolicy"></a>

```go
func IpAllocationPolicy() *string
```

- *Type:* *string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `LocalOvfPath`<sup>Required</sup> <a name="LocalOvfPath" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.localOvfPath"></a>

```go
func LocalOvfPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OvfNetworkMap`<sup>Required</sup> <a name="OvfNetworkMap" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.ovfNetworkMap"></a>

```go
func OvfNetworkMap() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RemoteOvfUrl`<sup>Required</sup> <a name="RemoteOvfUrl" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.remoteOvfUrl"></a>

```go
func RemoteOvfUrl() *string
```

- *Type:* *string

---

##### `ResourcePoolId`<sup>Required</sup> <a name="ResourcePoolId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.resourcePoolId"></a>

```go
func ResourcePoolId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereOvfVmTemplateConfig <a name="DataVsphereOvfVmTemplateConfig" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vsphere-go/vsphere/v4/datavsphereovfvmtemplate"

&datavsphereovfvmtemplate.DataVsphereOvfVmTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	HostSystemId: *string,
	Name: *string,
	ResourcePoolId: *string,
	AllowUnverifiedSslCert: interface{},
	DatastoreId: *string,
	DeploymentOption: *string,
	DiskProvisioning: *string,
	EnableHiddenProperties: interface{},
	Folder: *string,
	Id: *string,
	IpAllocationPolicy: *string,
	IpProtocol: *string,
	LocalOvfPath: *string,
	OvfNetworkMap: *map[string]*string,
	RemoteOvfUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.hostSystemId">HostSystemId</a></code> | <code>*string</code> | The ID of an optional host system to pin the virtual machine to. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.name">Name</a></code> | <code>*string</code> | Name of the virtual machine to create. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.resourcePoolId">ResourcePoolId</a></code> | <code>*string</code> | The ID of a resource pool to put the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.allowUnverifiedSslCert">AllowUnverifiedSslCert</a></code> | <code>interface{}</code> | Allow unverified ssl certificates while deploying ovf/ova from url. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.datastoreId">DatastoreId</a></code> | <code>*string</code> | The ID of the virtual machine's datastore. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.deploymentOption">DeploymentOption</a></code> | <code>*string</code> | The Deployment option to be chosen. If empty, the default option is used. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.diskProvisioning">DiskProvisioning</a></code> | <code>*string</code> | An optional disk provisioning. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.enableHiddenProperties">EnableHiddenProperties</a></code> | <code>interface{}</code> | Allow properties with ovf:userConfigurable=false to be set. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.folder">Folder</a></code> | <code>*string</code> | The name of the folder to locate the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template#id DataVsphereOvfVmTemplate#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ipAllocationPolicy">IpAllocationPolicy</a></code> | <code>*string</code> | The IP allocation policy. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | The IP protocol. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.localOvfPath">LocalOvfPath</a></code> | <code>*string</code> | The absolute path to the ovf/ova file in the local system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ovfNetworkMap">OvfNetworkMap</a></code> | <code>*map[string]*string</code> | The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.remoteOvfUrl">RemoteOvfUrl</a></code> | <code>*string</code> | URL to the remote ovf/ova file to be deployed. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.hostSystemId"></a>

```go
HostSystemId *string
```

- *Type:* *string

The ID of an optional host system to pin the virtual machine to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template#host_system_id DataVsphereOvfVmTemplate#host_system_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the virtual machine to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template#name DataVsphereOvfVmTemplate#name}

---

##### `ResourcePoolId`<sup>Required</sup> <a name="ResourcePoolId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.resourcePoolId"></a>

```go
ResourcePoolId *string
```

- *Type:* *string

The ID of a resource pool to put the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template#resource_pool_id DataVsphereOvfVmTemplate#resource_pool_id}

---

##### `AllowUnverifiedSslCert`<sup>Optional</sup> <a name="AllowUnverifiedSslCert" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.allowUnverifiedSslCert"></a>

```go
AllowUnverifiedSslCert interface{}
```

- *Type:* interface{}

Allow unverified ssl certificates while deploying ovf/ova from url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template#allow_unverified_ssl_cert DataVsphereOvfVmTemplate#allow_unverified_ssl_cert}

---

##### `DatastoreId`<sup>Optional</sup> <a name="DatastoreId" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.datastoreId"></a>

```go
DatastoreId *string
```

- *Type:* *string

The ID of the virtual machine's datastore.

The virtual machine configuration is placed here, along with any virtual disks that are created without datastores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template#datastore_id DataVsphereOvfVmTemplate#datastore_id}

---

##### `DeploymentOption`<sup>Optional</sup> <a name="DeploymentOption" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.deploymentOption"></a>

```go
DeploymentOption *string
```

- *Type:* *string

The Deployment option to be chosen. If empty, the default option is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template#deployment_option DataVsphereOvfVmTemplate#deployment_option}

---

##### `DiskProvisioning`<sup>Optional</sup> <a name="DiskProvisioning" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.diskProvisioning"></a>

```go
DiskProvisioning *string
```

- *Type:* *string

An optional disk provisioning.

If set, all the disks in the deployed ovf will have the same specified disk type (e.g., thin provisioned).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template#disk_provisioning DataVsphereOvfVmTemplate#disk_provisioning}

---

##### `EnableHiddenProperties`<sup>Optional</sup> <a name="EnableHiddenProperties" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.enableHiddenProperties"></a>

```go
EnableHiddenProperties interface{}
```

- *Type:* interface{}

Allow properties with ovf:userConfigurable=false to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template#enable_hidden_properties DataVsphereOvfVmTemplate#enable_hidden_properties}

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

The name of the folder to locate the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template#folder DataVsphereOvfVmTemplate#folder}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template#id DataVsphereOvfVmTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAllocationPolicy`<sup>Optional</sup> <a name="IpAllocationPolicy" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ipAllocationPolicy"></a>

```go
IpAllocationPolicy *string
```

- *Type:* *string

The IP allocation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template#ip_allocation_policy DataVsphereOvfVmTemplate#ip_allocation_policy}

---

##### `IpProtocol`<sup>Optional</sup> <a name="IpProtocol" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ipProtocol"></a>

```go
IpProtocol *string
```

- *Type:* *string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template#ip_protocol DataVsphereOvfVmTemplate#ip_protocol}

---

##### `LocalOvfPath`<sup>Optional</sup> <a name="LocalOvfPath" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.localOvfPath"></a>

```go
LocalOvfPath *string
```

- *Type:* *string

The absolute path to the ovf/ova file in the local system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template#local_ovf_path DataVsphereOvfVmTemplate#local_ovf_path}

---

##### `OvfNetworkMap`<sup>Optional</sup> <a name="OvfNetworkMap" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.ovfNetworkMap"></a>

```go
OvfNetworkMap *map[string]*string
```

- *Type:* *map[string]*string

The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template#ovf_network_map DataVsphereOvfVmTemplate#ovf_network_map}

---

##### `RemoteOvfUrl`<sup>Optional</sup> <a name="RemoteOvfUrl" id="@cdktf/provider-vsphere.dataVsphereOvfVmTemplate.DataVsphereOvfVmTemplateConfig.property.remoteOvfUrl"></a>

```go
RemoteOvfUrl *string
```

- *Type:* *string

URL to the remote ovf/ova file to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/data-sources/ovf_vm_template#remote_ovf_url DataVsphereOvfVmTemplate#remote_ovf_url}

---



