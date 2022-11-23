<!-- GETTING STARTED -->
## Getting Started

This project inherited from the [OpenAPI generator](https://github.com/OpenAPITools/openapi-generator) to create this project

## Project Structure

We added new files & folders:

```
├── bin
│   └── configs
│       └── kinde-react-native.yaml // This file using custom config when generate
├── generators  // This folder contains our packages generated
│   └── react-native // This is a package generated
├── out // This folder contains our final SDK after build
│   └── kinde-react-native-sdk  // This is a finished package
├── scripts // This folder contains our's script to build package
│   └── generator.sh // This script help create a new generator
│   └── kinde-generate-package.sh // This script help build package by input language. Default: `react-native`
│   └── meta-codegen.sh // This script help build package
├── kinde-mgmt-api-specs.yaml // This file is the OpenAPI spec which can be changed for updating new API
├── OPENAPI_README.md // This file is the original OpenAPI README
├── Makefile // This file defines a set of tasks to be executed
├── others... // Others files and folders of the OpenAPI Generator
```

## Commands:

To clean generated SDKs
```
$ make clean
```

To build a SDKs:

The format will be `build-{language}`. Example, build `react-native`:
```
$ make build-react-native
```
Now we have only react-native SDK

Check `Makefile` for more detail.

**Note: Please change your business name in `kinde-mgmt-api-specs.yaml` before generating the SDK**
```
...
servers:
  - url: https://{businessName}.kinde.com
    variables:
      businessName:
        description: Business Name created in the Kinde Console
        default: YOUR_BUSINESS_NAME // <-- Change here
...
```

## How to update the API Specs ?
You can update the content of `kinde-mgmt-api-specs.yaml` . Then regenerate the SDK you want.
## Notes:
 ### React Native
 - React Native SDK Template: files under `generators/react-native`
 - Mustache files in React Native template: `/generators/react-native/src/main/resources/react-native`