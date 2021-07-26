# vrchatapi.FriendsApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteFriendRequest**](FriendsApi.md#deleteFriendRequest) | **DELETE** /user/{userId}/friendRequest | Delete Friend Request
[**friend**](FriendsApi.md#friend) | **POST** /user/{userId}/friendRequest | Send Friend Request
[**getFriendStatus**](FriendsApi.md#getFriendStatus) | **GET** /user/{userId}/friendStatus | Check Friend Status
[**getFriends**](FriendsApi.md#getFriends) | **GET** /auth/user/friends | List Friends
[**unfriend**](FriendsApi.md#unfriend) | **DELETE** /auth/user/friends/{userId} | Unfriend



## deleteFriendRequest

> Success deleteFriendRequest(userId)

Delete Friend Request

Deletes an outgoing pending friend request to another user. To delete an incoming friend request, use the &#x60;deleteNotification&#x60; endpoint instead.

### Example

```javascript
import vrchatapi from 'vrchatapi';
let defaultClient = vrchatapi.ApiClient.instance;
// Configure API key authorization: apiKeyCookie
let apiKeyCookie = defaultClient.authentications['apiKeyCookie'];
apiKeyCookie.apiKey = 'YOUR API KEY';
// Configure API key authorization: authCookie
let authCookie = defaultClient.authentications['authCookie'];
authCookie.apiKey = 'YOUR API KEY';

let apiInstance = new vrchatapi.FriendsApi();
let userId = "userId_example"; // String | 
apiInstance.deleteFriendRequest(userId).then((data) => {
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

[**Success**](Success.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## friend

> Notification friend(userId)

Send Friend Request

Send a friend request to another user.

### Example

```javascript
import vrchatapi from 'vrchatapi';
let defaultClient = vrchatapi.ApiClient.instance;
// Configure API key authorization: apiKeyCookie
let apiKeyCookie = defaultClient.authentications['apiKeyCookie'];
apiKeyCookie.apiKey = 'YOUR API KEY';
// Configure API key authorization: authCookie
let authCookie = defaultClient.authentications['authCookie'];
authCookie.apiKey = 'YOUR API KEY';

let apiInstance = new vrchatapi.FriendsApi();
let userId = "userId_example"; // String | 
apiInstance.friend(userId).then((data) => {
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

[**Notification**](Notification.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFriendStatus

> InlineResponse2003 getFriendStatus(userId)

Check Friend Status

Retrieve if the user is currently a friend with a given user, if they have an outgoing friend request, and if they have an incoming friend request. The proper way to receive and accept friend request is by checking if the user has an incoming &#x60;Notification&#x60; of type &#x60;friendRequest&#x60;, and then accepting that notification.

### Example

```javascript
import vrchatapi from 'vrchatapi';
let defaultClient = vrchatapi.ApiClient.instance;
// Configure API key authorization: apiKeyCookie
let apiKeyCookie = defaultClient.authentications['apiKeyCookie'];
apiKeyCookie.apiKey = 'YOUR API KEY';
// Configure API key authorization: authCookie
let authCookie = defaultClient.authentications['authCookie'];
authCookie.apiKey = 'YOUR API KEY';

let apiInstance = new vrchatapi.FriendsApi();
let userId = "userId_example"; // String | 
apiInstance.getFriendStatus(userId).then((data) => {
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

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFriends

> [LimitedUser] getFriends(opts)

List Friends

List information about friends.

### Example

```javascript
import vrchatapi from 'vrchatapi';
let defaultClient = vrchatapi.ApiClient.instance;
// Configure API key authorization: apiKeyCookie
let apiKeyCookie = defaultClient.authentications['apiKeyCookie'];
apiKeyCookie.apiKey = 'YOUR API KEY';
// Configure API key authorization: authCookie
let authCookie = defaultClient.authentications['authCookie'];
authCookie.apiKey = 'YOUR API KEY';

let apiInstance = new vrchatapi.FriendsApi();
let opts = {
  'offset': 56, // Number | A zero-based offset from the default object sorting from where search results start.
  'n': 60, // Number | The number of objects to return.
  'offline': true // Boolean | Returns *only* offline users if true, returns only online and active users if false
};
apiInstance.getFriends(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| A zero-based offset from the default object sorting from where search results start. | [optional] 
 **n** | **Number**| The number of objects to return. | [optional] [default to 60]
 **offline** | **Boolean**| Returns *only* offline users if true, returns only online and active users if false | [optional] 

### Return type

[**[LimitedUser]**](LimitedUser.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unfriend

> Success unfriend(userId)

Unfriend

Unfriend a user by ID.

### Example

```javascript
import vrchatapi from 'vrchatapi';
let defaultClient = vrchatapi.ApiClient.instance;
// Configure API key authorization: apiKeyCookie
let apiKeyCookie = defaultClient.authentications['apiKeyCookie'];
apiKeyCookie.apiKey = 'YOUR API KEY';
// Configure API key authorization: authCookie
let authCookie = defaultClient.authentications['authCookie'];
authCookie.apiKey = 'YOUR API KEY';

let apiInstance = new vrchatapi.FriendsApi();
let userId = "userId_example"; // String | 
apiInstance.unfriend(userId).then((data) => {
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

[**Success**](Success.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

