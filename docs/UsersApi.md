# vrchatapi.UsersApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUser**](UsersApi.md#getUser) | **GET** /users/{userId} | Get User by ID
[**getUserByName**](UsersApi.md#getUserByName) | **GET** /users/{username}/name | Get User by Username
[**searchActiveUsers**](UsersApi.md#searchActiveUsers) | **GET** /users/active | Search Active Users
[**searchUsers**](UsersApi.md#searchUsers) | **GET** /users | Search All Users
[**updateUser**](UsersApi.md#updateUser) | **PUT** /users/{userId} | Update User Info



## getUser

> User getUser(userId)

Get User by ID

Get public user information about a specific user using their ID.

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

let apiInstance = new vrchatapi.UsersApi();
let userId = "userId_example"; // String | 
apiInstance.getUser(userId).then((data) => {
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

[**User**](User.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserByName

> User getUserByName(username)

Get User by Username

Get public user information about a specific user using their name.

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

let apiInstance = new vrchatapi.UsersApi();
let username = "username_example"; // String | 
apiInstance.getUserByName(username).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchActiveUsers

> [LimitedUser] searchActiveUsers(search, opts)

Search Active Users

Search and list any Active users by text query.  **Has been locked down and now always respond with \&quot;Invalid Admin Credentials\&quot;.**

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

let apiInstance = new vrchatapi.UsersApi();
let search = "search_example"; // String | Username to search for
let opts = {
  'developerType': "developerType_example", // String | Active user by developer type, none for normal users and internal for moderators
  'offset': 56, // Number | A zero-based offset from the default object sorting from where search results start.
  'n': 60 // Number | The number of objects to return.
};
apiInstance.searchActiveUsers(search, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Username to search for | 
 **developerType** | **String**| Active user by developer type, none for normal users and internal for moderators | [optional] 
 **offset** | **Number**| A zero-based offset from the default object sorting from where search results start. | [optional] 
 **n** | **Number**| The number of objects to return. | [optional] [default to 60]

### Return type

[**[LimitedUser]**](LimitedUser.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchUsers

> [LimitedUser] searchUsers(opts)

Search All Users

Search and list any users by text query

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

let apiInstance = new vrchatapi.UsersApi();
let opts = {
  'search': "search_example", // String | Searches by `displayName`. Will return empty array if search query is empty or missing.
  'developerType': "developerType_example", // String | Active user by developer type, none for normal users and internal for moderators
  'n': 60, // Number | The number of objects to return.
  'offset': 56 // Number | A zero-based offset from the default object sorting from where search results start.
};
apiInstance.searchUsers(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Searches by &#x60;displayName&#x60;. Will return empty array if search query is empty or missing. | [optional] 
 **developerType** | **String**| Active user by developer type, none for normal users and internal for moderators | [optional] 
 **n** | **Number**| The number of objects to return. | [optional] [default to 60]
 **offset** | **Number**| A zero-based offset from the default object sorting from where search results start. | [optional] 

### Return type

[**[LimitedUser]**](LimitedUser.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUser

> CurrentUser updateUser(userId, opts)

Update User Info

Update a users information such as the email and birthday.

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

let apiInstance = new vrchatapi.UsersApi();
let userId = "userId_example"; // String | 
let opts = {
  'inlineObject2': new vrchatapi.InlineObject2() // InlineObject2 | 
};
apiInstance.updateUser(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | [optional] 

### Return type

[**CurrentUser**](CurrentUser.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

