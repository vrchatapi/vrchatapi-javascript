# vrchatapi.Notification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**senderUserId** | **String** |  | [readonly] 
**senderUsername** | **String** |  | 
**type** | [**NotificationType**](NotificationType.md) |  | 
**message** | **String** |  | 
**details** | **String** | **NOTICE:** This is not a JSON object, this is a json **encoded** object, meaning you have to json-de-encode to get the NotificationDetail object depending on the NotificationType. | [default to &#39;{}&#39;]
**seen** | **Boolean** |  | [default to false]
**createdAt** | **Date** |  | [readonly] 


