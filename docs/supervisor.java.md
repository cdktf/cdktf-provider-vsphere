# `supervisor` Submodule <a name="`supervisor` Submodule" id="@cdktf/provider-vsphere.supervisor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Supervisor <a name="Supervisor" id="@cdktf/provider-vsphere.supervisor.Supervisor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor vsphere_supervisor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.Supervisor;

Supervisor.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .contentLibrary(java.lang.String)
    .dvsUuid(java.lang.String)
    .edgeCluster(java.lang.String)
    .egressCidr(IResolvable)
    .egressCidr(java.util.List<SupervisorEgressCidr>)
    .ingressCidr(IResolvable)
    .ingressCidr(java.util.List<SupervisorIngressCidr>)
    .mainDns(java.util.List<java.lang.String>)
    .managementNetwork(SupervisorManagementNetwork)
    .podCidr(IResolvable)
    .podCidr(java.util.List<SupervisorPodCidr>)
    .searchDomains(java.util.List<java.lang.String>)
    .serviceCidr(SupervisorServiceCidr)
    .sizingHint(java.lang.String)
    .storagePolicy(java.lang.String)
    .workerDns(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .namespace(IResolvable)
//  .namespace(java.util.List<SupervisorNamespace>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | ID of the vSphere cluster on which workload management will be enabled. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.contentLibrary">contentLibrary</a></code> | <code>java.lang.String</code> | ID of the subscribed content library. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.dvsUuid">dvsUuid</a></code> | <code>java.lang.String</code> | The UUID (not ID) of the distributed switch. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.edgeCluster">edgeCluster</a></code> | <code>java.lang.String</code> | ID of the NSX Edge Cluster. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.egressCidr">egressCidr</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>></code> | egress_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.ingressCidr">ingressCidr</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>></code> | ingress_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.mainDns">mainDns</a></code> | <code>java.util.List<java.lang.String></code> | List of DNS servers to use on the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.managementNetwork">managementNetwork</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a></code> | management_network block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.podCidr">podCidr</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>></code> | pod_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.searchDomains">searchDomains</a></code> | <code>java.util.List<java.lang.String></code> | List of DNS search domains. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.serviceCidr">serviceCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a></code> | service_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.sizingHint">sizingHint</a></code> | <code>java.lang.String</code> | Size of the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.storagePolicy">storagePolicy</a></code> | <code>java.lang.String</code> | The name of a storage policy associated with the datastore where the container images will be stored. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.workerDns">workerDns</a></code> | <code>java.util.List<java.lang.String></code> | List of DNS servers to use on the worker nodes. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#id Supervisor#id}. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.namespace">namespace</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>></code> | namespace block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

ID of the vSphere cluster on which workload management will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#cluster Supervisor#cluster}

---

##### `contentLibrary`<sup>Required</sup> <a name="contentLibrary" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.contentLibrary"></a>

- *Type:* java.lang.String

ID of the subscribed content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#content_library Supervisor#content_library}

---

##### `dvsUuid`<sup>Required</sup> <a name="dvsUuid" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.dvsUuid"></a>

- *Type:* java.lang.String

The UUID (not ID) of the distributed switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#dvs_uuid Supervisor#dvs_uuid}

---

##### `edgeCluster`<sup>Required</sup> <a name="edgeCluster" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.edgeCluster"></a>

- *Type:* java.lang.String

ID of the NSX Edge Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#edge_cluster Supervisor#edge_cluster}

---

##### `egressCidr`<sup>Required</sup> <a name="egressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.egressCidr"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>>

egress_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#egress_cidr Supervisor#egress_cidr}

---

##### `ingressCidr`<sup>Required</sup> <a name="ingressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.ingressCidr"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>>

ingress_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#ingress_cidr Supervisor#ingress_cidr}

---

##### `mainDns`<sup>Required</sup> <a name="mainDns" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.mainDns"></a>

- *Type:* java.util.List<java.lang.String>

List of DNS servers to use on the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#main_dns Supervisor#main_dns}

---

##### `managementNetwork`<sup>Required</sup> <a name="managementNetwork" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.managementNetwork"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

management_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#management_network Supervisor#management_network}

---

##### `podCidr`<sup>Required</sup> <a name="podCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.podCidr"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>>

pod_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#pod_cidr Supervisor#pod_cidr}

---

##### `searchDomains`<sup>Required</sup> <a name="searchDomains" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.searchDomains"></a>

- *Type:* java.util.List<java.lang.String>

List of DNS search domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#search_domains Supervisor#search_domains}

---

##### `serviceCidr`<sup>Required</sup> <a name="serviceCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.serviceCidr"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

service_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#service_cidr Supervisor#service_cidr}

---

##### `sizingHint`<sup>Required</sup> <a name="sizingHint" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.sizingHint"></a>

- *Type:* java.lang.String

Size of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#sizing_hint Supervisor#sizing_hint}

---

##### `storagePolicy`<sup>Required</sup> <a name="storagePolicy" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.storagePolicy"></a>

- *Type:* java.lang.String

The name of a storage policy associated with the datastore where the container images will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#storage_policy Supervisor#storage_policy}

---

##### `workerDns`<sup>Required</sup> <a name="workerDns" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.workerDns"></a>

- *Type:* java.util.List<java.lang.String>

List of DNS servers to use on the worker nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#worker_dns Supervisor#worker_dns}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#id Supervisor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.namespace"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>>

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#namespace Supervisor#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putEgressCidr">putEgressCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putIngressCidr">putIngressCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork">putManagementNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putNamespace">putNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putPodCidr">putPodCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putServiceCidr">putServiceCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.Supervisor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.supervisor.Supervisor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.supervisor.Supervisor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.supervisor.Supervisor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.supervisor.Supervisor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.supervisor.Supervisor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.supervisor.Supervisor.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.supervisor.Supervisor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.supervisor.Supervisor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.supervisor.Supervisor.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.supervisor.Supervisor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.supervisor.Supervisor.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.supervisor.Supervisor.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.supervisor.Supervisor.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEgressCidr` <a name="putEgressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putEgressCidr"></a>

```java
public void putEgressCidr(IResolvable OR java.util.List<SupervisorEgressCidr> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putEgressCidr.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>>

---

##### `putIngressCidr` <a name="putIngressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putIngressCidr"></a>

```java
public void putIngressCidr(IResolvable OR java.util.List<SupervisorIngressCidr> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putIngressCidr.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>>

---

##### `putManagementNetwork` <a name="putManagementNetwork" id="@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork"></a>

```java
public void putManagementNetwork(SupervisorManagementNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

---

##### `putNamespace` <a name="putNamespace" id="@cdktf/provider-vsphere.supervisor.Supervisor.putNamespace"></a>

```java
public void putNamespace(IResolvable OR java.util.List<SupervisorNamespace> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putNamespace.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>>

---

##### `putPodCidr` <a name="putPodCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putPodCidr"></a>

```java
public void putPodCidr(IResolvable OR java.util.List<SupervisorPodCidr> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putPodCidr.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>>

---

##### `putServiceCidr` <a name="putServiceCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putServiceCidr"></a>

```java
public void putServiceCidr(SupervisorServiceCidr value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putServiceCidr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.supervisor.Supervisor.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vsphere.supervisor.Supervisor.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Supervisor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.supervisor.Supervisor.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.Supervisor;

Supervisor.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.Supervisor;

Supervisor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.Supervisor;

Supervisor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.Supervisor;

Supervisor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Supervisor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Supervisor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Supervisor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Supervisor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Supervisor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidr">egressCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList">SupervisorEgressCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidr">ingressCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList">SupervisorIngressCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetwork">managementNetwork</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference">SupervisorManagementNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.namespace">namespace</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList">SupervisorNamespaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidr">podCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList">SupervisorPodCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidr">serviceCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference">SupervisorServiceCidrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibraryInput">contentLibraryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuidInput">dvsUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeClusterInput">edgeClusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidrInput">egressCidrInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidrInput">ingressCidrInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDnsInput">mainDnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetworkInput">managementNetworkInput</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.namespaceInput">namespaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidrInput">podCidrInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomainsInput">searchDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidrInput">serviceCidrInput</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHintInput">sizingHintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicyInput">storagePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDnsInput">workerDnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibrary">contentLibrary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuid">dvsUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeCluster">edgeCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDns">mainDns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomains">searchDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHint">sizingHint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicy">storagePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDns">workerDns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `egressCidr`<sup>Required</sup> <a name="egressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidr"></a>

```java
public SupervisorEgressCidrList getEgressCidr();
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList">SupervisorEgressCidrList</a>

---

##### `ingressCidr`<sup>Required</sup> <a name="ingressCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidr"></a>

```java
public SupervisorIngressCidrList getIngressCidr();
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList">SupervisorIngressCidrList</a>

---

##### `managementNetwork`<sup>Required</sup> <a name="managementNetwork" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetwork"></a>

```java
public SupervisorManagementNetworkOutputReference getManagementNetwork();
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference">SupervisorManagementNetworkOutputReference</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.namespace"></a>

```java
public SupervisorNamespaceList getNamespace();
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList">SupervisorNamespaceList</a>

---

##### `podCidr`<sup>Required</sup> <a name="podCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidr"></a>

```java
public SupervisorPodCidrList getPodCidr();
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList">SupervisorPodCidrList</a>

---

##### `serviceCidr`<sup>Required</sup> <a name="serviceCidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidr"></a>

```java
public SupervisorServiceCidrOutputReference getServiceCidr();
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference">SupervisorServiceCidrOutputReference</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `contentLibraryInput`<sup>Optional</sup> <a name="contentLibraryInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibraryInput"></a>

```java
public java.lang.String getContentLibraryInput();
```

- *Type:* java.lang.String

---

##### `dvsUuidInput`<sup>Optional</sup> <a name="dvsUuidInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuidInput"></a>

```java
public java.lang.String getDvsUuidInput();
```

- *Type:* java.lang.String

---

##### `edgeClusterInput`<sup>Optional</sup> <a name="edgeClusterInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeClusterInput"></a>

```java
public java.lang.String getEdgeClusterInput();
```

- *Type:* java.lang.String

---

##### `egressCidrInput`<sup>Optional</sup> <a name="egressCidrInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidrInput"></a>

```java
public java.lang.Object getEgressCidrInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressCidrInput`<sup>Optional</sup> <a name="ingressCidrInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidrInput"></a>

```java
public java.lang.Object getIngressCidrInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>>

---

##### `mainDnsInput`<sup>Optional</sup> <a name="mainDnsInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDnsInput"></a>

```java
public java.util.List<java.lang.String> getMainDnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `managementNetworkInput`<sup>Optional</sup> <a name="managementNetworkInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetworkInput"></a>

```java
public SupervisorManagementNetwork getManagementNetworkInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.namespaceInput"></a>

```java
public java.lang.Object getNamespaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>>

---

##### `podCidrInput`<sup>Optional</sup> <a name="podCidrInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidrInput"></a>

```java
public java.lang.Object getPodCidrInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>>

---

##### `searchDomainsInput`<sup>Optional</sup> <a name="searchDomainsInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomainsInput"></a>

```java
public java.util.List<java.lang.String> getSearchDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceCidrInput`<sup>Optional</sup> <a name="serviceCidrInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidrInput"></a>

```java
public SupervisorServiceCidr getServiceCidrInput();
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

---

##### `sizingHintInput`<sup>Optional</sup> <a name="sizingHintInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHintInput"></a>

```java
public java.lang.String getSizingHintInput();
```

- *Type:* java.lang.String

---

##### `storagePolicyInput`<sup>Optional</sup> <a name="storagePolicyInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicyInput"></a>

```java
public java.lang.String getStoragePolicyInput();
```

- *Type:* java.lang.String

---

##### `workerDnsInput`<sup>Optional</sup> <a name="workerDnsInput" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDnsInput"></a>

```java
public java.util.List<java.lang.String> getWorkerDnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `contentLibrary`<sup>Required</sup> <a name="contentLibrary" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibrary"></a>

```java
public java.lang.String getContentLibrary();
```

- *Type:* java.lang.String

---

##### `dvsUuid`<sup>Required</sup> <a name="dvsUuid" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuid"></a>

```java
public java.lang.String getDvsUuid();
```

- *Type:* java.lang.String

---

##### `edgeCluster`<sup>Required</sup> <a name="edgeCluster" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeCluster"></a>

```java
public java.lang.String getEdgeCluster();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mainDns`<sup>Required</sup> <a name="mainDns" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDns"></a>

```java
public java.util.List<java.lang.String> getMainDns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchDomains`<sup>Required</sup> <a name="searchDomains" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomains"></a>

```java
public java.util.List<java.lang.String> getSearchDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sizingHint`<sup>Required</sup> <a name="sizingHint" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHint"></a>

```java
public java.lang.String getSizingHint();
```

- *Type:* java.lang.String

---

##### `storagePolicy`<sup>Required</sup> <a name="storagePolicy" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicy"></a>

```java
public java.lang.String getStoragePolicy();
```

- *Type:* java.lang.String

---

##### `workerDns`<sup>Required</sup> <a name="workerDns" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDns"></a>

```java
public java.util.List<java.lang.String> getWorkerDns();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SupervisorConfig <a name="SupervisorConfig" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.SupervisorConfig;

SupervisorConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .contentLibrary(java.lang.String)
    .dvsUuid(java.lang.String)
    .edgeCluster(java.lang.String)
    .egressCidr(IResolvable)
    .egressCidr(java.util.List<SupervisorEgressCidr>)
    .ingressCidr(IResolvable)
    .ingressCidr(java.util.List<SupervisorIngressCidr>)
    .mainDns(java.util.List<java.lang.String>)
    .managementNetwork(SupervisorManagementNetwork)
    .podCidr(IResolvable)
    .podCidr(java.util.List<SupervisorPodCidr>)
    .searchDomains(java.util.List<java.lang.String>)
    .serviceCidr(SupervisorServiceCidr)
    .sizingHint(java.lang.String)
    .storagePolicy(java.lang.String)
    .workerDns(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .namespace(IResolvable)
//  .namespace(java.util.List<SupervisorNamespace>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | ID of the vSphere cluster on which workload management will be enabled. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.contentLibrary">contentLibrary</a></code> | <code>java.lang.String</code> | ID of the subscribed content library. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dvsUuid">dvsUuid</a></code> | <code>java.lang.String</code> | The UUID (not ID) of the distributed switch. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.edgeCluster">edgeCluster</a></code> | <code>java.lang.String</code> | ID of the NSX Edge Cluster. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.egressCidr">egressCidr</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>></code> | egress_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.ingressCidr">ingressCidr</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>></code> | ingress_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.mainDns">mainDns</a></code> | <code>java.util.List<java.lang.String></code> | List of DNS servers to use on the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.managementNetwork">managementNetwork</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a></code> | management_network block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.podCidr">podCidr</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>></code> | pod_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.searchDomains">searchDomains</a></code> | <code>java.util.List<java.lang.String></code> | List of DNS search domains. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.serviceCidr">serviceCidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a></code> | service_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.sizingHint">sizingHint</a></code> | <code>java.lang.String</code> | Size of the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.storagePolicy">storagePolicy</a></code> | <code>java.lang.String</code> | The name of a storage policy associated with the datastore where the container images will be stored. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.workerDns">workerDns</a></code> | <code>java.util.List<java.lang.String></code> | List of DNS servers to use on the worker nodes. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#id Supervisor#id}. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.namespace">namespace</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>></code> | namespace block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

ID of the vSphere cluster on which workload management will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#cluster Supervisor#cluster}

---

##### `contentLibrary`<sup>Required</sup> <a name="contentLibrary" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.contentLibrary"></a>

```java
public java.lang.String getContentLibrary();
```

- *Type:* java.lang.String

ID of the subscribed content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#content_library Supervisor#content_library}

---

##### `dvsUuid`<sup>Required</sup> <a name="dvsUuid" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dvsUuid"></a>

```java
public java.lang.String getDvsUuid();
```

- *Type:* java.lang.String

The UUID (not ID) of the distributed switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#dvs_uuid Supervisor#dvs_uuid}

---

##### `edgeCluster`<sup>Required</sup> <a name="edgeCluster" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.edgeCluster"></a>

```java
public java.lang.String getEdgeCluster();
```

- *Type:* java.lang.String

ID of the NSX Edge Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#edge_cluster Supervisor#edge_cluster}

---

##### `egressCidr`<sup>Required</sup> <a name="egressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.egressCidr"></a>

```java
public java.lang.Object getEgressCidr();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>>

egress_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#egress_cidr Supervisor#egress_cidr}

---

##### `ingressCidr`<sup>Required</sup> <a name="ingressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.ingressCidr"></a>

```java
public java.lang.Object getIngressCidr();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>>

ingress_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#ingress_cidr Supervisor#ingress_cidr}

---

##### `mainDns`<sup>Required</sup> <a name="mainDns" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.mainDns"></a>

```java
public java.util.List<java.lang.String> getMainDns();
```

- *Type:* java.util.List<java.lang.String>

List of DNS servers to use on the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#main_dns Supervisor#main_dns}

---

##### `managementNetwork`<sup>Required</sup> <a name="managementNetwork" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.managementNetwork"></a>

```java
public SupervisorManagementNetwork getManagementNetwork();
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

management_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#management_network Supervisor#management_network}

---

##### `podCidr`<sup>Required</sup> <a name="podCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.podCidr"></a>

```java
public java.lang.Object getPodCidr();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>>

pod_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#pod_cidr Supervisor#pod_cidr}

---

##### `searchDomains`<sup>Required</sup> <a name="searchDomains" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.searchDomains"></a>

```java
public java.util.List<java.lang.String> getSearchDomains();
```

- *Type:* java.util.List<java.lang.String>

List of DNS search domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#search_domains Supervisor#search_domains}

---

##### `serviceCidr`<sup>Required</sup> <a name="serviceCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.serviceCidr"></a>

```java
public SupervisorServiceCidr getServiceCidr();
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

service_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#service_cidr Supervisor#service_cidr}

---

##### `sizingHint`<sup>Required</sup> <a name="sizingHint" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.sizingHint"></a>

```java
public java.lang.String getSizingHint();
```

- *Type:* java.lang.String

Size of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#sizing_hint Supervisor#sizing_hint}

---

##### `storagePolicy`<sup>Required</sup> <a name="storagePolicy" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.storagePolicy"></a>

```java
public java.lang.String getStoragePolicy();
```

- *Type:* java.lang.String

The name of a storage policy associated with the datastore where the container images will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#storage_policy Supervisor#storage_policy}

---

##### `workerDns`<sup>Required</sup> <a name="workerDns" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.workerDns"></a>

```java
public java.util.List<java.lang.String> getWorkerDns();
```

- *Type:* java.util.List<java.lang.String>

List of DNS servers to use on the worker nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#worker_dns Supervisor#worker_dns}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#id Supervisor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.namespace"></a>

```java
public java.lang.Object getNamespace();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>>

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#namespace Supervisor#namespace}

---

### SupervisorEgressCidr <a name="SupervisorEgressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.SupervisorEgressCidr;

SupervisorEgressCidr.builder()
    .address(java.lang.String)
    .prefix(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.address">address</a></code> | <code>java.lang.String</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.prefix">prefix</a></code> | <code>java.lang.Number</code> | Subnet prefix. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#address Supervisor#address}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.prefix"></a>

```java
public java.lang.Number getPrefix();
```

- *Type:* java.lang.Number

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#prefix Supervisor#prefix}

---

### SupervisorIngressCidr <a name="SupervisorIngressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.SupervisorIngressCidr;

SupervisorIngressCidr.builder()
    .address(java.lang.String)
    .prefix(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.address">address</a></code> | <code>java.lang.String</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.prefix">prefix</a></code> | <code>java.lang.Number</code> | Subnet prefix. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#address Supervisor#address}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.prefix"></a>

```java
public java.lang.Number getPrefix();
```

- *Type:* java.lang.Number

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#prefix Supervisor#prefix}

---

### SupervisorManagementNetwork <a name="SupervisorManagementNetwork" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.SupervisorManagementNetwork;

SupervisorManagementNetwork.builder()
    .addressCount(java.lang.Number)
    .gateway(java.lang.String)
    .network(java.lang.String)
    .startingAddress(java.lang.String)
    .subnetMask(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.addressCount">addressCount</a></code> | <code>java.lang.Number</code> | Number of addresses to allocate. Starts from 'starting_address'. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.gateway">gateway</a></code> | <code>java.lang.String</code> | Gateway IP address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.network">network</a></code> | <code>java.lang.String</code> | ID of the network. (e.g. a distributed port group). |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.startingAddress">startingAddress</a></code> | <code>java.lang.String</code> | Starting address of the management network range. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.subnetMask">subnetMask</a></code> | <code>java.lang.String</code> | Subnet mask. |

---

##### `addressCount`<sup>Required</sup> <a name="addressCount" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.addressCount"></a>

```java
public java.lang.Number getAddressCount();
```

- *Type:* java.lang.Number

Number of addresses to allocate. Starts from 'starting_address'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#address_count Supervisor#address_count}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

Gateway IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#gateway Supervisor#gateway}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

ID of the network. (e.g. a distributed port group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#network Supervisor#network}

---

##### `startingAddress`<sup>Required</sup> <a name="startingAddress" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.startingAddress"></a>

```java
public java.lang.String getStartingAddress();
```

- *Type:* java.lang.String

Starting address of the management network range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#starting_address Supervisor#starting_address}

---

##### `subnetMask`<sup>Required</sup> <a name="subnetMask" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.subnetMask"></a>

```java
public java.lang.String getSubnetMask();
```

- *Type:* java.lang.String

Subnet mask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#subnet_mask Supervisor#subnet_mask}

---

### SupervisorNamespace <a name="SupervisorNamespace" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.SupervisorNamespace;

SupervisorNamespace.builder()
    .name(java.lang.String)
//  .contentLibraries(java.util.List<java.lang.String>)
//  .vmClasses(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.name">name</a></code> | <code>java.lang.String</code> | The name of the namespace. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.contentLibraries">contentLibraries</a></code> | <code>java.util.List<java.lang.String></code> | A list of content libraries. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.vmClasses">vmClasses</a></code> | <code>java.util.List<java.lang.String></code> | A list of virtual machine classes. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#name Supervisor#name}

---

##### `contentLibraries`<sup>Optional</sup> <a name="contentLibraries" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.contentLibraries"></a>

```java
public java.util.List<java.lang.String> getContentLibraries();
```

- *Type:* java.util.List<java.lang.String>

A list of content libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#content_libraries Supervisor#content_libraries}

---

##### `vmClasses`<sup>Optional</sup> <a name="vmClasses" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.vmClasses"></a>

```java
public java.util.List<java.lang.String> getVmClasses();
```

- *Type:* java.util.List<java.lang.String>

A list of virtual machine classes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#vm_classes Supervisor#vm_classes}

---

### SupervisorPodCidr <a name="SupervisorPodCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.SupervisorPodCidr;

SupervisorPodCidr.builder()
    .address(java.lang.String)
    .prefix(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.address">address</a></code> | <code>java.lang.String</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.prefix">prefix</a></code> | <code>java.lang.Number</code> | Subnet prefix. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#address Supervisor#address}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.prefix"></a>

```java
public java.lang.Number getPrefix();
```

- *Type:* java.lang.Number

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#prefix Supervisor#prefix}

---

### SupervisorServiceCidr <a name="SupervisorServiceCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.SupervisorServiceCidr;

SupervisorServiceCidr.builder()
    .address(java.lang.String)
    .prefix(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.address">address</a></code> | <code>java.lang.String</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.prefix">prefix</a></code> | <code>java.lang.Number</code> | Subnet prefix. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#address Supervisor#address}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.prefix"></a>

```java
public java.lang.Number getPrefix();
```

- *Type:* java.lang.Number

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.3/docs/resources/supervisor#prefix Supervisor#prefix}

---

## Classes <a name="Classes" id="Classes"></a>

### SupervisorEgressCidrList <a name="SupervisorEgressCidrList" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.SupervisorEgressCidrList;

new SupervisorEgressCidrList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.get"></a>

```java
public SupervisorEgressCidrOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>>

---


### SupervisorEgressCidrOutputReference <a name="SupervisorEgressCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.SupervisorEgressCidrOutputReference;

new SupervisorEgressCidrOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefix">prefix</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefixInput"></a>

```java
public java.lang.Number getPrefixInput();
```

- *Type:* java.lang.Number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefix"></a>

```java
public java.lang.Number getPrefix();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>

---


### SupervisorIngressCidrList <a name="SupervisorIngressCidrList" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.SupervisorIngressCidrList;

new SupervisorIngressCidrList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.get"></a>

```java
public SupervisorIngressCidrOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>>

---


### SupervisorIngressCidrOutputReference <a name="SupervisorIngressCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.SupervisorIngressCidrOutputReference;

new SupervisorIngressCidrOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefix">prefix</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefixInput"></a>

```java
public java.lang.Number getPrefixInput();
```

- *Type:* java.lang.Number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefix"></a>

```java
public java.lang.Number getPrefix();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>

---


### SupervisorManagementNetworkOutputReference <a name="SupervisorManagementNetworkOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.SupervisorManagementNetworkOutputReference;

new SupervisorManagementNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCountInput">addressCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gatewayInput">gatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddressInput">startingAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMaskInput">subnetMaskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCount">addressCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gateway">gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddress">startingAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMask">subnetMask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressCountInput`<sup>Optional</sup> <a name="addressCountInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCountInput"></a>

```java
public java.lang.Number getAddressCountInput();
```

- *Type:* java.lang.Number

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gatewayInput"></a>

```java
public java.lang.String getGatewayInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `startingAddressInput`<sup>Optional</sup> <a name="startingAddressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddressInput"></a>

```java
public java.lang.String getStartingAddressInput();
```

- *Type:* java.lang.String

---

##### `subnetMaskInput`<sup>Optional</sup> <a name="subnetMaskInput" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMaskInput"></a>

```java
public java.lang.String getSubnetMaskInput();
```

- *Type:* java.lang.String

---

##### `addressCount`<sup>Required</sup> <a name="addressCount" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCount"></a>

```java
public java.lang.Number getAddressCount();
```

- *Type:* java.lang.Number

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `startingAddress`<sup>Required</sup> <a name="startingAddress" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddress"></a>

```java
public java.lang.String getStartingAddress();
```

- *Type:* java.lang.String

---

##### `subnetMask`<sup>Required</sup> <a name="subnetMask" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMask"></a>

```java
public java.lang.String getSubnetMask();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.internalValue"></a>

```java
public SupervisorManagementNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

---


### SupervisorNamespaceList <a name="SupervisorNamespaceList" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.SupervisorNamespaceList;

new SupervisorNamespaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.get"></a>

```java
public SupervisorNamespaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>>

---


### SupervisorNamespaceOutputReference <a name="SupervisorNamespaceOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.SupervisorNamespaceOutputReference;

new SupervisorNamespaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetContentLibraries">resetContentLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetVmClasses">resetVmClasses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentLibraries` <a name="resetContentLibraries" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetContentLibraries"></a>

```java
public void resetContentLibraries()
```

##### `resetVmClasses` <a name="resetVmClasses" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetVmClasses"></a>

```java
public void resetVmClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibrariesInput">contentLibrariesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClassesInput">vmClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibraries">contentLibraries</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClasses">vmClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentLibrariesInput`<sup>Optional</sup> <a name="contentLibrariesInput" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibrariesInput"></a>

```java
public java.util.List<java.lang.String> getContentLibrariesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `vmClassesInput`<sup>Optional</sup> <a name="vmClassesInput" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClassesInput"></a>

```java
public java.util.List<java.lang.String> getVmClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contentLibraries`<sup>Required</sup> <a name="contentLibraries" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibraries"></a>

```java
public java.util.List<java.lang.String> getContentLibraries();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `vmClasses`<sup>Required</sup> <a name="vmClasses" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClasses"></a>

```java
public java.util.List<java.lang.String> getVmClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>

---


### SupervisorPodCidrList <a name="SupervisorPodCidrList" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.SupervisorPodCidrList;

new SupervisorPodCidrList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.get"></a>

```java
public SupervisorPodCidrOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>>

---


### SupervisorPodCidrOutputReference <a name="SupervisorPodCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.SupervisorPodCidrOutputReference;

new SupervisorPodCidrOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefix">prefix</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefixInput"></a>

```java
public java.lang.Number getPrefixInput();
```

- *Type:* java.lang.Number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefix"></a>

```java
public java.lang.Number getPrefix();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>

---


### SupervisorServiceCidrOutputReference <a name="SupervisorServiceCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vsphere.supervisor.SupervisorServiceCidrOutputReference;

new SupervisorServiceCidrOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefix">prefix</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefixInput"></a>

```java
public java.lang.Number getPrefixInput();
```

- *Type:* java.lang.Number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefix"></a>

```java
public java.lang.Number getPrefix();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.internalValue"></a>

```java
public SupervisorServiceCidr getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

---



