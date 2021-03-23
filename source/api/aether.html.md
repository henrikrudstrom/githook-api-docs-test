---
title: Aether v1.0.0
language_tabs:
  - shell: curl
  - http: HTTP
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="aether">Aether v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.
aether configuration server

Base URLs:

* <a href="http://services.snap0.api.no">http://services.snap0.api.no</a>

Web: <a href="https://github.com/amedia/gaia/">Support</a> 

<h1 id="aether-properties">properties</h1>

## get-property

<a id="opIdget-property"></a>

> Code samples
```shell
# You can also use wget
curl -X GET http://services.snap0.api.no/aether/api/public/v3/properties/{pub}/{property} \
  -H 'Accept: application/json'
```

```http
GET http://services.snap0.api.no/aether/api/public/v3/properties/{pub}/{property} HTTP/1.1
Host: services.snap0.api.no
Accept: application/json
```

`GET /aether/api/public/v3/properties/{pub}/{property}`

Get one property by key and publication key or wwwDomain

<h3 id="get-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pub|path|string|true|publicationId or wwwDomain|
|property|path|string|true|property key|

> Example responses
> 200 Response
```json
{
  "value": "string",
  "name": "string",
  "medusa": true,
  "overridable": true
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<SinglePropertyResponse>
  <value>string</value>
  <name>string</name>
  <medusa>true</medusa>
  <overridable>true</overridable>
</SinglePropertyResponse>
```

<h3 id="get-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Return found property|[SinglePropertyResponse](#schemasinglepropertyresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Property by that key or wwwDomain was not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error reading properties|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_SinglePropertyResponse">SinglePropertyResponse</h2>
<!-- backwards compatibility -->
<a id="schemasinglepropertyresponse"></a>
<a id="schema_SinglePropertyResponse"></a>
<a id="tocSsinglepropertyresponse"></a>
<a id="tocssinglepropertyresponse"></a>

```json
{
  "value": "string",
  "name": "string",
  "medusa": true,
  "overridable": true
}
```

A property name and value

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|value of the property|
|name|string|true|none|name of the property|
|medusa|boolean|true|none|deprecated|
|overridable|boolean|true|none|deprecated|