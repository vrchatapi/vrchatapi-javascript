# vrchatapi.FilesApi

All URIs are relative to *https://api.vrchat.cloud/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFile**](FilesApi.md#createFile) | **POST** /file | Create File
[**createFileVersion**](FilesApi.md#createFileVersion) | **POST** /file/{fileId} | Create File Version
[**deleteFile**](FilesApi.md#deleteFile) | **DELETE** /file/{fileId} | Delete File
[**deleteFileVersion**](FilesApi.md#deleteFileVersion) | **DELETE** /file/{fileId}/{versionId} | Delete File Version
[**downloadFileVersion**](FilesApi.md#downloadFileVersion) | **GET** /file/{fileId}/{versionId} | Download File Version
[**finishFileDataUpload**](FilesApi.md#finishFileDataUpload) | **PUT** /file/{fileId}/{versionId}/{fileType}/finish | Finish FileData Upload
[**getFile**](FilesApi.md#getFile) | **GET** /file/{fileId} | Show File
[**getFileDataUploadStatus**](FilesApi.md#getFileDataUploadStatus) | **GET** /file/{fileId}/{versionId}/{fileType}/status | Check FileData Upload Status
[**getFiles**](FilesApi.md#getFiles) | **GET** /files | List Files
[**startFileDataUpload**](FilesApi.md#startFileDataUpload) | **PUT** /file/{fileId}/{versionId}/{fileType}/start | Start FileData Upload



## createFile

> File createFile(opts)

Create File

Creates a new File object

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

let apiInstance = new vrchatapi.FilesApi();
let opts = {
  'inlineObject3': new vrchatapi.InlineObject3() // InlineObject3 | 
};
apiInstance.createFile(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | [optional] 

### Return type

**File**

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createFileVersion

> File createFileVersion(fileId)

Create File Version

Creates a new FileVersion. Once a Version has been created, proceed to the &#x60;/file/{fileId}/{versionId}/file/start&#x60; endpoint to start a file upload.

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

let apiInstance = new vrchatapi.FilesApi();
let fileId = file_00000000-0000-0000-0000-000000000000; // String | 
apiInstance.createFileVersion(fileId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**|  | 

### Return type

**File**

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteFile

> Success deleteFile(fileId)

Delete File

Deletes a File object.

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

let apiInstance = new vrchatapi.FilesApi();
let fileId = file_00000000-0000-0000-0000-000000000000; // String | 
apiInstance.deleteFile(fileId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**|  | 

### Return type

[**Success**](Success.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteFileVersion

> File deleteFileVersion(fileId, versionId)

Delete File Version

Delete a specific version of a file. You can only delete the latest version.

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

let apiInstance = new vrchatapi.FilesApi();
let fileId = file_00000000-0000-0000-0000-000000000000; // String | 
let versionId = 1; // Number | 
apiInstance.deleteFileVersion(fileId, versionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**|  | 
 **versionId** | **Number**|  | 

### Return type

**File**

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## downloadFileVersion

> downloadFileVersion(fileId, versionId)

Download File Version

Downloads the file with the provided version number.  **Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.  **Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the &#x60;extension&#x60; field when neccesary.

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

let apiInstance = new vrchatapi.FilesApi();
let fileId = file_00000000-0000-0000-0000-000000000000; // String | 
let versionId = 1; // Number | 
apiInstance.downloadFileVersion(fileId, versionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**|  | 
 **versionId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## finishFileDataUpload

> File finishFileDataUpload(fileId, versionId, fileType, opts)

Finish FileData Upload

Finish an upload of a FileData. This will mark it as \&quot;complete\&quot;. After uploading the &#x60;file&#x60; for Avatars and Worlds you then have to upload a &#x60;signature&#x60; file.

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

let apiInstance = new vrchatapi.FilesApi();
let fileId = file_00000000-0000-0000-0000-000000000000; // String | 
let versionId = 1; // Number | 
let fileType = file; // String | 
let opts = {
  'inlineObject4': new vrchatapi.InlineObject4() // InlineObject4 | 
};
apiInstance.finishFileDataUpload(fileId, versionId, fileType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**|  | 
 **versionId** | **Number**|  | 
 **fileType** | **String**|  | 
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | [optional] 

### Return type

**File**

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getFile

> File getFile(fileId)

Show File

Shows general information about the \&quot;File\&quot; object. Each File can have several \&quot;Version\&quot;&#39;s, and each Version can have multiple real files or \&quot;Data\&quot; blobs.

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

let apiInstance = new vrchatapi.FilesApi();
let fileId = file_00000000-0000-0000-0000-000000000000; // String | 
apiInstance.getFile(fileId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**|  | 

### Return type

**File**

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFileDataUploadStatus

> InlineResponse2004 getFileDataUploadStatus(fileId, versionId, fileType)

Check FileData Upload Status

Retrieves the upload status for file upload. Can currently only be accessed when &#x60;status&#x60; is &#x60;waiting&#x60;. Trying to access it on a file version already uploaded currently times out.

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

let apiInstance = new vrchatapi.FilesApi();
let fileId = file_00000000-0000-0000-0000-000000000000; // String | 
let versionId = 1; // Number | 
let fileType = file; // String | 
apiInstance.getFileDataUploadStatus(fileId, versionId, fileType).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**|  | 
 **versionId** | **Number**|  | 
 **fileType** | **String**|  | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFiles

> [File] getFiles(opts)

List Files

Returns a list of files

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

let apiInstance = new vrchatapi.FilesApi();
let opts = {
  'tag': "tag_example", // String | Tag, for example \"icon\" or \"gallery\", not included by default.
  'userId': "userId_example", // String | UserID, will always generate a 500 permission error.
  'n': 60, // Number | The number of objects to return.
  'offset': 56 // Number | A zero-based offset from the default object sorting from where search results start.
};
apiInstance.getFiles(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **String**| Tag, for example \&quot;icon\&quot; or \&quot;gallery\&quot;, not included by default. | [optional] 
 **userId** | **String**| UserID, will always generate a 500 permission error. | [optional] 
 **n** | **Number**| The number of objects to return. | [optional] [default to 60]
 **offset** | **Number**| A zero-based offset from the default object sorting from where search results start. | [optional] 

### Return type

**[File]**

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## startFileDataUpload

> InlineResponse2005 startFileDataUpload(fileId, versionId, fileType, partNumber)

Start FileData Upload

Starts an upload of a specific FilePart. This endpoint will return an AWS URL which you can PUT data to. You need to call this and receive a new AWS API URL for each &#x60;partNumber&#x60;. Please see AWS&#39;s REST documentation on \&quot;PUT Object to S3\&quot; on how to upload. Once all parts has been uploaded, proceed to &#x60;/finish&#x60; endpoint.  **Note:** &#x60;nextPartNumber&#x60; seems like it is always ignored. Despite it returning 0, first partNumber is always 1.

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

let apiInstance = new vrchatapi.FilesApi();
let fileId = file_00000000-0000-0000-0000-000000000000; // String | 
let versionId = 1; // Number | 
let fileType = file; // String | 
let partNumber = 1; // Number | 
apiInstance.startFileDataUpload(fileId, versionId, fileType, partNumber).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**|  | 
 **versionId** | **Number**|  | 
 **fileType** | **String**|  | 
 **partNumber** | **Number**|  | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[apiKeyCookie](../README.md#apiKeyCookie), [authCookie](../README.md#authCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

