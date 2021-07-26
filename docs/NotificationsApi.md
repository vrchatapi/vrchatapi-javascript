# vrchatapi.NotificationsApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptFriendRequest**](NotificationsApi.md#acceptFriendRequest) | **PUT** /auth/user/notifications/{notificationId}/accept | Accept Friend Request
[**clearNotifications**](NotificationsApi.md#clearNotifications) | **PUT** /auth/user/notifications/clear | Clear All Notifications
[**deleteNotification**](NotificationsApi.md#deleteNotification) | **PUT** /auth/user/notifications/{notificationId}/hide | Delete Notification
[**getNotifications**](NotificationsApi.md#getNotifications) | **GET** /auth/user/notifications | List Notifications
[**markNotificationAsRead**](NotificationsApi.md#markNotificationAsRead) | **PUT** /auth/user/notifications/{notificationId}/see | Mark As Read



## acceptFriendRequest

> Success acceptFriendRequest(notificationId)

Accept Friend Request

Accept a friend request by notification &#x60;frq_&#x60; ID. Friend requests can be found using the NotificationsAPI &#x60;getNotifications&#x60; by filtering of type &#x60;friendRequest&#x60;.

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

let apiInstance = new vrchatapi.NotificationsApi();
let notificationId = "notificationId_example"; // String | 
apiInstance.acceptFriendRequest(notificationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationId** | **String**|  | 

### Return type

[**Success**](Success.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clearNotifications

> Success clearNotifications()

Clear All Notifications

Clear **all** notifications.

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

let apiInstance = new vrchatapi.NotificationsApi();
apiInstance.clearNotifications().then((data) => {
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


## deleteNotification

> Notification deleteNotification(notificationId)

Delete Notification

Delete a notification.

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

let apiInstance = new vrchatapi.NotificationsApi();
let notificationId = "notificationId_example"; // String | 
apiInstance.deleteNotification(notificationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationId** | **String**|  | 

### Return type

[**Notification**](Notification.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNotifications

> [Notification] getNotifications(opts)

List Notifications

Retrieve all of the current user&#39;s notifications.

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

let apiInstance = new vrchatapi.NotificationsApi();
let opts = {
  'type': all, // String | Only send notifications of this type (can use `all` for all).
  'sent': true, // Boolean | Return notifications sent by the user. Must be false or omitted.
  'hidden': true, // Boolean | Whether to return hidden or non-hidden notifications. True only allowed on type `friendRequest`.
  'after': five_minutes_ago, // String | Only return notifications sent after this Date. Ignored if type is `friendRequest`.
  'n': 60, // Number | The number of objects to return.
  'offset': 56 // Number | A zero-based offset from the default object sorting from where search results start.
};
apiInstance.getNotifications(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Only send notifications of this type (can use &#x60;all&#x60; for all). | [optional] 
 **sent** | **Boolean**| Return notifications sent by the user. Must be false or omitted. | [optional] 
 **hidden** | **Boolean**| Whether to return hidden or non-hidden notifications. True only allowed on type &#x60;friendRequest&#x60;. | [optional] 
 **after** | **String**| Only return notifications sent after this Date. Ignored if type is &#x60;friendRequest&#x60;. | [optional] 
 **n** | **Number**| The number of objects to return. | [optional] [default to 60]
 **offset** | **Number**| A zero-based offset from the default object sorting from where search results start. | [optional] 

### Return type

[**[Notification]**](Notification.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## markNotificationAsRead

> Notification markNotificationAsRead(notificationId)

Mark As Read

Mark a notification as seen.

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

let apiInstance = new vrchatapi.NotificationsApi();
let notificationId = "notificationId_example"; // String | 
apiInstance.markNotificationAsRead(notificationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationId** | **String**|  | 

### Return type

[**Notification**](Notification.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

