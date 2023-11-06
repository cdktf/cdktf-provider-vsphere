
# Terraform CDK vsphere Provider tracks ~> 2.2

This repo builds and publishes the Terraform vsphere Provider bindings for [CDK for Terraform](https://cdk.tf).

Is based directly on vsphere 2.5.1

## Available Packages

### NPM

The npm package is available at [https://www.npmjs.com/package/@cdktf/provider-vsphere](https://www.npmjs.com/package/@cdktf/provider-vsphere).

`npm install @cdktf/provider-vsphere`

### PyPI

The PyPI package is available at [https://pypi.org/project/cdktf-cdktf-provider-vsphere](https://pypi.org/project/cdktf-cdktf-provider-vsphere).

`pipenv install cdktf-cdktf-provider-vsphere`

### Nuget

The Nuget package is available at [https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Vsphere](https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Vsphere).

`dotnet add package HashiCorp.Cdktf.Providers.Vsphere`

### Maven

The Maven package is available at [https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-vsphere](https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-vsphere).

```
<dependency>
    <groupId>com.hashicorp</groupId>
    <artifactId>cdktf-provider-vsphere</artifactId>
    <version>[REPLACE WITH DESIRED VERSION]</version>
</dependency>
```


### Go

The go package is generated into the [`github.com/cdktf/cdktf-provider-vsphere-go`](https://github.com/cdktf/cdktf-provider-vsphere-go) package.

`go get github.com/cdktf/cdktf-provider-vsphere-go/vsphere`

## Docs

Find auto-generated docs for this provider here: 

- [Typescript](./docs/API.typescript.md)
- [Python](./docs/API.python.md)
- [Java](./docs/API.java.md)
- [C#](./docs/API.csharp.md)
- [Go](./docs/API.go.md)

You can also visit a hosted version of the documentation on [constructs.dev](https://constructs.dev/packages/@cdktf/provider-vsphere).

## Versioning

This project is explicitly not tracking the Terraform vsphere Provider version 1:1. In fact, it always tracks `latest` of `~> 2.2` with every release. If there are scenarios where you explicitly have to pin your provider version, you can do so by generating the [provider constructs manually](https://cdk.tf/imports).

These are the upstream dependencies:

- [Terraform CDK](https://cdk.tf)
- [Terraform vsphere Provider](https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1)
    - This links to the minimum version being tracked, you can find the latest released version [in our releases](https://github.com/cdktf/cdktf-provider-vsphere/releases)
- [Terraform Engine](https://terraform.io)

If there are breaking changes (backward incompatible) in any of the above, the major version of this project will be bumped.

## Features / Issues / Bugs

Please report bugs and issues to the [terraform cdk](https://cdk.tf) project:

- [Create bug report](https://cdk.tf/bug)
- [Create feature request](https://cdk.tf/feature)

## Contributing

### projen

This is mostly based on [projen](https://github.com/eladb/projen), which takes care of generating the entire repository.

### cdktf-provider-project based on projen

There's a custom [project builder](https://github.com/hashicorp/cdktf-provider-project) which encapsulate the common settings for all `cdktf` providers.

### Provider Version

The provider version can be adjusted in [./.projenrc.js](./.projenrc.js).

### Repository Management

The repository is managed by [Repository Manager](https://github.com/hashicorp/cdktf-repository-manager/)
