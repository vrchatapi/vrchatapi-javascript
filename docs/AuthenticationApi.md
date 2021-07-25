# vrchatapi.AuthenticationApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserById**](AuthenticationApi.md#deleteUserById) | **PUT** /user/{userId}/delete | Delete User
[**getCurrentUser**](AuthenticationApi.md#getCurrentUser) | **GET** /auth/user | Login and/or Get Current User Info
[**logout**](AuthenticationApi.md#logout) | **PUT** /logout | Logout
[**verify2FA**](AuthenticationApi.md#verify2FA) | **POST** /auth/twofactorauth/totp/verify | Verify 2FA code
[**verifyAuthToken**](AuthenticationApi.md#verifyAuthToken) | **GET** /auth | Verify Auth Token
[**verifyRecoveryCode**](AuthenticationApi.md#verifyRecoveryCode) | **POST** /auth/twofactorauth/otp/verify | Verify 2FA code with Recovery code



## deleteUserById

> CurrentUser deleteUserById(userId)

Delete User

Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.  **VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.  **METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.

### Example

```javascript
import vrchatapi from 'vrchatapi';
let defaultClient = vrchatapi.ApiClient.instance;
// Configure API key authorization: apiKeyCookie
let apiKeyCookie = defaultClient.authentications['apiKeyCookie'];
apiKeyCookie.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyCookie.apiKeyPrefix = 'Token';
// Configure API key authorization: authCookie
let authCookie = defaultClient.authentications['authCookie'];
authCookie.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authCookie.apiKeyPrefix = 'Token';

let apiInstance = new vrchatapi.AuthenticationApi();
let userId = "userId_example"; // String | 
apiInstance.deleteUserById(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**CurrentUser**](CurrentUser.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCurrentUser

> CurrentUser getCurrentUser()

Login and/or Get Current User Info

Login and/or Get user data from your VRChat account.  If &#x60;Authorization&#x60; header is present then a new login session will be generated, and a new &#x60;auth&#x60; cookie is returned.  **WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the &#x60;auth&#x60; cookie whenever you can, and avoid sending the Authorization header unless strictly neccesary. While the exact number of simultaneous open sessions is secret, expect to **very fast** run into the rate-limit and be temporarily blocked from making new sessions until the old ones expire.

### Example

```javascript
import vrchatapi from 'vrchatapi';
let defaultClient = vrchatapi.ApiClient.instance;
// Configure API key authorization: authCookie
let authCookie = defaultClient.authentications['authCookie'];
authCookie.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authCookie.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: authHeader
let authHeader = defaultClient.authentications['authHeader'];
authHeader.username = 'YOUR USERNAME';
authHeader.password = 'YOUR PASSWORD';
// Configure API key authorization: twoFactorAuthCookie
let twoFactorAuthCookie = defaultClient.authentications['twoFactorAuthCookie'];
twoFactorAuthCookie.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//twoFactorAuthCookie.apiKeyPrefix = 'Token';

let apiInstance = new vrchatapi.AuthenticationApi();
apiInstance.getCurrentUser().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CurrentUser**](CurrentUser.md)

### Authorization

[authCookie](../README.md#authCookie), [authHeader](../README.md#authHeader), [twoFactorAuthCookie](../README.md#twoFactorAuthCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## logout

> Success logout()

Logout

Invalidates the auth cookie.

### Example

```javascript
import vrchatapi from 'vrchatapi';
let defaultClient = vrchatapi.ApiClient.instance;
// Configure API key authorization: apiKeyCookie
let apiKeyCookie = defaultClient.authentications['apiKeyCookie'];
apiKeyCookie.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyCookie.apiKeyPrefix = 'Token';
// Configure API key authorization: authCookie
let authCookie = defaultClient.authentications['authCookie'];
authCookie.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authCookie.apiKeyPrefix = 'Token';

let apiInstance = new vrchatapi.AuthenticationApi();
apiInstance.logout().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Success**](Success.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## verify2FA

> InlineResponse2001 verify2FA(opts)

Verify 2FA code

Finishes the login sequence with a normal 2FA-generated code for accounts with 2FA-protection enabled.

### Example

```javascript
import vrchatapi from 'vrchatapi';
let defaultClient = vrchatapi.ApiClient.instance;
// Configure API key authorization: authCookie
let authCookie = defaultClient.authentications['authCookie'];
authCookie.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authCookie.apiKeyPrefix = 'Token';

let apiInstance = new vrchatapi.AuthenticationApi();
let opts = {
  'inlineObject': new vrchatapi.InlineObject() // InlineObject | 
};
apiInstance.verify2FA(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## verifyAuthToken

> InlineResponse200 verifyAuthToken()

Verify Auth Token

Verify whether the currently provided Auth Token is valid.

### Example

```javascript
import vrchatapi from 'vrchatapi';
let defaultClient = vrchatapi.ApiClient.instance;
// Configure API key authorization: apiKeyCookie
let apiKeyCookie = defaultClient.authentications['apiKeyCookie'];
apiKeyCookie.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyCookie.apiKeyPrefix = 'Token';
// Configure API key authorization: authCookie
let authCookie = defaultClient.authentications['authCookie'];
authCookie.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authCookie.apiKeyPrefix = 'Token';

let apiInstance = new vrchatapi.AuthenticationApi();
apiInstance.verifyAuthToken().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## verifyRecoveryCode

> InlineResponse2001 verifyRecoveryCode(opts)

Verify 2FA code with Recovery code

Finishes the login sequence with an OTP (One Time Password) recovery code for accounts with 2FA-protection enabled.

### Example

```javascript
import vrchatapi from 'vrchatapi';
let defaultClient = vrchatapi.ApiClient.instance;
// Configure API key authorization: authCookie
let authCookie = defaultClient.authentications['authCookie'];
authCookie.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authCookie.apiKeyPrefix = 'Token';

let apiInstance = new vrchatapi.AuthenticationApi();
let opts = {
  'inlineObject1': new vrchatapi.InlineObject1() // InlineObject1 | 
};
apiInstance.verifyRecoveryCode(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

