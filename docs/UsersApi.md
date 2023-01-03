# @KindeOssReactNativeSdk.UsersApi

All URIs are relative to *https://your_kinde_domain.kinde.com/api/v1*

| Method                                   | HTTP request   | Description                                                 |
| ---------------------------------------- | -------------- | ----------------------------------------------------------- |
| [**createUser**](UsersApi.md#createUser) | **POST** /user | Creates a user record                                       |
| [**getUsers**](UsersApi.md#getUsers)     | **GET** /users | Returns a paginated list of end-user records for a business |

## createUser

> CreateUser200Response createUser(opts)

Creates a user record

Creates a user record and optionally zero or more identities for the user. An example identity could be the email address of the user

### Example

```javascript
import @KindeOssReactNativeSdk from '@kinde-oss/react-native-sdk';
let defaultClient = @KindeOssReactNativeSdk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: kindeBearerAuth
let kindeBearerAuth = defaultClient.authentications['kindeBearerAuth'];
kindeBearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @KindeOssReactNativeSdk.UsersApi();
let opts = {
  'createUserRequest':  // CreateUserRequest | The details of the user to create
};
const data = await apiInstance.createUser(opts);
console.log('API called successfully. Returned data: ' + data);

```

### Parameters

| Name                  | Type                                          | Description                       | Notes      |
| --------------------- | --------------------------------------------- | --------------------------------- | ---------- |
| **createUserRequest** | [**CreateUserRequest**](CreateUserRequest.md) | The details of the user to create | [optional] |

### Return type

[**CreateUser200Response**](CreateUser200Response.md)

### Authorization

[kindeBearerAuth](../README.md#kindeBearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: application/json

## getUsers

> GetUsers200Response getUsers(opts)

Returns a paginated list of end-user records for a business

The returned list can be sorted by full name or email address in ascending or descending order. The number of records to return at a time can also be controlled using the page_size query string parameter.

### Example

```javascript
import @KindeOssReactNativeSdk from '@kinde-oss/react-native-sdk';
let defaultClient = @KindeOssReactNativeSdk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: kindeBearerAuth
let kindeBearerAuth = defaultClient.authentications['kindeBearerAuth'];
kindeBearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @KindeOssReactNativeSdk.UsersApi();
let opts = {
  'sort': sort_example, // 'name_asc' | 'name_desc' | 'email_asc' | 'email_desc' | Describes the field and order to sort the result by
  'pageSize': 56, // number | The number of items to return
  'userId': 56, // number | The id of the user to filter by
  'nextToken': nextToken_example // string | A string to get the next page of results if there are more results
};
const data = await apiInstance.getUsers(opts);
console.log('API called successfully. Returned data: ' + data);

```

### Parameters

| Name          | Type                   | Description                                                        | Notes                             |
| ------------- | ---------------------- | ------------------------------------------------------------------ | --------------------------------- | ------------------------ | --------------------------------------------------- | --------------------------------- |
| **sort**      | \*\*&#39;name_asc&#39; | &#39;name_desc&#39;                                                | &#39;email_asc&#39;               | &#39;email_desc&#39;\*\* | Describes the field and order to sort the result by | [optional] [default to undefined] |
| **pageSize**  | **number**             | The number of items to return                                      | [optional] [default to undefined] |
| **userId**    | **number**             | The id of the user to filter by                                    | [optional] [default to undefined] |
| **nextToken** | **string**             | A string to get the next page of results if there are more results | [optional] [default to undefined] |

### Return type

[**GetUsers200Response**](GetUsers200Response.md)

### Authorization

[kindeBearerAuth](../README.md#kindeBearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json
