# vrchatapi.WorldsApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchWorlds**](WorldsApi.md#searchWorlds) | **GET** /worlds | Search all worlds



## searchWorlds

> [LimitedWorld] searchWorlds(opts)

Search all worlds

Search and list any worlds by text query

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

let apiInstance = new vrchatapi.WorldsApi();
let opts = {
  'featured': true, // Boolean | is the world featured
  'sort': order, // String | 
  'user': "user_example", // String | Set to `me` for searching own worlds
  'userId': "userId_example", // String | Filter by creator id, use `me` for only worlds owned by current user
  'n': 60, // Number | The number of objects to return.
  'order': descending, // String | 
  'offset': 56, // Number | A zero-based offset from the default object sorting from where search results start.
  'search': "search_example", // String | Searches by `name`. Will return empty array if search query is empty or missing.
  'tag': ["null"], // [String] | Filter by Tag
  'notag': ["null"], // [String] | Tags to exclude
  'releaseStatus': hidden, // String | 
  'maxUnityVersion': "maxUnityVersion_example", // String | Current unity version the game is using
  'minUnityVersion': "minUnityVersion_example", // String | The min unity version the world support
  'maxAssetVersion': "maxAssetVersion_example", // String | Current asset version the game is using
  'minAssetVersion': "minAssetVersion_example", // String | The min asset version the world support
  'platform': "platform_example" // String | The platform the world supports (usually standalonewindows)
};
apiInstance.searchWorlds(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featured** | **Boolean**| is the world featured | [optional] 
 **sort** | **String**|  | [optional] [default to &#39;order&#39;]
 **user** | **String**| Set to &#x60;me&#x60; for searching own worlds | [optional] 
 **userId** | **String**| Filter by creator id, use &#x60;me&#x60; for only worlds owned by current user | [optional] 
 **n** | **Number**| The number of objects to return. | [optional] [default to 60]
 **order** | **String**|  | [optional] [default to &#39;descending&#39;]
 **offset** | **Number**| A zero-based offset from the default object sorting from where search results start. | [optional] 
 **search** | **String**| Searches by &#x60;name&#x60;. Will return empty array if search query is empty or missing. | [optional] 
 **tag** | [**[String]**](String.md)| Filter by Tag | [optional] 
 **notag** | [**[String]**](String.md)| Tags to exclude | [optional] 
 **releaseStatus** | **String**|  | [optional] [default to &#39;hidden&#39;]
 **maxUnityVersion** | **String**| Current unity version the game is using | [optional] 
 **minUnityVersion** | **String**| The min unity version the world support | [optional] 
 **maxAssetVersion** | **String**| Current asset version the game is using | [optional] 
 **minAssetVersion** | **String**| The min asset version the world support | [optional] 
 **platform** | **String**| The platform the world supports (usually standalonewindows) | [optional] 

### Return type

[**[LimitedWorld]**](LimitedWorld.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

