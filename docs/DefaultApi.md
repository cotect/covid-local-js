# CovidLocal.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAll**](DefaultApi.md#getAll) | **GET** /all | Get all items for a place
[**getHealthDepartments**](DefaultApi.md#getHealthDepartments) | **GET** /health_departments | Get responsible health departments for a place
[**getHotlines**](DefaultApi.md#getHotlines) | **GET** /hotlines | Get hotlines for a place
[**getTestSites**](DefaultApi.md#getTestSites) | **GET** /test_sites | Get nearby test sites for a place (sorted by distance to place)
[**getWebsites**](DefaultApi.md#getWebsites) | **GET** /websites | Get websites for a place
[**searchPlaces**](DefaultApi.md#searchPlaces) | **GET** /places | Search for places via free-form query
[**test**](DefaultApi.md#test) | **GET** /test | Shows all entries for Berlin Mitte (redirects to /all endpoint)



## getAll

> ResultsList getAll(opts)

Get all items for a place

### Example

```javascript
import CovidLocal from 'covid-local-js';

let apiInstance = new CovidLocal.DefaultApi();
let opts = {
  'placeName': "placeName_example", // String | The name of the place, e.g. a city, neighborhood, state (either place_name or geonames_id must be provided)
  'geonamesId': 56, // Number | The geonames.org id of the place (either place_name or geonames_id must be provided)
  'maxDistance': 0.5, // Number | Maximum distance in degrees lon/lat for test sites
  'limit': 5 // Number | Maximum number of test sites to return
};
apiInstance.getAll(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placeName** | **String**| The name of the place, e.g. a city, neighborhood, state (either place_name or geonames_id must be provided) | [optional] 
 **geonamesId** | **Number**| The geonames.org id of the place (either place_name or geonames_id must be provided) | [optional] 
 **maxDistance** | **Number**| Maximum distance in degrees lon/lat for test sites | [optional] [default to 0.5]
 **limit** | **Number**| Maximum number of test sites to return | [optional] [default to 5]

### Return type

[**ResultsList**](ResultsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHealthDepartments

> ResultsList getHealthDepartments(opts)

Get responsible health departments for a place

### Example

```javascript
import CovidLocal from 'covid-local-js';

let apiInstance = new CovidLocal.DefaultApi();
let opts = {
  'placeName': "placeName_example", // String | The name of the place, e.g. a city, neighborhood, state (either place_name or geonames_id must be provided)
  'geonamesId': 56 // Number | The geonames.org id of the place (either place_name or geonames_id must be provided)
};
apiInstance.getHealthDepartments(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placeName** | **String**| The name of the place, e.g. a city, neighborhood, state (either place_name or geonames_id must be provided) | [optional] 
 **geonamesId** | **Number**| The geonames.org id of the place (either place_name or geonames_id must be provided) | [optional] 

### Return type

[**ResultsList**](ResultsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHotlines

> ResultsList getHotlines(opts)

Get hotlines for a place

### Example

```javascript
import CovidLocal from 'covid-local-js';

let apiInstance = new CovidLocal.DefaultApi();
let opts = {
  'placeName': "placeName_example", // String | The name of the place, e.g. a city, neighborhood, state (either place_name or geonames_id must be provided)
  'geonamesId': 56 // Number | The geonames.org id of the place (either place_name or geonames_id must be provided)
};
apiInstance.getHotlines(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placeName** | **String**| The name of the place, e.g. a city, neighborhood, state (either place_name or geonames_id must be provided) | [optional] 
 **geonamesId** | **Number**| The geonames.org id of the place (either place_name or geonames_id must be provided) | [optional] 

### Return type

[**ResultsList**](ResultsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTestSites

> ResultsList getTestSites(opts)

Get nearby test sites for a place (sorted by distance to place)

### Example

```javascript
import CovidLocal from 'covid-local-js';

let apiInstance = new CovidLocal.DefaultApi();
let opts = {
  'placeName': "placeName_example", // String | The name of the place, e.g. a city, neighborhood, state (either place_name or geonames_id must be provided)
  'geonamesId': 56, // Number | The geonames.org id of the place (either place_name or geonames_id must be provided)
  'maxDistance': 0.5, // Number | Maximum distance in degrees lon/lat for test sites
  'limit': 5 // Number | Maximum number of test sites to return
};
apiInstance.getTestSites(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placeName** | **String**| The name of the place, e.g. a city, neighborhood, state (either place_name or geonames_id must be provided) | [optional] 
 **geonamesId** | **Number**| The geonames.org id of the place (either place_name or geonames_id must be provided) | [optional] 
 **maxDistance** | **Number**| Maximum distance in degrees lon/lat for test sites | [optional] [default to 0.5]
 **limit** | **Number**| Maximum number of test sites to return | [optional] [default to 5]

### Return type

[**ResultsList**](ResultsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebsites

> ResultsList getWebsites(opts)

Get websites for a place

### Example

```javascript
import CovidLocal from 'covid-local-js';

let apiInstance = new CovidLocal.DefaultApi();
let opts = {
  'placeName': "placeName_example", // String | The name of the place, e.g. a city, neighborhood, state (either place_name or geonames_id must be provided)
  'geonamesId': 56 // Number | The geonames.org id of the place (either place_name or geonames_id must be provided)
};
apiInstance.getWebsites(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placeName** | **String**| The name of the place, e.g. a city, neighborhood, state (either place_name or geonames_id must be provided) | [optional] 
 **geonamesId** | **Number**| The geonames.org id of the place (either place_name or geonames_id must be provided) | [optional] 

### Return type

[**ResultsList**](ResultsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchPlaces

> [Place] searchPlaces(q, opts)

Search for places via free-form query

### Example

```javascript
import CovidLocal from 'covid-local-js';

let apiInstance = new CovidLocal.DefaultApi();
let q = "q_example"; // String | Free-form query string (e.g. a city, neighborhood, state, ...)
let opts = {
  'limit': 5, // Number | Maximum number of entries to return
  'searchProvider': "'geonames'" // String | The search provider (only geonames supported so far)
};
apiInstance.searchPlaces(q, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Free-form query string (e.g. a city, neighborhood, state, ...) | 
 **limit** | **Number**| Maximum number of entries to return | [optional] [default to 5]
 **searchProvider** | **String**| The search provider (only geonames supported so far) | [optional] [default to &#39;geonames&#39;]

### Return type

[**[Place]**](Place.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## test

> AnyType test()

Shows all entries for Berlin Mitte (redirects to /all endpoint)

### Example

```javascript
import CovidLocal from 'covid-local-js';

let apiInstance = new CovidLocal.DefaultApi();
apiInstance.test((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AnyType**](AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

