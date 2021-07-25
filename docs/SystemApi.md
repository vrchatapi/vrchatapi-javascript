# vrchatapi.SystemApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConfig**](SystemApi.md#getConfig) | **GET** /config | Fetch API Config
[**getCurrentOnlineUsers**](SystemApi.md#getCurrentOnlineUsers) | **GET** /visits | Current Online Users
[**getHealth**](SystemApi.md#getHealth) | **GET** /health | Check API Health
[**getSystemTime**](SystemApi.md#getSystemTime) | **GET** /time | Current System Time



## getConfig

> Config getConfig()

Fetch API Config

API config contains configuration that the clients needs to work properly.  Currently the most important value here is &#x60;clientApiKey&#x60; which is used for all other API endpoints.

### Example

```javascript
import vrchatapi from 'vrchatapi';

let apiInstance = new vrchatapi.SystemApi();
apiInstance.getConfig().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Config**](Config.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCurrentOnlineUsers

> Number getCurrentOnlineUsers()

Current Online Users

Returns in plain format the number of currently online users.  **NOTE:** The response type is not of JSON, but is an integer in plain ASCII format.

### Example

```javascript
import vrchatapi from 'vrchatapi';

let apiInstance = new vrchatapi.SystemApi();
apiInstance.getCurrentOnlineUsers().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## getHealth

> InlineResponse2002 getHealth()

Check API Health

Gets the overall health status, the server name, and the current build version tag of the API.

### Example

```javascript
import vrchatapi from 'vrchatapi';

let apiInstance = new vrchatapi.SystemApi();
apiInstance.getHealth().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemTime

> Date getSystemTime()

Current System Time

Returns in plain format the current time of the API server.  **NOTE:** The response type is not of JSON, but is a string in plain ASCII format.

### Example

```javascript
import vrchatapi from 'vrchatapi';

let apiInstance = new vrchatapi.SystemApi();
apiInstance.getSystemTime().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**Date**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain

