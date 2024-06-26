# UI5 Library `be.wl.space`

Web Components Enablement for `space-package`

## One-time setup

To prepare your library for the first run, please execute the following commands:

- `npm install`
- `npm run ui5:prebuild` (to transpile the UI5 Web Components code to OpenUI5 code in `thirdparty/`)
- `npm run generate` (to generate OpenUI5 wrapper controls for the web components in `space-package`)

_Note: repeat these steps every time you upgrade to a new version of `space-package`._

## Run the project

To start your project, just run the following command:

- `npm start`

The browser will automatically open the test page where you can find the UI5 wrapper controls for your web components.

## License

This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
