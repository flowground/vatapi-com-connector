# ![LOGO](logo.png) VAT API **flow**ground Connector

## Description

A generated **flow**ground connector for the VAT API API (version 1).

Generated from: https://api.apis.guru/v2/specs/vatapi.com/1/swagger.json<br/>
Generated at: 2019-06-06T16:13:16+03:00

## API Description

A developer friendly API to help your business achieve VAT compliance

## Authorization

Supported authorization schemes:
- API Key
## Actions

### Retrieve a countries VAT rates by its 2 digit country code

*Tags:* `api`

#### Input Parameters
* `Response-Type` - _optional_ - The default response type is application/json if you would like to receive an XML response then set this to XML
* `code` - _required_ - The 2 digit country code

### Convert a currency

*Tags:* `api`

#### Input Parameters
* `Response-Type` - _optional_ - The default response type is application/json if you would like to receive an XML response then set this to XML
* `currency_from` - _required_ - The currency code you are converting from
* `currency_to` - _required_ - The currency code you are converting to
* `amount` - _optional_ - Optional, an amount you are wanting to convert. Leave blank to just get the current rate

### Create a VAT invoice

*Tags:* `api`

#### Input Parameters
* `Response-Type` - _optional_ - The default response type is application/json if you would like to receive an XML response then set this to XML

### Delete an invoice

*Tags:* `api`

#### Input Parameters
* `Response-Type` - _optional_ - The default response type is application/json if you would like to receive an XML response then set this to XML
* `id` - _required_ - Enter an invoice id

### Retrieve an invoice

*Tags:* `api`

#### Input Parameters
* `Response-Type` - _optional_ - The default response type is application/json if you would like to receive an XML response then set this to XML
* `id` - _required_ - Enter the invoice id

### Update an existing invoice

*Tags:* `api`

#### Input Parameters
* `Response-Type` - _optional_ - The default response type is application/json if you would like to receive an XML response then set this to XML
* `id` - _required_ - Enter an invoice id

### Retrieve a countries VAT rates from an IP address

*Tags:* `api`

#### Input Parameters
* `Response-Type` - _optional_ - The default response type is application/json if you would like to receive an XML response then set this to XML
* `address` - _required_ - The IP address to search against

### Check api requests remaining on current subscription plan

*Tags:* `api`

#### Input Parameters
* `Response-Type` - _optional_ - The default response type is application/json if you would like to receive an XML response then set this to XML

### Validate a VAT number

> <p>We highly recommend if you are able, to check a VAT number on your end first to save wasted API lookups. It maybe that your customer has simply entered the wrong format. <a href='http://www.braemoor.co.uk/software/vat.shtml' target='_blank'>Heres a client side way to check the format using Javascript</a></p>

*Tags:* `api`

#### Input Parameters
* `Response-Type` - _optional_ - The default response type is application/json if you would like to receive an XML response then set this to XML
* `vatid` - _required_ - The VAT number to validate

### Convert a price to or from VAT price.

*Tags:* `api`

#### Input Parameters
* `Response-Type` - _optional_ - The default response type is application/json if you would like to receive an XML response then set this to XML
* `code` - _required_ - The 2 digit country code
* `country_rate` - _optional_ - The VAT rate to get the price for. Default: standard
* `price` - _required_ - The price you want converting
* `type` - _optional_ - Optional, if the price is including VAT set the type to 'incl'. Otherwise the default is assumed as excluding VAT already, 'excl'

### Retrieve all current EU VAT rates

*Tags:* `api`

#### Input Parameters
* `Response-Type` - _optional_ - The default response type is application/json if you would like to receive an XML response then set this to XML

## License

**flow**ground :- Telekom iPaaS / vatapi-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
