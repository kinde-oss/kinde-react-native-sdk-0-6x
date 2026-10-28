# Kinde React Native SDK 0.6x

> [!WARNING]
> **This SDK is deprecated and no longer maintained.**
> Please migrate to the [Kinde React Native SDK 0.7x](https://github.com/kinde-oss/kinde-react-native-sdk-0-7x) (`@kinde-oss/react-native-sdk-0-7x`).
> This repository is archived and read-only.

The Kinde SDK for React Native SDK 0.6x.

[![Kinde Docs](https://img.shields.io/badge/Kinde-Docs-eee?style=flat-square)](https://kinde.com/docs/developer-tools) [![Kinde Community](https://img.shields.io/badge/Kinde-Community-eee?style=flat-square)](https://thekindecommunity.slack.com)

## Development

### Initial set up

1. Clone the repository to your machine:

    ```bash
    git clone https://github.com/kinde-oss/kinde-react-native-sdk-0-6x
    ```

2. Go into the project:

    ```bash
    cd kinde-react-native-sdk-0-6x
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### How to build

Implement your modifications and then execute the below command to compile the SDK:

```bash
npm run build
```

### How to add the SDK into an already existing project

1. Go to the project's root directory, then execute the below command:
    ```bash
    npm pack <path-to-sdk-folder>
    // e.g
    npm pack ~/Documents/Projects/kinde-react-native-sdk-0-6x
    ```
2. Update the `package.json` file

```json
{
  ...
  "dependencies": {
    "@kinde-oss/react-native-sdk-0-6x": "file:kinde-oss-react-native-sdk-0-6x-<version>.tgz",
    ...
  }
  ...
}
```

### How to test

To test the SDK, you just need to run the command:

```bash
npm run test
```

## Documentation

For details on integrating this SDK into your project, head over to the [Kinde docs](https://kinde.com/docs/) and see the [React Native SDK 0.6x](https://kinde.com/docs/developer-tools/react-native-sdk/) doc 👍🏼.

## Publishing

The core team handles publishing.

## Contributing

Please refer to Kinde’s [contributing guidelines](https://github.com/kinde-oss/.github/blob/489e2ca9c3307c2b2e098a885e22f2239116394a/CONTRIBUTING.md).

## License

By contributing to Kinde, you agree that your contributions will be licensed under its MIT License.
