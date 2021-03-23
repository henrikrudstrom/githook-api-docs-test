---
title: Gaia v1.0.0
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

<h1 id="gaia">Gaia v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.
Gaia configuration server

Base URLs:

* <a href="http://services.snap0.api.no">http://services.snap0.api.no</a>

Web: <a href="https://github.com/amedia/gaia/">Support</a> 

<h1 id="gaia-properties">properties</h1>

## get-property

<a id="opIdget-property"></a>

> Code samples
```shell
# You can also use wget
curl -X GET http://services.snap0.api.no/gaia/api/public/v3/properties/{pub}/{property} \
  -H 'Accept: application/json'
```

```http
GET http://services.snap0.api.no/gaia/api/public/v3/properties/{pub}/{property} HTTP/1.1
Host: services.snap0.api.no
Accept: application/json
```

`GET /gaia/api/public/v3/properties/{pub}/{property}`

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

## get-property-list

<a id="opIdget-property-list"></a>

> Code samples
```shell
# You can also use wget
curl -X GET http://services.snap0.api.no/gaia/api/public/v3/properties/multi/{pub}/{propertyList} \
  -H 'Accept: application/json'
```

```http
GET http://services.snap0.api.no/gaia/api/public/v3/properties/multi/{pub}/{propertyList} HTTP/1.1
Host: services.snap0.api.no
Accept: application/json
```

`GET /gaia/api/public/v3/properties/multi/{pub}/{propertyList}`

Get a list of properties by keys and publication id or wwwDomain

<h3 id="get-property-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pub|path|string|true|publication key or wwwDomain|
|propertyList|path|string|true|comma separated properties|

> Example responses
> 200 Response
```json
[
  {
    "value": "string",
    "name": "string",
    "medusa": true,
    "overridable": true
  }
]
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<PropertyListResponse>
  <value>string</value>
  <name>string</name>
  <medusa>true</medusa>
  <overridable>true</overridable>
</PropertyListResponse>
```

<h3 id="get-property-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PropertyListResponse](#schemapropertylistresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|property by that key or wwwDomain was not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error reading properties|None|

<aside class="success">
This operation does not require authentication
</aside>

## get-global-property

<a id="opIdget-global-property"></a>

> Code samples
```shell
# You can also use wget
curl -X GET http://services.snap0.api.no/gaia/api/public/v3/properties/global/{property} \
  -H 'Accept: application/json'
```

```http
GET http://services.snap0.api.no/gaia/api/public/v3/properties/global/{property} HTTP/1.1
Host: services.snap0.api.no
Accept: application/json
```

`GET /gaia/api/public/v3/properties/global/{property}`

Get one global property

<h3 id="get-global-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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

<h3 id="get-global-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[SinglePropertyResponse](#schemasinglepropertyresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|property by that key was not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="gaia-config">config</h1>

## get-siteconfig

<a id="opIdget-siteconfig"></a>

> Code samples
```shell
# You can also use wget
curl -X GET http://services.snap0.api.no/gaia/api/public/v3/siteconfig \
  -H 'Accept: application/json'
```

```http
GET http://services.snap0.api.no/gaia/api/public/v3/siteconfig HTTP/1.1
Host: services.snap0.api.no
Accept: application/json
```

`GET /gaia/api/public/v3/siteconfig`

get all siteconfig as a list

> Example responses
> 200 Response
```json
[
  {
    "id": 0,
    "key": "string",
    "status": "active",
    "locale": "nb",
    "tags": [
      "string"
    ],
    "name": {
      "short": "string",
      "full": "string"
    },
    "domains": {
      "main": "string",
      "aliases": [
        "string"
      ]
    },
    "config": {
      "design": "default",
      "premium_design": "default",
      "cms": {
        "frontpageSource": {
          "desktop": "string",
          "mobile": "string"
        },
        "sectionSource": "string",
        "metadataBackend": "acpsanity"
      },
      "dredition": {
        "frontId": "string",
        "editorialGroup": "string"
      },
      "escenic": {
        "publicationName": "string",
        "acpPubKey": 0,
        "backendKey": "string"
      },
      "analytics": {
        "a_virtual": "string",
        "site_groups": [
          {
            "benchmark_groups": [
              "string"
            ],
            "group_key": "string",
            "main_group": true,
            "sites": [
              "string"
            ]
          }
        ],
        "class": "VEI0",
        "region": "Nidaros",
        "amedia_owned": true,
        "local_newspaper": true
      },
      "title_info": {
        "title_code": "string",
        "participates_in_plussalt": true,
        "sites": [
          "string"
        ]
      },
      "aid": {
        "enabled": true
      },
      "linpro": {
        "monitored": true
      },
      "feature": {
        "churn": "ab"
      },
      "secrets": {
        "flowplayer": {
          "apiKey": "string",
          "siteId": "string"
        },
        "sms": {
          "linkMobilityAccount": {
            "platformId": "string",
            "platformPartnerId": "string",
            "username": "string",
            "password": "string",
            "type": "string"
          }
        },
        "nets": {
          "md5_k1": "string",
          "md5_k2": "string"
        },
        "vipps": {
          "client_secret": "string",
          "subscription_key": "string"
        }
      },
      "visiolink": {
        "identifier": "string"
      },
      "sms": {
        "gateway": "string"
      },
      "varnish": {
        "default_backend": "string",
        "force_https": true
      },
      "ssl": {
        "dnsWildcard": [
          "string"
        ],
        "httpHost": [
          "string"
        ],
        "edges": [
          "string"
        ]
      },
      "subscription_system": {
        "type": "string",
        "instance": "string",
        "title_code": "string",
        "locked": true,
        "aria_golive_date": "string",
        "nets_params": {
          "account_number": "string",
          "setup_code": "string",
          "merchant_id": "string",
          "issuer_id": "string"
        },
        "vipps_params": {
          "client_id": "string"
        }
      },
      "apps": {
        "nyhetsappen": {
          "newspaperId": "string",
          "ios": {
            "appId": "string"
          },
          "android": {
            "appId": "string"
          }
        }
      },
      "webforwards": {
        "property1": {
          "url": "string",
          "http_code": 301
        },
        "property2": {
          "url": "string",
          "http_code": 301
        }
      },
      "gsuite": {
        "orgunit": "string",
        "group": "string"
      },
      "recommendations": {
        "engineV1": {
          "kind": "DataTopListWithHashes",
          "position": 0,
          "disabled": true
        },
        "engineSublistV1": {
          "kind": "DataTopListWithHashes",
          "disabled": true,
          "size": 0
        },
        "contentmarketing": {
          "kind": "DataTopListWithHashes",
          "position": 0,
          "disabled": true
        },
        "consumermarketing": {
          "kind": "DataTopListWithHashes",
          "position": 0,
          "disabled": true
        }
      },
      "chat": {
        "orgId": "string",
        "orgName": "string",
        "queueName": "string"
      }
    }
  }
]
```

<h3 id="get-siteconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[SiteconfigResponse](#schemasiteconfigresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Errors reading siteconfig|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="gaia-publications">publications</h1>

## get-all-publications

<a id="opIdget-all-publications"></a>

> Code samples
```shell
# You can also use wget
curl -X GET http://services.snap0.api.no/gaia/api/public/v3/publications \
  -H 'Accept: application/json'
```

```http
GET http://services.snap0.api.no/gaia/api/public/v3/publications HTTP/1.1
Host: services.snap0.api.no
Accept: application/json
```

`GET /gaia/api/public/v3/publications`

get all publications as a list

> Example responses
> 200 Response
```json
[
  {
    "ece5PublicationName": "string",
    "ece5AcpPubKey": 0,
    "domainAliases": "string",
    "cms": "-",
    "medusaFlag": 0,
    "ece5BackendKey": "string",
    "escenic": true,
    "displayName": "string",
    "mobDomain": "string",
    "nedstatCode": "string",
    "id": -3309294,
    "fullDisplayName": "string",
    "name": "string",
    "apayEnabled": true,
    "escenicFlag": 0,
    "wwwDomain": "string",
    "medusa": true
  }
]
```

<h3 id="get-all-publications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PublicationsResponse](#schemapublicationsresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Errors reading publications|None|

<aside class="success">
This operation does not require authentication
</aside>

## get-publication-by-id

<a id="opIdget-publication-by-id"></a>

> Code samples
```shell
# You can also use wget
curl -X GET http://services.snap0.api.no/gaia/api/public/v3/publications/id/{publicationId} \
  -H 'Accept: application/json'
```

```http
GET http://services.snap0.api.no/gaia/api/public/v3/publications/id/{publicationId} HTTP/1.1
Host: services.snap0.api.no
Accept: application/json
```

`GET /gaia/api/public/v3/publications/id/{publicationId}`

get a single publication by id

<h3 id="get-publication-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|publicationId|path|string|true|publication id|

> Example responses
> 200 Response
```json
{
  "ece5PublicationName": "string",
  "ece5AcpPubKey": 0,
  "domainAliases": "string",
  "cms": "-",
  "medusaFlag": 0,
  "ece5BackendKey": "string",
  "escenic": true,
  "displayName": "string",
  "mobDomain": "string",
  "nedstatCode": "string",
  "id": -3309294,
  "fullDisplayName": "string",
  "name": "string",
  "apayEnabled": true,
  "escenicFlag": 0,
  "wwwDomain": "string",
  "medusa": true
}
```

<h3 id="get-publication-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Publication](#schemapublication)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|publication for id was not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Errors reading publication|None|

<aside class="success">
This operation does not require authentication
</aside>

## get-publication-by-domain

<a id="opIdget-publication-by-domain"></a>

> Code samples
```shell
# You can also use wget
curl -X GET http://services.snap0.api.no/gaia/api/public/v3/publications/domain/{domain} \
  -H 'Accept: application/json'
```

```http
GET http://services.snap0.api.no/gaia/api/public/v3/publications/domain/{domain} HTTP/1.1
Host: services.snap0.api.no
Accept: application/json
```

`GET /gaia/api/public/v3/publications/domain/{domain}`

get a single publication by domain

<h3 id="get-publication-by-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|publication domain|

> Example responses
> 200 Response
```json
{
  "ece5PublicationName": "string",
  "ece5AcpPubKey": 0,
  "domainAliases": "string",
  "cms": "-",
  "medusaFlag": 0,
  "ece5BackendKey": "string",
  "escenic": true,
  "displayName": "string",
  "mobDomain": "string",
  "nedstatCode": "string",
  "id": -3309294,
  "fullDisplayName": "string",
  "name": "string",
  "apayEnabled": true,
  "escenicFlag": 0,
  "wwwDomain": "string",
  "medusa": true
}
```

<h3 id="get-publication-by-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Publication](#schemapublication)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|publication for domain was not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Errors reading publication|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="gaia-menu">menu</h1>

## get-menu

<a id="opIdget-menu"></a>

> Code samples
```shell
# You can also use wget
curl -X GET http://services.snap0.api.no/gaia/api/public/v3/files/menu/{domain} \
  -H 'Accept: application/json'
```

```http
GET http://services.snap0.api.no/gaia/api/public/v3/files/menu/{domain} HTTP/1.1
Host: services.snap0.api.no
Accept: application/json
```

`GET /gaia/api/public/v3/files/menu/{domain}`

Get menu for domain

<h3 id="get-menu-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|publication domain|

> Example responses
> 200 Response
```json
{
  "topics": {
    "id": "",
    "title": "",
    "elements": [
      {
        "href": "string",
        "name": "string",
        "target": "",
        "channel": "desktop"
      }
    ]
  },
  "tags": {
    "id": "",
    "title": "",
    "elements": [
      {
        "href": "string",
        "name": "string",
        "target": "",
        "channel": "desktop"
      }
    ]
  },
  "customerService": {
    "id": "",
    "title": "",
    "elements": [
      {
        "href": "string",
        "name": "string",
        "target": "",
        "channel": null
      }
    ]
  },
  "otherTitles": {
    "id": "",
    "title": "",
    "elements": [
      {
        "href": "string",
        "name": "string",
        "target": "",
        "channel": null
      }
    ]
  },
  "categories": [
    {
      "id": "topics",
      "title": "string",
      "elements": [
        {
          "href": "string",
          "name": "string",
          "target": "string",
          "channel": "desktop"
        }
      ]
    }
  ],
  "name": "topmenu",
  "atoZ": {
    "id": "",
    "title": "",
    "elements": [
      {
        "href": "string",
        "name": "string",
        "target": "",
        "channel": "desktop"
      }
    ]
  },
  "tipUs": {
    "id": "",
    "title": "",
    "elements": [
      {
        "href": "string",
        "name": "string",
        "target": "",
        "channel": "mobile"
      }
    ]
  },
  "follow": {
    "id": "",
    "title": "",
    "elements": [
      {
        "href": "string",
        "name": "Følg oss på Facebook",
        "target": "",
        "channel": null
      }
    ]
  },
  "challengeTops": [
    {
      "image": {
        "src": "string",
        "alt": ""
      },
      "id": "noaccess",
      "href": "string",
      "mainText": "string",
      "subText": "string"
    }
  ],
  "share": {
    "id": "",
    "title": "",
    "elements": [
      {
        "href": "string",
        "name": "string",
        "target": "",
        "channel": null
      }
    ]
  }
}
```

<h3 id="get-menu-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|get a single menu information by domain|[FileMenu](#schemafilemenu)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|publication for domain was not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Errors reading publication|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_FileMenu">FileMenu</h2>
<!-- backwards compatibility -->
<a id="schemafilemenu"></a>
<a id="schema_FileMenu"></a>
<a id="tocSfilemenu"></a>
<a id="tocsfilemenu"></a>

```json
{
  "topics": {
    "id": "",
    "title": "",
    "elements": [
      {
        "href": "string",
        "name": "string",
        "target": "",
        "channel": "desktop"
      }
    ]
  },
  "tags": {
    "id": "",
    "title": "",
    "elements": [
      {
        "href": "string",
        "name": "string",
        "target": "",
        "channel": "desktop"
      }
    ]
  },
  "customerService": {
    "id": "",
    "title": "",
    "elements": [
      {
        "href": "string",
        "name": "string",
        "target": "",
        "channel": null
      }
    ]
  },
  "otherTitles": {
    "id": "",
    "title": "",
    "elements": [
      {
        "href": "string",
        "name": "string",
        "target": "",
        "channel": null
      }
    ]
  },
  "categories": [
    {
      "id": "topics",
      "title": "string",
      "elements": [
        {
          "href": "string",
          "name": "string",
          "target": "string",
          "channel": "desktop"
        }
      ]
    }
  ],
  "name": "topmenu",
  "atoZ": {
    "id": "",
    "title": "",
    "elements": [
      {
        "href": "string",
        "name": "string",
        "target": "",
        "channel": "desktop"
      }
    ]
  },
  "tipUs": {
    "id": "",
    "title": "",
    "elements": [
      {
        "href": "string",
        "name": "string",
        "target": "",
        "channel": "mobile"
      }
    ]
  },
  "follow": {
    "id": "",
    "title": "",
    "elements": [
      {
        "href": "string",
        "name": "Følg oss på Facebook",
        "target": "",
        "channel": null
      }
    ]
  },
  "challengeTops": [
    {
      "image": {
        "src": "string",
        "alt": ""
      },
      "id": "noaccess",
      "href": "string",
      "mainText": "string",
      "subText": "string"
    }
  ],
  "share": {
    "id": "",
    "title": "",
    "elements": [
      {
        "href": "string",
        "name": "string",
        "target": "",
        "channel": null
      }
    ]
  }
}
```

Menu structure for header menu in web, deprecated

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topics|object|true|none|none|
|» id|string|true|none|Enum derived from sample data on 2021-02-17.|
|» title|string|true|none|Enum derived from sample data on 2021-02-17.|
|» elements|[object]|true|none|none|
|»» href|string|true|none|Possible enum ignored, as sample data included 302 distinct values on 2021-02-17.|
|»» name|string|true|none|Possible enum ignored, as sample data included 246 distinct values on 2021-02-17.|
|»» target|string¦null|true|none|Enum derived from sample data on 2021-02-17.|
|»» channel|string¦null|true|none|Enum derived from sample data on 2021-02-17.|
|tags|object|true|none|none|
|» id|string|true|none|Enum derived from sample data on 2021-02-17.|
|» title|string|true|none|Enum derived from sample data on 2021-02-17.|
|» elements|[object]|true|none|none|
|»» href|string|true|none|Possible enum ignored, as sample data included 354 distinct values on 2021-02-17.|
|»» name|string|true|none|Possible enum ignored, as sample data included 218 distinct values on 2021-02-17.|
|»» target|string¦null|true|none|Enum derived from sample data on 2021-02-17.|
|»» channel|string¦null|true|none|Enum derived from sample data on 2021-02-17.|
|customerService|object|true|none|none|
|» id|string|true|none|Enum derived from sample data on 2021-02-17.|
|» title|string|true|none|Enum derived from sample data on 2021-02-17.|
|» elements|[object]|true|none|none|
|»» href|string¦null|true|none|Possible enum ignored, as sample data included 241 distinct values on 2021-02-17.|
|»» name|string|true|none|Possible enum ignored, as sample data included 222 distinct values on 2021-02-17.|
|»» target|string¦null|true|none|Enum derived from sample data on 2021-02-17.|
|»» channel|any|true|none|none|
|otherTitles|object|true|none|none|
|» id|string|true|none|Enum derived from sample data on 2021-02-17.|
|» title|string|true|none|Enum derived from sample data on 2021-02-17.|
|» elements|[object]|true|none|none|
|»» href|string|true|none|Possible enum ignored, as sample data included 71 distinct values on 2021-02-17.|
|»» name|string|true|none|Possible enum ignored, as sample data included 68 distinct values on 2021-02-17.|
|»» target|string¦null|true|none|Enum derived from sample data on 2021-02-17.|
|»» channel|any|true|none|none|
|categories|[object]|true|none|none|
|» id|string¦null|true|none|Enum derived from sample data on 2021-02-17.|
|» title|string|true|none|Possible enum ignored, as sample data included 37 distinct values on 2021-02-17.|
|» elements|[object]|true|none|none|
|»» href|string¦null|true|none|Possible enum ignored, as sample data included 1862 distinct values on 2021-02-17.|
|»» name|string|true|none|Possible enum ignored, as sample data included 1454 distinct values on 2021-02-17.|
|»» target|string¦null|true|none|Possible enum ignored, as sample data included 14 distinct values on 2021-02-17.|
|»» channel|string¦null|true|none|Enum derived from sample data on 2021-02-17.|
|name|string|true|none|Enum derived from sample data on 2021-02-17.|
|atoZ|object|true|none|none|
|» id|string|true|none|Enum derived from sample data on 2021-02-17.|
|» title|string|true|none|Enum derived from sample data on 2021-02-17.|
|» elements|[object]|true|none|none|
|»» href|string¦null|true|none|Possible enum ignored, as sample data included 949 distinct values on 2021-02-17.|
|»» name|string|true|none|Possible enum ignored, as sample data included 623 distinct values on 2021-02-17.|
|»» target|string¦null|true|none|Enum derived from sample data on 2021-02-17.|
|»» channel|string¦null|true|none|Enum derived from sample data on 2021-02-17.|
|tipUs|object|true|none|none|
|» id|string|true|none|Enum derived from sample data on 2021-02-17.|
|» title|string|true|none|Enum derived from sample data on 2021-02-17.|
|» elements|[object]|true|none|none|
|»» href|string¦null|true|none|Possible enum ignored, as sample data included 31 distinct values on 2021-02-17.|
|»» name|string|true|none|Possible enum ignored, as sample data included 301 distinct values on 2021-02-17.|
|»» target|string|true|none|Enum derived from sample data on 2021-02-17.|
|»» channel|string¦null|true|none|Enum derived from sample data on 2021-02-17.|
|follow|object|true|none|none|
|» id|string|true|none|Enum derived from sample data on 2021-02-17.|
|» title|string|true|none|Enum derived from sample data on 2021-02-17.|
|» elements|[object]|true|none|none|
|»» href|string|true|none|Possible enum ignored, as sample data included 202 distinct values on 2021-02-17.|
|»» name|string|true|none|Enum derived from sample data on 2021-02-17.|
|»» target|string|true|none|Enum derived from sample data on 2021-02-17.|
|»» channel|any|true|none|none|
|challengeTops|[object]¦null|true|none|none|
|» image|object|true|none|none|
|»» src|string|true|none|Possible enum ignored, as sample data included 13 distinct values on 2021-02-17.|
|»» alt|string¦null|true|none|Enum derived from sample data on 2021-02-17.|
|» id|string¦null|true|none|Enum derived from sample data on 2021-02-17.|
|» href|string|true|none|Possible enum ignored, as sample data included 205 distinct values on 2021-02-17.|
|» mainText|string¦null|true|none|Possible enum ignored, as sample data included 28 distinct values on 2021-02-17.|
|» subText|string¦null|true|none|Possible enum ignored, as sample data included 25 distinct values on 2021-02-17.|
|share|object|true|none|none|
|» id|string|true|none|Enum derived from sample data on 2021-02-17.|
|» title|string|true|none|Enum derived from sample data on 2021-02-17.|
|» elements|[object]|true|none|none|
|»» href|string|true|none|Possible enum ignored, as sample data included 39 distinct values on 2021-02-17.|
|»» name|string|true|none|Possible enum ignored, as sample data included 33 distinct values on 2021-02-17.|
|»» target|string|true|none|Enum derived from sample data on 2021-02-17.|
|»» channel|any|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|id||
|id|topics|
|title||
|title|Lokale sider|
|title|Aktuelle tema|
|title|Aktuelt|
|title|Leter du etter dette?|
|title|Aktuelle temaer|
|target||
|channel|desktop|
|id||
|id|tags|
|title||
|title|Toppmeny|
|target||
|channel|desktop|
|id||
|id|customerservice|
|title||
|title|Kundesenter|
|title|Kundeservice2|
|title|Kundeservice|
|target||
|target|customerservicetlf|
|id||
|id|othertitles|
|title||
|title|SAMARBEIDENDE AVISER|
|title|Våre andre aviser|
|title|Våre andre nettstader|
|title|Amedias Aviser i Telemark og Agder|
|title|Amedias aviser i Telemark og Agder|
|target||
|id|topics|
|id|tipus|
|id|tags|
|id|othertitles|
|id|follow|
|id|customerservice|
|id|share|
|channel|desktop|
|channel|mobile|
|name|topmenu|
|name|Påskenøtter|
|id||
|title||
|target||
|channel|desktop|
|channel|mobile|
|id||
|id|tipus|
|title||
|title|Tips oss|
|title|Tips oss:|
|title|Tips|
|title|Kontakt oss|
|title|Kontakt oss!|
|title|Tips redaksjonen|
|target||
|target|tipemail|
|target|tipsms|
|target|tiplink|
|target|tiptlf|
|channel|mobile|
|id||
|id|follow|
|title||
|title|Følg oss|
|title|Følg oss!|
|title|Følg oss på:|
|name|Følg oss på Facebook|
|name|Følg oss på Instagram|
|name|twitter|
|name|instagram|
|name|facebook|
|name|Snapchat|
|name|Twitter|
|name|Podkast|
|name|Facebook|
|name|Instagram|
|target||
|target|twitter|
|target|instagram|
|target|facebook|
|alt||
|alt|Julekalender 2017|
|alt|Les meir|
|alt|Les mer|
|id|noaccess|
|id|access|
|id|unknown|
|id||
|id|share|
|title||
|title|Del|
|title|Del med oss|
|target||
|target|videoupload|
|target|sendgreet|
|target|writeletter|
|target|uploadimage|
|target|addevent|

<h2 id="tocS_Publication">Publication</h2>
<!-- backwards compatibility -->
<a id="schemapublication"></a>
<a id="schema_Publication"></a>
<a id="tocSpublication"></a>
<a id="tocspublication"></a>

```json
{
  "ece5PublicationName": "string",
  "ece5AcpPubKey": 0,
  "domainAliases": "string",
  "cms": "-",
  "medusaFlag": 0,
  "ece5BackendKey": "string",
  "escenic": true,
  "displayName": "string",
  "mobDomain": "string",
  "nedstatCode": "string",
  "id": -3309294,
  "fullDisplayName": "string",
  "name": "string",
  "apayEnabled": true,
  "escenicFlag": 0,
  "wwwDomain": "string",
  "medusa": true
}
```

info about publication

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ece5PublicationName|string¦null|true|none|Possible enum ignored, as sample data included 121 distinct values on 2021-02-16.|
|ece5AcpPubKey|integer|true|none|Minimum and maximum constraints derived from sample data on 2021-02-16.|
|domainAliases|string¦null|true|none|Possible enum ignored, as sample data included 16 distinct values on 2021-02-16.|
|cms|string|true|none|Enum derived from sample data on 2021-02-16.|
|medusaFlag|integer|true|none|Minimum and maximum constraints derived from sample data on 2021-02-16.|
|ece5BackendKey|string¦null|true|none|Possible enum ignored, as sample data included 121 distinct values on 2021-02-16.|
|escenic|boolean|true|none|none|
|displayName|string|true|none|Possible enum ignored, as sample data included 202 distinct values on 2021-02-16.|
|mobDomain|string|true|none|Possible enum ignored, as sample data included 138 distinct values on 2021-02-16.|
|nedstatCode|string|true|none|Possible enum ignored, as sample data included 166 distinct values on 2021-02-16.|
|id|integer|true|none|Minimum and maximum constraints derived from sample data on 2021-02-16.|
|fullDisplayName|string|true|none|Possible enum ignored, as sample data included 208 distinct values on 2021-02-16.|
|name|string|true|none|Possible enum ignored, as sample data included 210 distinct values on 2021-02-16.|
|apayEnabled|boolean|true|none|none|
|escenicFlag|integer|true|none|Minimum and maximum constraints derived from sample data on 2021-02-16.|
|wwwDomain|string|true|none|Possible enum ignored, as sample data included 210 distinct values on 2021-02-16.|
|medusa|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|cms|-|
|cms|ece5|

<h2 id="tocS_PublicationsResponse">PublicationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicationsresponse"></a>
<a id="schema_PublicationsResponse"></a>
<a id="tocSpublicationsresponse"></a>
<a id="tocspublicationsresponse"></a>

```json
[
  {
    "ece5PublicationName": "string",
    "ece5AcpPubKey": 0,
    "domainAliases": "string",
    "cms": "-",
    "medusaFlag": 0,
    "ece5BackendKey": "string",
    "escenic": true,
    "displayName": "string",
    "mobDomain": "string",
    "nedstatCode": "string",
    "id": -3309294,
    "fullDisplayName": "string",
    "name": "string",
    "apayEnabled": true,
    "escenicFlag": 0,
    "wwwDomain": "string",
    "medusa": true
  }
]
```

array of all publications

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Publication](#schemapublication)]|false|none|array of all publications|

<h2 id="tocS_SiteconfigResponse">SiteconfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemasiteconfigresponse"></a>
<a id="schema_SiteconfigResponse"></a>
<a id="tocSsiteconfigresponse"></a>
<a id="tocssiteconfigresponse"></a>

```json
[
  {
    "id": 0,
    "key": "string",
    "status": "active",
    "locale": "nb",
    "tags": [
      "string"
    ],
    "name": {
      "short": "string",
      "full": "string"
    },
    "domains": {
      "main": "string",
      "aliases": [
        "string"
      ]
    },
    "config": {
      "design": "default",
      "premium_design": "default",
      "cms": {
        "frontpageSource": {
          "desktop": "string",
          "mobile": "string"
        },
        "sectionSource": "string",
        "metadataBackend": "acpsanity"
      },
      "dredition": {
        "frontId": "string",
        "editorialGroup": "string"
      },
      "escenic": {
        "publicationName": "string",
        "acpPubKey": 0,
        "backendKey": "string"
      },
      "analytics": {
        "a_virtual": "string",
        "site_groups": [
          {
            "benchmark_groups": [
              "string"
            ],
            "group_key": "string",
            "main_group": true,
            "sites": [
              "string"
            ]
          }
        ],
        "class": "VEI0",
        "region": "Nidaros",
        "amedia_owned": true,
        "local_newspaper": true
      },
      "title_info": {
        "title_code": "string",
        "participates_in_plussalt": true,
        "sites": [
          "string"
        ]
      },
      "aid": {
        "enabled": true
      },
      "linpro": {
        "monitored": true
      },
      "feature": {
        "churn": "ab"
      },
      "secrets": {
        "flowplayer": {
          "apiKey": "string",
          "siteId": "string"
        },
        "sms": {
          "linkMobilityAccount": {
            "platformId": "string",
            "platformPartnerId": "string",
            "username": "string",
            "password": "string",
            "type": "string"
          }
        },
        "nets": {
          "md5_k1": "string",
          "md5_k2": "string"
        },
        "vipps": {
          "client_secret": "string",
          "subscription_key": "string"
        }
      },
      "visiolink": {
        "identifier": "string"
      },
      "sms": {
        "gateway": "string"
      },
      "varnish": {
        "default_backend": "string",
        "force_https": true
      },
      "ssl": {
        "dnsWildcard": [
          "string"
        ],
        "httpHost": [
          "string"
        ],
        "edges": [
          "string"
        ]
      },
      "subscription_system": {
        "type": "string",
        "instance": "string",
        "title_code": "string",
        "locked": true,
        "aria_golive_date": "string",
        "nets_params": {
          "account_number": "string",
          "setup_code": "string",
          "merchant_id": "string",
          "issuer_id": "string"
        },
        "vipps_params": {
          "client_id": "string"
        }
      },
      "apps": {
        "nyhetsappen": {
          "newspaperId": "string",
          "ios": {
            "appId": "string"
          },
          "android": {
            "appId": "string"
          }
        }
      },
      "webforwards": {
        "property1": {
          "url": "string",
          "http_code": 301
        },
        "property2": {
          "url": "string",
          "http_code": 301
        }
      },
      "gsuite": {
        "orgunit": "string",
        "group": "string"
      },
      "recommendations": {
        "engineV1": {
          "kind": "DataTopListWithHashes",
          "position": 0,
          "disabled": true
        },
        "engineSublistV1": {
          "kind": "DataTopListWithHashes",
          "disabled": true,
          "size": 0
        },
        "contentmarketing": {
          "kind": "DataTopListWithHashes",
          "position": 0,
          "disabled": true
        },
        "consumermarketing": {
          "kind": "DataTopListWithHashes",
          "position": 0,
          "disabled": true
        }
      },
      "chat": {
        "orgId": "string",
        "orgName": "string",
        "queueName": "string"
      }
    }
  }
]
```

array of all siteconfig objects in amedia

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|key|string|true|none|none|
|status|string|true|none|none|
|locale|string|true|none|none|
|tags|[string]|true|none|none|
|name|object|true|none|none|
|» short|string|true|none|none|
|» full|string|true|none|none|
|domains|object|true|none|none|
|» main|string|true|none|none|
|» aliases|[string]|false|none|none|
|config|object|true|none|none|
|» design|string|true|none|none|
|» premium_design|string|false|none|none|
|» cms|object|false|none|none|
|»» frontpageSource|object|true|none|none|
|»»» desktop|string|true|none|none|
|»»» mobile|string|true|none|none|
|»» sectionSource|string|false|none|none|
|»» metadataBackend|string|false|none|none|
|» dredition|object|false|none|none|
|»» frontId|string|true|none|none|
|»» editorialGroup|string|true|none|none|
|» escenic|object|false|none|none|
|»» publicationName|string|true|none|none|
|»» acpPubKey|integer|true|none|none|
|»» backendKey|string|true|none|none|
|» analytics|object|true|none|none|
|»» a_virtual|string|true|none|none|
|»» site_groups|[object]|false|none|none|
|»»» benchmark_groups|[string]|false|none|none|
|»»» group_key|string|false|none|none|
|»»» main_group|boolean|false|none|none|
|»»» sites|[string]|false|none|none|
|»» class|string¦null|false|none|none|
|»» region|string|false|none|none|
|»» amedia_owned|boolean|false|none|none|
|»» local_newspaper|boolean|false|none|none|
|» title_info|object|false|none|none|
|»» title_code|string|true|none|none|
|»» participates_in_plussalt|boolean|false|none|none|
|»» sites|[string]|true|none|none|
|» aid|object|true|none|none|
|»» enabled|boolean|true|none|none|
|» linpro|object|true|none|none|
|»» monitored|boolean|true|none|none|
|» feature|object|false|none|none|
|»» churn|string|true|none|none|
|» secrets|object|false|none|none|
|»» flowplayer|object|false|none|none|
|»»» apiKey|string|true|none|none|
|»»» siteId|string|true|none|none|
|»» sms|object|false|none|none|
|»»» linkMobilityAccount|object|false|none|none|
|»»»» platformId|string|true|none|none|
|»»»» platformPartnerId|string|true|none|none|
|»»»» username|string|true|none|none|
|»»»» password|string|true|none|none|
|»»»» type|string|true|none|none|
|»» nets|object|false|none|none|
|»»» md5_k1|string|true|none|none|
|»»» md5_k2|string|true|none|none|
|»» vipps|object|false|none|none|
|»»» client_secret|string|true|none|none|
|»»» subscription_key|string|true|none|none|
|» visiolink|object|false|none|none|
|»» identifier|string|false|none|none|
|» sms|object|false|none|none|
|»» gateway|string|false|none|none|
|» varnish|object|false|none|none|
|»» default_backend|string|false|none|none|
|»» force_https|boolean|false|none|none|
|» ssl|object|false|none|none|
|»» dnsWildcard|[string]|false|none|none|
|»» httpHost|[string]|false|none|none|
|»» edges|[string]|true|none|none|
|» subscription_system|object|false|none|none|
|»» type|string|false|none|none|
|»» instance|string|false|none|none|
|»» title_code|string|false|none|none|
|»» locked|boolean|false|none|none|
|»» aria_golive_date|string|false|none|none|
|»» nets_params|object|false|none|none|
|»»» account_number|string|false|none|none|
|»»» setup_code|string|false|none|none|
|»»» merchant_id|string|false|none|none|
|»»» issuer_id|string|false|none|none|
|»» vipps_params|object|false|none|none|
|»»» client_id|string|true|none|none|
|» apps|object|false|none|none|
|»» nyhetsappen|object|false|none|none|
|»»» newspaperId|string|true|none|none|
|»»» ios|object|false|none|none|
|»»»» appId|string|true|none|none|
|»»» android|object|false|none|none|
|»»»» appId|string|true|none|none|
|» webforwards|object|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|»»» url|string|true|none|Possible enum ignored, as sample data included 13 distinct values on 2021-02-16.|
|»»» http_code|integer|true|none|Minimum and maximum constraints derived from sample data on 2021-02-16.|
|» gsuite|object|false|none|none|
|»» orgunit|string|true|none|none|
|»» group|string|false|none|none|
|» recommendations|object|false|none|none|
|»» engineV1|object|false|none|none|
|»»» kind|string|true|none|none|
|»»» position|integer|true|none|none|
|»»» disabled|boolean|false|none|none|
|»» engineSublistV1|object|false|none|none|
|»»» kind|string|true|none|none|
|»»» disabled|boolean|false|none|none|
|»»» size|integer|true|none|none|
|»» contentmarketing|any|false|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|[SiteconfigResponse/items/properties/config/properties/recommendations/properties/engineV1](#schemasiteconfigresponse/items/properties/config/properties/recommendations/properties/enginev1)|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|object|false|none|none|
|»»»» position|integer|true|none|none|
|»»»» disabled|boolean|false|none|none|
|»»»» teaserId|string|true|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» consumermarketing|any|false|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|[SiteconfigResponse/items/properties/config/properties/recommendations/properties/engineV1](#schemasiteconfigresponse/items/properties/config/properties/recommendations/properties/enginev1)|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|[SiteconfigResponse/items/properties/config/properties/recommendations/properties/contentmarketing/oneOf/1](#schemasiteconfigresponse/items/properties/config/properties/recommendations/properties/contentmarketing/oneof/1)|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» chat|object|false|none|none|
|»» orgId|string|true|none|none|
|»» orgName|string|true|none|none|
|»» queueName|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|locale|nb|
|locale|nn|
|design|default|
|design|nettavisen|
|premium_design|default|
|premium_design|nettavisen|
|metadataBackend|acpsanity|
|metadataBackend|cloudordino|
|class|VEI0|
|class|VEI1|
|class|VEI2|
|class|VEI3|
|class|VEI4|
|class|VEI5|
|region|Nidaros|
|region|Vest|
|region|Buskerud-Vestfold|
|region|Haugalandet|
|region|Nord|
|region|Telemark-Agder|
|region|Midt-Norge|
|region|Romerike-Innlandet|
|region|Follo-Østfold|
|region|Nordsjø|
|region|Nasjonal|
|region|Test|
|churn|ab|
|churn|off|
|kind|DataTopListWithHashes|
|kind|DataTopListWithHashes|

<h2 id="tocS_PropertyListResponse">PropertyListResponse</h2>
<!-- backwards compatibility -->
<a id="schemapropertylistresponse"></a>
<a id="schema_PropertyListResponse"></a>
<a id="tocSpropertylistresponse"></a>
<a id="tocspropertylistresponse"></a>

```json
[
  {
    "value": "string",
    "name": "string",
    "medusa": true,
    "overridable": true
  }
]
```

A list of property names and values

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SinglePropertyResponse](#schemasinglepropertyresponse)]|false|none|A list of property names and values|

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