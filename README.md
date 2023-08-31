# @kinde-oss/react-native-sdk-0-6x

> Kinde React Native SDK for authentication for 0.60-0.69

The Kinde React Native SDK allows developers to quickly and securely integrate a new or an existing React Native application into the Kinde platform

## Table of contents
- [Support Versions](#support-versions)
- [Before you install](#before you install)
- [Installation](#installation)
- [Kinde configuration](#Kinde configuration)
- [Environments](#token-storage)
- [How to run test](#how-to-run-test)
- [SDK API Reference](#sdk-api-reference)
- [KindeSDK Methods](#kindesdk-methods)
- [General Tips](#general-tips)

## Register for Kinde

If you haven’t already got a Kinde account, [register for free here](http://app.kinde.com/register) (no credit card required).

You need a Kinde domain to get started, e.g. yourapp.kinde.com.
## Support Versions

Our SDK is designed to seamlessly integrate with both React Native and Expo development environments, providing a unified experience for developers. Whether you're building a React Native app or leveraging the Expo platform, you can leverage the full capabilities of our SDK to enhance your mobile applications. For detailed documentation on using Expo, please refer to: [Using Expo with React Native](insert_link_to_expo_docs)

To utilize this package with older versions of React Native, kindly visit: [React Native SDK 0.5x (Expo not supported)](https://github.com/kinde-oss/react-native-sdk-0-5x)

## Before you install

You will need Node, the React Native command line interface, a JDK, Android Studio (for Android) and Xcode (for iOS).

Follow [the installation instructions for your chosen OS](https://reactnative.dev/docs/environment-setup) to install dependencies.

## Installation
The SDK can be installed with `npm` or `yarn`

```shell
// With npm
npm install @kinde-oss/react-native-sdk-0-6x --save

// With yarn
yarn add @kinde-oss/react-native-sdk-0-6x
```

### Android
If the `react-native-keychain` and `react-native-inappbrowser-reborn` packages are not automatically linked, you will need to install them manually:

-   Edit `android/settings.gradle`

```java
...

include ':react-native-keychain'
project(':react-native-keychain').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-keychain/android');

include ':react-native-inappbrowser-reborn'
project(':react-native-inappbrowser-reborn').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-inappbrowser-reborn/android');

...
```

-   Edit `android/app/build.gradle`

```java
apply plugin: 'com.android.application'

android {
  ...
}

dependencies {
  ...

  implementation project(':react-native-keychain')
  implementation project(':react-native-inappbrowser-reborn')

  ...
}
```

-   Edit your `MainApplication.java`

```java
...
import com.oblador.keychain.KeychainPackage;
import com.proyecto26.inappbrowser.RNInAppBrowserPackage;
...

public class MainApplication extends Application implements ReactApplication {
    private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        ...
        @Override
        protected List<ReactPackage> getPackages() {
          ...
          List<ReactPackage> packages = new PackageList(this).getPackages();
          packages.add(new KeychainPackage());
          packages.add(new RNInAppBrowserPackage());
          ...
          return packages;
        }
        ...
      };

  ...
}
...
```

#### iOS
To update iOS native dependencies, you can use **CocoaPods**. We recommend installing **CocoaPods** using [Homebrew](https://brew.sh/)

```shell
# Install CocoaPods via brew
brew install cocoapods

# Install iOS native dependencies
cd ios && pod install
```

If the `react-native-keychain` and `react-native-inappbrowser-reborn` packages are not automatically linked, you will need to install them manually:

**Option: With CocoaPods (Highly recommended)**

Please add the following lines to your **Podfile**, and then run `pod update`:

```Swift
pod 'RNKeychain', :path => '../node_modules/react-native-keychain'
pod 'RNInAppBrowser', :path => '../node_modules/react-native-inappbrowser-reborn'
```

**Option: Manually**

-   Click to `Build Phases` tab
-   Choose `Link Binary With Libraries`
-   Click `+` in bottom
-   **Add Other...** => **Add Files...** => **node_modules/react-native-keychain/RNKeychain.xcodeproj** (similar with **RNInAppBrowser**)
-   Then, you need to add `libRNKeychain.a`
-   Clean and rebuild

Furthermore, if you encounter any errors during the SDK installation process, you can refer to the [General Tips](#general-tips) section for troubleshooting guidance. Alternatively, you can contact us at support@kinde.com for assistance.

## Kinde configuration

On the Kinde web app navigate to `Settings` in the left menu, then select `Applications` and select the `Frontend app`. Scroll down to the `Callback URLs` section.

Here you want to put in the callback URLs for your React Native app, which should look something like this:

-   Allowed callback URLs - `myapp://myhost.kinde.com/kinde_callback`
-   Allowed logout redirect URLs - `myapp://myhost.kinde.com/kinde_callback`

Make sure you press the Save button at the bottom of the page!

Note: The `myapp://myhost.kinde.com/kinde_callback` is used as an example of local URL Scheme, change to the local local URL Scheme that you use.

## Environments

If you would like to use our Environments feature as part of your development process. You will need to create them first within your Kinde account. In this case you would use the Environment subdomain in the code block above.

## Configuring your app

### Environment variables

Put these variables in your .env file. You can find these variables on the same page as where you set the callback URLs.

- `KINDE_ISSUER_URL` - your Kinde domain
- `KINDE_POST_CALLBACK_URL` - After the user authenticates we will callback to this address. Make sure this URL is under your allowed callback URLs
- `KINDE_POST_LOGOUT_REDIRECT_URL` - where you want users to be redirected to after logging out. Make sure this URL is under your allowed logout redirect URLs
- `KINDE_CLIENT_ID` - you can find this on the App Keys page

```javascript
KINDE_ISSUER_URL=https://your_kinde_domain.kinde.com
KINDE_POST_CALLBACK_URL=myapp://your_kinde_domain.kinde.com/kinde_callback
KINDE_POST_LOGOUT_REDIRECT_URL=myapp://your_kinde_domain.kinde.com/kinde_callback
KINDE_CLIENT_ID=your_kinde_client_id
```

Configuration example:

```javascript
KINDE_ISSUER_URL=https://myhost.kinde.com
KINDE_POST_CALLBACK_URL=myapp://myhost.kinde.com/kinde_callback
KINDE_POST_LOGOUT_REDIRECT_URL=myapp://myhost.kinde.com/kinde_callback
KINDE_CLIENT_ID=myclient@live
```
## Configuration Deep link
### Android

Open `AndroidManifest.xml` and update your scheme.

```xml
<intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="myapp" android:host="your_kinde_host" />  // Please modify sheme and host to reflect your preferences.
</intent-filter>
```

### iOS

You need to link `RCTLinking` to your project by following the steps below. 

If you also want to listen to incoming app links during your app's execution, add the following lines to your `AppDelegate.m`.

```swift
// iOS 9.x or newer 
#import <React/RCTLinkingManager.h> 
- (BOOL)application:(UIApplication *)application 
   openURL:(NSURL *)url 
   options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options 
{ 
  return [RCTLinkingManager application:application openURL:url options:options]; 
}
```

If you're targeting iOS 8.x or older, use the following code instead.

```swift
// iOS 8.x or older
#import <React/RCTLinkingManager.h>
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
  return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
}
```

Make sure you have a configuration URL scheme in `Info.plist`, so the app can be opened by deep link.

```swift
...
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleTypeRole</key>
    <string>Editor</string>
    <key>CFBundleURLName</key>
    <string>myapp</string> // you can change it
    <key>CFBundleURLSchemes</key>
    <array>
      <string>myapp</string> // you can change it
    </array>
  </dict>
</array>
...
```

## Integrate with your app

To create a new instance of the KindeSDK object, execute the code below.

```javascript
...
import { KindeSDK } from '@kinde-oss/react-native-sdk-0-7x';
...

...
const client = new KindeSDK(YOUR_KINDE_ISSUER, YOUR_KINDE_REDIRECT_URI, YOUR_KINDE_CLIENT_ID, YOUR_KINDE_LOGOUT_REDIRECT_URI);
...
```

## Log in and registration

Kinde provides methods for easily implementing a login / register flow.

As an example if you add buttons as follows.

```javascript
<View>
    <View>
        <Button title="Sign In" onPress={handleSignIn} />
    </View>
    <View>
        <Button title="Sign Up" color="#000" onPress={handleSignUp} />
    </View>
</View>
```

Then define new functions that match for each button. 

**Note**: Before proceeding, please ensure that you have already defined the **KindeSDK** as a **client** variable.

```javascript
...
const handleSignUp = async () => {
  const token = await client.register();
  if (token) {
    // User was authenticated
  }
};

const handleSignIn = async () => {
  const token = await client.login();
  if (token) {
    // User was authenticated
  }
};
...
```

## Log out

This is implemented in much the same way as logging in or registering. The Kinde SPA client comes with a logout method:

```javascript
const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
        // User was logged out
    }
};
```

We have also implemented an API for token revocation. Simply pass `true` as an argument in the `logout` function. This flag will assist in revoking the token without having to open the website within your apps.

```javascript
const handleLogout = async () => {
    const loggedOut = client.logout(true);
    if (loggedOut) {
        // User was logged out
    }
};
```

> **Note: Handle redirects are now deprecated**
> 
> 
> Starting from version 1.1 of the SDK, the need to handle redirects has been eliminated. Authentication is now performed by launching a web browser within your app instead of relying on an external browser. For a comprehensive example of how to handle authentication, please refer to the **[Full code sample for authentication](#full-code-sample-for-authentication)** section.
> 

## Full code sample for authentication

```javascript
const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
        // Need to implement, e.g: call an api, etc...
    } else {
        // Need to implement, e.g: redirect user to sign in, etc..
    }
};

useEffect(() => {
    checkAuthenticate();
}, []);

const handleSignIn = async () => {
    const token = await client.login();

    if (token) {
        // Need to implement, e.g: call an api, etc...
    }
};

const handleSignUp = async () => {
    const token = await client.register();

    if (token) {
        // Need to implement, e.g: call an api, etc...
    }
};

const handleLogout = async () => {
		// With open web in your apps
    const isLoggedOut = await client.logout();

    if (isLoggedOut) {
        // Need to implement, e.g: redirect user to login screen, etc...
    }

		// Without open web in your apps
    const isLoggedOut = await client.logout();

    if (isLoggedOut) {
        // Need to implement, e.g: redirect user to login screen, etc...
    }
};
```

## Get user information

To access the user information, use the `getUserDetails` helper function.

```javascript
const userProfile = await client.getUserDetails();
console.log(userProfile);
// output: {"given_name":"Dave","id":"abcdef","family_name":"Smith","email":"dave@smith.com"}
```

## View users in Kinde

If you navigate to the "Users" page within Kinde you will see your newly registered user there.****

### User Permissions

Once a user has been verified, your product/application will return the JWT token with an array of permissions for that user. You will need to configure your product/application to read permissions and unlock the respective functions.

[Set permissions](https://kinde.com/docs/user-management/user-permissions/) in your Kinde account. Here’s an example set of permissions.

```javascript
const permissions = [
    'create:todos',
    'update:todos',
    'read:todos',
    'delete:todos',
    'create:tasks',
    'update:tasks',
    'read:tasks',
    'delete:tasks'
];
```

We provide helper functions to more easily access permissions.

```javascript
await client.getPermission('create:todos');
// {orgCode: "org_1234", isGranted: true}

await client.getPermissions();
// {orgCode: "org_1234", permissions: ["create:todos", "update:todos", "read:todos"]}
```

A practical example in code might look something like.

```javascript
if ((await client.getPermission("create:todos")).isGranted) {
    // show Create Todo button in UI
}
```

## Audience

An audience is the intended recipient of an access token - for example the API for your application. The audience argument can be passed to the Kinde client to request an audience be added to the token.

The audience of a token is the intended recipient of the token.

```javascript
const client = new KindeSDK(
    YOUR_KINDE_ISSUER,
    YOUR_KINDE_REDIRECT_URI,
    YOUR_KINDE_CLIENT_ID,
    YOUR_KINDE_LOGOUT_REDIRECT_URI,
    YOUR_SCOPES,
    {
        audience: 'api.yourapp.com'
    }
);
```

For details on how to connect, see [Register an API](https://kinde.com/docs/developer-tools/register-an-api/).

## Overriding scope

By default the `KindeSDK` requests the following scopes:

- profile
- email
- offline
- openid

You can override this by passing scope into the KindeSDK

```javascript
const client = new KindeSDK(
    YOUR_KINDE_ISSUER,
    YOUR_KINDE_REDIRECT_URI,
    YOUR_KINDE_CLIENT_ID,
    YOUR_KINDE_LOGOUT_REDIRECT_URI,
    'profile email offline openid'
);
```

## Getting claims

We have provided a helper to grab any claim from your id or access tokens. The helper defaults to access tokens:

```javascript
await client.getClaim('aud');
// returns
{
  name: 'aud',
  value: ['api.yourapp.com']
}

await client.getClaim('given_name', 'id_token');
// returns
{
  name: 'given_name',
  value: 'David'
}
```

## Organizations

### Create an organization

To create a new organization within your application, you will need to run a similar function to this.

```javascript
<Button title="Create Organization" onPress={handleCreateOrg} />
```

Then define the function of the button. 

Make sure you've already defined `KindeSDK` as the **client** in the state.

```javascript
const handleCreateOrg = () => {
  client.createOrg();
}

// You can also pass `org_name` as your organization
client.createOrg({org_name: 'Your Organization'});
```

### Sign in and sign up to organizations

Kinde has a unique code for every organization. You’ll have to pass this code through when you register a new user.

Example function below:

```javascript
client.register({ org_code: 'your_org_code' });
```

If you want a user to sign in into a particular organization, pass this code along with the sign in method.

```javascript
client.login({ org_code: 'your_org_code' });
```

Following authentication, Kinde provides a json web token (jwt) to your application. Along with the standard information we also include the org_code and the permissions for that organization (this is important as a user can belong to multiple organizations and have different permissions for each). Example of a returned token:

Example of a returned token:

```javascript
{
    "aud": [],
    "exp": 1658475930,
    "iat": 1658472329,
    "iss": "https://your_subdomain.kinde.com",
    "jti": "123457890",
    "org_code": "org_1234",
    "permissions": ["read:todos", "create:todos"],
    "scp": ["openid", "profile", "email", "offline"],
    "sub": "kp:123457890"
}
```

The id_token will also contain an array of organizations that a user belongs to - this is useful if you wanted to build out an organization switcher for example.

```javascript
{
  ...
  "org_codes": ["org_1234", "org_4567"]
  ...
}
```

There are two helper functions you can use to extract information.

```javascript
await client.getOrganization();
// {orgCode: "org_1234"}

await client.getUserOrganizations();
// {orgCodes: ["org_1234", "org_abcd"]}
```

## Feature Flag

We have provided a helper to grab any feature flag from `access_token`:

```javascript
client.getFlag("theme");
// returns
{
    "code": "theme",
    "type": "string",
    "value": "pink",
    "is_default": false // whether the fallback value had to be used
}

// Another usage case
client.getFlag("is_dark_mode");
// returns
{
    "code": "is_dark_mode",
    "type": "boolean",
    "value": true,
    "is_default": false
}

// This flag does not exist - default value provided
client.getFlag("create_competition", { defaultValue: false });
// returns
{
    "code": "create_competition",
    "type": "boolean",
    "value": false,
    "is_default": true // because fallback value had to be used
}

// The flag type was provided as string, but it is an integer
client.getFlag("competitions_limit", { defaultValue: 3 }, "s");
// should error out - Flag "competitions_limit" is type integer - requested type string


// This flag does not exist, and no default value provided
client.getFlag("new_feature");
// should error out - This flag was not found, and no default value has been provided
```

We also provide wrapper functions which should leverage `getFlag` above

### Get boolean flags

```javascript
client.getBooleanFlag('is_dark_mode');
// true

client.getBooleanFlag('is_dark_mode', { defaultValue: false });
// true

client.getBooleanFlag('new_feature', { defaultValue: false });
// false (flag does not exist so falls back to default)

client.getBooleanFlag('new_feature');
// Error - flag does not exist and no default provided

client.getBooleanFlag('theme', { defaultValue: false });
// Error - Flag "theme" is of type string not boolean
```

### Get string flags

```javascript
client.getStringFlag('theme');
// "pink"

client.getStringFlag('theme', { defaultValue: 'red' });
// "pink"

client.getStringFlag('cta_color', { defaultValue: 'blue' });
// "blue" (flag does not exist so falls back to default)

client.getStringFlag('cta_color');
// Error - flag does not exist and no default provided

client.getStringFlag('is_dark_mode', { defaultValue: true });
// Error - Flag "is_dark_mode" is of type boolean not string
```

### Get integer flags

```javascript
client.getIntegerFlag('competitions_limit');
// 5

client.getIntegerFlag('competitions_limit', { defaultValue: 3 });
// 5

client.getIntegerFlag('team_count', { defaultValue: 2 });
// 2 (flag does not exist so falls back to default)

client.getIntegerFlag('team_count');
// Error - flag does not exist and no default provided

client.getIntegerFlag('is_dark_mode', { defaultValue: true });
// Error - Flag "is_dark_mode" is of type string not integer
```
## Token Storage

Once the user has successfully authenticated, you'll have a JWT and a refresh token and that has been stored securely. E.g. using the `getAccessToken` method of the `Storage` class to get an access token.

```javascript
...
import { Storage } from '@kinde-oss/react-native-sdk-0-7x'
...

const accessToken = await Storage.getAccessToken();
console.log('access_token', accessToken);
```

We're using the [react-native-keychain](https://www.npmjs.com/package/react-native-keychain) for `React Native` and the [expo-secure-store](https://www.npmjs.com/package/expo-secure-store) for `Expo`. 

The storage handler can be found at: [Storage class](https://github.com/kinde-oss/kinde-react-native-sdk-0-7x/blob/main/dist/SDK/Storage/index.d.ts)

## How to test

Run the test suite using the following command at the root of your React Native.

```bash
npm run test
```

Note: Ensure you have already run `npm install`
## SDK API Reference

| Property                        | Type    | Is required | Default                      | Description                                                                                                       |
| ------------------------------- | ------- | ----------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| issuer                          | string  | Yes         |                              | Either your Kinde instance url or your custom domain. e.g [https://yourapp.kinde.com](https://yourapp.kinde.com/) |
| redirectUri                     | string  | Yes         |                              | The url that the user will be returned to after authentication                                                    |
| clientId                        | string  | Yes         |                              | The id of your application - get this from the Kinde admin area                                                   |
| logoutRedirectUri               | string  | No          |                              | Where your user will be redirected upon logout                                                                    |
| scope                           | boolean | No          | openid profile email offline | The scopes to be requested from Kinde                                                                             |
| additionalParameters            | object  | No          | {}                           | Additional parameters that will be passed in the authorization request                                            |
| additionalParameters - audience | string  | No          |                              | The audience claim for the JWT                                                                                    |

## KindeSDK Methods

| Property             | Description                                                                                       | Arguments                           | Usage                                                                                                                                                                                 | Sample output                                                                                                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| login                | Constructs redirect url and sends user to Kinde to sign in                                        | {<br>org_code?: string<br>}         | await kinde.login(); or<br>await kinde.login({org_code: 'your organization code'}) // Allow org_code to be provided if a specific org is to be signed up into.                        | {<br>"access_token": "eyJhbGciOiJSUzI...",<br>"expires_in": 86400,<br>"id_token": "eyJhbGciOiJSU...",<br>"refresh_token": "yXI1bFQKbXKLD7AIU...",<br>"scope": "openid profile email offline",<br>"token_type": "bearer"<br>} |
| register             | Constructs redirect url and sends user to Kinde to sign up                                        | {<br>org_code?: string<br>}         | await kinde.register(); or<br>await kinde.register({org_code: 'your organization code'}) // Allow org_code to be provided if a specific org is to be registered into.                 | {<br>"access_token": "eyJhbGciOiJSUzI...",<br>"expires_in": 86400,<br>"id_token": "eyJhbGciOiJSU...",<br>"refresh_token": "yXI1bFQKbXKLD7AIU...",<br>"scope": "openid profile email offline",<br>"token_type": "bearer"<br>} |
| logout               | Logs the user out of Kinde                                                                        |                                     | await kinde.logout();                                                                                                                                                                 | true or false                                                                                                                                                                                                                |
| getToken             | Returns the raw Access token from URL after logged from Kinde                                     | url?: string                        | kinde.getToken(url); or<br>kinde.getToken(); // In this case, you have already authenticated before. Otherwise, an error will be thrown in here                                       | {<br>"access_token": "eyJhbGciOiJSUzI...",<br>"expires_in": 86400,<br>"id_token": "eyJhbGciOiJSU...",<br>"refresh_token": "yXI1bFQKbXKLD7AIU...",<br>"scope": "openid profile email offline",<br>"token_type": "bearer"<br>} |
| createOrg            | Constructs redirect url and sends user to Kinde to sign up and create a new org for your business | {<br>org_name?: string<br>}         | await kinde.createOrg(); or<br>await kinde.createOrg({org_name: 'your organization name'}); // Allow org_name to be provided if you want a specific organization name when you create | {<br>"access_token": "eyJhbGciOiJSUzI...",<br>"expires_in": 86400,<br>"id_token": "eyJhbGciOiJSU...",<br>"refresh_token": "yXI1bFQKbXKLD7AIU...",<br>"scope": "openid profile email offline",<br>"token_type": "bearer"<br>} |
| getClaim             | Gets a claim from an access or id token                                                           | claim: string;<br>tokenKey?: string | await kinde.getClaim('given_name', 'id_token');                                                                                                                                       | "David"                                                                                                                                                                                                                      |
| getPermission        | Returns the state of a given permission                                                           | key: string                         | await kinde.getPermission('read:todos');                                                                                                                                              | {"orgCode":"org_1234","isGranted":true}                                                                                                                                                                                      |
| getPermissions       | Returns all permissions for the current user for the organization they are logged into            |                                     | await kinde.getPermissions();                                                                                                                                                         | {"orgCode":"org_1234","permissions":["create:todos","update:todos","read:todos"]}                                                                                                                                            |
| getOrganization      | Get details for the organization your user is logged into                                         |                                     | await kinde.getOrganization();                                                                                                                                                        | {"orgCode": "org_1234"}                                                                                                                                                                                                      |
| getUserDetails       | Returns the profile for the current user                                                          |                                     | await kinde.getUserDetails();                                                                                                                                                         | {"given_name":"Dave","id":"abcdef","family_name":"Smith","email":"dave@smith.com"}                                                                                                                                           |
| getUserOrganizations | Gets an array of all organizations the user has access to                                         |                                     | await kinde.getUserOrganizations();                                                                                                                                                   | {"orgCodes":["org1​234","org5​678"]}                                                                                                                                                                                         |
| isAuthenticated      | Return the boolean to demonstrate whether the user is authenticated or not.                       |                                     | await kinde.isAuthenticate                                                                                                                                                            | true or false                                                                                                                                                                                                                |

## General Tips

## Building Issues

#### `'value'` is unavailable: introduced in iOS 12.0
If you got the error `'value' is unavailable: introduced in iOS 12.0` when trying to build the app, you can follow the below steps to fix that:

1. In your Xcode project navigator, select `Pods`
2. Under Targets, select `React-Codegen`
3. Set the window to `Build Settings`
4. Under `Deployment`, set `iOS Deployment Target` to `12.4`
5. Clean project and rebuild: `Product > Clean Build Folder, Product > Build`

![screenshot](./assets/build-issue.png)

#### Dependency `'androidx.browser:browser:1.6.0-beta01'` requires libraries and applications that depend on it to compile against version 34 or later of the Android APIs.

The solution is add `androidXBrowser = "1.4.0"` in your project.


```java
// android/build.gradle
buildscript {
    ...
    ext {
        // ...
        androidXBrowser = "1.4.0"
        // ....
    }
    ...
}
```

#### Duplicate class kotlin.collections.jdk8.CollectionsJDK8Kt found in modules jetified-kotlin-stdlib-1.8.10 (org.jetbrains.kotlin:kotlin-stdlib:1.8.10) and jetified-kotlin-stdlib-jdk8-1.7.22 (org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.7.22)

The solution is add `org.jetbrains.kotlin:kotlin-bom:1.8.0` dependency in your project.
```java
// android/app/build.grade
dependencies {
    ...
    implementation(platform("org.jetbrains.kotlin:kotlin-bom:1.8.0"))
    ...
}
```
## Caching Issues

Sometimes there will be issues related to caching when you develop React Native.
There are some recommendations for cleaning the cache:

1. Remove `node_modules`, `yarn.lock` or `package-lock.json`
2. Clean cache: `yarn cache clean` or `npm cache clean --force`
3. Make sure you have changed values in `.env` file
4. Trying to install packages again: `yarn install` or `npm install`
5. Run Metro Bundler: `yarn start --reset-cache` or `npm start --reset-cache`

Assume your project path is `<StarterKit_PATH>`.

#### With Android:

1. Clean cache:

```bash
cd <StarterKit_PATH>/android
./gradlew clean
```

2. Follow the steps in the above `General tips`.

#### With iOS:

1. Follow the steps at the above `General tips`.
2. Clean cache:

```bash
cd <StarterKit_PATH>/ios
rm -rf Pods && rm Podfile.lock
```

3. Clean build folders on Xcode.

If you need any assistance with getting Kinde connected reach out to us at support@kinde.com.
