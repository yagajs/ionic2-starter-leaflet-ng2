# Ionic2 Starter for YAGA lealfet-ng2

This Ionic starter comes with a pre-configured [YAGA leaflet-ng2 Map](https://leaflet-ng2.yagajs.org/latest).

## Using the Starter

### Installing Ionic CLI 2.0

This starter project requires Ionic CLI 2.0, to install, run

```bash
npm install -g cordova ionic@2.2.3
```

Make sure to add `sudo` on Mac and Linux. If you encounter issues installing the Ionic 3 CLI, uninstall the old one using `npm uninstall -g ionic` first.

### Creating the Ionic Project

To create a new Ionic project using this AWS Mobile Hub starter, run

```bash
ionic start myApp https://github.com/yagajs/ionic2-starter-leaflet-ng2
```

Which will create a new app in `./myApp`.

Once the app is created, `cd` into it:

```bash
cd myApp
```

Proceed to the next steps on importing the auto-generated AWS Mobile Hub project.

### Running the app

Now the app is configured. To run the app in the browser, run

```bash
ionic serve
```

To run the app in laboratory mode, run

```bash
ionic serve -l
```

To run the app on device, first add a platform, and then run it:

```bash
ionic platform add ios
ionic run ios
```

Or open the platform-specific project in the relevant IDE:

```bash
open platforms/ios/MyApp.xcodeproj
```
